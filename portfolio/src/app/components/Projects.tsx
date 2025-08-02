'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import Image from 'next/image'

const Projects = () => {
  const projects = [
    {
      title: 'Sotrobe - Plateforme de livraison',
      description: 'Plateforme de livraison de repas pour entreprises et particuliers avec gestion des commandes en temps réel.',
      technologies: ['React', 'NestJS', 'PostgreSQL', 'TypeScript'],
      image: '/images/projects/sotrobe.jpg',
      category: 'Web Application'
    },
    {
      title: 'Système de gestion financière',
      description: 'Application complète pour gérer les finances d\'entreprise avec différents départements et reporting avancé.',
      technologies: ['Django', 'PostgreSQL', 'Python', 'Bootstrap'],
      image: '/images/projects/budget-system.jpg',
      category: 'Enterprise Software'
    },
    {
      title: 'Marketplace d\'animaux de ferme',
      description: 'Plateforme e-commerce spécialisée dans la vente d\'animaux de ferme avec système de gestion des stocks.',
      technologies: ['PHP', 'PostgreSQL', 'JavaScript', 'CSS'],
      image: '/images/projects/farm-marketplace.jpg',
      category: 'E-commerce'
    },
    {
      title: 'Gestionnaire de tournoi',
      description: 'Application desktop pour organiser et gérer des tournois sportifs avec système d\'élimination.',
      technologies: ['C++', 'Qt', 'SQLite'],
      image: '/images/projects/tournament.jpg',
      category: 'Desktop Application'
    },
    {
      title: 'Tableau de bord numérique',
      description: 'Interface de monitoring en temps réel avec visualisation de données et alertes automatiques.',
      technologies: ['C++', 'PostgreSQL', 'Qt'],
      image: '/images/projects/dashboard.jpg',
      category: 'Data Visualization'
    }
  ]

  return (
    <section id="projets" className="py-20 bg-white">
      <div className="container-max section-padding">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Mes Projets
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez mes réalisations en développement web et logiciel
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card group hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-48 bg-gradient-to-br from-primary-100 to-primary-200 rounded-lg mb-4 overflow-hidden">
                {/* Placeholder for project image */}
                <div className="absolute inset-0 flex items-center justify-center text-primary-600 font-medium">
                  {project.category}
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ExternalLink className="w-5 h-5 text-white bg-primary-600 p-1 rounded" />
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary-600 transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects