# Zane: guia de implementação

Este guia tem duas partes:
1. **Instalar o pacote Zane Night** (visual + recursos), feito por código e já pronto em `zane-theme/dist/`
2. **Ajustes no painel da Nuvemshop**, que só você consegue fazer, porque exigem login na loja

> Antes de publicar, faça um **backup do tema**: no painel, duplique o tema atual ou exporte os arquivos pelo FTP. Assim, voltar atrás leva um clique.

---

## Parte 1: Instalar o Zane Night

### Opção A (recomendada): edição de código do tema

Disponível nos planos da Nuvemshop que liberam **Editar código / FTP** do tema.

1. Painel → **Minha Nuvemshop → Personalizar → Editar código** (o nome pode variar por plano; em alguns casos o acesso é por FTP).
2. **Duplique o tema** e faça a edição na cópia, para testar sem afetar a loja.
3. Abra o layout principal (no Toluca, `layouts/layout.tpl`).
4. Cole o conteúdo inteiro de **`zane-theme/dist/zane-snippet.html`** logo **antes de `</body>`**.
5. Salve, abra a **pré-visualização** da cópia e passe pelo checklist abaixo.
6. Tudo certo? Publique a cópia.

### Opção B: sem edição de código

Se o plano não libera a edição do tema:

1. **CSS**: cole o conteúdo de `zane-theme/dist/zane.css` no campo de **CSS avançado/personalizado** do editor do tema, se existir.
2. **JS**: cole o conteúdo de `zane-theme/dist/zane.js` dentro de `<script>…</script>` num campo que aceite código no rodapé da loja (ex.: **Configurações → Códigos externos**, ou um app de "scripts personalizados" da loja de aplicativos).

> Alguns campos de "códigos externos" aceitam só códigos de rastreamento ou têm limite de tamanho. Se não couber, use a Opção A ou hospede o `zane.js` num CDN e cole só `<script src="…/zane.js" defer></script>`.

### Checklist depois de instalar (celular e computador)

- [ ] Home: faixa roxa de benefícios, atalhos de categoria, "Qual seu número?" depois do banner
- [ ] Cards: ❤ no canto superior e selo "+ Perfume" nos tênis com brinde
- [ ] Tocar no ❤ → aviso "Salvo na Minha Zane" e contador no header
- [ ] Abrir a Minha Zane → itens e "Pedir pelo WhatsApp" abrindo a conversa com a lista
- [ ] Produto: botões Salvar e Story, bloco de perfume, abas de informação, "Complete o kit"
- [ ] Celular, produto: rolar → aparece a barra "Escolher e comprar"
- [ ] **Compra de teste completa**: escolher tamanho e perfume → Comprar → carrinho → checkout até a tela de pagamento. Confirmar que tamanho, perfume e preço chegam certos
- [ ] Botão "Ver mais produtos" na categoria: os novos cards também ganham ❤

### Personalizar (sem programar)

Tudo fica em **`zane-theme/src/config.js`**. Depois de editar, rode `node build.mjs` e cole o novo `dist/zane-snippet.html`.

- **Desligar um recurso**: em `features`, troque `true` por `false`
- **Lançar um drop**: preencha `drop.endsAt`, por exemplo `'2026-10-10T20:00:00-03:00'`, e o link em `drop.url`. A seção some sozinha quando o tempo acaba
- **Trocar os produtos do "Complete o kit"**: edite `kit.camisas` e `kit.tenis` (nome, link e imagem)
- **Textos das abas** (envio, trocas, medidas): `productInfo`
- **Atalhos de categoria**: `categoryChips`

### Como desinstalar

Apague o bloco entre `<!-- Zane Night: início -->` e `<!-- Zane Night: fim -->` (ou limpe os campos da Opção B). A loja volta exatamente ao que era.

---

## Parte 2: Ajustes no painel (só você consegue fazer)

Em ordem de impacto.

### 2.1 Proteger a venda (antes de tudo)
- [ ] Revisar com quem responde juridicamente pela loja: textos com "oficial" e "autêntico" (descrições das camisas, "Sobre nós"), banners com atletas reais e uso de marcas de terceiros. Ver a seção 0.1 de `analise-zane.md`. Textos revisados prontos em [`textos.md`](textos.md)
- [ ] Fotos das camisas: os arquivos se chamam `chatgpt-image-…` (imagens geradas por IA). Trocar por fotos reais do produto em estoque aumenta a confiança e reduz devoluções

