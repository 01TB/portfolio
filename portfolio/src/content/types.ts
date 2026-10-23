import type { ProjectSlug } from './projects'
import type { Locale } from './site'

export type ServiceIcon = 'web' | 'mobile' | 'api' | 'dashboard'
export type HighlightIcon = 'shield' | 'gauge' | 'check' | 'message'

export type ProjectText = {
  title: string
  category: string
  summary: string
  highlights: string[]
}

export type Dictionary = {
  locale: Locale
  meta: {
    title: string
    description: string
    keywords: string[]
    ogAlt: string
    ogTagline: string
  }
  nav: {
    services: string
    about: string
    skills: string
    experience: string
    projects: string
    education: string
    contact: string
    cv: string
    openMenu: string
    closeMenu: string
    mainNav: string
    skipToContent: string
    switchLang: string
    switchLangLabel: string
    toggleTheme: string
    home: string
  }
  hero: {
    availability: string
    role: string
    specialty: string
    currentPrefix: string
    currentRole: string
    currentAt: string
    currentCompany: string
    pitch: string
    ctaProjects: string
    ctaCv: string
    ctaContact: string
    location: string
    photoAlt: string
    stats: { value: string; label: string }[]
  }
  services: {
    eyebrow: string
    title: string
    intro: string
    items: { icon: ServiceIcon; title: string; description: string; tags: string[] }[]
  }
  about: {
    eyebrow: string
    title: string
    paragraphs: string[]
    highlightsTitle: string
    highlights: { icon: HighlightIcon; title: string; text: string }[]
    softSkillsTitle: string
    softSkills: string[]
    languagesTitle: string
    languages: { name: string; level: string }[]
    interestsTitle: string
    interests: string[]
  }
  skills: {
    eyebrow: string
    title: string
    intro: string
    coreTitle: string
    core: string[]
    groups: { title: string; items: string[] }[]
  }
  experience: {
    eyebrow: string
    title: string
    intro: string
    currentLabel: string
    items: {
      role: string
      company: string
      location: string
      period: string
      current?: boolean
      points: string[]
      stack?: string[]
    }[]
  }
  projects: {
    eyebrow: string
    title: string
    intro: string
    othersTitle: string
    othersIntro: string
    live: string
    previous: string
    next: string
    goTo: string
    screenshot: string
    ctaText: string
    ctaGithub: string
    items: Record<ProjectSlug, ProjectText>
  }
  education: {
    eyebrow: string
    title: string
    items: { degree: string; school: string; location: string; period: string; detail: string }[]
  }
  contact: {
    eyebrow: string
    title: string
    intro: string
    emailLabel: string
    phoneLabel: string
    whatsappLabel: string
    locationLabel: string
    socialTitle: string
    form: {
      title: string
      name: string
      email: string
      subject: string
      message: string
      namePlaceholder: string
      emailPlaceholder: string
      subjectPlaceholder: string
      messagePlaceholder: string
      submit: string
      note: string
      bodyName: string
      bodyEmail: string
    }
  }
  footer: {
    tagline: string
    rights: string
    builtWith: string
    backToTop: string
    navTitle: string
    contactTitle: string
  }
}
