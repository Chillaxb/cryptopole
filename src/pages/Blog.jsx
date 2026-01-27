import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react'
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

  const labels = language === 'fr' ? {
    readArticle: "Lire l'article",
    read: 'Lire',
    stayInformed: 'Restez informé',
    newsletterDesc: 'Recevez mes derniers articles et réflexions sur les technologies émergentes directement dans votre boîte mail.',
    emailPlaceholder: 'votre@email.com',
    subscribe: "S'inscrire"
  } : {
    readArticle: 'Read article',
    read: 'Read',
    stayInformed: 'Stay informed',
    newsletterDesc: 'Get my latest articles and thoughts on emerging technologies directly in your inbox.',
    emailPlaceholder: 'your@email.com',
    subscribe: 'Subscribe'
  }

  const blogPosts = t.blog.posts

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            {t.blog.title}
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            {t.blog.subtitle}
          </p>
        </div>

        {/* Featured Post */}
        {blogPosts.length > 0 && (
          <div className="mb-16">
            <article className="card-hover bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl overflow-hidden">
              <div className="p-8 md:p-12">
                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <span className="px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium flex items-center gap-2">
                    <Tag className="w-4 h-4" />
                    {blogPosts[0].category}
                  </span>
                  <span className="text-slate-500 text-sm flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {formatDate(blogPosts[0].date)}
                  </span>
                  <span className="text-slate-500 text-sm flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {blogPosts[0].readTime} {t.blog.readTime}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                  {blogPosts[0].title}
                </h2>
                <p className="text-lg text-slate-600 mb-6">
                  {blogPosts[0].excerpt}
                </p>
                <button className="gradient-bg text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 hover:opacity-90 transition-opacity">
                  {labels.readArticle}
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </article>
          </div>
        )}

        {/* Other Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.slice(1).map((post) => (
            <article
              key={post.id}
              className="card-hover bg-white rounded-2xl border border-slate-200 overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                  <span className="text-slate-400 text-xs flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime} {t.blog.readTime}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-slate-600 text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-400">
                    {formatDate(post.date)}
                  </span>
                  <button className="text-blue-600 text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all">
                    {labels.read}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className="mt-16 bg-slate-900 rounded-3xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            {labels.stayInformed}
          </h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto">
            {labels.newsletterDesc}
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder={labels.emailPlaceholder}
              className="flex-1 px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
            />
            <button
              type="submit"
              className="gradient-bg text-white px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity"
            >
              {labels.subscribe}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
