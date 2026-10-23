import type { ReactNode } from 'react'
import RootDocument from '@/components/RootDocument'
import { buildMetadata, viewport as sharedViewport } from '@/lib/seo'
import '../globals.css'

export const metadata = buildMetadata('en')
export const viewport = sharedViewport

export default function EnglishLayout({ children }: { children: ReactNode }) {
  return <RootDocument locale="en">{children}</RootDocument>
}
