'use client'

import { motion } from 'framer-motion'
import { Download, Github, Linkedin, Mail } from 'lucide-react'
import Image from 'next/image'

const Hero = () => {
  return (
    <section id="accueil" className="min-h-screen flex items-center bg-gradient-to-br from-primary-50 to-white">
      <div className="container-max section-padding py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900">
                Tsitohaina Berthin
                <span className="block text-primary-600">RAMANANKIRAHINA</span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600 font-medium">
                Étudiant développeur en informatique
              </p>
              <p className="text-lg text-gray-500">
                IT University Madagascar
              </p>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed max-w-2xl">
              Passionné par le développement web et logiciel, je construis des projets en 
              Python, Java et JavaScript pour apprendre et innover.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/cv.pdf" download className="btn-primary">
                <Download size={20} />
                Télécharger mon CV
              </a>
              <a href="#contact" className="btn-secondary">
                Me contacter
              </a>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 pt-4">
              <a
                href="mailto:tsitohaina.berthin@gmail.com"
                className="p-3 bg-gray-100 hover:bg-primary-100 rounded-full transition-colors duration-200"
              >
                <Mail size={20} className="text-gray-600 hover:text-primary-600" />
              </a>
              <a
                href="https://www.linkedin.com/in/tsitohaina-berthin-ramanankirahina-042aa4252/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 hover:bg-primary-100 rounded-full transition-colors duration-200"
              >
                <Linkedin size={20} className="text-gray-600 hover:text-primary-600" />
              </a>
              <a
                href="https://github.com/01TB"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 hover:bg-primary-100 rounded-full transition-colors duration-200"
              >
                <Github size={20} className="text-gray-600 hover:text-primary-600" />
              </a>
            </div>
          </motion.div>

          {/* Profile Image - Optimisé pour l'image fournie */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-80 h-96 lg:w-96 lg:h-[28rem]">
              {/* Background gradient avec forme plus adaptée au portrait */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-primary-600 rounded-3xl shadow-2xl transform rotate-3"></div>
              
              {/* Cadre pour l'image */}
              <div className="absolute inset-4 rounded-2xl overflow-hidden border-4 border-white shadow-lg bg-white">
                <Image
                  src="/images/profile.jpg"
                  alt="Tsitohaina Berthin RAMANANKIRAHINA"
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 768px) 320px, 384px"
                  onError={(e) => {
                    // Fallback en cas d'erreur de chargement
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.classList.add('bg-gradient-to-br', 'from-gray-100', 'to-gray-200', 'flex', 'items-center', 'justify-center');
                      parent.innerHTML = '<div class="text-center"><div class="text-4xl font-bold text-gray-400 mb-2">TB</div><div class="text-gray-500 text-sm">Photo de profil</div></div>';
                    }
                  }}
                />
              </div>
              
              {/* Éléments décoratifs repositionnés */}
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary-500 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-primary-300 rounded-full opacity-60 animate-pulse delay-700"></div>
              <div className="absolute top-1/2 -right-4 w-4 h-4 bg-primary-400 rounded-full opacity-80"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero