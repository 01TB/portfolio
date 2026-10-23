import { CheckCircle2, Gauge, MessagesSquare, ShieldCheck } from 'lucide-react'
import { sectionIds } from '@/content/site'
import type { Dictionary, HighlightIcon } from '@/content/types'
import SectionHeading from './SectionHeading'

const icons: Record<HighlightIcon, typeof ShieldCheck> = {
  shield: ShieldCheck,
  gauge: Gauge,
  check: CheckCircle2,
  message: MessagesSquare,
}

export default function About({ dict }: { dict: Dictionary }) {
  const t = dict.about

  return (
    <section id={sectionIds.about} aria-labelledby="about-title" className="section">
      <div className="container-max grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <SectionHeading id="about-title" eyebrow={t.eyebrow} title={t.title} />
          <div data-reveal className="mt-8 space-y-5 text-lg leading-relaxed text-slate-600 dark:text-slate-400">
            {t.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </div>

          <div data-reveal className="mt-10 grid gap-6 sm:grid-cols-3">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">{t.languagesTitle}</h3>
              <ul className="mt-3 space-y-1.5">
                {t.languages.map((language) => (
                  <li key={language.name} className="text-slate-800 dark:text-slate-200">
                    <span className="font-medium">{language.name}</span>
                    <span className="text-slate-500 dark:text-slate-400"> · {language.level}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="sm:col-span-2">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">{t.softSkillsTitle}</h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {t.softSkills.map((skill) => (
                  <li key={skill} className="chip">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
            <div className="sm:col-span-3">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">{t.interestsTitle}</h3>
              <p className="mt-3 text-slate-700 dark:text-slate-300">{t.interests.join(' · ')}</p>
            </div>
          </div>
        </div>

        <aside data-reveal className="lg:col-span-5" aria-labelledby="highlights-title">
          <div className="card relative overflow-hidden p-7 lg:sticky lg:top-24">
            <div aria-hidden="true" className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary-400/20 blur-2xl" />
            <h3 id="highlights-title" className="text-xl font-semibold">
              {t.highlightsTitle}
            </h3>
            <ul className="mt-6 space-y-5">
              {t.highlights.map((item) => {
                const Icon = icons[item.icon]
                return (
                  <li key={item.title} className="flex gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-600 dark:bg-primary-500/10 dark:text-primary-300">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="font-semibold text-slate-900 dark:text-white">{item.title}</p>
                      <p className="mt-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{item.text}</p>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </aside>
      </div>
    </section>
  )
}
