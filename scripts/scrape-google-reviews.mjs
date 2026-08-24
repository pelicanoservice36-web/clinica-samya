// Agente de scraping do Google Maps para a Clínica Samya Francis.
//
// Lê a nota, o total de avaliações e as avaliações públicas visíveis sem
// login (o Google limita a "visualização" não autenticada a poucas
// avaliações e a 1 foto de capa — o restante exige login e não é
// coletado aqui). Uso: node scripts/scrape-google-reviews.mjs
//
// Requer a dependência dev "playwright" (já no package.json) com o
// Chromium instalado (`npx playwright install chromium`).

import { chromium } from "playwright";
import fs from "node:fs";
import path from "node:path";

const MAPS_URL =
  "https://www.google.com/maps/place/Cl%C3%ADnica+Samya+Francis/@-23.6410854,-46.5267012,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce42a0b6c79b2f:0x1417b1aef2cf3786!8m2!3d-23.6410854!4d-46.5267012!16s%2Fg%2F11bttp8y0s?entry=ttu";

const OUTPUT_PATH = path.join(process.cwd(), "data", "google-reviews.json");

function parsePanelText(panelText) {
  const ratingMatch = panelText.match(/(\d,\d)\s*\n\((\d+)\)/);
  const rating = ratingMatch ? ratingMatch[1] : null;
  const reviewCount = ratingMatch ? Number(ratingMatch[2]) : null;

  const reviews = [];
  const lines = panelText.split("\n");
  for (let i = 0; i < lines.length; i++) {
    // Reviewer name is followed a couple lines later by "N avaliações" or
    // "N avaliações · M fotos", then a relative-time line, then the text.
    if (/^\d+\s*avalia(ç|c)(ões|oes)/i.test(lines[i + 1] || "")) {
      const name = lines[i].trim();
      const reviewerMeta = lines[i + 1].trim();
      // scan forward for the relative-time line (e.g. "3 meses atrás")
      let j = i + 2;
      while (j < lines.length && !/atrás$/.test(lines[j].trim())) j++;
      const relativeTime = lines[j] ? lines[j].trim() : null;
      let k = j + 1;
      if (lines[k] && lines[k].trim() === "NOVA") k++;
      const textLines = [];
      while (k < lines.length && lines[k].trim() !== "Gostei") {
        if (lines[k].trim()) textLines.push(lines[k].trim());
        k++;
      }
      reviews.push({
        name,
        reviewerMeta,
        relativeTime,
        text: textLines.join(" ").trim(),
      });
    }
  }
  return { rating, reviewCount, reviews };
}

const browser = await chromium.launch({ headless: true });
try {
  const ctx = await browser.newContext({ locale: "pt-BR", viewport: { width: 1366, height: 1000 } });
  const page = await ctx.newPage();

  let panelText = "";
  for (let attempt = 1; attempt <= 4 && panelText.length < 1000; attempt++) {
    await page.goto(MAPS_URL, { waitUntil: "domcontentloaded", timeout: 45000 });
    await page.waitForTimeout(2000 + attempt * 1000);
    await page.evaluate(() => {
      const panel = document.querySelector('[role="main"]');
      if (panel) panel.scrollTop = panel.scrollHeight;
    });
    await page.waitForTimeout(2000);
    panelText = await page.evaluate(() => {
      const panel = document.querySelector('[role="main"]');
      return panel ? panel.innerText : "";
    });
  }

  const parsed = parsePanelText(panelText);

  // Cover photo (the only photo exposed without a logged-in session).
  let coverPhotoUrl = null;
  const verFotos = await page.$('button:has-text("Ver fotos"), a:has-text("Ver fotos")');
  if (verFotos) {
    await verFotos.click();
    await page.waitForTimeout(2000);
    coverPhotoUrl = await page.evaluate(() => {
      const imgs = Array.from(document.querySelectorAll("img")).filter(
        (im) => im.src && im.src.includes("googleusercontent.com"),
      );
      return imgs[0] ? imgs[0].src.replace(/=w\d+-h\d+-k-no$/, "=w1600-h1200-k-no") : null;
    });
  }

  const output = {
    scrapedAt: new Date().toISOString(),
    source: MAPS_URL,
    rating: parsed.rating,
    reviewCount: parsed.reviewCount,
    reviews: parsed.reviews,
    coverPhotoUrl,
    note:
      "Visualização não autenticada do Google Maps: apenas algumas avaliações e 1 foto de capa ficam acessíveis sem login. Para mais fotos/avaliações, use links diretos de fotos específicas compartilhados manualmente.",
  };

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(output, null, 2));
  console.log(`Salvo em ${OUTPUT_PATH}`);
  console.log(`Nota: ${output.rating} — ${output.reviewCount} avaliações — ${output.reviews.length} avaliações extraídas`);
} finally {
  await browser.close();
}
