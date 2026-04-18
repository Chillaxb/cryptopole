export const clients = [
  {
    name: 'ARXUM',
    logo: '/logos/arxum.png',
    description: 'Sales Director & General Manager France - Industrial SaaS (AI, AR) for Life Sciences',
    sector: 'Life Sciences • Blockchain',
    period: '2018 - 2024',
    role: 'Employé #1 → CEO France & Investisseur',
    details: {
      context: 'Rejoint comme premier employé d\'une startup blockchain allemande spécialisée dans la traçabilité industrielle pour les Life Sciences.',
      highlights: [
        'Évolution de Employé #1 à CEO France et Investisseur',
        'Construction de la filiale française from scratch jusqu\'à €100k ARR',
        'Collaboration avec 25+ FTEs (Sales, Project, R&D)',
        'Participation à toutes les échelles : projets clients, développement commercial, évolution produit'
      ],
      impact: 'Une aventure entrepreneuriale complète où j\'ai pu toucher à tous les aspects d\'une scale-up tech : de la première ligne de code déployée chez un client à la stratégie de croissance européenne.',
      skills: ['Leadership', 'Entrepreneuriat', 'Sales B2B', 'Life Sciences', 'Blockchain'],
      stack: ['Zoho CRM/ERP', 'Atlassian Jira', 'Atlassian Confluence']
    }
  },
  {
    name: 'Spread AI',
    logo: '/logos/spread.png',
    description: 'Strategic consulting pour l\'expansion marché européen de solutions IA industrielles',
    sector: 'Defense • Automotive • AI',
    period: '2024 - 2025',
    role: 'Consultant Strategic Sales',
    details: {
      context: 'Ma 9ème année de collaboration avec des entreprises allemandes. Mission de développement du marché français pour une solution Knowledge Graph dans un contexte automobile européen particulièrement difficile.',
      highlights: [
        'Développement de relations stratégiques avec Renault et Stellantis (France & Italie)',
        'Ouverture du secteur Défense : Ariane, Dassault, et autres acteurs majeurs',
        'Application rigoureuse de la stratégie Spread sur le territoire français',
        'Navigation dans un marché automobile en pleine restructuration'
      ],
      impact: 'Une expérience riche en technique et en leçons dans un contexte de marché difficile. Là où les vrais sales font la différence : transformer les obstacles en opportunités.',
      skills: ['Enterprise Sales', 'Automotive', 'Defense', 'Knowledge Graph', 'Resilience'],
      stack: ['Salesforce', 'Sales Navigator', 'Lusha', 'SalesLoft', 'OpenAI']
    }
  },
  {
    name: 'Eco2Veritas',
    logo: '/logos/e2v.png',
    description: 'Enterprise account development pour solutions logicielles industrielles',
    sector: 'Recyclage • AI • Industrial',
    period: '2025 - Présent',
    role: 'Consultant Business Development',
    details: {
      context: 'Accompagnement d\'une startup française innovante dans le secteur du recyclage industriel, utilisant l\'IA pour optimiser les processus de tri et de valorisation.',
      highlights: [
        'Développement de la stratégie commerciale B2B',
        'Création d\'outils d\'automatisation de prospection (E2V Outreach)',
        'Identification et qualification de comptes enterprise'
      ],
      impact: 'Contribution à la croissance d\'une solution tech à impact environnemental positif.',
      skills: ['Business Development', 'Sales Automation', 'Cleantech', 'AI'],
      stack: ['HubSpot', 'Sales Navigator', 'Lusha', 'Anthropic', 'Microsoft 365']
    }
  },
  {
    name: 'Exact Software',
    logo: '/logos/exact.svg',
    description: 'Sales Executive Cloud ERP - "Best Winter Sales Europe" Award',
    sector: 'ERP/SaaS',
    period: '2016 - 2017',
    role: 'Sales Executive Cloud ERP',
    details: {
      context: 'Ma première expérience professionnelle au sein d\'une entreprise internationale hollandaise, leader européen des solutions ERP pour PME.',
      highlights: [
        'Meilleurs résultats de vente du pays',
        'Récompensé "Best Winter Sales Europe" - top performer acquisition clients',
        'Ouverture du marché ERP Cloud pour l\'industrie française',
        'Dépassement constant des quotas commerciaux'
      ],
      impact: 'Une école de vente exceptionnelle où j\'ai tout appris des fondamentaux du B2B SaaS. Les bases solides qui ont construit ma carrière.',
      skills: ['SaaS Sales', 'ERP', 'New Business', 'Cloud Solutions', 'SMB/Mid-Market'],
      stack: ['Exact Online', 'Globe CRM/ERP/WMS']
    }
  }
]

