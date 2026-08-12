import { pressKitConfig } from "@/data/config";
import type { PressKitConfig } from "@/data/config";
import type { ClientConfig } from "@/data/clients/types";

const djslydPressKitEn: PressKitConfig = {
  ...pressKitConfig,
  footer: {
    availabilityText:
      "Available for clubs, festivals, private events and institutional formats.",
    navigationLabel: "Navigation",
    socialLabel: "Socials",
    bookingLabel: "Booking",
    languageLabel: "Language",
    fullGalleryLabel: "Full gallery",
    allVideosLabel: "All videos",
  },
};

const djslydPressKitFr: PressKitConfig = {
  ...pressKitConfig,
  metadata: {
    title: "DJ SLY'D Press Kit | Hip-Hop, Afro & Open Format",
    description:
      "Découvrez DJ SLY'D, DJ et producteur basé à Paris, entre Hip-Hop, Afro, RnB et sets Open Format pour clubs, scènes internationales et événements de marque.",
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
    ...pressKitConfig.artist,
    stageLabel: "DJ • Producteur • Open Format international",
    logo: {
      ...pressKitConfig.artist.logo,
      showInHero: false,
    },
  },
  navigation: {
    items: [
      { label: "Bio", href: "#about" },
      { label: "Clubs", href: "#clubs" },
      { label: "Galerie", href: "#gallery" },
      { label: "Vidéos", href: "#videos" },
      { label: "Musique", href: "#sound" },
      { label: "Spotify", href: "#spotify" },
      { label: "Contact", href: "#contact" },
    ],
    cta: {
      label: "Réserver SLY'D",
      href: "#contact",
      variant: "primary",
    },
  },
  heroVariants: {
    impact: {
      ...pressKitConfig.heroVariants.impact,
      accent: "THE ECLECTIC",
      description:
        "Hip-hop, RnB, afro, baile funk et future beats font partie de son terrain de jeu de prédilection. Avec plus de 20 années d'expérience, SLY'D se distingue par sa capacité à surprendre le public avec des transitions toujours originales.",
      image: {
        ...pressKitConfig.heroVariants.impact.image,
        badge: "DJ SLY'D • Open Format • Paris",
        caption: "De Paris aux scènes internationales",
      },
      ctas: [
        { label: "Réserver SLY'D", href: "#contact", variant: "primary" },
        { label: "Voir la galerie", href: "/gallery", variant: "secondary" },
      ],
      stats: [
        { value: "20+", label: "Ans de carrière" },
        { value: "FR + INTL", label: "Bookings" },
        { value: "OPEN FORMAT", label: "Signature musicale" },
        { value: "150+", label: "Dates en 2025" },
      ],
    },
    interactive: {
      ...pressKitConfig.heroVariants.interactive,
      eyebrow: "Expérience live • Open Format • Paris",
      accent: "THE ECLECTIC",
      description:
        "Appuyez sur play : hip-hop, afro, RnB et performance Open Format, avec des transitions rapides, des classiques bien placés et des changements de tempo au bon moment.",
      image: {
        ...pressKitConfig.heroVariants.interactive.image,
        badge: "Expérience live • Open Format • Paris",
        caption: "De Paris aux scènes internationales",
      },
      ctas: [
        { label: "Réserver SLY'D", href: "#contact", variant: "primary" },
        { label: "Voir la galerie", href: "/gallery", variant: "secondary" },
      ],
      stats: [
        { value: "20+", label: "Ans de carrière" },
        { value: "FR + INTL", label: "Bookings" },
        { value: "OPEN FORMAT", label: "Signature musicale" },
        { value: "150+", label: "Dates en 2025" },
      ],
      mediaCard: {
        ...pressKitConfig.heroVariants.interactive.mediaCard,
        label: "Extrait live",
        title: "Au cœur de l'ambiance",
        subtitle: "Voir SLY'D en live",
      },
    },
    showcase: {
      ...pressKitConfig.heroVariants.showcase,
      eyebrow: "DJ Open Format • Paris • International",
      accent: "THE ECLECTIC",
      description:
        "Hip-hop, RnB, afro, baile funk et future beats, sélectionnés pour faire passer une soirée du warm-up aux morceaux qui font chanter toute la salle.",
      image: {
        ...pressKitConfig.heroVariants.showcase.image,
        badge: "DJ Open Format • Paris • International",
        caption: "De Paris aux scènes internationales",
      },
      ctas: [
        { label: "Voir SLY'D en live", href: "#gallery", variant: "primary" },
        { label: "Écouter les mixes", href: "#sound", variant: "secondary" },
      ],
      stats: [
        { value: "20+", label: "Ans de carrière" },
        { value: "FR + INTL", label: "Bookings" },
        { value: "OPEN FORMAT", label: "Signature musicale" },
        { value: "150+", label: "Dates en 2025" },
      ],
      footerNote: "Défiler pour explorer",
    },
  },
  about: {
    ...pressKitConfig.about,
    eyebrow: "Bio",
    title: "\"Mon seul objectif, c'est de surprendre les gens.\"",
    signatureLabel: "",
    signatureQuote: "",
    supportingText: "",
    tags: [
      "Open Format",
      "Hip-Hop",
      "RnB",
      "Afro",
      "Dancehall",
      "Caribbean Music",
      "Baile Funk",
      "Future Beat",
      "UKG",
    ],
    paragraphs: [
      "DJ SLY'D est un DJ basé à Paris avec plus de 20 ans d'expérience, reconnu pour des sets qui mélangent hip-hop, RnB, afrobeat, baile funk et sons plus actuels.",
      "SLY'D se positionne comme une référence du DJ game parisien, notamment grâce à ses résidences sur des événements emblématiques comme la Sunday Groove ou la RNB Cruise.",
      "Il est aussi reconnu à l'international, avec des dates en Côte d'Ivoire, à Singapour ou encore à Manchester.",
      "Son identité Open Format repose sur des transitions nettes, des changements de tempo assumés et des morceaux choisis pour créer la surprise.",
    ],
  },
  clubs: {
    ...pressKitConfig.clubs,
    eyebrow: "Où j'ai joué",
    title: "LES LIEUX QUI ONT FAÇONNÉ MON PARCOURS",
    description:
      "SLY'D a joué dans de nombreux clubs en France, de Wanderlust au Palais de Tokyo, en passant par le Nouveau Casino, le Redlight ou le Bounce Club à Marseille. Son parcours l'a aussi mené à l'étranger, notamment à Singapour, Manchester, Berlin, Miami et Abidjan.",
  },
  sound: {
    ...pressKitConfig.sound,
    title: "SLY'D SUR SOUNDCLOUD",
    paragraphs: [
      "Retrouvez les mixes et edits de SLY'D sur SoundCloud.",
    ],
    cta: {
      ...pressKitConfig.sound.cta,
      label: "Explorer SoundCloud",
    },
    embedTitle: "Player SoundCloud de SLY'D",
  },
  videos: {
    ...pressKitConfig.videos,
    eyebrow: "Moments live",
    title: "EN IMMERSION",
    description:
      "Extraits de sets, réactions du public, passages hip-hop, RnB, afro et moments plus directs.",
    items: pressKitConfig.videos.items.map((item) => {
      const translations: Record<string, Pick<typeof item, "title" | "description">> = {
        "crowd-ignition": {
          title: "Connexion immédiate",
          description:
            "Un extrait live avec SLY'D derrière les platines et le public face à lui.",
        },
        "night-shift": {
          title: "Moment late-night",
          description:
            "Un passage plus sombre et plus intense, porté par le rythme, les basses et la réaction du public.",
        },
        "open-format-cut": {
          title: "Signature open format",
          description:
            "Un passage qui montre le mélange des styles au cœur de ses sets.",
        },
      };

      return { ...item, ...translations[item.id] };
    }),
  },
  spotify: {
    ...pressKitConfig.spotify,
    title: "Sly'D Selection",
    description:
      "Playlists rap, RnB, afro et club sélectionnées par SLY'D.",
  },
  brands: {
    ...pressKitConfig.brands,
    eyebrow: "Marques & Culture",
    title: "MARQUES, MÉDIAS\nET ÉVÉNEMENTS PRIVÉS",
    intro:
      "SLY'D a déjà joué pour Dior, Airness, Foot Locker et Mouv' Radio, ainsi que sur des lancements, événements mode et événements média.",
    supportingText:
      "Ces formats demandent des sets plus courts, des morceaux identifiables rapidement et une présence adaptée aux photos, vidéos et prises de parole.",
    categories: ["Mode", "Sportswear", "Médias", "Événements de marque"],
    itemLabel: "Marque / Média",
    fit: {
      eyebrow: "Pourquoi ça fonctionne",
      title: "Un profil habitué aux clubs comme aux événements de marque.",
      points: [
        "Image soignée, adaptée aux contenus photo et vidéo.",
        "Sets Open Format pour clubs, soirées privées, lancements et retail events.",
        "Répertoire hip-hop, RnB, afro, baile funk et sons plus actuels.",
        "Expérience avec des marques mode, sportswear et médias.",
      ],
    },
  },
  contact: {
    ...pressKitConfig.contact,
    title: "Booking & contact",
    description:
      "Pour une demande de booking, un événement privé, une date en club ou un événement de marque, contactez SLY'D directement.",
    methods: pressKitConfig.contact.methods.filter((method) =>
      ["Mail", "Bookings", "Instagram"].includes(method.label)
    ),
  },
  gallery: {
    ...pressKitConfig.gallery,
    title: "Galerie",
    description:
      "Visuels haute résolution disponibles pour promoteurs, marques et médias. Cliquez sur une image pour l'afficher en grand et la télécharger.",
    homepageTitle: "L'UNIVERS AUTOUR DE SLY'D",
    homepageCtaLabel: "Voir toute la galerie",
  },
  footer: {
    availabilityText:
      "Disponible pour clubs, festivals, événements privés et formats institutionnels.",
    navigationLabel: "Navigation",
    socialLabel: "Réseaux",
    bookingLabel: "Réservation",
    languageLabel: "Langue",
    fullGalleryLabel: "Galerie complète",
    allVideosLabel: "Toutes les vidéos",
  },
};

