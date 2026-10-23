import { GraduationCap } from 'lucide-react'
import { sectionIds } from '@/content/site'
import type { Dictionary } from '@/content/types'
import { revealDelay } from '@/lib/reveal'
import SectionHeading from './SectionHeading'

export default function Education({ dict }: { dict: Dictionary }) {
  const t = dict.education

  return (
    <section id={sectionIds.education} aria-labelledby="education-title" className="section">
      <div className="container-max">
        <SectionHeading id="education-title" eyebrow={t.eyebrow} title={t.title} />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {t.items.map((item, index) => (
            <div key={item.degree} data-reveal style={revealDelay(index)}>
              <article className="card h-full p-6">
                <div className="flex items-center justify-between gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-50 text-primary-600 dark:bg-primary-500/10 dark:text-primary-300">
                    <GraduationCap className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="text-sm font-medium text-slate-500 dark:text-slate-400">{item.period}</span>
                </div>
                <h3 className="mt-5 text-lg font-semibold leading-snug">{item.degree}</h3>
                <p className="mt-2 font-medium text-primary-700 dark:text-primary-300">{item.school}</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">{item.location}</p>
                <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{item.detail}</p>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
