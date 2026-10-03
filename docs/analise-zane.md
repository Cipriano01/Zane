# Zane: análise completa da loja (antes de qualquer alteração)

**Loja:** https://tnssdozane.lojavirtualnuvem.com.br/
**Data da análise:** 03/10/2026
**Plataforma:** Nuvemshop, tema **Toluca** (tema oficial), store id 5367599

> **Como a análise foi feita.** Baixei e analisei o HTML real da home, de categorias (Air Max TN, Premier League), da busca ("air max 95", "tn"), de duas páginas de produto, do carrinho, do "Sobre nós", do `sitemap.xml` e do `robots.txt`. Também medi o carregamento num Chromium headless (desktop 1440px e iPhone 13). O ambiente onde trabalhei bloqueia as CDNs de imagens e CSS da Nuvemshop (`acdn-us.mitiendanube.com` e `d26lpennugtm8s.cloudfront.net`). Por isso, a parte visual se apoia no print do desktop enviado por você e nos tokens de cor e fonte do tema. **Não vi o layout mobile renderizado nem as fotos de produto.** Os pontos sobre mobile se baseiam na estrutura do tema e devem ser confirmados com prints.

---

## 0. Antes de tudo: a Zane não é o que o briefing descreve

O briefing fala de uma loja de "moda/acessórios", com referências como "loja feminina premium". O site mostra outra coisa:

| | O que o site é hoje |
|---|---|
| Nome de exibição | "Zane" na loja e "TNS DO ZANE" na barra de anúncio. Instagram e TikTok: **@tnsdozane** |
| Catálogo | 284 produtos: **tênis** (Air Max TN/Plus, TN 3, 95, DN, DN8, Shox, R12, Vapormax, Dunk, Yeezy, LV, New Balance, Asics, Mizuno, Puma, Nocta, Scorpion, Slides) e **camisas de time** (Premier League, La Liga, Bundesliga, Série A, Brasileirão, Seleção) |
| Público | Masculino, jovem, streetwear e futebol ("cultura TN") |
| Ticket | Camisas a R$149,90 (de R$249,90). Tênis entre R$299,90 e R$379,90 |
| Diferencial comercial | Pronta entrega, **perfume de brinde** em todo tênis, 5% no Pix, 12x |
| Tom de voz | "Feita para quem vive o jogo", "Dois estilos. Um propósito.", "estilo não é detalhe, é padrão" |

**Conclusão:** a evolução deve partir de **sneaker culture + futebol + noite/roxo neon**, não de "moda feminina premium". Algumas funcionalidades do briefing continuam valendo, mas traduzidas para esse público. Por exemplo, "Monte seu look" vira **"Monte seu kit: tênis + camisa"**.

---

## ⚠️ 0.1 Risco nº 1 para "preservar o funcionamento de venda"

Este é o ponto que mais ameaça a loja continuar vendendo, mais do que qualquer questão de layout:

1. **Promessas contraditórias no próprio site.** A página da camisa diz "*a camisa **oficial***" e "*detalhes **autênticos***". O "Sobre nós" diz "*garantir **autenticidade***" e, logo depois, "*produtos **importados da China***". Os preços ficam em torno de 25% a 35% do varejo oficial. Se o produto não é original, chamá-lo de "oficial/autêntico" é propaganda enganosa (CDC, art. 37) e motivo clássico de chargeback e reclamação.
2. **Marcas e imagem de terceiros na comunicação.** Os banners usam jogadores reais (Rodrygo, Matheus Cunha), uniformes de clubes e marcas de patrocinadores. As categorias usam marcas registradas (Nike, Louis Vuitton, Yeezy), e o brinde usa nomes de perfumes de grife. Os termos da Nuvemshop e do Mercado Pago (o gateway da loja) proíbem a venda de itens falsificados ou que imitem marcas. **A consequência típica é suspensão da loja ou bloqueio do recebimento**, ou seja, exatamente "quebrar a venda".

