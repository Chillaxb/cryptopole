export default function ExperienceDetails({ item, labels }) {
  return (
    <div className="p-8 flex flex-col gap-6">
      <div className="flex items-start gap-4 pr-8">
        <div className="w-20 h-14 rounded border border-ligne bg-white flex items-center justify-center flex-shrink-0 p-2">
          <img src={item.logo} alt="" className="w-full h-full object-contain" />
        </div>
        <div className="flex flex-col gap-0.5">
          <h2 id="experience-title" className="font-display font-bold text-2xl text-encre">{item.name}</h2>
          <p className="text-prusse font-semibold">{item.role}</p>
          <p className="font-mono text-sm text-encre-soft">{item.periodLong}</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {item.sector.map((tag) => (
          <span key={tag} className="font-mono text-xs px-2.5 py-1 rounded-full bg-brume text-encre">{tag}</span>
        ))}
      </div>

      <section className="flex flex-col gap-2">
        <h3 className="eyebrow">{labels.context}</h3>
        <p className="text-encre-soft leading-relaxed">{item.details.context}</p>
      </section>

      <section className="flex flex-col gap-3">
        <h3 className="eyebrow">{labels.highlights}</h3>
        <ul className="flex flex-col gap-2">
          {item.details.highlights.map((highlight) => (
            <li key={highlight} className="flex items-start gap-3 text-encre">
              <span className="mt-2 w-2 h-2 rounded-full bg-lichen flex-shrink-0" aria-hidden="true" />
              {highlight}
            </li>
          ))}
        </ul>
      </section>

      <section className="flex flex-col gap-2 bg-white border border-ligne rounded p-4">
        <h3 className="eyebrow">{labels.impact}</h3>
        <p className="font-serif italic text-xl text-encre leading-snug">{item.details.impact}</p>
      </section>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <section className="flex flex-col gap-2">
          <h3 className="eyebrow">{labels.skills}</h3>
          <p className="text-sm text-encre-soft">{item.details.skills.join(' · ')}</p>
        </section>
        <section className="flex flex-col gap-2">
          <h3 className="eyebrow">{labels.stack}</h3>
          <p className="text-sm text-encre-soft">{item.details.stack.join(' · ')}</p>
        </section>
      </div>
    </div>
  )
}
