import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import { clinic } from "@/lib/clinic-data";
import { doctorCrefito, doctorEducation, doctorExperience } from "@/lib/doctor";
import { realPhotos } from "@/lib/gallery";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "A Clínica",
  description:
    "Conheça a Clínica Samya Francis: clínica multidisciplinar de saúde, reabilitação e bem-estar em Santo André - SP.",
};

const differentiators = [
  "Atendimento individualizado",
  "Equipe multidisciplinar",
  "Profissionais especializados",
  "Ambiente acolhedor",
  "Estrutura moderna",
  "Atendimento domiciliar",
  "Localização de fácil acesso",
  "Atendimento para crianças, adultos e idosos",
];

export default function ClinicaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Início", path: "/" },
              { name: "A Clínica", path: "/clinica" },
            ])
          ),
        }}
      />
      <PageHero
        eyebrow="A Clínica"
        title="Conheça a Clínica Samya Francis"
        description={clinic.slogan}
      />

      <section className="bg-white py-16 sm:py-20">
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
            <h2 className="font-heading text-2xl font-semibold text-ink-900">
              Experiência, conhecimento e cuidado humano
            </h2>
            <p className="mt-4 text-ink-700">
              A Clínica Samya Francis é uma clínica multidisciplinar de saúde, reabilitação e
              bem-estar, guiada pela Dra. Samya Francis, reunindo mais de 20 especialidades em um
              único local para cuidar de você em todas as fases da vida.
            </p>
            <p className="mt-4 inline-block rounded-full border border-brand-200 bg-brand-50 px-4 py-1.5 text-sm font-medium text-brand-800">
              {doctorCrefito}
            </p>
          </div>
        </div>

        <div className="mx-auto mt-20 max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-heading text-2xl font-semibold text-ink-900">
            Formação e experiência da Dra. Samya Francis
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-ink-600">
            Mais de 17 anos dedicados à fisioterapia, reabilitação e terapias complementares.
          </p>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-brand-100 bg-sand-50 p-6 sm:p-8">
              <h3 className="font-heading text-lg font-semibold text-ink-900">
                Formação e especializações
              </h3>
              <ul className="mt-4 grid gap-x-6 gap-y-2.5 sm:grid-cols-2">
                {doctorEducation.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-ink-700">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-brand-100 bg-sand-50 p-6 sm:p-8">
              <h3 className="font-heading text-lg font-semibold text-ink-900">Experiência clínica</h3>
              <ul className="mt-4 space-y-2.5">
                {doctorExperience.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-ink-700">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-20 max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-heading text-2xl font-semibold text-ink-900">
            Por que escolher a Clínica Samya Francis?
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {differentiators.map((item) => (
              <div
                key={item}
                className="rounded-xl border border-brand-100 bg-sand-50 p-5 text-sm font-medium text-ink-800"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-20 max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-heading text-2xl font-semibold text-ink-900">
            Nosso espaço
          </h2>
          <div className="mx-auto mt-8 grid max-w-4xl gap-5 sm:grid-cols-2">
            {realPhotos.map((photo) => (
              <div
                key={photo.src}
                className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-md shadow-brand-900/10"
              >
                <Image src={photo.src} alt={photo.alt} fill sizes="(min-width: 640px) 50vw, 100vw" className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
