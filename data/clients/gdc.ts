import type { PressKitConfig } from "@/data/config";
import type { ClientConfig } from "@/data/clients/types";

const instagramUrl = "https://www.instagram.com/DjGdc/";
const tikTokUrl = "https://www.tiktok.com/@DjGdc";
const soundCloudUrl = "https://soundcloud.com/dj-gdc";
const bondaYoutubeUrl = "https://youtu.be/Cp5KHEQrPmY";
const soundCloudEmbedUrl =
  "https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Fusers%2F5715897&show_artwork=true";
const bookingEmail = "deejaygdc@gmail.com";
const heroImage = "/GDC/gallerie/gallerie-1.jpeg";

const gallery = [
  {
    src: "/GDC/gallerie/gallerie-1.jpeg",
    alt: "DJ GDC portrait press kit",
    size: "md:col-span-2",
    position: "center 28%",
  },
  {
    src: "/GDC/gallerie/gallerie-2-cropped.jpeg",
    alt: "DJ GDC portrait studio",
    position: "center 22%",
  },
  {
    src: "/GDC/gallerie/gallerie-3.jpeg",
    alt: "DJ GDC visual artiste",
    position: "center 26%",
  },
  {
    src: "/GDC/gallerie/gallerie-4.jpeg",
    alt: "DJ GDC ambiance press kit",
    position: "center 28%",
  },
  {
    src: "/GDC/gallerie/gallerie-5.jpeg",
    alt: "DJ GDC portrait",
    size: "md:col-span-2",
    position: "center 25%",
  },
];

