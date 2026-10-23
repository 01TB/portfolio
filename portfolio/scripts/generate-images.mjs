// Génère les images statiques du site : aperçus de partage (Open Graph, FR + EN) et icônes.
// À relancer après un changement de photo, de titre ou d'accroche : npm run generate:images
import { readFile, writeFile } from 'node:fs/promises'
import { syncBuiltinESMExports } from 'node:module'
import path from 'node:path'
import { createElement as h } from 'react'
import { en } from '../src/content/en.ts'
import { fr } from '../src/content/fr.ts'
import { person } from '../src/content/site.ts'

// Contournement d'un bug de @vercel/og sous Windows (path.join appliqué à une URL file:)
const originalJoin = path.join
path.join = (...parts) =>
  typeof parts[0] === 'string' && parts[0].startsWith('file:') ? path.posix.join(...parts) : originalJoin(...parts)
syncBuiltinESMExports()
const { ImageResponse } = await import('next/dist/compiled/@vercel/og/index.node.js')

const root = path.resolve(import.meta.dirname, '..')
const appDir = path.join(root, 'src', 'app')

async function loadFont(name, family, weight) {
  try {
    const res = await fetch(`https://cdn.jsdelivr.net/fontsource/fonts/${family}@latest/latin-${weight}-normal.ttf`)
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    return { name, data: await res.arrayBuffer(), weight, style: 'normal' }
  } catch (error) {
    console.warn(`Police ${family} ${weight} indisponible (${error.message}), police par défaut utilisée`)
    return null
  }
}

const fonts = (
  await Promise.all([
    loadFont('Inter', 'inter', 400),
    loadFont('Inter', 'inter', 600),
    loadFont('Space Grotesk', 'space-grotesk', 700),
  ])
).filter(Boolean)

const photo = await readFile(path.join(root, 'public', person.photo))
const photoSrc = `data:image/jpeg;base64,${photo.toString('base64')}`

async function save(element, { width, height }, file) {
  const response = new ImageResponse(element, { width, height, fonts })
  const buffer = Buffer.from(await response.arrayBuffer())
  await writeFile(file, buffer)
  console.log(`✓ ${path.relative(root, file)} (${Math.round(buffer.length / 1024)} Ko)`)
}

function ogImage(dict) {
  const text = (style, content) => h('div', { style: { display: 'flex', ...style } }, content)
  return h(
    'div',
    {
      style: {
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 55%, #164e63 100%)',
        color: 'white',
        padding: '64px 72px',
        fontFamily: 'Inter',
      },
    },
    h(
      'div',
      { style: { display: 'flex', flexDirection: 'column', flex: 1, paddingRight: 48 } },
      text({ fontSize: 26, color: '#a5b4fc', letterSpacing: 2, fontFamily: 'Space Grotesk', fontWeight: 700 }, person.initials),
      h(
        'div',
        { style: { display: 'flex', flexDirection: 'column', marginTop: 28, fontSize: 62, fontWeight: 700, lineHeight: 1.05, fontFamily: 'Space Grotesk' } },
        h('span', null, person.givenName),
        h('span', null, person.familyName),
      ),
      text({ marginTop: 30, fontSize: 36, color: '#67e8f9', fontWeight: 600 }, dict.hero.role),
      text({ marginTop: 10, fontSize: 28, color: '#cbd5e1' }, dict.hero.specialty),
      text({ marginTop: 36, fontSize: 24, color: '#94a3b8' }, dict.meta.ogTagline),
    ),
    h(
      'div',
      { style: { display: 'flex', width: 340, height: 440, borderRadius: 32, overflow: 'hidden', border: '6px solid rgba(255,255,255,0.15)' } },
      h('img', { src: photoSrc, width: 340, height: 510, style: { width: 340, height: 510 } }),
    ),
  )
}

function monogram(size) {
  return h(
    'div',
    {
      style: {
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #4f46e5 0%, #06b6d4 100%)',
        borderRadius: Math.round(size * 0.22),
        color: 'white',
        fontSize: Math.round(size * 0.46),
        fontWeight: 700,
        fontFamily: 'Space Grotesk',
      },
    },
    'TB',
  )
}

const og = { width: 1200, height: 630 }
await save(ogImage(fr), og, path.join(appDir, '(fr)', 'opengraph-image.png'))
await writeFile(path.join(appDir, '(fr)', 'opengraph-image.alt.txt'), fr.meta.ogAlt)
await save(ogImage(en), og, path.join(appDir, '(en)', 'en', 'opengraph-image.png'))
await writeFile(path.join(appDir, '(en)', 'en', 'opengraph-image.alt.txt'), en.meta.ogAlt)
await save(monogram(64), { width: 64, height: 64 }, path.join(appDir, 'icon.png'))
await save(monogram(180), { width: 180, height: 180 }, path.join(appDir, 'apple-icon.png'))
