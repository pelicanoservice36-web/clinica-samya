import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import PlaceholderMedia from "@/components/PlaceholderMedia";
import { clinic } from "@/lib/clinic-data";

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
      <PageHero
        eyebrow="A Clínica"
        title="Conheça a Clínica Samya Francis"
        description={clinic.slogan}
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 md:grid-cols-2 md:items-center lg:px-8">
          <PlaceholderMedia label="foto real da Dra. Samya Francis" className="order-last md:order-first" />

          <div>
            <h2 className="font-heading text-2xl font-semibold text-ink-900">
              Experiência, conhecimento e cuidado humano
            </h2>
            <p className="mt-4 text-ink-700">
              A Clínica Samya Francis é uma clínica multidisciplinar de saúde, reabilitação e
              bem-estar, guiada pela Dra. Samya Francis, reunindo mais de 20 especialidades em um
              único local para cuidar de você em todas as fases da vida.
            </p>
            <p className="mt-4 rounded-xl border border-dashed border-brand-300 bg-brand-50 p-4 text-sm text-brand-700">
              [PENDENTE: incluir formação acadêmica e especializações da Dra. Samya Francis
              (graduação, cursos de acupuntura, quiropraxia, RPG, reabilitação vestibular,
              dry needling, bandagem funcional, terapia manual etc.), confirmadas diretamente com a
              clínica — não localizadas publicamente no site oficial durante esta pesquisa.]
            </p>
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
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {["Recepção", "Salas de atendimento", "Equipamentos", "Estúdio de Pilates", "Equipe", "Ambiente"].map(
              (item) => (
                <PlaceholderMedia key={item} label={`foto real — ${item}`} />
              ),
            )}
          </div>
        </div>
      </section>
    </>
  );
}
