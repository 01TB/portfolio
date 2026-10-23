import type { MetadataRoute } from 'next'
import { fr } from '@/content/fr'
import { person } from '@/content/site'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: person.name,
    short_name: person.initials,
    description: fr.meta.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#4f46e5',
    lang: 'fr',
    icons: [
      { src: '/icon.png', sizes: '64x64', type: 'image/png' },
      { src: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  }
}
