// Testa o snippet Zane Night sobre páginas reais da loja (salvas em test/fixtures).
//   node build.mjs && node test/run.mjs
// Requer o Playwright instalado (global ou local).
import http from 'node:http';
import { readFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
let chromium, devices;
try { ({ chromium, devices } = require('playwright')); } catch {
  const { execSync } = await import('node:child_process');
  const globalRoot = execSync('npm root -g').toString().trim();
  ({ chromium, devices } = require(join(globalRoot, 'playwright')));
}

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const shots = join(root, 'test', 'screenshots');
mkdirSync(shots, { recursive: true });

const routes = {
  '/': 'home.html',
  '/produtos/nike-air-max-plus-killer-whale/': 'produto-tenis.html',
  '/produtos/real-madrid-home-25-26-fjz5h/': 'produto-camisa.html',
  '/pronta-entrega1/air-max-tn/': 'categoria.html',
  '/search/': 'busca.html'
};

let snippet = readFileSync(join(root, 'dist/zane-snippet.html'), 'utf8');
const dropEnd = new Date(Date.now() + 3 * 86400000).toISOString();

const server = http.createServer((req, res) => {
  const url = new URL(req.url, 'http://localhost');
  const file = routes[url.pathname];
  if (!file) { res.writeHead(404); res.end(); return; }
  let html = readFileSync(join(root, 'test/fixtures', file), 'utf8');
  let snip = snippet;
  if (url.searchParams.has('drop')) snip = snip.replace("endsAt: ''", `endsAt: '${dropEnd}'`);
  html = html.replace(/<\/body>/i, () => snip + '</body>'); // função: evita que $$ vire $
  res.writeHead(200, { 'content-type': 'text/html; charset=utf-8' });
  res.end(html);
});
await new Promise((r) => server.listen(0, r));
const base = `http://localhost:${server.address().port}`;

const browser = await chromium.launch();
let failures = 0;
const results = [];
function check(name, cond, detail = '') {
  results.push(`${cond ? '✔' : '✘'} ${name}${detail ? ' (' + detail + ')' : ''}`);
  if (!cond) failures++;
}

async function open(ctx, path) {
  const page = await ctx.newPage();
  const warnings = [];
  page.on('console', (m) => { if (m.text().includes('[Zane]')) warnings.push(m.text()); });
  page.on('pageerror', (e) => warnings.push(String(e)));
  // bloqueia tudo que não é a página local (CDNs, fontes, analytics)
  await page.route('**/*', (r) => (r.request().url().startsWith(base) ? r.continue() : r.abort()));
  // simula o comportamento do tema: tocar numa variação marca como selecionada
  await page.addInitScript(() => document.addEventListener('click', (e) => {
    const v = e.target.closest && e.target.closest('.js-insta-variant');
    if (!v) return;
    v.parentNode.querySelectorAll('.js-insta-variant').forEach((x) => x.classList.toggle('selected', x === v));
  }));
  await page.goto(base + path, { waitUntil: 'load' });
  await page.waitForTimeout(500);
  return { page, warnings };
}

for (const [label, opts] of [['desktop', { viewport: { width: 1440, height: 900 } }], ['mobile', { ...devices['iPhone 13'] }]]) {
  const ctx = await browser.newContext({ ...opts, locale: 'pt-BR' });

  // ---------- HOME ----------
  {
    const { page, warnings } = await open(ctx, '/');
    const r = await page.evaluate(() => ({
      trust: document.querySelectorAll('.zn-trust-item').length,
      chips: document.querySelectorAll('.zn-chip').length,
      sizes: document.querySelectorAll('.zn-size-chip').length,
      cards: document.querySelectorAll('.js-item-product[data-product-id]:not([data-product-id=""])').length,
      hearts: document.querySelectorAll('.js-item-product .zn-heart').length,
      gifts: document.querySelectorAll('.zn-gift-badge').length,
      wishBtn: !!document.querySelector('.zn-wish-open'),
      sizeAfterBanner: document.querySelector('[data-store="home-banner-featured"]')?.nextElementSibling?.classList.contains('zn-size'),
      drop: !!document.querySelector('.zn-drop')
    }));
    check(`[${label}] home: faixa de benefícios`, r.trust === 4, r.trust);
    check(`[${label}] home: atalhos de categoria`, r.chips >= 10, r.chips);
    check(`[${label}] home: "Qual seu número?" logo após o banner`, r.sizes === 11 && r.sizeAfterBanner, `${r.sizes} chips`);
    check(`[${label}] home: coração em todos os cards`, r.hearts === r.cards && r.cards > 0, `${r.hearts}/${r.cards}`);
    check(`[${label}] home: selo de perfume só nos tênis com brinde`, r.gifts > 0 && r.gifts < r.cards, r.gifts);
    check(`[${label}] home: botão Minha Zane no header`, r.wishBtn);
    check(`[${label}] home: sem drop quando endsAt está vazio`, !r.drop);

    // estabilidade: a página não pode ficar em laço de mutações
    const muts = await page.evaluate(() => new Promise((res) => {
      let n = 0;
      const mo = new MutationObserver((m) => { n += m.length; });
      mo.observe(document.body, { childList: true, subtree: true, attributes: true });
      setTimeout(() => { mo.disconnect(); res(n); }, 1500);
    }));
    check(`[${label}] home: sem laço de mutações em repouso`, muts < 20, `${muts} mutações em 1,5s`);

    // wishlist: salvar, contar, abrir gaveta, WhatsApp
    await page.locator('.js-item-product .zn-heart').first().click({ force: true });
    await page.locator('.js-item-product .zn-heart').nth(13).click({ force: true });
    const w = await page.evaluate(() => ({
      stored: JSON.parse(localStorage.getItem('zane:wishlist') || '[]'),
      count: document.querySelector('.zn-wish-count')?.textContent,
      on: document.querySelectorAll('.zn-heart.is-on').length
    }));
    check(`[${label}] wishlist: salva 2 produtos`, w.stored.length === 2 && w.count === '2', `contador ${w.count}`);
    check(`[${label}] wishlist: dados completos`, w.stored.every((p) => p.id && p.name && p.url.includes('/produtos/') && p.img.startsWith('https://') && p.price.startsWith('R$')), JSON.stringify(w.stored[0]).slice(0, 120));
    await page.click('.zn-wish-open', { force: true });
    await page.waitForTimeout(350);
    const dr = await page.evaluate(() => ({
      open: document.querySelector('.zn-drawer')?.classList.contains('is-open'),
      items: document.querySelectorAll('.zn-wish-item').length,
      wa: document.querySelector('.zn-drawer-actions a[href^="https://wa.me/5511976150823"]')?.getAttribute('href') || ''
    }));
    check(`[${label}] gaveta Minha Zane abre com 2 itens`, dr.open && dr.items === 2);
    check(`[${label}] gaveta: link do WhatsApp com a lista`, decodeURIComponent(dr.wa).includes('/produtos/'));
    await page.screenshot({ path: join(shots, `${label}-home-gaveta.png`) });
    await page.click('.zn-wish-remove', { force: true });
    const after = await page.evaluate(() => JSON.parse(localStorage.getItem('zane:wishlist')).length);
    check(`[${label}] gaveta: remover item`, after === 1);
    await page.keyboard.press('Escape');
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.screenshot({ path: join(shots, `${label}-home-topo.png`) });
    check(`[${label}] home: nenhum recurso falhou`, warnings.length === 0, warnings.join(' | '));
    await page.close();
  }

  // ---------- PRODUTO (tênis com brinde) ----------
  {
    const pre = await ctx.newPage();
    await pre.route('**/*', (r) => (r.request().url().startsWith(base) ? r.continue() : r.abort()));
    await pre.goto(base + '/search/');
    await pre.evaluate(() => localStorage.setItem('zane:size', '"42"'));
    await pre.close();

    const { page, warnings } = await open(ctx, '/produtos/nike-air-max-plus-killer-whale/');
    const r = await page.evaluate(() => ({
      actions: document.querySelectorAll('.zn-product-actions button').length,
      giftGroup: !!document.querySelector('#product_form .zn-gift-group .zn-gift-head'),
      info: [...document.querySelectorAll('.zn-info summary')].map((s) => s.textContent),
      kit: [...document.querySelectorAll('.zn-kit .zn-mini-name')].map((s) => s.textContent),
      kitBeforeRelated: document.querySelector('.zn-kit')?.nextElementSibling?.id === 'related-products',
      sticky: !!document.querySelector('.zn-sticky'),
      recent: JSON.parse(localStorage.getItem('zane:recent') || '[]'),
      note: document.querySelector('.zn-size-note')?.textContent || '',
      formIntact: document.querySelector('#product_form input[name="add_to_cart"]')?.value === '237798649'
    }));
    check(`[${label}] produto: botões Salvar + Story`, r.actions === 2, r.actions);
    check(`[${label}] produto: bloco de perfume brinde`, r.giftGroup);
    check(`[${label}] produto: abas Numeração/Envio/Trocas`, r.info.join('|') === 'Numeração|Envio e prazo|Trocas e cancelamento', r.info.join('|'));
    check(`[${label}] produto: "Complete o kit" com camisas antes dos similares`, r.kit.length === 4 && r.kit.every((n) => /Home|Away/.test(n)) && r.kitBeforeRelated, r.kit.join(', '));
    check(`[${label}] produto: registra em vistos recentemente`, r.recent[0]?.id === '237798649' && r.recent[0].img.startsWith('https://'), r.recent[0]?.name);
    check(`[${label}] produto: pré-seleciona o número salvo`, r.note.includes('42'), r.note);
    check(`[${label}] produto: formulário de compra intacto`, r.formIntact);
    check(`[${label}] produto: barra fixa criada`, r.sticky);
    if (label === 'mobile') {
      await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight / 2));
      await page.waitForTimeout(500);
      const on = await page.evaluate(() => document.querySelector('.zn-sticky').classList.contains('is-on'));
      check(`[mobile] produto: barra fixa aparece ao rolar`, on);
      await page.screenshot({ path: join(shots, `mobile-produto-rolado.png`) });
      await page.evaluate(() => window.scrollTo(0, 0));
    }
    // story: gera a imagem (a foto é bloqueada no teste, então valida o fallback sem foto)
    const story = await page.evaluate(async () => {
      const orig = HTMLAnchorElement.prototype.click;
      let downloaded = null;
      HTMLAnchorElement.prototype.click = function () { if (this.download) downloaded = this.download; else orig.call(this); };
      navigator.canShare = undefined;
      document.querySelectorAll('.zn-product-actions .zn-action')[0].click();
      await new Promise((r) => setTimeout(r, 1500));
      HTMLAnchorElement.prototype.click = orig;
      return downloaded;
    });
    check(`[${label}] produto: gera imagem do story`, story === 'zane-story.png', story);
    await page.screenshot({ path: join(shots, `${label}-produto-topo.png`) });
    const info = page.locator('.zn-info');
    await info.scrollIntoViewIfNeeded();
    await page.screenshot({ path: join(shots, `${label}-produto-info.png`) });
    await page.locator('.zn-kit').scrollIntoViewIfNeeded();
    await page.screenshot({ path: join(shots, `${label}-produto-kit.png`) });
    check(`[${label}] produto: nenhum recurso falhou`, warnings.length === 0, warnings.join(' | '));
    await page.close();
  }

  // ---------- PRODUTO (camisa) ----------
  {
    const { page, warnings } = await open(ctx, '/produtos/real-madrid-home-25-26-fjz5h/');
    const r = await page.evaluate(() => ({
      gift: !!document.querySelector('.zn-gift-group'),
      info: [...document.querySelectorAll('.zn-info summary')].map((s) => s.textContent),
      kit: [...document.querySelectorAll('.zn-kit .zn-mini-name')].map((s) => s.textContent),
      selfInKit: [...document.querySelectorAll('.zn-kit a')].some((a) => a.getAttribute('href') === location.pathname),
      recent: [...document.querySelectorAll('.zn-recent .zn-mini-name')].map((s) => s.textContent)
    }));
    check(`[${label}] camisa: sem bloco de brinde`, !r.gift);
    check(`[${label}] camisa: abas Medidas/Envio/Trocas`, r.info[0] === 'Medidas' && r.info.length === 3, r.info.join('|'));
    check(`[${label}] camisa: "Complete o kit" com tênis`, r.kit.length === 4 && r.kit.every((n) => /Air Max|New Balance/.test(n)) && !r.selfInKit, r.kit.join(', '));
    check(`[${label}] camisa: mostra o tênis visto antes`, r.recent.includes('Air Max Plus Killer Whale'), r.recent.join(', '));
    check(`[${label}] camisa: nenhum recurso falhou`, warnings.length === 0, warnings.join(' | '));
    await page.close();
  }

  // ---------- CATEGORIA de tênis ----------
  {
    const { page, warnings } = await open(ctx, '/pronta-entrega1/air-max-tn/?Tamanho=40');
    const r = await page.evaluate(() => ({
      size: !!document.querySelector('.zn-size'),
      active: document.querySelector('.zn-size-chip.is-active')?.textContent,
      href42: [...document.querySelectorAll('.zn-size-chip')].find((a) => a.textContent === '42')?.getAttribute('href'),
      chip: document.querySelector('.zn-chip.is-active')?.textContent,
      hearts: document.querySelectorAll('.js-item-product .zn-heart').length,
      cards: document.querySelectorAll('.js-item-product[data-product-id]:not([data-product-id=""])').length
    }));
    check(`[${label}] categoria: "Qual seu número?" marca o tamanho do filtro`, r.size && r.active === '40', r.active);
    check(`[${label}] categoria: link de tamanho usa o filtro nativo`, r.href42 === '/pronta-entrega1/air-max-tn/?Tamanho=42', r.href42);
    check(`[${label}] categoria: atalho ativo = TN`, r.chip === 'TN', r.chip);
    check(`[${label}] categoria: corações nos cards`, r.hearts === r.cards && r.cards > 0, `${r.hearts}/${r.cards}`);
    // cards carregados depois ("Ver mais produtos") também recebem coração
    await page.evaluate(() => {
      const card = document.querySelector('.js-item-product').cloneNode(true);
      card.removeAttribute('data-zn');
      card.querySelectorAll('.zn-heart,.zn-gift-badge').forEach((n) => n.remove());
      card.setAttribute('data-product-id', '999');
      document.querySelector('.js-item-product').parentNode.appendChild(card);
    });
    await page.waitForTimeout(400);
    const late = await page.evaluate(() => !!document.querySelector('.js-item-product[data-product-id="999"] .zn-heart'));
    check(`[${label}] categoria: cards novos recebem coração`, late);
    await page.screenshot({ path: join(shots, `${label}-categoria.png`) });
    check(`[${label}] categoria: nenhum recurso falhou`, warnings.length === 0, warnings.join(' | '));
    await page.close();
  }

  // ---------- BUSCA ----------
  {
    const { page, warnings } = await open(ctx, '/search/?q=tn');
    const r = await page.evaluate(() => ({
      size: !!document.querySelector('.zn-size'),
      hearts: document.querySelectorAll('.js-item-product .zn-heart').length
    }));
    check(`[${label}] busca: corações, sem seletor de número`, r.hearts > 0 && !r.size, r.hearts);
    check(`[${label}] busca: nenhum recurso falhou`, warnings.length === 0, warnings.join(' | '));
    await page.close();
  }

  // ---------- DROP ----------
  {
    const { page, warnings } = await open(ctx, '/?drop=1');
    const r = await page.evaluate(() => ({
      drop: !!document.querySelector('.zn-drop'),
      days: document.querySelector('.zn-drop-unit strong')?.textContent
    }));
    check(`[${label}] drop: contagem regressiva aparece com data futura`, r.drop && /^0[23]$/.test(r.days), r.days);
    await page.locator('.zn-drop').scrollIntoViewIfNeeded();
    await page.screenshot({ path: join(shots, `${label}-home-drop.png`) });
    check(`[${label}] drop: nenhum recurso falhou`, warnings.length === 0, warnings.join(' | '));
    await page.close();
  }

  await ctx.close();
}

await browser.close();
server.close();
console.log(results.join('\n'));
console.log(failures ? `\n${failures} falha(s)` : `\nTodos os ${results.length} testes passaram`);
process.exit(failures ? 1 : 0);
