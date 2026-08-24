import Link from "next/link";
import { clinic } from "@/lib/clinic-data";
import { googleRating, googleReviewCount, googleReviews } from "@/lib/reviews";

export default function ReviewsSection() {
  return (
    <section className="bg-brand-900 py-20 text-brand-50 sm:py-24" id="avaliacoes">
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-widest text-brand-300">
          Avaliações
        </p>
        <h2 className="mt-3 font-heading text-3xl font-semibold text-white sm:text-4xl">
          Quem conhece, recomenda
        </h2>
        <p className="mt-3 text-brand-200">
          {googleRating} de nota, com {googleReviewCount} avaliações no Google
        </p>

        <div className="mx-auto mt-10 grid gap-6 text-left sm:grid-cols-2 lg:grid-cols-3">
          {googleReviews.map((review) => (
            <div
              key={review.name}
              className="flex flex-col rounded-2xl border border-brand-700 bg-brand-800/60 p-6"
            >
              <span className="text-amber-400" aria-hidden="true">
                ★★★★★
              </span>
              <p className="mt-3 flex-1 text-sm text-brand-50">&ldquo;{review.text}&rdquo;</p>
              <div className="mt-4 border-t border-brand-700 pt-3">
                <p className="text-sm font-semibold text-white">{review.name}</p>
                <p className="text-xs text-brand-300">
                  {review.reviewerMeta} · {review.relativeTime}
                </p>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-6 text-xs text-brand-300">
          Avaliações reais extraídas do Google Maps (texto exibido como o próprio Google mostra,
          incluindo truncamento com &ldquo;…&rdquo;).
        </p>

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
