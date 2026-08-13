import type { PressKitConfig } from "@/data/config";
import type { ClientConfig } from "@/data/clients/types";

const instagramUrl = "https://www.instagram.com/dj_noname_/";
const youtubeUrl = "https://www.youtube.com/@djnoname_";
const soundCloudUrl = "https://soundcloud.com/djnoname1";
const tikTokUrl = "https://www.tiktok.com/@djnoname_01";
const twitchUrl = "https://www.twitch.tv/djnoname_";
const facebookUrl = "https://www.facebook.com/djnoname1/";
const bookingEmail = "djnoname.paris@gmail.com";
const whatsappHref = "https://wa.me/33658589052";
const heroImage = "/noname/hero/no-name-hero.png";
const urbanClubPodcastEmbedUrl =
  "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2131802193&color=%237C3AED&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true";
const soundCloudEmbedUrl =
  "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/djnoname1&color=%237C3AED&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true";

const gallery = Array.from({ length: 10 }, (_, index) => {
  const imageNumber = index + 1;

  return {
    src: `/noname/gallery/noname-gallery${imageNumber}.jpg`,
    alt: `DJ Noname galerie ${imageNumber}`,
    size: imageNumber === 1 ? "md:col-span-2 md:row-span-2" : undefined,
    hideFromPreview: imageNumber === 1,
    position: "center 24%",
  };
});

