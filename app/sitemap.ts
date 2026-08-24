import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const BASE_URL = "https://www.clinicasamya.com.br";

const routes = [
  "",
  "/clinica",
  "/tratamentos",
  "/pilates",
  "/atendimento-domiciliar",
  "/faq",
  "/contato",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
