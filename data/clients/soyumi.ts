import type { PressKitConfig } from "@/data/config";
import type { ClientConfig } from "@/data/clients/types";

const instagramUrl = "https://www.instagram.com/djsoyumi/";
const tikTokUrl = "https://www.tiktok.com/@itssoyumi";
const youtubeUrl = "https://www.youtube.com/@DjSoyumi";
const soundCloudUrl =
  "https://soundcloud.com/djsoyumi?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing";
const soundCloudEmbedUrl =
  "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/djsoyumi&color=%23F3A623&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true";
const bookingEmail = "Soyumi.management@gmail.com";
const whatsappNumber = "+33 7 68 00 08 21";

const soyumiPressKit: PressKitConfig = {
  metadata: {
    title: "Soyumi Press Kit | Afro-Caribbean, Open Format & Global Club Energy",
    description:
      "Discover Soyumi, an international DJ based in Paris, blending Afro-Caribbean roots, global open-format selections and club energy for clubs, festivals, hotels and private events.",
  },
  ui: {
    openMenuLabel: "Open menu",
    closeMenuLabel: "Close menu",
    galleryViewLabel: "View",
    galleryDownloadLabel: "Download",
    galleryCloseLabel: "Close gallery",
    galleryPreviousLabel: "Previous image",
    galleryNextLabel: "Next image",
  },
  artist: {
    name: "Soyumi",
    stageLabel: "International DJ • Paris • Worldwide",
    logo: {
      src: "/soyumi/logo/logo-soyumi-header.jpeg",
      alt: "Soyumi logo",
    },
  },
  navigation: {
    items: [
      { label: "About", href: "#about" },
      { label: "Clubs", href: "#clubs" },
      { label: "Gallery", href: "#gallery" },
      { label: "Videos", href: "#videos" },
      { label: "SoundCloud", href: "#sound" },
    ],
    cta: {
      label: "Book Soyumi",
      href: "#contact",
      variant: "primary",
    },
  },
  heroSocials: [
    { label: "Instagram", href: instagramUrl, icon: "instagram" },
    { label: "YouTube", href: youtubeUrl, icon: "youtube" },
    { label: "TikTok", href: tikTokUrl, icon: "tiktok" },
    { label: "SoundCloud", href: soundCloudUrl, icon: "soundcloud" },
  ],
  heroVariants: {
    impact: {
      eyebrow: "Afro-Caribbean • Open format",
      title: "SOYUMI",
      accent: "DJ",
      description:
        "Soyumi delivers Afro-Caribbean and open-format sets with global influences, driven by an instinctive energy that turns every dancefloor into a powerful, unforgettable moment.",
      layout: "impact",
      image: {
        src: "/soyumi/hero/hero-soyumi.jpeg",
        alt: "Portrait of Soyumi",
        badge: "Soyumi",
        caption: "I don't just play music. I create energy.",
        position: "center 34%",
      },
      ctas: [
        { label: "Book Soyumi", href: "#contact", variant: "primary" },
        { label: "Watch videos", href: "#videos", variant: "secondary" },
      ],
      stats: [
        { value: "PARIS", label: "Based in" },
        { value: "+100", label: "Bookings 2025" },
        { value: "8K", label: "Instagram followers" },
        { value: "AFRO + OPEN", label: "Format" },
      ],
      proofline: "Clubs · Hotels · Festivals · Private events",
    },
    interactive: {
      eyebrow: "International DJ • Paris",
      title: "SOYUMI",
      accent: "LIVE",
      description:
        "Afrobeats, Dancehall, Hip-Hop, House and commercial hits: Soyumi adapts her energy to the room, from sunset lounge moods to peak-time club intensity.",
      layout: "interactive",
      image: {
        src: "/soyumi/hero/hero-soyumi.jpeg",
        alt: "Portrait of Soyumi",
        badge: "Soyumi",
        caption: "Afro-Caribbean roots, global club energy",
        position: "center 34%",
      },
      ctas: [
        { label: "Book Soyumi", href: "#contact", variant: "primary" },
        { label: "Listen", href: "#sound", variant: "secondary" },
      ],
      stats: [
        { value: "SYDNEY", label: "Club experience" },
        { value: "PERTH", label: "Hotels & bars" },
        { value: "BALI", label: "Boat parties" },
        { value: "PARIS", label: "Fashion Week 2026" },
      ],
      proofline: "Crowd connection · Energy control · Reliable performer",
    },
    showcase: {
      eyebrow: "Global open format",
      title: "SOYUMI",
      accent: "ENERGY",
      description:
        "Originally from Paris and shaped by Australia, the Caribbean, Europe and Asia, Soyumi brings a multicultural identity to every performance.",
      layout: "showcase",
      image: {
        src: "/soyumi/hero/hero-soyumi.jpeg",
        alt: "Main Soyumi visual",
        badge: "Soyumi",
        caption: "From lounge to peak-time club",
        position: "center 34%",
      },
      ctas: [
        { label: "Book Soyumi", href: "#contact", variant: "primary" },
        { label: "Gallery", href: "#gallery", variant: "secondary" },
      ],
      stats: [
        { value: "PIONEER", label: "DDJ-SR2 / Serato" },
        { value: "8K", label: "Instagram followers" },
        { value: "+100", label: "Bookings 2025" },
        { value: "OPEN FORMAT", label: "Club & lounge" },
      ],
      proofline: "Paris · Sydney · Perth · Bali · Guadeloupe",
      footerNote: "A natural stage presence built around connection.",
    },
  },
  about: {
    eyebrow: "About",
    title: "Afro-Caribbean roots,\nglobal open-format energy.",
    signatureLabel: "Signature",
    signatureQuote: "I shape the room from the first track.",
    supportingText:
      "Soyumi builds connection, emotion and momentum on the dancefloor.",
    tags: [
      "Afrobeats",
      "Afrohouse",
      "Dancehall",
      "Shatta",
      "Hip-Hop",
      "R&B",
      "House",
      "Open Format",
    ],
    paragraphs: [
      "Soyumi is an international DJ with Afro-Caribbean roots, shaped by global sounds and contemporary club culture.",
      "Originally from Paris and shaped by her journey across Australia, the Caribbean, Europe and Asia, she brings a unique multicultural identity to every performance.",
      "Her sound moves naturally between Afrobeats, Dancehall, Hip-Hop, House and commercial hits, allowing her to adapt to any crowd and atmosphere.",
      "Known for her crowd-reading skills and natural stage presence, Soyumi builds connection in real time, from the first warm-up track to peak-hour moments.",
    ],
  },
  clubs: {
    eyebrow: "Clubs & experience",
    title: "From Sydney to Paris,\nenergy made for every stage.",
    description:
      "Soyumi has performed across clubs, hotels, festivals and private events, with a versatile approach that moves from warm lounge atmospheres to peak-time club energy.",
    itemIconOverrides: {
      "🇬🇵": {
        src: "/soyumi/drapeau/drapeau-guadeloupe-independantiste-.webp",
        alt: "Drapeau Guadeloupe",
      },
    },
    regions: [
      {
        title: "Paris",
        icon: "map-pin",
        items: [
          "🇫🇷 Buddha Bar, Paris",
          "🇫🇷 El Sueno, Paris",
          "🇫🇷 FMR, Paris",
          "🇫🇷 Paris Fashion Week 2026",
        ],
      },
      {
        title: "International",
        icon: "globe",
        items: [
          "🇦🇺 Hilton, Sydney",
          "🇦🇺 Argyle, Sydney",
          "🇦🇺 ZeTa Bar, Sydney",
          "🇦🇺 Le Noir, Sydney",
          "🇦🇺 Alcatraz, Sydney",
          "🇦🇺 Dutty Dancing, Sydney",
          "🇦🇺 DoubleTree by Hilton, Perth",
          "🇦🇺 Geisha Bar, Perth",
          "🇦🇺 237, Townsville",
          "🇦🇺 Mama Africa, Airlie Beach",
          "🇦🇺 Mandalay Cruise, Airlie Beach",
          "🇦🇺 Festival, Bowen",
          "🇮🇩 BeatBoat Bali",
          "🇬🇵 Karacoli, Guadeloupe",
          "🇬🇵 QG, Guadeloupe",
        ],
      },
    ],
  },
  sound: {
    eyebrow: "SoundCloud",
    title: "Soyumi on SoundCloud",
    paragraphs: [
      "Soyumi's SoundCloud gives direct access to her world: Afro-Caribbean, club-driven, open format and designed to keep the energy flowing without locking the set into one single sound.",
      "It is the ideal entry point to feel how she connects audiences, rhythms and the different moments of a night.",
    ],
    cta: {
      label: "Listen on SoundCloud",
      href: soundCloudUrl,
      external: true,
    },
    embedTitle: "Soyumi SoundCloud player",
    embedUrl: soundCloudEmbedUrl,
  },
  videos: {
    eyebrow: "Videos",
    title: "Soyumi live",
    description:
      "A selection of clips to step into Soyumi's energy: presence behind the decks, crowd movement and club atmosphere.",
    items: [
      {
        id: "soyumi-video-1",
        title: "Live clip 01",
        description: "A live clip focused on crowd movement and stage presence.",
        src: "/soyumi/videos/video-soyumi-1.mp4",
        poster: "/soyumi/videos/video-soyumi-1-poster.png",
      },
      {
        id: "soyumi-video-2",
        title: "Live clip 02",
        description: "A short club moment showing Soyumi behind the decks.",
        src: "/soyumi/videos/video-soyumi-2.mp4",
        poster: "/soyumi/videos/video-soyumi-2-poster.png",
      },
      {
        id: "soyumi-video-3",
        title: "Live clip 03",
        description: "An excerpt built around rhythm, transitions and room energy.",
        src: "/soyumi/videos/video-soyumi-3.mp4",
        poster: "/soyumi/videos/video-soyumi-3-poster.png",
      },
      {
        id: "soyumi-video-4",
        title: "Live clip 04",
        description: "A final live glimpse into Soyumi's open-format universe.",
        src: "/soyumi/videos/video-soyumi-4.mp4",
        poster: "/soyumi/videos/video-soyumi-4-poster.png",
      },
    ],
  },
  spotify: {
    eyebrow: "Spotify",
    title: "Soyumi playlists",
    description: "A direct entry point into Soyumi's current listening world.",
    playlists: [],
    badgeLabel: "Soyumi playlists",
  },
  brands: {
    eyebrow: "Formats",
    title: "A reliable DJ,\nbuilt for diverse audiences.",
    intro:
      "Soyumi fits naturally into clubs, hotels, festivals, private parties and event formats that require real crowd awareness.",
    supportingText:
      "Her value: strong crowd connection, clear energy control, international experience and the ability to create the right atmosphere.",
    categories: ["Clubs", "Hotels", "Festivals", "Private events"],
    itemLabel: "Compatible formats",
    items: [],
  },
  contact: {
    eyebrow: "Contact",
    title: "Booking & inquiries.",
    description:
      "For club dates, festivals, private events, hotel formats or media inquiries, contact Soyumi's management.",
    methods: [
      {
        label: "WhatsApp",
        value: whatsappNumber,
        href: "https://wa.me/33768000821",
        icon: "whatsapp",
        external: true,
      },
      {
        label: "Email",
        value: bookingEmail,
        href: `mailto:${bookingEmail}`,
        icon: "mail",
      },
      {
        label: "Instagram",
        value: "@djsoyumi",
        href: instagramUrl,
        icon: "instagram",
        external: true,
      },
    ],
  },
  gallery: {
    eyebrow: "Gallery",
    title: "Gallery",
    description:
      "A selection of press and live visuals showing Soyumi's world, from portraits to DJ energy and club aesthetics.",
    homepageTitle: "Visual world",
    homepageCtaLabel: "Open gallery",
    images: [
      {
        src: "/soyumi/gallery/gallery-soyumi-1.jpeg",
        alt: "Soyumi behind the decks",
        size: "md:col-span-2",
        position: "center 44%",
        previewScale: 1.08,
      },
      {
        src: "/soyumi/gallery/gallery-soyumi-2.jpeg",
        alt: "Portrait of Soyumi",
        position: "center 30%",
      },
      {
        src: "/soyumi/gallery/gallery-soyumi-3.jpeg",
        alt: "Soyumi live",
        position: "center 32%",
      },
      {
        src: "/soyumi/gallery/gallery-soyumi-4.jpeg",
        alt: "Soyumi DJ set",
      },
      {
        src: "/soyumi/gallery/gallery-soyumi-5.jpeg",
        alt: "Soyumi club scene",
        size: "md:col-span-2",
      },
      {
        src: "/soyumi/gallery/gallery-soyumi-6.jpeg",
        alt: "Soyumi performance",
      },
      {
        src: "/soyumi/gallery/gallery-soyumi-7.jpeg",
        alt: "Soyumi press portrait",
      },
      {
        src: "/soyumi/gallery/gallery-soyumi-8.jpeg",
        alt: "Soyumi live atmosphere",
      },
      {
        src: "/soyumi/gallery/gallery-soyumi-9.jpeg",
        alt: "Soyumi club energy",
      },
    ],
  },
  footer: {
    availabilityText:
      "Available for clubs, festivals, private events and hospitality formats.",
    navigationLabel: "Navigation",
    socialLabel: "Socials",
    bookingLabel: "Booking",
    fullGalleryLabel: "Full gallery",
    allVideosLabel: "All videos",
  },
};

