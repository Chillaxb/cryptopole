import { Link } from 'react-router-dom'
import Logo from './Logo'
import { LinkedinIcon, GithubIcon, MailIcon } from './Icons'
import { useLanguage } from '../context/LanguageContext'
import { useTranslations, CONTACT_EMAIL, LINKEDIN_URL } from '../data/translations'

export default function Footer() {
  const { language } = useLanguage()
  const t = useTranslations(language)

  const navLinks = [
    { path: '/', label: t.nav.home },
    { path: '/creations', label: t.nav.creations },
    { path: '/about', label: t.nav.about },
  ]

  return (
    <footer className="bg-prusse-deep text-papier">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2 flex flex-col gap-4">
            <Logo tone="papier" />
            <p className="font-serif italic text-2xl text-papier">{t.footer.tagline}</p>
            <p className="text-[#C9D3E0] text-sm max-w-md leading-relaxed">{t.footer.description}</p>
          </div>

          <div>
            <h3 className="eyebrow !text-lichen mb-4">{t.footer.navigation}</h3>
            <ul className="space-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-[#C9D3E0] hover:text-papier transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="eyebrow !text-lichen mb-4">{t.footer.contact}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-[#C9D3E0] hover:text-papier transition-colors inline-flex items-center gap-2">
                  <MailIcon className="w-4 h-4" />
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li>
                <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="text-[#C9D3E0] hover:text-papier transition-colors inline-flex items-center gap-2">
                  <LinkedinIcon className="w-4 h-4" />
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://github.com/Chillaxb" target="_blank" rel="noopener noreferrer" className="text-[#C9D3E0] hover:text-papier transition-colors inline-flex items-center gap-2">
                  <GithubIcon className="w-4 h-4" />
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 text-sm text-[#AFBCCD]">
          <p>© {new Date().getFullYear()} A-X Software · Cryptopole. {t.footer.rights}</p>
          <Link to="/mentions-legales" className="hover:text-papier transition-colors">
            {t.footer.legal}
          </Link>
        </div>
      </div>
    </footer>
  )
}
