'use client'

import { Github, Linkedin, Mail, Heart } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container-max section-padding">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">TB.R</h3>
            <p className="text-gray-400 leading-relaxed">
              Étudiant développeur passionné par la création de solutions innovantes 
              et l'apprentissage de nouvelles technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Liens rapides</h4>
            <nav className="space-y-2">
              {[
                { href: '#accueil', label: 'Accueil' },
                { href: '#apropos', label: 'À propos' },
                { href: '#competences', label: 'Compétences' },
                { href: '#projets', label: 'Projets' },
                { href: '#formation', label: 'Formation' },
                { href: '#contact', label: 'Contact' }
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-gray-400 hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-gray-400">
              <p>Antananarivo, Madagascar</p>
              <a
                href="mailto:tsitohaina.berthin@gmail.com"
                className="block hover:text-white transition-colors duration-200"
              >
                tsitohaina.berthin@gmail.com
              </a>
              <a
                href="tel:+261326549445"
                className="block hover:text-white transition-colors duration-200"
              >
                +261 32 65 494 45
              </a>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              <a
                href="mailto:tsitohaina.berthin@gmail.com"
                className="p-2 bg-gray-800 hover:bg-primary-600 rounded-lg transition-colors duration-200"
              >
                <Mail size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/tsitohaina-berthin-ramanankirahina-042aa4252/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 hover:bg-primary-600 rounded-lg transition-colors duration-200"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/01TB"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 hover:bg-primary-600 rounded-lg transition-colors duration-200"
              >
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Tsitohaina Berthin RAMANANKIRAHINA. Tous droits réservés.
            </p>
            <p className="text-gray-400 text-sm mt-4 md:mt-0 flex items-center gap-1">
              Développé avec <Heart size={16} className="text-red-500" /> et Next.js
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer