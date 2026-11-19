export type WeightId = 'presenca' | 'dinheiro' | 'burocracia' | 'decisao';

export interface Question {
  id: number;
  weightId: WeightId;
  weightLabel: string;
  text: string;
}

export interface AnswerOption {
  label: string;
  points: 2 | 1 | 0;
}

export interface WeightProfile {
  id: WeightId;
  name: string;
  description: string;
  firstStep: string;
}

export interface WeightScore {
  id: WeightId;
  name: string;
  points: number;
  percentage: number;
}

export interface QuizResultSummary {
  isLight: boolean;
  primaryWeight: WeightProfile;
  tiedCount: number;
  scores: WeightScore[];
}

export const WEIGHT_ORDER: WeightId[] = [
  'presenca',
  'dinheiro',
  'burocracia',
  'decisao',
];

export const WEIGHT_LABELS: Record<WeightId, string> = {
  presenca: 'Presença',
  dinheiro: 'Dinheiro',
  burocracia: 'Burocracia',
  decisao: 'Decisão e emoção',
};

export const QUESTIONS: Question[] = [
  {
    id: 1,
    weightId: 'presenca',
    weightLabel: 'Presença',
    text: 'Se eu não estiver por perto, ninguém assume.',
  },
  {
    id: 2,
    weightId: 'dinheiro',
    weightLabel: 'Dinheiro',
    text: 'Pago remédios e contas do meu bolso sem combinar a divisão com a família.',
  },
  {
    id: 3,
    weightId: 'burocracia',
    weightLabel: 'Burocracia',
    text: 'Os documentos e receitas estão espalhados por vários lugares.',
  },
  {
    id: 4,
    weightId: 'decisao',
    weightLabel: 'Decisão e emoção',
    text: 'As decisões importantes sobre a saúde e a rotina recaem só sobre mim.',
  },
  {
    id: 5,
    weightId: 'presenca',
    weightLabel: 'Presença',
    text: 'Já deixei de fazer algo meu por causa dos horários de quem eu cuido.',
  },
  {
    id: 6,
    weightId: 'dinheiro',
    weightLabel: 'Dinheiro',
    text: 'Não sei dizer quanto gasto por mês com o cuidado.',
  },
  {
    id: 7,
    weightId: 'burocracia',
    weightLabel: 'Burocracia',
    text: 'Só eu sei marcar consulta, pedir exame e resolver benefício.',
  },
  {
    id: 8,
    weightId: 'decisao',
    weightLabel: 'Decisão e emoção',
    text: 'Sinto culpa quando penso em descansar.',
  },
  {
    id: 9,
    weightId: 'presenca',
    weightLabel: 'Presença',
    text: 'Fico de sobreaviso mesmo quando estou fora de casa.',
  },
  {
    id: 10,
    weightId: 'dinheiro',
    weightLabel: 'Dinheiro',
    text: 'Já adiei uma compra ou um plano meu por causa desses gastos.',
  },
  {
    id: 11,
    weightId: 'burocracia',
    weightLabel: 'Burocracia',
    text: 'Já perdi uma consulta ou um prazo por falta de organização.',
  },
  {
    id: 12,
    weightId: 'decisao',
    weightLabel: 'Decisão e emoção',
    text: 'Já discuti com a família sobre o que fazer.',
  },
];

export const ANSWER_OPTIONS: AnswerOption[] = [
  { label: 'Sim, isso acontece comigo', points: 2 },
  { label: 'Às vezes', points: 1 },
  { label: 'Não, isso não acontece', points: 0 },
];