**Recomendação:** antes do redesign, alinhar com quem responde juridicamente pela loja o que pode ser afirmado sobre os produtos. Ajustar textos ("oficial", "autêntico"), banners com atletas e nomes de categorias. Isso é uma decisão sua, não técnica. Do meu lado, **posso ajudar a construir a identidade própria da Zane** (logo, cor, linguagem, experiência). Não vou produzir peças que usem a identidade de Nike, clubes, atletas ou perfumarias como se fossem da Zane. Essa limitação também é uma oportunidade: quanto mais forte a marca própria, menos a loja depende das marcas dos outros (ver a seção F).

---

## A. Diagnóstico atual

### A.1 Identidade visual

| Elemento | Estado atual | Leitura |
|---|---|---|
| Logo | "Z" geométrico em duas barras paralelas com diagonal, branco sobre preto | **Forte, simples e memorável.** É o melhor ativo da marca |
| Paleta do tema | 100% preto (`#000`) e branco (`#fff`). Seções em cinza `#F4F4F4` | Correta, mas neutra: é a paleta padrão do Toluca "dark" |
| Paleta dos banners | **Roxo/violeta neon** com fumaça, luz de neon vertical e preto profundo | Tem personalidade, mas **só existe nas imagens**. O tema não usa esse roxo em lugar nenhum |
| Tipografia do tema | Space Grotesk 400/700 em tudo (títulos e corpo) | Boa, técnica e urbana |
| Tipografia dos banners | Condensada pesada em caixa alta ("NOVA COLEÇÃO", "DOIS ESTILOS.") + versalete espaçado ("AIR MAX TN") | **É a voz real da marca**, mas não aparece no site fora dos banners |

**Diagnóstico:** a Zane tem duas identidades. Os banners têm uma direção de arte própria (roxo, noite, condensada, editorial) e o restante do site é o Toluca padrão em preto e branco. O caminho é **levar a linguagem dos banners para o resto do site**, não substituí-la.

### A.2 Home (ordem real das seções)

1. Barra de anúncio rotativa: "TNS DO ZANE" / "TODOS PRODUTOS A PRONTA ENTREGA"
2. Header: busca à esquerda, logo central, login, WhatsApp e carrinho
3. Menu com 10 itens em caixa alta
4. **Banners em destaque** (2 lado a lado: camisas 25/26 e Air Max TN)
5. Mensagem de boas-vindas ("Bem-vindo à Zane. Aqui você encontra os tênis mais desejados…")
6. Produtos em destaque (camisas)
7. Banner promocional → vitrine de ofertas (Air Max DN)
8. Vitrine de promoção (Air Max TN 3)
9. Banners informativos: 5% OFF no Pix, Atendimento ágil, 12x, Compra segura
10. Banner de categorias → vitrine de novidades (Air Max 95 + New Balance)
11. Banner de novidades → mais vendidos (Air Max Plus)
12. Slider "Carrossel 1/2"
13. Depoimentos (3)
14. Newsletter
15. Produto único em destaque (Air Max 95 "Annatomy", "Atenção, última peça!")
16. Rodapé

**Problemas:**
- **São 5 vitrines quase iguais em sequência** (destaque, oferta, promoção, novidades, mais vendidos), cerca de 60 cards no total. Os títulos são "Air Max Dn", "Air Max Tn 3"… ou seja, a vitrine virou categoria. Não há narrativa ("por que comprar aqui?") nem curadoria ("o que está em alta").
- O "por que confiar" (Pix, 12x, atendimento, segurança) só aparece **no meio da página**.
- O texto de boas-vindas é genérico ("Estilo, conforto e performance reunidos em um só lugar").
- ~~Ícones e fotos dos depoimentos em placeholder~~ *(corrigido na revisão: as imagens existem e são carregadas sob demanda; o placeholder só aparece até carregar).*
- O slider no fim da página ("Carrossel 1", "Carrossel 2" como texto alternativo) parece ter sobrado de configuração.
- O produto único no fim da home repete um item que já aparece numa vitrine.

### A.3 Cabeçalho

- ✅ A busca **visível e aberta** no desktop é ótima para um catálogo de 284 itens em que o cliente chega sabendo o modelo ("TN", "95", "Real Madrid").
- ✅ WhatsApp no header é essencial para esse público, que tira dúvida de tamanho e prazo antes de comprar.
- ⚠️ Header alto: barra de anúncio + header + menu ocupam cerca de 300px no desktop antes do primeiro banner.
- ⚠️ "Olá! Faça login / Ou cadastre-se" ocupa muito espaço para uma ação secundária.

