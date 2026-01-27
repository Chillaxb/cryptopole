import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { useTranslations } from '../data/translations'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  const { language, toggleLanguage } = useLanguage()
  const t = useTranslations(language)

  const links = [
    { path: '/', label: t.nav.home },
    { path: '/creations', label: t.nav.creations },
    { path: '/blog', label: t.nav.blog },
    { path: '/about', label: t.nav.about },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center">
            <img src="/logo-full.png" alt="Cryptopole" className="h-12" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? 'text-blue-600'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Language Selector */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 px-3 py-1.5 rounded-lg border border-slate-200 hover:border-slate-300 transition-colors text-sm font-medium text-slate-600 hover:text-slate-900"
            >
              <span className={language === 'fr' ? 'text-blue-600 font-semibold' : ''}>FR</span>
              <span className="text-slate-300">|</span>
              <span className={language === 'en' ? 'text-blue-600 font-semibold' : ''}>EN</span>
            </button>

            <a
              href="mailto:axel_lr@pm.me"
              className="gradient-bg text-white px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
            >
              {t.nav.contact}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            {/* Mobile Language Selector */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 px-2 py-1 rounded-lg border border-slate-200 text-xs font-medium text-slate-600"
            >
              <span className={language === 'fr' ? 'text-blue-600 font-semibold' : ''}>FR</span>
              <span className="text-slate-300">|</span>
              <span className={language === 'en' ? 'text-blue-600 font-semibold' : ''}>EN</span>
            </button>

            <button
              className="p-2"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-slate-200">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block py-2 text-sm font-medium ${
                  isActive(link.path)
                    ? 'text-blue-600'
                    : 'text-slate-600'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="mailto:axel_lr@pm.me"
              className="inline-block mt-4 gradient-bg text-white px-4 py-2 rounded-lg text-sm font-medium"
            >
              {t.nav.contact}
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
