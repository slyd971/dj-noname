export type NavItem = {
  label: string;
  href: string;
};

export type CtaLink = {
  label: string;
  href: string;
  variant?: "primary" | "secondary";
  external?: boolean;
};

export type StatItem = {
  value: string;
  label: string;
};

export type SocialLink = {
  label: string;
  href: string;
  icon:
    | "instagram"
    | "tiktok"
    | "youtube"
    | "spotify"
    | "soundcloud"
    | "apple-music"
    | "facebook";
};

export type ContactMethod = {
  label: string;
  value: string;
  href: string;
  icon:
    | "mail"
    | "phone"
    | "instagram"
    | "music"
    | "tiktok"
    | "youtube"
    | "whatsapp";
  external?: boolean;
};

export type GalleryImage = {
  src: string;
  alt: string;
  size?: string;
  position?: string;
  previewScale?: number;
  previewOffsetY?: string;
  previewOnly?: boolean;
  hideFromPreview?: boolean;
};

export type SpotifyPlaylist = {
  id: string;
  title: string;
  embedUrl: string;
};

export type VideoItemBase = {
  id: string;
  title: string;
  description: string;
  poster?: string;
  aspect?: "portrait" | "landscape";
};

export type LocalVideoItem = VideoItemBase & {
  source?: "local";
  src: string;
};

export type YoutubeVideoItem = VideoItemBase & {
  source: "youtube";
  embedUrl: string;
};

export type VideoItem = LocalVideoItem | YoutubeVideoItem;

export type PressKitConfig = {
  metadata: {
    title: string;
    description: string;
  };
  ui: {
    openMenuLabel: string;
    closeMenuLabel: string;
    galleryViewLabel: string;
    galleryDownloadLabel: string;
    galleryCloseLabel: string;
    galleryPreviousLabel: string;
    galleryNextLabel: string;
  };
  artist: {
    name: string;
    stageLabel: string;
    logo: {
      src: string;
      alt: string;
      scale?: number;
      invert?: boolean;
      showInHero?: boolean;
    };
  };
  navigation: {
    items: NavItem[];
    cta: CtaLink;
  };
  heroSocials?: SocialLink[];
  heroVariants: Record<
    "impact" | "interactive" | "showcase",
    {
      eyebrow: string;
      title: string;
      accent: string;
      description: string;
      layout: "impact" | "interactive" | "showcase";
      image: {
        src: string;
        alt: string;
        badge: string;
        caption: string;
        position?: string;
      };
      ctas: CtaLink[];
      stats: StatItem[];
      proofline?: string;
      mediaCard?: {
        label: string;
        title: string;
        subtitle: string;
        imageSrc: string;
        imageAlt: string;
        href: string;
      };
      footerNote?: string;
    }
  >;
  about: {
    eyebrow: string;
    title: string;
    signatureLabel: string;
    signatureQuote: string;
    supportingText: string;
    tags: string[];
    paragraphs: string[];
  };
  clubs: {
    eyebrow: string;
    title: string;
    description: string;
    itemIconOverrides?: Record<string, { src: string; alt: string }>;
    regions: Array<{
      title: string;
      icon: "map-pin" | "globe";
      items: string[];
    }>;
  };
  highlights?: {
    eyebrow: string;
    title: string;
    intro?: string;
    items: Array<{
      title: string;
      venue: string;
      description?: string;
      images?: Array<{
        src: string;
        alt: string;
      }>;
    }>;
  };
  sound: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    cta: CtaLink;
    embedTitle: string;
    embedUrl: string;
  };
  videos: {
    eyebrow: string;
    title: string;
    description: string;
    items: VideoItem[];
    cta?: CtaLink;
  };
  youtube?: {
    eyebrow: string;
    title: string;
    description: string;
    items: YoutubeVideoItem[];
    cta: CtaLink;
  };
  vision?: {
    eyebrow: string;
    title: string;
    intro: string;
    paragraphs: string[];
    stats?: StatItem[];
    video?: {
      src: string;
      title: string;
      poster?: string;
    };
    media?: Array<{
      src: string;
      alt: string;
      label?: string;
    }>;
    embed?: {
      title: string;
      src: string;
      height?: number;
    };
    cta?: CtaLink;
  };
  spotify: {
    eyebrow: string;
    title: string;
    description: string;
    playlists: SpotifyPlaylist[];
    badgeLabel: string;
    useThemeColor?: boolean;
  };
  brands: {
    eyebrow: string;
    title: string;
    intro: string;
    supportingText: string;
    categories: string[];
    itemLabel: string;
    hideItemText?: boolean;
    hideItemFrame?: boolean;
    inlineBelowClubs?: boolean;
    items: Array<{ name: string; logo?: string; logoInvert?: boolean; href?: string } | string>;
    feedback?: {
      eyebrow: string;
      title: string;
      items: Array<{
        name: string;
        role: string;
        quote: string;
        image: string;
      }>;
      cta?: CtaLink;
    };
    fit?: {
      eyebrow: string;
      title: string;
      points: string[];
    };
  };
  rider?: {
    eyebrow: string;
    title: string;
    groups: Array<{
      title: string;
      items: string[];
    }>;
  };
  contact: {
    eyebrow: string;
    title: string;
    description: string;
    methods: ContactMethod[];
  };
  gallery: {
    eyebrow: string;
    title: string;
    description: string;
    homepageTitle: string;
    homepageCtaLabel: string;
    images: GalleryImage[];
  };
  footer?: {
    availabilityText?: string;
    navigationLabel?: string;
    socialLabel?: string;
    bookingLabel?: string;
    languageLabel?: string;
    fullGalleryLabel?: string;
    allVideosLabel?: string;
  };
};

