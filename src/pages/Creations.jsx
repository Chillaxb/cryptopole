import { ExternalLink, Github, Tag } from 'lucide-react'
import { creations } from '../data/content'

export default function Creations() {
  const statusColors = {
    'Live': 'bg-green-100 text-green-700',
    'Production': 'bg-blue-100 text-blue-700',
    'Development': 'bg-yellow-100 text-yellow-700'
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
            Projets et outils développés pour résoudre des problèmes concrets avec les dernières technologies
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {creations.map((project) => (
            <article
              key={project.id}
              className="card-hover bg-white rounded-3xl border border-slate-200 overflow-hidden"
            >
              {/* Project Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <span className="text-4xl font-bold text-white/20">
                  {project.name}
                </span>
              </div>

              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold text-slate-900">
                    {project.name}
                  </h2>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[project.status]}`}>
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

                <div className="flex gap-4">
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
                  <a
                    href="https://github.com/Chillaxb"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-slate-100 text-slate-700 px-6 py-3 rounded-xl font-semibold flex items-center gap-2 hover:bg-slate-200 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Other Tools Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">
            Autres outils & contributions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
              <h3 className="font-semibold text-slate-900 mb-2">Scripts d'automatisation</h3>
              <p className="text-sm text-slate-600">
                Outils CLI pour la gestion de workflows et l'automatisation de tâches répétitives
              </p>
            </div>
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
              <h3 className="font-semibold text-slate-900 mb-2">Smart Contracts</h3>
              <p className="text-sm text-slate-600">
                Contrats intelligents Solidity pour la traçabilité et la tokenisation
              </p>
            </div>
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
              <h3 className="font-semibold text-slate-900 mb-2">Intégrations API</h3>
              <p className="text-sm text-slate-600">
                Connecteurs et middleware pour l'interopérabilité entre systèmes
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
            href="mailto:contact@cryptopole.fr"
            className="inline-flex gradient-bg text-white px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition-opacity"
          >
            Me contacter
          </a>
        </div>
      </div>
    </div>
  )
}
