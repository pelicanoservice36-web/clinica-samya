import Link from "next/link";
import { needCategories } from "@/lib/clinic-data";

export default function NeedsGrid() {
  return (
    <section className="bg-sand-50 py-20 sm:py-24" id="como-ajudamos">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">
            Como podemos ajudar
          </p>
          <h2 className="mt-3 font-heading text-3xl font-semibold text-ink-900 sm:text-4xl">
            Comece pelo que você está sentindo
          </h2>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {needCategories.map((need) => (
            <Link
              key={need.title}
              href="/tratamentos"
              className="group rounded-2xl border border-brand-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-md"
            >
              <h3 className="font-heading text-lg font-semibold text-ink-900 group-hover:text-brand-700">
                {need.title}
              </h3>
              <p className="mt-2 text-sm text-ink-600">{need.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