const gdcPressKit: PressKitConfig = {
  metadata: {
    title: "DJ GDC | Press kit DJ open format à Paris",
    description:
      "Découvrez DJ GDC, DJ open format basé à Paris, 20 ans d'expérience en clubs, restaurants festifs et événements privés, entre Hip-Hop, Dancehall, Amapiano, AfroHouse, Zouk, Kompa et Gouyad.",
  },
  ui: {
    openMenuLabel: "Ouvrir le menu",
    closeMenuLabel: "Fermer le menu",
    galleryViewLabel: "Voir",
    galleryDownloadLabel: "Télécharger",
    galleryCloseLabel: "Fermer la galerie",
    galleryPreviousLabel: "Image précédente",
    galleryNextLabel: "Image suivante",
  },
  artist: {
    name: "DJ GDC",
    stageLabel: "DJ open format - Paris - France & international",
    logo: {
      src: "/GDC/logo/logo_GDC_transparent.png",
      alt: "DJ GDC",
      invert: true,
      showInHero: false,
    },
  },
  navigation: {
    items: [
      { label: "À propos", href: "#about" },
      { label: "Références", href: "#clubs" },
      { label: "Galerie", href: "#gallery" },
      { label: "Vidéos", href: "#videos" },
      { label: "Prod", href: "#youtube" },
      { label: "SoundCloud", href: "#sound" },
      { label: "Contact", href: "#contact" },
    ],
    cta: {
      label: "Booking",
      href: "#contact",
      variant: "primary",
    },
  },
  heroSocials: [
    { label: "Instagram", href: instagramUrl, icon: "instagram" },
    { label: "TikTok", href: tikTokUrl, icon: "tiktok" },
    { label: "SoundCloud", href: soundCloudUrl, icon: "soundcloud" },
  ],
  heroVariants: {
    impact: {
      eyebrow: "Hip-Hop - Dancehall - Amapiano - AfroHouse",
      title: "DJ",
      accent: "GDC",
      description:
        "20 ans de scène. Du Dancehall au Zouk, du Hip-Hop à l'Amapiano — GDC garde la piste en pétard.",
      layout: "impact",
      image: {
        src: heroImage,
        alt: "DJ GDC hero visual",
        badge: "DJ GDC - Paris - Worldwide",
        caption: "DJ & producteur",
        position: "center 25%",
      },
      ctas: [
        { label: "Booker DJ GDC", href: "#contact", variant: "primary" },
        { label: "Écouter", href: "#sound", variant: "secondary" },
      ],
      stats: [
        { value: "20 ANS", label: "Expérience" },
        { value: "PARIS", label: "Base" },
        { value: "FR + INTL", label: "Scènes" },
        { value: "OPEN FORMAT", label: "Signature" },
      ],
      proofline: "France - Angleterre - Jamaïque - Guadeloupe",
    },
    interactive: {
      eyebrow: "Groove - chaleur - dancefloor",
      title: "DJ GDC",
      accent: "LIVE",
      description:
        "Des années 80 à aujourd'hui, des musiques latines à l'Afrique, de la House à la chanson française, DJ GDC construit des sets qui gardent le public en mouvement.",
      layout: "interactive",
      image: {
        src: heroImage,
        alt: "DJ GDC live visual",
        badge: "Open format - Groove specialist",
        caption: "Hip-Hop, Dancehall, Amapiano, Reggaeton",
        position: "center 25%",
      },
      ctas: [
        { label: "Voir les vidéos", href: "#videos", variant: "primary" },
        { label: "Galerie", href: "#gallery", variant: "secondary" },
      ],
      stats: [
        { value: "DANCEHALL", label: "Club" },
        { value: "FUNK", label: "Groove" },
        { value: "HIP-HOP", label: "Culture" },
        { value: "AFROHOUSE", label: "Mouvement" },
      ],
      proofline: "Chaleureux - festif - En pétard",
    },
    showcase: {
      eyebrow: "DJ open format - Paris",
      title: "DJ GDC",
      accent: "GROOVE",
      description:
        "À l'aise dans tous les styles et devant tous les publics, DJ GDC fait voyager la piste entre urban, afro-caribéen, latin, house et classiques fédérateurs.",
      layout: "showcase",
      image: {
        src: heroImage,
        alt: "DJ GDC press photo",
        badge: "20 ans de scène",
        caption: "Paris, France et international",
        position: "center 25%",
      },
      ctas: [
        { label: "Contact", href: "#contact", variant: "primary" },
        { label: "Références", href: "#clubs", variant: "secondary" },
      ],
      stats: [
        { value: "CLUBS", label: "Nightlife" },
        { value: "RESTOS", label: "Festifs" },
        { value: "EVENTS", label: "Publics variés" },
        { value: "WORLD", label: "International" },
      ],
      footerNote: "La musique comme terrain commun.",
    },
  },
  about: {
    eyebrow: "Bio",
    title: "20 ans de scène,\nDJ & producteur.",
    signatureLabel: "Signature",
    signatureQuote: "DJ & producteur.",
    supportingText:
      "Un DJ open format basé à Paris, chaleureux, festif et connecté au groove.",
    tags: [
      "Hip-Hop",
      "Dancehall",
      "Amapiano",
      "Pop urbaine",
      "Reggaeton",
      "AfroHouse",
      "Zouk",
      "Kompa",
      "Gouyad",
      "Funk",
    ],
    paragraphs: [
      "Fort de 20 années d'expérience, DJ GDC est un DJ basé à Paris qui se produit partout en France et dans le monde pour partager une culture musicale ouverte et fédératrice.",
      "Ses influences sont riches et ouvertes: des années 80 à aujourd'hui, des musiques latines aux musiques d'Afrique, de la House à la chanson française.",
      "Ce qu'il préfère avant tout, ce sont les sons qui groovent: Dancehall, Funk, Hip-Hop, mais aussi Amapiano, Pop urbaine, Reggaeton, AfroHouse, Zouk, Kompa et Gouyad.",
      "À l'aise dans tous les styles et devant tous les publics, DJ GDC construit des shows live chaleureux, festifs et en pétard.",
    ],
  },
  clubs: {
    eyebrow: "Références",
    title: "Clubs, restaurants festifs\net scènes internationales.",
    description:
      "DJ GDC a construit son expérience entre discothèques d'Île-de-France, restaurants festifs, dates en province et bookings internationaux.",
    regions: [
      {
        title: "Île-de-France",
        icon: "map-pin",
        items: [
          "L'Acropole",
          "Metropolis",
          "Le Boer II",
          "Le Village Rvsse",
          "Le 911",
          "Le Grey Club",
          "Le Twenty One Sound Bar",
          "Wanderlust",
          "Sunday Groove",
          "Balajo",
          "Tout le monde en parle",
          "Restaurants festifs",
        ],
      },
      {
        title: "France & international",
        icon: "globe",
        items: [
          "Dates en province",
          "Angleterre",
          "Jamaïque",
          "Guadeloupe",
          "Bookings France et monde",
        ],
      },
    ],
  },
  sound: {
    eyebrow: "Son",
    title: "DJ GDC sur SoundCloud.",
    paragraphs: [
      "Le SoundCloud de DJ GDC permet d'entrer dans son univers musical: un open format groovy, urbain, afro-caribéen et festif.",
      "Entre Dancehall, Hip-Hop, Amapiano, Reggaeton, AfroHouse, Zouk, Kompa et Gouyad, la sélection est pensée pour faire bouger tous les publics.",
    ],
    cta: {
      label: "Écouter sur SoundCloud",
      href: soundCloudUrl,
      variant: "primary",
      external: true,
    },
    embedTitle: "DJ GDC SoundCloud player",
    embedUrl: soundCloudEmbedUrl,
  },
  videos: {
    eyebrow: "Vidéos",
    title: "DJ GDC en live.",
    description:
      "Une immersion dans quelques moments de soirées, de clubs et de sets avec DJ GDC.",
    items: [
      {
        id: "gdc-video-1",
        title: "Extrait live 01",
        description: "Un moment live taillé pour le dancefloor.",
        src: "/GDC/videos/video-1.mp4",
        poster: "/GDC/videos/cover-video1.png",
        aspect: "portrait",
      },
      {
        id: "gdc-video-2",
        title: "Extrait live 02",
        description: "DJ GDC en situation, au contact du public.",
        src: "/GDC/videos/video-2.mp4",
        poster: "/GDC/videos/cover-video2.png",
        aspect: "portrait",
      },
      {
        id: "gdc-video-5",
        title: "Extrait live 05",
        description: "Un aperçu de l'univers festif et groovy de DJ GDC.",
        src: "/GDC/videos/video-5.mp4",
        poster: "/GDC/videos/video-cover5.png",
        aspect: "portrait",
      },
      {
        id: "gdc-video-4",
        title: "Extrait live 04",
        description: "Format court pour ressentir la dynamique du set.",
        src: "/GDC/videos/video-4.mp4",
        aspect: "portrait",
      },
    ],
  },
  youtube: {
    eyebrow: "Production",
    title: "Bonda feat. Chabsy",
    description:
      "Avec Bonda feat. Chabsy, DJ GDC affirme aussi sa facette producteur.",
    items: [
      {
        id: "gdc-bonda-chabsy",
        source: "youtube",
        title: "Bonda feat. Chabsy",
        description: "Single produit par DJ GDC.",
        embedUrl: "https://www.youtube.com/embed/Cp5KHEQrPmY",
        aspect: "landscape",
      },
    ],
    cta: {
      label: "Voir sur YouTube",
      href: bondaYoutubeUrl,
      variant: "primary",
      external: true,
    },
  },
  spotify: {
    eyebrow: "Spotify",
    title: "Spotify",
    description: "",
    playlists: [],
    badgeLabel: "Playlist",
  },
  brands: {
    eyebrow: "",
    title: "",
    intro: "",
    supportingText: "",
    categories: [],
    itemLabel: "Single",
    items: [],
  },
  contact: {
    eyebrow: "Contact",
    title: "Booking et demandes.",
    description:
      "Pour une date en club, un restaurant festif, un événement privé, une collaboration ou une demande professionnelle.",
    methods: [
      {
        label: "Email",
        value: bookingEmail,
        href: `mailto:${bookingEmail}`,
        icon: "mail",
      },
      {
        label: "Instagram",
        value: "@DjGdc",
        href: instagramUrl,
        icon: "instagram",
        external: true,
      },
      {
        label: "WhatsApp",
        value: "+33 6 89 89 96 07",
        href: "https://wa.me/33689899607",
        icon: "whatsapp",
        external: true,
      },
    ],
  },
  gallery: {
    eyebrow: "Galerie",
    title: "Galerie",
    description:
      "Sélection de visuels pour présenter l'univers de DJ GDC: portraits, attitude DJ et press kit.",
    homepageTitle: "Univers visuel",
    homepageCtaLabel: "Ouvrir la galerie",
    images: gallery,
  },
};

