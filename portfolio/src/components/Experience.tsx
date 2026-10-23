import { Calendar, MapPin } from 'lucide-react'
import { sectionIds } from '@/content/site'
import type { Dictionary } from '@/content/types'
import SectionHeading from './SectionHeading'

export default function Experience({ dict }: { dict: Dictionary }) {
  const t = dict.experience

  return (
    <section id={sectionIds.experience} aria-labelledby="experience-title" className="section">
      <div className="container-max">
        <SectionHeading id="experience-title" eyebrow={t.eyebrow} title={t.title} intro={t.intro} />

        <ol className="relative mt-12 space-y-8 border-l-2 border-slate-200 pl-6 dark:border-slate-800 sm:ml-3 sm:pl-10">
          {t.items.map((item) => (
            <li key={`${item.company}-${item.period}`} data-reveal className="relative">
              <span
                aria-hidden="true"
                className={`absolute -left-[33px] top-7 h-4 w-4 rounded-full border-4 border-white dark:border-slate-950 sm:-left-[49px] ${
                  item.current ? 'bg-primary-600 ring-4 ring-primary-500/20 dark:bg-primary-400' : 'bg-slate-300 dark:bg-slate-600'
                }`}
              />
              <article className="card p-6 sm:p-7">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold">{item.role}</h3>
                    <p className="mt-1 font-medium text-primary-700 dark:text-primary-300">{item.company}</p>
                  </div>
                  <div className="flex shrink-0 flex-wrap items-center gap-x-4 gap-y-1 text-sm text-slate-500 dark:text-slate-400 sm:flex-col sm:items-end">
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="h-4 w-4" aria-hidden="true" />
                      {item.period}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="h-4 w-4" aria-hidden="true" />
                      {item.location}
                    </span>
                  </div>
                </div>
                {item.current && <p className="chip-accent mt-3">{t.currentLabel}</p>}
                <ul className="mt-4 space-y-2 text-slate-600 dark:text-slate-400">
                  {item.points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-500" />
                      <span className="leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
                {item.stack && (
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {item.stack.map((tech) => (
                      <li key={tech} className="chip">
                        {tech}
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
