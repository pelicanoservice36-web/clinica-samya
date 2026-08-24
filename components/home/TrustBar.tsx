import Link from "next/link";
import { clinic } from "@/lib/clinic-data";

const STARS = "★★★★★";

const stats = [
  { value: "[PENDENTE]", label: "no Google" },
  { value: "[PENDENTE]", label: "avaliações no Google" },
  { value: "20+", label: "especialidades e tratamentos" },
  { value: "100%", label: "atendimento individualizado" },
];

export default function TrustBar() {
  return (
    <section className="border-y border-brand-100 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-heading text-2xl font-semibold text-brand-700">{stat.value}</p>
              <p className="text-sm text-ink-600">{stat.label}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 flex flex-col items-center gap-2 text-center">
          <span className="text-lg tracking-wide text-amber-500" aria-hidden="true">
            {STARS}
          </span>
          <p className="text-xs text-ink-600">
            Nota e número de avaliações do Google serão exibidos aqui assim que confirmados /
            integrados ao Google Business Profile.
          </p>
          <Link
            href={clinic.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 text-sm font-semibold text-brand-700 underline-offset-4 hover:underline"
          >
            Veja nossas avaliações
          </Link>
        </div>
      </div>
    </section>
  );
}
