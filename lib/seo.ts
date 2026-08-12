import type { Metadata, MetadataRoute } from "next";
import { getClientBySlug } from "@/data/clients";
import type { ClientConfig } from "@/data/clients/types";
import { getCanonicalUrl, getPrimaryHostname } from "@/lib/domains";

function getInstagramHandle(instagramUrl?: string) {
  if (!instagramUrl) return undefined;

  const handle = instagramUrl
    .replace(/\/+$/, "")
    .split("/")
    .pop()
    ?.replace(/^@/, "");

  return handle ? `@${handle}` : undefined;
}

function getLanguageAlternates(client: ClientConfig) {
  const switches = client.languageSwitch?.filter((item) => item.label && item.href);

  if (!switches?.length) return undefined;

  const languages = Object.fromEntries(
    switches.map((item) => {
      const localizedClient = getClientBySlug(item.clientSlug) ?? client;
      const locale = item.label.toLowerCase();

      return [locale, new URL(item.href, getCanonicalUrl(localizedClient)).toString()];
    })
  );

  const defaultSwitch =
    switches.find((item) => item.label.toLowerCase() === "fr") ??
    switches.find((item) => item.active);
  const defaultClient = getClientBySlug(defaultSwitch?.clientSlug) ?? client;

  return {
    ...languages,
    "x-default": defaultSwitch
      ? new URL(defaultSwitch.href, getCanonicalUrl(defaultClient)).toString()
      : getCanonicalUrl(client),
  };
}

export function buildClientMetadata(
  client: ClientConfig,
  path = "/",
  overrides?: Partial<{
    title: string;
    description: string;
    image: string;
    keywords: string[];
    imageAlt: string;
  }>
): Metadata {
  const title = overrides?.title ?? client.seo.title;
  const description = overrides?.description ?? client.seo.description;
  const image = overrides?.image ?? client.seo.ogImage;
  const keywords = overrides?.keywords ?? client.seo.keywords;
  const imageAlt =
    overrides?.imageAlt ?? `Aperçu du dossier de presse de ${client.name}`;
  const canonicalUrl = getCanonicalUrl(client, path);
  const imageUrl = new URL(image, canonicalUrl).toString();
  const languageAlternates = getLanguageAlternates(client);
  const isEnglish = client.slug.endsWith("-en");

  return {
    metadataBase: new URL(`https://${getPrimaryHostname(client)}`),
    applicationName: client.name,
    title,
    description,
    keywords,
    authors: [{ name: client.name, url: canonicalUrl }],
    creator: client.name,
    publisher: client.name,
    category: client.category,
    alternates: {
      canonical: canonicalUrl,
      ...(languageAlternates ? { languages: languageAlternates } : {}),
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: client.name,
      locale: isEnglish ? "en_GB" : "fr_FR",
      type: "website",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: getInstagramHandle(client.socials.instagram),
      images: [imageUrl],
    },
  };
}

export function buildClientSitemapEntries(
  client: ClientConfig
): MetadataRoute.Sitemap {
  const now = new Date();
  const galleryImages = [...new Set(client.gallery.map((image) => image.src))].map(
    (src) => new URL(src, getCanonicalUrl(client)).toString()
  );

  const entries: MetadataRoute.Sitemap = [
    {
      url: getCanonicalUrl(client),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
      images: [new URL(client.seo.ogImage, getCanonicalUrl(client)).toString()],
    },
    {
      url: getCanonicalUrl(client, "/gallery"),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
      images: galleryImages,
    },
  ];

  if (client.pressKit.videos.items.length > 0) {
    entries.push({
      url: getCanonicalUrl(client, "/videos"),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    });
  }

  return entries;
}

export function buildSiteJsonLd(client: ClientConfig) {
  const inLanguage = client.slug.endsWith("-en") ? "en-GB" : "fr-FR";

  return [
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": `${getCanonicalUrl(client)}#artist`,
      name: client.name,
      alternateName: client.slug,
      jobTitle: client.category,
      description: client.description,
      url: getCanonicalUrl(client),
      image: new URL(client.heroImage, getCanonicalUrl(client)).toString(),
      email: client.bookingEmail,
      telephone: client.contact.phone,
      address: {
        "@type": "PostalAddress",
        addressLocality: client.city,
        addressCountry: client.country,
      },
      sameAs: Object.values(client.socials).filter(Boolean),
      knowsAbout: client.services.map((service) => service.title),
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${getCanonicalUrl(client)}#website`,
      url: getCanonicalUrl(client),
      name: client.name,
      inLanguage,
      description: client.description,
      publisher: {
        "@id": `${getCanonicalUrl(client)}#artist`,
      },
    },
  ];
}

export function buildGalleryJsonLd(client: ClientConfig) {
  const firstImage = client.gallery[0];

  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${getCanonicalUrl(client, "/gallery")}#webpage`,
    url: getCanonicalUrl(client, "/gallery"),
    name: `${client.name} Galerie`,
    description: client.pressKit.gallery.description,
    isPartOf: {
      "@id": `${getCanonicalUrl(client)}#website`,
    },
    about: {
      "@id": `${getCanonicalUrl(client)}#artist`,
    },
    primaryImageOfPage: firstImage
      ? new URL(firstImage.src, getCanonicalUrl(client)).toString()
      : undefined,
  };
}
