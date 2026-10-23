import type { ReactNode } from 'react'
import { fontDisplay, fontSans } from '@/lib/fonts'
import type { Locale } from '@/content/site'
import RevealObserver from './RevealObserver'

// Appliqué avant le premier rendu pour éviter le flash de thème : préférence enregistrée, sinon thème du système
const themeScript = `(function(){var d=document.documentElement;d.classList.add('js');try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches))d.classList.add('dark')}catch(e){}})()`

export default function RootDocument({ locale, children }: { locale: Locale; children: ReactNode }) {
  return (
    <html lang={locale} className={`${fontSans.variable} ${fontDisplay.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="font-sans">
        {children}
        <RevealObserver />
      </body>
    </html>
  )
}