export const WEIGHT_PROFILES: Record<WeightId, WeightProfile> = {
  presenca: {
    id: 'presenca',
    name: 'Presença',
    description:
      'Você é a pessoa que está sempre à mão, e isso consome o seu tempo e a sua energia mesmo nas horas em que está longe.',
    firstStep:
      'Anote os horários da semana em que quem você cuida precisa de alguém. Ao lado de cada um, escreva um nome que poderia cobrir, mesmo que seja só uma hora. Peça essa hora a uma pessoa, por mensagem, ainda hoje.',
  },
  dinheiro: {
    id: 'dinheiro',
    name: 'Dinheiro',
    description:
      'Os gastos recaem sobre você sem acordo e sem número na mesa, e isso gera cansaço e ressentimento difícil de falar em voz alta.',
    firstStep:
      'Liste os gastos fixos do mês com quem você cuida: remédios, mercado, contas, transporte. Some tudo. Com o total em mãos, chame um familiar e proponha uma divisão, mesmo que seja pequena para começar.',
  },
  burocracia: {
    id: 'burocracia',
    name: 'Burocracia',
    description:
      'Você carrega sozinha ou sozinho a logística invisível: papéis, consultas, filas e prazos.',
    firstStep:
      'Separe uma pasta física e coloque nela os documentos pessoais, cartão do SUS ou do plano, receitas e exames recentes. Fotografe cada um e guarde num álbum só no celular. Avise um familiar onde fica a pasta.',
  },
  decisao: {
    id: 'decisao',
    name: 'Decisão e emoção',
    description:
      'Você decide quase tudo e ainda sente culpa por cansar. É o peso que ninguém pergunta como está.',
    firstStep:
      'Escolha uma decisão pendente e escreva as opções em três linhas. Marque uma conversa de 15 minutos com quem pode decidir junto. Reserve hoje 20 minutos só seus, sem celular de cuidado.',
  },
};

export const LIGHT_RESULT_COPY = {
  title: 'Seu cuidado está mais leve por enquanto',
  description:
    'Nenhum peso passou do meio. É um bom momento para organizar antes que o cansaço apareça.',
  firstStep:
    'Um passo para manter o equilíbrio: Escolha um dos quatro pesos e dê o primeiro passo dele esta semana. Começar pelo mais simples evita que o peso cresça sozinho.',
};

export const ROSE_TEXTS = {
  introCaption: 'Rose, cuida da mãe e criou este mapa',
  introBubble:
    'Oi, eu sou a Rose. Cuido da minha mãe e sei como o cuidado pesa em lugares diferentes. Faça comigo este mapa rápido, só tocando, e descubra onde o peso é maior em você.',
  loading: 'Rose está montando o seu mapa…',
  resultCtaBubble:
    'Eu também precisei de ajuda para dividir. Dá uma olhada, com calma.',
  disclaimer:
    'Rose é uma personagem criada com inteligência artificial. O conteúdo é educativo e não substitui orientação de profissionais de saúde.',
};

export function getComfortPhrase(questionIndex: number): string {
  if (questionIndex < 4) {
    return 'Sem certo nem errado. Responda pelo que é verdade hoje.';
  }
  if (questionIndex < 8) {
    return 'Você está indo bem. Falta pouco.';
  }
  return 'Última parte. Já dá para ver o seu mapa.';
}

export function calculateQuizResult(
  answers: Array<number | null>,
): QuizResultSummary {
  const totals: Record<WeightId, number> = {
    presenca: 0,
    dinheiro: 0,
    burocracia: 0,
    decisao: 0,
  };

  QUESTIONS.forEach((question, index) => {
    const value = answers[index];
    if (typeof value === 'number') {
      totals[question.weightId] += value;
    }
  });

  const scores: WeightScore[] = WEIGHT_ORDER.map((id) => ({
    id,
    name: WEIGHT_LABELS[id],
    points: totals[id],
    percentage: Math.round((totals[id] / 6) * 100),
  }));

  const maxPoints = Math.max(...scores.map((s) => s.points));
  const topScores = scores.filter((s) => s.points === maxPoints);
  const primaryId = topScores[0].id;

  return {
    isLight: maxPoints <= 2,
    primaryWeight: WEIGHT_PROFILES[primaryId],
    tiedCount: topScores.length,
    scores,
  };
}

export function buildSalesUrl(baseUrl: string): string {
  if (typeof window === 'undefined') {
    return baseUrl;
  }

  const trimmed = baseUrl.trim();
  if (!trimmed || trimmed === '#') {
    return trimmed || '#';
  }

  const currentParams = new URLSearchParams(window.location.search);
  const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign'] as const;
  const forwarded = new URLSearchParams();

  for (const key of utmKeys) {
    const val = currentParams.get(key);
    if (val) {
      forwarded.set(key, val);
    }
  }

  const queryString = forwarded.toString();
  if (!queryString) {
    return trimmed;
  }

  const hashIndex = trimmed.indexOf('#');
  const urlWithoutHash = hashIndex >= 0 ? trimmed.slice(0, hashIndex) : trimmed;
  const hashPart = hashIndex >= 0 ? trimmed.slice(hashIndex) : '';
  const separator = urlWithoutHash.includes('?') ? '&' : '?';

  return `${urlWithoutHash}${separator}${queryString}${hashPart}`;
}
