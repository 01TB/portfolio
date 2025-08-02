'use client'

import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="apropos" className="py-20 bg-white">
      <div className="container-max section-padding">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
            À propos de moi
          </h2>
          <div className="prose prose-lg mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed">
              Étudiant en 3e année d'informatique à IT University Madagascar, je me spécialise 
              dans le développement web et logiciel. Je maîtrise des technologies comme Django, 
              React, Java, et je m'intéresse particulièrement aux architectures backend robustes 
              et aux bases de données.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mt-6">
              Mon objectif est de participer à des projets concrets pour développer mon expertise 
              et contribuer à des solutions innovantes. Je suis passionné par l'apprentissage 
              continu et l'innovation technologique.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About