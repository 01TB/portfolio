import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react'
import { person, sectionIds } from '@/content/site'
import type { Dictionary } from '@/content/types'

export default function Footer({ dict }: { dict: Dictionary }) {
  const t = dict.footer
  const links = [
    { id: sectionIds.services, label: dict.nav.services },
    { id: sectionIds.about, label: dict.nav.about },
    { id: sectionIds.skills, label: dict.nav.skills },
    { id: sectionIds.experience, label: dict.nav.experience },
    { id: sectionIds.projects, label: dict.nav.projects },
    { id: sectionIds.education, label: dict.nav.education },
    { id: sectionIds.contact, label: dict.nav.contact },
  ]

  return (
    <footer className="border-t border-slate-200 bg-white py-14 dark:border-slate-800 dark:bg-slate-950">
      <div className="container-max">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-display text-2xl font-bold text-slate-900 dark:text-white">
              TB<span className="text-primary-600 dark:text-primary-400">.</span>R
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-slate-600 dark:text-slate-400">{t.tagline}</p>
          </div>

          <nav aria-label={t.navTitle}>
            <p className="text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-white">{t.navTitle}</p>
            <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
              {links.map((link) => (
                <li key={link.id}>
                  <a href={`#${link.id}`} className="text-slate-600 hover:text-primary-600 dark:text-slate-400 dark:hover:text-primary-300">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-white">{t.contactTitle}</p>
            <address className="mt-4 space-y-2 text-sm not-italic text-slate-600 dark:text-slate-400">
              <a href={`mailto:${person.email}`} className="block hover:text-primary-600 dark:hover:text-primary-300">
                {person.email}
              </a>
              <a href={person.phoneHref} className="block hover:text-primary-600 dark:hover:text-primary-300">
                {person.phone}
              </a>
              <p>{dict.hero.location}</p>
            </address>
            <div className="mt-5 flex gap-2">
              <a href={`mailto:${person.email}`} className="icon-btn" aria-label={person.email}>
                <Mail className="h-4 w-4" aria-hidden="true" />
              </a>
              <a href={person.linkedin} target="_blank" rel="noopener noreferrer me" className="icon-btn" aria-label="LinkedIn">
                <Linkedin className="h-4 w-4" aria-hidden="true" />
              </a>
              <a href={person.github} target="_blank" rel="noopener noreferrer me" className="icon-btn" aria-label="GitHub">
                <Github className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-8 text-sm text-slate-500 dark:border-slate-800 dark:text-slate-400 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {person.name}. {t.rights}
          </p>
          <div className="flex items-center gap-4">
            <p>{t.builtWith}</p>
            <a href="#top" className="icon-btn h-9 w-9" aria-label={t.backToTop} title={t.backToTop}>
              <ArrowUp className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
