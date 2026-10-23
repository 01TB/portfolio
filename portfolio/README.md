# Portfolio – Tsitohaina Berthin RAMANANKIRAHINA

Portfolio bilingue (FR / EN) de développeur Full Stack & Mobile, construit avec Next.js 14 (App Router) et Tailwind CSS.

- Production : https://portfolio-tsitohaina-berthin-ramana.vercel.app
- Français : `/` · Anglais : `/en`

## Démarrer

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de production (toutes les pages sont statiques)
```

## Modifier le contenu

Tout le texte est dans `src/content/`, pas dans les composants :

| Fichier | Contenu |
| --- | --- |
| `site.ts` | URL du site, coordonnées, liens LinkedIn/GitHub, chemin du CV et de la photo |
| `fr.ts` / `en.ts` | Textes de chaque langue (titres SEO, accueil, services, expérience, projets…) |
| `projects.ts` | Projets : stack, captures d'écran, lien de démo, mise en avant ou non |

Pour ajouter un projet : l'ajouter dans `projects.ts` (avec un `slug`), puis ajouter son texte sous ce même `slug` dans `fr.ts` **et** `en.ts`. TypeScript signale une erreur si une traduction manque.

## Images de partage et icônes

L'aperçu affiché lors du partage du lien (LinkedIn, WhatsApp…) et les favicons sont des PNG statiques dans `src/app/`. Après un changement de photo, de titre ou d'accroche, les régénérer :

```bash
npm run generate:images
```

## SEO

- Métadonnées par langue, `canonical` et `hreflang` : `src/lib/seo.ts`
- Données structurées schema.org (Person, WebSite, ProfilePage) : `buildJsonLd` dans `src/lib/seo.ts`
- `sitemap.xml`, `robots.txt` et `manifest.webmanifest` générés depuis `src/app/`

Après le déploiement, soumettre `https://portfolio-tsitohaina-berthin-ramana.vercel.app/sitemap.xml` dans Google Search Console.