export const djslydEnClient: ClientConfig = {
  slug: "djslyd-en",
  domain: "djslyd.presskit.fr",
  vercelSubdomain: "djslyd.vercel.app",
  name: "DJ SLY'D",
  tagline: "Open format DJ • Paris • France & international",
  city: "Paris",
  country: "France",
  category: "DJ / Press kit premium",
  description:
    "DJ et producteur Open Format basé à Paris, entre Hip-Hop, Afro, RnB et événements de marque.",
  longBio: djslydPressKitEn.about.paragraphs.join(" "),
  heroImage: "/press-kit/2025-12-29-22-31-08-761.jpg",
  gallery: pressKitConfig.gallery.images,
  socials: {
    instagram: "https://instagram.com/djslyd",
  },
  contact: {
    email: "dj-slyd@hotmail.com",
    phone: "+33663907888",
    city: "Paris",
    country: "France",
  },
  services: [
    {
      title: "Club nights",
      description:
        "Sets Open Format conçus pour clubs, salles pleines et soirées où il faut enchaîner vite, juste et fort.",
    },
    {
      title: "Brand events",
      description:
        "Sets pour marques, lancements, retail events et collaborations culturelles.",
    },
    {
      title: "Private bookings",
      description:
        "Performances sur mesure pour événements privés, formats corporate et expériences haut de gamme.",
    },
  ],
  testimonials: [
    {
      quote:
        "Une vraie capacité à garder une salle engagée et à faire monter le set avec élégance.",
      author: "Booking Partner",
      role: "Clubs & Events",
    },
    {
      quote:
        "Un profil parfait pour les marques qui veulent un DJ crédible, actuel et facile à intégrer à un événement.",
      author: "Event Producer",
      role: "Brand Event",
    },
  ],
  bookingEmail: "dj-slyd@hotmail.com",
  seo: {
    title: djslydPressKitEn.metadata.title,
    description: djslydPressKitEn.metadata.description,
    keywords: [
      "DJ SLY'D",
      "DJ Paris",
      "open format DJ",
      "hip-hop DJ Paris",
      "afro DJ",
      "RnB DJ",
      "club DJ",
      "DJ press kit",
      "DJ booking Paris",
      "event DJ France",
    ],
    ogImage: "/press-kit/og-share.jpg",
    canonical: "https://djslyd.presskit.fr/",
  },
  defaultTheme: "red",
  defaultVariant: "impact",
  pressKit: djslydPressKitEn,
  hideFromSwitcher: true,
  languageSwitch: [
    { label: "FR", href: "/", clientSlug: "djslyd" },
    { label: "EN", href: "/en", active: true },
  ],
};

