import Image from "next/image";
import type { Metadata } from "next";
import { Header } from "@/components/press-kit/Header";
import { Footer } from "@/components/press-kit/Footer";
import { DevControlPanel } from "@/components/press-kit/DevControlPanel";
import { getFontPreset, getFontStyle } from "@/data/font-presets";
import {
  createPressKitEntry,
  getArtistGalleryHref,
  getArtistHomeHref,
  getArtistVideosHref,
  getResolvedNavigation,
} from "@/data/press-kits";
import { getClientBySlug } from "@/data/clients";
import type { ClientConfig } from "@/data/clients/types";
import { getTemplateStyle, getTemplateTheme } from "@/data/templates";
import {
  getRequestedClientSlug,
  getRequiredRequestClient,
} from "@/lib/clients/server";
import { isLocalRequest } from "@/lib/is-local-request";
import { buildClientMetadata } from "@/lib/seo";

type PanamSearchParams = {
  client?: string;
  artist?: string;
  template?: string;
  font?: string;
};

export type PanamPageProps = {
  locale?: string;
  searchParams?: Promise<PanamSearchParams>;
};

const flyers = [
  { src: "/dj-flo/optimized/panam/flyer-lauryn.jpg", alt: "MOB Sessions Lauryn Hill flyer" },
  { src: "/dj-flo/optimized/panam/flyer-fdml.jpg", alt: "Fete de la musique flyer" },
  { src: "/dj-flo/optimized/panam/flyer-mob-2.jpg", alt: "MOB Sessions 2 flyer" },
  { src: "/dj-flo/optimized/panam/flyer-aaliyah.jpg", alt: "MOB Session Aaliyah flyer" },
  { src: "/dj-flo/optimized/panam/flyer-hh-afro.jpg", alt: "Hip Hop vs Afrobeat flyer" },
  { src: "/dj-flo/optimized/panam/flyer-artboard.jpg", alt: "Panam en Fete event flyer" },
  { src: "/dj-flo/optimized/panam/poster-lauryn-burna.jpg", alt: "Lauryn Hill vs Burna poster" },
  { src: "/dj-flo/optimized/panam/flyer-final.jpg", alt: "Panam en Fete flyer final" },
  { src: "/dj-flo/optimized/panam/flyer-frank-ocean.jpg", alt: "Frank Ocean MOB Session flyer" },
];

const photos = [
  { src: "/dj-flo/optimized/panam/mob-1.jpg", alt: "MOB Sessions crowd and DJ booth" },
  { src: "/dj-flo/optimized/panam/mob-2.jpg", alt: "MOB Sessions audience moment" },
  { src: "/dj-flo/optimized/panam/mob-3.jpg", alt: "MOB Sessions live atmosphere" },
  { src: "/dj-flo/optimized/panam/mob-4.jpg", alt: "MOB Sessions dancefloor" },
  { src: "/dj-flo/optimized/panam/mob-5.jpg", alt: "MOB Sessions community event" },
];

function getLocalizedClient(client: ClientConfig, locale?: string) {
  const normalizedLocale = locale?.toUpperCase();

  if (
    !normalizedLocale ||
    client.languageSwitch?.some((item) => {
      return item.active && item.label.toUpperCase() === normalizedLocale;
    })
  ) {
    return client;
  }

  const localizedSwitch = client.languageSwitch?.find((item) => {
    return item.label.toUpperCase() === normalizedLocale;
  });

  return getClientBySlug(localizedSwitch?.clientSlug) ?? client;
}

async function resolvePanamClient(locale?: string, searchParams?: Promise<PanamSearchParams>) {
  const resolvedSearchParams = searchParams ? await searchParams : undefined;
  const requestedClient = await getRequiredRequestClient(
    getRequestedClientSlug(resolvedSearchParams)
  );

  return {
    client: getLocalizedClient(requestedClient, locale),
    resolvedSearchParams,
  };
}

export async function generatePanamMetadata({
  locale,
  searchParams,
}: PanamPageProps): Promise<Metadata> {
  const { client } = await resolvePanamClient(locale, searchParams);
  const isEnglish = locale?.toLowerCase() === "en" || client.slug.endsWith("-en");
  const title = isEnglish
    ? "PANAM' EN FETE by FLO | Event collective"
    : "PANAM' EN FETE par FLO | Collectif événementiel";
  const description = isEnglish
    ? "Explore PANAM' EN FETE, FLO's Paris event collective: MOB Sessions, flyers, videos and community moments."
    : "Explorez PANAM' EN FETE, le collectif événementiel parisien de FLO: MOB Sessions, flyers, vidéos et moments de communauté.";

  return buildClientMetadata(client, isEnglish ? "/en/panam-en-fete" : "/panam-en-fete", {
    title,
    description,
    image: "/dj-flo/optimized/panam/flyer-hh-afro.jpg",
    imageAlt: "PANAM' EN FETE by FLO",
    keywords: [
      "PANAM EN FETE",
      "FLO",
      "MOB Sessions",
      "events Paris",
      "collectif événementiel Paris",
    ],
  });
}

