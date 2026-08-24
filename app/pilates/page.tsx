import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import PlaceholderMedia from "@/components/PlaceholderMedia";
import { clinic } from "@/lib/clinic-data";

export const metadata: Metadata = {
  title: "Pilates Clínico",
  description:
    "Pilates clínico em Santo André com equipamentos Cadillac, Reformer, Ladder Barrel e Chair. Turmas de até 3 alunos e avaliação individual.",
};

const equipment = ["Cadillac", "Reformer", "Ladder Barrel", "Chair"];

const benefits = [
  "Correção postural",
  "Melhora da concentração e do equilíbrio",
  "Percepção corporal",
  "Capacidade respiratória",
  "Prevenção de lesões",
  "Ganho de força e flexibilidade",
  "Alívio de tensões, estresse e dores crônicas",
];

export default function PilatesPage() {
  return (
    <>
      <PageHero
        eyebrow="Pilates Clínico"
        title="Pilates clínico com acompanhamento individualizado"
        description="Avaliação individual, exercícios personalizados e turmas reduzidas para o cuidado completo do seu corpo."
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 md:grid-cols-2 md:items-start lg:px-8">
          <div>
            <h2 className="font-heading text-2xl font-semibold text-ink-900">Como funciona</h2>
            <p className="mt-4 text-ink-700">
              Antes de iniciar, é realizada uma avaliação clínica e física minuciosa, além de um
              breve questionário para compreender sua rotina — permitindo exercícios personalizados
              conforme suas necessidades individuais.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-ink-700">
              <li>• Turmas reduzidas, de no máximo 3 alunos</li>
              <li>• Aulas com duração de aproximadamente 55 minutos</li>
              <li>• Ministradas por profissionais certificados</li>
              <li>• Equipamentos originais desenvolvidos por Joseph Pilates</li>
            </ul>

            <h2 className="mt-10 font-heading text-2xl font-semibold text-ink-900">Equipamentos</h2>
            <div className="mt-4 flex flex-wrap gap-3">
              {equipment.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-brand-200 bg-brand-50 px-4 py-2 text-sm font-medium text-brand-800"
                >
                  {item}
                </span>
              ))}
            </div>

            <h2 className="mt-10 font-heading text-2xl font-semibold text-ink-900">Benefícios</h2>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {benefits.map((item) => (
                <li key={item} className="text-sm text-ink-700">
                  • {item}
                </li>
              ))}
            </ul>

            <a
              href={clinic.whatsappHrefWithMessage("Olá! Gostaria de agendar uma aula de Pilates clínico.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-block rounded-full bg-brand-600 px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-700"
            >
              Agendar Pilates
            </a>
          </div>

          <div className="grid gap-5">
            <PlaceholderMedia label="foto real do estúdio de Pilates" />
            <PlaceholderMedia label="foto real de aula de Pilates em andamento" />
          </div>
        </div>
      </section>
    </>
  );
}