### A.4 Menu e navegação

- ❌ **O catálogo está escondido.** Dos 10 itens do menu, **8 são páginas institucionais** (Prazos, Como comprar, FAQ, Guia de medidas, Sobre nós, Contato, Política de privacidade, Dicas de limpeza). Só "Produtos" leva ao catálogo, num dropdown. Tênis e Camisas, os dois pilares da loja, não aparecem no primeiro nível.
- ❌ **Categorias fora do menu.** O sitemap tem Nike R12, Asics, Nike Nocta, Mizuno, Puma e Scorpion, que não estão no menu. Há duplicidades (`new-balance` e `new-balance1`, `air-max-951`, `air-max-dn1`) e slugs inconsistentes (`/pronta-entrega1/` para Tênis, `/roupas/` para Camisas).
- ⚠️ Nomes com erro: "Yezzy" em vez de "Yeezy", "League One" provavelmente no lugar de "Ligue 1", "Mizzuno".
- ⚠️ Não há navegação por **tamanho**, embora seja o que mais importa em tênis ("tem 42?"). O filtro existe (`?Tamanho=42`), mas não aparece no menu nem na home.

### A.5 Banners

- ✅ **Melhor parte visual do site.** Direção de arte coerente, campanha de verdade e copy curta e forte ("Nova coleção. Feita para quem vive o jogo.").
- ⚠️ Texto alternativo genérico "Banner de Zane" em todos: ruim para SEO e acessibilidade.
- ⚠️ O texto é "queimado" na imagem. No mobile ele fica pequeno e não pode ser traduzido nem lido por leitores de tela.
- ⚠️ Um banner leva a uma busca (`/search/?q=Real+Madrid`), que o `robots.txt` bloqueia para indexação. O ideal é levar a uma categoria.
- ⚠️ CTA com uma seta num círculo, sem texto ("Ver coleção", "Comprar TN").
- Risco de imagem e marca: ver a seção 0.1.

### A.6 Cards de produto

Pelo HTML, cada card mostra:
- foto (com segunda foto ao passar o mouse, padrão do Toluca)
- etiqueta "-40% OFF"
- nome
- preço "de/por" + preço no Pix + parcelas
- botão de compra rápida (quickshop), que abre um modal com tamanho e perfume

**Problemas:**
- 🔴 **Peso enorme.** Cada card de tênis carrega um JSON com **todas as combinações de tamanho × perfume** (6 tamanhos × 9 perfumes = **54 variantes**, cada uma com tabela de parcelas). São cerca de **250 KB por card**. A home tem 64 cards e **9,7 MB de HTML** (ver A.13).
- ⚠️ *(corrigido na revisão: o seletor de perfume fica escondido no card e só aparece no modal de compra rápida.)* O brinde, porém, não aparece em lugar nenhum da vitrine. → resolvido pelo selo "+ Perfume" do Zane Night.
- ⚠️ Os tokens do tema têm `--label-background: #ffffff` e `--label-foreground: #ffffff`, ou seja, **etiqueta branca com texto branco**. Vale confirmar visualmente se a etiqueta de desconto está legível.
- ⚠️ Nomes duplicados: há **4 produtos "Real Madrid - Away 25/26"** diferentes (versões distintas com o mesmo nome) e um "Juventus - Home 25/26" cuja URL é `chelsea-home-25-26`. Isso confunde o cliente e o Google.
- ✅ Desconto Pix explícito e preço "de/por" claros.

### A.7 Página de produto

