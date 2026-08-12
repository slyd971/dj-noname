import type { PressKitConfig } from "@/data/config";
import type { ClientConfig } from "@/data/clients/types";

const instagramUrl = "https://instagram.com/arthur_chaps";
const soundCloudUrl = "https://soundcloud.com/arthur_chaps";
const soundCloudEmbedUrl =
  "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/arthur_chaps&color=%23ffffff&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true";
const spotifyUrl =
  "https://open.spotify.com/artist/5IvbruKmvtSDeGy19xsmk5?si=6Fv7PcEdQUOYtq2jFoadXw";
const spotifyEmbedUrl =
  "https://open.spotify.com/embed/artist/5IvbruKmvtSDeGy19xsmk5?utm_source=generator&theme=0";
const linktreeUrl = "https://linktr.ee/Arthur_Chaps";
const heroImage = "/arthur-chaps/gallery/Arthur_Chaps_Portrait_01.jpg";

const arthurChapsPressKit: PressKitConfig = {
  metadata: {
    title: "Arthur Chaps | Press kit officiel",
    description:
      "Arthur Chaps est DJ et directeur artistique, actif sur la scène internationale depuis plus de vingt ans. Une vision exigeante de la culture club, centrée sur le dancefloor, le son et l'expérience collective.",
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
    name: "Arthur Chaps",
    stageLabel: "DJ / Producteur • Paris & international",
    logo: {
      src: "",
      alt: "Arthur Chaps",
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
      { label: "Rider", href: "#rider" },
    ],
    cta: {
      label: "Contact",
      href: "#contact",
      variant: "primary",
    },
  },
  heroSocials: [
    { label: "Instagram", href: instagramUrl, icon: "instagram" },
    { label: "Spotify", href: spotifyUrl, icon: "spotify" },
    { label: "SoundCloud", href: soundCloudUrl, icon: "soundcloud" },
  ],
  heroVariants: {
    impact: {
      eyebrow: "DJ / PROD • Club culture",
      title: "ARTHUR",
      accent: "CHAPS",
      description:
        "Depuis plus de vingt ans, Arthur Chaps développe une vision du DJing centrée sur le dancefloor, les cultures globales et l'intensité collective.",
      layout: "impact",
      image: {
        src: heroImage,
        alt: "Portrait hero Arthur Chaps",
        badge: "Arthur Chaps",
        caption: "Club culture · Paris · international",
        position: "center 8%",
      },
      ctas: [
        { label: "Voir vidéos", href: "#videos", variant: "primary" },
        { label: "Écouter", href: "#sound", variant: "secondary" },
      ],
      stats: [
        { value: "20+", label: "Années de scène" },
        { value: "DJ / PROD", label: "Signature" },
        { value: "CHAPS MUSIC", label: "Plateforme" },
        { value: "GLOBAL", label: "Club culture" },
      ],
      proofline: "Paris · Marseille · Marrakech · Abidjan",
    },
    interactive: {
      eyebrow: "Dancefloor • Son • Expérience collective",
      title: "ARTHUR",
      accent: "CHAPS",
      description:
        "Une approche curatoriale et artistique tournée vers l'international, à la croisée des musiques afro-diasporiques, électroniques et des cultures urbaines.",
      layout: "interactive",
      image: {
        src: heroImage,
        alt: "Arthur Chaps portrait",
        badge: "Arthur Chaps",
        caption: "DJ sets · production · formats club",
        position: "center 8%",
      },
      ctas: [
        { label: "Galerie", href: "#gallery", variant: "primary" },
        { label: "Spotify", href: "#spotify", variant: "secondary" },
      ],
      stats: [
        { value: "PARIS", label: "Scène club" },
        { value: "FESTIVALS", label: "Scènes" },
        { value: "AFRO", label: "Diasporas" },
        { value: "HOUSE", label: "Culture club" },
      ],
      proofline: "Funky French League · CHAPS MUSIC · GLOBAL WARMING",
    },
    showcase: {
      eyebrow: "Culture DJ contemporaine",
      title: "ARTHUR",
      accent: "CHAPS",
      description:
        "Un parcours construit entre hip-hop, house et cultures afro-diasporiques, avec une attention constante portée à la physicalité du son et à l'énergie du public.",
      layout: "showcase",
      image: {
        src: heroImage,
        alt: "Arthur Chaps visuel presse",
        badge: "Arthur Chaps",
        caption: "International club formats",
        position: "center 8%",
      },
      ctas: [
        { label: "Contact", href: "#contact", variant: "primary" },
        { label: "Voir photos", href: "#gallery", variant: "secondary" },
      ],
      stats: [
        { value: "CHAPS", label: "Music" },
        { value: "GLOBAL", label: "Warming" },
        { value: "CLUB", label: "Formats" },
        { value: "LIVE", label: "Energy" },
      ],
      proofline: "Une culture DJ globale, physique et contemporaine.",
    },
  },
  about: {
    eyebrow: "À propos",
    title: "Culture club,\nson et direction artistique.",
    signatureLabel: "Signature",
    signatureQuote:
      "Arthur Chaps est DJ et directeur artistique, actif sur la scène internationale depuis plus de vingt ans. Son travail s'inscrit dans une vision exigeante de la culture club, centrée sur le dancefloor, le son et l'expérience collective, loin des logiques de genre ou de tendance.",
    supportingText: "",
    tags: [
      "Cultures Urbaines",
      "Musiques Electroniques",
      "Musiques afro-diasporiques",
      "Funk",
    ],
    paragraphs: [
      "Arthur Chaps est DJ et directeur artistique, actif sur la scène internationale depuis plus de vingt ans. Son travail s'inscrit dans une vision exigeante de la culture club, centrée sur le dancefloor, le son et l'expérience collective, loin des logiques de genre ou de tendance.",
      "Après un parcours construit entre hip-hop, house et cultures afro-diasporiques, il s'impose comme l'un des acteurs structurants de la scène club parisienne. Cofondateur du collectif Funky French League, il a contribué, au début des années 2010, à l'émergence de projets et d'esthétiques ayant durablement marqué le paysage musical français.",
      "Au fil des années, Arthur Chaps développe une approche curatoriale et artistique tournée vers l'international, mêlant pratique DJ, production musicale et conception de projets club. Son travail explore les zones de friction entre musiques afro-diasporiques, électroniques et cultures urbaines.",
      "Aujourd'hui, il développe ses projets artistiques et éditoriaux au sein de CHAPS MUSIC, plateforme dédiée à la création et à la diffusion de musiques pensées pour le club et le temps long. Il est également à l'initiative de GLOBAL WARMING, série de soirées internationales conçue comme un espace de circulation entre l'Europe et l'Afrique.",
    ],
  },
  clubs: {
    eyebrow: "Expérience",
    title: "Un parcours entre Paris\net l'international.",
    description:
      "Arthur Chaps articule résidences, projets club, projets éditoriaux et scènes internationales avec une même idée: faire circuler les sons, les publics et les énergies.",
    regions: [
      {
        title: "Scène & clubs",
        icon: "map-pin",
        items: [
          "Sacré",
          "La Clairière",
          "Phantom",
          "Yoyo (Palais de Tokyo)",
          "Le Sucre",
          "Bellevilloise",
        ],
      },
      {
        title: "Festivals",
        icon: "globe",
        items: [
          "Solidays",
          "Bestival",
          "Notting Hill Carnival @ Notting Hill Arts Club",
          "Puma Africa Express @ La Cigale",
          "Carnaval Tropical @ Stade Charlety",
          "Radio Meuh Circus Festival",
          "ALMOHA (Cameroun)",
        ],
      },
      {
        title: "Collectifs & Projets",
        icon: "globe",
        items: [
          "Chaps Music",
          "Global Warming",
          "FON FON Soundsystem",
          "Co-fondateur Funky french League",
        ],
      },
    ],
  },
  sound: {
    eyebrow: "SoundCloud",
    title: "Écouter\nArthur Chaps.",
    paragraphs: [
      "Retrouvez sur SoundCloud les sets live, mixes club et productions d'Arthur Chaps : house, afro-diasporique, électronique.",
    ],
    cta: {
      label: "Écouter sur SoundCloud",
      href: soundCloudUrl,
      external: true,
    },
    embedTitle: "Player SoundCloud d'Arthur Chaps",
    embedUrl: soundCloudEmbedUrl,
  },
  videos: {
    eyebrow: "Arthur Chaps en live",
    title: "Arthur Chaps\nen live.",
    description:
      "Quelques moments filmés en club pour voir comment Arthur Chaps installe le rythme, tient le dancefloor et fait monter l'énergie.",
    items: [
      {
        id: "arthur-chaps-live-01",
        title: "Bounce Club, Marseille",
        description: "Club moment capté au plus près du dancefloor.",
        src: "/arthur-chaps/videos/ArthurChaps_Video_Live_SOCIAL_01.mp4",
        poster: "/arthur-chaps/videos/ArthurChaps_Video_Live_SOCIAL_01-poster.jpg",
      },
      {
        id: "arthur-chaps-live-02",
        title: "1 Kilometre de Danse, Pantin",
        description: "Énergie club et réponse du public.",
        src: "/arthur-chaps/videos/ArthurChaps_Video_Live_SOCIAL_02.mp4",
        poster: "/arthur-chaps/videos/ArthurChaps_Video_Live_SOCIAL_02-poster.jpg",
      },
      {
        id: "arthur-chaps-live-03",
        title: "CREOLE @ La Machine du Moulin Rouge",
        description: "Matière sonore, tension et physicalité.",
        src: "/arthur-chaps/videos/ArthurChaps_Video_Live_SOCIAL_03.mp4",
        poster: "/arthur-chaps/videos/ArthurChaps_Video_Live_SOCIAL_03-poster.jpg",
      },
      {
        id: "arthur-chaps-live-04",
        title: "Extrait live 04",
        description: "Séquence dancefloor en format vertical.",
        src: "/arthur-chaps/videos/ArthurChaps_Video_Live_SOCIAL_04.mp4",
        poster: "/arthur-chaps/videos/ArthurChaps_Video_Live_SOCIAL_04-poster.jpg",
      },
      {
        id: "arthur-chaps-live-05",
        title: "Extrait live 05",
        description: "Instant live court et direct.",
        src: "/arthur-chaps/videos/ArthurChaps_Video_Live_SOCIAL_05.mp4",
        poster: "/arthur-chaps/videos/ArthurChaps_Video_Live_SOCIAL_05-poster.jpg",
      },
    ],
    cta: {
      label: "Voir toutes les vidéos",
      href: "/videos?client=arthur-chaps",
    },
  },
  spotify: {
    eyebrow: "Spotify",
    title: "Sorties & projets.",
    description:
      "Sur Spotify, les sorties d'Arthur Chaps prolongent son rapport au club: des morceaux directs, des collaborations choisies et une écriture musicale nourrie par la house, les musiques électroniques et les cultures afro-diasporiques.",
    useThemeColor: true,
    playlists: [
      {
        id: "arthur-chaps-spotify",
        title: "Arthur Chaps sur Spotify",
        embedUrl: spotifyEmbedUrl,
      },
    ],
    badgeLabel: "Arthur Chaps",
  },
  brands: {
    eyebrow: "Projets",
    title: "La vision\nd'Arthur",
    intro:
      "Arthur Chaps ne sépare pas le DJ set, la direction artistique et l'édition musicale. Ses projets existent pour connecter des scènes, des artistes et des publics autour d'une même culture du dancefloor.",
    supportingText:
      "CHAPS MUSIC sert de maison de création et de diffusion. GLOBAL WARMING ouvre un espace de circulation entre l'Europe et l'Afrique. Fon Fon prolonge cette énergie dans une logique plus collective, directe et soundsystem.",
    categories: [
      "Direction artistique",
      "Projets club",
      "Production musicale",
      "Plateformes éditoriales",
      "Scènes internationales",
    ],
    itemLabel: "Projets",
    items: [
      { name: "CHAPS MUSIC", logo: "/arthur-chaps/logos/CHAPS_MUSIC_LOGO-FULL_BLACK.png", logoInvert: true },
      {
        name: "GLOBAL WARMING",
        logo: "/arthur-chaps/logos/03-GlobalWarming-logo-three-colors.png",
        href: "https://www.instagram.com/globalwarming.music/",
      },
      {
        name: "Fon Fon",
        logo: "/arthur-chaps/logos/FON_FON_SOUNDSYSTEM_LOGO.png",
        href: "https://www.instagram.com/fonfon_soundsystem/",
      },
    ],
  },
  rider: {
    eyebrow: "Rider",
    title: "Setup\ntechnique.",
    groups: [
      {
        title: "Setup DJ",
        items: [
          "3 × Pioneer CDJ-3000 (linked)",
          "1 × Pioneer DJM-900NXS2",
          "Équipement professionnel équivalent accepté (CDJ-2000NXS2 / DJM-900NXS)",
        ],
      },
      {
        title: "Exigences techniques",
        items: [
          "1 microphone filaire connecté au DJM (usage MC occasionnel)",
          "1 prise de courant disponible",
          "1 enceinte monitoring connectée au DJM",
        ],
      },
      {
        title: "Hospitalité",
        items: ["1 pack d'eau minérale plate"],
      },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Booking & projets.",
    description:
      "Pour bookings, formats club, directions artistiques ou collaborations autour de CHAPS MUSIC et GLOBAL WARMING.",
    methods: [
      {
        label: "Email",
        value: "arthur.chaps@gmail.com",
        href: "mailto:arthur.chaps@gmail.com",
        icon: "mail",
      },
      {
        label: "Instagram",
        value: "@arthur_chaps",
        href: instagramUrl,
        icon: "instagram",
        external: true,
      },
    ],
  },
  gallery: {
    eyebrow: "Galerie",
    title: "Portraits & moments live.",
    description:
      "Une sélection de portraits, visuels éditoriaux et images live entre scènes, clubs et formats internationaux.",
    homepageTitle: "Univers visuel",
    homepageCtaLabel: "Ouvrir la galerie",
    images: [
      {
        src: "/arthur-chaps/gallery/Arthur_Chaps_Portrait_01.jpg",
        alt: "Portrait Arthur Chaps",
        size: "md:col-span-2",
        position: "center 18%",
      },
      {
        src: "/arthur-chaps/gallery/Arthur_Chaps_Portrait_02.jpg",
        alt: "Portrait presse Arthur Chaps",
        position: "center 18%",
      },
      {
        src: "/arthur-chaps/gallery/Arthur_Chaps_Editorial_2026_02.jpg",
        alt: "Arthur Chaps editorial 2026",
        position: "center 18%",
      },
      {
        src: "/arthur-chaps/gallery/Arthur_Chaps_Editorial_2026_03 (1).jpg",
        alt: "Arthur Chaps portrait editorial",
        position: "center 18%",
      },
      {
        src: "/arthur-chaps/gallery/Arthur_Chaps_Editorial_2026_04.jpg",
        alt: "Arthur Chaps visuel editorial",
        size: "md:col-span-2",
        position: "center 18%",
      },
      {
        src: "/arthur-chaps/gallery/Arthur_Chaps_Live_01_Close_Epicurien_Marrakech.jpg",
        alt: "Arthur Chaps live à l'Épicurien Marrakech",
        position: "center 20%",
      },
      {
        src: "/arthur-chaps/gallery/Arthur_Chaps_Live_02_Close_Wanderlust.jpg",
        alt: "Arthur Chaps live au Wanderlust",
        size: "md:col-span-2",
        position: "center",
      },
      {
        src: "/arthur-chaps/gallery/Arthur_Chaps_Live_03_Close_Bounce_Club.jpg",
        alt: "Arthur Chaps live au Bounce Club",
        position: "center",
      },
      {
        src: "/arthur-chaps/gallery/Arthur_Chaps_Live_04_Medium_Bounce_Club.jpg",
        alt: "Arthur Chaps en live au Bounce Club",
        position: "center",
      },
      {
        src: "/arthur-chaps/gallery/Arthur_Chaps_Live_05_Wide_La_Machine_Du_Moulin_Rouge.jpg",
        alt: "Arthur Chaps live à La Machine du Moulin Rouge",
        size: "md:col-span-2",
        position: "center 28%",
      },
    ],
  },
};

export const arthurChapsClient: ClientConfig = {
  slug: "arthur-chaps",
  domain: "arthur-chaps.presskit.fr",
  vercelSubdomain: "arthur-chaps.vercel.app",
  name: "Arthur Chaps",
  tagline: "DJ / Producteur • Paris & international",
  city: "Paris",
  country: "France",
  category: "DJ / producteur / direction artistique / culture club",
  description: arthurChapsPressKit.metadata.description,
  longBio: arthurChapsPressKit.about.paragraphs.join(" "),
  heroImage,
  gallery: arthurChapsPressKit.gallery.images,
  socials: {
    instagram: instagramUrl,
    soundCloud: soundCloudUrl,
    spotify: spotifyUrl,
    website: linktreeUrl,
  },
  contact: {
    email: "",
    city: "Paris",
    country: "France",
  },
  services: [
    {
      title: "DJ sets club",
      description:
        "Performances pensées pour le dancefloor, la tension sonore et l'expérience collective.",
    },
    {
      title: "Direction artistique",
      description:
        "Conception de formats club, programmation, identité musicale et dispositifs éditoriaux.",
    },
    {
      title: "Projets internationaux",
      description:
        "Formats connectant scènes européennes et africaines autour d'une culture DJ contemporaine.",
    },
  ],
  testimonials: [],
  bookingEmail: "",
  seo: {
    title: arthurChapsPressKit.metadata.title,
    description: arthurChapsPressKit.metadata.description,
    keywords: [
      "Arthur Chaps",
      "Arthur_Chaps",
      "DJ Paris",
      "DJ producteur",
      "CHAPS MUSIC",
      "GLOBAL WARMING",
      "Funky French League",
      "club culture",
      "house DJ",
      "musiques afro-diasporiques",
      "press kit DJ",
    ],
    ogImage: "/opengraph-image",
  },
  defaultTheme: "blue",
  defaultVariant: "impact",
  pressKit: arthurChapsPressKit,
};