export const djslydClient: ClientConfig = {
  ...djslydEnClient,
  slug: "djslyd",
  domain: "djslyd.presskit.fr",
  vercelSubdomain: "djslyd.vercel.app",
  hideFromSwitcher: false,
  tagline: "DJ Open Format • Paris • France & international",
  category: "DJ / Press kit premium",
  description: djslydPressKitFr.metadata.description,
  longBio: djslydPressKitFr.about.paragraphs.join(" "),
  services: [
    {
      title: "Clubs & scènes live",
      description:
        "Sets Open Format conçus pour clubs, salles pleines et soirées où il faut enchaîner vite, juste et fort.",
    },
    {
      title: "Événements de marque",
      description:
        "Sélections musicales pour lancements, retail events, événements média et collaborations culturelles.",
    },
    {
      title: "Événements privés",
      description:
        "Performances sur mesure pour événements privés, formats corporate et expériences haut de gamme.",
    },
  ],
  seo: {
    ...djslydEnClient.seo,
    title: djslydPressKitFr.metadata.title,
    description: djslydPressKitFr.metadata.description,
    keywords: [
      "DJ SLY'D",
      "DJ Paris",
      "DJ open format",
      "DJ hip-hop Paris",
      "DJ afro",
      "DJ RnB",
      "DJ club",
      "press kit DJ",
      "booking DJ Paris",
      "DJ événement France",
    ],
  },
  pressKit: djslydPressKitFr,
  languageSwitch: [
    { label: "FR", href: "/", active: true },
    { label: "EN", href: "/en", clientSlug: "djslyd-en" },
  ],
};
