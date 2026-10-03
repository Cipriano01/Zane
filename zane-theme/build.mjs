// Gera os arquivos prontos para instalar na Nuvemshop (sem dependências).
//   node build.mjs
// Saída em dist/:
//   zane.css           → CSS (campo de CSS avançado do tema, ou arquivo do tema)
//   zane.js            → config + script (arquivo do tema ou CDN)
//   zane-snippet.html  → <style> + <script> num bloco só, para colar antes de </body>
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(fileURLToPath(import.meta.url));
const read = (p) => readFileSync(join(root, p), 'utf8');

const css = read('src/zane.css');
const js = read('src/config.js') + '\n' + read('src/zane.js');

// Checagem básica de sintaxe antes de gerar.
new Function(js);

const banner = `/* Zane Night · gerado por build.mjs em ${new Date().toISOString().slice(0, 10)} */\n`;
mkdirSync(join(root, 'dist'), { recursive: true });
writeFileSync(join(root, 'dist/zane.css'), banner + css);
writeFileSync(join(root, 'dist/zane.js'), banner + js);
writeFileSync(
  join(root, 'dist/zane-snippet.html'),
  `<!-- Zane Night: início -->\n<style>\n${css}</style>\n<script>\n${js}</script>\n<!-- Zane Night: fim -->\n`
);

const kb = (s) => (Buffer.byteLength(s) / 1024).toFixed(1) + ' KB';
console.log(`dist/zane.css ${kb(css)} · dist/zane.js ${kb(js)}`);
