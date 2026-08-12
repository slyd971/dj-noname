# DJ SLY'D Airtable Seed

Ce dossier contient un jeu de donnees initial pour la base Airtable de `djslyd`.

## Import recommande

1. Cree les tables Airtable avec les noms documentes dans [airtable-backoffice.md](/Users/davidmecorvin/slyd-press-kit/docs/airtable-backoffice.md:1).
2. Dans chaque table, utilise `Import data -> CSV`.
3. Importe les fichiers de ce dossier un par un.
4. Verifie que `clientSlug` vaut bien `djslyd` partout.

## Ordre conseille

1. `clients.csv`
2. `sections.csv`
3. `hero-variants.csv`
4. `club-regions.csv`
5. `gallery-images.csv`
6. `videos.csv`
7. `spotify-playlists.csv`
8. `contact-methods.csv`
9. `services.csv`
10. `testimonials.csv`
11. `brands.csv`

## Notes

- Les champs multiline peuvent rester en texte long dans Airtable.
- Les champs `ctasJson`, `statsJson` et `mediaCardJson` doivent rester du texte long contenant du JSON valide.
- `gallery-images.csv` et `videos.csv` sont les fichiers seed definitifs a utiliser pour Airtable.
- Les assets restent servis par le site via les chemins `/press-kit/...` et `/slyd/...`.
