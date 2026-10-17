import { useLanguage } from '../context/LanguageContext'
import { useTranslations } from '../data/translations'

export default function Blog() {
  const { language } = useLanguage()
  const t = useTranslations(language)

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString(language === 'fr' ? 'fr-FR' : 'en-US', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
  }

  return (
    <div className="pt-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <header className="flex flex-col gap-3 mb-12">
          <h1 className="font-display font-bold text-5xl text-prusse tracking-[-0.03em]">{t.blog.title}</h1>
          <p className="text-lg text-encre-soft">{t.blog.subtitle}</p>
        </header>

        <ol className="border-t border-ligne">
          {t.blog.posts.map((post) => (
            <li key={post.id} className="border-b border-ligne py-8 flex flex-col gap-2">
              <p className="font-mono text-xs text-encre-soft tracking-wide">
                {post.category} · {formatDate(post.date)} · {post.readTime} {t.blog.readTime}
              </p>
              <h2 className="font-display font-semibold text-2xl text-encre">{post.title}</h2>
              <p className="text-encre-soft">{post.excerpt}</p>
              <p className="font-mono text-xs text-mousse">{t.blog.comingSoon}</p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}
