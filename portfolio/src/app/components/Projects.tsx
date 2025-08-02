'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import Image from 'next/image'

const Projects = () => {
  const projects = [
    {
      title: 'Sotrobe - Plateforme de livraison',
      description: 'Plateforme de livraison de repas pour entreprises et particuliers avec gestion des commandes en temps réel et interface utilisateur moderne.',
      technologies: ['React', 'NestJS', 'PostgreSQL', 'TypeScript'],
      image: '/images/projects/sotrobe.png',
      category: 'Web Application',
      features: ['Gestion des commandes', 'Interface moderne', 'Temps réel']
    },
    {
      title: 'Système de gestion financière',
      description: 'Application complète pour gérer les finances d\'entreprise avec différents départements, dashboard interactif et reporting avancé.',
      technologies: ['Django', 'PostgreSQL', 'Python', 'Bootstrap'],
      image: '/images/projects/budget-system.png',
      category: 'Enterprise Software',
      features: ['Multi-départements', 'Dashboard', 'Reporting']
    },
    {
      title: 'Marketplace d\'animaux de ferme',
      description: 'Plateforme e-commerce spécialisée dans la vente d\'animaux de ferme avec système de gestion des stocks et interface responsive.',
      technologies: ['PHP', 'PostgreSQL', 'JavaScript', 'CSS'],
      image: '/images/projects/farm-marketplace.png',
      category: 'E-commerce',
      features: ['Gestion des stocks', 'E-commerce', 'Responsive']
    },
    {
      title: 'Gestionnaire de tournoi',
      description: 'Application desktop pour organiser et gérer des tournois sportifs avec système d\'élimination et interface graphique intuitive.',
      technologies: ['C++', 'Qt', 'SQLite'],
      image: '/images/projects/tournament.png',
      category: 'Desktop Application',
      features: ['Système d\'élimination', 'Interface Qt', 'Gestion tournois']
    },
    {
      title: 'Tableau de bord automobile',
      description: 'Interface de monitoring en temps réel pour véhicules avec visualisation de données, jauges numériques et alertes automatiques.',
      technologies: ['C++', 'PostgreSQL', 'Qt'],
      image: '/images/projects/dashboard.png',
      category: 'Data Visualization',
      features: ['Temps réel', 'Jauges numériques', 'Monitoring']
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
              className="card group hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-primary-100 to-primary-200 rounded-lg mb-4 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    // Fallback en cas d'erreur de chargement
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = `
                        <div class="absolute inset-0 flex flex-col items-center justify-center text-primary-600">
                          <div class="text-2xl font-bold mb-2">${project.category}</div>
                          <div class="text-sm opacity-75">${project.title}</div>
                        </div>
                      `;
                    }
                  }}
                />
                
                {/* Overlay with category */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ExternalLink className="w-8 h-8 text-white bg-primary-600 p-2 rounded-full" />
                  </div>
                </div>
                
                {/* Category badge */}
                <div className="absolute top-3 left-3 bg-white bg-opacity-90 px-2 py-1 rounded-full">
                  <span className="text-xs font-medium text-primary-600">{project.category}</span>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary-600 transition-colors duration-200 line-clamp-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>
                
                {/* Features */}
                <div className="flex flex-wrap gap-1 text-xs">
                  {project.features.map((feature, idx) => (
                    <span key={idx} className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                      {feature}
                    </span>
                  ))}
                </div>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 pt-2">
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

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-6">
            Vous souhaitez voir plus de détails sur mes projets ?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/01TB"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <Github size={20} />
              Voir sur GitHub
            </a>
            <a href="#contact" className="btn-secondary">
              Me contacter
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects