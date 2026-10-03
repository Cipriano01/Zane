# Zane Night: camada visual e de experiência para a loja Zane (Nuvemshop · tema Toluca)

Um pacote de **CSS + JavaScript** que aplica a nova identidade "Zane Night" e adiciona recursos de experiência **sem mexer em carrinho, checkout, estoque ou pedidos**.

## O que vem no pacote

| Recurso | Onde aparece | Como funciona |
|---|---|---|
| Identidade Zane Night | Site inteiro | Roxo da campanha como cor de acento, títulos condensados (Anton), seções escuras, etiquetas legíveis |
| Faixa de benefícios | Abaixo do header | Pronta entrega · 5% Pix · 12x · perfume de brinde |
| Atalhos de categoria | Abaixo da faixa | TN, TN 3, 95, DN, Shox, Camisas… com o item ativo destacado |
| "Qual seu número?" | Home e categorias de tênis | Salva o número do cliente e usa o filtro nativo `?Tamanho=` |
| Pré-seleção do número | Página de produto | Seleciona o número salvo (como se o cliente tocasse nele) e avisa |
| Selo "+ Perfume" | Cards de tênis com brinde | Detectado automaticamente pela variação "PERFUME BRINDE" |
| Bloco de brinde | Página de produto | A escolha do perfume vira um bloco de presente destacado |
| ❤ Minha Zane (wishlist) | Cards, produto, header | Fica salva no aparelho. Gaveta com "Pedir pelo WhatsApp" e "Compartilhar lista" |
| Vistos recentemente | Home e produto | Histórico no aparelho |
| Complete o kit | Produto | Tênis → sugere camisas · camisa → sugere tênis (lista editável) |
| Abas de informação | Produto | Numeração/medidas, envio e prazo, trocas (textos das páginas da loja) |
| Barra de compra fixa | Produto, só no celular | Aparece ao rolar e leva até a escolha de tamanho |
| Story do produto | Produto | Gera uma imagem 1080×1920 para postar no Instagram |
| Drop com contagem | Home | Liga sozinho quando `drop.endsAt` tem uma data futura |

## Estrutura

```
src/config.js   ← textos, links, produtos do kit, liga/desliga recursos (EDITE AQUI)
src/zane.js     ← lógica
src/zane.css    ← visual
build.mjs       ← gera dist/
dist/           ← arquivos prontos para instalar
test/run.mjs    ← 79 testes automatizados sobre páginas reais da loja (test/fixtures)
```

## Gerar e testar

```bash
node build.mjs        # gera dist/zane.css, dist/zane.js e dist/zane-snippet.html
node test/run.mjs     # requer Playwright; salva capturas em test/screenshots/
```

## Instalar

Ver **[../docs/instalacao.md](../docs/instalacao.md)**.

## Garantias de segurança

- O script só **adiciona** elementos. Não envia formulários, não chama o carrinho e não altera preço nem estoque.
- Cada recurso roda isolado (`try/catch`). Se o tema mudar e um recurso quebrar, os outros continuam e a loja segue vendendo.
- Desinstalar = apagar o snippet. Nada fica gravado na Nuvemshop.
- Wishlist, número e vistos ficam no `localStorage` do cliente (nada de dado pessoal sai do aparelho).
