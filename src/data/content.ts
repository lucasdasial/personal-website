export type Lang = "en" | "pt";

export interface Stat {
  value: string;
  label: string;
}

export interface SkillGroup {
  label: string;
  items: string[];
}

export interface JobMetric {
  value: string;
  label: string;
}

export interface Job {
  role: string;
  company: string;
  location: string;
  dates: string;
  summary: string;
  metrics: JobMetric[];
  points: string[];
  tech: string[];
}

export interface Translations {
  navWork: string;
  navSkills: string;
  navAbout: string;
  getInTouch: string;
  heroBadge: string;
  title1: string;
  title2: string;
  title3: string;
  title4: string;
  introA: string;
  introB: string;
  viewWork: string;
  linkedin: string;
  resume: string;
  workEyebrow: string;
  workHeading: string;
  workSub: string;
  whatIDid: string;
  skillsEyebrow: string;
  skillsHeading: string;
  skillsSub: string;
  aboutEyebrow: string;
  aboutHeading: string;
  aboutA: string;
  aboutB: string;
  aboutC: string[];
  optimiseFor: string;
  educationLabel: string;
  degree: string;
  school: string;
  contactEyebrow: string;
  contact1: string;
  contact2: string;
  contactBody: string;
}

export interface LangContent {
  t: Translations;
  stats: Stat[];
  skills: SkillGroup[];
  values: string[];
  jobs: Job[];
}

