export type GalleryPhoto = { src: string; alt: string };

// Fotos reais da clínica, obtidas via links de fotos específicas do Google
// Maps compartilhados pelo usuário (a galeria completa do Maps fica atrás
// de login e não é acessível por scraping — ver memória do projeto).
export const realPhotos: GalleryPhoto[] = [
  { src: "/gallery/fachada.jpg", alt: "Fachada e placa da Clínica Samya Francis" },
  { src: "/gallery/sala-atendimento.jpg", alt: "Sala de atendimento pediátrico da Clínica Samya Francis" },
  { src: "/gallery/equipamentos.jpg", alt: "Sala de equipamentos da Clínica Samya Francis" },
  { src: "/gallery/pilates-estudio.jpg", alt: "Estúdio de Pilates clínico da Clínica Samya Francis" },
];

// Itens ainda sem foto real confirmada.
export const pendingGalleryItems = ["Recepção", "Equipe"];
