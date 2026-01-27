import { Briefcase, GraduationCap, Award, MapPin, Calendar, ArrowRight } from 'lucide-react'

export default function About() {
  const experience = [
    {
      role: 'CEO France',
      company: 'Arxum',
      period: '2020 - 2022',
      description: 'Direction de la filiale française spécialisée dans les solutions blockchain B2B pour la traçabilité industrielle. Développement commercial et partenariats stratégiques avec le secteur pharma/biotech.'
    },
    {
      role: 'Consultant Blockchain & AI',
      company: 'Freelance / Cryptopole',
      period: '2022 - Présent',
      description: 'Accompagnement d\'entreprises dans leur transformation digitale. Développement de solutions sur mesure en IA, blockchain et XR pour des clients variés.'
    },
    {
      role: 'Projets ESA',
      company: 'European Space Agency',
      period: '2021',
      description: 'Conception et développement de solutions de traçabilité pour des projets de l\'Agence Spatiale Européenne.'
    }
  ]

  const skills = [
    { category: 'AI & Machine Learning', items: ['LLMs & NLP', 'Computer Vision', 'MLOps', 'RAG Systems'] },
    { category: 'Blockchain', items: ['Ethereum', 'Solidity', 'Hyperledger', 'Tokenisation'] },
    { category: 'XR Technologies', items: ['Unity', 'AR/VR Dev', 'Spatial Computing', '3D Visualization'] },
    { category: 'Development', items: ['React', 'Node.js', 'Python', 'Cloud Architecture'] }
  ]

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              À Propos
            </h1>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Passionné par les technologies émergentes, j'accompagne les entreprises dans leur transformation
              digitale depuis plus de 10 ans. Mon parcours m'a mené de la direction d'une filiale blockchain
              à des projets avec l'Agence Spatiale Européenne.
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Aujourd'hui consultant indépendant sous la marque <strong className="text-slate-900">Cryptopole</strong>,
              je mets mon expertise au service de projets innovants, de la startup ambitieuse aux grands groupes industriels.
            </p>
            <div className="flex items-center gap-6 text-sm text-slate-500">
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                France
              </span>
              <span className="flex items-center gap-2">
                <Briefcase className="w-4 h-4" />
                Disponible pour missions
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <span className="text-8xl font-bold text-white/20">AXB</span>
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
            <h2 className="text-2xl font-bold text-slate-900">Expérience</h2>
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

        {/* Skills */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <Award className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold text-slate-900">Compétences</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-100"
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

        {/* Values */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold text-slate-900">Valeurs</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-8">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="font-semibold text-slate-900 mb-2">Excellence</h3>
              <p className="text-sm text-slate-600">
                Chaque projet mérite une attention aux détails et une qualité irréprochable
              </p>
            </div>
            <div className="text-center p-8">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="font-semibold text-slate-900 mb-2">Transparence</h3>
              <p className="text-sm text-slate-600">
                Communication claire et honnête à chaque étape du projet
              </p>
            </div>
            <div className="text-center p-8">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="font-semibold text-slate-900 mb-2">Innovation</h3>
              <p className="text-sm text-slate-600">
                Toujours à l'affût des dernières technologies pour des solutions d'avant-garde
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="gradient-bg rounded-3xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Travaillons ensemble
          </h2>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto">
            Que vous ayez un projet défini ou une idée à explorer, je suis à votre écoute
            pour discuter de la meilleure approche.
          </p>
          <a
            href="mailto:contact@cryptopole.fr"
            className="inline-flex bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold items-center gap-2 hover:bg-blue-50 transition-colors"
          >
            Prendre contact
            <ArrowRight className="w-5 h-5" />
          </a>
        </section>
      </div>
    </div>
  )
}
