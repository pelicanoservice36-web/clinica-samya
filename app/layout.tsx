import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import WhatsappButton from "@/components/WhatsappButton";
import { localBusinessSchema } from "@/lib/schema";
import { clinic } from "@/lib/clinic-data";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.clinicasamya.com.br"),
  title: {
    default: `${clinic.name} | Fisioterapia e Reabilitação em Santo André`,
    template: `%s | ${clinic.name}`,
  },
  description:
    "Clínica multidisciplinar de saúde em Santo André - SP. Fisioterapia, Pilates clínico, acupuntura, quiropraxia, reabilitação vestibular e atendimento domiciliar.",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: clinic.name,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema()) }}
        />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <WhatsappButton />
      </body>
    </html>
  );
}
