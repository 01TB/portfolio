import type { CSSProperties } from 'react'

// Décale l'apparition des éléments d'une même grille
export function revealDelay(index: number, step = 80): CSSProperties {
  return { '--reveal-delay': `${index * step}ms` } as CSSProperties
}
