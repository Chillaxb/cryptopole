import { ExternalLink, Tag } from 'lucide-react'
import { creations } from '../data/content'

export default function Creations() {
  const statusColors = {
    'Live': 'bg-green-100 text-green-700',
    'Production': 'bg-blue-100 text-blue-700',
    'Development': 'bg-yellow-100 text-yellow-700',
    'Consulting': 'bg-purple-100 text-purple-700',
    'Project': 'bg-orange-100 text-orange-700'
  }

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Mes Créations
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Projets, outils et missions de consulting développés au fil des années
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {creations.map((project) => (
            <article
              key={project.id}
              className="card-hover bg-white rounded-3xl border border-slate-200 overflow-hidden"
            >
              {/* Project Image */}
              {project.image ? (
                <div className="h-52 bg-slate-900 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.parentElement.innerHTML = `<span class="text-4xl font-bold text-slate-300">${project.name}</span>`
                    }}
                  />
                </div>
              ) : (
                <div className="h-52 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <span className="text-3xl font-bold text-white/30">
                    {project.name}
                  </span>
                </div>
              )}

              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold text-slate-900">
                    {project.name}
                  </h2>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[project.status] || 'bg-slate-100 text-slate-700'}`}>
                    {project.status}
                  </span>
                </div>

                <p className="text-slate-600 mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-medium flex items-center gap-1"
                    >
                      <Tag className="w-3 h-3" />
                      {tag}
                    </span>
                  ))}
                </div>

                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gradient-bg text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 hover:opacity-90 transition-opacity"
                  >
                    Visiter
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* Other Tools Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">
            Autres compétences & outils
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
              <h3 className="font-semibold text-slate-900 mb-2">Sales Automation</h3>
              <p className="text-sm text-slate-600">
                CRM, séquences email, prospection automatisée et analytics commerciaux
              </p>
            </div>
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
              <h3 className="font-semibold text-slate-900 mb-2">AI/AR Solutions</h3>
              <p className="text-sm text-slate-600">
                Déploiement de solutions AI et réalité augmentée en environnement Life Sciences
              </p>
            </div>
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
              <h3 className="font-semibold text-slate-900 mb-2">Go-to-Market</h3>
              <p className="text-sm text-slate-600">
                Stratégie de lancement, expansion marché et channel development
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-slate-600 mb-6">
            Vous avez un projet en tête ? Discutons-en !
          </p>
          <a
            href="mailto:axel_lr@pm.me"
            className="inline-flex gradient-bg text-white px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition-opacity"
          >
            Me contacter
          </a>
        </div>
      </div>
    </div>
  )
}
