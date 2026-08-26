import Link from "next/link";
import { clinic } from "@/lib/clinic-data";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
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
      <div className="absolute inset-0 bg-gradient-to-r from-brand-900/90 via-brand-900/65 to-brand-900/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-900/75 via-transparent to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 md:py-32 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-sand-200">
            Clínica multidisciplinar de saúde em Santo André
          </p>
          <h1 className="mt-4 font-heading text-4xl font-semibold leading-tight text-white sm:text-5xl">
            Cuide da sua saúde com quem entende de movimento, dor e reabilitação.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-sand-100">
            Tratamentos personalizados em fisioterapia, Pilates clínico, acupuntura e diversas
            especialidades para você recuperar sua mobilidade, reduzir dores e viver melhor.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href={clinic.whatsappHrefWithMessage("Olá! Gostaria de agendar uma avaliação.")}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-brand-500 px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-400"
            >
              Agendar avaliação
            </Link>
            <Link
              href="/tratamentos"
              className="rounded-full border border-white/40 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20"
            >
              Conhecer tratamentos
            </Link>
          </div>
          <p className="mt-3 text-xs text-sand-200">
            {clinic.slogan}
          </p>
        </div>
      </div>
    </section>
  );
}