export async function PanamPage({ locale, searchParams }: PanamPageProps) {
  const { client, resolvedSearchParams } = await resolvePanamClient(locale, searchParams);
  const pressKitEntry = createPressKitEntry(client);
  const pressKitConfig = pressKitEntry.config;
  const theme = getTemplateTheme(
    resolvedSearchParams?.template ?? pressKitEntry.defaultTheme
  );
  const fontPreset = getFontPreset(resolvedSearchParams?.font);
  const navigation = getResolvedNavigation(pressKitConfig);
  const showLocalSwitchers = await isLocalRequest();
  const homeHref =
    client.languageSwitch?.find((item) => item.active)?.href ??
    getArtistHomeHref(pressKitEntry.id);
  const isEnglish = locale?.toLowerCase() === "en" || client.slug.endsWith("-en");

  const copy = isEnglish
    ? {
        eyebrow: "FLO project",
        title: "PANAM' EN FETE",
        intro:
          "A Paris event collective built to bring people together around strong musical concepts and accessible, carefully curated nights.",
        paragraphs: [
          "Founded by Flo, PANAM' EN FETE has gathered more than 1,500 people across around ten events, combining artistic standards with a welcoming community spirit.",
          "Its latest format, MOB Sessions, takes place monthly at MOB House in Saint-Ouen. Each edition pays tribute to an iconic artist before opening into a dancefloor moment designed for creative communities.",
        ],
        stats: [
          ["1500+", "attendees"],
          ["10+", "events"],
          ["200+", "people per MOB Session"],
        ],
        videos: "Videos",
        flyers: "Flyers",
        photos: "MOB Sessions photos",
      }
    : {
        eyebrow: "Projet FLO",
        title: "PANAM' EN FETE",
        intro:
          "Un collectif événementiel parisien pensé pour rassembler autour de concepts musicaux forts, accessibles et soignés.",
        paragraphs: [
          "Fondé par Flo, PANAM' EN FETE a déjà réuni plus de 1 500 personnes à travers une dizaine d'événements mêlant exigence artistique et esprit communautaire.",
          "Son dernier format, les MOB Sessions, se tient chaque mois au MOB House à Saint-Ouen. Chaque édition rend hommage à un artiste iconique avant de laisser place à une soirée dansante pensée pour les communautés créatives.",
        ],
        stats: [
          ["1500+", "participants"],
          ["10+", "événements"],
          ["200+", "personnes par MOB Session"],
        ],
        videos: "Vidéos",
        flyers: "Flyers",
        photos: "Photos MOB Sessions",
      };

  return (
    <main
      style={{ ...getTemplateStyle(theme), ...getFontStyle(fontPreset) }}
      className="min-h-screen bg-[var(--pk-bg)] text-[var(--pk-text)]"
    >
      <Header
        artist={pressKitConfig.artist}
        navigation={navigation}
        ui={pressKitConfig.ui}
        homeHref={homeHref}
      />
      {showLocalSwitchers && (
        <DevControlPanel
          activeClientId={pressKitEntry.id}
          activeThemeId={theme.id}
          activeFontPresetId={fontPreset.id}
        />
      )}

      <section className="relative overflow-hidden bg-black px-4 pb-12 pt-28 md:px-8 md:pb-20 md:pt-36">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgb(var(--pk-accent-rgb)/0.18),transparent_28%),radial-gradient(circle_at_78%_15%,rgba(255,255,255,0.08),transparent_24%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--pk-accent)] md:text-xs md:tracking-[0.36em]">
              {copy.eyebrow}
            </div>
            <h1 className="mt-4 text-5xl font-black uppercase leading-[0.92] md:text-7xl xl:text-8xl">
              {copy.title}
            </h1>
          </div>
          <div>
            <p className="max-w-2xl text-lg leading-8 text-white/75 md:text-2xl md:leading-10">
              {copy.intro}
            </p>
            <div className="mt-6 grid grid-cols-3 gap-3">
              {copy.stats.map(([value, label]) => (
                <div key={label} className="border border-white/10 bg-white/[0.03] p-4">
                  <div className="text-2xl font-black uppercase text-white md:text-4xl">
                    {value}
                  </div>
                  <div className="mt-2 text-[9px] font-semibold uppercase tracking-[0.22em] text-white/45">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-10 md:px-8 md:py-16">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div className="space-y-4 text-base leading-7 text-white/68 md:text-lg md:leading-8">
            {copy.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <video
              className="aspect-[9/16] w-full rounded-2xl border border-white/10 bg-black object-cover"
              src="/dj-flo/optimized/videos/hh-vs-afrobeat.mp4"
              controls
              preload="metadata"
              playsInline
            />
            <video
              className="aspect-[9/16] w-full rounded-2xl border border-white/10 bg-black object-cover"
              src="/dj-flo/optimized/videos/reel-mob-1.mp4"
              controls
              preload="metadata"
              playsInline
            />
          </div>
        </div>
      </section>

      <section className="bg-black px-4 py-10 md:px-8 md:py-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-black uppercase md:text-5xl">{copy.flyers}</h2>
          <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
            {flyers.map((item) => (
              <div
                key={item.src}
                className="relative aspect-[4/5] overflow-hidden rounded-xl border border-white/10 bg-white/[0.03]"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-10 md:px-8 md:py-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-black uppercase md:text-5xl">{copy.photos}</h2>
          <div className="mt-6 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {photos.map((item, index) => (
              <div
                key={item.src}
                className={[
                  "relative aspect-[4/3] overflow-hidden rounded-xl border border-white/10 bg-white/[0.03]",
                  index === 0 ? "lg:col-span-2" : "",
                ].join(" ")}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer
        client={client}
        navigation={navigation}
        homeHref={homeHref}
        galleryHref={getArtistGalleryHref(pressKitEntry.id)}
        videosHref={getArtistVideosHref(pressKitEntry.id)}
      />
    </main>
  );
}
