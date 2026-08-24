import Link from "next/link";
import { clinic } from "@/lib/clinic-data";

export default function LocationSection() {
  return (
    <section className="bg-white py-20 sm:py-24" id="localizacao">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">
            Localização
          </p>
          <h2 className="mt-3 font-heading text-3xl font-semibold text-ink-900 sm:text-4xl">
            Estamos perto de você
          </h2>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <div>
            <p className="text-ink-800">
              {clinic.address.street}
              <br />
              {clinic.address.neighborhood}
              <br />
              {clinic.address.city} - {clinic.address.state}, CEP {clinic.address.postalCode}
            </p>
            <p className="mt-4 text-sm text-ink-600">{clinic.hours}</p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href={clinic.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-700"
              >
                Como chegar
              </Link>
              <Link
                href={clinic.whatsappHrefWithMessage("Olá! Gostaria de agendar um atendimento.")}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-brand-300 bg-white px-6 py-3 text-sm font-semibold text-brand-800 transition-colors hover:border-brand-400"
              >
                Agendar atendimento
              </Link>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-brand-100">
            <iframe
              title="Mapa de localização da Clínica Samya Francis"
              src="https://www.google.com/maps?q=Rua+Frei+Caneca+280+Vila+São+Pedro+Santo+André+SP&output=embed"
              className="h-full min-h-[320px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
