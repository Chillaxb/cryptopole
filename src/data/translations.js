export const CONTACT_EMAIL = 'contact@cryptopole.fr'
export const LINKEDIN_URL = 'https://linkedin.com/in/axelbenoist'

export const translations = {
  fr: {
    nav: {
      home: 'Accueil',
      creations: 'Réalisations',
      blog: 'Blog',
      about: 'Parcours',
      contact: 'Contact'
    },

    hero: {
      eyebrow: 'Annecy · économie circulaire · santé · industrie',
      titleA: 'La tech au service',
      titleB: 'du vivant.',
      description: "Je conçois, vends et déploie des produits numériques pour l'économie circulaire, l'industrie et la santé. Dix ans de terrain, du premier rendez-vous au déploiement chez le client.",
      cta: 'Parlons de votre projet',
      ctaSecondary: 'Voir les réalisations',
      proofs: [
        { value: '€0 → €800k', label: 'ARR, filiale France ARXUM' },
        { value: '8', label: 'produits conçus et en ligne' },
        { value: '10 ans', label: 'de ventes et de produit B2B' }
      ],
      roots: ['recyclage', 'santé', 'industrie']
    },

    domains: {
      eyebrow: "Où j'interviens",
      title: 'Trois terrains',
      subtitle: 'Des secteurs où la technologie se mesure en tonnes tracées, en santé gagnée, en risques évités.',
      proofLabel: 'Preuves',
      items: [
        {
          id: 'circular',
          title: 'Économie circulaire',
          text: 'Tracer les déchets, prouver le recyclage, simplifier la conformité REP pour les recycleurs et les producteurs.',
          proofs: ['eco2Veritas', 'Tyre EPR', 'Simulateur ROI recyclage']
        },
        {
          id: 'health',
          title: 'Santé & performance',
          text: "Rendre lisibles les signaux du corps : sommeil, VFC, charge d'entraînement, respiration.",
          proofs: ['BioForge', 'SafeFlow']
        },
        {
          id: 'industry',
          title: 'Industrie & sciences de la vie',
          text: 'Traçabilité et qualité en environnement réglementé : pharma, laboratoires, spatial, défense.',
          proofs: ['ARXUM', 'Spread AI']
        }
      ]
    },

    capabilities: {
      eyebrow: "Ce que j'apporte",
      title: 'Vendre, piloter, livrer',
      items: [
        {
          title: "Vendre l'innovation aux grands comptes",
          text: 'Cycles longs, achats exigeants, environnements réglementés. Ventes directes et partenaires.',
          proof: '€0 → €800k ARR'
        },
        {
          title: 'Piloter le produit',
          text: "Du besoin terrain à la roadmap, jusqu'à l'onboarding des premiers clients.",
          proof: "Roadmap d'une plateforme de traçabilité"
        },
        {
          title: 'Prototyper vite',
          text: "D'une idée à un produit en ligne, testé avec de vrais utilisateurs, en quelques semaines.",
          proof: '8 produits en ligne'
        }
      ]
    },

    experience: {
      eyebrow: 'Parcours',
      title: 'Dix ans entre terrain et produit',
      details: 'Détails',
      seeAll: 'Tout le parcours',
      items: [
        {
          id: 'e2v',
          name: 'eco2Veritas',
          logo: '/logos/e2v.png',
          role: 'Sales & Product Development Director',
          period: '2025 – auj.',
          periodLong: 'Nov. 2025 – aujourd’hui',
          summary: "Ventes enterprise, stratégie produit et onboarding client d'une plateforme de conformité et de traçabilité pour le recyclage. Je porte la roadmap de la plateforme.",
          sector: ['Recyclage', 'Conformité', 'Traçabilité'],
          details: {
            context: 'Plateforme de conformité et de traçabilité pour l’industrie du recyclage. Arrivé pour bâtir le moteur commercial, je porte aujourd’hui aussi la roadmap produit.',
            highlights: [
              'Pilotage des ventes enterprise auprès des acteurs du recyclage, au Royaume-Uni, en Europe et en Amérique latine',
              "Déploiement chez un leader mondial de l'emballage, puis extension du contrat",
              'Refonte de l’architecture produit et de la grille tarifaire',
              'Création des outils de prospection (E2V Outreach)'
            ],
            impact: 'La conformité devient une source de valeur pour les recycleurs, et chaque tonne recyclée peut être prouvée.',
            skills: ['Enterprise Sales', 'Stratégie produit', 'Onboarding client', 'Pricing', 'Économie circulaire'],
            stack: ['HubSpot', 'Azure DevOps', 'Sales Navigator', 'Microsoft 365']
          }
        },
        {
          id: 'spread',
          name: 'Spread AI',
          logo: '/logos/spread.png',
          role: 'Consultant, développement du marché français',
          period: '2024 – 2025',
          periodLong: 'Juin 2024 – nov. 2025',
          summary: "Ouverture du marché français pour une plateforme allemande de Knowledge Graph industriel, dans l'automobile et la défense.",
          sector: ['Automobile', 'Défense', 'Industrie'],
          details: {
            context: "Mission de développement du marché français pour une solution Knowledge Graph, dans un marché automobile européen en pleine restructuration.",
            highlights: [
              'Relations stratégiques avec des constructeurs automobiles en France et en Italie',
              'Ouverture de comptes dans la défense et le spatial',
              'Plus de 80 rendez-vous qualifiés et deux négociations avec des constructeurs'
            ],
            impact: 'Vendre une technologie exigeante dans un marché qui se contracte demande de la rigueur et de la patience.',
            skills: ['Enterprise Sales', 'Automobile', 'Défense', 'Knowledge Graph'],
            stack: ['Salesforce', 'Sales Navigator', 'SalesLoft']
          }
        },
        {
          id: 'arxum',
          name: 'ARXUM',
          logo: '/logos/arxum.png',
          role: 'Sales Director & General Manager France',
          period: '2018 – 2024',
          periodLong: 'Fév. 2018 – mai 2024',
          summary: 'Employé n°1, puis CEO France. Filiale française construite de zéro jusqu’à €800k d’ARR, comptes signés dont l’Agence spatiale européenne.',
          sector: ['Sciences de la vie', 'Traçabilité', 'Industrie'],
          details: {
            context: "Premier employé d'une startup allemande de traçabilité industrielle pour les sciences de la vie.",
            highlights: [
              'Employé n°1, puis CEO France et investisseur',
              "Filiale française construite de zéro jusqu'à €800k d'ARR, en ventes directes et indirectes",
              "Équipe de 6 en France, au sein d'un groupe de 25+ personnes (Allemagne, France, Bulgarie)",
              "Grands comptes signés, dont l'Agence spatiale européenne"
            ],
            impact: "Toutes les facettes d'une scale-up : du premier déploiement chez un client à la stratégie de croissance européenne.",
            skills: ['Leadership', 'Création de filiale', 'Ventes B2B', 'Sciences de la vie', 'Blockchain'],
            stack: ['Zoho CRM', 'Jira', 'Confluence']
          }
        },
        {
          id: 'exact',
          name: 'Exact Software',
          logo: '/logos/exact.svg',
          role: 'Sales Executive, Cloud ERP',
          period: '2016 – 2017',
          periodLong: 'Août 2016 – déc. 2017',
          summary: '« Best Winter Sales Europe ». Meilleurs résultats de vente du pays sur l’ERP cloud pour PME.',
          sector: ['ERP', 'SaaS', 'PME'],
          details: {
            context: "Première expérience, chez un éditeur néerlandais leader de l'ERP pour PME en Europe.",
            highlights: [
              'Récompensé « Best Winter Sales Europe »',
              'Meilleurs résultats de vente du pays',
              "Ouverture du marché de l'ERP cloud auprès de l'industrie française"
            ],
            impact: 'Une école de vente exigeante, où j’ai appris les fondamentaux du SaaS B2B.',
            skills: ['Vente SaaS', 'ERP', 'New business', 'PME'],
            stack: ['Exact Online']
          }
        }
      ]
    },

    modal: {
      context: 'Contexte',
      highlights: 'Points clés',
      impact: "Ce que j'en retiens",
      skills: 'Compétences',
      stack: 'Outils'
    },

    cta: {
      title: 'Un projet qui sert le vivant ?',
      description: 'Recyclage, santé, industrie : si votre produit doit prouver son impact, parlons-en.',
      button: 'Écrire un message'
    },

    creations: {
      eyebrow: 'Réalisations',
      title: "Ce que j'ai construit",
      subtitle: 'Huit produits conçus, développés et mis en ligne, du besoin terrain au premier utilisateur.',
      visit: 'Visiter',
      live: 'En ligne',
      groups: [
        { id: 'circular', title: 'Économie circulaire & conformité', items: ['tyre-epr', 'recycling-calculator', 'e2v-ui'] },
        { id: 'health', title: 'Santé & performance', items: ['bioforge', 'safe-flow'] },
        { id: 'sales', title: 'Outils commerciaux', items: ['e2v-outreach', 'e2v-workshop-form'] },
        { id: 'commerce', title: 'Commerce', items: ['saffron4joy'] }
      ],
      items: {
        bioforge: {
          name: 'BioForge',
          description: "Le cockpit des sportifs d'endurance. Plans d'entraînement recalculés chaque jour selon le sommeil, la VFC et la fatigue, briefs de course sur mesure, analyses sanguines et microbiome croisées avec l'entraînement.",
          tags: ['Santé', 'Endurance', 'Garmin · WHOOP']
        },
        'safe-flow': {
          name: 'SafeFlow',
          description: "Coach de respiration pour la performance. 12 programmes guidés, 129 jours d'audio, suivi de la VFC avec Garmin. App iOS, Android et web.",
          tags: ['Respiration', 'VFC', 'Mobile']
        },
        'e2v-outreach': {
          name: 'E2V Outreach',
          description: "CRM et plateforme d'exécution commerciale : pipeline, séquences e-mail et appels, synchronisation HubSpot, tableaux de bord en temps réel.",
          tags: ['Ventes', 'CRM', 'HubSpot']
        },
        'tyre-epr': {
          name: 'Tyre EPR',
          description: "Conformité REP pour la filière pneumatique : suivi des volumes, détection d'anomalies de bilan matière, opérations terrain hors ligne, certificats. France, Mexique, Europe.",
          tags: ['Recyclage', 'REP', 'Multi-pays']
        },
        'recycling-calculator': {
          name: 'Simulateur ROI recyclage',
          description: "Calcule le retour sur investissement de la digitalisation pour un recycleur : incidents, audits, effectifs. Export Excel avec formules, pour le directeur financier.",
          tags: ['Recyclage', 'ROI', 'Excel']
        },
        'e2v-workshop-form': {
          name: 'Cadrage projet E2V',
          description: "Questionnaire de cadrage pour l'avant-vente : besoins structurés, qualification automatique, prospect engagé dès le départ.",
          tags: ['Avant-vente', 'Qualification']
        },
        'e2v-ui': {
          name: 'E2V Design System',
          description: "Composants et prototypes d'interfaces pour l'écosystème eco2Veritas, dont la gestion des pneus usagés.",
          tags: ['Design system', 'Interfaces']
        },
        saffron4joy: {
          name: 'Saffron4Joy',
          description: "Import et distribution de safran premium d'Iran : marque, stratégie de lancement et boutique en ligne.",
          tags: ['E-commerce', 'Marque']
        }
      }
    },

    blog: {
      title: 'Notes',
      subtitle: 'Réflexions sur les ventes enterprise, la tech et le développement commercial',
      readMore: 'Lire la suite',
      readTime: 'min de lecture',
      comingSoon: 'Article complet à venir...',
      posts: [
        {
          id: 1,
          title: "L'avenir de la Blockchain dans l'industrie pharmaceutique",
          excerpt: 'Comment la blockchain améliore la traçabilité des médicaments et la sécurité des patients.',
          date: '2024-01-15',
          category: 'Blockchain',
          readTime: 5
        },
        {
          id: 2,
          title: 'IA et AR en environnement réglementé Life Sciences',
          excerpt: "Retour d'expérience sur le déploiement de solutions IA et AR dans les laboratoires pharmaceutiques.",
          date: '2024-01-10',
          category: 'AI/AR',
          readTime: 7
        },
        {
          id: 3,
          title: 'MEDDICC : la méthode qui structure les ventes enterprise',
          excerpt: 'Comment structurer vos cycles de vente complexes avec la méthodologie MEDDICC.',
          date: '2024-01-05',
          category: 'Sales',
          readTime: 6
        }
      ]
    },

    about: {
      eyebrow: 'Parcours',
      role: 'Sales & Product Development Director',
      bio: [
        "Je dirige les ventes, la stratégie produit et l'onboarding client chez eco2Veritas, une plateforme de conformité et de traçabilité pour le recyclage. Arrivé en 2025 pour bâtir le moteur commercial, je porte aujourd'hui la roadmap de la plateforme.",
        "Avant cela, chez ARXUM, j'ai construit la filiale française de zéro jusqu'à €800k d'ARR et signé des grands comptes, dont l'Agence spatiale européenne. En parallèle, je conçois mes propres produits avec A-X Software."
      ],
      location: 'Annecy, France',
      available: 'Disponible pour échanger',
      facts: [
        { value: '€0 → €800k', label: 'ARR, filiale France' },
        { value: 'ESA', label: 'parmi les comptes signés' },
        { value: 'n°1 → CEO', label: 'chez ARXUM' },
        { value: 'X-HEC', label: 'Energy & Sustainability' }
      ],
      experienceTitle: 'Expérience',
      educationTitle: 'Formation',
      education: [
        {
          degree: 'Executive Program, Energy & Sustainability',
          school: 'X-HEC (École polytechnique × HEC Paris)',
          period: '2018 – 2019',
          description: "Thèse sur la blockchain appliquée aux énergies renouvelables. Primé lors d'un hackathon de l'UNEP."
        },
        {
          degree: 'MSc Social Entrepreneurship & Alternative Business Models',
          school: 'INSEEC Business School & Columbia College Chicago',
          period: '2015 – 2016',
          description: 'Double diplôme Paris et Chicago.'
        }
      ],
      skillsTitle: 'Compétences',
      skills: [
        { category: 'Ventes enterprise', items: ['MEDDICC & SPIN', 'Négociation complexe', 'Partenaires & channel', 'Cycles longs'] },
        { category: 'Produit', items: ['Roadmap', 'Onboarding client', 'Prototypage rapide', 'Pricing'] },
        { category: 'Impact & réglementation', items: ['REP / EPR', 'Traçabilité', 'Environnements GxP', 'Économie circulaire'] },
        { category: 'Leadership', items: ['Création de filiale', 'Équipes multi-pays (DE, FR, BG)', 'Management transverse', 'P&L'] }
      ],
      interestsTitle: "Centres d'intérêt",
      interests: ['Triathlon', 'Boxe', 'Philosophie & sciences', 'Piano']
    },

    footer: {
      tagline: 'La tech au service du vivant.',
      description: "Je conçois, vends et déploie des produits numériques pour l'économie circulaire, l'industrie et la santé. Basé à Annecy.",
      navigation: 'Navigation',
      contact: 'Contact',
      rights: 'Tous droits réservés.',
      legal: 'Mentions légales'
    }
  },

  en: {
    nav: {
      home: 'Home',
      creations: 'Work',
      blog: 'Blog',
      about: 'Background',
      contact: 'Contact'
    },

    hero: {
      eyebrow: 'Annecy · circular economy · health · industry',
      titleA: 'Technology in service of',
      titleB: 'the living world.',
      description: 'I design, sell and deploy digital products for the circular economy, industry and health. Ten years in the field, from the first meeting to the customer rollout.',
      cta: "Let's talk about your project",
      ctaSecondary: 'See the work',
      proofs: [
        { value: '€0 → €800k', label: 'ARR, ARXUM France' },
        { value: '8', label: 'products built and live' },
        { value: '10 years', label: 'of B2B sales and product' }
      ],
      roots: ['recycling', 'health', 'industry']
    },

    domains: {
      eyebrow: 'Where I work',
      title: 'Three fields',
      subtitle: 'Sectors where technology is measured in traced tonnes, better health and avoided risks.',
      proofLabel: 'Proof',
      items: [
        {
          id: 'circular',
          title: 'Circular economy',
          text: 'Tracing waste, proving recycling and simplifying extended producer responsibility for recyclers and producers.',
          proofs: ['eco2Veritas', 'Tyre EPR', 'Recycling ROI simulator']
        },
        {
          id: 'health',
          title: 'Health & performance',
          text: 'Making body signals readable: sleep, HRV, training load, breathing.',
          proofs: ['BioForge', 'SafeFlow']
        },
        {
          id: 'industry',
          title: 'Industry & life sciences',
          text: 'Traceability and quality in regulated environments: pharma, labs, space, defense.',
          proofs: ['ARXUM', 'Spread AI']
        }
      ]
    },

    capabilities: {
      eyebrow: 'What I bring',
      title: 'Sell, steer, ship',
      items: [
        {
          title: 'Selling innovation to large accounts',
          text: 'Long cycles, demanding procurement, regulated environments. Direct sales and partners.',
          proof: '€0 → €800k ARR'
        },
        {
          title: 'Steering the product',
          text: 'From field needs to the roadmap, through to onboarding the first customers.',
          proof: 'Roadmap of a traceability platform'
        },
        {
          title: 'Prototyping fast',
          text: 'From an idea to a live product, tested with real users, in a few weeks.',
          proof: '8 live products'
        }
      ]
    },

    experience: {
      eyebrow: 'Background',
      title: 'Ten years between field and product',
      details: 'Details',
      seeAll: 'Full background',
      items: [
        {
          id: 'e2v',
          name: 'eco2Veritas',
          logo: '/logos/e2v.png',
          role: 'Sales & Product Development Director',
          period: '2025 – now',
          periodLong: 'Nov 2025 – present',
          summary: 'Enterprise sales, product strategy and client onboarding for a compliance and traceability platform serving the recycling industry. I own the platform roadmap.',
          sector: ['Recycling', 'Compliance', 'Traceability'],
          details: {
            context: 'Compliance and traceability platform for the recycling industry. I joined to build the commercial engine and now also own the product roadmap.',
            highlights: [
              'Leading enterprise sales with recycling players across the UK, Europe and Latin America',
              'Delivered a deployment for a global packaging leader, then its expansion',
              'Rebuilt the product and pricing architecture',
              'Built the prospecting tools (E2V Outreach)'
            ],
            impact: 'Compliance becomes a source of value for recyclers, and every recycled tonne can be proven.',
            skills: ['Enterprise Sales', 'Product Strategy', 'Client Onboarding', 'Pricing', 'Circular Economy'],
            stack: ['HubSpot', 'Azure DevOps', 'Sales Navigator', 'Microsoft 365']
          }
        },
        {
          id: 'spread',
          name: 'Spread AI',
          logo: '/logos/spread.png',
          role: 'Consultant, French market development',
          period: '2024 – 2025',
          periodLong: 'Jun 2024 – Nov 2025',
          summary: 'Opened the French market for a German industrial Knowledge Graph platform, in automotive and defense.',
          sector: ['Automotive', 'Defense', 'Industry'],
          details: {
            context: 'Developing the French market for a Knowledge Graph solution, while the European automotive market was restructuring.',
            highlights: [
              'Strategic relationships with carmakers in France and Italy',
              'Opened accounts in defense and space',
              'More than 80 qualified meetings and two negotiations with carmakers'
            ],
            impact: 'Selling demanding technology in a shrinking market takes rigor and patience.',
            skills: ['Enterprise Sales', 'Automotive', 'Defense', 'Knowledge Graph'],
            stack: ['Salesforce', 'Sales Navigator', 'SalesLoft']
          }
        },
        {
          id: 'arxum',
          name: 'ARXUM',
          logo: '/logos/arxum.png',
          role: 'Sales Director & General Manager France',
          period: '2018 – 2024',
          periodLong: 'Feb 2018 – May 2024',
          summary: 'Employee #1, then CEO France. Built the French subsidiary from scratch to €800k ARR and signed accounts including the European Space Agency.',
          sector: ['Life Sciences', 'Traceability', 'Industry'],
          details: {
            context: 'First employee of a German industrial traceability startup serving life sciences.',
            highlights: [
              'Employee #1, then CEO France and investor',
              'Built the French subsidiary from scratch to €800k ARR, through direct and indirect sales',
              'Team of 6 in France, within a 25+ person group (Germany, France, Bulgaria)',
              'Signed large accounts, including the European Space Agency'
            ],
            impact: 'Every side of a scale-up: from the first customer deployment to the European growth strategy.',
            skills: ['Leadership', 'Subsidiary Launch', 'B2B Sales', 'Life Sciences', 'Blockchain'],
            stack: ['Zoho CRM', 'Jira', 'Confluence']
          }
        },
        {
          id: 'exact',
          name: 'Exact Software',
          logo: '/logos/exact.svg',
          role: 'Sales Executive, Cloud ERP',
          period: '2016 – 2017',
          periodLong: 'Aug 2016 – Dec 2017',
          summary: '"Best Winter Sales Europe". Top sales results in the country for cloud ERP for SMEs.',
          sector: ['ERP', 'SaaS', 'SMB'],
          details: {
            context: 'First role, at a Dutch software company leading the European ERP market for SMEs.',
            highlights: [
              'Awarded "Best Winter Sales Europe"',
              'Top sales results in the country',
              'Opened the cloud ERP market with French industry'
            ],
            impact: 'A demanding sales school where I learned the fundamentals of B2B SaaS.',
            skills: ['SaaS Sales', 'ERP', 'New Business', 'SMB'],
            stack: ['Exact Online']
          }
        }
      ]
    },

    modal: {
      context: 'Context',
      highlights: 'Highlights',
      impact: 'What I took from it',
      skills: 'Skills',
      stack: 'Tools'
    },

    cta: {
      title: 'A project that serves the living world?',
      description: 'Recycling, health, industry: if your product has to prove its impact, let’s talk.',
      button: 'Send a message'
    },

    creations: {
      eyebrow: 'Work',
      title: 'What I have built',
      subtitle: 'Eight products designed, built and shipped, from field needs to the first user.',
      visit: 'Visit',
      live: 'Live',
      groups: [
        { id: 'circular', title: 'Circular economy & compliance', items: ['tyre-epr', 'recycling-calculator', 'e2v-ui'] },
        { id: 'health', title: 'Health & performance', items: ['bioforge', 'safe-flow'] },
        { id: 'sales', title: 'Sales tools', items: ['e2v-outreach', 'e2v-workshop-form'] },
        { id: 'commerce', title: 'Commerce', items: ['saffron4joy'] }
      ],
      items: {
        bioforge: {
          name: 'BioForge',
          description: 'The cockpit for endurance athletes. Training plans redesigned every day from sleep, HRV and fatigue, tailored race briefs, blood and microbiome analysis cross-checked with training.',
          tags: ['Health', 'Endurance', 'Garmin · WHOOP']
        },
        'safe-flow': {
          name: 'SafeFlow',
          description: 'Breathing coach for performance. 12 guided programs, 129 days of audio, HRV tracking with Garmin. iOS, Android and web app.',
          tags: ['Breathing', 'HRV', 'Mobile']
        },
        'e2v-outreach': {
          name: 'E2V Outreach',
          description: 'CRM and sales execution platform: pipeline, email and call sequences, HubSpot sync, real-time dashboards.',
          tags: ['Sales', 'CRM', 'HubSpot']
        },
        'tyre-epr': {
          name: 'Tyre EPR',
          description: 'Extended producer responsibility for the tyre industry: volume tracking, mass balance anomaly detection, offline field operations, certificates. France, Mexico, Europe.',
          tags: ['Recycling', 'EPR', 'Multi-country']
        },
        'recycling-calculator': {
          name: 'Recycling ROI simulator',
          description: 'Calculates the return on digitalisation for a recycler: incidents, audits, headcount. Excel export with live formulas, for the CFO.',
          tags: ['Recycling', 'ROI', 'Excel']
        },
        'e2v-workshop-form': {
          name: 'E2V project scoping',
          description: 'Scoping questionnaire for pre-sales: structured needs, automatic qualification, an engaged prospect from day one.',
          tags: ['Pre-sales', 'Qualification']
        },
        'e2v-ui': {
          name: 'E2V Design System',
          description: 'Components and interface prototypes for the eco2Veritas ecosystem, including end-of-life tyre management.',
          tags: ['Design system', 'Interfaces']
        },
        saffron4joy: {
          name: 'Saffron4Joy',
          description: 'Import and distribution of premium Iranian saffron: brand, launch strategy and online store.',
          tags: ['E-commerce', 'Brand']
        }
      }
    },

    blog: {
      title: 'Notes',
      subtitle: 'Thoughts on enterprise sales, tech and business development',
      readMore: 'Read more',
      readTime: 'min read',
      comingSoon: 'Full article coming soon...',
      posts: [
        {
          id: 1,
          title: 'The Future of Blockchain in the Pharmaceutical Industry',
          excerpt: 'How blockchain improves drug traceability and patient safety.',
          date: '2024-01-15',
          category: 'Blockchain',
          readTime: 5
        },
        {
          id: 2,
          title: 'AI and AR in Regulated Life Sciences Environments',
          excerpt: 'Lessons from deploying AI and AR solutions in pharmaceutical laboratories.',
          date: '2024-01-10',
          category: 'AI/AR',
          readTime: 7
        },
        {
          id: 3,
          title: 'MEDDICC: the method that structures enterprise sales',
          excerpt: 'How to structure complex sales cycles with the MEDDICC methodology.',
          date: '2024-01-05',
          category: 'Sales',
          readTime: 6
        }
      ]
    },

    about: {
      eyebrow: 'Background',
      role: 'Sales & Product Development Director',
      bio: [
        'I lead sales, product strategy and client onboarding at eco2Veritas, a compliance and traceability platform for the recycling industry. I joined in 2025 to build the commercial engine and now own the platform roadmap.',
        'Before that, at ARXUM, I built the French subsidiary from scratch to €800k ARR and signed large accounts, including the European Space Agency. Alongside, I build my own products with A-X Software.'
      ],
      location: 'Annecy, France',
      available: 'Open to conversations',
      facts: [
        { value: '€0 → €800k', label: 'ARR, French subsidiary' },
        { value: 'ESA', label: 'among signed accounts' },
        { value: '#1 → CEO', label: 'at ARXUM' },
        { value: 'X-HEC', label: 'Energy & Sustainability' }
      ],
      experienceTitle: 'Experience',
      educationTitle: 'Education',
      education: [
        {
          degree: 'Executive Program, Energy & Sustainability',
          school: 'X-HEC (École polytechnique × HEC Paris)',
          period: '2018 – 2019',
          description: 'Thesis on blockchain applied to renewable energy. Award winner at a UNEP hackathon.'
        },
        {
          degree: 'MSc Social Entrepreneurship & Alternative Business Models',
          school: 'INSEEC Business School & Columbia College Chicago',
          period: '2015 – 2016',
          description: 'Dual degree, Paris and Chicago.'
        }
      ],
      skillsTitle: 'Skills',
      skills: [
        { category: 'Enterprise sales', items: ['MEDDICC & SPIN', 'Complex negotiation', 'Partners & channel', 'Long cycles'] },
        { category: 'Product', items: ['Roadmap', 'Client onboarding', 'Rapid prototyping', 'Pricing'] },
        { category: 'Impact & regulation', items: ['EPR', 'Traceability', 'GxP environments', 'Circular economy'] },
        { category: 'Leadership', items: ['Subsidiary launch', 'Cross-country teams (DE, FR, BG)', 'Cross-functional management', 'P&L'] }
      ],
      interestsTitle: 'Interests',
      interests: ['Triathlon', 'Boxing', 'Philosophy & science', 'Piano']
    },

    footer: {
      tagline: 'Technology in service of the living world.',
      description: 'I design, sell and deploy digital products for the circular economy, industry and health. Based in Annecy, France.',
      navigation: 'Navigation',
      contact: 'Contact',
      rights: 'All rights reserved.',
      legal: 'Legal notice'
    }
  }
}

export function useTranslations(language) {
  return translations[language] || translations.fr
}
