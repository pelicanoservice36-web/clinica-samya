import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { clinic } from "@/lib/clinic-data";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Atendimento Domiciliar",
  description:
    "Atendimento fisioterapêutico domiciliar em Santo André. Avaliação em até 48h, plano terapêutico personalizado e acompanhamento da evolução clínica.",
};

const steps = [
  { title: "Agendamento", description: "Contato por telefone ou WhatsApp; atendimento agendado em até 48 horas." },
  {
    title: "Primeira consulta (~1h)",
    description:
      "Avaliação completa com anamnese, exame físico e análise de exames complementares (imagem e laboratoriais).",
  },
  {
    title: "Plano terapêutico",
    description: "Proposta de tratamento domiciliar personalizada, apresentada à família do paciente.",
  },
  {
    title: "Acompanhamento",
    description: "Definição de frequência das sessões e acompanhamento contínuo da evolução clínica.",
  },
];

const resources = [
  { category: "Cinesioterapia e mecanoterapia", items: "Bolas, halteres, tornozeleiras, mini bike, discos e pranchas de equilíbrio" },
  { category: "Eletroterapia", items: "TENS, FES, ultrassom (US), laser" },
  { category: "Termoterapia", items: "Infravermelho (IV)" },
  { category: "Monitoramento", items: "Aferição de pressão arterial, estetoscópio, oxímetro de pulso" },
  { category: "Suporte clínico", items: "Aspirador de secreção traqueal portátil" },
];

export default function AtendimentoDomiciliarPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Início", path: "/" },
              { name: "Atendimento Domiciliar", path: "/atendimento-domiciliar" },
            ])
          ),
        }}
      />
      <PageHero
        eyebrow="Atendimento Domiciliar"
        title="Tratamento profissional no conforto da sua casa"
        description="Para pacientes com dificuldade de locomoção ou que preferem tratar-se em casa, com a mesma qualidade e recursos da clínica."
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="font-heading text-2xl font-semibold text-ink-900">Como funciona</h2>
            <ol className="mt-6 space-y-6">
              {steps.map((step, index) => (
                <li key={step.title} className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-600 text-sm font-semibold text-white">
                    {index + 1}
                  </span>
                  <div>
                    <p className="font-semibold text-ink-900">{step.title}</p>
                    <p className="text-sm text-ink-600">{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-16">
            <h2 className="font-heading text-2xl font-semibold text-ink-900">
              Recursos e equipamentos utilizados
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {resources.map((r) => (
                <div key={r.category} className="rounded-xl border border-brand-100 bg-sand-50 p-5">
                  <p className="text-sm font-semibold text-brand-800">{r.category}</p>
                  <p className="mt-1 text-sm text-ink-600">{r.items}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-14 rounded-2xl bg-brand-700 p-8 text-center text-white sm:p-12">
            <h2 className="font-heading text-2xl font-semibold sm:text-3xl">
              Solicite atendimento domiciliar
            </h2>
            <p className="mt-3 text-brand-100">
              Fale com nossa equipe pelo telefone {clinic.phoneDisplay} ou pelo WhatsApp.
            </p>
            <a
              href={clinic.whatsappHrefWithMessage("Olá! Gostaria de solicitar atendimento domiciliar.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-brand-800 shadow-sm transition-colors hover:bg-brand-50"
            >
              Solicitar atendimento domiciliar
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
