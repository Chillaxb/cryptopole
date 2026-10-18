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
      subtitle: "Huit produits, chacun né d'un problème business : ce qu'il résout, pour qui, et ce que ça change.",
      visit: 'Visiter',
      seeDemo: 'Ouvrir la démo',
      onRequest: 'Démo sur demande',
      status: { live: 'En ligne', beta: 'Bêta ouverte', demo: 'Démo', private: 'Accès restreint' },
      groups: [
        { id: 'circular', title: 'Économie circulaire : piloter la conformité', intro: 'La conformité coûte. Mesurée et prouvée, elle devient un argument commercial.', items: ['e2v-ui', 'tyre-epr'] },
        { id: 'sales', title: 'Vente B2B : du premier contact au contrat', intro: 'Raccourcir un cycle de vente industriel : chiffrer la valeur, cadrer vite, suivre chaque contact.', items: ['recycling-calculator', 'e2v-workshop-form', 'e2v-outreach'] },
        { id: 'health', title: 'Santé & performance', intro: "Rendre accessible à tous un suivi jusqu'ici réservé aux sportifs encadrés.", items: ['bioforge', 'safe-flow'] },
        { id: 'commerce', title: 'Marque & e-commerce', intro: 'Lancer une marque de bout en bout, du produit à la boutique.', items: ['saffron4joy'] }
      ],
      items: {
        'e2v-ui': {
          name: 'Plateforme de conformité pneus',
          status: 'demo',
          pitch: "Chaque fabricant voit en temps réel s'il est en règle.",
          description: "Pour une filière de responsabilité élargie du producteur : volumes mis sur le marché face aux tonnes réellement recyclées et certifiées, écarts détectés avant l'audit, pénalités évitées. Quatre vues : opérateur terrain, éco-organisme, marque, auditeur.",
          tags: ['Conformité', 'Bilan matière', 'Certificats']
        },
        'tyre-epr': {
          name: 'Modèle économique filière pneus',
          status: 'demo',
          pitch: "Montrer à chaque maillon ce qu'il gagne, avant de lancer la filière.",
          description: "Simulateur du marché mexicain des pneus usagés (550 000 t par an) sur cinq ans : de l'éco-contribution payée par les fabricants aux revenus des garages, collecteurs, transporteurs et cimenteries. Une base chiffrée commune pour négocier avec chaque acteur.",
          tags: ['Mexique', 'Plan à 5 ans', 'Chaîne de valeur']
        },
        'recycling-calculator': {
          name: 'Simulateur de gains recyclage',
          status: 'demo',
          pitch: 'Transformer une démo produit en business case chiffré.',
          description: "Pour un recycleur : le coût de ses contrôles manuels (réception, déclarations, bilan matière, certification) face au processus automatisé. Heures libérées, incidents évités, gains annuels, puis trois rapports prêts pour le directeur financier et la direction.",
          tags: ['Avant-vente', 'Retour sur investissement', 'Rapports']
        },
        'e2v-workshop-form': {
          name: 'Questionnaire de cadrage client',
          status: 'private',
          pitch: "L'atelier commence avec les réponses déjà sur la table.",
          description: "Envoyé au prospect avant l'atelier de cadrage, avec un accès propre à chaque client : réception des matières, déclarations, bilan matière, certificats, systèmes en place. Le temps d'atelier sert à décider, plus à collecter.",
          tags: ['Avant-vente', 'Cadrage', 'Accès par client']
        },
        'e2v-outreach': {
          name: 'E2V Outreach',
          status: 'private',
          pitch: "Toute la prospection d'eco2Veritas dans un seul outil.",
          description: "Pipeline, séquences e-mail, LinkedIn et appels, actions du jour pour chaque commercial, analyse des appels et synchronisation avec HubSpot. Chacun sait qui contacter aujourd'hui, la direction suit le pipeline en direct.",
          tags: ['CRM', 'Prospection', 'HubSpot']
        },
        bioforge: {
          name: 'BioForge',
          status: 'beta',
          pitch: "Le suivi d'un coach privé, au prix d'une appli.",
          description: "Les plans figés ignorent la vraie vie : nuit courte, fatigue, réunion qui déborde. BioForge recalcule le programme chaque jour à partir du sommeil, de la variabilité cardiaque et de la charge réelle, envoie les séances sur la montre et prépare un brief pour chaque course. Gratuit pendant la bêta, puis 9 € par mois, là où un coach en coûte 150.",
          tags: ['Endurance', 'Garmin · WHOOP · Apple Santé', 'iOS']
        },
        'safe-flow': {
          name: 'SafeFlow',
          status: 'live',
          pitch: 'La respiration, entraînée et mesurée comme un sport.',
          description: "Les apps de respiration perdent leurs utilisateurs : on ne sait pas comment faire, on n'arrive pas à s'y tenir. SafeFlow guide chaque souffle au son et à l'image, cale la routine sur l'agenda et prouve les progrès par la variabilité cardiaque, mesurée avec Garmin.",
          tags: ['12 programmes · 129 jours', 'Freemium', 'iOS · web']
        },
        saffron4joy: {
          name: 'Saffron4Joy',
          status: 'live',
          pitch: 'Une marque premium lancée de zéro.',
          description: "Import et distribution de safran iranien : positionnement, identité, boutique en ligne bilingue et une acquisition portée par les contenus (recettes, bienfaits, blog).",
          tags: ['E-commerce', 'Marque', 'Contenus']
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
      subtitle: 'Eight products, each born from a business problem: what it solves, for whom, and what it changes.',
      visit: 'Visit',
      seeDemo: 'Open the demo',
      onRequest: 'Demo on request',
      status: { live: 'Live', beta: 'Open beta', demo: 'Demo', private: 'Restricted access' },
      groups: [
        { id: 'circular', title: 'Circular economy: running compliance', intro: 'Compliance costs money. Measured and proven, it becomes a sales argument.', items: ['e2v-ui', 'tyre-epr'] },
        { id: 'sales', title: 'B2B sales: from first contact to contract', intro: 'Shortening an industrial sales cycle: put a number on the value, scope fast, follow every contact.', items: ['recycling-calculator', 'e2v-workshop-form', 'e2v-outreach'] },
        { id: 'health', title: 'Health & performance', intro: 'Making the kind of guidance only coached athletes had available to everyone.', items: ['bioforge', 'safe-flow'] },
        { id: 'commerce', title: 'Brand & e-commerce', intro: 'Launching a brand end to end, from product to store.', items: ['saffron4joy'] }
      ],
      items: {
        'e2v-ui': {
          name: 'Tyre compliance platform',
          status: 'demo',
          pitch: 'Every manufacturer sees in real time whether it is compliant.',
          description: 'For an extended producer responsibility scheme: tonnes placed on the market against tonnes actually recycled and certified, gaps caught before the audit, penalties avoided. Four views: field operator, producer organisation, brand, auditor.',
          tags: ['Compliance', 'Mass balance', 'Certificates']
        },
        'tyre-epr': {
          name: 'Tyre value chain model',
          status: 'demo',
          pitch: 'Showing every link what it earns, before the scheme launches.',
          description: 'Simulator of the Mexican end-of-life tyre market (550,000 t a year) over five years: from the eco-fee paid by manufacturers to the revenue of garages, collectors, hauliers and cement kilns. One shared set of numbers to negotiate with every player.',
          tags: ['Mexico', '5-year plan', 'Value chain']
        },
        'recycling-calculator': {
          name: 'Recycling savings simulator',
          status: 'demo',
          pitch: 'Turning a product demo into a costed business case.',
          description: 'For a recycler: the cost of its manual checks (intake, reporting, mass balance, certification) against the automated process. Hours freed, incidents avoided, annual savings, then three reports ready for the CFO and the board.',
          tags: ['Pre-sales', 'Return on investment', 'Reports']
        },
        'e2v-workshop-form': {
          name: 'Client scoping questionnaire',
          status: 'private',
          pitch: 'The workshop starts with the answers already on the table.',
          description: 'Sent to the prospect before the scoping workshop, with access unique to each client: material intake, reporting, mass balance, certificates, current systems. Workshop time goes to decisions, not data collection.',
          tags: ['Pre-sales', 'Scoping', 'Per-client access']
        },
        'e2v-outreach': {
          name: 'E2V Outreach',
          status: 'private',
          pitch: "All of eco2Veritas' prospecting in one tool.",
          description: 'Pipeline, email, LinkedIn and call sequences, daily actions for each rep, call analysis and HubSpot sync. Everyone knows who to contact today, leadership follows the pipeline live.',
          tags: ['CRM', 'Prospecting', 'HubSpot']
        },
        bioforge: {
          name: 'BioForge',
          status: 'beta',
          pitch: 'The follow-up of a private coach, for the price of an app.',
          description: 'Fixed plans ignore real life: a short night, fatigue, a meeting that runs over. BioForge redesigns the programme every day from sleep, heart rate variability and actual load, sends sessions to the watch and prepares a brief for every race. Free during the beta, then €9 a month, where a coach costs €150.',
          tags: ['Endurance', 'Garmin · WHOOP · Apple Health', 'iOS']
        },
        'safe-flow': {
          name: 'SafeFlow',
          status: 'live',
          pitch: 'Breathing, trained and measured like a sport.',
          description: 'Breathing apps lose their users: people do not know how to do it and cannot keep it up. SafeFlow guides every breath with sound and visuals, fits the routine into the calendar and proves progress through heart rate variability, measured with Garmin.',
          tags: ['12 programmes · 129 days', 'Freemium', 'iOS · web']
        },
        saffron4joy: {
          name: 'Saffron4Joy',
          status: 'live',
          pitch: 'A premium brand launched from scratch.',
          description: 'Import and distribution of Iranian saffron: positioning, identity, a bilingual online store and content-led acquisition (recipes, benefits, blog).',
          tags: ['E-commerce', 'Brand', 'Content']
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
