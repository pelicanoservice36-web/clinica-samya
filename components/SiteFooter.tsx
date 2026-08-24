import Link from "next/link";
import { clinic, treatments } from "@/lib/clinic-data";

const treatmentLinks = treatments.slice(0, 6);

export default function SiteFooter() {
  return (
    <footer className="border-t border-brand-100 bg-brand-900 text-brand-50">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4 lg:px-8">
        <div>
          <p className="font-heading text-lg font-semibold text-white">Clínica Samya Francis</p>
          <p className="mt-3 text-sm text-brand-200">{clinic.slogan}</p>
        </div>

        <div>
          <p className="text-sm font-semibold text-white">Tratamentos</p>
          <ul className="mt-3 space-y-2 text-sm text-brand-200">
            {treatmentLinks.map((t) => (
              <li key={t.slug}>
                <Link href="/tratamentos" className="transition-colors hover:text-white">
                  {t.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-white">Institucional</p>
          <ul className="mt-3 space-y-2 text-sm text-brand-200">
            <li>
              <Link href="/clinica" className="transition-colors hover:text-white">
                A Clínica
              </Link>
            </li>
            <li>
              <Link href="/pilates" className="transition-colors hover:text-white">
                Pilates Clínico
              </Link>
            </li>
            <li>
              <Link href="/atendimento-domiciliar" className="transition-colors hover:text-white">
                Atendimento Domiciliar
              </Link>
            </li>
            <li>
              <Link href="/faq" className="transition-colors hover:text-white">
                Perguntas frequentes
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-white">Contato</p>
          <ul className="mt-3 space-y-2 text-sm text-brand-200">
            <li>{clinic.addressFull}</li>
            <li>
              <a href={clinic.phoneHref} className="transition-colors hover:text-white">
                {clinic.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={clinic.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-white"
              >
                WhatsApp: {clinic.whatsappDisplay}
              </a>
            </li>
            <li>{clinic.hours}</li>
            <li>
              <a
                href={clinic.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-white"
              >
                {clinic.instagramHandle}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-brand-800">
        <p className="mx-auto max-w-7xl px-4 py-5 text-xs text-brand-300 sm:px-6 lg:px-8">
          © {new Date().getFullYear()} Clínica Samya Francis. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
