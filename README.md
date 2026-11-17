# NexaForge Pixel

Site vitrine du studio NexaForge Pixel, construit avec [Astro](https://astro.build) (sortie 100 % statique).

## Lancer en local

Node.js 22.23.4 ou plus récent est requis.

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # génère dist/
npm run preview   # sert dist/ en local
```

## Déployer sur Vercel

1. Pousser ce dossier sur GitHub.
2. Sur Vercel : **Add New → Project**, importer le dépôt.
3. Vercel détecte Astro tout seul (build `npm run build`, dossier `dist`). Cliquer sur **Deploy**.

Aucune variable d'environnement n'est nécessaire.

## Structure

```
public/
  img/                 captures des projets, showreel (mp4 + poster)
  favicon.svg
src/
  data/site.ts         contenu modifiable : services, projets, étapes, FAQ, numéro WhatsApp
  layouts/Layout.astro <head>, polices, thème clair/sombre
  styles/global.css    toute la feuille de style
  components/          une section du site par fichier
  pages/index.astro    assemble les sections
```

### Modifier le contenu

- **Projets, services, FAQ, étapes, numéro WhatsApp** : `src/data/site.ts`.
  Pour ajouter un projet, déposer l'image dans `public/img/` et ajouter une ligne dans `projects`.
- **Textes des autres sections** (hero, services détaillés, footer…) : directement dans le fichier de la section dans `src/components/`.

### Note sur le CSS

La minification CSS est désactivée dans `astro.config.mjs` (`cssMinify: false`). Le minifieur par défaut supprime
`backdrop-filter` et ne garde que `-webkit-backdrop-filter`. Chrome n'applique pas cette version préfixée,
donc l'effet verre dépoli disparaissait. La feuille est déjà compacte, et Vercel la sert compressée.
