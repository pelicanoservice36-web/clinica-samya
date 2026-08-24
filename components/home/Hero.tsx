import Link from "next/link";
import { clinic } from "@/lib/clinic-data";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-sand-50">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-2 md:items-center md:py-24 lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">
            Clínica multidisciplinar de saúde em Santo André
          </p>
          <h1 className="mt-4 font-heading text-4xl font-semibold leading-tight text-ink-900 sm:text-5xl">
            Cuide da sua saúde com quem entende de movimento, dor e reabilitação.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-ink-700">
            Tratamentos personalizados em fisioterapia, Pilates clínico, acupuntura e diversas
            especialidades para você recuperar sua mobilidade, reduzir dores e viver melhor.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href={clinic.whatsappHrefWithMessage("Olá! Gostaria de agendar uma avaliação.")}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-brand-600 px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-700"
            >
              Agendar avaliação
            </Link>
            <Link
              href="/tratamentos"
              className="rounded-full border border-brand-300 bg-white px-7 py-3.5 text-sm font-semibold text-brand-800 transition-colors hover:border-brand-400"
            >
              Conhecer tratamentos
            </Link>
          </div>
          <p className="mt-3 text-xs text-ink-600">
            {clinic.slogan}
          </p>
        </div>

        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-2xl shadow-brand-900/20 md:aspect-square">
          <video
            src="/gallery/clinica-samya.mp4"
            poster="/gallery/pilates-estudio.jpg"
            autoPlay
            muted
            loop
            playsInline
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-900/35 via-brand-900/0 to-transparent" />
          <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
        </div>
      </div>
    </section>
  );
}
