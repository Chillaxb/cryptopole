import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const links = [
    { path: '/', label: 'Accueil' },
    { path: '/creations', label: 'Mes Créations' },
    { path: '/blog', label: 'Blog' },
    { path: '/about', label: 'À Propos' },
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
            <a
              href="mailto:contact@cryptopole.fr"
              className="gradient-bg text-white px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
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
              href="mailto:contact@cryptopole.fr"
              className="inline-block mt-4 gradient-bg text-white px-4 py-2 rounded-lg text-sm font-medium"
            >
              Contact
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