### 2.2 Medir (15 minutos, ganho imediato)
- [ ] **Google Analytics 4**: painel → integrações/marketing → Google → colar o ID `G-…`
- [ ] **Meta Pixel** (Facebook/Instagram): integração nativa da Nuvemshop
- [ ] **TikTok Pixel**: o público vem do @tnsdozane
- [ ] Ativar e personalizar o **e-mail de carrinho abandonado** (nativo)

### 2.3 Menu (Painel → Navegação/Menus)
Estrutura sugerida para o menu principal:
```
TÊNIS ▸ Todos · TN · TN 3 · 95 · DN · DN 8 · Shox · Vapormax · Dunk · New Balance · Slides
CAMISAS ▸ Todas · Brasileirão · Premier League · La Liga · Bundesliga · Série A · Ligue 1 · Seleção
OFERTAS
AJUDA ▸ Prazos · Como comprar · Perguntas frequentes · Guia de medidas · Dicas de limpeza · Contato
```
- [ ] Mover "Sobre nós" e "Política de privacidade" para o **rodapé**
- [ ] Incluir categorias que existem mas estão fora do menu: Asics, Mizuno, Puma, Nocta, Scorpion

### 2.4 Catálogo
- [ ] Corrigir nomes: "Yezzy" → "Yeezy", "League One" → "Ligue 1", "Mizzuno" → "Mizuno"
- [ ] Unificar categorias duplicadas: `new-balance` e `new-balance1`
- [ ] Dar nomes distintos aos **4 produtos "Real Madrid - Away 25/26"** (ex.: "Away 25/26 – Torcedor", "Away 25/26 – Jogador", "Away 25/26 – Manga longa"…)
- [ ] "Juventus - Home 25/26" usa a URL `/produtos/chelsea-home-25-26-pyjsy/`: corrigir a URL ou o produto
- [ ] Adicionar tags de busca: "tn" nos Air Max Plus, apelidos de clubes ("Timão", "Verdão", "Merengue"…)
- [ ] Trocar o texto alternativo dos banners ("Banner de Zane") por descrições ("Nova coleção camisas 25/26")
- [ ] Banner que leva à busca `/search/?q=Real+Madrid`: apontar para uma categoria

### 2.5 Perfume de brinde: o maior ganho de velocidade
Hoje o perfume é uma **variação** (6 tamanhos × 9 perfumes = 54 variações por tênis), o que deixa a home com **9,7 MB de HTML**. Opções, da mais segura para a menos:

1. **Produto "Perfume brinde" a R$0** com as 9 fragrâncias como variação, adicionado por promoção nativa ("compre X, leve Y") ou por um app de brindes. O tênis volta a ter só 6 variações.
2. **Escolha do perfume pós-compra**: campo de observação no checkout ou mensagem automática no WhatsApp ("qual fragrância você quer?").
3. Manter como está. O Zane Night já destaca o brinde, mas o peso da página continua.

> Se escolher 1 ou 2, desligue `giftBadge` no `config.js` ou ajuste a detecção para a nova forma de brinde.

### 2.6 Textos
- [ ] Aplicar os textos de [`textos.md`](textos.md): boas-vindas, newsletter, "Sobre nós", barra de anúncio, modelos de descrição
- [ ] Corrigir o erro no "Sobre nós": "Confie na Zane **do** para…"
- [ ] Trocar os 3 depoimentos genéricos por avaliações reais (prints autorizados do Instagram ou um app de avaliações com foto)

### 2.7 Política de trocas
A FAQ diz "trocas apenas por defeito ou erro". Em compras on-line, o CDC (art. 49) garante **arrependimento em até 7 dias após o recebimento**. As abas do Zane Night já mencionam isso. Vale alinhar a FAQ e a operação com esse direito.

### 2.8 Domínio próprio
- [ ] Registrar `zane.com.br` (ou similar) e conectar em Configurações → Domínios. Depois, atualizar `story.footer` no `config.js`
