const differentiators = [
  "Atendimento individualizado",
  "Equipe multidisciplinar",
  "Profissionais especializados",
  "Ambiente acolhedor",
  "Estrutura moderna",
  "Tratamentos personalizados",
  "Atendimento domiciliar",
  "Localização de fácil acesso",
  "Atendimento para crianças, adultos e idosos",
  "Mais de 20 especialidades em um único local",
];

export default function DifferentiatorsGrid() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">
            Diferenciais
          </p>
          <h2 className="mt-3 font-heading text-3xl font-semibold text-ink-900 sm:text-4xl">
            Por que escolher a Clínica Samya Francis?
          </h2>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
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
    </section>
  );
}
