import type { Metadata, Viewport } from 'next'
import { en } from '@/content/en'
import { fr } from '@/content/fr'
import { featuredProjects } from '@/content/projects'
import { localePath, ogLocale, person, SITE_URL, type Locale } from '@/content/site'
import type { Dictionary } from '@/content/types'

export const dictionaries: Record<Locale, Dictionary> = { fr, en }

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#020617' },
  ],
}

export function buildMetadata(locale: Locale): Metadata {
  const dict = dictionaries[locale]
  const other: Locale = locale === 'fr' ? 'en' : 'fr'

  return {
    metadataBase: new URL(SITE_URL),
    title: dict.meta.title,
    description: dict.meta.description,
    keywords: dict.meta.keywords,
    applicationName: person.name,
    authors: [{ name: person.name, url: SITE_URL }],
    creator: person.name,
    publisher: person.name,
    category: 'technology',
    alternates: {
      canonical: localePath[locale],
      languages: {
        fr: localePath.fr,
        en: localePath.en,
        'x-default': localePath.fr,
      },
    },
    openGraph: {
      type: 'profile',
      firstName: person.givenName,
      lastName: person.familyName,
      username: '01TB',
      url: localePath[locale],
      siteName: person.name,
      title: dict.meta.title,
      description: dict.meta.description,
      locale: ogLocale[locale],
      alternateLocale: [ogLocale[other]],
    },
    twitter: {
      card: 'summary_large_image',
      title: dict.meta.title,
      description: dict.meta.description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
        'max-video-preview': -1,
      },
    },
    formatDetection: { telephone: false },
  }
}

// Données structurées schema.org : aident Google à comprendre qui est la personne derrière le site
export function buildJsonLd(locale: Locale) {
  const dict = dictionaries[locale]
  const pageUrl = new URL(localePath[locale], SITE_URL).toString()
  const personId = `${SITE_URL}/#person`
  const websiteId = `${SITE_URL}/#website`

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': personId,
        name: person.name,
        givenName: person.givenName,
        familyName: person.familyName,
        jobTitle: dict.hero.role,
        description: dict.meta.description,
        url: SITE_URL,
        image: new URL(person.photo, SITE_URL).toString(),
        email: `mailto:${person.email}`,
        telephone: person.phone.replace(/\s/g, ''),
        address: {
          '@type': 'PostalAddress',
          addressLocality: person.city,
          addressCountry: person.countryCode,
        },
        sameAs: [person.linkedin, person.github],
        knowsLanguage: ['fr', 'en'],
        knowsAbout: [
          'Java',
          'Spring Boot',
          'React',
          'TypeScript',
          'React Native',
          'REST API',
          'PostgreSQL',
          'Full stack development',
          'Mobile development',
        ],
        alumniOf: [
          { '@type': 'CollegeOrUniversity', name: 'IT University', address: 'Antananarivo, Madagascar' },
          { '@type': 'CollegeOrUniversity', name: 'ESTACA', address: 'Montigny-le-Bretonneux, France' },
        ],
      },
      {
        '@type': 'WebSite',
        '@id': websiteId,
        url: SITE_URL,
        name: person.name,
        inLanguage: ['fr', 'en'],
        publisher: { '@id': personId },
      },
      {
        '@type': 'ProfilePage',
        '@id': `${pageUrl}#profile`,
        url: pageUrl,
        name: dict.meta.title,
        description: dict.meta.description,
        inLanguage: locale,
        isPartOf: { '@id': websiteId },
        mainEntity: { '@id': personId },
        hasPart: featuredProjects.map((project) => ({
          '@type': 'CreativeWork',
          name: dict.projects.items[project.slug].title,
          description: dict.projects.items[project.slug].summary,
          keywords: project.stack.join(', '),
          creator: { '@id': personId },
          ...(project.link ? { url: project.link } : {}),
        })),
      },
    ],
  }
}
