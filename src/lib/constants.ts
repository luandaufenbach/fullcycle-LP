export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://fullcycle.com.br';

export const company = {
  name: 'Full Cycle',
  legalName: 'Full Cycle Consultoria e Restauração Ecológica',
  cnpj: '67.014.820/0001-03',
  serviceArea: 'todo o estado de Santa Catarina',
  description:
    'Licenciamento ambiental, CAR, ISO 14001 e restauração ecológica em Santa Catarina, com a bióloga Gabriela Gomes.',
};

export const contactInfo = {
  whatsapp: 'https://wa.me/5511999999999',
  email: 'contato@fullcycle.com.br', // TODO: substituir pelo email real quando disponivel
  linkedin: 'https://www.linkedin.com/in/gabriela-gomes-674b5689/',
};

export const navItems = [
  { label: 'Serviços', href: '#servicos' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Dúvidas', href: '#duvidas' },
  { label: 'Contato', href: '#contato' },
];

export const gabriela = {
  name: 'Gabriela Gomes',
  role: 'Bióloga e consultora ambiental',
};

export const timeline = [
  {
    year: '2012',
    title: 'Ciências Biológicas, UFSC',
    description: 'Formação em Florianópolis, com foco em ecologia e botânica.',
  },
  {
    year: '2015',
    title: 'Mudança para a Austrália',
    description: 'Primeiros trabalhos com ecossistemas australianos e restauração em larga escala.',
  },
  {
    year: '2016',
    title: 'Diploma of Horticulture, South Regional TAFE',
    description: 'Especialização em manejo de espécies nativas.',
  },
  {
    year: '2017–2021',
    title: 'Consultorias de ecologia',
    description: 'Seaside Plant Nursery, Cape Life Environmental Services e Regen Australia.',
  },
  {
    year: '2021',
    title: 'Environmental Project Manager',
    description: 'Coordenação de projetos de restauração ecológica de grande porte.',
  },
  {
    year: '2024',
    title: 'Full Cycle',
    description: 'Volta ao Brasil e abertura da consultoria em Santa Catarina.',
  },
];

export const credentials = [
  { label: 'Experiência', value: 'Mais de 12 anos em projetos ambientais' },
  { label: 'Projetos', value: 'Mais de 100 entregues no Brasil e na Austrália' },
  { label: 'Certificações', value: 'Auditor líder ISO 14001 e ISO 14064' },
  { label: 'Idiomas', value: 'Português, inglês e espanhol' },
];

type Service = { code?: string; name: string };

type ClientProfile = {
  id: string;
  title: string;
  situation: string;
  services: Service[];
  cta: string;
};

export const clientProfiles: ClientProfile[] = [
  {
    id: 'empresas',
    title: 'Empresas e indústrias',
    situation:
      'Licença vencendo, estudo pedido pelo órgão ambiental ou cliente exigindo certificação. Levanto o que vai ser cobrado e preparo os estudos.',
    services: [
      { code: 'RAP', name: 'Relatório Ambiental Prévio' },
      { code: 'RAS', name: 'Relatório Ambiental Simplificado' },
      { code: 'EIA/RIMA', name: 'Estudo de Impacto Ambiental' },
      { code: 'ISO 14001', name: 'Sistema de gestão ambiental' },
      { code: 'ISO 14064', name: 'Inventário de gases de efeito estufa' },
      { name: 'Compensação e reposição florestal' },
    ],
    cta: 'Falar sobre a minha empresa',
  },
  {
    id: 'rural',
    title: 'Produtores rurais',
    situation:
      'Sem o CAR em dia, o banco trava o crédito rural. Resolvo o cadastro e o que vier junto com ele.',
    services: [
      { code: 'CAR', name: 'Cadastro Ambiental Rural' },
      { name: 'Compensação e reposição florestal' },
      { name: 'Inventário florestal' },
      { name: 'Estudo fitossociológico' },
      { name: 'Levantamento de fauna' },
      { name: 'Projetos de crédito de carbono' },
    ],
    cta: 'Falar sobre a minha propriedade',
  },
  {
    id: 'restauracao',
    title: 'Áreas degradadas',
    situation:
      'Faço o diagnóstico da área, escrevo o plano de recuperação e acompanho o plantio até a vegetação se firmar.',
    services: [
      { name: 'Diagnóstico ambiental' },
      { code: 'PRAD', name: 'Plano de Recuperação de Áreas Degradadas' },
      { name: 'Restauração ecológica' },
      { name: 'Monitoramento da área' },
      { name: 'Projetos de crédito de carbono' },
    ],
    cta: 'Falar sobre a minha área',
  },
];

export const faqItems = [
  {
    question: 'Quanto tempo leva um licenciamento ambiental?',
    answer:
      'Depende do tipo de licença e do órgão. Um RAP costuma sair em 60 a 90 dias. Um EIA/RIMA pode levar de 6 meses a 2 anos. Na primeira conversa já consigo dar uma estimativa para o seu caso.',
  },
  {
    question: 'Minha empresa precisa da ISO 14001?',
    answer:
      'A lei não obriga. Mas muitas cadeias de fornecimento e licitações públicas exigem, e o sistema de gestão reduz o risco de autuação.',
  },
  {
    question: 'O que é o CAR e por que a propriedade precisa dele?',
    answer:
      'O Cadastro Ambiental Rural é obrigatório para toda propriedade rural no Brasil, de qualquer tamanho. Sem ele não há acesso a crédito rural nem a licenças, e a propriedade fica sujeita a autuação.',
  },
  {
    question: 'Crédito de carbono vale a pena para uma área em Santa Catarina?',
    answer:
      'Depende da área. Remanescentes de mata nativa e áreas em restauração podem ter potencial, mas só uma avaliação no local mostra se o projeto se paga.',
  },
  {
    question: 'O atendimento é presencial?',
    answer:
      'A primeira conversa pode ser presencial ou online. Diagnósticos, inventários e projetos de restauração incluem visita a campo. Atendo todo o estado de Santa Catarina.',
  },
];
