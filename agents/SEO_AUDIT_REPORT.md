# SEO Audit Report

Date d'audit: 2026-05-30

## Etat global

Le SEO est globalement sain cote architecture multi-client: les pages principales
utilisent `buildClientMetadata()` et les donnees viennent des configs client. Le
sitemap et le robots sont dynamiques par client. Les corrections appliquees
renforcent les canonical, les alternates multilingues et la separation entre
socle et clients.

## Corrections appliquees

- Ajout de `client.seo.canonical` dans le type SEO client.
- Ajout d'un canonical explicite pour chaque client enregistre.
- `getCanonicalUrl()` utilise maintenant `client.seo.canonical`, avec fallback
  sur le domaine principal.
- Ajout des alternates multilingues dans les metadata Next.js a partir de
  `client.languageSwitch`.
- Les URLs canoniques restent sur les domaines custom `*.presskit.fr`, pas sur
  les sous-domaines Vercel quand un domaine client existe.

## Validations

- ✅ `title` et `description` viennent de la config client.
- ✅ `keywords` existent pour chaque client enregistre.
- ✅ Open Graph et Twitter Card sont generes par `buildClientMetadata()`.
- ✅ Canonical dynamique par client via `client.seo.canonical`.
- ✅ Sitemap dynamique par client dans `app/sitemap.ts`.
- ✅ Robots dynamique par client dans `app/robots.ts`.
- ✅ JSON-LD site/personne et galerie generes depuis la config client.
- ✅ Un seul H1 est rendu par page principale dans l'etat actuel.
- ✅ Les images importantes utilisent des `alt` issus de la config ou du titre.
- ✅ La galerie utilise des images lazy par comportement navigateur et les videos
  locales utilisent `preload="metadata"` quand un poster existe.
- ✅ Aucune URL Vercel n'est utilisee comme canonical pour les clients avec
  domaine custom.

## Points a ameliorer

### ⚠️ Favicon absent

Aucun fichier `favicon`, `icon` ou `apple-icon` n'a ete trouve dans `app/` ou
`public/`.

Recommandation: ajouter une icone generique du socle ou, idealement, permettre
un favicon client-driven dans la config.

### ⚠️ OG image commune pour plusieurs clients

Plusieurs clients utilisent `/opengraph-image`, qui genere une image dynamique
avec l'identite du client. C'est acceptable techniquement, mais moins fort qu'une
image sociale dediee par client.

Clients concernes: `soyumi`, `silver-dj`, `yoruboy-dj`, `paul-keranne`,
`arthur-chaps`.

Recommandation: ajouter une OG image dediee par client quand les assets sont
valides.

### ⚠️ Medias lourds

Des fichiers de plus de 5 Mo existent dans `public/**`, surtout des videos `.mp4`
ou `.mov` et quelques images JPG.

Exemples: `public/slyd/*.mov`, `public/soyumi/videos/*.mp4`,
`public/silver-dj/videos/*.mp4`, `public/mack/videos/*.mp4`,
`public/yoruboy/videos/*.mov`, `public/press-kit/*.jpg`.

Recommandation: compresser les videos web, convertir les images lourdes en WebP
ou AVIF et garder les originaux hors bundle public si elles ne sont pas servies.

### ⚠️ Descriptions de videos vides

Plusieurs items video ont `description: ""`. Ce n'est pas bloquant pour le rendu,
mais c'est une opportunite editoriale SEO et accessibilite.

Clients concernes notamment: `yoruboy-dj`, `soyumi`, `silver-dj`,
`paul-keranne`, `dj-mack`.

Recommandation: ajouter des descriptions courtes validees par client, sans
inventer de contenu.

### ⚠️ Titres SEO perfectibles

Certains titres sont corrects mais pourraient etre plus orientes recherche
metier + ville:

- `Arthur Chaps | Press kit officiel`
- `DJ MACK | Press kit DJ & MC international`
- `Soyumi Press Kit | Afro-Caribbean, Open Format & Global Club Energy`

Recommandation: valider des titres SEO plus explicites avec le client avant
modification editoriale.

### ⚠️ `html lang` global en francais

`app/layout.tsx` rend actuellement `<html lang="fr">`. Pour DJ MACK `/en`, les
metadata ont maintenant les alternates, mais le `lang` HTML reste global.

Recommandation: passer le `lang` par route locale ou layout locale dans une passe
dediee.

## Bloquants

❌ Aucun bloquant SEO technique detecte pour le build ou l'indexation de base.

Le principal risque n'est pas bloquant mais prioritaire: poids des medias, favicon
absent et optimisation editoriale des titres/descriptions.

## Recommandations par priorite

### Priorite 1

- Ajouter favicon/icon generique ou client-driven.
- Compresser les medias de plus de 5 Mo visibles en production.
- Ajouter des OG images dediees aux clients qui utilisent encore l'OG dynamique
  commune.

### Priorite 2

- Completer les descriptions de videos vides avec validation client.
- Ameliorer les titres SEO trop generiques avec structure:
  `Metier + Nom | Ville / pays + style`.
- Ajouter un test guardrail qui verifie canonical, title, description, OG image
  et absence de canonical Vercel.

### Priorite 3

- Gerer `html lang` dynamiquement pour les routes multilingues.
- Ajouter des donnees structurees plus precises par metier quand le presskit
  n'est pas un DJ: `Person`, `MusicGroup`, `LocalBusiness`, `ImageObject`,
  `VideoObject` selon le cas.

## Etat par client

- ✅ `djslyd`: SEO complet, canonical custom, OG dediee.
- ✅ `silver-dj`: SEO complet, canonical custom, OG dynamique.
- ✅ `soyumi`: SEO complet, canonical custom, OG dynamique.
- ✅ `yoruboy-dj`: SEO complet, canonical custom, OG dynamique.
- ✅ `paul-keranne`: SEO complet, canonical custom, OG dynamique.
- ✅ `arthur-chaps`: SEO complet, canonical custom, titre a renforcer.
- ✅ `dj-mack`: SEO complet, canonical custom, alternates FR/EN.
- ✅ `dj-mack-en`: variante technique EN, masquee du switcher, utilisee par
  l'alternate `/en`.

## Commandes de verification

- `npm run build`: OK. Le build conserve les avertissements existants
  `DYNAMIC_SERVER_USAGE` lies a `headers`, sans echec de compilation.
- `npm run lint`: non disponible dans `package.json` a la date de l'audit.
