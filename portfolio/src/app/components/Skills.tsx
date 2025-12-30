'use client'

import { motion } from 'framer-motion'
import { Code, Globe, Database, Wrench } from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Langages',
      skills: ['Python', 'Java', 'JavaScript', 'PHP', 'C', 'C++', 'C#']
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Frameworks',
      skills: ['Django', 'Spring Boot', 'React.js', 'VueJS', 'NestJS', 'Laravel']
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Bases de données',
      skills: ['MySQL', 'PostgreSQL', 'Microsoft Access', 'Oracle', 'MongoDB']
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: 'Outils',
      skills: ['Git & GitHub', 'Docker', 'Design Pattern MVC', 'JetBrains Toolkit', 'Pack Office']
    }
  ]

  return (
    <section id="competences" className="py-20 bg-gray-50">
      <div className="container-max section-padding">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Compétences
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Technologies et outils que je maîtrise pour créer des solutions innovantes
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card text-center"
            >
              <div className="text-primary-600 mb-4 flex justify-center">
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {category.title}
              </h3>
              <div className="space-y-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="skill-badge block">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills