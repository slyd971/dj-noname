# Airtable Back Office

Ce projet peut charger du contenu éditorial depuis Airtable en production, tout en gardant les fichiers `data/*.ts` comme fallback si Airtable n'est pas configuré ou temporairement indisponible.

## Variables d'environnement

Ajoutez les variables suivantes dans Vercel et en local si besoin :

- `AIRTABLE_TOKEN`: token Airtable avec accès lecture à la base
- `AIRTABLE_BASE_ID`: identifiant de la base Airtable
- `AIRTABLE_REVALIDATE_SECONDS`: TTL du cache serveur Next.js, par défaut `60`
- `REVALIDATE_SECRET`: secret partagé pour la route `/api/revalidate`

Tables optionnellement renommables :

- `AIRTABLE_TABLE_CLIENTS`
- `AIRTABLE_TABLE_SECTIONS`
- `AIRTABLE_TABLE_HERO_VARIANTS`
- `AIRTABLE_TABLE_CLUB_REGIONS`
- `AIRTABLE_TABLE_GALLERY_IMAGES`
- `AIRTABLE_TABLE_VIDEOS`
- `AIRTABLE_TABLE_SPOTIFY_PLAYLISTS`
- `AIRTABLE_TABLE_CONTACT_METHODS`
- `AIRTABLE_TABLE_SERVICES`
- `AIRTABLE_TABLE_TESTIMONIALS`
- `AIRTABLE_TABLE_BRANDS`

Sans ces variables de tables, les noms par defaut ci-dessus sont utilises.

## Principe

- Le site lit Airtable uniquement cote serveur.
- Si Airtable est vide pour un artiste, le site continue d'utiliser les donnees locales.
- Le record `Clients` est la source principale.
- Les tables enfants permettent d'editer les listes repetables sans toucher au code.

## Schema recommande

### Table `Clients`

Champs utiles :

- `slug` (texte, obligatoire)
- `domain`
- `vercelSubdomain`
- `name`
- `tagline`
- `city`
- `country`
- `category`
- `description`
- `longBio`
- `heroImage`
- `heroImageFile` (attachment)
- `bookingEmail`
- `instagram`
- `soundCloud`
- `tikTok`
- `spotify`
- `website`
- `contactEmail`
- `contactPhone`
- `seoTitle`
- `seoDescription`
- `seoKeywords` (multiline ou multi-select)
- `seoOgImage`
- `seoOgImageFile` (attachment)
- `metadataTitle`
- `metadataDescription`
- `artistName`
- `artistStageLabel`
- `artistLogoSrc`
- `artistLogoFile` (attachment)
- `artistLogoAlt`
- `defaultTheme` (`red`, `blue`, `green`, `orange`, `violet`, `monochrome`)
- `defaultVariant` (`impact`, `interactive`, `showcase`)

### Table `Sections`

Un record par section et par artiste.

Champs :

- `clientSlug`
- `sectionKey` : `about`, `clubs`, `sound`, `videos`, `spotify`, `brands`, `contact`, `gallery`
- `eyebrow`
- `title`
- `description`
- `supportingText`
- `signatureLabel`
- `signatureQuote`
- `paragraphs` (multiline)
- `tags` (multiline)
- `embedTitle`
- `embedUrl`
- `ctaLabel`
- `ctaHref`
- `ctaVariant`
- `ctaExternal`
- `homepageTitle`
- `homepageCtaLabel`
- `intro`
- `itemLabel`
- `categories` (multiline)
- `fitEyebrow`
- `fitTitle`
- `fitPoints` (multiline)

### Table `Hero Variants`

Un record par variante de hero et par artiste.

Champs :

- `clientSlug`
- `variant` : `impact`, `interactive`, `showcase`
- `eyebrow`
- `title`
- `accent`
- `description`
- `imageSrc`
- `imageFile` (attachment)
- `imageAlt`
- `imageBadge`
- `imageCaption`
- `footerNote`
- `ctasJson`
- `statsJson`
- `mediaCardJson`
- `mediaCardImageFile` (attachment, optionnel)

Les champs `ctasJson`, `statsJson` et `mediaCardJson` acceptent du JSON valide.

### Table `Club Regions`

- `clientSlug`
- `title`
- `icon` : `map-pin` ou `globe`
- `items` (multiline)
- `order`

### Table `Gallery Images`

- `clientSlug`
- `src`
- `imageFile` (attachment)
- `alt`
- `size`
- `position`
- `previewScale`
- `previewOffsetY`
- `order`

### Table `Videos`

- `clientSlug`
- `id`
- `title`
- `description`
- `videoSource` : `local`, `airtable`, `external`
- `src`
- `videoFile` (attachment)
- `poster`
- `posterFile` (attachment, optionnel)
- `order`

### Table `Spotify Playlists`

- `clientSlug`
- `id`
- `title`
- `embedUrl`
- `order`

### Table `Contact Methods`

- `clientSlug`
- `label`
- `value`
- `href`
- `icon` : `mail`, `phone`, `instagram`, `music`, `tiktok`
- `external`
- `order`

### Table `Services`

- `clientSlug`
- `title`
- `description`
- `order`

### Table `Testimonials`

- `clientSlug`
- `quote`
- `author`
- `role`
- `order`

### Table `Brands`

- `clientSlug`
- `label`
- `order`

## Revalidation

La route `POST /api/revalidate` invalide le cache Airtable.

Authentification :

- header `x-revalidate-secret: <REVALIDATE_SECRET>`
- ou query string `?secret=<REVALIDATE_SECRET>`

Payload JSON accepte :

```json
{ "slug": "djslyd" }
```

ou

```json
{ "clientSlug": "djslyd" }
```

Si aucun slug n'est envoye, le cache Airtable global est invalide.

## Exemple d'automation Airtable

1. Trigger : quand un record est cree ou modifie.
2. Action : `Run script` ou `Send web request`.
3. Requete :
   - URL : `https://ton-domaine/api/revalidate?secret=REVALIDATE_SECRET`
   - Method : `POST`
   - Body : `{ "clientSlug": "djslyd" }`

## Notes

- Les assets lourds doivent rester sur Vercel, dans `public/`, ou sur un CDN. Airtable doit surtout stocker des URLs et du texte.
- Les variantes hero complexes utilisent du JSON pour rester flexibles sans exploser le nombre de colonnes.
- Le site ne depend pas d'Airtable pour booter : le fallback local reste prioritaire en cas de panne.
