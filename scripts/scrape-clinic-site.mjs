// Agente de scraping do site oficial (clinicasamya.com.br) para extrair a
// bio institucional e as credenciais da Dra. Samya Francis da página
// /clinica. O site é renderizado no servidor (Wix SSR), então um fetch
// simples + parsing de HTML já é suficiente — não precisa de navegador
// headless como no scraper do Google Maps.
//
// Uso: node scripts/scrape-clinic-site.mjs

import fs from "node:fs";
import path from "node:path";

const PAGE_URL = "https://www.clinicasamya.com.br/clinica";
const OUTPUT_PATH = path.join(process.cwd(), "data", "clinic-site-bio.json");

const ENTITIES = {
  "&ccedil;": "ç", "&atilde;": "ã", "&otilde;": "õ", "&rsquo;": "'",
  "&nbsp;": " ", "&eacute;": "é", "&oacute;": "ó", "&iacute;": "í",
  "&aacute;": "á", "&uacute;": "ú", "&ecirc;": "ê", "&acirc;": "â",
  "&Aacute;": "Á", "&Eacute;": "É", "&amp;": "&",
};

function decodeEntities(str) {
  return Object.entries(ENTITIES)
    .reduce((s, [entity, char]) => s.split(entity).join(char), str)
    .replace(/\s+/g, " ")
    .trim();
}

function stripTags(html) {
  return decodeEntities(html.replace(/<[^>]+>/g, " "));
}

const res = await fetch(PAGE_URL, {
  headers: { "User-Agent": "Mozilla/5.0 (compatible; ClinicaSamyaSiteBot/1.0)" },
});
if (!res.ok) {
  console.error(`Falha ao buscar ${PAGE_URL}: HTTP ${res.status}`);
  process.exit(1);
}
const html = await res.text();

const gradIdx = html.indexOf("Gradua");
if (gradIdx === -1) {
  console.error('Não encontrei o marcador "Gradua" na página — o site pode ter mudado de estrutura.');
  process.exit(1);
}

// Parágrafo institucional + CREFITO: janela de texto antes da lista de credenciais.
const introWindow = stripTags(html.slice(Math.max(0, gradIdx - 6000), gradIdx));
const crefitoMatch = introWindow.match(/CREFITO[\s\S]{0,25}/i);

// Lista de credenciais: <li> dentro do bloco que contém "Gradua".
const ulStart = html.lastIndexOf("<ul", gradIdx);
const listWindow = html.slice(ulStart, gradIdx + 10000);
const credentials = [];
const liRegex = /<li[^>]*>([\s\S]*?)<\/li>/g;
let m;
while ((m = liRegex.exec(listWindow)) !== null) {
  const text = stripTags(m[1]);
  if (text) credentials.push(text.replace(/;$/, "").replace(/\.$/, ""));
}

const output = {
  scrapedAt: new Date().toISOString(),
  source: PAGE_URL,
  crefito: crefitoMatch ? crefitoMatch[0].replace(/\s+/g, " ").trim().split(/\s(?=Acad)/i)[0] : null,
  credentials,
};

fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
fs.writeFileSync(OUTPUT_PATH, JSON.stringify(output, null, 2));
console.log(`Salvo em ${OUTPUT_PATH}`);
console.log(`CREFITO: ${output.crefito} — ${credentials.length} itens de formação/experiência extraídos`);
