"use client";

import Link from "next/link";
import { useState } from "react";
import { clinic } from "@/lib/clinic-data";

const NAV_LINKS = [
  { href: "/", label: "Início" },
  { href: "/clinica", label: "A Clínica" },
  { href: "/tratamentos", label: "Tratamentos" },
  { href: "/pilates", label: "Pilates" },
  { href: "/atendimento-domiciliar", label: "Atendimento Domiciliar" },
  { href: "/faq", label: "FAQ" },
  { href: "/contato", label: "Contato" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-brand-100 bg-sand-50/95 backdrop-blur supports-[backdrop-filter]:bg-sand-50/80">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="font-heading text-lg font-semibold tracking-tight text-brand-800 sm:text-xl">
          Clínica Samya Francis
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink-700 transition-colors hover:text-brand-700"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            href={clinic.whatsappHrefWithMessage("Olá! Gostaria de agendar uma avaliação.")}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-700"
          >
            Agendar avaliação
          </Link>
        </div>

        <button
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-md text-ink-800 lg:hidden"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
          >
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div id="mobile-menu" className="border-t border-brand-100 bg-sand-50 lg:hidden">
          <nav className="flex flex-col gap-1 px-4 py-4 sm:px-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-3 text-base font-medium text-ink-800 transition-colors hover:bg-brand-50 hover:text-brand-700"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={clinic.whatsappHrefWithMessage("Olá! Gostaria de agendar uma avaliação.")}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-brand-600 px-5 py-3 text-center text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-700"
            >
              Agendar avaliação
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
