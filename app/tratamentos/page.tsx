import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { clinic, treatments } from "@/lib/clinic-data";

export const metadata: Metadata = {
  title: "Tratamentos",
  description:
    "Conheça os tratamentos da Clínica Samya Francis: fisioterapia, Pilates clínico, acupuntura, quiropraxia, reabilitação vestibular, fisioterapia pélvica, pediátrica, geriátrica e mais.",
};

export default function TratamentosPage() {
  return (
    <>
      <PageHero
        eyebrow="Tratamentos"
        title="Tratamentos para cuidar de você por completo"
        description="Mais de 20 especialidades em um único local, com atendimento individualizado e equipe multidisciplinar."
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {treatments.map((t) => (
              <div
                key={t.slug}
                className={`rounded-2xl border p-6 shadow-sm ${
                  t.featured ? "border-brand-200 bg-brand-50" : "border-brand-100 bg-sand-50"
                }`}
              >
                <h2 className="font-heading text-lg font-semibold text-ink-900">{t.name}</h2>
                <p className="mt-2 text-sm text-ink-600">{t.shortDescription}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 rounded-2xl bg-brand-700 p-8 text-center text-white sm:p-12">
            <h2 className="font-heading text-2xl font-semibold sm:text-3xl">
              Não sabe qual tratamento é indicado para você?
            </h2>
            <p className="mt-3 text-brand-100">
              Fale com nossa equipe e agende uma avaliação para receber uma orientação
              personalizada.
            </p>
            <Link
              href={clinic.whatsappHrefWithMessage("Olá! Gostaria de agendar uma avaliação.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-brand-800 shadow-sm transition-colors hover:bg-brand-50"
            >
              Agendar avaliação
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
