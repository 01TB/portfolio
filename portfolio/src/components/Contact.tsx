import { Github, Linkedin, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import { person, sectionIds } from '@/content/site'
import type { Dictionary } from '@/content/types'
import ContactForm from './ContactForm'
import SectionHeading from './SectionHeading'

export default function Contact({ dict }: { dict: Dictionary }) {
  const t = dict.contact

  const channels = [
    { icon: Mail, label: t.emailLabel, value: person.email, href: `mailto:${person.email}` },
    { icon: Phone, label: t.phoneLabel, value: person.phone, href: person.phoneHref },
    { icon: MessageCircle, label: t.whatsappLabel, value: person.whatsapp, href: person.whatsappHref, external: true },
    { icon: MapPin, label: t.locationLabel, value: dict.hero.location },
  ]

  return (
    <section id={sectionIds.contact} aria-labelledby="contact-title" className="section relative overflow-hidden bg-slate-50 dark:bg-slate-900/40">
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-32 left-1/2 h-80 w-[40rem] -translate-x-1/2 rounded-full bg-primary-400/20 blur-3xl dark:bg-primary-600/15" />
      <div className="container-max relative grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionHeading id="contact-title" eyebrow={t.eyebrow} title={t.title} intro={t.intro} />

          <ul data-reveal className="mt-10 space-y-5">
            {channels.map(({ icon: Icon, label, value, href, external }) => (
              <li key={label} className="flex items-center gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-primary-600 shadow-sm ring-1 ring-slate-200 dark:bg-slate-900 dark:text-primary-300 dark:ring-slate-800">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <p className="text-sm text-slate-500 dark:text-slate-400">{label}</p>
                  {href ? (
                    <a
                      href={href}
                      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      className="break-words font-medium text-slate-900 hover:text-primary-600 dark:text-white dark:hover:text-primary-300">
                      {value}
                    </a>
                  ) : (
                    <p className="font-medium text-slate-900 dark:text-white">{value}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>

          <div data-reveal className="mt-10">
            <p className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">{t.socialTitle}</p>
            <div className="mt-4 flex gap-3">
              <a href={person.linkedin} target="_blank" rel="noopener noreferrer me" className="btn-secondary !px-5 !py-2.5">
                <Linkedin className="h-4 w-4" aria-hidden="true" />
                LinkedIn
              </a>
              <a href={person.github} target="_blank" rel="noopener noreferrer me" className="btn-secondary !px-5 !py-2.5">
                <Github className="h-4 w-4" aria-hidden="true" />
                GitHub
              </a>
            </div>
          </div>
        </div>

        <div data-reveal className="lg:col-span-7">
          <ContactForm t={t.form} />
        </div>
      </div>
    </section>
  )
}
