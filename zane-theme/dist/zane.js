/* Zane Night · gerado por build.mjs em 2026-10-03 */
/*
 * Zane Night: configuração editável.
 * Tudo que é texto, link ou produto fica aqui. A lógica fica em zane.js.
 * Para desligar um recurso, troque `true` por `false` em `features`.
 */
window.ZANE_CONFIG = window.ZANE_CONFIG || {
  whatsapp: '5511976150823',
  instagram: '@tnsdozane',

  features: {
    trustBar: true,        // faixa de benefícios abaixo do header
    categoryChips: true,   // atalhos de categoria roláveis
    sizePicker: true,      // "Qual seu número?"
    sizePreselect: true,   // na página do produto, já seleciona o número salvo
    giftBadge: true,       // selo "+ Perfume" e bloco de brinde no produto
    wishlist: true,        // ❤ Minha Zane
    recentlyViewed: true,  // vistos recentemente
    completeKit: true,     // "Complete o kit" (tênis ↔ camisa)
    productInfo: true,     // abas: numeração, envio, trocas
    stickyBuy: true,       // barra "Comprar" fixa no celular
    storyShare: true,      // gerar imagem para story
    drop: true             // contagem regressiva (só aparece se drop.endsAt estiver no futuro)
  },

  trustBar: [
    { icon: 'bolt', text: 'Pronta entrega' },
    { icon: 'pix', text: '5% off no Pix' },
    { icon: 'card', text: 'Até 12x no cartão' },
    { icon: 'gift', text: 'Perfume de brinde nos tênis selecionados' }
  ],

  categoryChips: [
    { label: 'Todos os tênis', url: '/pronta-entrega1/' },
    { label: 'TN', url: '/pronta-entrega1/air-max-tn/' },
    { label: 'TN 3', url: '/pronta-entrega1/air-max-tn-3/' },
    { label: '95', url: '/pronta-entrega1/air-max-951/' },
    { label: 'DN', url: '/pronta-entrega1/air-max-dn1/' },
    { label: 'DN 8', url: '/pronta-entrega1/air-max-dn-8/' },
    { label: 'Shox', url: '/pronta-entrega1/nike-r12/' },
    { label: 'New Balance', url: '/pronta-entrega1/new-balance1/' },
    { label: 'Slides', url: '/slides/' },
    { label: 'Camisas 25/26', url: '/roupas/' },
    { label: 'Brasileirão', url: '/roupas/brasileirao/' },
    { label: 'Premier League', url: '/roupas/premier-league/' }
  ],

  sizes: {
    shoes: ['34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44'],
    shoesCategoryUrl: '/pronta-entrega1/'
  },

  // Lançamento com contagem regressiva. Deixe endsAt vazio para esconder.
  // Exemplo: endsAt: '2026-10-10T20:00:00-03:00'
  drop: {
    endsAt: '',
    eyebrow: 'Drop da semana',
    title: 'Novo drop chegando',
    text: 'Quantidade limitada, pronta entrega.',
    cta: 'Ver o drop',
    url: '/produtos/'
  },

  // "Complete o kit": produtos sugeridos (troque à vontade).
  // Na página de um tênis aparecem as camisas; na de uma camisa, os tênis.
  kit: {
    title: 'Complete o kit',
    subtitle: 'O tênis e a camisa que fecham o visual.',
    camisas: [
      { name: 'Real Madrid - Home 25/26', url: '/produtos/real-madrid-home-25-26-fjz5h/', img: 'https://acdn-us.mitiendanube.com/stores/005/367/599/products/chatgpt-image-29-de-abr-de-2026-19_22_45-50d101937632dabf3117775630049016-480-0.webp' },
      { name: 'Paris Saint Germain - Home 25/26', url: '/produtos/paris-saint-germain-home-25-26-t39cl/', img: 'https://acdn-us.mitiendanube.com/stores/005/367/599/products/chatgpt-image-29-de-abr-de-2026-17_37_48-3da1b1c8fbce00bc7a17775633411774-480-0.webp' },
      { name: 'Bayern de Munique - Home 25/26', url: '/produtos/bayern-de-munique-home-25-26-n3mus/', img: 'https://acdn-us.mitiendanube.com/stores/005/367/599/products/chatgpt-image-29-de-abr-de-2026-17_47_43-66ccb228dfb8821e3117775637250284-480-0.webp' },
      { name: 'Corinthians - Home 26', url: '/produtos/corinthians-home-26-5pywp/', img: 'https://acdn-us.mitiendanube.com/stores/005/367/599/products/chatgpt-image-30-de-abr-de-2026-12_55_45-e9c0f1e37ea8fed31317775650663806-480-0.webp' }
    ],
    tenis: [
      { name: 'Air Max Plus Triple Black', url: '/produtos/nike-air-max-plus-triple-black/', img: 'https://acdn-us.mitiendanube.com/stores/005/367/599/products/img_6093-437fb8ffb6533a2e3917772576589136-480-0.webp' },
      { name: 'Air Max DN White', url: '/produtos/air-max-dn-white/', img: 'https://acdn-us.mitiendanube.com/stores/005/367/599/products/img_6021-3e0f051f483cc97bb217772431538931-480-0.webp' },
      { name: 'Air Max 95 OG Neon', url: '/produtos/air-max-95-og-neon-yellow/', img: 'https://acdn-us.mitiendanube.com/stores/005/367/599/products/img_6060-389f275a98fc3b9f7e17772464084873-480-0.webp' },
      { name: 'New Balance 1906R Creme', url: '/produtos/new-balance-1906r-xgf1m/', img: 'https://acdn-us.mitiendanube.com/stores/005/367/599/products/23143cc9-d179-4804-86b6-57874639257a-286e5b758033098da517797610088573-480-0.webp' }
    ]
  },

  // Abas da página de produto. Textos baseados nas páginas Prazos, FAQ e Guia de medidas da loja.
  productInfo: {
    shoes: [
      {
        title: 'Numeração',
        html: '<p>Numeração brasileira padrão. Na dúvida entre dois números, chame no WhatsApp antes de comprar.</p>' +
          '<table class="zn-sizes"><tr><th>BR</th><th>Pé (cm)</th></tr>' +
          '<tr><td>34</td><td>21,6</td></tr><tr><td>35</td><td>22,4</td></tr><tr><td>36</td><td>23,3</td></tr>' +
          '<tr><td>37</td><td>24,0</td></tr><tr><td>38</td><td>24,5</td></tr><tr><td>39</td><td>25,0</td></tr>' +
          '<tr><td>40</td><td>25,3</td></tr><tr><td>41</td><td>26,0</td></tr><tr><td>42</td><td>26,5</td></tr>' +
          '<tr><td>43</td><td>27,0</td></tr></table>' +
          '<p><a href="/guia-de-medidas/">Ver guia de medidas completo</a></p>'
      }
    ],
    shirts: [
      {
        title: 'Medidas',
        html: '<table class="zn-sizes"><tr><th>Tam.</th><th>Largura</th><th>Altura</th></tr>' +
          '<tr><td>P</td><td>51 cm</td><td>69 cm</td></tr><tr><td>M</td><td>53 cm</td><td>71 cm</td></tr>' +
          '<tr><td>G</td><td>55 cm</td><td>73 cm</td></tr><tr><td>GG</td><td>57 cm</td><td>75 cm</td></tr>' +
          '<tr><td>XG</td><td>59 cm</td><td>78 cm</td></tr></table>' +
          '<p><a href="/guia-de-medidas/">Ver guia de medidas completo</a></p>'
      }
    ],
    common: [
      {
        title: 'Envio e prazo',
        html: '<p>Pronta entrega: o pedido é postado em até <strong>2 dias úteis</strong> após a confirmação do pagamento, com código de rastreio.</p>' +
          '<p>Entrega em <strong>1 a 10 dias úteis</strong>, conforme a região. Calcule o frete acima com seu CEP.</p>'
      },
      {
        title: 'Trocas e cancelamento',
        html: '<p>Cancelamento em até 10 horas após a compra. Troca por defeito ou erro no pedido sem custo; troca por escolha (ex.: tamanho) com frete por conta do cliente.</p>' +
          '<p>Compras on-line têm direito de arrependimento em até 7 dias após o recebimento (CDC, art. 49).</p>' +
          '<p><a href="/perguntas-frequentes/">Perguntas frequentes</a></p>'
      }
    ]
  },

  story: {
    tagline: 'Meu próximo par tá chegando',
    footer: 'tnssdozane.lojavirtualnuvem.com.br'
  }
};