export type ClientIntakeConfig = {
  source: "google-form";
  googleAppsScript: {
    projectDirectory: string;
    scriptFile: string;
    manifestFile: string;
    form: {
      title: string;
      description: string;
      confirmationMessage: string;
      collectEmail: boolean;
      isQuiz: boolean;
    };
  };
  importWorkflow: {
    command: string;
    latestResponseDefault: boolean;
    outputFiles: string[];
  };
};

const soundCloudProfileUrl = "https://soundcloud.com/dj-slyd/";
const soundCloudEmbedUrl =
  "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/dj-slyd/&color=%23d9252a&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true";

export const pressKitConfig: PressKitConfig = {
  metadata: {
    title: "DJ SLY'D Press Kit | Hip-Hop, Afro & Club Energy",
    description:
      "Discover DJ SLY'D, Paris-based DJ and producer blending Hip-Hop, Afro, RnB and club energy for nightlife, premium events and international bookings.",
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
    name: "DJ SLY'D",
    stageLabel: "DJ • Producer • International Energy",
    logo: {
      src: "/press-kit/logo-slyd.png",
      alt: "Sly'D logo",
      showInHero: false,
    },
  },
  navigation: {
    items: [
      { label: "About", href: "#about" },
      { label: "Clubs", href: "#clubs" },
      { label: "Gallery", href: "#gallery" },
      { label: "Videos", href: "#videos" },
      { label: "Sound", href: "#sound" },
      { label: "Spotify", href: "#spotify" },
      { label: "Contact", href: "#contact" },
    ],
    cta: {
      label: "Book SLY'D",
      href: "#contact",
      variant: "primary",
    },
  },
  heroVariants: {
    impact: {
      eyebrow: "",
      title: "DJ SLY'D",
      accent: "THE ECLECTIC",
      description:
        "Hip-hop, RnB, afro, baile funk, future beats and club-ready transitions. A premium open-format identity designed for nightlife, lifestyle events and high-energy bookings.",
      layout: "impact",
      image: {
        src: "/press-kit/2025-12-29-22-31-08-761.jpg",
        alt: "Sly'D hero visual",
        badge: "DJ SLY'D • Open Format • Paris",
        caption: "Paris to international stages",
      },
      ctas: [
        { label: "Book SLY'D", href: "#contact", variant: "primary" },
        { label: "See the gallery", href: "/gallery", variant: "secondary" },
      ],
      stats: [
        { value: "20+", label: "Years of career" },
        { value: "FR + INTL", label: "Bookings" },
        { value: "OPEN FORMAT", label: "Signature sound" },
        { value: "150+", label: "Bookings in 2025" },
      ],
    },
    interactive: {
      eyebrow: "Live experience • Open format • Paris",
      title: "DJ SLY'D",
      accent: "THE ECLECTIC",
      description:
        "Press play and step into the energy — hip-hop, afro, RnB and open-format performance built for real crowd connection.",
      layout: "interactive",
      image: {
        src: "/press-kit/2025-12-29-22-31-08-761.jpg",
        alt: "Sly'D live performance",
        badge: "Live experience • Open format • Paris",
        caption: "Paris to international stages",
      },
      ctas: [
        { label: "Book SLY'D", href: "#contact", variant: "primary" },
        { label: "See the gallery", href: "/gallery", variant: "secondary" },
      ],
      stats: [
        { value: "20+", label: "Years of career" },
        { value: "FR + INTL", label: "Bookings" },
        { value: "OPEN FORMAT", label: "Signature sound" },
        { value: "150+", label: "Bookings in 2025" },
      ],
      mediaCard: {
        label: "Live excerpt",
        title: "Inside the vibe",
        subtitle: "See how SLY'D moves a room",
        imageSrc: "/press-kit/live/live-crowd.jpg",
        imageAlt: "Live crowd preview",
        href: "#gallery",
      },
    },
    showcase: {
      eyebrow: "Open format DJ • Paris • International",
      title: "DJ SLY'D",
      accent: "THE ECLECTIC",
      description:
        "Hip-hop, RnB, afro, baile funk and club-ready energy — curated for nights that need more than just music.",
      layout: "showcase",
      image: {
        src: "/press-kit/2025-12-29-22-31-08-761.jpg",
        alt: "Sly'D live performance",
        badge: "Open format DJ • Paris • International",
        caption: "Paris to international stages",
      },
      ctas: [
        { label: "See SLY'D live", href: "#gallery", variant: "primary" },
        { label: "Listen to the sound", href: "#sound", variant: "secondary" },
      ],
      stats: [
        { value: "20+", label: "Years of career" },
        { value: "FR + INTL", label: "Bookings" },
        { value: "OPEN FORMAT", label: "Signature sound" },
        { value: "150+", label: "Bookings in 2025" },
      ],
      footerNote: "Scroll to explore",
    },
  },
  about: {
    eyebrow: "About",
    title: "More than a DJ.\nA real crowd reader.",
    signatureLabel: "Signature",
    signatureQuote: "My only goal is to surprise people.",
    supportingText:
      "A sound built between nightlife, culture and premium environments, designed to connect instantly with the crowd while fitting seamlessly into brand-driven experiences.",
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
      "DJ SLY'D is a Paris-based DJ with over 17 years of experience, known for delivering high-energy, crowd-driven performances built on a strong open-format identity.",
      "His sound moves naturally between hip-hop, RnB, afrobeat, baile funk and future sounds, blending genres with precision and instinct to create seamless transitions and maintain constant energy on the dancefloor.",
      "From Paris nightlife to international stages, SLY'D has built a profile at the intersection of club culture, lifestyle events and premium brand experiences.",
      "Each set is designed as a journey: reading the room, building tension and delivering impact at the right moment.",
    ],
  },
  clubs: {
    eyebrow: "Where I've Played",
    title: "ROOMS THAT SHAPED MY STORY",
    description:
      "From Paris nightlife staples to international bookings, SLY'D has built a route shaped by dancefloors, crowd connection and versatile open-format energy. His journey moves across club institutions, lifestyle venues and global stages where adaptability and musical identity matter just as much as performance.",
    regions: [
      {
        title: "France",
        icon: "map-pin",
        items: [
          "Wanderlust",
          "Palais de Tokyo",
          "Palais Maillot",
          "Deflower",
          "Mix Club",
          "Nouveau Casino",
          "Redlight",
          "Bounce Club (Marseille)",
          "Mango (Rennes)",
          "Chez Régine",
          "Chez Papillon",
          "Staya",
          "Café Oz",
          "Beefcut",
          "Libertalia",
          "Bateau Phare",
          "Gypsy Twister",
          "Grey Club",
          "Café Barge",
        ],
      },
      {
        title: "International",
        icon: "globe",
        items: [
          "Singapore",
          "Manchester",
          "Zagreb",
          "Sion",
          "Berlin",
          "Miami",
          "Stuttgart",
          "Abidjan",
        ],
      },
    ],
  },
  sound: {
    eyebrow: "Sound",
    title: "SLY'D ON SOUNDCLOUD",
    paragraphs: [
      "Beyond the club, SLY'D extends his musical identity through curated mixes, edits and live-driven selections built to capture energy, tension and release.",
      "Each set blends hip-hop, RnB, afro, baile funk and future sounds into seamless transitions designed for real dancefloor impact.",
      "From warm-up moods to peak-time energy, this is where the full range of the sound comes through.",
    ],
    cta: {
      label: "Explore SoundCloud",
      href: soundCloudProfileUrl,
      variant: "primary",
      external: true,
    },
    embedTitle: "Sly'D SoundCloud Player",
    embedUrl: soundCloudEmbedUrl,
  },
  videos: {
    eyebrow: "Live moments",
    title: "HOW I MOVE A ROOM",
    description:
      "These videos show the way I build energy in real time, read the crowd and turn a set into a moment people actually feel.",
    items: [
      {
        id: "crowd-ignition",
        title: "Immediate connection",
        description: "A first look at the energy, presence and crowd response I build from the start.",
        src: "/slyd/slyd-video-5.mp4",
        poster: "/press-kit/_DSC6062.jpg",
      },
      {
        id: "night-shift",
        title: "Late-night pressure",
        description: "A darker, more intense club moment built around tension, rhythm and release.",
        src: "/slyd/slyd-video-3-web.mp4",
        poster: "/press-kit/2025-12-29-22-28-27-905.jpg",
      },
      {
        id: "open-format-cut",
        title: "Open-format signature",
        description: "A clear snapshot of my range, transitions and the way I keep the room engaged.",
        src: "/slyd/slyd-video-7.mp4",
        poster: "/press-kit/DSC02599.jpg",
      },
    ],
  },
  spotify: {
    eyebrow: "Spotify",
    title: "Playlist Selection",
    description:
      "Curated playlists that extend SLY'D's musical universe beyond the dancefloor and give bookers, partners and media a sharper feel for the sound.",
    badgeLabel: "Spotify",
    playlists: [
      {
        id: "01",
        title: "SLY'D RNB Playlist",
        embedUrl:
          "https://open.spotify.com/embed/playlist/5ET5SEt2lhtNVE1qzukYnc?utm_source=generator&theme=0",
      },
      {
        id: "02",
        title: "SLY'D Turn up Playlist",
        embedUrl:
          "https://open.spotify.com/embed/playlist/0cxc2fz6YHM3LXh4uxDuiS?utm_source=generator&theme=0",
      },
      {
        id: "03",
        title: "SLY'D Rap & Trap FR Playlist",
        embedUrl:
          "https://open.spotify.com/embed/playlist/1zz1Uo5vfJKrUAlxEp5zJ7?utm_source=generator&theme=0",
      },
    ],
  },
  brands: {
    eyebrow: "Brands & Culture",
    title: "Brand-safe. Culture-led.\nPremium-ready.",
    intro:
      "Positioned at the intersection of nightlife, culture and premium brand environments, SLY'D delivers experiences that translate seamlessly from club energy to high-end activations.",
    supportingText:
      "His ability to read the room, adapt his sound and align with brand identity makes him a strong fit for fashion, sportswear, media and lifestyle collaborations.",
    categories: ["Fashion", "Sportswear", "Media", "Premium Events"],
    itemLabel: "Brand / Media",
    items: ["Dior", "Airness", "Foot Locker", "Mouv' Radio"],
    fit: {
      eyebrow: "Why I fit",
      title: "A strong crossover between nightlife credibility and brand elegance.",
      points: [
        "Curated image with premium visual identity.",
        "Open-format sets adaptable to public and private formats.",
        "Strong fit for launch parties, in-store events, media activations and cultural collaborations.",
        "Able to bridge street culture, lifestyle positioning and elevated event atmospheres.",
      ],
    },
  },
  contact: {
    eyebrow: "Contact",
    title: "Ready to move the room?",
    description:
      "For booking inquiries, private events, club nights or branded experiences, contact SLY'D directly.",
    methods: [
      {
        label: "Mail",
        value: "dj-slyd@hotmail.com",
        href: "mailto:dj-slyd@hotmail.com",
        icon: "mail",
      },
      {
        label: "Bookings",
        value: "+33 6 63 90 78 88",
        href: "tel:+33663907888",
        icon: "phone",
      },
      {
        label: "Instagram",
        value: "@djslyd",
        href: "https://instagram.com/djslyd",
        icon: "instagram",
        external: true,
      },
      {
        label: "SoundCloud",
        value: "dj-slyd",
        href: soundCloudProfileUrl,
        icon: "music",
        external: true,
      },
      {
        label: "TikTok",
        value: "@djslyd",
        href: "https://www.tiktok.com/@djslyd/",
        icon: "tiktok",
        external: true,
      },
    ],
  },
  gallery: {
    eyebrow: "Press Kit",
    title: "Gallery",
    description:
      "High-resolution visuals available for promoters, brands and media. Click any image to view in full and download.",
    homepageTitle: "THE WORLD AROUND SLY'D",
    homepageCtaLabel: "See full gallery",
    images: [
      {
        src: "/press-kit/DSC02563.jpg",
        alt: "DJ SLY'D editorial portrait for press kit",
        size: "md:col-span-2 md:row-span-2",
        position: "center 12%",
        previewScale: 1.18,
      },
      {
        src: "/press-kit/2025-12-29-22-28-27-905.jpg",
        alt: "DJ SLY'D night portrait in club lighting",
        size: "md:col-span-1",
        position: "center 12%",
        previewScale: 1.18,
      },
      {
        src: "/press-kit/1000019881.jpg",
        alt: "DJ SLY'D urban portrait",
        size: "md:col-span-1",
        position: "center 10%",
        previewScale: 1.2,
      },
      {
        src: "/press-kit/20250628_205905.jpg",
        alt: "DJ SLY'D live portrait during event performance",
        size: "md:col-span-2",
        position: "center 18%",
        previewScale: 1.18,
        previewOffsetY: "18%",
      },
      {
        src: "/press-kit/OUTFIT MIC_20250727_194822_0000.png",
        alt: "DJ SLY'D portrait with microphone for media use",
      },
      {
        src: "/press-kit/_DSC6062.jpg",
        alt: "DJ SLY'D portrait in streetwear styling",
      },
      {
        src: "/press-kit/DSC_9021-Avec-accentuation-Bruit.jpg",
        alt: "DJ SLY'D performing a live DJ set",
      },
      {
        src: "/press-kit/DSC02599.jpg",
        alt: "DJ SLY'D on stage during a club performance",
      },
      {
        src: "/press-kit/Screenshot_20251229_234153_Gallery.jpg",
        alt: "DJ SLY'D gallery still from live performance",
      },
      {
        src: "/press-kit/Java-10.jpg",
        alt: "DJ SLY'D behind the decks at an event",
      },
      {
        src: "/press-kit/Screenshot_20251229_234057_Gallery.jpg",
        alt: "DJ SLY'D crowd-facing performance visual",
      },
    ],
  },
};

export const clientIntakeConfig: ClientIntakeConfig = {
  source: "google-form",
  googleAppsScript: {
    projectDirectory: "dj-onboarding-form",
    scriptFile: "dj-onboarding-form/Code.gs",
    manifestFile: "dj-onboarding-form/appsscript.json",
    form: {
      title: "Onboarding - DJ / Press Kit",
      description:
        "Ce formulaire nous aide a recuperer les bonnes informations pour creer ton site / press kit DJ. Merci de repondre simplement, avec des infos concretes et faciles a exploiter.",
      confirmationMessage: "Merci, tes reponses ont bien ete envoyees.",
      collectEmail: true,
      isQuiz: false,
    },
  },
  importWorkflow: {
    command: 'npm run import:client-form -- "/path/to/export.xlsx"',
    latestResponseDefault: true,
    outputFiles: [
      "data/client-intake.json",
      "CLIENT_INTAKE.md",
      "data/config.ts",
    ],
  },
};