export const soyumiClient: ClientConfig = {
  slug: "soyumi",
  domain: "soyumi.presskit.fr",
  vercelSubdomain: "soyumi.vercel.app",
  name: "Soyumi",
  tagline: "International DJ • Afro-Caribbean • Paris & worldwide",
  city: "Paris",
  country: "France",
  category: "International DJ / open format / Afro-Caribbean",
  description: soyumiPressKit.metadata.description,
  longBio: soyumiPressKit.about.paragraphs.join(" "),
  heroImage: "/soyumi/hero/hero-soyumi.jpeg",
  gallery: soyumiPressKit.gallery.images,
  socials: {
    instagram: instagramUrl,
    soundCloud: soundCloudUrl,
    tikTok: tikTokUrl,
    website: youtubeUrl,
  },
  contact: {
    email: bookingEmail,
    phone: whatsappNumber,
    city: "Paris",
    country: "France",
  },
  services: [
    {
      title: "Clubs & festivals",
      description:
        "High-energy open-format sets designed to build a strong crowd connection and keep the dancefloor moving.",
    },
    {
      title: "Hotels & lounge",
      description:
        "Flexible selections that can move from sunset or lounge atmospheres into a full club build-up.",
    },
    {
      title: "Private events",
      description:
        "A reliable, professional and international approach for private parties, brands and tailor-made events.",
    },
  ],
  testimonials: [],
  bookingEmail,
  seo: {
    title: soyumiPressKit.metadata.title,
    description: soyumiPressKit.metadata.description,
    keywords: [
      "Soyumi",
      "DJ Soyumi",
      "DJ Paris",
      "Afro-Caribbean DJ",
      "open format DJ",
      "booking DJ Paris",
      "international DJ",
    ],
    ogImage: "/opengraph-image",
    canonical: "https://soyumi.presskit.fr/",
  },
  defaultTheme: "labringue",
  defaultVariant: "impact",
  pressKit: soyumiPressKit,
};
