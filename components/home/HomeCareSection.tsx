import Link from "next/link";
import { clinic } from "@/lib/clinic-data";

const steps = [
  { title: "Agendamento", description: "Contato por telefone ou WhatsApp, com atendimento agendado em até 48 horas." },
  { title: "Avaliação", description: "Anamnese, exame físico e análise de exames complementares na primeira visita." },
  { title: "Plano terapêutico", description: "Proposta de tratamento personalizada, apresentada a você e sua família." },
  { title: "Acompanhamento da evolução", description: "Frequência e evolução clínica definidas e acompanhadas ao longo do tratamento." },
];

export default function HomeCareSection() {
  return (
    <section className="bg-white py-20 sm:py-24" id="atendimento-domiciliar">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">
            Atendimento Domiciliar
          </p>
          <h2 className="mt-3 font-heading text-3xl font-semibold text-ink-900 sm:text-4xl">
            Tratamento profissional no conforto da sua casa
          </h2>
          <p className="mt-4 text-ink-700">
            Para pacientes com dificuldade de locomoção ou que preferem realizar o tratamento em
            casa, oferecemos atendimento domiciliar completo, com os mesmos recursos utilizados na
            clínica.
          </p>

          <ol className="mt-8 space-y-5">
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

          <Link
            href={clinic.whatsappHrefWithMessage("Olá! Gostaria de solicitar atendimento domiciliar.")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-full bg-brand-600 px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-700"
          >
            Solicitar atendimento domiciliar
          </Link>
        </div>
      </div>
    </section>
  );
}
