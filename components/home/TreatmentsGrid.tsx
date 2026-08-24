import Link from "next/link";
import { treatments } from "@/lib/clinic-data";

export default function TreatmentsGrid() {
  const featured = treatments.filter((t) => t.featured);
  const rest = treatments.filter((t) => !t.featured);

  return (
    <section className="bg-white py-20 sm:py-24" id="tratamentos">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">
            Tratamentos
          </p>
          <h2 className="mt-3 font-heading text-3xl font-semibold text-ink-900 sm:text-4xl">
            Tratamentos para cuidar de você por completo
          </h2>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((t) => (
            <div
              key={t.slug}
              className="rounded-2xl border border-brand-200 bg-brand-50 p-7 shadow-sm"
            >
              <h3 className="font-heading text-xl font-semibold text-brand-800">{t.name}</h3>
              <p className="mt-2 text-sm text-ink-700">{t.shortDescription}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((t) => (
            <div
              key={t.slug}
              className="rounded-xl border border-brand-100 bg-sand-50 px-5 py-4"
            >
              <h3 className="text-sm font-semibold text-ink-800">{t.name}</h3>
              <p className="mt-1 text-xs text-ink-600">{t.shortDescription}</p>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <Link
            href="/tratamentos"
            className="text-sm font-semibold text-brand-700 underline-offset-4 hover:underline"
          >
            Ver todos os tratamentos →
          </Link>
        </div>
      </div>
    </section>
  );
}
