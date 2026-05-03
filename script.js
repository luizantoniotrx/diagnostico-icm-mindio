/* ═══════════════════════════════════════════════════════════════
   CONFIGURAÇÃO — Substitua com suas credenciais antes de subir
   ═══════════════════════════════════════════════════════════════ */
const CONFIG = {
  emailjs: {
    publicKey:      'PUSxqUrbF_oysLFXS',       // emailjs.com > Account > Public Key
    serviceId:      'service_qfoiroq',        // emailjs.com > Email Services
    userTemplateId: 'template_s3t0ush',     // template que vai para o lead
    lucasTemplateId:'template_3gy9esl',   // template de notificação para você
  },
  lucasEmail:   'lucas.antonelli.oficial@gmail.com',
  supportEmail: 'mindio.contato@gmail.com',
  bookUrl:      'https://desbloqueisuamente-mind-io.base44.app/',
  checkoutUrl:  'https://payfast.greenn.com.br/wm6w6fr?ch_id=136129',
  siteUrl:      'https://practical-clear-mind-flow.base44.app/',
  whatsapp:     '5545998613726',
};

/* ═══════════════════════════════════════════════════════════════
   QUESTÕES DO DIAGNÓSTICO
   Cada questão mapeia para um pilar do método CCC/API
   ═══════════════════════════════════════════════════════════════ */
