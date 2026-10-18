import { useState } from 'react'
import ExperienceDetails from '../components/ExperienceDetails'
import Modal from '../components/Modal'
import { ArrowRight, MailIcon, MapPinIcon, LinkedinIcon } from '../components/Icons'
import { useLanguage } from '../context/LanguageContext'
import { useTranslations, CONTACT_EMAIL, LINKEDIN_URL } from '../data/translations'

export default function About() {
  const [selectedId, setSelectedId] = useState(null)
  const { language } = useLanguage()
  const t = useTranslations(language)
  const a = t.about

  const selected = t.experience.items.find((item) => item.id === selectedId)

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 flex flex-col gap-5">
          <p className="eyebrow">{a.eyebrow}</p>
          <h1 className="font-display font-bold text-5xl md:text-6xl text-prusse tracking-[-0.03em]">Axel Benoist</h1>
          <p className="text-xl text-encre font-semibold">{a.role}</p>
          {a.bio.map((paragraph) => (
            <p key={paragraph} className="text-lg text-encre-soft leading-relaxed max-w-2xl">{paragraph}</p>
          ))}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-encre-soft pt-2">
            <span className="inline-flex items-center gap-2"><MapPinIcon className="w-4 h-4 text-prusse" />{a.location}</span>
            <a href={`mailto:${CONTACT_EMAIL}`} className="inline-flex items-center gap-2 hover:text-prusse transition-colors">
              <MailIcon className="w-4 h-4 text-prusse" />{CONTACT_EMAIL}
            </a>
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-prusse transition-colors">
              <LinkedinIcon className="w-4 h-4 text-prusse" />LinkedIn
            </a>
          </div>
        </div>
        <div className="lg:col-span-5">
          <figure className="max-w-sm mx-auto lg:max-w-none">
            <img
              src="/founder-portrait.webp"
              alt="Axel Benoist"
              className="w-full aspect-[4/5] object-cover rounded-md border border-ligne"
            />
          </figure>
        </div>
      </section>

      {/* Facts */}
      <section className="border-y border-ligne bg-white">
        <dl className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4">
          {a.facts.map((fact, index) => (
            <div
              key={fact.label}
              className={`py-8 flex flex-col gap-1 ${index % 2 === 1 ? 'pl-6 border-l border-ligne' : ''} ${index >= 2 ? 'md:pl-6 md:border-l md:border-ligne border-t md:border-t-0 border-ligne' : ''}`}
            >
              <dt className="font-mono text-2xl text-prusse tabular-nums">{fact.value}</dt>
              <dd className="text-sm text-encre-soft">{fact.label}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Experience */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="font-display font-bold text-4xl text-encre tracking-[-0.02em] mb-10">{a.experienceTitle}</h2>
        <ol className="border-t border-ligne">
          {t.experience.items.map((item) => (
            <li key={item.id} className="border-b border-ligne py-8 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8">
              <div className="md:col-span-3 flex md:flex-col gap-4 md:gap-3 items-center md:items-start">
                <div className="w-20 h-12 rounded border border-ligne bg-white flex items-center justify-center p-2 flex-shrink-0">
                  <img src={item.logo} alt="" className="w-full h-full object-contain" loading="lazy" decoding="async" />
                </div>
                <span className="font-mono text-sm text-encre-soft">{item.periodLong}</span>
              </div>
              <div className="md:col-span-9 flex flex-col gap-3">
                <div>
                  <h3 className="font-display font-semibold text-2xl text-encre">{item.name}</h3>
                  <p className="text-prusse font-semibold">{item.role}</p>
                </div>
                <ul className="flex flex-col gap-2">
                  {item.details.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-3 text-encre-soft">
                      <span className="mt-2 w-2 h-2 rounded-full bg-lichen flex-shrink-0" aria-hidden="true" />
                      {highlight}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => setSelectedId(item.id)}
                  className="self-start inline-flex items-center gap-2 text-prusse font-semibold link-underline mt-1"
                >
                  {t.experience.details}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <Modal isOpen={!!selected} onClose={() => setSelectedId(null)} labelledBy="experience-title">
        {selected && <ExperienceDetails item={selected} labels={t.modal} />}
      </Modal>

      {/* Education & skills */}
      <section className="bg-white border-y border-ligne">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="flex flex-col gap-8">
            <h2 className="font-display font-bold text-4xl text-encre tracking-[-0.02em]">{a.educationTitle}</h2>
            {a.education.map((edu) => (
              <div key={edu.degree} className="flex flex-col gap-1 border-t border-ligne pt-5">
                <span className="font-mono text-sm text-encre-soft">{edu.period}</span>
                <h3 className="font-display font-semibold text-xl text-encre">{edu.degree}</h3>
                <p className="text-prusse font-medium">{edu.school}</p>
                <p className="text-encre-soft">{edu.description}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-8">
            <h2 className="font-display font-bold text-4xl text-encre tracking-[-0.02em]">{a.skillsTitle}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {a.skills.map((group) => (
                <div key={group.category} className="flex flex-col gap-2 border-t border-ligne pt-5">
                  <h3 className="eyebrow">{group.category}</h3>
                  <ul className="flex flex-col gap-1 text-encre">
                    {group.items.map((skill) => <li key={skill}>{skill}</li>)}
                  </ul>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-3 border-t border-ligne pt-5">
              <h3 className="eyebrow">{a.interestsTitle}</h3>
              <p className="text-encre">{a.interests.join(' · ')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
        <div className="flex flex-col gap-2">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-prusse tracking-[-0.02em]">{t.cta.title}</h2>
          <p className="text-encre-soft">{t.cta.description}</p>
        </div>
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="inline-flex items-center gap-2 bg-prusse text-papier px-6 py-3.5 rounded font-semibold hover:bg-prusse-deep transition-colors self-start sm:self-auto"
        >
          {t.cta.button}
          <ArrowRight className="w-5 h-5" />
        </a>
      </section>
    </div>
  )
}
