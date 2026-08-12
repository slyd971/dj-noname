# Silver DJ Airtable Seed

Ces fichiers preparent le client `silver-dj` pour Airtable.

Tables a importer :
- `Clients` <- `clients.csv`
- `Sections` <- `sections.csv`
- `Gallery Images` <- `gallery-images.csv`
- `Videos` <- `videos.csv`
- `Spotify Playlists` <- `spotify-playlists.csv`
- `Contact Methods` <- `contact-methods.csv`

Slug utilise dans le code :
- `silver-dj`

Notes :
- La section video accepte maintenant `videoSource=local` ou `videoSource=youtube`.
- Pour YouTube, renseigner `embedUrl` avec une URL de type `https://www.youtube.com/embed/VIDEO_ID`.
- Les medias Silver DJ sont attendus dans `public/silver-dj/`.
