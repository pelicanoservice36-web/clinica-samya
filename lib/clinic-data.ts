// Fonte única das informações institucionais verificadas no site oficial
// (https://www.clinicasamya.com.br/) em 2026-08-24. Não adicionar dados
// não verificados aqui — usar placeholders explícitos nos componentes.

export const clinic = {
  name: "Clínica Samya Francis",
  slogan: "Não devolvemos a vida, e sim a vontade de viver.",
  phoneDisplay: "(11) 4472-5832",
  phoneHref: "tel:+551144725832",
  whatsappDisplay: "(11) 98185-9462",
  whatsappNumber: "5511981859462",
  get whatsappHref() {
    return `https://wa.me/${this.whatsappNumber}`;
  },
  whatsappHrefWithMessage(message: string) {
    return `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(message)}`;
  },
  address: {
    street: "Rua Frei Caneca, 280",
    neighborhood: "Vila São Pedro",
    city: "Santo André",
    state: "SP",
    postalCode: "09210-190",
  },
  get addressFull() {
    return `${this.address.street}, ${this.address.neighborhood}, ${this.address.city} - ${this.address.state}`;
  },
  hours: "Segunda a sexta, 8h às 20h",
  mapsUrl:
    "https://www.google.com/maps/place/Cl%C3%ADnica+Samya+Francis/@-23.6410805,-46.5292761,17z/data=!4m8!3m7!1s0x94ce42a0b6c79b2f:0x1417b1aef2cf3786!8m2!3d-23.6410854!4d-46.5267012!9m1!1b1!16s%2Fg%2F11bttp8y0s?entry=ttu&g_ep=EgoyMDI2MDgyMy4wIKXMDSoASAFQAw%3D%3D",
  instagramUrl: "https://www.instagram.com/clinicasamyafrancis/",
  instagramHandle: "@clinicasamyafrancis",
} as const;

export type Treatment = {
  slug: string;
  name: string;
  shortDescription: string;
  featured?: boolean;
};

// Lista de serviços conforme divulgada publicamente pela clínica.
export const treatments: Treatment[] = [
  {
    slug: "fisioterapia",
    name: "Fisioterapia",
    shortDescription:
      "Tratamento traumato-ortopédico, neurofuncional, pediátrico, cardiorrespiratório e mais.",
    featured: true,
  },
  {
    slug: "acupuntura",
    name: "Acupuntura",
    shortDescription: "Técnica milenar para alívio de dores e reequilíbrio do corpo.",
    featured: true,
  },
  {
    slug: "pilates",
    name: "Pilates Clínico",
    shortDescription: "Aulas individualizadas em equipamentos Cadillac, Reformer, Ladder Barrel e Chair.",
    featured: true,
  },
  {
    slug: "quiropraxia",
    name: "Quiropraxia",
    shortDescription: "Ajustes manuais para alinhamento articular e alívio de dores.",
    featured: true,
  },
  {
    slug: "reabilitacao-vestibular",
    name: "Reabilitação Vestibular",
    shortDescription: "Tratamento para tontura, vertigem e distúrbios do equilíbrio.",
    featured: true,
  },
  {
    slug: "atendimento-domiciliar",
    name: "Atendimento Domiciliar",
    shortDescription: "Avaliação e tratamento fisioterapêutico no conforto da sua casa.",
    featured: true,
  },
  {
    slug: "rpg",
    name: "RPG",
    shortDescription: "Reeducação Postural Global para correção de desequilíbrios posturais.",
  },
  {
    slug: "liberacao-miofascial",
    name: "Liberação Miofascial",
    shortDescription: "Técnica manual para redução de tensão muscular e melhora da mobilidade.",
  },
  {
    slug: "fisioterapia-pelvica",
    name: "Fisioterapia Pélvica",
    shortDescription: "Cuidado especializado para disfunções do assoalho pélvico.",
  },
  {
    slug: "fisioterapia-pediatrica",
    name: "Fisioterapia Pediátrica",
    shortDescription: "Atendimento especializado para o desenvolvimento motor infantil.",
  },
  {
    slug: "fisioterapia-geriatrica",
    name: "Fisioterapia Geriátrica",
    shortDescription: "Cuidado com a mobilidade, equilíbrio e autonomia do paciente idoso.",
  },
  {
    slug: "fisioterapia-cardiorrespiratoria",
    name: "Fisioterapia Cardiorrespiratória",
    shortDescription: "Reabilitação da função cardíaca e respiratória.",
  },
  {
    slug: "fisioterapia-atm",
    name: "Fisioterapia para ATM",
    shortDescription: "Tratamento de disfunções da articulação temporomandibular.",
  },
  {
    slug: "drenagem-linfatica",
    name: "Drenagem Linfática",
    shortDescription: "Técnica manual para redução de edemas e retenção de líquidos.",
  },
  {
    slug: "bandagem-funcional",
    name: "Bandagem Funcional",
    shortDescription: "Suporte funcional para articulações e músculos durante a recuperação.",
  },
  {
    slug: "ilib",
    name: "ILIB",
    shortDescription: "Terapia complementar de luz para recuperação celular.",
  },
  {
    slug: "fonoaudiologia",
    name: "Fonoaudiologia",
    shortDescription: "Avaliação e tratamento da comunicação, voz e deglutição.",
  },
  {
    slug: "psicologia",
    name: "Psicologia",
    shortDescription: "Suporte psicológico integrado ao cuidado multidisciplinar.",
  },
  {
    slug: "nutricao",
    name: "Nutrição",
    shortDescription: "Orientação nutricional personalizada como parte do tratamento.",
  },
  {
    slug: "florais-de-bach",
    name: "Florais de Bach",
    shortDescription: "Terapia complementar para equilíbrio emocional.",
  },
  {
    slug: "reiki",
    name: "Reiki",
    shortDescription: "Terapia complementar de harmonização energética.",
  },
];

