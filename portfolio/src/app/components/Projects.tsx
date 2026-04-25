'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

const Projects = () => {
  const projects = [
    {
      title: 'Sotrobe - Plateforme de livraison',
      description: 'Plateforme de livraison de repas pour entreprises et particuliers avec gestion des commandes en temps réel et interface utilisateur moderne.',
      technologies: ['React', 'NestJS', 'PostgreSQL', 'TypeScript'],
      images: [
        '/images/projects/sotrobe.png',
      ],
      category: 'Web Application',
      features: ['Gestion des commandes', 'Interface moderne', 'Temps réel']
    },
    {
      title: 'Système de gestion financière',
      description: 'Application complète pour gérer les finances d\'entreprise avec différents départements, dashboard interactif et reporting avancé.',
      technologies: ['Django', 'PostgreSQL', 'Python', 'Bootstrap'],
      images: [
        '/images/projects/budget-system.png',
      ],
      category: 'Enterprise Software',
      features: ['Multi-départements', 'Dashboard', 'Reporting']
    },
    {
      title: 'Marketplace d\'animaux de ferme',
      description: 'Plateforme e-commerce spécialisée dans la vente d\'animaux de ferme avec système de gestion des stocks et interface responsive.',
      technologies: ['PHP', 'PostgreSQL', 'JavaScript', 'CSS'],
      images: [
        '/images/projects/farm-marketplace.png'
      ],
      category: 'E-commerce',
      features: ['Gestion des stocks', 'E-commerce', 'Responsive']
    },
    {
      title: 'Gestionnaire de tournoi',
      description: 'Application desktop pour organiser et gérer des tournois sportifs avec système d\'élimination et interface graphique intuitive.',
      technologies: ['C++', 'Qt', 'SQLite'],
      images: [
        '/images/projects/tournament.png'
      ],
      category: 'Desktop Application',
      features: ['Système d\'élimination', 'Interface Qt', 'Gestion tournois']
    },
    {
      title: 'Tableau de bord automobile',
      description: 'Interface de monitoring en temps réel pour véhicules avec visualisation de données, jauges numériques et alertes automatiques.',
      technologies: ['C++', 'PostgreSQL', 'Qt'],
      images: [
        '/images/projects/dashboard.png'
      ],
      category: 'Data Visualization',
      features: ['Temps réel', 'Jauges numériques', 'Monitoring']
    },
    {
      title: 'Système de Gestion RH & Paie',
      description: 'Solution de gestion d\'entreprise automatisant le cycle RH, du suivi des temps à l\'édition des bulletins de paie conformes aux normes légales.',
      technologies: ['Springboot', 'Thymeleaf', 'PostgreSQL'],
      images: [
        '/images/projects/human-resources-information-system.png',
        '/images/projects/human-resources-information-system-2.png'
      ],
      category: 'Enterprise Software',
      features: ['Gestion des Congés & Absences', 'Pointage & Présences', 'Reporting RH']
    },
    {
      title: 'ATS - Système de Recrutement Digital',
      description: 'Web Application dédiée à l\'automatisation complète du processus de recrutement, du dépôt de CV jusqu\'à l\'embauche finale.',
      technologies: ['Springboot', 'Thymeleaf', 'PostgreSQL'],
      images: [
        '/images/projects/ATS.png',
        '/images/projects/ATS-2.png',
        '/images/projects/ATS-3.png'
      ],
      category: 'Enterprise Software',
      features: ['Sourcing & Candidature', 'Tri & Filtrage Intelligent', 'Suivi Recruteur', 'Migration Administrative']
    },
    {
      title: 'Absolute Cinema - Système de Gestion de Cinéma',
      description: 'Web Application dédiée à la gestion des films, des séances, des réservations et jusqu\'aux finances dans un cinéma.',
      technologies: ['Springboot', 'Thymeleaf', 'PostgreSQL'],
      link: "https://cinema-23ae.onrender.com/absolutecinema",
      images: [
        '/images/projects/cinema-1.png',
        '/images/projects/cinema-2.png',
        '/images/projects/cinema-3.png'
      ],
      category: 'Enterprise Software',
      features: ['Gestion des Films & Séances', 'Dashboard des recettes en pubs, séances & produits', 'Système d\'abonnement']
    },
    {
      title: 'RoadWork - Système de signalement routier',
      description: 'Solution Cloud permettant le signalement citoyen des dégradations routières et leur suivi en temps réel par les autorités compétentes[cite: 188].',
      technologies: ['VueJS', 'Firebase', 'Docker', 'OpenStreetMap'],
      images: [
        '/images/projects/roadwork-1.png',
        '/images/projects/roadwork-2.png',
        '/images/projects/roadwork-3.png',
        '/images/projects/roadwork-4.png'
      ],
      category: 'Cloud & Mobile Application',
      features: [
        'Signalement géolocalisé avec photos [cite: 251]',
        'Carte interactive des incidents (Leaflet) [cite: 167, 185]',
        'Tableau de bord manager avec statistiques [cite: 253]',
        'Notifications en temps réel [cite: 239]'
      ]
    }
  ]

  // State pour gérer l'index de l'image actuelle pour chaque projet
  const [currentImageIndices, setCurrentImageIndices] = useState<{[key: number]: number}>(
    projects.reduce((acc, _, index) => ({ ...acc, [index]: 0 }), {})
  )

  const handlePrevImage = (projectIndex: number, e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setCurrentImageIndices(prev => ({
      ...prev,
      [projectIndex]: prev[projectIndex] === 0 
        ? projects[projectIndex].images.length - 1 
        : prev[projectIndex] - 1
    }))
  }

  const handleNextImage = (projectIndex: number, e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setCurrentImageIndices(prev => ({
      ...prev,
      [projectIndex]: (prev[projectIndex] + 1) % projects[projectIndex].images.length
    }))
  }

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
          {projects.map((project, index) => {
            const currentImageIndex = currentImageIndices[index] || 0
            const hasMultipleImages = project.images.length > 1

            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card group hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                {/* Project Image avec Carousel */}
                <div className="relative h-48 bg-gradient-to-br from-primary-100 to-primary-200 rounded-lg mb-4 overflow-hidden">
                  <Image
                    src={project.images[currentImageIndex]}
                    alt={`${project.title} - Image ${currentImageIndex + 1}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
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
                  
                  {/* Navigation du carousel - visible seulement s'il y a plusieurs images */}
                  {hasMultipleImages && (
                    <>
                      <button
                        onClick={(e) => handlePrevImage(index, e)}
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-1.5 rounded-full shadow-lg transition-all duration-200 opacity-0 group-hover:opacity-100 z-10"
                        aria-label="Image précédente"
                      >
                        <ChevronLeft className="w-4 h-4 text-gray-800" />
                      </button>
                      <button
                        onClick={(e) => handleNextImage(index, e)}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-1.5 rounded-full shadow-lg transition-all duration-200 opacity-0 group-hover:opacity-100 z-10"
                        aria-label="Image suivante"
                      >
                        <ChevronRight className="w-4 h-4 text-gray-800" />
                      </button>
                      
                      {/* Indicateurs de position */}
                      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                        {project.images.map((_, imgIndex) => (
                          <button
                            key={imgIndex}
                            onClick={(e) => {
                              e.preventDefault()
                              e.stopPropagation()
                              setCurrentImageIndices(prev => ({
                                ...prev,
                                [index]: imgIndex
                              }))
                            }}
                            className={`w-2 h-2 rounded-full transition-all duration-200 ${
                              imgIndex === currentImageIndex
                                ? 'bg-white w-6'
                                : 'bg-white/50 hover:bg-white/75'
                            }`}
                            aria-label={`Aller à l'image ${imgIndex + 1}`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                  
                  {/* Overlay with external link icon */}
                  <a
                  href={project.link || undefined}
                  target={project.link ? '_blank' : undefined}
                  rel={project.link ? 'noopener noreferrer' : undefined}
                  className={project.link ? 'cursor-pointer' : 'cursor-default pointer-events-none'}
                  >
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <ExternalLink className="w-8 h-8 text-white bg-primary-600 p-2 rounded-full" />
                      </div>
                    </div>
                  </a>
                  {/* Category badge */}
                  <div className="absolute top-3 left-3 bg-white bg-opacity-90 px-2 py-1 rounded-full z-10">
                    <span className="text-xs font-medium text-primary-600">{project.category}</span>
                  </div>
                  
                  {/* Image counter - visible seulement s'il y a plusieurs images */}
                  {hasMultipleImages && (
                    <div className="absolute top-3 right-3 bg-black/70 text-white px-2 py-1 rounded-full z-10">
                      <span className="text-xs font-medium">
                        {currentImageIndex + 1}/{project.images.length}
                      </span>
                    </div>
                  )}
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
            )
          })}
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