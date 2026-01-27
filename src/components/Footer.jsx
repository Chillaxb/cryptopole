import { Link } from 'react-router-dom'
import { Linkedin, Github, Mail } from 'lucide-react'

export default function Footer() {
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
              Consultant freelance spécialisé en Intelligence Artificielle, Blockchain et Technologies XR.
              Solutions innovantes pour l'industrie pharmaceutique, biotech et spatiale.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link to="/" className="hover:text-white transition-colors">Accueil</Link></li>
              <li><Link to="/creations" className="hover:text-white transition-colors">Mes Créations</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">À Propos</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a href="mailto:contact@cryptopole.fr" className="hover:text-white transition-colors flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  contact@cryptopole.fr
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/in/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
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

        <div className="border-t border-slate-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Cryptopole. Tous droits réservés.
          </p>
          <div className="flex gap-4 text-sm text-slate-500">
            <Link to="/legal" className="hover:text-white transition-colors">Mentions légales</Link>
            <Link to="/privacy" className="hover:text-white transition-colors">Confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
