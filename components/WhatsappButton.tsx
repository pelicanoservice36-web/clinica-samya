import { clinic } from "@/lib/clinic-data";

export default function WhatsappButton() {
  return (
    <a
      href={clinic.whatsappHrefWithMessage("Olá! Gostaria de agendar uma avaliação.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar pelo WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-700 sm:bottom-6 sm:right-6"
    >
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12.04 2c-5.52 0-10 4.48-10 10 0 1.77.46 3.45 1.27 4.9L2 22l5.25-1.38A9.94 9.94 0 0 0 12.04 22c5.52 0 10-4.48 10-10s-4.48-10-10-10Zm0 18.15c-1.6 0-3.13-.43-4.46-1.24l-.32-.19-3.12.82.83-3.04-.2-.31A8.13 8.13 0 0 1 3.89 12c0-4.5 3.66-8.15 8.15-8.15S20.19 7.5 20.19 12s-3.66 8.15-8.15 8.15Zm4.48-6.1c-.25-.12-1.45-.71-1.67-.8-.22-.08-.39-.12-.55.12-.16.25-.63.8-.78.96-.14.16-.29.18-.53.06-.25-.12-1.04-.38-1.98-1.21-.73-.65-1.23-1.45-1.37-1.7-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.16.04-.31-.02-.43-.06-.12-.55-1.32-.75-1.81-.2-.48-.4-.41-.55-.42-.14-.01-.31-.01-.47-.01-.16 0-.43.06-.65.31-.22.25-.86.84-.86 2.04 0 1.2.88 2.36 1 2.52.12.16 1.73 2.64 4.19 3.7.59.25 1.05.4 1.41.51.59.19 1.13.16 1.56.1.48-.07 1.45-.59 1.65-1.16.2-.57.2-1.06.14-1.16-.06-.11-.22-.17-.47-.29Z" />
      </svg>
    </a>
  );
}
