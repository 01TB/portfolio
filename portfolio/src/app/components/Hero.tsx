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

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full"></div>
              {/* Placeholder for profile image */}
              <div className="absolute inset-4 bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-gray-500 text-lg">Photo professionnelle</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero