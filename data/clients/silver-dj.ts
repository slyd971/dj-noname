import type { PressKitConfig } from "@/data/config";
import type { ClientConfig } from "@/data/clients/types";

const soundCloudUrl =
  "https://soundcloud.com/silver-dj-305204022?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing";
const soundCloudEmbedUrl =
  "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/silver-dj-305204022&color=%2319b46b&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true";
const instagramUrl = "https://www.instagram.com/slvr_dj/";
const tikTokUrl = "https://www.tiktok.com/@slvr_dj";
const youtubeChannelUrl =
  "https://www.youtube.com/channel/UCuH8Wy4BwCt_vGExn_xZEVA?app=desktop";
const spotifyUrl =
  "https://open.spotify.com/playlist/37i9dQZF1E4yYwPTq3OA1m?utm_source=generator&theme=0";
const appleMusicUrl =
  "https://podcasts.apple.com/ci/podcast/silver-dj-slvr-dj/id1755049366";

const silverDjPressKit: PressKitConfig = {
  metadata: {
    title: "Silver DJ Dossier de presse | Open Format, Afro, House & Énergie Club",
    description:
      "Découvrez Silver DJ, DJ open format basé à Abidjan, entre Afro, House, Hip-Hop et énergie club pour dates, marques et événements privés.",
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
    name: "Silver DJ",
    stageLabel: "DJ open format • Abidjan • Cote d'Ivoire & international",
    logo: {
      src: "",
      alt: "Silver DJ logo",
    },
  },
  navigation: {
    items: [
      { label: "À propos", href: "#about" },
      { label: "Expérience", href: "#clubs" },
      { label: "Galerie", href: "#gallery" },
      { label: "Vidéos", href: "#videos" },
      { label: "SoundCloud", href: "#sound" },
      { label: "Spotify", href: "#spotify" },
    ],
    cta: {
      label: "Book Silver",
      href: "#contact",
      variant: "primary",
    },
  },
  heroSocials: [
    { label: "Instagram", href: instagramUrl, icon: "instagram" },
    { label: "TikTok", href: tikTokUrl, icon: "tiktok" },
    { label: "YouTube", href: youtubeChannelUrl, icon: "youtube" },
    { label: "Spotify", href: spotifyUrl, icon: "spotify" },
    { label: "SoundCloud", href: soundCloudUrl, icon: "soundcloud" },
    { label: "Apple Music", href: appleMusicUrl, icon: "apple-music" },
  ],
  heroVariants: {
    impact: {
      eyebrow: "Open format • Abidjan",
      title: "SILVER",
      accent: "DJ",
      description:
        "Afro. House. Hip-Hop. Énergie pure. Silver DJ transforme chaque événement en expérience mémorable pour clubs, marques et formats privés haut de gamme.",
      layout: "impact",
      image: {
        src: "/silver-dj/hero-silverdj.png",
        alt: "Visuel principal de Silver DJ",
        badge: "Silver DJ",
        caption: "From Africa to the World",
      },
      ctas: [
        { label: "Book Silver", href: "#contact", variant: "primary" },
        { label: "Voir vidéos", href: "#videos", variant: "secondary" },
      ],
      stats: [
        { value: "27K", label: "TikTok" },
        { value: "13K", label: "Instagram" },
        { value: "3X", label: "Champion DMC Afrique" },
        { value: "VICE-CHAMPION", label: "DMC Monde" },
      ],
      proofline:
        "Clubs · Événements privés · Dates internationales",
    },
    interactive: {
      eyebrow: "Expérience live • Abidjan",
      title: "SILVER",
      accent: "DJ",
      description:
        "Afro. House. Hip-Hop. Énergie pure. Silver DJ signe des expériences mémorables pour clubs, marques et formats privés haut de gamme.",
      layout: "interactive",
      image: {
        src: "/silver-dj/hero-silverdj.png",
        alt: "Visuel live de Silver DJ",
        badge: "Silver DJ",
        caption: "From Africa to the World",
      },
      ctas: [
        { label: "Book Silver", href: "#contact", variant: "primary" },
        { label: "Voir vidéos", href: "#videos", variant: "secondary" },
      ],
      stats: [
        { value: "27K", label: "TikTok" },
        { value: "13K", label: "Instagram" },
        { value: "3X", label: "Champion DMC Afrique" },
        { value: "VICE-CHAMPION", label: "DMC Monde" },
      ],
      proofline:
        "Clubs · Événements privés · Dates internationales",
    },
    showcase: {
      eyebrow: "DJ open format • Abidjan",
      title: "SILVER",
      accent: "DJ",
      description:
        "Afro. House. Hip-Hop. Énergie pure. Silver DJ transforme chaque événement en expérience mémorable pour clubs, marques et formats privés haut de gamme.",
      layout: "showcase",
      image: {
        src: "/silver-dj/hero-silverdj.png",
        alt: "Visuel de performance de Silver DJ",
        badge: "Silver DJ",
        caption: "From Africa to the World",
      },
      ctas: [
        { label: "Book Silver", href: "#contact", variant: "primary" },
        { label: "Voir vidéos", href: "#videos", variant: "secondary" },
      ],
      stats: [
        { value: "27K", label: "TikTok" },
        { value: "13K", label: "Instagram" },
        { value: "3X", label: "Champion DMC Afrique" },
        { value: "VICE-CHAMPION", label: "DMC Monde" },
      ],
      proofline:
        "Clubs · Événements privés · Dates internationales",
      footerNote: "Une énergie pensée pour les publics qui veulent vivre le moment.",
    },
  },
  about: {
    eyebrow: "À propos",
    title: "Exporter la culture africaine,\nà travers le monde",
    signatureLabel: "Positionnement",
    signatureQuote:
      "Silver DJ joue pour connecter: lire la salle, créer la montée et laisser une vraie trace après le set.",
    supportingText:
      "Son univers part d'Abidjan et circule entre clubs, événements privés, compétitions DJ et formats internationaux.",
    tags: [
      "Open Format",
      "Afro",
      "House",
      "Hip-Hop",
      "Club",
      "Événements de marque",
    ],
    paragraphs: [
      "Silver DJ avance avec une énergie directe: des sets ouverts, une vraie présence aux platines et une culture musicale qui passe naturellement de l'Afro à la House, du Hip-Hop aux sons club.",
      "Champion DMC Afrique à plusieurs reprises et vice-champion DMC Monde, il apporte autant de technique que d'instinct dans ses performances.",
      "Sur scène, son objectif reste simple: comprendre le public, garder la tension juste et transformer chaque date en moment vivant.",
    ],
  },
  clubs: {
    eyebrow: "Expérience",
    title: "Des scènes, des formats,\nun même sens du public.",
    description:
      "Silver DJ navigue entre clubs, soirées privées, scènes compétitives et rendez-vous internationaux avec une même exigence: faire monter l'énergie sans perdre le lien avec la salle.",
    regions: [
      {
        title: "Afrique",
        icon: "map-pin",
        items: ["BLOOM", "DESPE SECRET PARTY"],
      },
      {
        title: "International",
        icon: "globe",
        items: ["Japon"],
      },
    ],
  },
  sound: {
    eyebrow: "Son",
    title: "À l'écoute.",
    paragraphs: [
      "Ses sélections gardent cette couleur open format: des rythmes afro, des textures house, des passages hip-hop et une approche pensée pour faire bouger sans enfermer le set dans une seule case.",
      "Le SoundCloud permet d'entrer directement dans son univers et de sentir comment il construit l'ambiance avant même la première prise de contact.",
    ],
    cta: {
      label: "Écouter sur SoundCloud",
      href: soundCloudUrl,
      external: true,
    },
    embedTitle: "Player SoundCloud de Silver DJ",
    embedUrl: soundCloudEmbedUrl,
  },
  videos: {
    eyebrow: "Vidéos",
    title: "Extraits vidéo.",
    description:
      "Chaque extrait montre Silver DJ au plus près du public: les transitions, l'énergie aux platines et cette façon de tenir une salle jusqu'au dernier morceau.",
    items: [
      {
        id: "silver-dj-video-1",
        title: "Extrait live 01",
        description: "",
        src: "/silver-dj/videos/video-sliverdj-1.mp4",
        poster: "/silver-dj/videos/video-sliverdj-1-poster.jpg",
      },
      {
        id: "silver-dj-video-2",
        title: "Extrait live 02",
        description: "",
        src: "/silver-dj/videos/videos-silverdj-2.mp4",
        poster: "/silver-dj/videos/videos-silverdj-2-poster.jpg",
      },
      {
        id: "silver-dj-video-3",
        title: "Extrait live 03",
        description: "",
        src: "/silver-dj/videos/videos-silverdj-3.mp4",
        poster: "/silver-dj/videos/videos-silverdj-3-poster.jpg",
      },
    ],
  },
  spotify: {
    eyebrow: "Spotify",
    title: "Radio Silver",
    description:
      "Une sélection Spotify intégrée directement au dossier de presse pour donner un aperçu immédiat de l'univers musical de Silver DJ.",
    playlists: [
      {
        id: "silver-radio",
        title: "Radio Silver",
        embedUrl:
          "https://open.spotify.com/embed/playlist/37i9dQZF1E4yYwPTq3OA1m?utm_source=generator&theme=0",
      },
    ],
    badgeLabel: "Sélection Silver DJ",
  },
  brands: {
    eyebrow: "Brand show",
    title: "Une présence claire,\npensée pour les formats marque.",
    intro:
      "Silver DJ peut porter un moment de marque sans le rendre froid: une énergie club, un sens du rythme et une image assez nette pour accompagner des formats lifestyle, culture ou nightlife.",
    supportingText:
      "L'idée: créer un show qui garde l'identité de l'événement tout en donnant au public une vraie raison de rester, filmer, danser et partager.",
    categories: ["Vie nocturne", "Mode", "Art de vivre", "Culture"],
    itemLabel: "Univers compatibles",
    items: [],
    fit: {
      eyebrow: "Pourquoi Silver DJ",
      title: "Technique, présence et lecture du public.",
      points: [
        "Une image forte, facile à intégrer dans un dispositif événementiel",
        "Une culture musicale large pour s'adapter au public sans perdre son identité",
        "Une expérience de compétition qui apporte précision, impact et maîtrise",
      ],
    },
  },
  contact: {
    eyebrow: "Contact",
    title: "Booking & Demandes.",
    description:
      "Pour une date club, un événement privé, un brand show ou une demande média, contactez Silver DJ directement via les liens ci-dessous.",
    methods: [
      {
        label: "WhatsApp",
        value: "(+225)07.87.87.97.80",
        href: "https://wa.me/2250787879780",
        icon: "whatsapp",
        external: true,
      },
      {
        label: "Instagram",
        value: "@slvr_dj",
        href: instagramUrl,
        icon: "instagram",
        external: true,
      },
      {
        label: "TikTok",
        value: "@slvr_dj",
        href: tikTokUrl,
        icon: "tiktok",
        external: true,
      },
      {
        label: "YouTube",
        value: "Chaîne Silver DJ",
        href: youtubeChannelUrl,
        icon: "youtube",
        external: true,
      },
      {
        label: "SoundCloud",
        value: "Profil officiel",
        href: soundCloudUrl,
        icon: "music",
        external: true,
      },
    ],
  },
  gallery: {
    eyebrow: "Galerie",
    title: "Galerie",
    description:
      "Une sélection d'images entre scène, compétition et moments de public pour donner un aperçu plus concret de l'univers Silver DJ.",
    homepageTitle: "Univers visuel",
    homepageCtaLabel: "Ouvrir la galerie",
    images: [
      {
        src: "/silver-dj/gallery/silverdj-champion-1.jpg",
        alt: "Portrait champion de Silver DJ",
        size: "md:col-span-2",
        position: "center 22%",
      },
      {
        src: "/silver-dj/gallery/silverdj-bloom-1.jpg",
        alt: "Silver DJ en live au Bloom",
        position: "center 18%",
      },
      {
        src: "/silver-dj/gallery/silverdj-dmc-selection-1.jpg",
        alt: "Sélection DMC de Silver DJ",
        position: "center 24%",
      },
      {
        src: "/silver-dj/gallery/silverdj-BSFS-1.jpg",
        alt: "Portrait live de Silver DJ",
      },
      {
        src: "/silver-dj/gallery/silverdj-champion-2.jpg",
        alt: "Silver DJ moment victoire",
        size: "md:col-span-2",
      },
      {
        src: "/silver-dj/gallery/silverdj-bloom-2.jpg",
        alt: "Public du Bloom avec Silver DJ",
      },
      {
        src: "/silver-dj/gallery/silverdj-BSFS-2.jpg",
        alt: "Silver DJ en performance",
      },
      {
        src: "/silver-dj/gallery/silverdj-BSFS-3.jpg",
        alt: "Silver DJ scène club",
      },
      {
        src: "/silver-dj/gallery/silverdj-champion-3.jpg",
        alt: "Silver DJ en coulisses",
      },
      {
        src: "/silver-dj/gallery/silverdj-champion-4.jpg",
        alt: "Performance de compétition de Silver DJ",
      },
      {
        src: "/silver-dj/gallery/silverdj-dmc-selection-2.jpg",
        alt: "Silver DJ platines",
      },
      {
        src: "/silver-dj/gallery/silverj-babiland-1.jpg",
        alt: "Silver DJ en live à Babiland",
      },
      {
        src: "/silver-dj/gallery/silverj-babiland-2.jpg",
        alt: "Public de Babiland avec Silver DJ",
      },
    ],
  },
};

