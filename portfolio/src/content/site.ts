export type Locale = 'fr' | 'en'

export const locales: Locale[] = ['fr', 'en']

export const SITE_URL = 'https://portfolio-tsitohaina-berthin-ramana.vercel.app'

export const localePath: Record<Locale, string> = {
  fr: '/',
  en: '/en',
}

export const ogLocale: Record<Locale, string> = {
  fr: 'fr_FR',
  en: 'en_US',
}

export const person = {
  name: 'Tsitohaina Berthin RAMANANKIRAHINA',
  givenName: 'Tsitohaina Berthin',
  familyName: 'RAMANANKIRAHINA',
  initials: 'TB.R',
  email: 'tsitohaina.berthin@gmail.com',
  phone: '+261 38 49 829 63',
  phoneHref: 'tel:+261384982963',
  city: 'Antananarivo',
  country: 'Madagascar',
  countryCode: 'MG',
  photo: '/images/profile.jpg',
  cv: {
    fr: '/CV_Tsitohaina_Berthin_RAMANANKIRAHINA.pdf',
    en: '/CV_Tsitohaina_Berthin_RAMANANKIRAHINA_EN.pdf',
  } satisfies Record<Locale, string>,
  linkedin: 'https://www.linkedin.com/in/tsitohaina-berthin-ramanankirahina-042aa4252/',
  github: 'https://github.com/01TB',
}

export const sectionIds = {
  services: 'services',
  about: 'about',
  skills: 'skills',
  experience: 'experience',
  projects: 'projects',
  education: 'education',
  contact: 'contact',
} as const