export const CONTENT: Record<Lang, LangContent> = {
  en: {
    t: {
      navWork: "Work",
      navSkills: "Skills",
      navAbout: "About",
      getInTouch: "Get in touch",
      heroBadge: "Open to backend roles - Remote",
      title1: "Building systems",
      title2: `simple`,
      title3: "robust",
      title4: "and reliable.",
      introA: "I'm ",
      introB:
        ", a software engineer focused on backend. For five years I've been designing and building APIs, applications and services that connect systems, automate processes and solve real problems, always prioritizing simplicity, reliability and ease of maintenance.",
      viewWork: "View work history",
      linkedin: "LinkedIn",
      resume: "Download resume",
      workEyebrow: "01 / Work History",
      workHeading: "Five years creating value for companies and people.",
      workSub:
        "Select a role to explore what I built, the problems I solved, and the stack behind it.",
      whatIDid: "What I did",
      skillsEyebrow: "02 / Toolkit",
      skillsHeading: "The stack I reach for.",
      skillsSub: "I pick the right tool for the job and learn new ones when needed",
      aboutEyebrow: "03 / About",
      aboutHeading:
        "Great software isn't defined by its technology, but by how simply and reliably it solves real problems.",
      aboutA: "Known as ",
      aboutB: ", a nod to my full name, Lucas ",
      aboutC: [
        "I started my career as a Full Stack Developer working with Vue.js and Node.js, then spent two years building mobile applications with React Native and Flutter. After working across different layers of development, I intentionally moved into Backend Engineering to deepen my knowledge of software architecture, APIs and robust systems.",
        "I'm always looking to strengthen my technical foundations. With every challenge, I try to understand the client's pain point and the context of the problem, deepening my knowledge in the field to develop efficient, high-impact technical solutions.",
      ],
      optimiseFor: "What I optimise for",
      educationLabel: "Education",
      degree: "Associate Degree, Systems Analysis & Development",
      school: "UNAMA · Universidade da Amazônia · 2021–2023",
      contactEyebrow: "04 / Contact",
      contact1: "Let's build something",
      contact2: "worth building.",
      contactBody:
        "Looking for opportunities to build robust backend systems, grow as an engineer, and contribute to technically challenging products.",
    },
    stats: [
      { value: "5+", label: "Years shipping software" },
      { value: "3", label: "Companies" },
      { value: "30+", label: "White-label apps" },
      { value: "1000s", label: "Daily users served" },
    ],
    skills: [
      { label: "Languages", items: ["Elixir", "TypeScript · JavaScript", "SQL"] },
      {
        label: "Backend",
        items: ["Phoenix", "PostgreSQL", "Redis", "REST APIs", "GraphQL", "Node.js"],
      },
      {
        label: "Infrastructure",
        items: ["AWS (EC2, S3)", "Docker", "Linux", "Bash", "GitHub Actions", "GitLab CI"],
      },
      {
        label: "Engineering",
        items: [
          "Git",
          "CI/CD",
          "Clean Architecture",
          "Hexagonal Architecture",
          "Domain-Driven Design (DDD)",
          "SOLID",
          "Async Processing",
        ],
      },
      {
        label: "Currently Deepening",
        items: [
          "Distributed Systems",
          "Event-Driven Architecture",
          "RabbitMQ",
          "Observability (Grafana, OpenTelemetry)",
        ],
      },
    ],
    values: [
      "Simplicity",
      "Maintainability",
      "Performance",
      "Clean architecture",
      "Scalability",
      "Results & feedback",
    ],
    jobs: [
      {
        role: "Backend Software Engineer",
        company: "Idopter Labs",
        location: "Remote · Brazil",
        dates: "Dec 2024 — Present",
        summary:
          "Building and scaling RESTful APIs that power banking, benefits, fleet and local-government platforms in Elixir and Phoenix.",
        metrics: [
          { value: "Thousands", label: "Daily active users" },
          { value: "4 domains", label: "Banking · Benefits · Fleet · Gov" },
        ],
        points: [
          "Deliver RESTful APIs in Elixir and Phoenix powering banking, benefits, fleet and local-government platforms used by more than 20,000 users daily.",
          "Architect business-critical backend features for scale, sustaining high daily transaction volumes without compromising reliability.",
          "Improve responsiveness and cut processing bottlenecks with asynchronous background jobs in Oban.",
          "Boost API performance by optimising PostgreSQL queries and streamlining integrations with internal services and third-party financial platforms.",
          "Accelerate the development cycle by automating recurring workflows with shell scripts and Docker.",
        ],
        tech: ["Elixir", "Phoenix", "PostgreSQL", "Oban", "Docker", "AWS"],
      },
      {
        role: "Mobile Software Engineer",
        company: "Idopter Labs",
        location: "Remote · Brazil",
        dates: "Aug 2022 — Feb 2025",
        summary:
          "Helped lead the transformation of five mobile applications into a white-label platform that now powers more than 30 branded apps.",
        metrics: [
          { value: "30+", label: "White-label apps shipped" },
          { value: "RN → Flutter", label: "Production stack migration" },
        ],
        points: [
          "Led mobile development from day one of a digital banking platform, shaping its technical foundation as lead developer.",
          "Led the migration from React Native to Flutter across multiple production apps, improving long-term maintainability.",
          "Scaled a single codebase into 30+ branded, white-label apps, multiplying reach without duplicating engineering effort.",
          "Introduced MVVM architecture and dependency injection across the mobile codebase.",
          "Integrated cross-platform apps with REST and GraphQL APIs for seamless data flow.",
        ],
        tech: ["Flutter", "React Native", "GraphQL", "REST APIs", "MVVM"],
      },
      {
        role: "Full Stack Developer",
        company: "Leal Sistemas",
        location: "Remote · Brazil",
        dates: "Apr 2021 — Aug 2022",
        summary:
          "Shipped web applications end-to-end and raised the team’s baseline by bringing TypeScript into the workflow.",
        metrics: [
          { value: "End-to-end", label: "Backend + customer UI" },
          { value: "TypeScript", label: "Introduced team-wide" },
        ],
        points: [
          "Built and shipped web applications end-to-end with Vue.js, Node.js and Firebase, from backend services to customer-facing UI.",
          "Introduced TypeScript into the workflow, strengthening code reliability across the team.",
          "Delivered customer-facing features alongside internal tools that supported day-to-day operations.",
          "Bridged frontend and backend to ship cohesive, full-stack features across the product.",
        ],
        tech: ["Vue.js", "Node.js", "TypeScript", "Firebase"],
      },
    ],
  },
  pt: {
    t: {
      navWork: "Trabalho",
      navSkills: "Habilidades",
      navAbout: "Sobre",
      getInTouch: "Fale comigo",
      heroBadge: "Aberto a vagas de backend - Remoto",
      title1: "Construindo sistemas",
      title2: "simples, ",
      title3: "robusto",
      title4: "e confiáveis",
      introA: "Sou ",
      introB:
        ", engenheiro de software com foco em backend. Há cinco anos projeto e desenvolvo APIs, aplicações e serviços que conectam sistemas, automatizam processos e resolvem problemas reais, sempre priorizando simplicidade, confiabilidade e facilidade de manutenção.",
      viewWork: "Ver histórico",
      linkedin: "LinkedIn",
      resume: "Baixar currículo",
      workEyebrow: "01 / Histórico",
      workHeading: "Cinco anos gerando valor para empresas e pessoas.",
      workSub:
        "Selecione um cargo para ver o que construí, os problemas que resolvi e a stack por trás.",
      whatIDid: "O que fiz",
      skillsEyebrow: "02 / Ferramentas",
      skillsHeading: "A stack que geralmente uso.",
      skillsSub: "Quando necessário, aprendo novas tecnologias.",
      aboutEyebrow: "03 / Sobre",
      aboutHeading:
        "Um bom software não é definido pela tecnologia que usa, mas por resolver problemas reais de forma simples e confiável.",
      aboutA: "Também sou conhecido como ",
      aboutB: ", abreviação de ",
      aboutC: [
        "Comecei minha carreira como Desenvolvedor Full Stack trabalhando com Vue.js e Node.js, depois passei dois anos construindo aplicações mobile com React Native e Flutter. Após atuar em diferentes camadas do desenvolvimento, migrei de forma intencional para Engenharia Backend para aprofundar meus conhecimentos em arquitetura de software, APIs e sistemas robustos.",
        "Estou sempre buscando fortalecer minhas bases técnicas. Em cada desafio, procuro compreender a dor do cliente e o contexto do problema, aprofundando meu conhecimento na área para desenvolver soluções técnicas eficientes e de alto impacto.",
      ],
      optimiseFor: "O que priorizo",
      educationLabel: "Formação",
      degree: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
      school: "UNAMA · Universidade da Amazônia · 2021–2023",
      contactEyebrow: "04 / Contato",
      contact1: "Vamos construir algo",
      contact2: "que valha a pena.",
      contactBody:
        "Buscando oportunidades para construir sistemas backend robustos, crescer como engenheiro e contribuir com produtos tecnicamente desafiadores.",
    },
    stats: [
      { value: "5+", label: "Anos entregando software" },
      { value: "3", label: "Empresas" },
      { value: "30+", label: "Apps white-label" },
      { value: "Milhares", label: "Usuários diários atendidos" },
    ],
    skills: [
      { label: "Linguagens", items: ["Elixir", "TypeScript · JavaScript", "SQL"] },
      {
        label: "Backend",
        items: ["Phoenix", "PostgreSQL", "Redis", "REST APIs", "GraphQL", "Node.js"],
      },
      {
        label: "Infraestrutura",
        items: ["AWS (EC2, S3)", "Docker", "Linux", "Bash", "GitHub Actions", "GitLab CI"],
      },
      {
        label: "Engenharia",
        items: [
          "Git",
          "CI/CD",
          "Arquitetura Limpa",
          "Arquitetura Hexagonal",
          "Domain-Driven Design (DDD)",
          "SOLID",
          "Processamento Assíncrono",
        ],
      },
      {
        label: "Aprofundando Atualmente",
        items: [
          "Sistemas Distribuídos",
          "Arquitetura Orientada a Eventos",
          "RabbitMQ",
          "Observabilidade (Grafana, OpenTelemetry)",
        ],
      },
    ],
    values: [
      "Simplicidade",
      "Manutenibilidade",
      "Performance",
      "Arquitetura limpa",
      "Escalabilidade",
      "Resultados & feedback",
    ],
    jobs: [
      {
        role: "Engenheiro de Software Backend",
        company: "Idopter Labs",
        location: "Remoto · Brasil",
        dates: "Dez 2024 — Atual",
        summary:
          "Desenvolvendo e escalando APIs RESTful que sustentam plataformas de banking, benefícios, frotas e administração municipais, em Elixir e Phoenix.",
        metrics: [
          { value: "Milhares", label: "Usuários ativos diários" },
          { value: "4 domínios", label: "Banking · Benefícios · Frotas · Governo" },
        ],
        points: [
          "Entrego APIs RESTful em Elixir e Phoenix que sustentam plataformas de banking, benefícios, frotas e governo local usadas por mais de 20 mil usuários diariamente.",
          "Arquiteto funcionalidades de backend críticas para escala, sustentando altos volumes diários de transações sem comprometer a confiabilidade.",
          "Melhoro a responsividade e reduzo gargalos de processamento com jobs assíncronos em background com Oban.",
          "Aumento a performance das APIs otimizando queries no PostgreSQL e simplificando integrações com serviços internos e plataformas financeiras de terceiros.",
          "Acelero o ciclo de desenvolvimento automatizando fluxos recorrentes com shell scripts e Docker.",
        ],
        tech: ["Elixir", "Phoenix", "PostgreSQL", "Oban", "Docker", "AWS"],
      },
      {
        role: "Engenheiro de Software Mobile",
        company: "Idopter Labs",
        location: "Remoto · Brasil",
        dates: "Ago 2022 — Fev 2025",
        summary:
          "Ajudei a liderar a transformação de cinco aplicativos em uma plataforma white-label que hoje atende mais de 30 aplicativos com marcas distintas.",
        metrics: [
          { value: "30+", label: "Apps white-label entregues" },
          { value: "RN → Flutter", label: "Migração da stack em produção" },
        ],
        points: [
          "Atuei como desenvolvedor mobile principal durante a fase inicial de desenvolvimento de uma plataforma de banco digital. Projetando a arquitetura do projeto.",
          "Conduzi a migração de React Native para Flutter em múltiplos apps em produção, melhorando a manutenibilidade a longo prazo.",
          "Escalei uma único código-basde em mais de 30 apps white-label, multiplicando o alcance sem duplicar o esforço de engenharia.",
          "Introduzi arquitetura MVVM e injeção de dependência em todo o código mobile.",
          "Integrei apps multiplataforma com APIs REST e GraphQL para um fluxo de dados fluido.",
        ],
        tech: ["Flutter", "React Native", "GraphQL", "REST APIs", "MVVM"],
      },
      {
        role: "Desenvolvedor Full Stack",
        company: "Leal Sistemas",
        location: "Remoto · Brasil",
        dates: "Abr 2021 — Ago 2022",
        summary:
          "Entreguei aplicações web de ponta a ponta e elevei o nível do time trazendo o TypeScript para o fluxo de trabalho.",
        metrics: [
          { value: "Ponta a ponta", label: "Backend + UI do cliente" },
          { value: "TypeScript", label: "Introduzido no time" },
        ],
        points: [
          "Construí e entreguei aplicações web de ponta a ponta com Vue.js, Node.js e Firebase, dos serviços de backend à interface do cliente.",
          "Introduzi o TypeScript no fluxo de trabalho, fortalecendo a confiabilidade do código em todo o time.",
          "Entreguei funcionalidades voltadas ao cliente junto de ferramentas internas que apoiavam a operação do dia a dia.",
          "Conectei frontend e backend para entregar funcionalidades full-stack coesas em todo o produto.",
        ],
        tech: ["Vue.js", "Node.js", "TypeScript", "Firebase"],
      },
    ],
  },
};
