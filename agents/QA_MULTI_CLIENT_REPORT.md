# QA Multi-Client Report

Date d'audit: 2026-05-30

## Synthese

Le socle est majoritairement multi-client: les routes principales rendent le
contenu depuis la config client resolue par hostname, alias, env var ou fallback
local. J'ai applique uniquement les corrections sures, c'est-a-dire les fuites
client simples dans le socle et les variations visuelles qui pouvaient etre
deplacees dans la config client.

Le build passe. Il conserve des avertissements existants sur le rendu dynamique
lie a `headers`, mais ils ne bloquent pas la compilation.

## Corrections appliquees

- `app/not-found.tsx`: suppression des exemples hardcodes `djslyd` et
  `yoruboy-dj`.
- `app/opengraph-image.tsx`: remplacement de l'alt hardcode `DJ SLY'D hero` par
  un alt base sur `client.name`.
- `data/config.ts`: ajout de `clubs.itemIconOverrides` pour permettre des
  overrides visuels par client.
- `components/press-kit/ClubsSection.tsx`: suppression du chemin Soyumi code en
  dur et lecture des overrides depuis la config.
- `data/clients/soyumi.ts`: deplacement de l'override du drapeau Guadeloupe dans
  la config Soyumi.
- `MULTI_CLIENT_GUARDRAILS.md`: creation du document de garde-fous.
- `QA_MULTI_CLIENT_REPORT.md`: creation du rapport QA a jour.

## Verification

- `npm run build`: OK.
- Scan `app/**`, `components/**`, `lib/**`, `proxy.ts`: plus de chemin asset
  Soyumi hardcode dans les composants partages.
- Les changements existants non lies a l'audit ont ete conserves sans revert:
  `data/clients/dj-mack.ts`, `next-env.d.ts`, fichiers Paul-Keranne non suivis,
  assets/videos non suivis.

## Clients enregistres

- `djslyd`
- `silver-dj`
- `soyumi`
- `yoruboy-dj`
- `paul-keranne`
- `arthur-chaps`
- `dj-mack`
- `dj-mack-en`

## Findings restants

### Moyen: config legacy DJSlyd hors registry client

Fichier: `data/config.ts`

Ce fichier contient encore du contenu DJSlyd et des chemins `/press-kit/**`.
Comme il sert aussi de type/source legacy, je ne l'ai pas supprime: ce serait
une correction trop large sans verification fonctionnelle complete.

Action recommandee: isoler le type `PressKitConfig` dans un fichier neutre puis
deplacer ou supprimer la config legacy DJSlyd.

### Moyen: helpers bases sur `getClients()[0]`

Fichier: `data/press-kits.ts`

`getPressKitEntry()`, `getArtistGalleryHref()`, `getArtistHomeHref()` et
`getArtistVideosHref()` utilisent le premier client du registry comme client
special. Cela reste fragile si l'ordre du registry change et peut produire des
URLs `?client=` hors contexte local.

Action recommandee: separer explicitement les URLs publiques des URLs de preview
locale, puis supprimer la dependance a `getClients()[0]`.

### Moyen: doublon Paul-Keranne non suivi avec accent

Fichiers non suivis: `data/clients/Paul-Kéranne.ts`, `public/Paul-Kéranne/**`

Le registry actuel utilise `paul-keranne`, mais un doublon accentue non suivi
existe dans le worktree. Je ne l'ai pas supprime car c'est une action
destructive sur des fichiers non suivis.

Action recommandee: verifier que `paul-keranne` est la seule version voulue,
puis supprimer le doublon accentue dans une passe dediee.

### Moyen: absence de validation runtime des configs

Fichiers: `data/clients/types.ts`, `data/clients/index.ts`

Les configs sont typees en TypeScript, mais il n'y a pas encore de validation
runtime pour bloquer un slug non URL-safe, un asset hors dossier client, une OG
image manquante ou une section incomplete.

Action recommandee: ajouter un schema de validation et un test build/CI qui
valide tous les clients du registry.

### Faible: fallback local `defaultClientSlug`

Fichier: `lib/clients/index.ts`

`defaultClientSlug = "djslyd"` reste acceptable tant que le fallback est limite
au local. L'etat actuel respecte cette separation.

Action recommandee: garder ce fallback local-only et ajouter un test qui bloque
tout fallback production vers le client par defaut.

## Conclusion

Les corrections sures ont ete appliquees. Le socle ne fuit plus l'asset Soyumi
dans les composants partages et les textes client les plus visibles ont ete
retires de `app/**`. Les risques restants demandent une passe plus structurelle
ou une decision sur les fichiers non suivis.
