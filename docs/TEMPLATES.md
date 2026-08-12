# Press Kit Templates

This repo is now the single master template.

It includes 3 hero variants:

- `impact`
- `interactive`
- `showcase`

Each template uses the same structure:

- `data/config.ts`: content for the DJ, links, images, stats, bio
- `data/templates.ts`: reusable theme presets and accent colors
- `components/press-kit/*`: modular reusable sections
- `app/page.tsx`: homepage composition
- `app/gallery/page.tsx`: gallery page powered by config

## Create a New Client Project

From the `slyd-press-kit` folder:

```bash
./scripts/create-press-kit.sh impact ../client-press-kit
./scripts/create-press-kit.sh interactive ../client-press-kit
./scripts/create-press-kit.sh showcase ../client-press-kit
```

Or create a prefilled client project directly:

```bash
./scripts/create-client-press-kit.sh impact "DJ Nova"
./scripts/create-client-press-kit.sh interactive "Aya Nakamura"
./scripts/create-client-press-kit.sh showcase "KAYTRANADA" ../kaytranada-press-kit
./scripts/create-client-press-kit.sh impact "DJ Nova" --email "booking@djnova.com" --phone "+33 6 00 00 00 00" --instagram "djnova" --soundcloud "dj-nova" --theme orange --accent "#F05A28"
```

Or import a Google Forms Excel export:

```bash
python3 ./scripts/import-client-form.py "../exports/press-kit-responses.xlsx"
npm run import:client-form -- "../exports/press-kit-responses.xlsx"
```

This second script will:

- create the destination folder automatically if omitted
- copy the current repo as the single source template
- set the chosen hero variant as the default project variant
- prefill the artist name in `data/config.ts`
- prefill the metadata title and description
- update the `package.json` project name
- optionally prefill email, phone, Instagram and SoundCloud
- optionally set the default theme
- optionally override the main accent color

The Excel import script will:

- read the latest response from the workbook by default
- map the selected template and color theme
- create the client project automatically
- prefill core contact information
- save raw normalized answers in `data/client-intake.json`
- generate `CLIENT_INTAKE.md` for manual review
- apply a first-pass config update for stage label, bio, tags and Spotify

You can target a specific response row with:

```bash
python3 ./scripts/import-client-form.py "/path/to/export.xlsx" --row 2
```

And preview the parsed data without creating a project:

```bash
python3 ./scripts/import-client-form.py "/path/to/export.xlsx" --dry-run
```

## Customize a Client

Update these files:

1. `data/config.ts`
2. `data/templates.ts`

For a quick visual switch during review, use:

- `?template=red`
- `?template=blue`
- `?template=green`
- `?template=orange`
- `?template=violet`
- `?template=monochrome`

Legacy aliases still work:

- `?template=midnight` -> red
- `?template=ember` -> orange
- `?template=sapphire` -> blue

## Recommended Workflow

1. Duplicate the shared template with the hero variant that best fits the client
2. Prefill with `create-client-press-kit.sh` if you want a faster start
3. Finalize content in `data/config.ts`
4. Adjust theme presets in `data/templates.ts` if needed
5. Swap assets in `public/`
6. Run `npm install`
7. Run `npm run dev`
