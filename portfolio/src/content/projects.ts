// Données communes aux deux langues ; les textes traduits sont dans fr.ts / en.ts
export type ProjectIcon = 'map' | 'film' | 'server' | 'cart' | 'users' | 'search' | 'truck' | 'wallet' | 'store' | 'trophy' | 'gauge'

export type ProjectSlug =
  | 'roadwork'
  | 'cinema'
  | 'glpi'
  | 'newapp'
  | 'hris'
  | 'ats'
  | 'sotrobe'
  | 'budget'
  | 'farm'
  | 'tournament'
  | 'dashboard'

export type ProjectMeta = {
  slug: ProjectSlug
  stack: string[]
  icon: ProjectIcon
  images?: string[]
  link?: string
}

export const featuredProjects: ProjectMeta[] = [
  {
    slug: 'roadwork',
    icon: 'map',
    stack: ['Java', 'Spring Boot', 'PostGIS', 'Angular', 'Ionic Vue', 'Firebase', 'Docker', 'Leaflet'],
    images: [
      '/images/projects/roadwork-1.png',
      '/images/projects/roadwork-2.png',
      '/images/projects/roadwork-3.png',
      '/images/projects/roadwork-4.png',
    ],
  },
  {
    slug: 'cinema',
    icon: 'film',
    stack: ['Java', 'Spring Boot', 'JPA / Hibernate', 'Thymeleaf', 'PostgreSQL'],
    link: 'https://cinema-23ae.onrender.com/absolutecinema',
    images: ['/images/projects/cinema-1.png', '/images/projects/cinema-2.png', '/images/projects/cinema-3.png'],
  },
  {
    slug: 'glpi',
    icon: 'server',
    stack: ['React', 'TypeScript', 'GLPI API', 'Papa Parse'],
  },
  {
    slug: 'newapp',
    icon: 'cart',
    stack: ['React', 'TypeScript', 'PrestaShop', 'PHP', 'MySQL', 'Postman'],
  },
]

export const otherProjects: ProjectMeta[] = [
  {
    slug: 'hris',
    icon: 'users',
    stack: ['Spring Boot', 'Thymeleaf', 'PostgreSQL'],
    images: [
      '/images/projects/human-resources-information-system.png',
      '/images/projects/human-resources-information-system-2.png',
    ],
  },
  {
    slug: 'ats',
    icon: 'search',
    stack: ['Spring Boot', 'Thymeleaf', 'PostgreSQL'],
    images: ['/images/projects/ATS.png', '/images/projects/ATS-2.png', '/images/projects/ATS-3.png'],
  },
  {
    slug: 'sotrobe',
    icon: 'truck',
    stack: ['React', 'NestJS', 'TypeScript', 'PostgreSQL'],
    images: ['/images/projects/sotrobe.png'],
  },
  {
    slug: 'budget',
    icon: 'wallet',
    stack: ['Django', 'Python', 'PostgreSQL', 'Bootstrap'],
    images: ['/images/projects/budget-system.png'],
  },
  {
    slug: 'farm',
    icon: 'store',
    stack: ['PHP', 'JavaScript', 'PostgreSQL'],
    images: ['/images/projects/farm-marketplace.png'],
  },
  {
    slug: 'tournament',
    icon: 'trophy',
    stack: ['C++', 'Qt', 'SQLite'],
    images: ['/images/projects/tournament.png'],
  },
  {
    slug: 'dashboard',
    icon: 'gauge',
    stack: ['C++', 'Qt', 'PostgreSQL'],
    images: ['/images/projects/dashboard.png'],
  },
]
