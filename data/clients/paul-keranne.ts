import type { PressKitConfig } from "@/data/config";
import type { ClientConfig } from "@/data/clients/types";

const instagramUrl = "https://www.instagram.com/paulkeranne/";
const youtubeChannelUrl = "https://www.youtube.com/@paulkeranne";
const spotifyUrl =
  "https://open.spotify.com/artist/01qxQtdue4yeex4SegS4IP?si=jFHksX9STi26Z536GJ-WFw";
const spotifyEmbedUrl =
  "https://open.spotify.com/embed/artist/01qxQtdue4yeex4SegS4IP?utm_source=generator&theme=0";
const soundCloudUrl = "https://soundcloud.com/paulkeranne";
const soundCloudEmbedUrl =
  "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/paulkeranne&color=%2319b46b&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true";
const tikTokUrl = "https://www.tiktok.com/@paulkeranne";
const bookingEmail = "paulkerannedj@gmail.com";

const paulKerannePressKit: PressKitConfig = {
  metadata: {
    title: "Paul-Keranne Dossier de presse | DJ producteur Afro, Amapiano & Dancehall",
    description:
      "Découvrez Paul-Keranne, DJ-producteur basé à Paris, créateur de Jungle Beatz et figure montante d'un univers Afro-Amapiano moderne.",
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
    name: "Paul-Keranne",
    stageLabel: "DJ-producteur • Paris • Afro-Amapiano",
    logo: {
      src: "",
      alt: "Paul-Keranne logo",
    },
  },
  navigation: {
    items: [
      { label: "Bio", href: "#about" },
      { label: "Expérience", href: "#clubs" },
      { label: "Galerie", href: "#gallery" },
      { label: "Vidéos", href: "#videos" },
      { label: "YouTube", href: "#youtube" },
      { label: "Vision", href: "#vision" },
      { label: "SoundCloud", href: "#sound" },
      { label: "Spotify", href: "#spotify" },
    ],
    cta: {
      label: "Contacter Paul-Keranne",
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
  ],
  heroVariants: {
    impact: {
      eyebrow: "DJ-producteur • Paris",
      title: "PAUL",
      accent: "KERANNE",
      description:
        "Afrobeat, amapiano, dancehall et culture club. Paul-Keranne construit une identité solaire, moderne et fédératrice, des clubs parisiens aux projets pensés pour voyager.",
      layout: "impact",
      image: {
        src: "/paul-keranne/gallery/hero-paulkeranne.jpg",
        alt: "Portrait de Paul-Keranne",
        badge: "Paul-Keranne",
        caption: "Afro-Amapiano from Paris",
      },
      ctas: [
        { label: "Contacter Paul-Keranne", href: "#contact", variant: "primary" },
        { label: "Voir vidéos", href: "#videos", variant: "secondary" },
      ],
      stats: [
        { value: "Paris", label: "Base" },
        { value: "+10K", label: "Instagram" },
        { value: "+17K", label: "TikTok" },
        { value: "+10 ans", label: "Carrière" },
      ],
      proofline: "Clubs · Jungle Beatz · Afro-Amapiano · Production",
    },
    interactive: {
      eyebrow: "Expérience live • Paris",
      title: "PAUL",
      accent: "KERANNE",
      description:
        "Une présence scénique maîtrisée, des rythmes afro contemporains et une approche pensée pour créer des moments de partage immédiats.",
      layout: "interactive",
      image: {
        src: "/paul-keranne/gallery/hero-paulkeranne.jpg",
        alt: "Paul-Keranne en performance",
        badge: "Paul-Keranne",
        caption: "Afro-Amapiano from Paris",
      },
      ctas: [
        { label: "Contacter Paul-Keranne", href: "#contact", variant: "primary" },
        { label: "Voir vidéos", href: "#videos", variant: "secondary" },
      ],
      stats: [
        { value: "Paris", label: "Base" },
        { value: "+10K", label: "Instagram" },
        { value: "+17K", label: "TikTok" },
        { value: "+10 ans", label: "Carrière" },
      ],
      proofline: "Clubs · Jungle Beatz · Afro-Amapiano · Production",
    },
    showcase: {
      eyebrow: "DJ-producteur • Afro-Amapiano",
      title: "PAUL",
      accent: "KERANNE",
      description:
        "Un univers musical vibrant, puissant et fédérateur, entre héritage afro, énergie club et ambition internationale.",
      layout: "showcase",
      image: {
        src: "/paul-keranne/gallery/hero-paulkeranne.jpg",
        alt: "Visuel de Paul-Keranne",
        badge: "Paul-Keranne",
        caption: "Afro-Amapiano from Paris",
      },
      ctas: [
        { label: "Contacter Paul-Keranne", href: "#contact", variant: "primary" },
        { label: "Voir vidéos", href: "#videos", variant: "secondary" },
      ],
      stats: [
        { value: "Paris", label: "Base" },
        { value: "+10K", label: "Instagram" },
        { value: "+17K", label: "TikTok" },
        { value: "+10 ans", label: "Carrière" },
      ],
      proofline: "Clubs · Jungle Beatz · Afro-Amapiano · Production",
      footerNote: "Une direction artistique pensée pour réunir la salle autour du rythme.",
    },
  },
  about: {
    eyebrow: "Bio",
    title: "Faire vibrer Paris,\nréunir les publics.",
    signatureLabel: "Positionnement",
    signatureQuote:
      "Paul-Keranne défend une musique vibrante, puissante et fédératrice, capable de dépasser les frontières.",
    supportingText:
      "Depuis 2016, il affine un univers Afro-Amapiano ouvert sur le monde, entre culture club, production et événements à forte identité.",
    tags: ["Afrobeat", "Amapiano", "Dancehall", "Club", "Paris", "Jungle Beatz"],
    paragraphs: [
      "Depuis 2016, Paul-Keranne construit sa place sur la scène parisienne avec une présence scénique solide et une identité musicale moderne. Il commence dans les bars intimistes de la capitale, où il affine son style au contact direct du public.",
      "Toujours en quête de nouvelles collaborations, il partage en 2018 les platines avec Djibril Cissé lors d'événements marquants qui renforcent sa visibilité dans l'industrie. Sa recherche artistique l'amène progressivement vers les rythmes de la Côte d'Ivoire et les sonorités africaines contemporaines.",
      "En 2020, il dévoile son premier EP UNIVERS, un projet immersif mêlant afrobeat, amapiano et dancehall, confirmant sa capacité à produire une musique authentique, rythmée et ouverte sur le monde.",
      "Aujourd'hui, Paul-Keranne s'impose comme un DJ-producteur prolifique, enchaînant sorties, remixes et collaborations avec des artistes émergents du continent africain.",
    ],
  },
  clubs: {
    eyebrow: "Expérience",
    title: "Une histoire née\nsur les dancefloors parisiens.",
    description:
      "Paul-Keranne s'est construit dans les bars et clubs parisiens, au contact direct du public. Avec Jungle Beatz, il transforme cette énergie en rendez-vous régulier autour de l'afro, de l'amapiano et d'une ambiance faite pour danser ensemble.",
    regions: [
      {
        title: "Paris",
        icon: "map-pin",
        items: [
          "Jungle Beatz",
          "Balajo",
          "The Bridge",
          "Deflower",
          "Le Tout Le Monde En Parle",
          "Club Haussmann",
        ],
      },
      {
        title: "Projets",
        icon: "globe",
        items: ["Jungle Beatz", "UNIVERS EP", "Remixes", "Collaborations afro"],
      },
    ],
  },
  sound: {
    eyebrow: "Son",
    title: "Afro, amapiano,\nclub energy.",
    paragraphs: [
      "Ses sélections mêlent rythmes afrobeat, textures amapiano et énergie dancehall avec une construction pensée pour garder la salle en mouvement.",
      "Son SoundCloud donne un accès direct à ses remixes, sorties et idées musicales, entre identité club et production personnelle.",
    ],
    cta: {
      label: "Écouter sur SoundCloud",
      href: soundCloudUrl,
      external: true,
    },
    embedTitle: "Player SoundCloud de Paul-Keranne",
    embedUrl: soundCloudEmbedUrl,
  },
  videos: {
    eyebrow: "Vidéos",
    title: "Extraits live.",
    description:
      "On y retrouve Paul-Keranne dans ce qu'il aime le plus: faire monter la salle, garder le lien avec le public et installer une ambiance qui donne envie de rester jusqu'au dernier morceau.",
    items: [
      {
        id: "paul-keranne-video-1",
        title: "Extrait live 01",
        description: "Un extrait live autour de la montée du public et de la couleur afro du set.",
        src: "/paul-keranne/videos/videos-pk1-web.m4v",
        poster: "/paul-keranne/videos/videos-pk1.mp4.png",
      },
      {
        id: "paul-keranne-video-2",
        title: "Extrait live 02",
        description: "Moment club capté au plus près de la piste.",
        src: "/paul-keranne/videos/videos-pk2-web.m4v",
        poster: "/paul-keranne/videos/videos-pk2.mp4.png",
      },
      {
        id: "paul-keranne-video-3",
        title: "Extrait live 03",
        description: "Séquence courte entre amapiano, dancehall et énergie de salle.",
        src: "/paul-keranne/videos/videos-pk3-web.m4v",
        poster: "/paul-keranne/videos/videos-pk3.mp4.png",
      },
      {
        id: "paul-keranne-video-4",
        title: "Extrait live 04",
        description: "Un aperçu direct de l'ambiance Paul-Keranne en live.",
        src: "/paul-keranne/videos/videos-pk4-web.m4v",
        poster: "/paul-keranne/videos/videos-pk4.mp4.png",
      },
    ],
    cta: {
      label: "Voir toutes les vidéos",
      href: "/videos?client=paul-keranne",
      external: false,
    },
  },
  youtube: {
    eyebrow: "YouTube",
    title: "Paul-Keranne\non Youtube.",
    description:
      "Ces vidéos montrent ce que Paul-Keranne construit au-delà du set: une identité afro-amapiano ancrée à Paris, des moments de club qui fédèrent, et une direction artistique pensée pour faire vivre la musique avant, pendant et après la soirée.",
    items: [
      {
        id: "paul-keranne-youtube-1",
        title: "Culture club",
        description: "Un format long pour suivre la progression du set, les transitions et l'installation de l'ambiance.",
        source: "youtube",
        embedUrl: "https://www.youtube.com/embed/Suazp7b1wTo?start=577",
      },
      {
        id: "paul-keranne-youtube-2",
        title: "Afro-Amapiano",
        description: "Une entrée plus directe dans sa couleur musicale, entre rythmes afro contemporains et tension club.",
        source: "youtube",
        embedUrl: "https://www.youtube.com/embed/eSk_w75fSsM",
      },
      {
        id: "paul-keranne-youtube-3",
        title: "Image & mouvement",
        description: "Un contenu qui prolonge son positionnement: rassembler, faire danser et donner une forme visuelle à son univers.",
        source: "youtube",
        embedUrl: "https://www.youtube.com/embed/EJfVlgPggiQ",
      },
    ],
    cta: {
      label: "Voir chaîne YouTube",
      href: youtubeChannelUrl,
      external: true,
    },
  },
  vision: {
    eyebrow: "Vision",
    title: "Jungle Beatz,\nle rendez-vous signature.",
    intro:
      "En 2024, Paul-Keranne crée Jungle Beatz, son propre concept de soirée, lancé dans un bar à ambiance du 9e arrondissement de Paris puis au Café Oz Châtelet.",
    paragraphs: [
      "Le concept séduit rapidement un public croissant attiré par son univers Afro-Amapiano.",
      "Jungle Beatz rassemble plus de 250 personnes en moyenne par soirée et installe Paul-Keranne comme curateur d'un moment club identifiable, chaleureux et fédérateur.",
    ],
    stats: [
      { value: "2024", label: "Création" },
      { value: "250+", label: "Pers./soirée" },
      { value: "Paris", label: "Ancrage" },
    ],
    video: {
      src: "/paul-keranne/jungle-beatz.mp4",
      title: "Présentation Jungle Beatz",
    },
  },
  spotify: {
    eyebrow: "Spotify",
    title: "Écouter Paul-Keranne",
    description:
      "Ses sorties posent les bases de son univers: une couleur afro contemporaine, des rythmes amapiano et dancehall, et une énergie club pensée pour circuler naturellement entre Paris et les scènes internationales.",
    playlists: [
      {
        id: "paul-keranne-artist",
        title: "Paul-Keranne",
        embedUrl: spotifyEmbedUrl,
      },
    ],
    badgeLabel: "Profil Spotify officiel",
  },
  brands: {
    eyebrow: "Projet",
    title: "Une présence claire,\npensée pour les formats culture.",
    intro:
      "Paul-Keranne porte une image musicale forte, à la croisée de la nightlife parisienne, des cultures afro contemporaines et des contenus digitaux.",
    supportingText:
      "Son univers s'adapte aux clubs, festivals, activations culturelles et projets de marque qui veulent une couleur afro actuelle et un vrai lien avec le public.",
    categories: ["Nightlife", "Afro culture", "Amapiano", "Digital"],
    itemLabel: "Univers compatibles",
    items: [],
    fit: {
      eyebrow: "Pourquoi Paul-Keranne",
      title: "Production, communauté et vision.",
      points: [
        "Un concept propriétaire déjà identifié avec Jungle Beatz",
        "Une communauté active sur Instagram et TikTok",
        "Une direction musicale afro contemporaine, accessible et exportable",
      ],
    },
  },
  contact: {
    eyebrow: "Contact",
    title: "Booking & demandes.",
    description:
      "Pour une date club, une collaboration, un événement privé, une activation ou une demande média, contactez l'équipe de Paul-Keranne.",
    methods: [
      {
        label: "Email",
        value: bookingEmail,
        href: `mailto:${bookingEmail}`,
        icon: "mail",
      },
      {
        label: "WhatsApp",
        value: "Téléphone",
        href: "https://wa.me/33699509239",
        icon: "whatsapp",
        external: true,
      },
      {
        label: "Instagram",
        value: "@paulkeranne",
        href: instagramUrl,
        icon: "instagram",
        external: true,
      },
    ],
  },
  gallery: {
    eyebrow: "Galerie",
    title: "Galerie",
    description:
      "Une première sélection d'images pour installer l'identité visuelle de Paul-Keranne, entre portrait, scène et contenu artiste.",
    homepageTitle: "Univers visuel",
    homepageCtaLabel: "Ouvrir la galerie",
    images: [
      {
        src: "/paul-keranne/gallery/gallery-pk1.jpg",
        alt: "Paul-Keranne en live",
        position: "center 18%",
      },
      {
        src: "/paul-keranne/gallery/gallery-pk2.jpg",
        alt: "Visuel de Paul-Keranne",
        position: "center 20%",
      },
      {
        src: "/paul-keranne/gallery/gallery-pk4.jpeg",
        alt: "Paul-Keranne - set",
        position: "center 75%",
      },
      {
        src: "/paul-keranne/gallery/gallery-pk5.jpeg",
        alt: "Paul-Keranne - ambiance",
        position: "center 50%",
      },
      {
        src: "/paul-keranne/gallery/gallery-pk6.jpeg",
        alt: "Paul-Keranne - scène",
        position: "center 50%",
      },
      {
        src: "/paul-keranne/gallery/gallery-pk7.jpeg",
        alt: "Paul-Keranne - live",
        position: "center 50%",
      },
      {
        src: "/paul-keranne/gallery/gallery-pk8.jpeg",
        alt: "Paul-Keranne - ambiance",
        position: "center 50%",
      },
      {
        src: "/paul-keranne/gallery/gallery-pk9.jpeg",
        alt: "Paul-Keranne - set",
        position: "center 50%",
      },
    ],
  },
};

export const paulKeranneClient: ClientConfig = {
  slug: "paul-keranne",
  domain: "paul-keranne.presskit.fr",
  vercelSubdomain: "paul-keranne.vercel.app",
  name: "Paul-Keranne",
  tagline: "DJ-producteur • Paris • Afro-Amapiano",
  city: "Paris",
  country: "France",
  category: "DJ-producteur / dossier de presse en préparation",
  description: paulKerannePressKit.metadata.description,
  longBio: paulKerannePressKit.about.paragraphs.join(" "),
  heroImage: "/paul-keranne/gallery/hero-paulkeranne.jpg",
  gallery: paulKerannePressKit.gallery.images,
  socials: {
    instagram: instagramUrl,
    soundCloud: soundCloudUrl,
    tikTok: tikTokUrl,
    spotify: spotifyUrl,
    website: youtubeChannelUrl,
  },
  contact: {
    email: bookingEmail,
    city: "Paris",
    country: "France",
  },
  services: [
    {
      title: "Soirées club",
      description:
        "Sets Afro-Amapiano et open club pensés pour installer une ambiance chaude, rythmée et fédératrice.",
    },
    {
      title: "Jungle Beatz",
      description:
        "Concept signature autour des sonorités afro contemporaines, calibré pour créer une communauté et un rendez-vous identifiable.",
    },
    {
      title: "Production & collaborations",
      description:
        "Sorties, remixes et collaborations avec une direction musicale ouverte sur le continent africain et les scènes internationales.",
    },
  ],
  testimonials: [],
  bookingEmail,
  seo: {
    title: paulKerannePressKit.metadata.title,
    description: paulKerannePressKit.metadata.description,
    keywords: [
      "Paul-Keranne",
      "Paul Keranne DJ",
      "DJ Paris",
      "Afro Amapiano DJ",
      "Jungle Beatz",
      "dossier de presse DJ",
    ],
    ogImage: "/opengraph-image",
    canonical: "https://paul-keranne.presskit.fr/",
  },
  defaultTheme: "orange",
  defaultVariant: "impact",
  pressKit: paulKerannePressKit,
};
