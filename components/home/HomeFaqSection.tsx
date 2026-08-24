import Link from "next/link";
import FaqAccordion from "@/components/FaqAccordion";
import { faqItems } from "@/lib/clinic-data";

export default function HomeFaqSection() {
  const preview = faqItems.slice(0, 6);

  return (
    <section className="bg-sand-50 py-20 sm:py-24" id="faq">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">FAQ</p>
          <h2 className="mt-3 font-heading text-3xl font-semibold text-ink-900 sm:text-4xl">
            Perguntas frequentes
          </h2>
        </div>

        <div className="mt-10">
          <FaqAccordion items={preview} />
        </div>

        <div className="mt-6 text-center">
          <Link
            href="/faq"
            className="text-sm font-semibold text-brand-700 underline-offset-4 hover:underline"
          >
            Ver todas as perguntas →
          </Link>
        </div>
      </div>
    </section>
  );
}
