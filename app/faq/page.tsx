import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import FaqAccordion from "@/components/FaqAccordion";
import { faqItems } from "@/lib/clinic-data";
import { faqSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Perguntas Frequentes",
  description:
    "Tire suas dúvidas sobre convênios, reembolso, Pilates clínico, atendimento domiciliar e horários da Clínica Samya Francis.",
};

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqItems)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Início", path: "/" },
              { name: "Perguntas Frequentes", path: "/faq" },
            ])
          ),
        }}
      />
      <PageHero eyebrow="FAQ" title="Perguntas frequentes" />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <FaqAccordion items={faqItems} />
        </div>
      </section>
    </>
  );
}
