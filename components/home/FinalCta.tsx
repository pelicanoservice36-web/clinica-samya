import { clinic } from "@/lib/clinic-data";

export default function FinalCta() {
  return (
    <section className="bg-brand-700 py-20 text-center text-white sm:py-24" id="contato">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-3xl font-semibold sm:text-4xl">
          Pronto para cuidar melhor da sua saúde?
        </h2>
        <p className="mt-4 text-brand-100">
          Entre em contato com nossa equipe e agende sua avaliação.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href={clinic.whatsappHrefWithMessage("Olá! Gostaria de agendar uma avaliação.")}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-brand-800 shadow-sm transition-colors hover:bg-brand-50"
          >
            Falar pelo WhatsApp
          </a>
          <a
            href={clinic.phoneHref}
            className="rounded-full border border-white/60 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            Ligar agora — {clinic.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
