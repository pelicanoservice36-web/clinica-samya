import { clinic } from "./clinic-data";
import { googleRating, googleReviewCount } from "./reviews";

const SITE_URL = "https://www.clinicasamya.com.br";

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: clinic.name,
    slogan: clinic.slogan,
    url: SITE_URL,
    telephone: clinic.phoneHref.replace("tel:", ""),
    address: {
      "@type": "PostalAddress",
      streetAddress: clinic.address.street,
      addressLocality: clinic.address.city,
      addressRegion: clinic.address.state,
      postalCode: clinic.address.postalCode,
      addressCountry: "BR",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
      ],
      opens: "08:00",
      closes: "20:00",
    },
    sameAs: [clinic.instagramUrl, clinic.mapsUrl],
    // schema.org expects a decimal point, not the PT-BR comma stored in googleRating ("5,0")
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: Number(googleRating.replace(",", ".")),
      reviewCount: googleReviewCount,
    },
  };
}

export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}
