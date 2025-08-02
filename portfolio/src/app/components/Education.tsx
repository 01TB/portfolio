'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Calendar } from 'lucide-react'

const Education = () => {
  const educationData = [
    {
      degree: 'Licence en Informatique',
      school: 'IT University',
      location: 'Antananarivo, Madagascar',
      period: '2023 – 2026',
      description: 'Formation spécialisée en développement web et logiciel, bases de données et architectures système.',
      status: 'En cours'
    },
    {
      degree: 'Ingénierie automobile',
      school: 'ESTACA',
      location: 'Montigny-le-Bretonneux, France',
      period: '2022 – 2023',
      description: 'Classe préparatoire intégrée avec spécialisation dans le secteur automobile.',
      status: 'Réorienté'
    },
    {
      degree: 'Baccalauréat Général',
      school: 'Lycée Français de Tananarive',
      location: 'Antananarivo, Madagascar',
      period: '2020 – 2021',
      description: 'Mention Bien - Spécialités Mathématiques et Physique-Chimie, Option Mathématiques Expertes.',
      status: 'Obtenu'
    },
    {
      degree: 'Diplôme National du Brevet (DNB)',
      school: 'Lycée Français de Tananarive',
      location: 'Antananarivo, Madagascar',
      period: '2018',
      description: 'Mention Très Bien',
      status: 'Obtenu'
    }
  ]

  return (
    <section id="formation" className="py-20 bg-gray-50">
      <div className="container-max section-padding">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Formation
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Mon parcours académique et les compétences acquises
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary-200"></div>

            {educationData.map((item, index) => (
              <motion.div
                key={item.degree}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative mb-12 ml-16"
              >
                {/* Timeline dot */}
                <div className="absolute -left-12 top-6 w-6 h-6 bg-primary-600 rounded-full border-4 border-white shadow-sm"></div>

                <div className="card">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-1">
                        {item.degree}
                      </h3>
                      <p className="text-primary-600 font-medium">
                        {item.school}
                      </p>
                      <p className="text-gray-500 text-sm">
                        {item.location}
                      </p>
                    </div>
                    <div className="flex items-center gap-4 mt-2 lg:mt-0">
                      <div className="flex items-center gap-1 text-gray-500">
                        <Calendar size={16} />
                        <span className="text-sm">{item.period}</span>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        item.status === 'En cours' 
                          ? 'bg-green-100 text-green-800'
                          : item.status === 'Obtenu'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        {item.status}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education