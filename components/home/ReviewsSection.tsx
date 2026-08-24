import Link from "next/link";
import { clinic } from "@/lib/clinic-data";

export default function ReviewsSection() {
  return (
    <section className="bg-brand-900 py-20 text-brand-50 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-widest text-brand-300">
          Avaliações
        </p>
        <h2 className="mt-3 font-heading text-3xl font-semibold text-white sm:text-4xl">
          Quem conhece, recomenda
        </h2>

        <div className="mx-auto mt-10 max-w-lg rounded-2xl border border-dashed border-brand-500 bg-brand-800/60 p-8">
          <p className="text-sm text-brand-100">
            [PENDENTE: exibir avaliações reais do Google Business Profile aqui — nome do
            paciente, nota, comentário e data — assim que houver integração ou autorização para
            reproduzi-las. Não inventar depoimentos.]
          </p>
        </div>

        <Link
          href={clinic.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-brand-800 shadow-sm transition-colors hover:bg-brand-50"
        >
          Ver todas as avaliações no Google
        </Link>
      </div>
    </section>
  );
}