- ✅ Breadcrumb (Início > Tênis > Air Max 95 > produto), preço com Pix e 12x, seletor de tamanho, cálculo de frete por CEP na página, "Atenção, última peça!" (escassez real vinda do estoque), "Produtos similares" e Guia de medidas no site.
- ❌ **Descrições genéricas e com afirmações arriscadas.** A do tênis ("Ideal para corrida… desempenho excepcional") é texto de modelo. A da camisa diz "oficial" e "autênticos".
- ❌ Falta o que esse cliente quer saber: **numeração (forma pequena ou grande?)**, material, o que vem na caixa, **prazo de envio da pronta entrega**, política de troca de tamanho e fotos reais ou vídeo.
- ⚠️ Parcelamento "12x de R$38,66" = **R$463,92**. Os juros não ficam claros perto do preço de R$379,90.
- ⚠️ "Produtos similares" é só "mesma categoria" (4 "Real Madrid Away" iguais). Não há **cross-sell** (tênis → camisa, camisa → tênis).
- ⚠️ O brinde de perfume aparece como **variante obrigatória** e não como benefício. Deveria ser comunicado como presente ("🎁 Perfume de brinde: escolha o seu"), com destaque visual.

### A.8 Busca

- ✅ Nativa, rápida e visível. "tn" e "air max 95" retornam resultados com filtros e ordenação.
- ✅ *(corrigido na revisão)* O tema já tem sugestões enquanto o cliente digita (`js-search-form-suggestions`). Falta "buscas populares".
- ⚠️ A busca "tn" depende de o nome conter "TN". Os produtos se chamam "Air Max **Plus**", então a correspondência com a gíria "TN" é parcial. Vale incluir sinônimos e tags nos produtos.

### A.9 Filtros e categorias

- ✅ Filtro por tamanho e ordenação ("Mais vendidos", preço) já existem.
- ❌ "**Perfume Brinde**" aparece **como filtro** (e é indexado no sitemap): ruído puro.
- ⚠️ Não há filtro por cor nem por linha/modelo dentro de "Tênis".

### A.10 Carrinho

- Carrinho lateral (drawer) nativo com cálculo de frete, cupom, subtotal, parcelas e "Ver mais produtos". A página `/comprar/` e o checkout são da Nuvemshop.
- ⚠️ Não há barra de "falta R$X para frete grátis" nem upsell no drawer.
- 🔒 **Checkout: não mexer.** É hospedado e controlado pela Nuvemshop.

### A.11 Mobile (estrutural; confirmar com prints)

- O Toluca usa menu hambúrguer (`#nav-hamburger`) e carrinho em drawer.
- No mobile, o menu mistura as 8 páginas institucionais com o catálogo. O cliente precisa abrir "Produtos" para ver Tênis/Camisas.
- A home tem cerca de **350.000 px de altura de documento no mobile** sem CSS (inflada pelos seletores ocultos). Com CSS é muito menor, mas os 9,7 MB de HTML pesam de verdade em celular intermediário.
- Banners com texto na imagem perdem legibilidade em 390px.

### A.12 CTAs

- Todos dizem "Comprar". Funciona, mas é genérico.
- O CTA dos banners não tem texto.
- Newsletter: "Quer receber nossas ofertas? Cadastre-se…" é genérico e sem incentivo concreto (o "Desconto exclusivo!" não diz quanto).

### A.13 Velocidade e performance percebida

| Métrica (medida) | Valor |
|---|---|
| HTML da home (descompactado) | **9,7 MB** |
| HTML da home (transferido, gzip) | 149 KB |
| Quanto disso é JSON de variantes | **7,5 MB (77%)** |
| HTML da busca "tn" | 10,6 MB |
| HTML da categoria Air Max TN | 8,9 MB |
| Nós no DOM (home) | cerca de 9.100 |
| First Contentful Paint (sem imagens, rede de datacenter) | cerca de 1,0 s |

**Causa:** o perfume está cadastrado **como segunda variação do produto**, o que multiplica as variantes por 9. O tema Toluca embute todas as variantes de cada card para permitir o quickshop. A transferência é pequena por causa do gzip, mas o celular precisa **descompactar e interpretar 9,7 MB**, o que trava a rolagem e atrasa a interação em aparelhos de entrada. **Esse é o maior ganho técnico disponível.**

### A.14 Outros achados técnicos

