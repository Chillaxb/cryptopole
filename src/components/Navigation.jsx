import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Logo from './Logo'
import { MenuIcon, CloseIcon } from './Icons'
import { useLanguage } from '../context/LanguageContext'
import { useTranslations, CONTACT_EMAIL } from '../data/translations'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  const { language, toggleLanguage } = useLanguage()
  const t = useTranslations(language)

  const links = [
    { path: '/', label: t.nav.home },
    { path: '/creations', label: t.nav.creations },
    { path: '/about', label: t.nav.about },
  ]

  const isActive = (path) => location.pathname === path

  const languageToggle = (
    <button
      onClick={toggleLanguage}
      aria-label={language === 'fr' ? 'Switch to English' : 'Passer en français'}
      className="font-mono text-xs tracking-wider px-2.5 py-1.5 rounded border border-ligne hover:border-prusse transition-colors text-encre-soft"
    >
      <span className={language === 'fr' ? 'text-prusse font-medium' : ''}>FR</span>
      <span className="mx-1 text-ligne">/</span>
      <span className={language === 'en' ? 'text-prusse font-medium' : ''}>EN</span>
    </button>
  )

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-papier/90 backdrop-blur border-b border-ligne">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" aria-label="Cryptopole" onClick={() => setIsOpen(false)}>
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                aria-current={isActive(link.path) ? 'page' : undefined}
                className={`text-[0.95rem] transition-colors ${
                  isActive(link.path)
                    ? 'text-prusse font-semibold'
                    : 'text-encre-soft hover:text-prusse'
                }`}
              >
                {link.label}
              </Link>
            ))}
            {languageToggle}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="bg-prusse text-papier px-4 py-2 rounded text-sm font-semibold hover:bg-prusse-deep transition-colors"
            >
              {t.nav.contact}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            {languageToggle}
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              aria-expanded={isOpen}
              className="p-2 text-prusse"
            >
              {isOpen ? <CloseIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-ligne">
            <div className="flex flex-col gap-1">
              {links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`py-2.5 font-display text-lg ${
                    isActive(link.path) ? 'text-prusse font-semibold' : 'text-encre'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="mt-3 bg-prusse text-papier px-4 py-3 rounded text-center font-semibold"
              >
                {t.nav.contact}
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