export const silverDjClient: ClientConfig = {
  slug: "silver-dj",
  domain: "silver-dj.presskit.fr",
  vercelSubdomain: "silver-dj.vercel.app",
  domainAliases: [
    "silver-dj-slyd971s-projects.vercel.app",
    "silver-dj-git-main-slyd971s-projects.vercel.app",
  ],
  name: "Silver DJ",
  tagline: "DJ open format • Abidjan • Cote d'Ivoire & international",
  city: "Abidjan",
  country: "Cote d'Ivoire",
  category: "DJ open format / dossier de presse en préparation",
  description: silverDjPressKit.metadata.description,
  longBio: silverDjPressKit.about.paragraphs.join(" "),
  heroImage: "/silver-dj/hero-silverdj.png",
  gallery: silverDjPressKit.gallery.images,
  socials: {
    instagram: instagramUrl,
    soundCloud: soundCloudUrl,
    tikTok: tikTokUrl,
    website: youtubeChannelUrl,
  },
  contact: {
    email: "booking@silver-dj.com",
    phone: "(+225)07.87.87.97.80",
    city: "Abidjan",
    country: "Cote d'Ivoire",
  },
  services: [
    {
      title: "Soirées club",
      description:
        "Sets open format pensés pour garder la piste active, passer d'une couleur à l'autre et maintenir l'énergie jusqu'au dernier morceau.",
    },
    {
      title: "Brand show",
      description:
        "Présence DJ taillée pour les lancements, activations et rendez-vous lifestyle qui ont besoin d'un moment musical fort.",
    },
    {
      title: "Événements privés",
      description:
        "Une approche flexible pour anniversaires, soirées d'entreprise, formats premium et événements sur mesure.",
    },
  ],
  testimonials: [],
  bookingEmail: "booking@silver-dj.com",
  seo: {
    title: silverDjPressKit.metadata.title,
    description: silverDjPressKit.metadata.description,
    keywords: [
      "Silver DJ",
      "DJ Abidjan",
      "open format DJ",
      "dossier de presse DJ",
      "réservation DJ Abidjan",
      "dossier de presse DJ YouTube",
    ],
    ogImage: "/opengraph-image",
  },
  defaultTheme: "green",
  defaultVariant: "impact",
  pressKit: silverDjPressKit,
};
