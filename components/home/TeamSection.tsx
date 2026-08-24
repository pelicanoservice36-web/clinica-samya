import Link from "next/link";
import PlaceholderMedia from "@/components/PlaceholderMedia";

export default function TeamSection() {
  return (
    <section className="bg-sand-50 py-20 sm:py-24" id="quem-somos">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 md:grid-cols-2 md:items-center lg:px-8">
        <PlaceholderMedia label="foto real da Dra. Samya Francis" className="order-last md:order-first" />

        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">
            Quem somos
          </p>
          <h2 className="mt-3 font-heading text-3xl font-semibold text-ink-900 sm:text-4xl">
            Conheça a Clínica Samya Francis
          </h2>
          <p className="mt-4 text-ink-700">
            Uma clínica multidisciplinar de saúde, reabilitação e bem-estar, guiada pela Dra. Samya
            Francis. Experiência clínica, conhecimento técnico e cuidado humano em cada
            atendimento.
          </p>
          <p className="mt-4 rounded-xl border border-dashed border-brand-300 bg-brand-50 p-4 text-sm text-brand-700">
            [PENDENTE: incluir aqui formação acadêmica e especializações da Dra. Samya Francis
            (graduação, cursos de acupuntura, quiropraxia, RPG, reabilitação vestibular etc.),
            confirmadas diretamente com a clínica — não localizadas publicamente no site oficial
            durante esta pesquisa.]
          </p>
          <Link
            href="/clinica"
            className="mt-6 inline-block text-sm font-semibold text-brand-700 underline-offset-4 hover:underline"
          >
            Conhecer a equipe →
          </Link>
        </div>
      </div>
    </section>
  );
}
