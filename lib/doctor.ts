import bioData from "@/data/clinic-site-bio.json";

// Extraído do site oficial (clinicasamya.com.br/clinica) em 2026-08-24 via
// scripts/scrape-clinic-site.mjs — ver data/clinic-site-bio.json para o
// dado bruto. O CREFITO abaixo só normaliza os espaços do texto original
// ("CREFITO - 3/ 94761- F"), sem alterar o número.
export const doctorCrefito = "CREFITO-3/94761-F";

// Itens 0–17 do site: formação acadêmica, especializações e cursos.
export const doctorEducation = bioData.credentials.slice(0, 18);

// Itens 18–24 do site: experiência clínica e áreas de atuação.
export const doctorExperience = bioData.credentials.slice(18);
