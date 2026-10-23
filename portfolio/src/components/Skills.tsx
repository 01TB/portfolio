import { sectionIds } from '@/content/site'
import type { Dictionary } from '@/content/types'
import { revealDelay } from '@/lib/reveal'
import SectionHeading from './SectionHeading'

export default function Skills({ dict }: { dict: Dictionary }) {
  const t = dict.skills

  return (
    <section id={sectionIds.skills} aria-labelledby="skills-title" className="section bg-slate-50 dark:bg-slate-900/40">
      <div className="container-max">
        <SectionHeading id="skills-title" eyebrow={t.eyebrow} title={t.title} intro={t.intro} />

        <div data-reveal className="mt-10 flex flex-wrap items-center gap-3">
          <span className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">{t.coreTitle}</span>
          <ul className="flex flex-wrap gap-2">
            {t.core.map((skill) => (
              <li
                key={skill}
                className="rounded-full bg-gradient-to-r from-primary-600 to-accent-500 px-4 py-1.5 text-sm font-semibold text-white shadow-md shadow-primary-500/20"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.groups.map((group, index) => (
            <div key={group.title} data-reveal style={revealDelay(index, 60)}>
              <div className="card card-hover h-full p-6">
                <h3 className="text-lg font-semibold">{group.title}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li key={item} className={t.core.includes(item) ? 'chip-accent' : 'chip'}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