export const gdcClient: ClientConfig = {
  slug: "gdc",
  domain: "gdc.presskit.fr",
  vercelSubdomain: "gdc.vercel.app",
  name: "DJ GDC",
  tagline: "DJ open format - Paris - France & international",
  city: "Paris",
  country: "France",
  category: "DJ open format / Hip-Hop / Dancehall / AfroHouse",
  description:
    "DJ GDC, basé à Paris avec 20 ans d'expérience, entre Hip-Hop, Dancehall, Amapiano, Reggaeton, AfroHouse, Zouk, Kompa et Gouyad.",
  longBio: gdcPressKit.about.paragraphs.join(" "),
  heroImage,
  gallery,
  socials: {
    instagram: instagramUrl,
    tikTok: tikTokUrl,
    soundCloud: soundCloudUrl,
  },
  contact: {
    email: bookingEmail,
    phone: "+33 6 89 89 96 07",
    city: "Paris",
    country: "France",
  },
  services: [
    {
      title: "Club bookings",
      description:
        "Sets open format groovy pour clubs, dancefloors et publics variés.",
    },
    {
      title: "Restaurants festifs",
      description:
        "Ambiances chaleureuses, festives et en pétard pour lieux lifestyle et formats dîner-club.",
    },
    {
      title: "Événements privés",
      description:
        "Sélection sur mesure entre Hip-Hop, Dancehall, Amapiano, AfroHouse, Zouk, Kompa et Reggaeton.",
    },
  ],
  testimonials: [
    {
      quote:
        "Une sélection large, une vraie culture musicale et une connexion rapide avec la salle.",
      author: "Booker nightlife",
      role: "Paris",
    },
  ],
  bookingEmail,
  seo: {
    title: gdcPressKit.metadata.title,
    description: gdcPressKit.metadata.description,
    keywords: [
      "GDC",
      "DJ GDC",
      "DJ Paris",
      "DJ open format Paris",
      "DJ Dancehall",
      "DJ Hip-Hop",
      "DJ Amapiano",
      "DJ AfroHouse",
      "DJ Zouk Kompa",
      "booking DJ Paris",
      "press kit DJ",
    ],
    ogImage: "/GDC/gallerie/gallerie-1.jpeg",
    canonical: "https://gdc.presskit.fr/",
  },
  defaultTheme: "violet",
  defaultVariant: "impact",
  pressKit: gdcPressKit,
};
