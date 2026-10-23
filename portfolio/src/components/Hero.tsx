import Image from 'next/image'
import { ArrowRight, Briefcase, Download, Github, Linkedin, Mail, MapPin, MessageCircle } from 'lucide-react'
import { person, sectionIds } from '@/content/site'
import type { Dictionary } from '@/content/types'

export default function Hero({ dict }: { dict: Dictionary }) {
  const t = dict.hero

  return (
    <section id="top" className="relative overflow-hidden pb-20 pt-28 sm:pt-36 lg:pb-28">
      {/* Décor de fond */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-primary-400/25 blur-3xl dark:bg-primary-600/20" />
        <div className="absolute -right-24 top-40 h-80 w-80 rounded-full bg-accent-300/30 blur-3xl dark:bg-accent-500/10" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(100,116,139,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(100,116,139,0.08)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />
      </div>

      <div className="container-max grid items-center gap-14 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75 motion-reduce:hidden" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            {t.availability}
          </p>

          <h1 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            <span className="block">{person.givenName}</span>
            <span className="block">{person.familyName}</span>
            <span className="sr-only"> – </span>
            <span className="gradient-text mt-3 block text-2xl sm:text-3xl lg:text-4xl">{t.role}</span>
          </h1>

          <p className="mt-4 text-lg font-medium text-slate-800 dark:text-slate-200 sm:text-xl">{t.specialty}</p>

          <p className="mt-5 inline-flex flex-wrap items-center gap-x-2 gap-y-1 rounded-2xl border border-slate-200 bg-white/70 px-4 py-2.5 text-sm text-slate-700 backdrop-blur dark:border-slate-800 dark:bg-slate-900/60 dark:text-slate-300">
            <Briefcase className="h-4 w-4 shrink-0 text-primary-600 dark:text-primary-400" aria-hidden="true" />
            <span>
              {t.currentPrefix} {t.currentRole} {t.currentAt}{' '}
              <strong className="font-semibold text-slate-900 dark:text-white">{t.currentCompany}</strong>
            </span>
          </p>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-400">{t.pitch}</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={`#${sectionIds.projects}`} className="btn-primary">
              {t.ctaProjects}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a href={person.cv[dict.locale]} download className="btn-secondary">
              <Download className="h-4 w-4" aria-hidden="true" />
              {t.ctaCv}
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
            <div className="flex gap-2">
              <a href={person.linkedin} target="_blank" rel="noopener noreferrer me" className="icon-btn" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" aria-hidden="true" />
              </a>
              <a href={person.github} target="_blank" rel="noopener noreferrer me" className="icon-btn" aria-label="GitHub">
                <Github className="h-5 w-5" aria-hidden="true" />
              </a>
              <a href={person.whatsappHref} target="_blank" rel="noopener noreferrer" className="icon-btn" aria-label="WhatsApp">
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
              </a>
              <a href={`mailto:${person.email}`} className="icon-btn" aria-label={person.email}>
                <Mail className="h-5 w-5" aria-hidden="true" />
              </a>
            </div>
            <p className="flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400">
              <MapPin className="h-4 w-4" aria-hidden="true" />
              {t.location}
            </p>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm lg:col-span-5 lg:max-w-none">
          <div className="relative aspect-[4/5] w-full">
            <div aria-hidden="true" className="absolute inset-0 translate-x-4 translate-y-4 rounded-[2rem] bg-gradient-to-br from-primary-500 to-accent-400 opacity-90" />
            <div className="absolute inset-0 overflow-hidden rounded-[2rem] border-4 border-white bg-slate-100 shadow-2xl dark:border-slate-900 dark:bg-slate-800">
              <Image
                src={person.photo}
                alt={t.photoAlt}
                fill
                priority
                sizes="(max-width: 1024px) 384px, 460px"
                className="object-cover object-top"
              />
            </div>
            <div className="absolute -left-4 top-10 animate-float flex items-center rounded-2xl border border-slate-200 bg-white/95 px-4 py-2 text-sm font-semibold text-slate-800 shadow-lg dark:border-slate-700 dark:bg-slate-900/95 dark:text-slate-100 sm:-left-8">
              <span aria-hidden="true" className="mr-2 inline-block h-2.5 w-2.5 rounded-full bg-orange-500" />
              Java · Spring Boot
            </div>
            <div className="absolute -right-3 bottom-12 animate-float flex items-center rounded-2xl border border-slate-200 bg-white/95 px-4 py-2 text-sm font-semibold text-slate-800 shadow-lg [animation-delay:1.5s] dark:border-slate-700 dark:bg-slate-900/95 dark:text-slate-100 sm:-right-6">
              <span aria-hidden="true" className="mr-2 inline-block h-2.5 w-2.5 rounded-full bg-accent-400" />
              React · TypeScript
            </div>
          </div>
        </div>
      </div>

      <div className="container-max mt-16">
        <dl className="grid gap-4 sm:grid-cols-3">
          {t.stats.map((stat) => (
            <div key={stat.label} className="card flex flex-col px-6 py-5">
              <dt className="text-sm text-slate-500 dark:text-slate-400">{stat.label}</dt>
              <dd className="order-first font-display text-2xl font-bold text-slate-900 dark:text-white">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
