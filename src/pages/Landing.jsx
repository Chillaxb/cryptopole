import { Link } from 'react-router-dom'
import { Brain, Blocks, Glasses, Lightbulb, ArrowRight, CheckCircle, ExternalLink } from 'lucide-react'
import { clients, services } from '../data/content'

const iconMap = {
  Brain: Brain,
  Blocks: Blocks,
  Glasses: Glasses,
  Lightbulb: Lightbulb
}

export default function Landing() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50" />
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-200 rounded-full blur-3xl opacity-30" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
              <Blocks className="w-4 h-4" />
              Consultant Freelance
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6">
              Transformez vos idées en{' '}
              <span className="gradient-text">solutions innovantes</span>
            </h1>

            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Expert en Intelligence Artificielle, Blockchain et Technologies XR.
              Ex-CEO France d'Arxum, j'accompagne les entreprises dans leur transformation digitale,
              de la pharma à l'aérospatiale.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:contact@cryptopole.fr"
                className="gradient-bg text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-2 hover:opacity-90 transition-opacity"
              >
                Discutons de votre projet
                <ArrowRight className="w-5 h-5" />
              </a>
              <Link
                to="/creations"
                className="bg-white text-slate-900 px-8 py-4 rounded-xl font-semibold border border-slate-200 hover:border-slate-300 transition-colors"
              >
                Voir mes réalisations
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-6 mt-12 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                10+ ans d'expérience
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                Clients Fortune 500
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                Projets ESA
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Expertise & Services
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Des solutions sur mesure pour répondre aux défis technologiques les plus complexes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const Icon = iconMap[service.icon]
              return (
                <div
                  key={index}
                  className="card-hover p-6 rounded-2xl bg-slate-50 border border-slate-100"
                >
                  <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-sm">
                    {service.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Ils m'ont fait confiance
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              De la startup innovante aux institutions internationales
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clients.map((client, index) => (
              <div
                key={index}
                className="card-hover bg-white p-6 rounded-2xl border border-slate-200"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center">
                    <span className="text-lg font-bold text-slate-600">
                      {client.name.charAt(0)}
                    </span>
                  </div>
                  <span className="text-xs font-medium px-3 py-1 bg-blue-100 text-blue-700 rounded-full">
                    {client.sector}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {client.name}
                </h3>
                <p className="text-slate-600 text-sm">
                  {client.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 gradient-bg relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtOS45NDEgMC0xOCA4LjA1OS0xOCAxOHM4LjA1OSAxOCAxOCAxOCAxOC04LjA1OSAxOC0xOC04LjA1OS0xOC0xOC0xOHptMCAzMmMtNy43MzIgMC0xNC02LjI2OC0xNC0xNHM2LjI2OC0xNCAxNC0xNCAxNCA2LjI2OCAxNCAxNC02LjI2OCAxNC0xNCAxNHoiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjA1Ii8+PC9nPjwvc3ZnPg==')] opacity-50" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Prêt à donner vie à votre projet ?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Que ce soit pour un audit technique, un développement sur mesure ou un accompagnement stratégique,
            je suis là pour vous aider.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:contact@cryptopole.fr"
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold flex items-center gap-2 hover:bg-blue-50 transition-colors"
            >
              Contactez-moi
              <ArrowRight className="w-5 h-5" />
            </a>
            <Link
              to="/about"
              className="bg-transparent text-white px-8 py-4 rounded-xl font-semibold border-2 border-white/30 hover:bg-white/10 transition-colors flex items-center gap-2"
            >
              En savoir plus
              <ExternalLink className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
