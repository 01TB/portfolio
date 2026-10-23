import type { Locale } from '@/content/site'
import { buildJsonLd, dictionaries } from '@/lib/seo'
import About from './About'
import Contact from './Contact'
import Education from './Education'
import Experience from './Experience'
import Footer from './Footer'
import Header from './Header'
import Hero from './Hero'
import Projects from './Projects'
import Services from './Services'
import Skills from './Skills'

// Page unique, rendue dans les deux langues (/ et /en)
export default function Portfolio({ locale }: { locale: Locale }) {
  const dict = dictionaries[locale]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildJsonLd(locale)).replace(/</g, '\\u003c') }}
      />
      <Header dict={dict} />
      <main id="main">
        <Hero dict={dict} />
        <Services dict={dict} />
        <About dict={dict} />
        <Skills dict={dict} />
        <Experience dict={dict} />
        <Projects dict={dict} />
        <Education dict={dict} />
        <Contact dict={dict} />
      </main>
      <Footer dict={dict} />
    </>
  )
}
