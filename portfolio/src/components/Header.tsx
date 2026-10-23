'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Download, Menu, X } from 'lucide-react'
import { localePath, person, sectionIds, type Locale } from '@/content/site'
import type { Dictionary } from '@/content/types'
import ThemeToggle from './ThemeToggle'

export default function Header({ dict }: { dict: Dictionary }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const otherLocale: Locale = dict.locale === 'fr' ? 'en' : 'fr'

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!isMenuOpen) return
    const onKeyDown = (e: KeyboardEvent) => e.key === 'Escape' && setIsMenuOpen(false)
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [isMenuOpen])

  const navItems = [
    { id: sectionIds.services, label: dict.nav.services },
    { id: sectionIds.about, label: dict.nav.about },
    { id: sectionIds.skills, label: dict.nav.skills },
    { id: sectionIds.experience, label: dict.nav.experience },
    { id: sectionIds.projects, label: dict.nav.projects },
    { id: sectionIds.contact, label: dict.nav.contact },
  ]

  const solid = isScrolled || isMenuOpen

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid
          ? 'border-b border-slate-200/70 bg-white/85 backdrop-blur-lg dark:border-slate-800/70 dark:bg-slate-950/85'
          : 'border-b border-transparent'
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:rounded-full focus:bg-primary-600 focus:px-4 focus:py-2 focus:text-white"
      >
        {dict.nav.skipToContent}
      </a>
      <nav className="container-max flex h-16 items-center justify-between gap-4" aria-label={dict.nav.mainNav}>
        <a href="#top" className="font-display text-xl font-bold tracking-tight text-slate-900 dark:text-white" aria-label={`${person.name} – ${dict.nav.home}`}>
          TB<span className="text-primary-600 dark:text-primary-400">.</span>R
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="rounded-full px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Link
            href={localePath[otherLocale]}
            hrefLang={otherLocale}
            className="icon-btn text-xs font-bold"
            aria-label={dict.nav.switchLangLabel}
            title={dict.nav.switchLangLabel}
          >
            {dict.nav.switchLang}
          </Link>
          <ThemeToggle label={dict.nav.toggleTheme} />
          <a href={person.cv[dict.locale]} download className="btn-primary hidden !px-4 !py-2 sm:inline-flex">
            <Download className="h-4 w-4" aria-hidden="true" />
            {dict.nav.cv}
          </a>
          <button
            type="button"
            className="icon-btn lg:hidden"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? dict.nav.closeMenu : dict.nav.openMenu}
          >
            {isMenuOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div id="mobile-menu" className="border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950 lg:hidden">
          <ul className="container-max space-y-1 py-4">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="block rounded-xl px-3 py-3 font-medium text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="pt-2 sm:hidden">
              <a href={person.cv[dict.locale]} download className="btn-primary w-full">
                <Download className="h-4 w-4" aria-hidden="true" />
                {dict.hero.ctaCv}
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