- **Sem Google Analytics 4, Google Ads, Meta Pixel ou TikTok Pixel configurados** (`ga4_measurement_id: ""`). A loja não mede funil nem consegue fazer remarketing. Para um público que vem do Instagram e do TikTok, isso é dinheiro na mesa.
- Ainda está no **subdomínio** `lojavirtualnuvem.com.br`, sem domínio próprio. Um domínio próprio aumenta a confiança e a memorização.
- Erro de texto no "Sobre nós": "Confie na Zane **do** para uma compra…".
- Depoimentos: 3 textos quase idênticos, sem data nem produto. Parecem genéricos e **reduzem** a confiança.
- **Fotos das camisas geradas por IA:** os arquivos se chamam `chatgpt-image-…`. Quem compra camisa quer ver a peça real. Isso afeta a confiança e pode gerar devolução quando a peça real for diferente da imagem.

### A.15 O que faz a loja parecer "genérica"

1. Tema Toluca com cores e seções padrão, sem nada customizado fora dos banners
2. Menu de páginas institucionais em vez de produto
3. 5 vitrines idênticas com títulos que são nomes de categoria
4. Depoimentos genéricos e fotos de produto geradas por IA
5. Textos de modelo (boas-vindas, descrições, newsletter, depoimentos)
6. Subdomínio da Nuvemshop
7. O roxo da campanha some quando o banner acaba

---

## B. O que manter

1. **O logo "Z".** Não mexer, apenas usar mais (como selo, padrão gráfico e favicon).
2. **Fundo preto + Space Grotesk.** É a base certa para streetwear.
3. **Direção de arte dos banners** (roxo neon, noite, fumaça, tipografia condensada). Essa é a identidade, e o objetivo é estendê-la.
4. **Tom de voz** curto e de atitude ("Feita para quem vive o jogo", "Dois estilos. Um propósito.").
5. **Busca aberta no header** e **WhatsApp visível**.
6. **Quickshop com tamanho no card** (comprar sem entrar no produto), porém mais leve (ver C).
7. **"Pronta entrega"**, **5% no Pix**, **12x** e **perfume de brinde** como diferenciais. O que muda é a forma de comunicar.
8. Frete por CEP na página do produto, breadcrumb, "última peça", Guia de medidas.
9. **Carrinho, checkout, estoque e pedidos 100% nativos da Nuvemshop.**

---

## C. O que melhorar

### Experiência
| # | Melhoria | Como |
|---|---|---|
| C1 | **Menu orientado a produto:** TÊNIS · CAMISAS · LANÇAMENTOS · OFERTAS · AJUDA | Painel Nuvemshop → Menus. As páginas institucionais vão para "Ajuda" e para o rodapé |
| C2 | **Mega-menu de Tênis** por linha (TN, 95, DN, Shox…) + **"Compre pelo tamanho"** (34 a 44) | Menu nativo + links `?Tamanho=42` |
| C3 | Corrigir nomes, duplicidades e slugs (Yeezy, Ligue 1, New Balance duplicado, "Juventus/Chelsea", 4× "Real Madrid Away" → nomes distintos) | Painel → Produtos/Categorias (+ redirecionamentos 301 da Nuvemshop) |
| C4 | **Tirar o perfume da variação** (54 → 6 variantes por tênis) | Painel. Alternativas na seção 4. **Maior ganho de performance** |
| C5 | Esconder "Perfume Brinde" dos filtros | Consequência do C4 |
| C6 | Home enxuta: no máximo 3 vitrines curadas + blocos de marca | Editor do tema (seções do Toluca) + CSS |
| C7 | Busca com sinônimos ("tn" → Air Max Plus; "95"; nomes de clubes) | Tags nos produtos (painel) + JS leve de sugestões |
| C8 | Mobile: header compacto, faixa de categorias rolável abaixo do header, CTA "Comprar" fixo na página de produto | CSS/JS no tema |

