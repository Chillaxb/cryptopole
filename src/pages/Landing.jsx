import { useState } from 'react'
import { Link } from 'react-router-dom'
import HeroArt from '../components/HeroArt'
import ExperienceDetails from '../components/ExperienceDetails'
import Modal from '../components/Modal'
import { ArrowRight, LoopIcon, PulseIcon, FactoryIcon, LinkedinIcon } from '../components/Icons'
import { useLanguage } from '../context/LanguageContext'
import { useTranslations, CONTACT_EMAIL, LINKEDIN_URL } from '../data/translations'

const domainIcons = {
  circular: LoopIcon,
  health: PulseIcon,
  industry: FactoryIcon
}

export default function Landing() {
  const [selectedId, setSelectedId] = useState(null)
  const { language } = useLanguage()
  const t = useTranslations(language)

  const selected = t.experience.items.find((item) => item.id === selectedId)

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-16 md:pt-20 md:pb-24 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 flex flex-col gap-6">
            <p className="eyebrow">{t.hero.eyebrow}</p>
            <h1 className="font-display font-bold text-prusse text-[2.75rem] leading-[1.02] tracking-[-0.03em] sm:text-6xl lg:text-7xl">
              {t.hero.titleA}{' '}
              <em className="font-serif font-normal italic text-encre tracking-normal">{t.hero.titleB}</em>
            </h1>
            <p className="text-lg text-encre-soft max-w-xl leading-relaxed">
              {t.hero.description}
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="inline-flex items-center gap-2 bg-prusse text-papier px-6 py-3.5 rounded font-semibold hover:bg-prusse-deep transition-colors"
              >
                {t.hero.cta}
                <ArrowRight className="w-5 h-5" />
              </a>
              <Link
                to="/creations"
                className="inline-flex items-center gap-2 border-[1.5px] border-prusse text-prusse px-6 py-3.5 rounded font-semibold hover:bg-prusse hover:text-papier transition-colors"
              >
                {t.hero.ctaSecondary}
              </Link>
            </div>
            <dl className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 pt-6 mt-2 border-t border-ligne">
              {t.hero.proofs.map((proof) => (
                <div key={proof.label} className="flex flex-col gap-1">
                  <dt className="font-mono text-xl text-prusse tabular-nums">{proof.value}</dt>
                  <dd className="text-sm text-encre-soft">{proof.label}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="lg:col-span-5 max-w-sm mx-auto w-full lg:max-w-none">
            <HeroArt roots={t.hero.roots} />
          </div>
        </div>
      </section>

      {/* Domains */}
      <section className="bg-white border-y border-ligne">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl flex flex-col gap-3 mb-12">
            <p className="eyebrow">{t.domains.eyebrow}</p>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-encre tracking-[-0.02em]">{t.domains.title}</h2>
            <p className="text-lg text-encre-soft">{t.domains.subtitle}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-ligne border border-ligne rounded-md overflow-hidden">
            {t.domains.items.map((domain) => {
              const DomainIcon = domainIcons[domain.id]
              return (
                <article key={domain.id} className="bg-papier p-7 flex flex-col gap-4">
                  <DomainIcon className="w-9 h-9 text-prusse" />
                  <h3 className="font-display font-semibold text-2xl text-encre">{domain.title}</h3>
                  <p className="text-encre-soft leading-relaxed">{domain.text}</p>
                  <div className="mt-auto pt-4 border-t border-ligne flex flex-col gap-2">
                    <span className="eyebrow">{t.domains.proofLabel}</span>
                    <p className="text-sm text-encre">{domain.proofs.join(' · ')}</p>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="flex flex-col gap-3 mb-12">
            <p className="eyebrow">{t.capabilities.eyebrow}</p>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-encre tracking-[-0.02em]">{t.capabilities.title}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-0 md:divide-x divide-ligne">
            {t.capabilities.items.map((item, index) => (
              <div key={item.title} className={`flex flex-col gap-3 ${index > 0 ? 'md:pl-8' : ''} ${index < 2 ? 'md:pr-8' : ''}`}>
                <h3 className="font-display font-semibold text-xl text-prusse">{item.title}</h3>
                <p className="text-encre-soft leading-relaxed">{item.text}</p>
                <p className="font-mono text-sm text-mousse mt-1">{item.proof}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="bg-white border-y border-ligne">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <div className="flex flex-col gap-3">
              <p className="eyebrow">{t.experience.eyebrow}</p>
              <h2 className="font-display font-bold text-4xl md:text-5xl text-encre tracking-[-0.02em]">{t.experience.title}</h2>
            </div>
            <Link to="/about" className="inline-flex items-center gap-2 text-prusse font-semibold link-underline">
              {t.experience.seeAll}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <ol className="border-t border-ligne">
            {t.experience.items.map((item) => (
              <li key={item.id} className="border-b border-ligne">
                <button
                  onClick={() => setSelectedId(item.id)}
                  className="w-full text-left grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-6 py-6 group"
                >
                  <span className="md:col-span-2 font-mono text-sm text-encre-soft tabular-nums pt-1">{item.period}</span>
                  <span className="md:col-span-3 flex flex-col">
                    <span className="font-display font-semibold text-xl text-encre group-hover:text-prusse transition-colors">{item.name}</span>
                    <span className="text-sm text-encre-soft">{item.role}</span>
                  </span>
                  <span className="md:col-span-6 text-encre-soft leading-relaxed">{item.summary}</span>
                  <span className="md:col-span-1 flex md:justify-end items-start pt-1 text-prusse text-sm font-semibold">
                    <span className="inline-flex items-center gap-1">
                      <span className="md:sr-only">{t.experience.details}</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </span>
                </button>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <Modal isOpen={!!selected} onClose={() => setSelectedId(null)} labelledBy="experience-title">
        {selected && <ExperienceDetails item={selected} labels={t.modal} />}
      </Modal>

      {/* CTA */}
      <section className="bg-prusse text-papier">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-8 flex flex-col gap-4">
            <h2 className="font-display font-bold text-4xl md:text-5xl tracking-[-0.02em]">{t.cta.title}</h2>
            <p className="text-lg text-[#D8E0EA] max-w-xl">{t.cta.description}</p>
          </div>
          <div className="md:col-span-4 flex flex-col gap-3 md:items-end">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="inline-flex items-center gap-2 bg-lichen text-encre px-6 py-3.5 rounded font-semibold hover:bg-papier transition-colors"
            >
              {t.cta.button}
              <ArrowRight className="w-5 h-5" />
            </a>
            <p className="font-mono text-sm text-[#D8E0EA] select-all">{CONTACT_EMAIL}</p>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-papier link-underline"
            >
              <LinkedinIcon className="w-4 h-4" />
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