/*
 * Zane Night: camada de experiência para o tema Toluca (Nuvemshop).
 *
 * Regras de segurança:
 *  - Só ADICIONA elementos à página. Não intercepta o formulário de compra,
 *    o carrinho nem o checkout, e não altera preços, estoque ou pedidos.
 *  - Cada recurso roda isolado (try/catch). Se um falhar, o resto da loja
 *    e os outros recursos continuam funcionando.
 *  - Dados de wishlist, número e vistos ficam apenas no navegador do cliente.
 */
(function () {
  'use strict';

  if (window.__zaneLoaded) return;
  window.__zaneLoaded = true;

  var C = window.ZANE_CONFIG || {};
  var F = C.features || {};
  var d = document;

  /* ---------- utilidades ---------- */

  function $(sel, root) { return (root || d).querySelector(sel); }
  function $$(sel, root) { return Array.prototype.slice.call((root || d).querySelectorAll(sel)); }

  function el(tag, attrs, children) {
    var node = d.createElement(tag);
    if (attrs) {
      Object.keys(attrs).forEach(function (k) {
        var v = attrs[k];
        if (v === null || v === undefined || v === false) return;
        if (k === 'text') node.textContent = v;
        else if (k === 'html') node.innerHTML = v; // somente conteúdo vindo do config
        else if (k === 'class') node.className = v;
        else if (k.indexOf('on') === 0) node.addEventListener(k.slice(2), v);
        else node.setAttribute(k, v === true ? '' : v);
      });
    }
    (children || []).forEach(function (c) {
      if (c === null || c === undefined) return;
      node.appendChild(typeof c === 'string' ? d.createTextNode(c) : c);
    });
    return node;
  }

  var store = {
    get: function (key, fallback) {
      try {
        var raw = window.localStorage.getItem('zane:' + key);
        return raw === null ? fallback : JSON.parse(raw);
      } catch (e) { return fallback; }
    },
    set: function (key, value) {
      try { window.localStorage.setItem('zane:' + key, JSON.stringify(value)); } catch (e) { /* modo privado */ }
    }
  };

  function run(name, fn) {
    try { fn(); } catch (e) {
      if (window.console && console.warn) console.warn('[Zane] ' + name + ' falhou:', e);
    }
  }

  function clean(text) { return (text || '').replace(/\s+/g, ' ').trim(); }

  function samePath(url) {
    try { return new URL(url, location.href).pathname === location.pathname; } catch (e) { return false; }
  }

  function pickImage(img) {
    if (!img) return '';
    var current = img.currentSrc || img.getAttribute('src') || '';
    if (current && current.indexOf('data:') !== 0 && current.indexOf('empty-placeholder') === -1) return absolutize(current);
    var set = img.getAttribute('data-srcset') || img.getAttribute('srcset') || '';
    var urls = set.split(',').map(function (s) { return s.trim().split(' ')[0]; }).filter(Boolean);
    var best = urls.filter(function (u) { return u.indexOf('-480-') !== -1; })[0] || urls[0] || img.getAttribute('data-src') || '';
    return absolutize(best);
  }

  function absolutize(u) {
    if (!u) return '';
    if (u.indexOf('//') === 0) return 'https:' + u;
    return u.replace(/^http:\/\//, 'https://'); // evita conteúdo misto (o JSON-LD da loja vem em http)
  }

  var page = (function () {
    var cls = d.body ? d.body.className : '';
    if (/template-home/.test(cls)) return 'home';
    if (/template-product/.test(cls)) return 'product';
    if (/template-category/.test(cls)) return 'category';
    if (/template-search/.test(cls)) return 'search';
    return 'other';
  })();

  /* ---------- ícones (SVG inline, sem dependências) ---------- */

  var ICONS = {
    bolt: '<path d="M13 2 4 14h7l-1 8 9-12h-7z"/>',
    pix: '<path d="m12 2 4.5 4.5L12 11 7.5 6.5zM12 13l4.5 4.5L12 22l-4.5-4.5zM2 12l4.5-4.5L11 12l-4.5 4.5zM13 12l4.5-4.5L22 12l-4.5 4.5z"/>',
    card: '<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20" stroke="currentColor" stroke-width="2" fill="none"/>',
    gift: '<path d="M20 12v10H4V12M2 7h20v5H2zM12 22V7M12 7H7.5a2.5 2.5 0 1 1 0-5C11 2 12 7 12 7zM12 7h4.5a2.5 2.5 0 1 0 0-5C13 2 12 7 12 7z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>',
    heart: '<path d="M12 21s-7.5-4.6-10-9.3C.5 8.4 2.4 4.5 6 4.5c2.1 0 3.4 1.1 4 2.1.6-1 1.9-2.1 4-2.1 3.6 0 5.5 3.9 4 7.2C19.5 16.4 12 21 12 21z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>',
    heartFill: '<path d="M12 21s-7.5-4.6-10-9.3C.5 8.4 2.4 4.5 6 4.5c2.1 0 3.4 1.1 4 2.1.6-1 1.9-2.1 4-2.1 3.6 0 5.5 3.9 4 7.2C19.5 16.4 12 21 12 21z"/>',
    close: '<path d="M6 6l12 12M18 6 6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>',
    share: '<path d="M12 3v12M7 8l5-5 5 5M5 13v7h14v-7" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    whatsapp: '<path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm5.3 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.3-.7-2.8-1.1-4.5-3.9-4.7-4.1-.1-.2-1.1-1.5-1.1-2.9s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.4 0 .5l-.3.5-.4.4c-.1.1-.3.3-.1.6.2.3.7 1.2 1.6 1.9 1.1 1 2 1.3 2.3 1.4.3.1.5.1.6-.1l.9-1.1c.2-.3.4-.2.6-.1l1.9.9c.3.1.5.2.5.3.1.1.1.6-.1 1.3z"/>',
    story: '<rect x="6" y="2" width="12" height="20" rx="3" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="11" r="3" fill="none" stroke="currentColor" stroke-width="2"/>',
    arrow: '<path d="M5 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>'
  };

  function icon(name, cls) {
    var span = d.createElement('span');
    span.className = 'zn-icon' + (cls ? ' ' + cls : '');
    span.setAttribute('aria-hidden', 'true');
    span.innerHTML = '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor">' + (ICONS[name] || '') + '</svg>';
    return span;
  }

  /* ---------- dados de produto ---------- */

  function cardData(card) {
    var link = $('a.item-link', card) || $('a[href*="/produtos/"]', card);
    var name = $('.js-item-name', card);
    var price = $('.js-price-display', card);
    return {
      id: card.getAttribute('data-product-id'),
      name: clean(name ? name.textContent : (link ? link.getAttribute('title') : '')),
      url: link ? link.getAttribute('href') : '',
      img: pickImage($('img.js-item-image', card) || $('img', card)),
      price: clean(price ? price.textContent : '')
    };
  }

  var productLd = null;
  function productData() {
    if (productLd) return productLd;
    var h1 = $('h1.js-product-name');
    var idMatch = h1 && (h1.getAttribute('data-store') || '').match(/(\d+)/);
    var data = {
      id: idMatch ? idMatch[1] : '',
      name: clean(h1 ? h1.textContent : ''),
      url: location.pathname,
      img: '',
      price: clean(($('#price_display') || {}).textContent)
    };
    $$('script[type="application/ld+json"]').some(function (s) {
      try {
        var j = JSON.parse(s.textContent);
        if (j && j['@type'] === 'Product' && j['@id'] && samePath(j['@id'])) {
          data.img = absolutize(j.image || '');
          return true;
        }
      } catch (e) { /* ignora JSON inválido */ }
      return false;
    });
    if (!data.img) {
      var og = $('meta[property="og:image"]');
      if (og) data.img = absolutize(og.getAttribute('content'));
    }
    productLd = data;
    return data;
  }

  function productKind() {
    var crumbs = clean(($('.breadcrumbs') || {}).textContent).toLowerCase();
    if (/t[êe]nis|slides/.test(crumbs)) return 'shoes';
    if (/camisa|roupas/.test(crumbs)) return 'shirts';
    var opts = $$('#product_form .js-variation-option option').map(function (o) { return o.value; });
    if (opts.some(function (v) { return /^\d{2}$/.test(v); })) return 'shoes';
    if (opts.some(function (v) { return /^(P|M|G|GG|XG)$/.test(v); })) return 'shirts';
    return 'other';
  }

  function miniCard(p, extraClass) {
    return el('a', { class: 'zn-mini' + (extraClass ? ' ' + extraClass : ''), href: p.url }, [
      el('span', { class: 'zn-mini-img' }, [
        p.img ? el('img', { src: p.img, alt: p.name, loading: 'lazy', width: '240', height: '240' }) : null
      ]),
      el('span', { class: 'zn-mini-name', text: p.name }),
      p.price ? el('span', { class: 'zn-mini-price', text: p.price }) : null
    ]);
  }

  function section(cls, eyebrow, title, subtitle, content) {
    return el('section', { class: 'zn-section ' + cls }, [
      el('div', { class: 'container' }, [
        eyebrow ? el('div', { class: 'zn-eyebrow', text: eyebrow }) : null,
        title ? el('h2', { class: 'zn-title', text: title }) : null,
        subtitle ? el('p', { class: 'zn-subtitle', text: subtitle }) : null,
        content
      ])
    ]);
  }

  /* ---------- 1. Faixa de benefícios ---------- */

  function trustBar() {
    var header = $('.js-head-main');
    if (!header || $('.zn-trust')) return;
    var items = (C.trustBar || []).map(function (t) {
      return el('li', { class: 'zn-trust-item' }, [icon(t.icon), el('span', { text: t.text })]);
    });
    header.parentNode.insertBefore(el('div', { class: 'zn-trust', role: 'note' }, [el('ul', null, items)]), header.nextSibling);
  }

  /* ---------- 2. Atalhos de categoria ---------- */

  function categoryChips() {
    if ($('.zn-chips')) return;
    var anchor = $('.zn-trust') || $('.js-head-main');
    if (!anchor) return;
    var chips = C.categoryChips || [];
    var best = null;
    chips.forEach(function (c) {
      if (location.pathname.indexOf(c.url) === 0 && (!best || c.url.length > best.url.length)) best = c;
    });
    var nav = el('nav', { class: 'zn-chips', 'aria-label': 'Categorias' }, [
      el('div', { class: 'zn-chips-track' }, chips.map(function (c) {
        return el('a', { class: 'zn-chip' + (c === best ? ' is-active' : ''), href: c.url, text: c.label });
      }))
    ]);
    anchor.parentNode.insertBefore(nav, anchor.nextSibling);
  }

  /* ---------- 3. "Qual seu número?" ---------- */

  function isShoesListing() {
    var shoesUrl = (C.sizes && C.sizes.shoesCategoryUrl) || '/pronta-entrega1/';
    return location.pathname.indexOf(shoesUrl) === 0 || location.pathname.indexOf('/slides/') === 0;
  }

  function sizePicker() {
    if ($('.zn-size')) return;
    var sizes = (C.sizes && C.sizes.shoes) || [];
    var saved = store.get('size', '');
    var params = new URLSearchParams(location.search);
    var current = params.get('Tamanho') || '';
    var anchor, base;

    if (page === 'home') {
      anchor = $('[data-store="home-banner-featured"]') || $('[data-store="home-welcome-message"]');
      base = (C.sizes && C.sizes.shoesCategoryUrl) || '/pronta-entrega1/';
    } else if (page === 'category' && isShoesListing()) {
      anchor = $('[data-store="page-title"]');
      base = location.pathname;
    }
    if (!anchor) return;

    var chips = sizes.map(function (s) {
      var p = new URLSearchParams(page === 'category' ? location.search : '');
      p.set('Tamanho', s);
      p.delete('page');
      var active = current ? current === s : saved === s;
      return el('a', {
        class: 'zn-size-chip' + (active ? ' is-active' : ''),
        href: base + '?' + p.toString(),
        'data-size': s,
        onclick: function () { store.set('size', s); }
      }, [s]);
    });

    var block = section('zn-size', 'Compre pelo tamanho', 'Qual seu número?',
      saved ? 'Salvamos o ' + saved + ' para você. Toque em outro para trocar.' : 'Escolha uma vez e veja só o que tem no seu número.',
      el('div', { class: 'zn-size-row' }, chips));
    anchor.parentNode.insertBefore(block, anchor.nextSibling);
  }

  function sizePreselect() {
    var saved = store.get('size', '');
    if (!saved || /[?&]variant/.test(location.search)) return;
    var form = $('#product_form');
    if (!form) return;
    var group = $$('.js-product-variants-group', form).filter(function (g) {
      return /tamanho/i.test(clean(($('label', g) || {}).textContent));
    })[0];
    if (!group) return;
    var btn = $('.js-insta-variant[data-option="' + saved.replace(/"/g, '') + '"]', group);
    if (!btn || btn.classList.contains('selected') || btn.classList.contains('btn-variant-no-stock') || btn.hasAttribute('disabled')) return;
    btn.click(); // mesmo efeito de o cliente tocar no número; o tema cuida do resto
    // só avisa se o tema realmente aplicou a seleção
    setTimeout(function () {
      if (!btn.classList.contains('selected') || $('.zn-size-note', group)) return;
      group.appendChild(el('div', { class: 'zn-size-note' }, ['Selecionamos o seu número salvo (' + saved + '). Toque em outro se quiser trocar.']));
    }, 150);
  }

  /* ---------- 4. Brinde (perfume) ---------- */

  function isGiftGroup(group) {
    return /perfume|brinde/i.test(clean(($('label.form-label', group) || $('label', group) || {}).textContent));
  }

  function giftCard(card) {
    if ($('.zn-gift-badge', card)) return;
    var hasGift = $$('.js-product-variants-group', card).some(isGiftGroup);
    if (!hasGift) return;
    var host = $('.item-image', card);
    if (host) host.appendChild(el('span', { class: 'zn-gift-badge' }, [icon('gift'), el('span', { text: '+ Perfume' })]));
  }

  function giftProduct() {
    var form = $('#product_form');
    if (!form) return;
    $$('.js-product-variants-group', form).forEach(function (g) {
      if (!isGiftGroup(g) || g.classList.contains('zn-gift-group')) return;
      g.classList.add('zn-gift-group');
      g.insertBefore(el('div', { class: 'zn-gift-head' }, [
        icon('gift'),
        el('div', null, [
          el('strong', { text: 'Perfume de brinde' }),
          el('span', { text: 'Escolha a fragrância que vai junto com o seu tênis.' })
        ])
      ]), g.firstChild);
    });
  }

  /* ---------- 5. Wishlist "Minha Zane" ---------- */

  var wish = {
    list: function () { return store.get('wishlist', []); },
    has: function (id) { return wish.list().some(function (p) { return p.id === id; }); },
    toggle: function (p) {
      var list = wish.list();
      var i = -1;
      list.forEach(function (x, k) { if (x.id === p.id) i = k; });
      if (i >= 0) list.splice(i, 1); else list.unshift(p);
      store.set('wishlist', list.slice(0, 60));
      wish.sync();
      return i < 0;
    },
    remove: function (id) {
      store.set('wishlist', wish.list().filter(function (p) { return p.id !== id; }));
      wish.sync();
    },
    sync: function () {
      var list = wish.list();
      $$('.zn-heart').forEach(function (b) {
        var on = list.some(function (p) { return p.id === b.getAttribute('data-id'); });
        b.classList.toggle('is-on', on);
        b.setAttribute('aria-pressed', on ? 'true' : 'false');
        b.innerHTML = '';
        b.appendChild(icon(on ? 'heartFill' : 'heart'));
        if (b.getAttribute('data-label')) b.appendChild(el('span', { text: on ? 'Na Minha Zane' : 'Salvar' }));
      });
      $$('.zn-wish-count').forEach(function (c) {
        c.textContent = list.length ? String(list.length) : '';
        c.style.display = list.length ? '' : 'none';
      });
      if ($('.zn-drawer.is-open')) renderDrawer();
    }
  };

  function heartButton(getData, withLabel) {
    var data = getData();
    if (!data.id) return null;
    return el('button', {
      type: 'button',
      class: 'zn-heart' + (withLabel ? ' zn-heart-labeled' : ''),
      'data-id': data.id,
      'data-label': withLabel ? '1' : null,
      'aria-label': 'Salvar na Minha Zane',
      'aria-pressed': 'false',
      onclick: function (e) {
        e.preventDefault();
        e.stopPropagation();
        var added = wish.toggle(getData());
        toast(added ? 'Salvo na Minha Zane' : 'Removido da Minha Zane');
      }
    });
  }

  function wishCard(card) {
    if ($('.zn-heart', card)) return;
    var host = $('.item-image', card);
    if (!host) return;
    var btn = heartButton(function () { return cardData(card); });
    if (btn) host.appendChild(btn);
  }

  function wishHeader() {
    if ($('.zn-wish-open')) return;
    var cart = $('.js-head-main a[data-toggle="#modal-cart"].btn-utility');
    var col = cart && cart.closest('.col-utility');
    if (!col) return;
    var btn = el('a', {
      href: '#',
      class: 'zn-wish-open btn btn-utility position-relative',
      'aria-label': 'Abrir Minha Zane',
      onclick: function (e) { e.preventDefault(); openDrawer(); }
    }, [icon('heart'), el('span', { class: 'zn-wish-count' })]);
    col.parentNode.insertBefore(el('div', { class: 'col-auto col-utility zn-wish-col ' + (col.className.match(/order-\S+/g) || []).join(' ') }, [btn]), col);
  }

  function wishText(list) {
    return 'Oi! Montei minha lista na Zane:\n\n' + list.map(function (p) {
      return '• ' + p.name + (p.price ? ' (' + p.price + ')' : '') + '\n' + new URL(p.url, location.origin).href;
    }).join('\n\n');
  }

  function renderDrawer() {
    var drawer = $('.zn-drawer');
    if (!drawer) return;
    var body = $('.zn-drawer-body', drawer);
    var list = wish.list();
    body.innerHTML = '';
    if (!list.length) {
      body.appendChild(el('div', { class: 'zn-empty' }, [
        icon('heart'),
        el('p', { text: 'Sua Minha Zane está vazia.' }),
        el('span', { text: 'Toque no ❤ de qualquer produto para salvar.' })
      ]));
      return;
    }
    list.forEach(function (p) {
      body.appendChild(el('div', { class: 'zn-wish-item' }, [
        miniCard(p, 'zn-mini-row'),
        el('button', {
          type: 'button', class: 'zn-wish-remove', 'aria-label': 'Remover ' + p.name,
          onclick: function () { wish.remove(p.id); }
        }, [icon('close')])
      ]));
    });
    var text = wishText(list);
    body.appendChild(el('div', { class: 'zn-drawer-actions' }, [
      C.whatsapp ? el('a', {
        class: 'zn-btn zn-btn-primary', target: '_blank', rel: 'noopener',
        href: 'https://wa.me/' + C.whatsapp + '?text=' + encodeURIComponent(text)
      }, [icon('whatsapp'), el('span', { text: 'Pedir pelo WhatsApp' })]) : null,
      el('button', {
        type: 'button', class: 'zn-btn zn-btn-ghost',
        onclick: function () { shareText('Minha Zane', text); }
      }, [icon('share'), el('span', { text: 'Compartilhar lista' })])
    ]));
  }

  function openDrawer() {
    var drawer = $('.zn-drawer');
    if (!drawer) {
      drawer = el('div', { class: 'zn-drawer', role: 'dialog', 'aria-modal': 'true', 'aria-label': 'Minha Zane' }, [
        el('div', { class: 'zn-drawer-backdrop', onclick: closeDrawer }),
        el('div', { class: 'zn-drawer-panel' }, [
          el('div', { class: 'zn-drawer-head' }, [
            el('strong', { text: 'Minha Zane' }),
            el('button', { type: 'button', class: 'zn-drawer-close', 'aria-label': 'Fechar', onclick: closeDrawer }, [icon('close')])
          ]),
          el('div', { class: 'zn-drawer-body' })
        ])
      ]);
      d.body.appendChild(drawer);
      d.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeDrawer(); });
    }
    renderDrawer();
    drawer.classList.add('is-open');
    d.documentElement.classList.add('zn-lock');
    var close = $('.zn-drawer-close', drawer);
    if (close) close.focus();
  }

  function closeDrawer() {
    var drawer = $('.zn-drawer');
    if (drawer) drawer.classList.remove('is-open');
    d.documentElement.classList.remove('zn-lock');
  }

  function shareText(title, text) {
    if (navigator.share) {
      navigator.share({ title: title, text: text }).catch(function () {});
    } else if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(function () { toast('Lista copiada'); }, function () {});
    }
  }

  var toastTimer;
  function toast(msg) {
    var t = $('.zn-toast');
    if (!t) { t = el('div', { class: 'zn-toast', role: 'status', 'aria-live': 'polite' }); d.body.appendChild(t); }
    t.textContent = msg;
    t.classList.add('is-on');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { t.classList.remove('is-on'); }, 2200);
  }

  /* ---------- 6. Vistos recentemente ---------- */

  function recordView() {
    var p = productData();
    if (!p.id || !p.name) return;
    var list = store.get('recent', []).filter(function (x) { return x.id !== p.id; });
    list.unshift(p);
    store.set('recent', list.slice(0, 12));
  }

  function recentlyViewed() {
    if ($('.zn-recent')) return;
    var currentId = page === 'product' ? productData().id : null;
    var list = store.get('recent', []).filter(function (p) { return p.id !== currentId; }).slice(0, 10);
    if (list.length < (page === 'home' ? 2 : 1)) return;
    var anchor = page === 'home'
      ? $('[data-store="home-newsletter"]')
      : ($('#related-products') && $('#related-products').nextSibling);
    var parent = page === 'home' ? (anchor && anchor.parentNode) : ($('#related-products') || {}).parentNode;
    if (!parent) return;
    var block = section('zn-recent', null, 'Vistos recentemente', null,
      el('div', { class: 'zn-scroller' }, list.map(function (p) { return miniCard(p); })));
    parent.insertBefore(block, anchor || null);
  }

  /* ---------- 7. Complete o kit ---------- */

  function completeKit() {
    if ($('.zn-kit') || !C.kit) return;
    var kind = productKind();
    var items = kind === 'shoes' ? C.kit.camisas : kind === 'shirts' ? C.kit.tenis : null;
    if (!items || !items.length) return;
    items = items.filter(function (p) { return !samePath(p.url); }).slice(0, 4);
    var block = section('zn-kit', kind === 'shoes' ? 'Combina com' : 'Fecha com', C.kit.title, C.kit.subtitle,
      el('div', { class: 'zn-grid' }, items.map(function (p) { return miniCard(p); })));
    var related = $('#related-products');
    var anchor = related || ($('#product_form') && $('#product_form').closest('.row'));
    if (!anchor) return;
    anchor.parentNode.insertBefore(block, related ? related : anchor.nextSibling);
  }

  /* ---------- 8. Abas de informação do produto ---------- */

  function productInfo() {
    var form = $('#product_form');
    if (!form || $('.zn-info') || !C.productInfo) return;
    var kind = productKind();
    var tabs = [].concat(kind === 'shoes' ? (C.productInfo.shoes || []) : kind === 'shirts' ? (C.productInfo.shirts || []) : [],
      C.productInfo.common || []);
    if (!tabs.length) return;
    var wrap = el('div', { class: 'zn-info' }, tabs.map(function (t, i) {
      return el('details', { class: 'zn-info-item', open: i === 0 ? true : null }, [
        el('summary', { text: t.title }),
        el('div', { class: 'zn-info-body', html: t.html })
      ]);
    }));
    form.parentNode.insertBefore(wrap, form.nextSibling);
  }

  /* ---------- 9. Barra de compra fixa (celular) ---------- */

  function stickyBuy() {
    var form = $('#product_form');
    var submit = form && $('input[type="submit"].js-addtocart', form);
    if (!submit || $('.zn-sticky') || !('IntersectionObserver' in window)) return;
    var p = productData();
    var bar = el('div', { class: 'zn-sticky', 'aria-hidden': 'true' }, [
      el('div', { class: 'zn-sticky-info' }, [
        el('span', { class: 'zn-sticky-name', text: p.name }),
        el('span', { class: 'zn-sticky-price', text: p.price })
      ]),
      el('button', {
        type: 'button', class: 'zn-btn zn-btn-primary',
        onclick: function () {
          var target = $('.js-product-variants', form) || form;
          target.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, ['Escolher e comprar'])
    ]);
    d.body.appendChild(bar);
    new IntersectionObserver(function (entries) {
      var visible = entries[0].isIntersecting || entries[0].boundingClientRect.top < 0;
      bar.classList.toggle('is-on', !visible);
      bar.setAttribute('aria-hidden', visible ? 'true' : 'false');
    }).observe(submit);
  }

  /* ---------- 10. Ações do produto: salvar + story ---------- */

  function productActions() {
    var h1 = $('h1.js-product-name');
    if (!h1 || $('.zn-product-actions')) return;
    var actions = el('div', { class: 'zn-product-actions' });
    if (F.wishlist) {
      var heart = heartButton(productData, true);
      if (heart) actions.appendChild(heart);
    }
    if (F.storyShare && window.HTMLCanvasElement) {
      actions.appendChild(el('button', {
        type: 'button', class: 'zn-action', onclick: makeStory
      }, [icon('story'), el('span', { text: 'Story' })]));
    }
    if (actions.childNodes.length) h1.parentNode.insertBefore(actions, h1.nextSibling);
  }

  function loadImage(src) {
    return new Promise(function (resolve, reject) {
      if (!src) { reject(new Error('sem imagem')); return; }
      var img = new Image();
      img.crossOrigin = 'anonymous';
      img.onload = function () { resolve(img); };
      img.onerror = reject;
      img.src = src.replace(/-480-0\./, '-1024-1024.');
    });
  }

  function drawStory(img) {
    var W = 1080, H = 1920;
    var cv = d.createElement('canvas');
    cv.width = W; cv.height = H;
    var g = cv.getContext('2d');
    var p = productData();

    g.fillStyle = '#0A0A0C';
    g.fillRect(0, 0, W, H);
    var glow = g.createRadialGradient(W / 2, H * 0.45, 40, W / 2, H * 0.45, W * 0.9);
    glow.addColorStop(0, 'rgba(139,92,246,0.55)');
    glow.addColorStop(1, 'rgba(10,10,12,0)');
    g.fillStyle = glow;
    g.fillRect(0, 0, W, H);

    // linhas de neon verticais, como nos banners da campanha
    g.fillStyle = 'rgba(167,139,250,0.85)';
    g.shadowColor = '#8B5CF6';
    g.shadowBlur = 30;
    g.fillRect(110, 420, 6, 520);
    g.fillRect(W - 116, 980, 6, 520);
    g.shadowBlur = 0;

    // marca Z: barra superior, diagonal e barra inferior
    g.fillStyle = '#F5F5F7';
    g.save();
    g.translate(W / 2 - 70, 150);
    g.beginPath();
    g.moveTo(10, 0); g.lineTo(140, 0); g.lineTo(130, 26); g.lineTo(0, 26); g.closePath(); g.fill();
    g.beginPath();
    g.moveTo(112, 34); g.lineTo(146, 34); g.lineTo(34, 118); g.lineTo(0, 118); g.closePath(); g.fill();
    g.beginPath();
    g.moveTo(10, 126); g.lineTo(140, 126); g.lineTo(130, 152); g.lineTo(0, 152); g.closePath(); g.fill();
    g.restore();

    if (img) {
      var size = 860;
      g.save();
      g.shadowColor = 'rgba(139,92,246,0.6)';
      g.shadowBlur = 80;
      g.drawImage(img, (W - size) / 2, 470, size, size);
      g.restore();
    }

    g.textAlign = 'center';
    g.fillStyle = '#A78BFA';
    g.font = '600 34px "Space Grotesk", sans-serif';
    g.fillText(((C.story && C.story.tagline) || '').toUpperCase(), W / 2, 1440);

    g.fillStyle = '#F5F5F7';
    g.font = '64px Anton, "Space Grotesk", sans-serif';
    wrapText(g, p.name.toUpperCase(), W / 2, 1540, W - 180, 76);

    g.fillStyle = '#A1A1AA';
    g.font = '500 34px "Space Grotesk", sans-serif';
    g.fillText(C.instagram || '', W / 2, 1760);
    g.font = '400 26px "Space Grotesk", sans-serif';
    g.fillText((C.story && C.story.footer) || location.host, W / 2, 1810);
    return cv;
  }

  function wrapText(g, text, x, y, maxW, lineH) {
    var words = text.split(' '), line = '', lines = [];
    words.forEach(function (w) {
      var test = line ? line + ' ' + w : w;
      if (g.measureText(test).width > maxW && line) { lines.push(line); line = w; } else line = test;
    });
    if (line) lines.push(line);
    lines.slice(0, 3).forEach(function (l, i) { g.fillText(l, x, y + i * lineH); });
  }

  function exportCanvas(cv) {
    return new Promise(function (resolve, reject) {
      try { cv.toBlob(function (b) { b ? resolve(b) : reject(new Error('blob vazio')); }, 'image/png'); } catch (e) { reject(e); }
    });
  }

  function makeStory() {
    toast('Gerando sua imagem…');
    var p = productData();
    loadImage(p.img)
      .then(function (img) { return exportCanvas(drawStory(img)); })
      .catch(function () { return exportCanvas(drawStory(null)); }) // imagem bloqueada por CORS: gera sem a foto
      .then(function (blob) {
        var file = new File([blob], 'zane-story.png', { type: 'image/png' });
        if (navigator.canShare && navigator.canShare({ files: [file] })) {
          return navigator.share({ files: [file], title: p.name, text: (C.instagram || '') + ' ' + location.href }).catch(function () {});
        }
        var a = el('a', { href: URL.createObjectURL(blob), download: 'zane-story.png' });
        d.body.appendChild(a); a.click(); a.remove();
        toast('Imagem salva. É só postar no story!');
      })
      .catch(function () { toast('Não foi possível gerar a imagem.'); });
  }

  /* ---------- 11. Drop com contagem regressiva ---------- */

  function drop() {
    var cfg = C.drop || {};
    if (!cfg.endsAt || $('.zn-drop')) return;
    var end = new Date(cfg.endsAt).getTime();
    if (!end || end <= Date.now()) return;
    var anchor = $('.zn-size') || $('[data-store="home-banner-featured"]');
    if (!anchor) return;
    var units = ['dias', 'horas', 'min', 'seg'];
    var nums = units.map(function () { return el('strong', { text: '00' }); });
    var clock = el('div', { class: 'zn-drop-clock', role: 'timer' }, units.map(function (u, i) {
      return el('div', { class: 'zn-drop-unit' }, [nums[i], el('span', { text: u })]);
    }));
    var block = section('zn-drop', cfg.eyebrow, cfg.title, cfg.text, el('div', { class: 'zn-drop-row' }, [
      clock,
      el('a', { class: 'zn-btn zn-btn-primary', href: cfg.url }, [el('span', { text: cfg.cta }), icon('arrow')])
    ]));
    anchor.parentNode.insertBefore(block, anchor.nextSibling);
    function tick() {
      var left = Math.max(0, end - Date.now());
      var s = Math.floor(left / 1000);
      [Math.floor(s / 86400), Math.floor(s / 3600) % 24, Math.floor(s / 60) % 60, s % 60].forEach(function (v, i) {
        nums[i].textContent = (v < 10 ? '0' : '') + v;
      });
      if (!left) { block.remove(); clearInterval(timer); }
    }
    tick();
    var timer = setInterval(tick, 1000);
  }

  /* ---------- cards (inclusive os carregados depois) ---------- */

  function decorateCards() {
    // [data-product-id=""] é o modal de compra rápida do tema: não decorar
    $$('.js-item-product[data-product-id]:not([data-product-id=""])').forEach(function (card) {
      if (card.getAttribute('data-zn') === '1') return;
      card.setAttribute('data-zn', '1');
      if (F.giftBadge) run('gift-card', function () { giftCard(card); });
      if (F.wishlist) run('wish-card', function () { wishCard(card); });
    });
    if (F.wishlist) wish.sync();
  }

  function watchCards() {
    if (!('MutationObserver' in window)) return;
    var pending = false;
    // Reage só a cards novos (ex.: "Ver mais produtos"), nunca às próprias mudanças da Zane.
    function hasNewCard(node) {
      if (node.nodeType !== 1) return false;
      if (node.matches('.js-item-product:not([data-zn])')) return true;
      return !!node.querySelector('.js-item-product:not([data-zn])');
    }
    new MutationObserver(function (muts) {
      var added = muts.some(function (m) {
        return Array.prototype.some.call(m.addedNodes || [], hasNewCard);
      });
      if (!added || pending) return;
      pending = true;
      setTimeout(function () { pending = false; decorateCards(); }, 150);
    }).observe(d.body, { childList: true, subtree: true });
  }

  /* ---------- início ---------- */

  function init() {
    d.documentElement.classList.add('zn-on');
    if (F.trustBar) run('trust-bar', trustBar);
    if (F.categoryChips) run('category-chips', categoryChips);
    if (F.sizePicker) run('size-picker', sizePicker);
    if (F.drop && page === 'home') run('drop', drop);
    if (F.wishlist) run('wish-header', wishHeader);

    if (page === 'product') {
      if (F.recentlyViewed) run('record-view', recordView);
      run('product-actions', productActions);
      if (F.giftBadge) run('gift-product', giftProduct);
      if (F.productInfo) run('product-info', productInfo);
      if (F.completeKit) run('complete-kit', completeKit);
      if (F.stickyBuy) run('sticky-buy', stickyBuy);
      // espera o tema terminar de carregar para os botões de variação já responderem
      if (F.sizePreselect) {
        if (d.readyState === 'complete') run('size-preselect', sizePreselect);
        else window.addEventListener('load', function () { run('size-preselect', sizePreselect); });
      }
    }
    if (F.recentlyViewed && (page === 'home' || page === 'product')) run('recently-viewed', recentlyViewed);

    run('cards', decorateCards);
    run('watch-cards', watchCards);
  }

  if (d.readyState === 'loading') d.addEventListener('DOMContentLoaded', init);
  else init();
})();