export const creations = [
  {
    id: 'bioforge',
    name: 'BioForge',
    description: 'Plateforme d\'intelligence santé & performance. Unifie données génétiques, bilans sanguins, microbiome et entraînement. Pipeline génomique Evo 2, pharmacogénomique, recommandations IA exécutables. Coach conversationnel avec contexte médical complet.',
    tags: ['HealthTech', 'Genomics', 'AI', 'Next.js', 'FastAPI', 'pgvector'],
    url: 'https://bioforge-axel-benoists-projects.vercel.app',
    image: '/projects/bioforge.png',
    status: 'Live'
  },
  {
    id: 'safe-flow',
    name: 'Safe-flow.ai',
    description: 'Plateforme wellness complète : app mobile React Native + webapp. 15+ techniques guidées, coaching IA, intégration Garmin, gamification Paramis. Audio guidé ElevenLabs, bilingue, RGPD compliant.',
    tags: ['Wellness', 'React Native', 'AI', 'Garmin', 'Flask'],
    url: 'https://safe-flow.ai',
    image: '/projects/safeflow.png',
    status: 'Live'
  },
  {
    id: 'hireflow',
    name: 'HireFlow',
    description: 'Plateforme de recherche d\'emploi augmentée par IA. Scraping 20+ sources, scoring CV-offre 0-100, lettres de motivation multi-ton, STAR stories, préparation entretiens. Suivi candidatures full-cycle.',
    tags: ['HRTech', 'AI', 'Next.js', 'Prisma', 'Scraping'],
    url: 'https://hireflow-beta.vercel.app',
    image: '/projects/hireflow.png',
    status: 'Live'
  },
  {
    id: 'e2v-outreach',
    name: 'E2V Outreach',
    description: 'CRM & plateforme d\'exécution commerciale. Pipeline/contacts, séquences email/call automatisées, sync HubSpot, dashboard KPIs temps réel. Monitoring agents IA avec file d\'approbation.',
    tags: ['SalesTech', 'CRM', 'HubSpot', 'Next.js', 'FastAPI'],
    url: 'https://e2-v-outreach-kappa.vercel.app',
    image: '/projects/e2v.png',
    status: 'Live'
  },
  {
    id: 'video-studio',
    name: 'Video Studio',
    description: 'Pipeline de production vidéo multilingue automatisée. Scripts IA, traduction avec glossaire, SSML, avatars HeyGen. Du brief au livrable final.',
    tags: ['Video', 'AI', 'HeyGen', 'Next.js', 'FastAPI'],
    url: 'https://video-studio-jade.vercel.app',
    image: '/projects/video-studio.png',
    status: 'Live'
  },
  {
    id: 'tyre-epr',
    name: 'Tyre EPR Platform',
    description: 'Plateforme de conformité REP pneumatique. Dashboards multi-parties prenantes, tracking volumes, détection anomalies, opérations terrain mobile-first, certificats 2 niveaux. Multi-pays.',
    tags: ['RegTech', 'Compliance', 'React', 'TypeScript', 'Multi-country'],
    url: 'https://tyre-epr.vercel.app',
    image: '/projects/tyre-epr.png',
    status: 'Live'
  },
  {
    id: 'recycling-calculator',
    name: 'Recycling ROI Simulator',
    description: 'Simulateur ROI recyclage mécanique. Modélisation coûts, économies, timeline ROI. Export Excel avec formules live pour validation CFO.',
    tags: ['Sales Enablement', 'ROI', 'Simulation', 'Excel Export'],
    url: 'https://mechanical-recycling-calculator.vercel.app',
    image: '/projects/recycling-calculator.png',
    status: 'Live'
  },
  {
    id: 'e2v-workshop-form',
    name: 'E2V Project Scoping',
    description: 'Outil de cadrage projet interactif. Collecte structurée des besoins, qualification automatique, engagement prospect en phase de scoping.',
    tags: ['Sales Enablement', 'Next.js', 'Lead Qualification'],
    url: 'https://e2v-workshop-form.vercel.app',
    image: '/projects/e2v-workshop-form.png',
    status: 'Live'
  },
  {
    id: 'e2v-ui',
    name: 'E2V Design System',
    description: 'Bibliothèque de composants UI et design system pour l\'écosystème eco2Veritas. Prototypage rapide et guidelines de marque.',
    tags: ['UI/UX', 'Design System', 'Vite', 'Component Library'],
    url: 'https://e2v-ui.vercel.app',
    image: '/projects/e2v-ui.png',
    status: 'Live'
  },
  {
    id: 'saffron4joy',
    name: 'Saffron4Joy',
    description: 'Projet e-commerce pour l\'importation et distribution de safran premium d\'Iran. Branding complet, stratégie GTM et plateforme de vente.',
    tags: ['E-commerce', 'Import', 'Branding', 'GTM'],
    url: 'https://saffron4joy.github.io/Website-S4J/',
    image: '/projects/saffron4joy.png',
    status: 'Live'
  }
]

export const blogPosts = [
  {
    id: 1,
    title: 'L\'avenir de la Blockchain dans l\'industrie pharmaceutique',
    excerpt: 'Comment la blockchain révolutionne la traçabilité des médicaments et garantit la sécurité des patients.',
    date: '2024-01-15',
    category: 'Blockchain',
    readTime: '5 min'
  },
  {
    id: 2,
    title: 'IA et AR en environnement réglementé Life Sciences',
    excerpt: 'Retour d\'expérience sur le déploiement de solutions AI/AR dans les laboratoires pharmaceutiques.',
    date: '2024-01-10',
    category: 'AI/AR',
    readTime: '7 min'
  },
  {
    id: 3,
    title: 'MEDDICC : La méthode qui transforme les ventes enterprise',
    excerpt: 'Comment structurer vos cycles de vente complexes avec la méthodologie MEDDICC.',
    date: '2024-01-05',
    category: 'Sales',
    readTime: '6 min'
  }
]

export const services = [
  {
    title: 'Enterprise Sales',
    description: 'Développement commercial grands comptes, méthodologies MEDDICC & SPIN, cycles de vente complexes.',
    image: '/enterprise-sales.png'
  },
  {
    title: 'AI & SaaS Go-to-Market',
    description: 'Stratégie de lancement, expansion marché européen, channel & partner development.',
    image: '/ai-saas-gtm.png'
  },
  {
    title: 'Life Sciences & Industrial',
    description: 'Expertise sectorielle pharma/biotech, environnements réglementés GxP, solutions industrielles.',
    image: '/life-sciences.png'
  },
  {
    title: 'Team Building',
    description: 'Construction et scaling d\'équipes Sales, Project et R&D. Management cross-fonctionnel.',
    image: '/team-building.png'
  }
]
