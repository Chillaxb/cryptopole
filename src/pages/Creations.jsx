import { ArrowUpRight, ArrowRight } from '../components/Icons'
import { useLanguage } from '../context/LanguageContext'
import { useTranslations, CONTACT_EMAIL } from '../data/translations'

const projectUrls = {
  'safe-flow': 'https://safe-flow.ai',
  'e2v-outreach': 'https://e2v-outreach.vercel.app',
  'saffron4joy': 'https://saffronforjoy.com',
  'bioforge': 'https://bioforge.science',
  'e2v-workshop-form': 'https://e2v-workshop-form.vercel.app',
  'tyre-epr': 'https://tyre-epr.vercel.app',
  'e2v-ui': 'https://tyre-mgmt.vercel.app',
  'recycling-calculator': 'https://mechanical-recycling-calculator.vercel.app'
}

const projectImages = {
  'safe-flow': '/projects/safeflow.webp',
  'e2v-outreach': '/projects/e2v.webp',
  'saffron4joy': '/projects/saffron4joy.webp',
  'e2v-ui': '/projects/e2v-ui.webp',
  'recycling-calculator': '/projects/recycling-calculator.webp',
  'tyre-epr': '/projects/tyre-epr.webp',
  'bioforge': '/projects/bioforge.webp',
  'e2v-workshop-form': '/projects/e2v-workshop-form.webp'
}

const hostOf = (url) => new URL(url).hostname.replace(/^www\./, '')

export default function Creations() {
  const { language } = useLanguage()
  const t = useTranslations(language)

  return (
    <div className="pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <header className="max-w-2xl flex flex-col gap-3 mb-14">
          <p className="eyebrow">{t.creations.eyebrow}</p>
          <h1 className="font-display font-bold text-5xl md:text-6xl text-prusse tracking-[-0.03em]">{t.creations.title}</h1>
          <p className="text-lg text-encre-soft">{t.creations.subtitle}</p>
        </header>

        <div className="flex flex-col gap-16">
          {t.creations.groups.map((group) => (
            <section key={group.id} aria-labelledby={`group-${group.id}`} className="flex flex-col gap-6">
              <div className="flex items-baseline justify-between gap-4 border-b border-ligne pb-3">
                <h2 id={`group-${group.id}`} className="font-display font-semibold text-2xl text-encre">{group.title}</h2>
                <span className="font-mono text-sm text-encre-soft tabular-nums">{String(group.items.length).padStart(2, '0')}</span>
              </div>
              <div className={`grid grid-cols-1 gap-6 ${group.items.length >= 3 ? 'md:grid-cols-2 lg:grid-cols-3' : 'md:grid-cols-2'}`}>
                {group.items.map((id) => {
                  const project = t.creations.items[id]
                  const url = projectUrls[id]
                  const single = group.items.length === 1
                  return (
                    <article
                      key={id}
                      className={`bg-white border border-ligne rounded-md overflow-hidden flex flex-col ${single ? 'md:col-span-2 md:grid md:grid-cols-2' : ''}`}
                    >
                      <div className={`aspect-[16/9] bg-brume overflow-hidden border-ligne ${single ? 'border-b md:border-b-0 md:border-r md:aspect-auto md:h-full' : 'border-b'}`}>
                        <img
                          src={projectImages[id]}
                          alt={project.name}
                          className="w-full h-full object-cover object-top"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                      <div className="p-6 flex flex-col gap-4 flex-1">
                        <div className="flex items-center justify-between gap-3">
                          <h3 className="font-display font-semibold text-2xl text-encre">{project.name}</h3>
                          <span className="inline-flex items-center gap-1.5 font-mono text-xs text-mousse">
                            <span className="w-2 h-2 rounded-full bg-lichen" aria-hidden="true" />
                            {t.creations.live}
                          </span>
                        </div>
                        <p className="text-encre-soft leading-relaxed">{project.description}</p>
                        <p className="font-mono text-xs text-encre-soft tracking-wide">{project.tags.join(' · ')}</p>
                        {url && (
                          <a
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-auto inline-flex items-center gap-2 self-start text-prusse font-semibold link-underline"
                          >
                            {t.creations.visit} {hostOf(url)}
                            <ArrowUpRight className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </article>
                  )
                })}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-20 border-t border-ligne pt-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="font-display text-2xl text-encre">{t.cta.title}</p>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="inline-flex items-center gap-2 bg-prusse text-papier px-6 py-3.5 rounded font-semibold hover:bg-prusse-deep transition-colors self-start"
          >
            {t.cta.button}
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  )
}
