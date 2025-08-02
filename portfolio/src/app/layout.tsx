import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tsitohaina Berthin RAMANANKIRAHINA - Portfolio',
  description: 'Étudiant développeur en informatique passionné par le développement web et logiciel',
  keywords: 'développeur, informatique, web, Python, Java, JavaScript, Madagascar',
  authors: [{ name: 'Tsitohaina Berthin RAMANANKIRAHINA' }],
  openGraph: {
    title: 'Tsitohaina Berthin RAMANANKIRAHINA - Portfolio',
    description: 'Étudiant développeur en informatique passionné par le développement web et logiciel',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>{children}</body>
    </html>
  )
}