const QUESTIONS = [
  {
    id: 1,
    pillar: 'Presença',
    pillarKey: 'presenca',
    text: 'Durante uma tarefa importante, sua mente se desvia para pendências e preocupações não relacionadas...',
    options: [
      { letter: 'A', text: 'Raramente — consigo manter o foco com facilidade', value: 4 },
      { letter: 'B', text: 'Às vezes — mas consigo voltar rapidamente', value: 3 },
      { letter: 'C', text: 'Frequentemente — difícil manter foco por mais de 15 minutos', value: 2 },
      { letter: 'D', text: 'Constantemente — é meu estado normal de trabalho', value: 1 },
    ],
  },
  {
    id: 2,
    pillar: 'Captura',
    pillarKey: 'captura',
    text: 'Como você registra as ideias, pendências e insights que surgem durante o dia?',
    options: [
      { letter: 'A', text: 'Tenho um sistema onde capturo tudo imediatamente e confio nele', value: 4 },
      { letter: 'B', text: 'Anoto em alguns lugares diferentes — mas perco coisas às vezes', value: 3 },
      { letter: 'C', text: 'Guardo na memória — e acabo esquecendo com frequência', value: 2 },
      { letter: 'D', text: 'Não tenho sistema. Convivo com o caos e a sensação de estar perdendo coisas', value: 1 },
    ],
  },
  {
    id: 3,
    pillar: 'Classificar',
    pillarKey: 'classificar',
    text: 'Ao olhar seus projetos, tarefas e responsabilidades, você sente...',
    options: [
      { letter: 'A', text: 'Clareza total — sei exatamente o próximo passo em cada frente', value: 4 },
      { letter: 'B', text: 'Uma noção geral — mas com dúvidas sobre prioridades reais', value: 3 },
      { letter: 'C', text: 'Confusão — tudo parece urgente e importante ao mesmo tempo', value: 2 },
      { letter: 'D', text: 'Paralisia — a lista me trava antes mesmo de eu começar', value: 1 },
    ],
  },
  {
    id: 4,
    pillar: 'Presença',
    pillarKey: 'presenca',
    text: 'Com que frequência você consegue trabalhar 100% em uma única tarefa por 30 minutos ou mais, sem ceder a distrações?',
    options: [
      { letter: 'A', text: 'Frequentemente — esse é meu modo padrão de trabalho', value: 4 },
      { letter: 'B', text: 'Às vezes — quando me esforço muito para isso', value: 3 },
      { letter: 'C', text: 'Raramente — as distrações e pensamentos intrusivos me dominam', value: 2 },
      { letter: 'D', text: 'Quase nunca — não lembro a última vez que aconteceu', value: 1 },
    ],
  },
  {
    id: 5,
    pillar: 'Ansiedade',
    pillarKey: 'ansiedade',
    text: 'Quando sente aquele aperto de "estou correndo mas não saio do lugar", o que acontece?',
    options: [
      { letter: 'A', text: 'Identifico a causa do sinal e tomo uma ação clara imediatamente', value: 4 },
      { letter: 'B', text: 'Percebo o sinal, mas demoro para agir de forma efetiva', value: 3 },
      { letter: 'C', text: 'A ansiedade me paralisa e gera ainda mais procrastinação', value: 2 },
      { letter: 'D', text: 'É meu estado padrão — já me acostumei a viver com esse peso', value: 1 },
    ],
  },
  {
    id: 6,
    pillar: 'Integração',
    pillarKey: 'integracao',
    text: 'Como você costuma terminar seus dias de trabalho?',
    options: [
      { letter: 'A', text: 'Com clareza e satisfação de ter feito o que realmente importava', value: 4 },
      { letter: 'B', text: 'Às vezes satisfeito, às vezes frustrado — é muito irregular', value: 3 },
      { letter: 'C', text: 'Exausto, com sensação de que trabalhei muito mas entreguei pouco', value: 2 },
      { letter: 'D', text: 'Sempre exausto e com a certeza de que "faltou algo importante"', value: 1 },
    ],
  },
  {
    id: 7,
    pillar: 'Conectar',
    pillarKey: 'conectar',
    text: 'Como você descreveria sua capacidade criativa e estratégica atualmente?',
    options: [
      { letter: 'A', text: 'Estou produzindo meu melhor trabalho com consistência', value: 4 },
      { letter: 'B', text: 'Tenho momentos bons — mas são irregulares e imprevisíveis', value: 3 },
      { letter: 'C', text: 'Sinto que tenho muito potencial travado que não consigo acessar', value: 2 },
      { letter: 'D', text: 'Estou completamente bloqueado — as boas ideias simplesmente não vêm', value: 1 },
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════
   NÍVEIS DE RESULTADO
   ═══════════════════════════════════════════════════════════════ */
const LEVELS = {
  collapsed: {
    min: 7, max: 11,
    name: 'Mente em Colapso',
    badge: 'badge-collapsed',
    tagline: 'Sobrecarga crítica detectada — seu sistema está falhando',
    partial: `Seus resultados revelam um sistema cognitivo operando no limite crítico. A combinação de ausência de captura sistemática, alta ansiedade crônica e perda de presença está destruindo silenciosamente sua capacidade de executar o que realmente importa. Você não está com falta de vontade — está com sobrecarga sistêmica.`,
    cost: `A cada semana que passa sem resolver isso, você perde ideias estratégicas, toma decisões reativas e acorda já exausto — antes mesmo de o dia começar.`,
    emailColor: '#ff6b6b',
    emailIcon: '🔴',
  },
  overloaded: {
    min: 12, max: 17,
    name: 'Mente Sobrecarregada',
    badge: 'badge-overloaded',
    tagline: 'Potencial represado detectado — você opera abaixo da sua capacidade real',
    partial: `Você possui clareza e capacidade — mas elas aparecem de forma inconsistente. Existe um "teto invisível" que te impede de acessar seu potencial máximo de forma regular. Não é falta de talento. É uma arquitetura cognitiva incompleta que drena energia antes de você chegar nos projetos que realmente importam.`,
    cost: `Projetos importantes ficam na metade. Sua melhor versão aparece raramente — e quando aparece, você não sabe como reproduzir esse estado.`,
    emailColor: '#fbbf24',
    emailIcon: '🟡',
  },
  transitioning: {
    min: 18, max: 22,
    name: 'Mente em Transição',
    badge: 'badge-transitioning',
    tagline: 'Próximo salto de performance identificado — você está próximo',
    partial: `Você já tem boas fundações — alguma captura, alguma clareza, momentos de alta performance. Mas existem 2-3 gaps críticos no seu sistema que estão te custando 30 a 40% da sua capacidade estratégica. Você está perto do próximo nível, mas ainda não atravessou a linha.`,
    cost: `A inconsistência entre seus melhores dias e seus dias comuns representa uma lacuna enorme de performance ainda não capturada — e isso tem um custo real nos seus resultados.`,
    emailColor: '#7c6dfa',
    emailIcon: '🔵',
  },
  integrated: {
    min: 23, max: 28,
    name: 'Mente Integrada',
    badge: 'badge-integrated',
    tagline: 'Alta performance detectada — mas há espaço para o extraordinário',
    partial: `Você já opera em um nível elevado. Seus sistemas funcionam, sua mente processa com clareza na maioria das situações e você tem consistência real. O próximo passo não é corrigir falhas — é refinar para o extraordinário e transformar seu método em uma vantagem competitiva ainda maior.`,
    cost: `Mesmo em alta performance, existem pontos de refinamento que separam o bom do excepcional. A versão mais aprofundada do método pode dobrar sua velocidade de execução estratégica.`,
    emailColor: '#00d4a8',
    emailIcon: '🟢',
  },
};

/* ═══════════════════════════════════════════════════════════════
   ANÁLISE POR PILAR (para o e-mail completo)
   ═══════════════════════════════════════════════════════════════ */
const PILLAR_ANALYSIS = {
  captura: {
    name: 'C — Captura',
    icon: '🗂️',
    low: {
      score: '⚠️ Crítico',
      text: `Seu sistema de captura está falhando silenciosamente. Você está usando o cérebro como HD — tentando guardar ideias, pendências e preocupações na memória de trabalho. Mas o cérebro não foi feito para armazenar: foi feito para processar. A cada pensamento que você não captura, paga um custo cognitivo invisível que se acumula ao longo do dia, gerando fadiga mental antes do meio-dia e bloqueando sua criatividade quando você mais precisa dela.`,
      action: 'Estabeleça UM ponto de captura central (digital ou físico) e comece a descarregar cada pensamento em menos de 5 segundos. O hábito transforma o caos em combustível.',
    },
    medium: {
      score: '⚡ Em Desenvolvimento',
      text: `Você captura às vezes — mas seu sistema tem furos. Diferentes locais de anotação (caderno, WhatsApp, notas do celular, post-its) criam uma ilusão de organização enquanto o seu cérebro ainda monitora tudo em segundo plano. A confiança parcial no sistema é quase tão desgastante quanto não ter sistema algum — porque sua amígdala ainda opera em modo de alerta.`,
      action: 'Unifique seus pontos de captura em um único sistema. A captura só alivia o sistema nervoso quando é total e confiável.',
    },
    high: {
      score: '✅ Forte',
      text: `Você tem uma boa base de captura — parabéns, isso já te coloca à frente da maioria. Seu sistema nervoso consegue relaxar porque confia que as informações estão seguras. Isso libera seu córtex pré-frontal para o que realmente importa: processar, criar e decidir.`,
      action: 'Refine a velocidade e a universalidade da captura. O próximo nível é capturar em menos de 3 segundos em qualquer contexto — incluindo reuniões, deslocamentos e conversas.',
    },
  },
  classificar: {
    name: 'C — Classificar',
    icon: '🎯',
    low: {
      score: '⚠️ Crítico',
      text: `Classificar é o elo perdido no seu sistema. Você pode ter capturado — mas sem classificação, sua lista vira um novo armazém de ansiedade. Quando tudo parece urgente e importante ao mesmo tempo, o cérebro entra em paralisia de decisão e escolhe a tarefa mais fácil ou a que grita mais alto, não a que realmente importa. Você não está sendo preguiçoso: está com um problema de arquitetura de informação.`,
      action: 'Pergunte sobre cada item capturado: "É uma ação imediata, um projeto, uma referência ou algo para descartar?" Esse processo de 4 destinações transforma caos em clareza.',
    },
    medium: {
      score: '⚡ Em Desenvolvimento',
      text: `Você classifica parcialmente — tem uma noção geral mas ainda enfrenta momentos onde a indecisão sobre o que priorizar te faz perder tempo e energia. Sem um critério claro de classificação, a lista cresce mais rápido do que você consegue processar, criando um estresse residual constante.`,
      action: 'Adote critérios de classificação objetivos: urgência × impacto. Tudo com alto impacto e baixa urgência é onde estão seus maiores projetos — e é o que mais é negligenciado.',
    },
    high: {
      score: '✅ Forte',
      text: `Você classifica bem. Isso significa que raramente fica paralisado diante de uma lista enorme — você consegue identificar o próximo passo físico em cada frente e age com clareza. Essa habilidade é rara e te dá uma vantagem competitiva real em ambientes de alta pressão.`,
      action: 'Aprofunde a classificação por contexto de energia: algumas tarefas exigem mente fresca (manhã), outras podem ser feitas em baixa energia. Alinhar tarefa e energia é o refinamento avançado.',
    },
  },
  conectar: {
    name: 'C — Conectar',
    icon: '💡',
    low: {
      score: '⚠️ Crítico',
      text: `Sua criatividade estratégica está represada. Quando o cérebro está em modo de sobrevivência — gerenciando pendências, respondendo ao urgente, tentando não esquecer — não há energia cognitiva para o que é mais valioso: conectar informações distantes e gerar soluções inovadoras. As ideias existem dentro de você, mas estão soterradas pelo ruído.`,
      action: 'A criatividade não se força — se permite. Quando a captura e a classificação estiverem funcionando, o Conectar emerge naturalmente. Primeiro, organize o sistema.',
    },
    medium: {
      score: '⚡ Em Desenvolvimento',
      text: `Você tem momentos de genialidade estratégica — mas eles são irregulares. Quando acontecem, você sente que está no seu melhor. Quando não acontecem, você se pergunta o que está faltando. A irregularidade indica que seu sistema cognitivo ainda não está limpo o suficiente para produzir conexões criativas de forma consistente.`,
      action: 'Reserve blocos de tempo deliberados para "pensar sobre o pensamento" — revisar o que foi capturado, buscar padrões, fazer conexões. O gênio não é acidente: é protocolo.',
    },
    high: {
      score: '✅ Forte',
      text: `Você cria conexões estratégicas com regularidade — esse é o pico do método CCC. Sua mente está operando no nível onde informações aparentemente desconectadas se transformam em soluções e vantagens competitivas. Esse estado é o produto direto de ter o sistema dos dois primeiros Cs funcionando bem.`,
      action: 'Documente suas conexões e padrões. As melhores ideias têm o hábito de aparecer mais de uma vez — e quem captura padrões estratégicos acumula vantagem composta ao longo do tempo.',
    },
  },
  ansiedade: {
    name: 'A — Ansiedade',
    icon: '🧭',
    low: {
      score: '⚠️ Crítico',
      text: `A ansiedade está controlando você — não o contrário. No método CCC/API, a ansiedade é tratada como um termômetro, não como um estado permanente. Quando o sinal aparece e você não sabe o que fazer com ele, ele se amplifica: paralisa a tomada de decisão, consome energia cognitiva e cria um ciclo onde a inação gera mais ansiedade. Isso não é fraqueza — é um sistema sem protocolo de resposta.`,
      action: 'Quando sentir ansiedade: pare, abra seu sistema e pergunte "o que capturei sobre isso?" e "qual é o próximo passo físico?". A ação específica é o antídoto universal da ansiedade.',
    },
    medium: {
      score: '⚡ Em Desenvolvimento',
      text: `Você percebe os sinais — e isso já é um avanço. Mas a demora em responder ao sinal significa que você ainda enfrenta janelas onde a ansiedade acumula sem ser processada. O intervalo entre perceber o sinal e agir é onde o sistema vaza energia.`,
      action: 'Reduza o tempo de resposta ao sinal. A meta é: sinto ansiedade → identifico a fonte → capturo → defino próximo passo. Em menos de 2 minutos. Velocidade de resposta é treino.',
    },
    high: {
      score: '✅ Forte',
      text: `Você usa a ansiedade como termômetro — isso é um nível avançado de autoconsciência executiva. Quando sente o sinal, identifica a fonte e age. Isso significa que a ansiedade raramente se acumula a ponto de paralisar — ela cumpre sua função original: um aviso de que algo precisa ser processado.`,
      action: 'Refine ainda mais: comece a observar padrões de quando a ansiedade aparece. Horários, contextos, tipos de situação. Antecipar o sinal é ainda mais poderoso do que responder a ele.',
    },
  },
  presenca: {
    name: 'P — Presença',
    icon: '🎯',
    low: {
      score: '⚠️ Crítico',
      text: `Sua presença está fragmentada. Você está fisicamente em um lugar enquanto sua mente está em outros dez. Reuniões importantes, conversas estratégicas, momentos de criação — tudo acontece com apenas uma fração da sua atenção real. Isso não é distração: é o seu sistema cognitivo em modo de alerta constante, monitorando tudo o que ainda não foi capturado e classificado.`,
      action: 'A presença não é força de vontade — é o subproduto natural de um sistema de captura confiável. Quando o cérebro sabe que nada será perdido, ele pode finalmente estar aqui.',
    },
    medium: {
      score: '⚡ Em Desenvolvimento',
      text: `Você tem presença parcial — há momentos de foco real, mas eles são interrompidos por pensamentos intrusivos. O esforço para "voltar" ao foco consome energia que deveria ir para a execução de alta qualidade. Cada retorno ao foco é uma micro-batalha que soma desgaste invisível ao longo do dia.`,
      action: 'Antes de qualquer tarefa importante, esvazie a mente: 2 minutos capturando tudo o que está "em aberto" no momento. Chegue à tarefa com um sistema limpo — não com o peso do não resolvido.',
    },
    high: {
      score: '✅ Forte',
      text: `Você opera com alta presença na maior parte do tempo. Isso significa que suas horas de trabalho valem mais do que as de quem está presente fisicamente mas ausente mentalmente. Presença real multiplica a qualidade do output — não apenas a quantidade.`,
      action: 'O próximo nível é presença intencional: escolher conscientemente quando e onde estar 100% presente — e proteger esses blocos de tempo como o recurso mais valioso que você tem.',
    },
  },
  integracao: {
    name: 'I — Integração',
    icon: '🔄',
    low: {
      score: '⚠️ Crítico',
      text: `O método ainda não está integrado ao seu modo de operar. Você termina os dias sem a sensação de ter avançado no que realmente importa — e isso não é falta de esforço, é falta de sistema. Sem integração, o trabalho do dia vira uma reação constante ao urgente, e os projetos estratégicos ficam sempre "para amanhã". O amanhã nunca chega com espaço.`,
      action: 'Integração começa com revisão diária de 10 minutos: o que capturei hoje? O que classifiquei? O que conectei? Esse ritual fecha os loops abertos e prepara o terreno para o dia seguinte.',
    },
    medium: {
      score: '⚡ Em Desenvolvimento',
      text: `Há integração parcial — dias bons alternam com dias de caos. Isso indica que o método ainda não virou hábito automático: você precisa de esforço consciente para mantê-lo. A irregularidade é normal na fase de transição — mas o próximo passo é criar rituais que sustentem o sistema mesmo nos dias difíceis.`,
      action: 'Crie âncoras de revisão: manhã (planejar o dia) e fim do dia (fechar loops). Faça isso por 21 dias consecutivos e o método começa a operar no piloto automático.',
    },
    high: {
      score: '✅ Forte',
      text: `Você está próximo da integração total — o estado onde o método CCC/API não é algo que você "faz", mas sim algo que você "é". Seus dias terminam com clareza, você acorda sabendo o que importa e raramente sente a sensação de que perdeu o controle. Esse é o estado de mente livre.`,
      action: 'O refinamento final: integre o método na forma como você lidera, cria e toma decisões em grupo. Uma mente integrada que consegue criar sistemas integrados ao redor dela multiplica o impacto.',
    },
  },
};

/* ═══════════════════════════════════════════════════════════════
   ESTADO DA APLICAÇÃO
   ═══════════════════════════════════════════════════════════════ */
const State = {
  currentSection: 'hero',
  currentQuestion: 0,
  answers: [],
  userName: '',
  userEmail: '',
  userWhatsApp: '',
  totalScore: 0,
  pillarScores: {},
  level: null,
};

/* ═══════════════════════════════════════════════════════════════
   HELPERS
   ═══════════════════════════════════════════════════════════════ */
function showSection(id) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  const el = document.getElementById(id);
  if (el) { el.classList.add('active'); window.scrollTo(0, 0); }
  State.currentSection = id;
}

function toast(msg, type = '') {
  let el = document.getElementById('toast');
  if (!el) {
    el = document.createElement('div');
    el.id = 'toast';
    el.className = 'toast';
    document.body.appendChild(el);
  }
  el.textContent = msg;
  el.className = `toast ${type}`;
  el.classList.add('show');
  setTimeout(() => el.classList.remove('show'), 3500);
}

function getLevel(score) {
  for (const key of Object.keys(LEVELS)) {
    const l = LEVELS[key];
    if (score >= l.min && score <= l.max) return { key, ...l };
  }
  return { key: 'collapsed', ...LEVELS.collapsed };
}

function getPillarAnalysis(pillarKey, score) {
  const p = PILLAR_ANALYSIS[pillarKey];
  if (!p) return null;
  if (score <= 1)      return { ...p.low,    pillar: p.name, icon: p.icon, score };
  if (score <= 2.5)    return { ...p.medium,  pillar: p.name, icon: p.icon, score };
  return                      { ...p.high,    pillar: p.name, icon: p.icon, score };
}

function calcScores() {
  const pillarSums = {};
  const pillarCounts = {};

  QUESTIONS.forEach((q, i) => {
    const val = State.answers[i] || 1;
    const k = q.pillarKey;
    pillarSums[k]   = (pillarSums[k]   || 0) + val;
    pillarCounts[k] = (pillarCounts[k] || 0) + 1;
  });

  State.pillarScores = {};
  for (const k in pillarSums) {
    State.pillarScores[k] = pillarSums[k] / pillarCounts[k];
  }
  State.totalScore = State.answers.reduce((a, b) => a + b, 0);
}

/* ═══════════════════════════════════════════════════════════════
   NEURAL BACKGROUND
   ═══════════════════════════════════════════════════════════════ */
function createNeuralBg() {
  const container = document.getElementById('neural-dots');
  if (!container) return;
  for (let i = 0; i < 28; i++) {
    const dot = document.createElement('div');
    dot.className = 'dot';
    const size = Math.random() * 6 + 2;
    dot.style.cssText = `
      width: ${size}px;
      height: ${size}px;
      left: ${Math.random() * 100}%;
      top: ${Math.random() * 100}%;
      animation-duration: ${Math.random() * 8 + 6}s;
      animation-delay: ${Math.random() * 5}s;
    `;
    container.appendChild(dot);
  }
}

/* ═══════════════════════════════════════════════════════════════
   QUIZ ENGINE
   ═══════════════════════════════════════════════════════════════ */
function renderQuestion(index) {
  const q = QUESTIONS[index];
  if (!q) return;

  document.getElementById('q-num').textContent = index + 1;
  document.getElementById('progress-fill').style.width = `${((index + 1) / QUESTIONS.length) * 100}%`;
  document.getElementById('q-pillar').textContent = `Pilar: ${q.pillar}`;
  document.getElementById('q-text').textContent = q.text;

  const grid = document.getElementById('options-grid');
  grid.innerHTML = '';

  q.options.forEach((opt, oi) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.innerHTML = `<span class="option-letter">${opt.letter}</span><span>${opt.text}</span>`;
    btn.onclick = () => selectOption(oi, opt.value);
    grid.appendChild(btn);
  });

  // animate card
  const card = document.getElementById('q-card');
  card.style.animation = 'none';
  card.offsetHeight; // reflow
  card.style.animation = 'slide-up 0.4s ease';
}

function selectOption(optionIndex, value) {
  const btns = document.querySelectorAll('.option-btn');
  btns.forEach(b => b.classList.remove('selected'));
  btns[optionIndex].classList.add('selected');

  State.answers[State.currentQuestion] = value;

  setTimeout(() => {
    if (State.currentQuestion < QUESTIONS.length - 1) {
      State.currentQuestion++;
      renderQuestion(State.currentQuestion);
    } else {
      finishQuiz();
    }
  }, 380);
}

/* ═══════════════════════════════════════════════════════════════
   PROCESSAMENTO E RESULTADO
   ═══════════════════════════════════════════════════════════════ */
function finishQuiz() {
  showSection('processing');
  calcScores();
  State.level = getLevel(State.totalScore);

  const steps = ['ps1', 'ps2', 'ps3', 'ps4'];
  steps.forEach((id, i) => {
    setTimeout(() => {
      steps.forEach(s => document.getElementById(s).classList.remove('active', 'done'));
      if (i > 0) {
        for (let j = 0; j < i; j++) document.getElementById(steps[j]).classList.add('done');
      }
      document.getElementById(id).classList.add('active');
    }, i * 900);
  });

  setTimeout(() => showPartialResult(), 4200);
}

function showPartialResult() {
  const l = State.level;
  const pct = ((State.totalScore - 7) / 21) * 100;

  document.getElementById('res-greeting').textContent = `${State.userName}, aqui está o seu resultado:`;
  document.getElementById('res-level-badge').textContent = l.name;
  document.getElementById('res-level-badge').className = `res-level-badge ${l.badge}`;
  document.getElementById('res-level-name').textContent = l.name;
  document.getElementById('res-tagline').textContent = l.tagline;
  document.getElementById('res-partial-text').textContent = l.partial;
  document.getElementById('res-cost-text').textContent = l.cost;

  showSection('partial-result');

  // animate ICM bar
  setTimeout(() => {
    document.getElementById('icm-fill').style.width = `${pct}%`;
    document.getElementById('icm-marker').style.left = `${pct}%`;
  }, 300);
}

/* ═══════════════════════════════════════════════════════════════
   GERADOR DO E-MAIL COMPLETO (HTML inline para clientes de e-mail)
   ═══════════════════════════════════════════════════════════════ */
function generateEmailHTML() {
  const l = State.level;
  const pct = ((State.totalScore - 7) / 21) * 100;

  const pillarsOrder = ['captura', 'classificar', 'conectar', 'ansiedade', 'presenca', 'integracao'];
  const pillarsHTML = pillarsOrder.map(key => {
    const score = State.pillarScores[key] || 1;
    const analysis = getPillarAnalysis(key, score);
    if (!analysis) return '';
    const barWidth = Math.round(((score - 1) / 3) * 100);
    const barColor = barWidth < 40 ? '#ff6b6b' : barWidth < 70 ? '#fbbf24' : '#00d4a8';

    return `
    <div style="background:#1a1a2a;border-radius:12px;padding:24px;margin-bottom:16px;border-left:3px solid ${barColor}">
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:12px">
        <span style="font-size:1.2rem">${analysis.icon}</span>
        <div>
          <div style="font-size:0.78rem;text-transform:uppercase;letter-spacing:0.08em;color:#8888a8;margin-bottom:2px">${analysis.pillar}</div>
          <div style="font-weight:700;color:#eeeef8;font-size:0.92rem">${analysis.score}</div>
        </div>
      </div>
      <div style="height:6px;background:#09090f;border-radius:99px;margin-bottom:16px;overflow:hidden">
        <div style="height:100%;width:${barWidth}%;background:${barColor};border-radius:99px"></div>
      </div>
      <p style="color:#aaaacc;font-size:0.9rem;line-height:1.7;margin:0 0 12px">${analysis.text}</p>
      <div style="background:#09090f;border-radius:8px;padding:12px 16px">
        <span style="color:#7c6dfa;font-size:0.78rem;font-weight:700;text-transform:uppercase;letter-spacing:0.06em">AÇÃO: </span>
        <span style="color:#ccccee;font-size:0.85rem">${analysis.action}</span>
      </div>
    </div>`;
  }).join('');

  // Top 3 gaps
  const gaps = pillarsOrder
    .map(key => ({ key, score: State.pillarScores[key] || 1 }))
    .sort((a, b) => a.score - b.score)
    .slice(0, 3)
    .map((g, i) => {
      const a = getPillarAnalysis(g.key, g.score);
      return `<div style="display:flex;gap:14px;align-items:flex-start;margin-bottom:16px">
        <div style="width:28px;height:28px;border-radius:50%;background:#7c6dfa;display:flex;align-items:center;justify-content:center;font-weight:900;color:#fff;font-size:0.8rem;flex-shrink:0">${i + 1}</div>
        <div><strong style="color:#eeeef8">${a ? a.pillar : g.key}</strong><br/><span style="color:#8888a8;font-size:0.85rem">${a ? a.score : ''}</span></div>
      </div>`;
    }).join('');

  return `
<!DOCTYPE html>
<html lang="pt-BR">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>Seu Relatório ICM Completo — mind.io</title>
</head>
<body style="margin:0;padding:0;background:#09090f;font-family:'Inter','Helvetica Neue',Helvetica,Arial,sans-serif;color:#eeeef8">
<div style="max-width:620px;margin:0 auto;padding:20px">

  <!-- Header -->
  <div style="text-align:center;padding:48px 32px 40px;background:linear-gradient(135deg,#12121e,#1a1a2a);border-radius:20px;margin-bottom:8px;border:1px solid rgba(255,255,255,0.07)">
    <div style="display:inline-block;background:rgba(124,109,250,0.15);border:1px solid rgba(124,109,250,0.3);border-radius:50px;padding:6px 18px;font-size:0.75rem;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:#9b8fff;margin-bottom:20px">mind.io · Diagnóstico ICM</div>
    <h1 style="font-size:1.8rem;font-weight:900;margin:0 0 10px;color:#eeeef8">Seu Relatório Completo</h1>
    <p style="color:#8888a8;margin:0;font-size:1rem">Índice de Clareza Mental — Método CCC/API</p>
  </div>

  <!-- Greeting -->
  <div style="background:#12121e;border-radius:16px;padding:28px 32px;margin:8px 0;border:1px solid rgba(255,255,255,0.07)">
    <p style="font-size:1.05rem;margin:0 0 12px;color:#eeeef8">Olá, <strong>${State.userName}</strong> 👋</p>
    <p style="color:#8888a8;margin:0;line-height:1.7;font-size:0.95rem">Aqui está sua análise completa do Índice de Clareza Mental baseada no Método CCC/API. Este diagnóstico vai além de um resultado — ele identifica exatamente <strong style="color:#eeeef8">onde seu sistema cognitivo está vazando energia</strong> e o que fazer sobre isso.</p>
  </div>

  <!-- Score -->
  <div style="background:#12121e;border-radius:16px;padding:28px 32px;margin:8px 0;border:1px solid rgba(255,255,255,0.07);text-align:center">
    <p style="font-size:0.78rem;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:#8888a8;margin:0 0 16px">Seu Resultado</p>
    <div style="font-size:1.4rem;font-weight:900;color:${l.emailColor};margin-bottom:6px">${l.emailIcon} ${l.name}</div>
    <p style="color:#8888a8;font-size:0.9rem;margin:0 0 24px">${l.tagline}</p>
    <div style="background:#1a1a2a;border-radius:8px;padding:6px 8px;">
      <div style="height:10px;background:#09090f;border-radius:99px;overflow:hidden">
        <div style="height:100%;width:${pct.toFixed(0)}%;background:linear-gradient(90deg,#ff6b6b,#fbbf24,#7c6dfa,#00d4a8);border-radius:99px"></div>
      </div>
    </div>
    <div style="display:flex;justify-content:space-between;margin-top:8px;font-size:0.72rem;color:#55556a">
      <span>Colapso</span><span>Sobrecarga</span><span>Transição</span><span>Integrado</span>
    </div>
  </div>

  <!-- Pillars -->
  <div style="background:#12121e;border-radius:16px;padding:28px 32px;margin:8px 0;border:1px solid rgba(255,255,255,0.07)">
    <h2 style="font-size:1rem;font-weight:700;margin:0 0 20px;color:#eeeef8">📋 Análise Completa por Pilar CCC/API</h2>
    ${pillarsHTML}
  </div>

  <!-- Top Gaps -->
  <div style="background:#12121e;border-radius:16px;padding:28px 32px;margin:8px 0;border:1px solid rgba(255,255,255,0.07)">
    <h2 style="font-size:1rem;font-weight:700;margin:0 0 20px;color:#eeeef8">🎯 Seus 3 Maiores Bloqueios Cognitivos</h2>
    <p style="color:#8888a8;font-size:0.88rem;margin:0 0 20px">Estes são os pilares com menor pontuação no seu diagnóstico — são eles que mais impactam sua performance hoje:</p>
    ${gaps}
  </div>

  <!-- Action Plan -->
  <div style="background:#12121e;border-radius:16px;padding:28px 32px;margin:8px 0;border:1px solid rgba(255,255,255,0.07)">
    <h2 style="font-size:1rem;font-weight:700;margin:0 0 20px;color:#eeeef8">⚡ Seu Plano de Ação — 3 Passos</h2>
    <div style="background:#1a1a2a;border-radius:12px;padding:20px;margin-bottom:12px">
      <div style="font-weight:700;color:#7c6dfa;margin-bottom:8px">Passo 1 — Esta semana: Instale a Captura</div>
      <p style="color:#aaaacc;font-size:0.88rem;line-height:1.6;margin:0">Escolha UM ponto de captura central (app de notas, caderno, gravador de voz). Comprometa-se a capturar cada pensamento relevante neste único lugar por 7 dias. Velocidade máxima: capture em menos de 5 segundos.</p>
    </div>
    <div style="background:#1a1a2a;border-radius:12px;padding:20px;margin-bottom:12px">
      <div style="font-weight:700;color:#7c6dfa;margin-bottom:8px">Passo 2 — Nas próximas 2 semanas: Implemente a Classificação</div>
      <p style="color:#aaaacc;font-size:0.88rem;line-height:1.6;margin:0">Reserve 20 minutos diários para classificar o que foi capturado: ação imediata, projeto de longo prazo, referência ou descarte. A clareza de próximo passo físico elimina a paralisia.</p>
    </div>
    <div style="background:#1a1a2a;border-radius:12px;padding:20px">
      <div style="font-weight:700;color:#7c6dfa;margin-bottom:8px">Passo 3 — No primeiro mês: Crie o Ritual de Revisão</div>
      <p style="color:#aaaacc;font-size:0.88rem;line-height:1.6;margin:0">10 minutos no início do dia e 10 minutos no fim. De manhã: revise prioridades. À noite: feche os loops abertos. Em 21 dias, o método começa a operar no piloto automático.</p>
    </div>
  </div>

  <!-- CTA Book -->
  <div style="background:linear-gradient(135deg,rgba(124,109,250,0.15),rgba(0,212,168,0.1));border:1px solid rgba(124,109,250,0.3);border-radius:20px;padding:40px 32px;margin:8px 0;text-align:center">
    <div style="font-size:0.75rem;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:#9b8fff;margin-bottom:16px">O Método Completo</div>
    <div style="font-size:2.5rem;margin-bottom:16px">📚</div>
    <h2 style="font-size:1.4rem;font-weight:900;margin:0 0 14px;color:#eeeef8">Desbloqueie Sua Capacidade<br>Máxima Mental</h2>
    <p style="color:#8888a8;font-size:0.9rem;line-height:1.7;margin:0 0 28px">Este diagnóstico revelou <strong style="color:#eeeef8">onde</strong> estão seus bloqueios. O livro mostra <strong style="color:#eeeef8">exatamente como</strong> eliminar cada um deles com o Método CCC/API completo — neurociência aplicada, ferramentas práticas e o caminho para a mente livre.</p>
    <div style="background:rgba(0,0,0,0.3);border-radius:12px;padding:16px;margin-bottom:28px">
      <div style="font-size:1.6rem;font-weight:900;color:#eeeef8;margin-bottom:4px">R$ 150,00</div>
      <div style="font-size:0.78rem;color:#8888a8">Acesso vitalício · Método completo · Resultados em 21 dias</div>
    </div>
    <a href="${CONFIG.bookUrl}" style="display:inline-block;background:linear-gradient(135deg,#7c6dfa,#5a4de0);color:#fff;text-decoration:none;border-radius:50px;padding:18px 40px;font-weight:700;font-size:1rem;box-shadow:0 8px 32px rgba(124,109,250,0.4);margin-bottom:14px">Conhecer o Livro →</a>
    <br/>
    <a href="${CONFIG.checkoutUrl}" style="display:inline-block;background:transparent;color:#00d4a8;text-decoration:none;border:1.5px solid #00d4a8;border-radius:50px;padding:12px 32px;font-weight:600;font-size:0.88rem;margin-top:4px">Comprar Agora — R$ 150,00</a>
  </div>

  <!-- Dúvidas -->
  <div style="background:#12121e;border-radius:16px;padding:24px 32px;margin:8px 0;border:1px solid rgba(255,255,255,0.07);text-align:center">
    <p style="color:#8888a8;font-size:0.85rem;margin:0 0 12px">Ficou com dúvidas? Fale com a gente:</p>
    <a href="https://wa.me/${CONFIG.whatsapp}?text=Olá%20Lucas!%20Fiz%20o%20diagnóstico%20ICM%20e%20tenho%20uma%20dúvida." style="display:inline-block;background:rgba(0,212,168,0.1);border:1px solid rgba(0,212,168,0.3);color:#00d4a8;text-decoration:none;border-radius:50px;padding:10px 24px;font-size:0.85rem;font-weight:600;margin-bottom:10px">💬 WhatsApp: (45) 99861-3726</a>
    <p style="color:#55556a;font-size:0.78rem;margin:0">ou envie um e-mail para <a href="mailto:${CONFIG.supportEmail}" style="color:#7c6dfa;text-decoration:none">${CONFIG.supportEmail}</a></p>
  </div>

  <!-- Footer -->
  <div style="text-align:center;padding:32px 20px;color:#55556a;font-size:0.78rem;line-height:1.7">
    <p style="margin:0 0 6px"><strong style="color:#8888a8">mind.io</strong> · Lucas Antonelli</p>
    <p style="margin:0 0 6px"><a href="${CONFIG.siteUrl}" style="color:#7c6dfa;text-decoration:none">Site oficial: mind.io</a></p>
    <p style="margin:0">Este relatório foi gerado exclusivamente para ${State.userName} com base nas respostas do Diagnóstico ICM.<br/>
    Se você não solicitou este e-mail, pode ignorá-lo com segurança.</p>
  </div>

</div>
</body>
</html>`;
}

/* ═══════════════════════════════════════════════════════════════
   ENVIO DE E-MAIL VIA EMAILJS
   ═══════════════════════════════════════════════════════════════ */
async function sendEmails() {
  const reportHTML = generateEmailHTML();

  const pillarSummary = Object.keys(State.pillarScores)
    .map(k => `${k}: ${State.pillarScores[k].toFixed(1)}/4`)
    .join(' | ');

  // E-mail 1: para o lead com relatório completo
  await emailjs.send(CONFIG.emailjs.serviceId, CONFIG.emailjs.userTemplateId, {
    to_name:     State.userName,
    to_email:    State.userEmail,
    report_html: reportHTML,
    result_level: State.level.name,
    score:        State.totalScore,
  });

  // E-mail 2: notificação para Lucas (você)
  await emailjs.send(CONFIG.emailjs.serviceId, CONFIG.emailjs.lucasTemplateId, {
    lead_name:    State.userName,
    lead_email:   State.userEmail,
    lead_whatsapp:State.userWhatsApp || 'não informado',
    lead_level:   State.level.name,
    lead_score:   State.totalScore,
    pillar_summary: pillarSummary,
    to_email:     CONFIG.lucasEmail,
  });
}

/* ═══════════════════════════════════════════════════════════════
   API PÚBLICA — chamada pelo HTML
   ═══════════════════════════════════════════════════════════════ */
const App = {
  goToName() {
    showSection('name-step');
    setTimeout(() => document.getElementById('user-name')?.focus(), 300);
  },

  submitName() {
    const name = document.getElementById('user-name').value.trim();
    if (!name) { toast('Digite seu nome para continuar', 'error'); return; }
    State.userName = name;
    State.currentQuestion = 0;
    State.answers = [];
    showSection('quiz');
    renderQuestion(0);
  },

  showCapture() {
    showSection('capture-form');
    setTimeout(() => document.getElementById('user-email')?.focus(), 300);
  },

  async submitLead() {
    const email = document.getElementById('user-email').value.trim();
    const whatsapp = document.getElementById('user-whatsapp').value.trim();

    if (!email || !email.includes('@')) {
      toast('Digite um e-mail válido', 'error');
      return;
    }

    State.userEmail = email;
    State.userWhatsApp = whatsapp;

    const btn = document.getElementById('submit-lead-btn');
    btn.disabled = true;
    btn.textContent = 'Enviando...';

    try {
      await sendEmails();
      document.getElementById('success-name').textContent = State.userName;
      document.getElementById('book-link').href = CONFIG.bookUrl;
      showSection('success');
    } catch (err) {
      console.error('EmailJS error:', err);
      toast('Erro ao enviar. Verifique as credenciais do EmailJS no script.js', 'error');
      btn.disabled = false;
      btn.innerHTML = 'Quero meu relatório completo <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>';
    }
  },
};

/* ═══════════════════════════════════════════════════════════════
   INICIALIZAÇÃO
   ═══════════════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  emailjs.init(CONFIG.emailjs.publicKey);
  createNeuralBg();
});
