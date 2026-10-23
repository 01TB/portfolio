import {
  ArrowUpRight,
  Film,
  Gauge,
  Github,
  Map as MapIcon,
  Search,
  Server,
  ShoppingCart,
  Store,
  Trophy,
  Truck,
  Users,
  Wallet,
} from 'lucide-react'
import { featuredProjects, otherProjects, type ProjectIcon, type ProjectMeta } from '@/content/projects'
import { person, sectionIds } from '@/content/site'
import type { Dictionary } from '@/content/types'
import { revealDelay } from '@/lib/reveal'
import ProjectGallery from './ProjectGallery'
import SectionHeading from './SectionHeading'

const icons: Record<ProjectIcon, typeof MapIcon> = {
  map: MapIcon,
  film: Film,
  server: Server,
  cart: ShoppingCart,
  users: Users,
  search: Search,
  truck: Truck,
  wallet: Wallet,
  store: Store,
  trophy: Trophy,
  gauge: Gauge,
}

function ProjectVisual({ project, dict, sizes }: { project: ProjectMeta; dict: Dictionary; sizes: string }) {
  const text = dict.projects.items[project.slug]

  if (project.images?.length) {
    return (
      <ProjectGallery
        images={project.images}
        alt={`${text.title} – ${dict.projects.screenshot}`}
        sizes={sizes}
        labels={{ previous: dict.projects.previous, next: dict.projects.next, goTo: dict.projects.goTo }}
      />
    )
  }

  // Projet sans capture d'écran : visuel illustratif à partir de l'icône et de la stack
  const Icon = icons[project.icon]
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-accent-600">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:32px_32px]"
      />
      <div className="relative flex flex-col items-center gap-4 px-6 text-center text-white">
        <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 ring-1 ring-white/30 backdrop-blur">
          <Icon className="h-8 w-8" aria-hidden="true" />
        </span>
        <p className="font-mono text-sm text-white/80">{project.stack.slice(0, 3).join(' · ')}</p>
      </div>
    </div>
  )
}

function StackList({ stack }: { stack: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {stack.map((tech) => (
        <li key={tech} className="chip">
          {tech}
        </li>
      ))}
    </ul>
  )
}

export default function Projects({ dict }: { dict: Dictionary }) {
  const t = dict.projects

  return (
    <section id={sectionIds.projects} aria-labelledby="projects-title" className="section bg-slate-50 dark:bg-slate-900/40">
      <div className="container-max">
        <SectionHeading id="projects-title" eyebrow={t.eyebrow} title={t.title} intro={t.intro} />

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {featuredProjects.map((project, index) => {
            const text = t.items[project.slug]
            return (
              <div key={project.slug} data-reveal style={revealDelay(index % 2, 100)}>
                <article className="card card-hover flex h-full flex-col overflow-hidden">
                  <div className="relative aspect-[16/9] overflow-hidden border-b border-slate-200 bg-slate-100 dark:border-slate-800 dark:bg-slate-800">
                    <ProjectVisual project={project} dict={dict} sizes="(max-width: 1024px) 100vw, 560px" />
                    <span className="absolute left-3 top-3 z-10 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-primary-700 shadow-sm backdrop-blur dark:bg-slate-900/90 dark:text-primary-300">
                      {text.category}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6 sm:p-7">
                    <h3 className="text-xl font-semibold leading-snug sm:text-2xl">{text.title}</h3>
                    <p className="mt-3 leading-relaxed text-slate-600 dark:text-slate-400">{text.summary}</p>
                    <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-400">
                      {text.highlights.map((highlight) => (
                        <li key={highlight} className="flex gap-3">
                          <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-auto pt-6">
                      <StackList stack={project.stack} />
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-700 hover:underline dark:text-primary-300"
                        >
                          {t.live}
                          <span className="sr-only"> – {text.title}</span>
                          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              </div>
            )
          })}
        </div>

        <div data-reveal className="mt-20">
          <h3 className="text-2xl font-bold">{t.othersTitle}</h3>
          <p className="mt-2 text-slate-600 dark:text-slate-400">{t.othersIntro}</p>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {otherProjects.map((project, index) => {
            const text = t.items[project.slug]
            return (
              <div key={project.slug} data-reveal style={revealDelay(index % 3, 80)}>
                <article className="card card-hover flex h-full flex-col overflow-hidden">
                  <div className="relative aspect-[16/10] overflow-hidden border-b border-slate-200 bg-slate-100 dark:border-slate-800 dark:bg-slate-800">
                    <ProjectVisual project={project} dict={dict} sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 360px" />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <p className="text-xs font-semibold uppercase tracking-wider text-primary-700 dark:text-primary-300">{text.category}</p>
                    <h4 className="mt-2 font-display text-lg font-semibold leading-snug text-slate-900 dark:text-white">{text.title}</h4>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{text.summary}</p>
                    <div className="mt-auto pt-4">
                      <StackList stack={project.stack} />
                    </div>
                  </div>
                </article>
              </div>
            )
          })}
        </div>

        <div data-reveal className="mt-14 flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-center">
          <p className="text-slate-600 dark:text-slate-400">{t.ctaText}</p>
          <a href={person.github} target="_blank" rel="noopener noreferrer" className="btn-secondary">
            <Github className="h-4 w-4" aria-hidden="true" />
            {t.ctaGithub}
          </a>
        </div>
      </div>
    </section>
  )
}
