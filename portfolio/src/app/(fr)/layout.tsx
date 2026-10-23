import type { ReactNode } from 'react'
import RootDocument from '@/components/RootDocument'
import { buildMetadata, viewport as sharedViewport } from '@/lib/seo'
import '../globals.css'

export const metadata = buildMetadata('fr')
export const viewport = sharedViewport

export default function FrenchLayout({ children }: { children: ReactNode }) {
  return <RootDocument locale="fr">{children}</RootDocument>
}