### Branding
| # | Melhoria |
|---|---|
| C9 | **Roxo Zane como cor de acento oficial** do tema: botões principais, etiquetas, preço Pix, hover, foco, barra de anúncio |
| C10 | **Tipografia condensada dos banners nos títulos do site** (seções, nome da categoria, hero do produto), mantendo a Space Grotesk no corpo |
| C11 | **Elementos de assinatura:** a diagonal do "Z" como divisor de seção, luz de neon vertical como detalhe, versalete espaçado em labels ("AIR MAX TN · DUSK") |
| C12 | **Nome:** unificar "Zane" e "TNS do Zane". Sugestão: **ZANE** como marca, "TNS DO ZANE" como assinatura/apelido da comunidade |
| C13 | **Textos próprios:** boas-vindas, newsletter, "Sobre nós", páginas de produto e microcopy dos CTAs, com a voz da campanha |
| C14 | Domínio próprio (ex.: `zane.com.br` ou `tnsdozane.com.br`) |

### Conversão
| # | Melhoria |
|---|---|
| C15 | Faixa de confiança **logo abaixo do header** (pronta entrega · 5% Pix · 12x · troca de tamanho), com ícones de verdade |
| C16 | Brinde como benefício visual: selo **"🎁 + Perfume grátis"** no card e bloco destacado no produto |
| C17 | CTAs com texto: "Ver coleção 25/26", "Comprar TN", "Escolher meu tamanho" |
| C18 | Página de produto: bloco "Numeração" (forma), "Envio em X dias úteis", "Troca de tamanho grátis/como funciona", "O que vem na caixa" |
| C19 | **Prova social real:** app de avaliações com foto ou um bloco "Clientes Zane" com prints autorizados do Instagram. Remover os depoimentos atuais |
| C20 | Parcelamento transparente ("12x com juros, total R$463,92" ou "até 3x sem juros", se for configurado) |
| C21 | **Instalar GA4 + Meta Pixel + TikTok Pixel** (integração nativa no painel) |
| C22 | Ativar e personalizar o e-mail de **carrinho abandonado** (nativo da Nuvemshop) e a oferta da newsletter ("10% na 1ª compra") |

---

## D. Novas funcionalidades possíveis (avaliadas para a Zane)

Legenda de viabilidade: 🟢 tema/CSS/JS · 🟡 app da Nuvemshop ou configuração · 🔴 backend ou serviço externo

| Funcionalidade | Faz sentido? | Versão Zane | Viabilidade |
|---|---|---|---|
| **"Complete o kit"** (cross-sell) | **Sim, alta** | Na página do tênis: "Combina com" + 2 camisas. Na camisa: "Complete com um TN". Pode virar **"Kit Zane"** com desconto (tênis + camisa) | 🟢 vitrine por JS usando categorias/tags · 🟡 o desconto do kit usa as promoções nativas ("Leve X") |
| **Wishlist "Minha Zane"** | **Sim, média** | ❤ no card. Lista salva no aparelho, com botão "Mandar minha lista no WhatsApp" | 🟢 versão local (localStorage) sem login · 🟡 versão com conta via app de wishlist |
| **"Compre pelo tamanho"** | **Sim, alta** | Pergunta "Qual seu número?" uma vez, salva e filtra vitrines e categorias | 🟢 JS + filtro nativo `?Tamanho=` |
| **Lançamentos/"Drop"** | **Sim, alta** | Seção "DROP DA SEMANA" com contagem regressiva e selo "NOVO" | 🟢 seção do tema + JS · produto programado pelo painel |
| **Recomendações personalizadas** | Média | "Vistos recentemente" + "Porque você viu TN" | 🟢 versão local (histórico no aparelho) · 🔴 versão "IA/servidor" |
| **"Monte seu look"** (editorial) | Média | **"Fit Zane"**: fotos de look completo (TN + camisa) com os produtos marcados e clicáveis | 🟢 seção custom com hotspots · 🟡/🔴 se for gerado pelo cliente |
| **Compartilhar composição** | Baixa/média | Compartilhar a wishlist ou o kit montado como link e imagem | 🟢 link com IDs na URL + Web Share API |
| **Story compartilhável da compra** | **Sim, média** (público de Instagram/TikTok) | Na página de **obrigado**: card 9:16 "Meu próximo TN tá chegando 🟣 @tnsdozane" com a foto do produto, para postar e marcar | 🟡 depende do que a página de confirmação permite injetar (ver seção 4). Geração da imagem 🟢 em canvas no navegador |
| **Pós-compra personalizado** | Média | E-mail ou WhatsApp com rastreio, dicas de limpeza (a página já existe) e cupom para a próxima compra | 🟡 e-mails nativos + app de WhatsApp/automação · 🔴 fluxo próprio |
| **Programa de fidelidade/indicação** | Futuro | "Indique e ganhe" | 🟡 app |

