import Image from "next/image";
import Link from "next/link";
import { doctorCrefito } from "@/lib/doctor";

const highlights = [
  "Fisioterapia — UNI SANT'ANNA",
  "Especialista em Acupuntura",
  "Especialista em Quiropraxia",
  "Reabilitação Vestibular e Neurológica",
];

export default function TeamSection() {
  return (
    <section className="bg-sand-50 py-20 sm:py-24" id="quem-somos">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 md:grid-cols-2 md:items-center lg:px-8">
        <div className="order-last flex items-center justify-center rounded-2xl bg-brand-50 p-10 md:order-first">
          <div className="relative h-56 w-56 overflow-hidden rounded-full shadow-xl shadow-brand-900/15 ring-4 ring-white sm:h-64 sm:w-64">
            <Image
              src="/team/samya-francis.jpg"
              alt="Dra. Samya Francis"
              fill
              sizes="256px"
              className="object-cover"
            />
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">
            Quem somos
          </p>
          <h2 className="mt-3 font-heading text-3xl font-semibold text-ink-900 sm:text-4xl">
            Conheça a Clínica Samya Francis
          </h2>
          <p className="mt-4 text-ink-700">
            Uma clínica multidisciplinar de saúde, reabilitação e bem-estar, guiada pela Dra. Samya
            Francis ({doctorCrefito}), com mais de 17 anos de atendimento em fisioterapia,
            reabilitação e terapias complementares.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {highlights.map((item) => (
              <span
                key={item}
                className="rounded-full border border-brand-200 bg-white px-3 py-1.5 text-xs font-medium text-brand-800"
              >
                {item}
              </span>
            ))}
          </div>
          <Link
            href="/clinica"
            className="mt-6 inline-block text-sm font-semibold text-brand-700 underline-offset-4 hover:underline"
          >
            Ver formação completa →
          </Link>
        </div>
      </div>
    </section>
  );
}
