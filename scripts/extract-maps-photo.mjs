// Extrai a foto em alta resolução embutida em um link de foto específica
// do Google Maps (o link que aparece ao clicar em "Compartilhar" numa foto
// individual — diferente do link da galeria completa, que fica atrás de
// login e não é acessível por scraping).
//
// Uso: node scripts/extract-maps-photo.mjs "<url-do-maps>" <arquivo-saida.jpg> [largura]

import fs from "node:fs";
import path from "node:path";

const [, , mapsUrl, outputFile, widthArg] = process.argv;

if (!mapsUrl || !outputFile) {
  console.error("Uso: node scripts/extract-maps-photo.mjs \"<url-do-maps>\" <arquivo-saida.jpg> [largura]");
  process.exit(1);
}

const match = mapsUrl.match(/6shttps:%2F%2F([^!]+)/);
if (!match) {
  console.error('Não encontrei o parâmetro "6shttps..." com a foto embutida nessa URL.');
  process.exit(1);
}

const baseUrl = decodeURIComponent(match[1]);
const originalSizeMatch = mapsUrl.match(/!7i(\d+)!8i(\d+)/);
const [origW, origH] = originalSizeMatch
  ? [Number(originalSizeMatch[1]), Number(originalSizeMatch[2])]
  : [2048, 1365];
const aspect = origW / origH;

const targetW = Number(widthArg) || 2048;
const targetH = Math.round(targetW / aspect);

const downloadUrl = `https://${baseUrl.replace(/^https:\/\//, "")}`.replace(
  /=w\d+-h\d+-k-no$/,
  `=w${targetW}-h${targetH}-k-no`,
);

const res = await fetch(downloadUrl, { headers: { "User-Agent": "Mozilla/5.0" } });
if (!res.ok) {
  console.error(`Falha ao baixar a foto: HTTP ${res.status}`);
  process.exit(1);
}
const buffer = Buffer.from(await res.arrayBuffer());
fs.mkdirSync(path.dirname(outputFile), { recursive: true });
fs.writeFileSync(outputFile, buffer);
console.log(`Salvo em ${outputFile} (${buffer.length} bytes, alvo ${targetW}x${targetH})`);
