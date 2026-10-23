import { Globe, LayoutDashboard, Plug, Smartphone } from 'lucide-react'
import { sectionIds } from '@/content/site'
import type { Dictionary, ServiceIcon } from '@/content/types'
import { revealDelay } from '@/lib/reveal'
import SectionHeading from './SectionHeading'

const icons: Record<ServiceIcon, typeof Globe> = {
  web: Globe,
  mobile: Smartphone,
  api: Plug,
  dashboard: LayoutDashboard,
}

export default function Services({ dict }: { dict: Dictionary }) {
  const t = dict.services

  return (
    <section id={sectionIds.services} aria-labelledby="services-title" className="section bg-slate-50 dark:bg-slate-900/40">
      <div className="container-max">
        <SectionHeading id="services-title" eyebrow={t.eyebrow} title={t.title} intro={t.intro} />

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {t.items.map((item, index) => {
            const Icon = icons[item.icon]
            return (
              <div key={item.title} data-reveal style={revealDelay(index)}>
                <article className="card card-hover h-full p-7">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 text-white shadow-lg shadow-primary-500/20">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold">{item.title}</h3>
                  <p className="mt-3 leading-relaxed text-slate-600 dark:text-slate-400">{item.description}</p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <li key={tag} className="chip">
                        {tag}
                      </li>
                    ))}
                  </ul>
                </article>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