**Fora de escopo agora:** provador virtual, configurador 3D e "IA de estilo". Custam caro e trazem pouco retorno para este catálogo.

---

## 4. Mapa Nuvemshop: o que dá para fazer e onde

| Camada | Exemplos para a Zane | Risco |
|---|---|---|
| **Painel/configurações (sem código)** | Menus, categorias, nomes, tags, perfume fora da variação, promoções (kit, Pix), domínio, pixels GA4/Meta/TikTok, e-mail de carrinho abandonado, ordem das seções da home, banners | Baixo |
| **Editor do tema Toluca** | Cores (roxo como acento), fontes do catálogo, seções da home, banners, vitrines, barra de anúncio, informativos | Baixo |
| **CSS customizado** | Tipografia condensada nos títulos, divisores diagonais, etiquetas, header compacto, selo de brinde, faixa de confiança, ajustes mobile | Baixo (só visual) |
| **JavaScript customizado** (Códigos externos ou edição do tema) | Wishlist local, "Compre pelo tamanho", vistos recentemente, "Complete o kit", contagem regressiva, sugestões de busca, card de story | Médio. **Regra: nunca interceptar o formulário de compra, o carrinho ou o checkout.** Só adicionar elementos e usar os links e endpoints públicos da loja |
| **Edição do código do tema (Twig/FTP)** | Remover o JSON pesado de variantes dos cards (quickshop leve), seções novas na home, reestruturar o card | Médio. Disponibilidade depende do plano. Exige versionar o tema e testar em tema de **rascunho** antes de publicar |
| **Apps da loja Nuvemshop** | Avaliações com foto, wishlist com conta, brindes automáticos, WhatsApp/automação pós-compra | Baixo a médio (custo mensal e scripts extras) |
| **Backend/serviço externo** (API Nuvemshop) | Recomendação no servidor, fidelidade própria, story gerado no servidor, sincronização de wishlist entre aparelhos | Alto custo. Só se o volume justificar |
| **🔒 Não tocar** | Checkout, cálculo de frete, meios de pagamento, regras de estoque, criação de pedido, formulário `js-product-form`/add-to-cart do tema | Quebra venda |

**Sobre tirar o perfume da variação (C4)**, opções em ordem de segurança:
1. Produto "Perfume brinde" a R$0 com as 9 fragrâncias como variação, adicionado ao carrinho pela promoção nativa ou por app de brinde.
2. Campo de observação do pedido ou mensagem no WhatsApp pós-compra ("qual fragrância?").
3. Manter a variação, mas editar o tema para não embutir todas as variantes no card (resolve o peso, não a poluição do filtro).

Cada opção muda a operação (estoque do brinde, separação do pedido), então **a escolha é sua**.

---

## E. Prioridade de implementação

**Fase 0: proteger a venda (antes do visual)**
1. Revisar com responsável jurídico as afirmações "oficial/autêntico", os banners com atletas e o uso de marcas (seção 0.1)
2. Instalar GA4 + Meta Pixel + TikTok Pixel e ativar o e-mail de carrinho abandonado
3. Corrigir textos quebrados, nomes duplicados e categorias com erro

**Fase 1: ganhos rápidos, baixo risco (painel + editor + CSS)**
4. Menu orientado a produto + "Compre pelo tamanho"
5. Roxo Zane como acento + títulos condensados + selo de brinde + faixa de confiança
6. Home enxuta (hero → categorias → drop → mais vendidos → kit → prova social → newsletter)
7. Trocar depoimentos genéricos por avaliações reais e as fotos de IA por fotos reais
8. CTAs com texto e newsletter com oferta concreta

**Fase 2: performance e página de produto**
9. Perfume fora da variação **ou** card sem JSON completo (objetivo: home abaixo de 1,5 MB de HTML)
10. Página de produto com numeração, prazo, troca, "o que vem na caixa" e CTA fixo no mobile
11. "Complete o kit" (cross-sell)

