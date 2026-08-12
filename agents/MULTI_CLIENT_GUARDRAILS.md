# Multi-Client Guardrails

Date de reference: 2026-05-30

Ce projet est un socle Next.js multi-client. L'ajout, la mise a jour ou le
deploiement d'un client ne doit pas modifier le presskit de base ni les autres
clients.

## Regles d'architecture

- Tout contenu client doit vivre dans `data/clients/<slug>.ts`.
- Tout asset client doit vivre dans `public/<slug>/**`.
- Le socle (`app/**`, `components/**`, `lib/**`) ne doit contenir aucun nom
  d'artiste, chemin asset client, email client, URL sociale client ou slug client
  rendu publiquement.
- Les composants partages doivent recevoir les variations par props depuis
  `ClientConfig` ou `PressKitConfig`.
- `?client=` et `?artist=` sont reserves au local et aux outils de preview.
- En production, la resolution doit passer par hostname, alias de domaine ou
  variable `PRESS_KIT_CLIENT_SLUG`.
- En production, un hostname inconnu doit rendre une erreur claire ou une 404,
  jamais le premier client du registry.
- Les liens publics doivent rester generiques: `/`, `/gallery`, `/videos`.
- Un fallback vers `getDefaultClient()` est acceptable uniquement en local.

## Fichiers autorises pour un client

- `data/clients/<slug>.ts`
- `data/clients/index.ts`, uniquement pour enregistrer le client
- `public/<slug>/**`
- `docs/airtable-seed/<slug>/**`
- Variables d'environnement du projet Vercel client
- Mapping de domaine externe si le domaine n'est pas pilote par Airtable

## Fichiers a proteger

Un ajout client simple ne doit pas modifier ces fichiers:

- `app/layout.tsx`
- `app/page.tsx`
- `app/gallery/page.tsx`
- `app/videos/page.tsx`
- `app/not-found.tsx`
- `app/opengraph-image.tsx`
- `app/globals.css`
- `components/**`
- `lib/clients/**`
- `lib/domains.ts`
- `lib/seo.ts`
- `proxy.ts`
- `next.config.*`
- `package.json`

Exception: une modification est acceptable si elle rend le socle plus generique
pour tous les clients et si elle est documentee dans `QA_MULTI_CLIENT_REPORT.md`.

## Checklist nouveau client

- Slug lowercase, ASCII et URL-safe.
- Client enregistre dans `data/clients/index.ts`.
- Domaine, sous-domaine Vercel et alias coherents avec le slug.
- Assets limites a `public/<slug>/**`.
- Aucune reference a un autre client dans la config.
- `seo.title`, `seo.description`, `seo.keywords` et `seo.ogImage` fournis.
- `pressKit.metadata`, `heroVariants`, `navigation`, `about`, `clubs`,
  `videos`, `sound`, `spotify`, `brands`, `contact` et `gallery` fournis.
- `bookingEmail`, `socials` et `contact` renseignes.
- `PRESS_KIT_CLIENT_SLUG=<slug>` defini sur le projet Vercel si le hostname de
  preview ne matche pas le domaine client.
- `npm run build` passe.
- Home, `/gallery`, `/videos`, `/opengraph-image`, `/robots.txt` et
  `/sitemap.xml` resolvent le meme client sur le domaine cible.

## Scan guardrail avant deploy

Commandes utiles:

```bash
rg -n "/(djslyd|silver-dj|soyumi|yoruboy-dj|paul-keranne|arthur-chaps|dj-mack)" app components lib proxy.ts
rg -n "DJ SLY|Soyumi|Yoruboy|Arthur Chaps|DJ MACK|Paul Keranne" app components lib proxy.ts
npm run build
```

Les references client dans `data/clients/**`, `public/**` et les docs de seed
sont normales. Les references dans `app/**`, `components/**` ou `lib/**` doivent
etre justifiees ou supprimees.

## Rollback

1. Rollback Vercel vers le dernier deployment sain du client concerne.
2. Si le probleme vient du contenu, revert uniquement `data/clients/<slug>.ts`,
   `public/<slug>/**` et l'entree registry.
3. Si le probleme vient du domaine, restaurer `PRESS_KIT_CLIENT_SLUG`, le custom
   domain ou l'alias precedent.
4. Ne pas rollback le socle complet pour un incident limite a un client.
5. Apres rollback, verifier `/robots.txt` et `/sitemap.xml` sur le domaine cible.

## Architecture cible

- Centraliser le registry dans une API unique: `getClientBySlug`,
  `getClientByHostname`, `resolveRequestClient`.
- Supprimer les helpers publics bases sur `getClients()[0]`.
- Ajouter une validation runtime des configs client.
- Ajouter un test de scan anti-hardcode sur `app/**`, `components/**`, `lib/**`
  et `proxy.ts`.
