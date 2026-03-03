import { Link } from 'react-router-dom'
import { Linkedin, Github, Mail } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { useTranslations } from '../data/translations'

export default function Footer() {
  const { language } = useLanguage()
  const t = useTranslations(language)

  const navLinks = [
    { path: '/', label: t.nav.home },
    { path: '/creations', label: t.nav.creations },
    { path: '/blog', label: t.nav.blog },
    { path: '/about', label: t.nav.about },
  ]

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="mb-4">
              <img src="/logo-full.png" alt="Cryptopole" className="h-10 brightness-0 invert" />
            </div>
            <p className="text-slate-400 text-sm max-w-md">
              {t.footer.description}
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold mb-4">{t.footer.navigation}</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">{t.footer.contact}</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a href="mailto:axel_lr@pm.me" className="hover:text-white transition-colors flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  axel_lr@pm.me
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/in/axelbenoist" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://github.com/Chillaxb" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 flex justify-center items-center">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Cryptopole. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  )
}