**Fase 3: diferenciação**
12. Wishlist "Minha Zane" (local + envio por WhatsApp)
13. Drop da semana com contagem regressiva + vistos recentemente
14. Avaliações com foto (app)
15. Story compartilhável pós-compra (validar antes o que a página de obrigado permite)

**Fase 4 (se houver volume):** fidelidade/indicação, recomendação no servidor, domínio próprio + e-mail marketing.

---

## F. Proposta visual: "Zane Night"

**Conceito:** *a vitrine noturna do TN.* O preto continua como base, o **roxo da campanha vira a assinatura da interface** e a **diagonal do "Z"** vira o elemento gráfico recorrente. É uma evolução do que os banners já fazem, aplicada ao site inteiro.

### Tokens propostos
| Token | Atual | Proposto |
|---|---|---|
| Fundo | `#000000` | `#0A0A0C` (preto levemente frio, menos "chapado") |
| Superfície (cards e seções) | `#F4F4F4` (cinza claro, quebra o dark) | `#141418` (cards escuros) |
| Texto | `#FFFFFF` | `#F5F5F7` + secundário `#A1A1AA` |
| **Acento Zane** | não existe | **`#8B5CF6`** (violeta), hover `#A78BFA`, brilho neon `#7C3AED` |
| Botão principal | branco/preto | violeta com texto branco. Secundário: contorno branco |
| Etiqueta de desconto | branco/branco (?) | violeta sólido com texto branco |
| Preço Pix | igual ao preço | destacado em violeta claro |
| Títulos | Space Grotesk 700 | **Condensada pesada em caixa alta** (ex.: *Anton*, *Bebas Neue* ou *Oswald*, todas do Google Fonts), próxima da tipografia dos banners |
| Corpo | Space Grotesk | Space Grotesk (mantém) |
| Labels | — | Space Grotesk 500, caixa alta, `letter-spacing: .2em` ("AIR MAX TN · DUSK") |

### Linguagem gráfica
- **Divisor diagonal** entre seções, no ângulo da barra do "Z"
- **Linha neon vertical** (1–2px violeta com brilho) como detalhe em hero e títulos, igual à dos banners
- Cards escuros, foto do tênis sobre fundo `#141418`, borda violeta no hover
- Selo **"🎁 + PERFUME"** e **"PRONTA ENTREGA"** no card
- Microcopy: "Garantir o meu", "Escolher tamanho", "Ver drop", "Complete o kit"

### Nova home (esqueleto)
1. Barra: "PRONTA ENTREGA · 5% NO PIX · PERFUME DE BRINDE EM TODO TÊNIS"
2. Header compacto (logo, busca, ❤ Minha Zane, WhatsApp, carrinho) + **faixa de categorias**: TN · 95 · DN · Shox · Camisas 25/26 · Ofertas
3. **Hero** de campanha com texto em HTML (não na imagem) + CTA com texto
4. **"Qual seu número?"** (chips 34–44, filtra tudo)
5. **Drop da semana** (contagem regressiva)
6. **Mais vendidos** (1 vitrine)
7. **Kit Zane** (tênis + camisa)
8. **Clientes Zane** (fotos reais e avaliações)
9. Faixa de confiança + newsletter com oferta
10. Rodapé com as páginas institucionais (que saem do menu)

---

---

## Implementação

O pacote **Zane Night** (CSS + JS) já implementa o que dá para fazer sem login na loja: identidade visual, faixa de benefícios, atalhos de categoria, "Qual seu número?", selo e bloco de brinde, wishlist Minha Zane, vistos recentemente, "Complete o kit", abas de informação, barra de compra fixa, story e drop. Ver `zane-theme/README.md` e `docs/instalacao.md`. O que depende do painel está na Parte 2 do guia de instalação.

**Próximo passo (original):** escolher quais itens das fases 0 e 1 entram primeiro. Antes de qualquer alteração em código, vou precisar: (1) saber se o seu plano permite editar o código do tema (Twig/FTP) ou só CSS/JS externos, (2) prints do mobile para confirmar a seção A.11 e (3) a sua decisão sobre o perfume (seção 4).
