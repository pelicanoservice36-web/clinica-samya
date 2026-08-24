type PageHeroProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export default function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="border-b border-brand-100 bg-sand-50 py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">{eyebrow}</p>
        <h1 className="mt-3 font-heading text-4xl font-semibold text-ink-900 sm:text-5xl">{title}</h1>
        {description && <p className="mt-5 text-lg text-ink-700">{description}</p>}
      </div>
    </section>
  );
}
