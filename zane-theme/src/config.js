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
