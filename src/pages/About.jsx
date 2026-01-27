import { Briefcase, GraduationCap, Award, MapPin, Calendar, ArrowRight, Mail, Linkedin, Phone } from 'lucide-react'

export default function About() {
  const experience = [
    {
      role: 'Independent Consultant – AI & Enterprise Software',
      company: 'Spread AI / Eco2Veritas',
      period: 'Juin 2024 – Présent',
      description: 'Strategic consulting pour entreprises européennes de logiciels IA sur l\'expansion marché. Enterprise account development pour solutions logicielles industrielles en France.'
    },
    {
      role: 'Sales Director & General Manager France',
      company: 'ARXUM GmbH & ARXUM France SAS',
      period: 'Fév 2018 – Mai 2024 (6 ans)',
      description: 'Fondation et scaling de la filiale française de 0 à 25+ FTEs (Sales, Project, R&D). Croissance ARR de €0 à €100k via ventes directes et indirectes. Gestion du cycle de vente complet pour logiciels AI/AR en environnement Life Sciences réglementé.'
    },
    {
      role: 'Sales Executive – Cloud ERP Solutions',
      company: 'Exact Software',
      period: 'Août 2016 – Déc 2017 (1,5 an)',
      description: 'Récompensé "Best Winter Sales Europe" – top performer en acquisition clients et revenus. Développement de nouveaux marchés pour solutions Cloud ERP, dépassement constant des quotas.'
    }
  ]

  const education = [
    {
      degree: 'Executive Program – Energy and Sustainability',
      school: 'École Polytechnique',
      period: '2018 – 2019',
      description: 'Thèse sur la technologie blockchain appliquée aux énergies renouvelables. Récompensé au hackathon United Nations Energy Program (UNEP).'
    },
    {
      degree: 'MSc. Social Entrepreneurship & Alternative Business Models',
      school: 'INSEEC Business School & Columbia College',
      period: '2015 – 2016',
      description: 'Double diplôme Paris & Chicago.'
    }
  ]

  const skills = [
    { category: 'Enterprise Sales', items: ['MEDDICC & SPIN Selling', 'Complex Deal Negotiation', 'Channel & Partner Dev', 'Long Sales Cycles'] },
    { category: 'AI & SaaS', items: ['Go-to-Market Strategy', 'Market Expansion', 'Product Positioning', 'Value Selling'] },
    { category: 'Life Sciences', items: ['Pharma & Biotech', 'GxP Environments', 'Regulatory Compliance', 'Lab Operations'] },
    { category: 'Leadership', items: ['Team Building', 'Cross-functional Mgmt', 'Collaboration 25+ FTEs', 'P&L Ownership'] }
  ]

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-2">
              Axel Benoist
            </h1>
            <p className="text-xl text-blue-600 font-medium mb-6">
              Enterprise Sales Director | AI & SaaS
            </p>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Sales Director avec 9+ ans d'expérience dans le scaling de solutions B2B SaaS et AI
              sur des marchés enterprise complexes. Track record prouvé dans la construction d'équipes
              commerciales performantes, établissement de présence marché en Life Sciences, Industrial et Tech.
            </p>
            <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-6">
              <p className="text-blue-800 font-medium">
                🏆 Key Achievement: Construction de la filiale française from scratch jusqu'à €100k ARR
                en 4 ans, collaboration avec 25+ FTEs (Sales, Project, R&D).
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600">
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Annecy / Paris, France
              </span>
              <a href="mailto:axel_lr@pm.me" className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                <Mail className="w-4 h-4" />
                axel_lr@pm.me
              </a>
              <a href="https://linkedin.com/in/axelbenoist" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden">
              <img
                src="/founder-portrait.png"
                alt="Axel Benoist"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-xl p-4">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-slate-700">Disponible</span>
              </div>
            </div>
          </div>
        </div>

        {/* Experience */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <Briefcase className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold text-slate-900">Expérience Professionnelle</h2>
          </div>

          <div className="space-y-6">
            {experience.map((exp, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-slate-200 p-6 card-hover"
              >
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">{exp.role}</h3>
                    <p className="text-blue-600 font-medium">{exp.company}</p>
                  </div>
                  <span className="flex items-center gap-2 text-sm text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                    <Calendar className="w-4 h-4" />
                    {exp.period}
                  </span>
                </div>
                <p className="text-slate-600">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold text-slate-900">Formation</h2>
          </div>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-slate-50 rounded-2xl border border-slate-100 p-6"
              >
                <div className="flex flex-wrap items-start justify-between gap-4 mb-2">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">{edu.degree}</h3>
                    <p className="text-blue-600 font-medium">{edu.school}</p>
                  </div>
                  <span className="text-sm text-slate-500">{edu.period}</span>
                </div>
                <p className="text-slate-600 text-sm">{edu.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <Award className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold text-slate-900">Compétences Clés</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 border border-slate-200"
              >
                <h3 className="font-semibold text-slate-900 mb-4">{skill.category}</h3>
                <ul className="space-y-2">
                  {skill.items.map((item, i) => (
                    <li key={i} className="text-sm text-slate-600 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Interests */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Centres d'intérêt</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {['Triathlon', 'Boxe', 'Philosophie & Science', 'Piano'].map((interest, index) => (
              <span key={index} className="px-6 py-3 bg-slate-100 text-slate-700 rounded-full font-medium">
                {interest}
              </span>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="gradient-bg rounded-3xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Travaillons ensemble
          </h2>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto">
            Que vous cherchiez à développer votre marché français, structurer votre équipe commerciale
            ou lancer une solution AI/SaaS, discutons de votre projet.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:axel_lr@pm.me"
              className="inline-flex bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold items-center gap-2 hover:bg-blue-50 transition-colors"
            >
              Me contacter
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/axelbenoist"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex bg-transparent text-white border-2 border-white/30 px-8 py-4 rounded-xl font-semibold items-center gap-2 hover:bg-white/10 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}
