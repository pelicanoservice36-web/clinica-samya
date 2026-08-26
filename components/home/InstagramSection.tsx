import Link from "next/link";
import { clinic } from "@/lib/clinic-data";

export default function InstagramSection() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">
              Instagram
            </p>
            <h2 className="mt-3 font-heading text-3xl font-semibold text-ink-900 sm:text-4xl">
              Conteúdos para cuidar melhor da sua saúde
            </h2>
          </div>
          <Link
            href={clinic.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-brand-700 underline-offset-4 hover:underline"
          >
            Ver nosso Instagram →
          </Link>
        </div>
      </div>
    </section>
  );
}
