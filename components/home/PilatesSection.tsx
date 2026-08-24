import Link from "next/link";
import PlaceholderMedia from "@/components/PlaceholderMedia";

const highlights = [
  "Equipamentos Cadillac, Reformer, Ladder Barrel e Chair",
  "Avaliação clínica e física individual antes de começar",
  "Turmas reduzidas, com no máximo 3 alunos",
  "Aulas com duração de aproximadamente 55 minutos",
  "Exercícios personalizados conforme sua rotina e necessidades",
  "Ministradas por profissionais certificados",
];

export default function PilatesSection() {
  return (
    <section className="bg-brand-50 py-20 sm:py-24" id="pilates">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 md:grid-cols-2 md:items-center lg:px-8">
        <PlaceholderMedia label="foto real do estúdio de Pilates da clínica" className="order-last md:order-first" />

        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">
            Pilates Clínico
          </p>
          <h2 className="mt-3 font-heading text-3xl font-semibold text-ink-900 sm:text-4xl">
            Pilates clínico com acompanhamento individualizado
          </h2>
          <ul className="mt-6 space-y-3">
            {highlights.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-ink-700">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
          <Link
            href="/pilates"
            className="mt-8 inline-block rounded-full bg-brand-600 px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-700"
          >
            Conheça o Pilates Clínico
          </Link>
        </div>
      </div>
    </section>
  );
}
