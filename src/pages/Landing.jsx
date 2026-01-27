import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, ExternalLink, Calendar, Briefcase, Star, ChevronRight } from 'lucide-react'
import { clients, services } from '../data/content'
import Modal from '../components/Modal'

export default function Landing() {
  const [selectedClient, setSelectedClient] = useState(null)

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
              <img src="/logo-black.png" alt="" className="w-5 h-5" />
              Enterprise Sales & AI Consulting
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6">
              Accélérez votre{' '}
              <span className="gradient-text">croissance B2B</span>
            </h1>

            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Enterprise Sales Director avec 9+ ans d'expérience en B2B SaaS et solutions AI.
              Ex-GM France d'ARXUM, j'accompagne les entreprises tech dans leur expansion marché
              et la construction d'équipes commerciales performantes.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:axel_lr@pm.me"
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
                9+ ans d'expérience
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                €0 → €100k ARR
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                25+ FTEs en équipe
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
              Accompagnement stratégique pour startups et scale-ups tech
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="card-hover p-6 rounded-2xl bg-slate-50 border border-slate-100"
              >
                <div className="w-14 h-14 rounded-xl overflow-hidden mb-4 mx-auto">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2 text-center">
                  {service.title}
                </h3>
                <p className="text-slate-600 text-sm text-center">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Expérience & Références
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              De la startup tech aux grands groupes industriels
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {clients.map((client, index) => (
              <button
                key={index}
                onClick={() => setSelectedClient(client)}
                className="card-hover bg-white p-6 rounded-2xl border border-slate-200 text-left group cursor-pointer"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-20 h-14 rounded-xl bg-white border border-slate-100 flex items-center justify-center p-2">
                    <img src={client.logo} alt={client.name} className="w-full h-full object-contain" />
                  </div>
                  <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-blue-500 transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-1">
                  {client.name}
                </h3>
                <p className="text-xs text-slate-500 mb-2">{client.period}</p>
                <p className="text-slate-600 text-sm line-clamp-2">
                  {client.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-1">
                  {client.sector.split(' • ').map((tag, i) => (
                    <span key={i} className="text-xs px-2 py-0.5 bg-blue-50 text-blue-600 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Client Modal */}
      <Modal isOpen={!!selectedClient} onClose={() => setSelectedClient(null)}>
        {selectedClient && (
          <div className="p-8">
            {/* Header */}
            <div className="flex items-start gap-4 mb-6">
              <div className="w-24 h-16 rounded-2xl bg-white border border-slate-200 flex items-center justify-center flex-shrink-0 p-3">
                <img src={selectedClient.logo} alt={selectedClient.name} className="w-full h-full object-contain" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900">{selectedClient.name}</h2>
                <p className="text-blue-600 font-medium">{selectedClient.role}</p>
                <div className="flex items-center gap-2 mt-1 text-sm text-slate-500">
                  <Calendar className="w-4 h-4" />
                  {selectedClient.period}
                </div>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {selectedClient.sector.split(' • ').map((tag, i) => (
                <span key={i} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                  {tag}
                </span>
              ))}
            </div>

            {/* Context */}
            <div className="mb-6">
              <h3 className="flex items-center gap-2 text-sm font-semibold text-slate-900 mb-2">
                <Briefcase className="w-4 h-4 text-blue-600" />
                Contexte
              </h3>
              <p className="text-slate-600">{selectedClient.details.context}</p>
            </div>

            {/* Highlights */}
            <div className="mb-6">
              <h3 className="flex items-center gap-2 text-sm font-semibold text-slate-900 mb-3">
                <Star className="w-4 h-4 text-blue-600" />
                Points clés
              </h3>
              <ul className="space-y-2">
                {selectedClient.details.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-600">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>

            {/* Impact */}
            <div className="bg-slate-50 rounded-xl p-4 mb-6">
              <h3 className="text-sm font-semibold text-slate-900 mb-2">Impact & Apprentissages</h3>
              <p className="text-slate-600 italic">"{selectedClient.details.impact}"</p>
            </div>

            {/* Skills */}
            <div>
              <h3 className="text-sm font-semibold text-slate-900 mb-3">Compétences développées</h3>
              <div className="flex flex-wrap gap-2">
                {selectedClient.details.skills.map((skill, i) => (
                  <span key={i} className="px-3 py-1 bg-slate-200 text-slate-700 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </Modal>

      {/* CTA Section */}
      <section className="py-24 gradient-bg relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtOS45NDEgMC0xOCA4LjA1OS0xOCAxOHM4LjA1OSAxOCAxOCAxOCAxOC04LjA1OSAxOC0xOC04LjA1OS0xOC0xOC0xOHptMCAzMmMtNy43MzIgMC0xNC02LjI2OC0xNC0xNHM2LjI2OC0xNCAxNC0xNCAxNCA2LjI2OCAxNCAxNC02LjI2OCAxNC0xNCAxNHoiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjA1Ii8+PC9nPjwvc3ZnPg==')] opacity-50" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Prêt à accélérer votre croissance ?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Que ce soit pour structurer votre équipe commerciale, développer le marché français
            ou lancer votre solution AI/SaaS, je suis là pour vous accompagner.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:axel_lr@pm.me"
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