const noNamePressKit: PressKitConfig = {
  metadata: {
    title: "DJ Noname | DJ Hip-Hop & R&B à La Réunion, Urban Hit Réunion",
    description:
      "DJ international, Noname signe des sets Hip-Hop, R&B, Afro et Dancehall, entre culture club, radio et énergie urbaine.",
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
    name: "DJ NONAME",
    stageLabel: "DJ • Beatmaker • Animateur",
    logo: {
      src: "/noname/logo/logo-dj noname 2.png",
      alt: "DJ NONAME",
      scale: 115,
      showInHero: false,
    },
  },
  navigation: {
    items: [
      { label: "Bio", href: "#about" },
      { label: "Références", href: "#clubs" },
      { label: "Galerie", href: "#gallery" },
      { label: "Vidéos", href: "#videos" },
      { label: "YouTube", href: "#youtube" },
      { label: "Urban Hit", href: "#vision" },
      { label: "SoundCloud", href: "#sound" },
      { label: "Rider", href: "#rider" },
    ],
    cta: {
      label: "Booking",
      href: "#contact",
      variant: "primary",
    },
  },
  heroSocials: [
    { label: "Instagram", href: instagramUrl, icon: "instagram" },
    { label: "YouTube", href: youtubeUrl, icon: "youtube" },
    { label: "SoundCloud", href: soundCloudUrl, icon: "soundcloud" },
    { label: "TikTok", href: tikTokUrl, icon: "tiktok" },
    { label: "Facebook", href: facebookUrl, icon: "facebook" },
  ],
  heroVariants: {
    impact: {
      eyebrow: "",
      title: "DJ NONAME",
      accent: "DJ BEATMAKER & ANIMATEUR",
      description:
        "Basé à La Réunion, Noname est un DJ éclectique à plusieurs facettes, entre sets taillés pour le club, beatmaking et radio.",
      layout: "impact",
      image: {
        src: heroImage,
        alt: "DJ Noname hero portrait",
        badge: "",
        caption: "",
        position: "center 24%",
      },
      ctas: [
        { label: "Booking", href: "#contact", variant: "primary" },
        { label: "Voir galerie", href: "#gallery", variant: "secondary" },
      ],
      stats: [
        { value: "9+", label: "ans d'expérience club" },
        { value: "Hip-Hop / R&B", label: "styles de prédilection" },
        { value: "Owner", label: "Le Club Hip Hop & Hola Sunday" },
        { value: "NRJ Réunion", label: "animateur radio depuis 2023" },
      ],
      proofline:
        "Hip-Hop - R&B - Dancehall - Afro - Baile Funk - Classics",
    },
    interactive: {
      eyebrow: "",
      title: "DJ NONAME",
      accent: "DJ BEATMAKER & ANIMATEUR",
      description:
        "Basé à La Réunion, Noname est un DJ éclectique à plusieurs facettes, entre sets taillés pour le club, beatmaking et radio.",
      layout: "interactive",
      image: {
        src: heroImage,
        alt: "DJ Noname press visual",
        badge: "",
        caption: "",
        position: "center 24%",
      },
      ctas: [
        { label: "Booking", href: "#contact", variant: "primary" },
        { label: "Voir galerie", href: "#gallery", variant: "secondary" },
      ],
      stats: [
        { value: "9+", label: "ans d'expérience club" },
        { value: "Hip-Hop / R&B", label: "styles de prédilection" },
        { value: "Owner", label: "Le Club Hip Hop & Hola Sunday" },
        { value: "NRJ Réunion", label: "animateur radio depuis 2023" },
      ],
      proofline:
        "Hip-Hop - R&B - Dancehall - Afro - Baile Funk - Classics",
    },
    showcase: {
      eyebrow: "",
      title: "DJ NONAME",
      accent: "DJ BEATMAKER & ANIMATEUR",
      description:
        "Basé à La Réunion, Noname est un DJ éclectique à plusieurs facettes, entre sets taillés pour le club, beatmaking et radio.",
      layout: "showcase",
      image: {
        src: heroImage,
        alt: "DJ Noname editorial portrait",
        badge: "",
        caption: "",
        position: "center 24%",
      },
      ctas: [
        { label: "Booking", href: "#contact", variant: "primary" },
        { label: "Voir galerie", href: "#gallery", variant: "secondary" },
      ],
      stats: [
        { value: "9+", label: "ans d'expérience club" },
        { value: "Hip-Hop / R&B", label: "styles de prédilection" },
        { value: "Owner", label: "Le Club Hip Hop & Hola Sunday" },
        { value: "NRJ Réunion", label: "animateur radio depuis 2023" },
      ],
      proofline:
        "Hip-Hop - R&B - Dancehall - Afro - Baile Funk - Classics",
    },
  },
  about: {
    eyebrow: "Bio",
    title: "La Réunion,\nles clubs, la radio.",
    signatureLabel: "Signature",
    signatureQuote:
      "Noname est reconnu pour sa sélection éclectique, allant du Hip-Hop au R&B, en passant par le Moombahton, le Baile Funk, le Dancehall et la musique Afro.",
    supportingText: "",
    tags: ["Hip-Hop", "R&B", "Moombahton", "Baile Funk", "Dancehall", "Afro", "Classics 90s"],
    paragraphs: [
      "Né à l'île de La Réunion, Noname construit un parcours entre son île, les clubs, la radio et les scènes urbaines. Depuis 2017, il s'illustre auprès de DJs majeurs et sur des dancefloors exigeants.",
      "Il est régulièrement guest sur les ondes de la radio nationale Mouv', notamment aux côtés de l'artiste international Vashtie ou du DJ/Producteur jamaïcain The Kemist. Dès 2018, il devient résident de deux lieux mythiques de la culture Hip-Hop à Paris : le Twenty Sound Bar et le F.A.T. Bar.",
      "Curieux de nature et enfant des 90s, il n'hésite pas à se replonger dans le passé pour faire découvrir ou redécouvrir les classic hits de l'époque, tout en gardant une énergie connectée aux clubs d'aujourd'hui.",
      "Sa rapide ascension lui ouvre les portes de l'AccorHotels Arena dès 2019, où il mixe devant 15 000 personnes. En 2020, il devient Road Manager pour Dirty Swift lors de la première partie du concert de DJ Snake à la U-Arena devant 42 000 personnes.",
      "Il est également DJ officiel de l'artiste Ossem. Ensemble, ils se produisent sur la scène du prestigieux festival Les Ardentes en Belgique, partageant l'affiche avec Burna Boy, Asap Rocky, Gazo, Stromae ou encore Orelsan.",
    ],
  },
  clubs: {
    eyebrow: "Références",
    title: "Références\nclubs & scènes.",
    description:
      "Une sélection de lieux, radios et scènes où Noname a joué ou collaboré.",
    regions: [
      {
        title: "Références clés",
        icon: "map-pin",
        items: [
          "Wanderlust (Paris)",
          "Palais Maillot (Paris)",
          "Mouv' Radio (Guest DJ)",
          "Urban Hit Réunion (DJ officiel)",
          "AccorHotels Arena Bercy (Paris)",
          "Festival Les Ardentes (Belgique)",
          "La Cité des Arts (Réunion)",
          "After Olympia Oxmo Puccino (Paris)",
          "Opening Le Salon by Fifou (Paris)",
          "Opening studio Rime Nahmani (Paris)",
        ],
      },
      {
        title: "Clubs & scènes",
        icon: "globe",
        items: [
          "Grey Club (Paris)",
          "Café Barge (Paris)",
          "L'Étage (Paris)",
          "Lagoon (Paris)",
          "Mix Club (Paris)",
          "F.A.T. Bar (Paris)",
          "Mama Shelter (Paris)",
          "L'Éphémère Club (Paris)",
          "Colors Club (Nantes)",
          "La Villa (Réunion)",
          "Beach Club (Réunion)",
          "Mahé Club (Réunion)",
          "Titty Club (Réunion)",
          "Downtown (Réunion)",
          "Tout Le Monde En Parle (Paris)",
          "Twenty One Sound Bar (Paris)",
          "Daomey Store (Paris & Londres)",
        ],
      },
    ],
  },
  videos: {
    eyebrow: "Vidéos",
    title: "Extraits\nlive.",
    description:
      "Quelques séquences pour voir Noname derrière les platines.",
    items: [],
  },
  youtube: {
    eyebrow: "YouTube",
    title: "Immersion dans\nl'univers de Noname.",
    description: "",
    items: [
      {
        id: "noname-youtube-2fmd7lrp3ai",
        source: "youtube",
        title: "Session vidéo",
        description: "Sélection urbaine et club.",
        embedUrl: "https://www.youtube.com/embed/2FmD7LRP3aI?si=Wk6T07F9zSzztAzi",
      },
      {
        id: "noname-youtube-q3tytumyzxi",
        source: "youtube",
        title: "Urban selection",
        description: "Hip-Hop, R&B et sons club.",
        embedUrl: "https://www.youtube.com/embed/q3TytuMYZXI?si=r9AH6yyWwEew-WHL",
      },
    ],
    cta: {
      label: "Voir la chaîne",
      href: youtubeUrl,
      external: true,
      variant: "secondary",
    },
  },
  vision: {
    eyebrow: "Urban Hit Réunion",
    title: "Animateur\nsur NRJ Réunion.",
    intro:
      "En 2023, Noname devient DJ officiel de la radio Urban Hit Réunion et lance son émission URBAN CLUB tous les samedis de 20h à 22h.",
    paragraphs: [
      "Le format prolonge ce qui fait sa signature : une sélection éclectique, capable de passer du Hip-Hop au R&B, du Dancehall à l'Afro.",
      "Chaque semaine, il y reçoit et interviewe des artistes montants et des stars nationales et internationales.",
    ],
    media: [],
    embed: {
      title: "Urban Club #98 - DJ Noname",
      src: urbanClubPodcastEmbedUrl,
      height: 300,
    },
    cta: {
      label: "Podcasts Urban Club",
      href: "https://soundcloud.com/djnoname1",
      external: true,
      variant: "primary",
    },
  },
  sound: {
    eyebrow: "SoundCloud",
    title: "Urban Club\n& mixtapes.",
    paragraphs: [
      "Retrouvez les podcasts Urban Club, mixtapes et sélections de DJ Noname sur SoundCloud.",
    ],
    cta: {
      label: "Écouter sur SoundCloud",
      href: soundCloudUrl,
      external: true,
    },
    embedTitle: "Lecteur SoundCloud DJ Noname",
    embedUrl: soundCloudEmbedUrl,
  },
  spotify: {
    eyebrow: "Spotify",
    title: "Playlists",
    description: "",
    playlists: [],
    badgeLabel: "Spotify",
  },
  brands: {
    eyebrow: "",
    title: "",
    intro: "",
    supportingText: "",
    categories: [],
    itemLabel: "",
    items: [],
  },
  rider: {
    eyebrow: "Rider",
    title: "Rider\ntechnique.",
    groups: [
      {
        title: "Mixer",
        items: ["Pioneer DJM-S9 ou Pioneer DJM-S11"],
      },
      {
        title: "Platines vinyles",
        items: ["2 Technics MK2 ou 2 Pioneer PLX 1000"],
      },
      {
        title: "Contrôleurs / lecteurs",
        items: ["2 RANE Twelve ou 2 CDJ 2000 / 3000"],
      },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Booking",
    description:
      "Pour une date club, un événement privé, une programmation radio, une scène urbaine ou une collaboration artistique, contactez DJ Noname.",
    methods: [
      {
        label: "Email",
        value: bookingEmail,
        href: `mailto:${bookingEmail}`,
        icon: "mail",
      },
      {
        label: "WhatsApp",
        value: "WhatsApp booking",
        href: whatsappHref,
        icon: "whatsapp",
        external: true,
      },
      {
        label: "Instagram",
        value: "@dj_noname_",
        href: instagramUrl,
        icon: "instagram",
        external: true,
      },
    ],
  },
  gallery: {
    eyebrow: "Galerie",
    title: "Photos",
    description:
      "Photos presse et images live de DJ Noname.",
    homepageTitle: "Visuels",
    homepageCtaLabel: "Voir toutes les photos",
    images: gallery,
  },
  footer: {
    availabilityText:
      "DJ open format · La Réunion · Clubs, radio, festivals et événements privés.",
    navigationLabel: "Navigation",
    socialLabel: "Réseaux",
    bookingLabel: "Booking",
    fullGalleryLabel: "Galerie complète",
    allVideosLabel: "Toutes les vidéos",
  },
};

export const noNameClient: ClientConfig = {
  slug: "noname",
  slugAliases: ["dj-noname", "djnoname", "no-name"],
  domain: "dj-noname.presskit.fr",
  vercelSubdomain: "dj-noname.vercel.app",
  domainAliases: ["noname.presskit.fr", "noname.vercel.app"],
  name: "DJ NONAME",
  tagline: "DJ Hip-Hop & R&B - La Réunion & Urban Club",
  city: "La Réunion",
  country: "France",
  category: "DJ Hip-Hop / R&B / Afro / Dancehall / Urban Club",
  description: noNamePressKit.metadata.description,
  longBio: noNamePressKit.about.paragraphs.join(" "),
  heroImage,
  gallery,
  socials: {
    instagram: instagramUrl,
    soundCloud: soundCloudUrl,
    tikTok: tikTokUrl,
    website: youtubeUrl,
    facebook: facebookUrl,
    twitch: twitchUrl,
  },
  contact: {
    email: bookingEmail,
    city: "La Réunion",
    country: "France",
  },
  services: [
    {
      title: "Clubs & scènes urbaines",
      description:
        "Sets open format entre Hip-Hop, R&B, Dancehall, Afro, Baile Funk et Moombahton.",
    },
    {
      title: "Radio & podcasts",
      description:
        "Format Urban Club, podcasts et contenus audio pour audiences urbaines.",
    },
    {
      title: "Événements privés",
      description:
        "Direction musicale adaptable pour événements privés, marques et formats culturels.",
    },
  ],
  testimonials: [],
  bookingEmail,
  seo: {
    title: "DJ Noname | Booking DJ Hip-Hop & R&B à La Réunion",
    description:
      "Booker DJ Noname : DJ international, animateur Urban Club sur NRJ Réunion, spécialisé Hip-Hop, R&B, Afro et Dancehall.",
    keywords: [
      "DJ Noname",
      "DJ Noname La Réunion",
      "DJ NONAME",
      "booking DJ Noname",
      "booker DJ Noname",
      "DJ Hip-Hop R&B Réunion",
      "DJ réunionnais La Réunion",
      "DJ Réunion",
      "Urban Hit Réunion",
      "Urban Club NRJ Réunion",
      "animateur NRJ Réunion",
      "DJ Hip-Hop Réunion",
      "DJ R&B Réunion",
      "DJ Dancehall Réunion",
      "DJ Afro Réunion",
      "DJ Baile Funk Réunion",
      "DJ Moombahton Réunion",
      "DJ Les Ardentes",
      "DJ Bercy Paris",
      "DJ U-Arena",
    ],
    canonical: "https://dj-noname.presskit.fr/",
    ogImage: "/opengraph-image",
  },
  defaultTheme: "violet",
  defaultVariant: "impact",
  pressKit: noNamePressKit,
};
