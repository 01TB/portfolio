import type { MetadataRoute } from 'next'
import { localePath, locales, SITE_URL } from '@/content/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = Object.fromEntries(locales.map((locale) => [locale, new URL(localePath[locale], SITE_URL).toString()]))

  return locales.map((locale) => ({
    url: new URL(localePath[locale], SITE_URL).toString(),
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: locale === 'fr' ? 1 : 0.9,
    alternates: { languages },
  }))
}