export const featuredTreatments = treatments.filter((t) => t.featured);

export type NeedCategory = {
  title: string;
  description: string;
  relatedSlugs: string[];
};

// Agrupamento por necessidade do paciente, para a seção "Como podemos ajudar".
export const needCategories: NeedCategory[] = [
  {
    title: "Dor e coluna",
    description: "Dor lombar, cervical ou entre as escápulas que atrapalha o dia a dia.",
    relatedSlugs: ["fisioterapia", "quiropraxia", "rpg", "liberacao-miofascial"],
  },
  {
    title: "Postura e movimento",
    description: "Desequilíbrios posturais, rigidez e limitação de movimento.",
    relatedSlugs: ["rpg", "pilates", "quiropraxia"],
  },
  {
    title: "Reabilitação",
    description: "Recuperação de lesões, cirurgias ou condições neurológicas.",
    relatedSlugs: ["fisioterapia", "fisioterapia-cardiorrespiratoria"],
  },
  {
    title: "Tontura e equilíbrio",
    description: "Vertigem, labirintite e distúrbios vestibulares.",
    relatedSlugs: ["reabilitacao-vestibular"],
  },
  {
    title: "Pós-operatório",
    description: "Acompanhamento fisioterapêutico após procedimentos cirúrgicos.",
    relatedSlugs: ["fisioterapia", "atendimento-domiciliar"],
  },
  {
    title: "Pilates clínico",
    description: "Fortalecimento, flexibilidade e consciência corporal com acompanhamento individual.",
    relatedSlugs: ["pilates"],
  },
  {
    title: "Saúde da mulher",
    description: "Cuidados especializados em fisioterapia pélvica.",
    relatedSlugs: ["fisioterapia-pelvica"],
  },
  {
    title: "Atendimento domiciliar",
    description: "Tratamento completo sem sair de casa, para quem tem dificuldade de locomoção.",
    relatedSlugs: ["atendimento-domiciliar"],
  },
  {
    title: "Bem-estar",
    description: "Terapias complementares para equilíbrio físico e emocional.",
    relatedSlugs: ["acupuntura", "reiki", "florais-de-bach"],
  },
];

// Duas perguntas foram removidas daqui (não só ocultadas na UI) porque o FaqAccordion
// e o FAQPage schema (lib/schema.ts) consomem faqItems diretamente — deixar a resposta
// como "[PENDENTE: ...]" published significa que uma IA (Google AI Overview, ChatGPT,
// Perplexity) pode citar esse texto de placeholder como se fosse a resposta oficial da
// clínica. Readicionar com a resposta real assim que a clínica confirmar:
// - "A avaliação é cobrada?" (política de cobrança da avaliação inicial)
// - "Quais formas de pagamento são aceitas?" (cartão, PIX, parcelamento)
export const faqItems = [
  {
    question: "A clínica atende convênios?",
    answer:
      "O atendimento é particular, com possibilidade de reembolso junto ao seu convênio, conforme a cobertura do seu plano. Consulte nossa equipe para mais detalhes sobre o processo de reembolso.",
  },
  {
    question: "Como funciona o reembolso?",
    answer:
      "Após o atendimento particular, fornecemos os documentos necessários (recibo e relatório, quando aplicável) para que você solicite o reembolso diretamente ao seu convênio.",
  },
  {
    question: "Quanto dura uma sessão?",
    answer:
      "Varia conforme o tratamento. As sessões de Pilates clínico, por exemplo, têm cerca de 55 minutos. Fale com nossa equipe para saber a duração do tratamento que você procura.",
  },
  {
    question: "A clínica atende crianças?",
    answer: "Sim, oferecemos fisioterapia pediátrica com atendimento especializado para o desenvolvimento infantil.",
  },
  {
    question: "A clínica atende idosos?",
    answer: "Sim, contamos com fisioterapia geriátrica voltada à mobilidade, equilíbrio e autonomia do paciente idoso.",
  },
  {
    question: "Existe atendimento domiciliar?",
    answer:
      "Sim. Após contato, o atendimento domiciliar é agendado em até 48 horas, com avaliação completa (anamnese, exame físico e análise de exames) na primeira visita.",
  },
  {
    question: "Como funciona o Pilates clínico?",
    answer:
      "As aulas usam equipamentos Cadillac, Reformer, Ladder Barrel e Chair, com avaliação prévia individual e exercícios personalizados conforme sua rotina e necessidades.",
  },
  {
    question: "Quantas pessoas participam das aulas de Pilates?",
    answer: "As turmas são reduzidas, com no máximo 3 alunos por horário, garantindo atenção individualizada.",
  },
  {
    question: "A clínica atende aos sábados?",
    answer: "O horário de funcionamento divulgado é de segunda a sexta-feira, das 8h às 20h.",
  },
  {
    question: "Onde a clínica está localizada?",
    answer: "Rua Frei Caneca, 280, Vila São Pedro, Santo André - SP, CEP 09210-190.",
  },
  {
    question: "É necessário agendamento?",
    answer: "Sim, recomendamos agendar previamente por telefone ou WhatsApp para garantir seu horário.",
  },
];
