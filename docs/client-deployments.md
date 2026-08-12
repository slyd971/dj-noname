# Client deployments

This project is multi-client. Public deployments must never rely on the local
default client, because the first registered client is only a development
fallback.

## Resolution order

For local requests (`localhost`, `127.0.0.1`, `0.0.0.0`):

1. `?client=` or `?artist=`
2. configured host, if any
3. local default client (`djslyd`)

For public requests:

1. configured Airtable host (`domain` or `vercelSubdomain`)
2. configured local host (`domain`, `vercelSubdomain`, or `domainAliases`)
3. explicit deployment slug from environment
4. no fallback: the request returns 404 / no sitemap

The public resolver intentionally ignores `?client=` and `?artist=` so one
client URL cannot render another client's press kit.

## Required Vercel environment

Set one of these variables on each Vercel project or deployment environment:

```txt
PRESS_KIT_CLIENT_SLUG=silver-dj
```

Accepted names, in priority order:

```txt
PRESS_KIT_CLIENT_SLUG
SLYD_PRESS_KIT_CLIENT_SLUG
CLIENT_SLUG
```

Valid slugs currently registered in code:

```txt
djslyd
silver-dj
yoruboy-dj
paul-keranne
arthur-chaps
```

If the deployment URL already matches a configured `domain` or
`vercelSubdomain`, that host match wins. The environment slug is mainly for
preview URLs and Vercel-generated URLs that do not match a client domain.
