import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import LocationSection from "@/components/home/LocationSection";
import { clinic } from "@/lib/clinic-data";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Fale com a Clínica Samya Francis: telefone, WhatsApp, endereço e horário de atendimento em Santo André - SP.",
};

export default function ContatoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Início", path: "/" },
              { name: "Contato", path: "/contato" },
            ])
          ),
        }}
      />
      <PageHero
        eyebrow="Contato"
        title="Pronto para cuidar melhor da sua saúde?"
        description="Entre em contato com nossa equipe e agende sua avaliação."
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-3">
            <a
              href={clinic.whatsappHrefWithMessage("Olá! Gostaria de agendar uma avaliação.")}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-brand-600 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-700"
            >
              Falar pelo WhatsApp
            </a>
            <a
              href={clinic.phoneHref}
              className="rounded-full border border-brand-300 bg-white px-6 py-3.5 text-sm font-semibold text-brand-800 transition-colors hover:border-brand-400"
            >
              Ligar agora
            </a>
            <a
              href={clinic.whatsappHrefWithMessage("Olá! Gostaria de agendar uma avaliação.")}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-brand-300 bg-white px-6 py-3.5 text-sm font-semibold text-brand-800 transition-colors hover:border-brand-400"
            >
              Agendar avaliação
            </a>
          </div>

          <div className="mt-8 space-y-1 text-sm text-ink-700">
            <p>{clinic.phoneDisplay}</p>
            <p>{clinic.whatsappDisplay}</p>
          </div>
        </div>
      </section>

      <LocationSection />
    </>
  );
}
