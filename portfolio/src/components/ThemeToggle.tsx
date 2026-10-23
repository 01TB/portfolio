'use client'

import { Moon, Sun } from 'lucide-react'

export default function ThemeToggle({ label }: { label: string }) {
  const toggle = () => {
    const isDark = document.documentElement.classList.toggle('dark')
    try {
      localStorage.setItem('theme', isDark ? 'dark' : 'light')
    } catch {
      // Stockage indisponible (navigation privée) : le thème reste valable pour cette page
    }
  }

  return (
    <button type="button" onClick={toggle} className="icon-btn" aria-label={label} title={label}>
      <Sun className="hidden h-5 w-5 dark:block" aria-hidden="true" />
      <Moon className="h-5 w-5 dark:hidden" aria-hidden="true" />
    </button>
  )
}
