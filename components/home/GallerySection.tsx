import PlaceholderMedia from "@/components/PlaceholderMedia";

const galleryItems = [
  "Recepção",
  "Salas de atendimento",
  "Equipamentos",
  "Estúdio de Pilates",
  "Equipe",
  "Ambiente",
];

export default function GallerySection() {
  return (
    <section className="bg-sand-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">
            Estrutura
          </p>
          <h2 className="mt-3 font-heading text-3xl font-semibold text-ink-900 sm:text-4xl">
            Conheça nosso espaço
          </h2>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item) => (
            <PlaceholderMedia key={item} label={`foto real — ${item}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
