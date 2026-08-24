import Image from "next/image";
import PlaceholderMedia from "@/components/PlaceholderMedia";

const pendingItems = ["Recepção", "Salas de atendimento", "Equipamentos", "Equipe"];

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
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-md shadow-brand-900/10">
            <Image
              src="/gallery/fachada.jpg"
              alt="Fachada e placa da Clínica Samya Francis"
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-md shadow-brand-900/10">
            <Image
              src="/gallery/pilates-estudio.jpg"
              alt="Estúdio de Pilates clínico da Clínica Samya Francis"
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          {pendingItems.map((item) => (
            <PlaceholderMedia key={item} label={`foto real — ${item}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
