import type { PressKitConfig } from "@/data/config";
import type { ClientConfig } from "@/data/clients/types";

const instagramUrl = "https://www.instagram.com/djfloparis";
const tikTokUrl = "https://www.tiktok.com/@djfloparis";
const soundCloudUrl = "https://soundcloud.com/djfloparis";
const soundCloudEmbedUrl =
  "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/djfloparis&color=%23F5C400&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true";
const youtubeUrl = "https://www.youtube.com/@djfloparis";
const spotifyUrl =
  "https://open.spotify.com/playlist/478ZoJDjn5MPFv0yr78WWq?si=9fc07f2130024015";
const spotifyEmbedUrl =
  "https://open.spotify.com/embed/playlist/478ZoJDjn5MPFv0yr78WWq?utm_source=generator";
const bookingEmail = "contact@djfloparis.com";
const whatsappHref = "https://wa.me/33761672378";
const heroImage = "/dj-flo/optimized/hero.jpg";
const logo = "/dj-flo/optimized/djflo-logo.svg";

const gallery = [
  {
    src: "/dj-flo/optimized/gallery/studio-portrait-1.jpg",
    alt: "FLO studio portrait",
    position: "center 24%",
  },
  {
    src: "/dj-flo/optimized/gallery/urban-portrait-1.jpg",
    alt: "FLO urban portrait",
    position: "center 28%",
  },
  {
    src: "/dj-flo/optimized/gallery/decks-1.jpg",
    alt: "FLO behind the decks",
    position: "center 34%",
  },
  {
    src: "/dj-flo/optimized/gallery/decks-2.jpg",
    alt: "FLO live at MOB Sessions",
    size: "md:col-span-2",
    position: "center 36%",
  },
  {
    src: "/dj-flo/optimized/gallery/studio-portrait-2.jpg",
    alt: "FLO editorial portrait",
    position: "center 22%",
  },
  {
    src: "/dj-flo/optimized/gallery/decks-3.jpg",
    alt: "FLO Panam en Fete event",
    position: "center 34%",
  },
  {
    src: "/dj-flo/optimized/gallery/portrait-hero-4.jpg",
    alt: "FLO portrait",
    position: "center 30%",
    previewOnly: true,
  },
];

const clientLogos = [
  { name: "Hotel de Crillon", logo: "/dj-flo/optimized/logos/crillon-white.png" },
  { name: "MOB House", logo: "/dj-flo/optimized/logos/mob-house.png", logoInvert: true },
  { name: "Marriott", logo: "/dj-flo/optimized/logos/marriott.png", logoInvert: true },
  { name: "Mama Shelter", logo: "/dj-flo/optimized/logos/mama-shelter.png" },
  { name: "Vinci", logo: "/dj-flo/optimized/logos/vinci.png", logoInvert: true },
  { name: "Clarins", logo: "/dj-flo/optimized/logos/clarins.png", logoInvert: true },
  { name: "Zaha Hadid Architects", logo: "/dj-flo/optimized/logos/zaha-hadid.webp", logoInvert: true },
  { name: "Melia Hotels", logo: "/dj-flo/optimized/logos/melia-hotels.png" },
] satisfies NonNullable<PressKitConfig["brands"]>["items"];

const floPressKitFr: PressKitConfig = {
  metadata: {
    title: "FLO – DJ Open Format Paris Londres | Hôtels & Corporate",
    description:
      "Découvrez FLO, DJ open format entre Paris et Londres, spécialiste des expériences musicales premium pour hôtels, marques, rooftops et événements corporate.",
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
    name: "FLO",
    stageLabel: "DJ - Entrepreneur Culturel",
    logo: {
      src: logo,
      alt: "Logo FLO",
      scale: 100,
    },
  },
  navigation: {
    items: [
      { label: "À propos", href: "#about" },
      { label: "Clients", href: "#clubs" },
      { label: "Galerie", href: "#gallery" },
      { label: "Panam' en Fête", href: "#vision" },
      { label: "Musique", href: "#sound" },
    ],
    cta: {
      label: "Contacter Flo",
      href: "#contact",
      variant: "primary",
    },
  },
  heroSocials: [
    { label: "Instagram", href: instagramUrl, icon: "instagram" },
    { label: "SoundCloud", href: soundCloudUrl, icon: "soundcloud" },
    { label: "TikTok", href: tikTokUrl, icon: "tiktok" },
  ],
  heroVariants: {
    impact: {
      eyebrow: "",
      title: "Flo",
      accent: "DJ Open-Format Premium",
      description:
        "Le DJ qui fait de votre événement un moment dont on se souvient.",
      layout: "impact",
      image: {
        src: heroImage,
        alt: "FLO portrait hero",
        badge: "",
        caption: "",
        position: "center 27%",
      },
      ctas: [
        { label: "Contacter FLO", href: "#contact", variant: "primary" },
        { label: "Écouter", href: "#sound", variant: "secondary" },
      ],
      stats: [
        { value: "10+", label: "ans d'expérience" },
        { value: "120+", label: "prestations l'an dernier" },
        { value: "25+", label: "clients hotels & corporate" },
        { value: "PARIS/LONDON", label: "rayonnement" },
      ],
      proofline: "Hip-Hop - R&B - Funk - Afrobeats - Soul - Dancehall",
    },
    interactive: {
      eyebrow: "",
      title: "FLO",
      accent: "LIVE",
      description:
        "Un DJ capable de lire une salle et de porter l'identité sonore d'un lieu du premier titre jusqu'à la fermeture.",
      layout: "interactive",
      image: {
        src: heroImage,
        alt: "FLO live visual",
        badge: "",
        caption: "",
        position: "center 27%",
      },
      ctas: [
        { label: "YouTube", href: "#youtube", variant: "primary" },
        { label: "Galerie", href: "#gallery", variant: "secondary" },
      ],
      stats: [
        { value: "OPEN", label: "format" },
        { value: "HIP-HOP", label: "R&B & Soul" },
        { value: "AFRO", label: "Afrobeats & Dancehall" },
        { value: "NO STRESS", label: "brief to last track" },
      ],
      proofline: "Sea Containers - Hotel de Crillon - MOB House - Marriott",
    },
    showcase: {
      eyebrow: "",
      title: "FLO",
      accent: "PARIS",
      description:
        "Entre prestations premium et direction de concepts culturels, Flo travaille aussi bien pour des marques comme Clarins ou Vinci que pour ses propres soirées PANAM' EN FETE.",
      layout: "showcase",
      image: {
        src: heroImage,
        alt: "FLO press photo",
        badge: "",
        caption: "",
        position: "center 27%",
      },
      ctas: [
        { label: "Clients", href: "#clubs", variant: "primary" },
        { label: "Panam' en Fête", href: "#vision", variant: "secondary" },
      ],
      stats: [
        { value: "MOB", label: "sessions mensuelles" },
        { value: "200+", label: "personnes par édition" },
        { value: "1500+", label: "participants Panam" },
        { value: "10", label: "événements collectifs" },
      ],
      proofline: "Professional, warm, attentive and precise.",
    },
  },
  about: {
    eyebrow: "Bio",
    title: "Un partenaire musical\npour lieux et marques exigeants.",
    signatureLabel: "Signature",
    signatureQuote:
      "Sa capacité à lire une salle et à adapter l'énergie fait de lui un partenaire de confiance.",
    supportingText:
      "DJ open format basé entre Paris et Londres, spécialiste des hôtels, marques et événements premium.",
    tags: ["Open format", "Hip-Hop", "R&B", "Funk", "Afrobeats", "Soul", "Dancehall"],
    paragraphs: [
      "Avec plus de dix ans d'expérience dans le monde du business et de l'événementiel, Flo n'est pas juste un DJ mais votre partenaire dans la création d'expériences musicales uniques pour votre lieu ou vos clients.",
      "Il anime les soirées et événements les plus exigeants, du rooftop branché de Sea Containers à Londres au palace cinq étoiles de l'Hôtel de Crillon à Paris, en passant par des soirées corporate pour des marques comme Sodexo, Vinci, Asphalte ou Clarins.",
      "Son univers musical navigue entre Hip Hop, Soul, R&B et Afrobeats, mais c'est sa capacité à lire une salle et à adapter son énergie à chaque ambiance qui fait de lui un partenaire de confiance. Professionnel, souriant, à l'écoute, il prend en charge l'identité sonore de votre événement du briefing jusqu'au dernier titre.",
      "Au-delà de ces prestations, Flo est le fondateur du collectif PANAM' EN FÊTE dont la mission est de rassembler les Parisiens autour de concepts musicaux forts et originaux tels que les MOB SESSIONS qui réunissent chaque mois plus de 200 personnes à l'hôtel MOB House à St Ouen.",
    ],
  },
  clubs: {
    eyebrow: "Clients",
    title: "Hotels, marques,\nlieux premium.",
    description:
      "FLO excelle dans les prestations pour hôtels, bar rooftops et clients entreprises qui exigent une ambiance élégante et premium.",
    regions: [
      {
        title: "Clients Hotels",
        icon: "map-pin",
        items: [
          "Hotel de Crillon",
          "Hotels Renaissance",
          "MOB House",
          "MAMA Shelter",
          "AC Hotel",
          "Melia Hotels",
          "The Stratford Hotel, Londres",
          "One Hundred Shoreditch Hotel, Londres",
        ],
      },
      {
        title: "Clients Marques",
        icon: "globe",
        items: [
          "Sodexo",
          "Clarins",
          "Vinci",
          "Marriott",
          "Accor",
          "Fitness Park",
          "Zaha Hadid Architects, UK",
          "Fuse, UK",
        ],
      },
    ],
  },
  highlights: {
    eyebrow: "Moments forts 2025",
    title: "Les temps forts\nqui marquent l'année.",
    intro:
      "Une sélection issue du press kit FLO 1.0, entre lieux premium, projets culturels et événements à forte identité musicale.",
    items: [
      {
        title: "Soirée Comédie Club",
        venue: "La Sand Fabrik, Pantin",
        description:
          "Un format live et convivial, pensé pour accompagner l'énergie d'une soirée comedy club et prolonger l'ambiance après scène.",
        images: [
          { src: "/dj-flo/optimized/highlights/comedy-1.jpg", alt: "Brigade Comedy Club - FLO behind the decks" },
          { src: "/dj-flo/optimized/highlights/comedy-2.jpg", alt: "Brigade Comedy Club - ambiance soirée" },
        ],
      },
      {
        title: "Lancement du collectif PANAM' EN FÊTE",
        venue: "Pigalle",
        description:
          "Le point de départ public du collectif imaginé par Flo pour réunir Paris autour de concepts musicaux fédérateurs.",
        images: [
          { src: "/dj-flo/optimized/highlights/panam-launch-1.jpg", alt: "Lancement PANAM' EN FÊTE - soirée Pigalle" },
          { src: "/dj-flo/optimized/highlights/panam-launch-2.jpg", alt: "Lancement PANAM' EN FÊTE - ambiance" },
        ],
      },
      {
        title: "Gala du Shede Festival",
        venue: "Hôtel de Crillon",
        description:
          "Une prestation dans un cadre palace, avec une direction musicale adaptée à un événement élégant et exigeant.",
        images: [
          { src: "/dj-flo/optimized/highlights/crillon-1.jpg", alt: "Gala Shede Festival - Hôtel de Crillon" },
          { src: "/dj-flo/optimized/highlights/crillon-2.jpg", alt: "Gala Shede Festival - FLO au Crillon" },
        ],
      },
      {
        title: "DJ set Cowboy Carter Tour",
        venue: "Hôtel Renaissance Vendôme",
        description:
          "Un set événementiel connecté à l'univers Cowboy Carter, pensé pour une audience premium et internationale.",
        images: [
          { src: "/dj-flo/optimized/highlights/cowboy-carter-1.jpg", alt: "DJ Set Cowboy Carter - signage événement" },
          { src: "/dj-flo/optimized/highlights/cowboy-carter-2.jpg", alt: "DJ Set Cowboy Carter - FLO en action" },
        ],
      },
    ],
  },
  sound: {
    eyebrow: "SoundCloud",
    title: "FLO\nsur SoundCloud.",
    paragraphs: [
      "Découvrez un aperçu des sets de Flo entre Hip-Hop, Soul, R&B, Funk, Afrobeats et Dancehall.",
      "Son profil SoundCloud illustre la diversité de ses sets : d'une mise en ambiance élégante jusqu'à un dancefloor assumé.",
    ],
    cta: {
      label: "Ecouter sur SoundCloud",
      href: soundCloudUrl,
      external: true,
    },
    embedTitle: "Lecteur SoundCloud FLO",
    embedUrl: soundCloudEmbedUrl,
  },
  videos: {
    eyebrow: "Vidéos",
    title: "FLO en action.",
    description:
      "Immersion dans l'univers de FLO.",
    items: [],
  },
  youtube: {
    eyebrow: "YouTube",
    title: "FLO en vidéo.",
    description:
      "Un format vidéo pour découvrir l'énergie, l'approche et l'univers de FLO.",
    items: [
      {
        id: "flo-youtube-feature",
        source: "youtube",
        title: "FLO x The Way Sound x MOB House",
        description:
          "DJ Set réalisé en collaboration avec la chaîne Youtube The Way Sound et l'hôtel 4 étoiles MOB House. Le partenariat avait pour objectif de mettre en valeur le bar de cet élégant et luxueux hôtel situé au cœur des puces de St Ouen.",
        embedUrl: "https://www.youtube.com/embed/ihHAT6KhL2E",
      },
    ],
    cta: {
      label: "Voir sur YouTube",
      href: "https://www.youtube.com/watch?si=RQ8GK5ayKVPSYS6m&v=ihHAT6KhL2E&feature=youtu.be",
      external: true,
      variant: "secondary",
    },
  },
  vision: {
    eyebrow: "Projet",
    title: "PANAM' EN FETE\npar FLO.",
    intro:
      "PANAM' EN FÊTE est le collectif événementiel fondé par Flo pour rassembler les Parisiens autour de concepts musicaux forts et originaux.",
    paragraphs: [
      "Depuis sa création, le collectif a réuni plus de 1 500 personnes à travers une dizaine d'événements alliant exigence artistique et accessibilité.",
      "Les MOB Sessions, organisées chaque mois au MOB House à Saint-Ouen, rendent hommage à un artiste iconique avant de laisser place à une soirée dansante qui réunit chaque mois une communauté de créatifs.",
    ],
    stats: [
      { value: "1500+", label: "participants" },
      { value: "10+", label: "événements" },
      { value: "200+", label: "personnes / MOB Session" },
    ],
    video: {
      src: "/dj-flo/optimized/videos/hh-vs-afrobeat.mp4",
      title: "Hip Hop vs Afrobeat",
    },
    media: [
      { src: "/dj-flo/optimized/panam/flyer-lauryn.jpg", alt: "MOB Sessions Lauryn Hill flyer", label: "MOB Sessions" },
      { src: "/dj-flo/optimized/panam/flyer-hh-afro.jpg", alt: "Hip Hop vs Afrobeat flyer", label: "HH vs Afro" },
      { src: "/dj-flo/optimized/panam/flyer-aaliyah.jpg", alt: "Aaliyah MOB Session flyer", label: "Aaliyah" },
    ],
    cta: {
      label: "Voir plus",
      href: "/panam-en-fete?client=dj-flo",
    },
  },
  spotify: {
    eyebrow: "Spotify",
    title: "Playlist FLO",
    description: "",
    playlists: [],
    badgeLabel: "Spotify",
  },
  brands: {
    eyebrow: "Références",
    title: "Des lieux et marques\navec lesquels Flo a travaillé.",
    intro:
      "Une sélection de lieux, hôtels et marques accompagnés par FLO pour des événements premium à Paris, Londres et au-delà.",
    supportingText:
      "Ces références partagent la même exigence : brief clair, installation fluide, lecture de salle et ambiance tenue jusqu'au dernier titre.",
    categories: ["Hotels", "Corporate", "Luxury", "Hospitality", "Lifestyle"],
    itemLabel: "Client",
    hideItemText: true,
    inlineBelowClubs: true,
    items: clientLogos,
    feedback: {
      eyebrow: "Avis clients",
      title: "Ce que disent\nles clients.",
      items: [
        {
          name: "Sasha",
          role: "Fuse",
          quote: "THANK YOU!! FLO was amazing and everyone had an incredible time.",
          image: "/dj-flo/optimized/feedback/sasha.jpg",
        },
        {
          name: "Clothilde",
          role: "Marriott",
          quote: "Merci pour cette superbe prestation. Nos clients et notre staff ont adoré !",
          image: "/dj-flo/optimized/feedback/clothilde.jpg",
        },
        {
          name: "Yana",
          role: "Zaha Hadid Architects",
          quote: "Flo était génial et nous avons passé un excellent moment. Nous avons hâte de retravailler avec lui.",
          image: "/dj-flo/optimized/feedback/yana.jpg",
        },
      ],
      cta: {
        label: "Contacter Flo",
        href: "#contact",
        variant: "primary",
      },
    },
    fit: {
      eyebrow: "Feedback",
      title: "Ce que retiennent\nles clients.",
      points: [
        '"Merci pour cette superbe prestation. Nos clients et notre staff ont adoré !" - Marriott',
        '"Flo a totalement assuré notre soirée rap 90s. Tout le monde a dansé jusqu au petit matin." - Galerie Lefebvre',
        '"Flo était génial et nous avons passé un excellent moment. Nous avons hâte de retravailler avec lui." - Zaha Hadid Architects',
      ],
    },
  },
  rider: {
    eyebrow: "Rider",
    title: "Setup\ntechnique.",
    groups: [
      {
        title: "Setup DJ Requis",
        items: [
          "2 × Pioneer CDJ-3000",
          "1 × Pioneer DJM-900NXS2",
          "Équipement professionnel équivalent accepté (CDJ-2000NXS2 / DJM-900NXS)",
        ],
      },
      {
        title: "Set up DJ Proposé (si besoin)",
        items: [
          "Enceintes Elokance Line Club 1000W × 2",
          "Platines Controller Pioneer Rev-5",
          "DJ Booth transportable",
          "Micro Shure SM58 (sans fil)",
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
    title: "Parlons de votre événement.",
    description:
      "Pour discuter d'une prestation hotel, pour un client entreprise, une soirée privée, un mariage ou un évènement culturel, contacter Flo.",
    methods: [
      {
        label: "Email",
        value: bookingEmail,
        href: `mailto:${bookingEmail}`,
        icon: "mail",
      },
      {
        label: "WhatsApp",
        value: "07 61 67 23 78",
        href: whatsappHref,
        icon: "whatsapp",
        external: true,
      },
      {
        label: "Instagram",
        value: "@djfloparis",
        href: instagramUrl,
        icon: "instagram",
        external: true,
      },
    ],
  },
  gallery: {
    eyebrow: "Galerie",
    title: "En images",
    description:
      "Photos presse, portraits, moments corporate et images behind the decks de FLO.",
    homepageTitle: "Visuels",
    homepageCtaLabel: "Voir toutes les photos",
    images: gallery,
  },
  footer: {
    availabilityText:
      "DJ Open Format · Paris & Londres · Événements Premium.",
    navigationLabel: "Navigation",
    socialLabel: "Réseaux",
    bookingLabel: "Booking",
    fullGalleryLabel: "Galerie complète",
    allVideosLabel: "Toutes les vidéos",
  },
};

const floPressKitEn: PressKitConfig = {
  ...floPressKitFr,
  metadata: {
    title: "FLO – Open Format DJ Paris & London | Hotels & Events",
    description:
      "Discover FLO, an open-format DJ between Paris and London creating premium musical experiences for hotels, brands, rooftops and corporate events.",
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
  navigation: {
    items: [
      { label: "About", href: "#about" },
      { label: "Clients", href: "#clubs" },
      { label: "Gallery", href: "#gallery" },
      { label: "Panam' en Fete", href: "#vision" },
      { label: "Sound", href: "#sound" },
    ],
    cta: {
      label: "Book Flo",
      href: "#contact",
      variant: "primary",
    },
  },
  artist: {
    ...floPressKitFr.artist,
    stageLabel: "DJ - Cultural Entrepreneur",
  },
  heroVariants: {
    impact: {
      ...floPressKitFr.heroVariants.impact,
      accent: "Premium Open-Format DJ",
      description:
        "The DJ that makes your event unforgettable.",
      ctas: [
        { label: "Book FLO", href: "#contact", variant: "primary" },
        { label: "Listen", href: "#sound", variant: "secondary" },
      ],
      stats: [
        { value: "10+", label: "years of experience" },
        { value: "120+", label: "events last year" },
        { value: "25+", label: "hotel & corporate clients" },
        { value: "PARIS/LONDON", label: "presence" },
      ],
    },
    interactive: {
      ...floPressKitFr.heroVariants.interactive,
      description:
        "A DJ who can read a room and carry the sound identity of a venue from the first track to the last.",
      ctas: [
        { label: "YouTube", href: "#youtube", variant: "primary" },
        { label: "Gallery", href: "#gallery", variant: "secondary" },
      ],
    },
    showcase: {
      ...floPressKitFr.heroVariants.showcase,
      description:
        "Between premium performances and cultural concepts, Flo works with brands like Clarins and Vinci as well as his own PANAM' EN FETE events.",
      ctas: [
        { label: "Clients", href: "#clubs", variant: "primary" },
        { label: "Panam' en Fete", href: "#vision", variant: "secondary" },
      ],
      stats: [
        { value: "MOB", label: "monthly sessions" },
        { value: "200+", label: "people per edition" },
        { value: "1500+", label: "Panam attendees" },
        { value: "10", label: "collective events" },
      ],
    },
  },
  about: {
    ...floPressKitFr.about,
    title: "A music partner\nfor demanding venues and brands.",
    signatureQuote:
      "What sets him apart is his ability to read a room and adapt his energy to every atmosphere.",
    supportingText:
      "Open-format DJ based between Paris and London, trusted by hotels, brands and premium events.",
    paragraphs: [
      "With over ten years of experience across the business and events world, Flo is more than just a DJ, he is your partner in creating unique musical experiences for your venue or your clients.",
      "He is used to performing at the most demanding events, from the buzzing rooftop of Sea Containers in London to the five-star palace of Hotel de Crillon in Paris, as well as corporate events for brands such as Sodexo, Vinci, Asphalte and Clarins.",
      "His musical world moves between Hip Hop, Soul, R&B and Afrobeats, but what truly sets him apart is his ability to read a room and adapt his energy to every atmosphere. Professional, warm and attentive, he takes care of the entire sonic identity of your event, from the initial brief to the very last track.",
      "Beyond his performances, Flo is the founder of the collective PANAM' EN FETE, whose mission is to bring Parisians together around original and compelling musical concepts, including the MOB Sessions, a monthly gathering of over 200 people at the 4-stars MOB House hotel in Saint-Ouen.",
    ],
  },
  clubs: {
    ...floPressKitFr.clubs,
    title: "Hotels, brands,\npremium venues.",
    description:
      "Flo specialises in performances for hotels, rooftop bars and corporate clients who demand an elegant, premium atmosphere.",
    regions: [
      {
        ...floPressKitFr.clubs.regions[0],
        title: "Hotel Clients",
      },
      {
        ...floPressKitFr.clubs.regions[1],
        title: "Corporate Brands",
      },
    ],
  },
  highlights: {
    eyebrow: "2025 highlights",
    title: "Key moments\nfrom the year.",
    intro:
      "A selection from the FLO 1.0 press kit, spanning premium venues, cultural projects and music-led events.",
    items: [
      {
        title: "Comedy Club night",
        venue: "La Sand Fabrik, Pantin",
        description:
          "A warm live format built to support the energy of a comedy night and extend the atmosphere after the show.",
        images: [
          { src: "/dj-flo/optimized/highlights/comedy-1.jpg", alt: "Brigade Comedy Club - FLO behind the decks" },
          { src: "/dj-flo/optimized/highlights/comedy-2.jpg", alt: "Brigade Comedy Club - event atmosphere" },
        ],
      },
      {
        title: "PANAM' EN FÊTE collective launch",
        venue: "Pigalle",
        description:
          "The public launch of Flo's collective, created to gather Paris around strong and original musical concepts.",
        images: [
          { src: "/dj-flo/optimized/highlights/panam-launch-1.jpg", alt: "PANAM' EN FÊTE launch - Pigalle night" },
          { src: "/dj-flo/optimized/highlights/panam-launch-2.jpg", alt: "PANAM' EN FÊTE launch - atmosphere" },
        ],
      },
      {
        title: "Shede Festival Gala",
        venue: "Hotel de Crillon",
        description:
          "A palace-level performance with music direction tailored to an elegant and demanding event.",
        images: [
          { src: "/dj-flo/optimized/highlights/crillon-1.jpg", alt: "Shede Festival Gala - Hotel de Crillon" },
          { src: "/dj-flo/optimized/highlights/crillon-2.jpg", alt: "Shede Festival Gala - FLO at Le Crillon" },
        ],
      },
      {
        title: "Cowboy Carter Tour DJ set",
        venue: "Renaissance Vendôme Hotel",
        description:
          "An event set connected to the Cowboy Carter universe, designed for a premium international audience.",
        images: [
          { src: "/dj-flo/optimized/highlights/cowboy-carter-1.jpg", alt: "Cowboy Carter DJ Set - event signage" },
          { src: "/dj-flo/optimized/highlights/cowboy-carter-2.jpg", alt: "Cowboy Carter DJ Set - FLO performing" },
        ],
      },
    ],
  },
  sound: {
    ...floPressKitFr.sound,
    title: "FLO\non SoundCloud.",
    paragraphs: [
      "Discover a taste of Flo's sets across Hip-Hop, Soul, R&B, Funk, Afrobeats and Dancehall.",
      "His SoundCloud profile captures the full range of styles he can cover, from an elegant, atmospheric opener to full-on dancefloor moments.",
    ],
    cta: {
      label: "Listen on SoundCloud",
      href: soundCloudUrl,
      external: true,
    },
    embedTitle: "FLO SoundCloud player",
  },
  videos: {
    ...floPressKitFr.videos,
    title: "FLO in action.",
    description:
      "Step into FLO's world.",
  },
  vision: {
    ...floPressKitFr.vision,
    eyebrow: "Project",
    title: "PANAM' EN FÊTE\nby FLO.",
    intro:
      "PANAM' EN FÊTE is the event collective founded by Flo to bring Parisians together around original and compelling musical concepts.",
    paragraphs: [
      "Since its launch, the collective has gathered over 1,500 people across more than ten events, combining artistic standards with accessibility.",
      "The MOB Sessions, held monthly at MOB House in Saint-Ouen, pay tribute to an iconic artist before giving way to a dancefloor moment that brings a community of creatives together every month.",
    ],
    stats: [
      { value: "1500+", label: "attendees" },
      { value: "10+", label: "events" },
      { value: "200+", label: "people / MOB Session" },
    ],
    cta: {
      label: "See more",
      href: "/en/panam-en-fete?client=dj-flo-en",
    },
  },
  spotify: {
    ...floPressKitFr.spotify,
    title: "FLO playlist",
    description: "",
  },
  brands: {
    ...floPressKitFr.brands,
    title: "Venues and brands\nFlo has worked with.",
    intro:
      "A selection of venues, hotels and brands FLO has supported for premium events in Paris, London and beyond.",
    supportingText:
      "These references share the same standard: clear brief, smooth setup, room reading and a vibe held until the final track.",
    feedback: {
      ...floPressKitFr.brands.feedback!,
      eyebrow: "Client feedback",
      title: "What clients\nsay.",
      cta: {
        label: "Book FLO",
        href: "#contact",
        variant: "primary",
      },
    },
    fit: {
      eyebrow: "Feedback",
      title: "What clients\nremember.",
      points: [
        '"THANK YOU!! FLO was amazing and everyone had an incredible time." - Fuse',
        '"Thanks for this amazing set. Our clients and staff loved it!" - Marriott',
        '"Flo was great. We thoroughly enjoyed it and look forward to working with you again." - Zaha Hadid Architects',
      ],
    },
  },
  rider: {
    eyebrow: "Rider",
    title: "Technical\nsetup.",
    groups: [
      {
        title: "Required DJ Setup",
        items: [
          "2 × Pioneer CDJ-3000",
          "1 × Pioneer DJM-900NXS2",
          "Equivalent professional equipment accepted (CDJ-2000NXS2 / DJM-900NXS)",
        ],
      },
      {
        title: "Proposed DJ Setup (if needed)",
        items: [
          "Elokance Line Club 1000W speakers × 2",
          "Pioneer Rev-5 Controller",
          "Portable DJ Booth",
          "Shure SM58 wireless microphone",
        ],
      },
      {
        title: "Technical requirements",
        items: [
          "1 wired microphone connected to the DJM (occasional MC use)",
          "1 available power outlet",
          "1 monitoring speaker connected to the DJM",
        ],
      },
      {
        title: "Hospitality",
        items: ["1 pack of still mineral water"],
      },
    ],
  },
  contact: {
    ...floPressKitFr.contact,
    title: "Let's talk about your event.",
    description:
      "To discuss a hotel performance, corporate event, private party, wedding or cultural event, get in touch with Flo.",
  },
  gallery: {
    ...floPressKitFr.gallery,
    eyebrow: "Gallery",
    title: "Gallery",
    description:
      "Press photos, portraits, corporate moments and behind-the-decks visuals of FLO.",
    homepageTitle: "Visuals",
    homepageCtaLabel: "See all pictures",
  },
  footer: {
    availabilityText:
      "Open Format DJ - Paris & London - Premium Events",
    navigationLabel: "Navigation",
    socialLabel: "Socials",
    bookingLabel: "Booking",
    fullGalleryLabel: "Full gallery",
    allVideosLabel: "All videos",
  },
};

export const djFloEnClient: ClientConfig = {
  slug: "dj-flo-en",
  vercelSubdomain: "dj-flo-en.vercel.app",
  name: "FLO",
  tagline: "Open-format DJ - Paris and London - premium events",
  city: "Paris",
  country: "France",
  category: "Open-format DJ / Hip-Hop / R&B / Afrobeats",
  description: floPressKitEn.metadata.description,
  longBio: floPressKitEn.about.paragraphs.join(" "),
  heroImage,
  gallery,
  socials: {
    instagram: instagramUrl,
    soundCloud: soundCloudUrl,
    tikTok: tikTokUrl,
    website: youtubeUrl,
  },
  contact: {
    email: bookingEmail,
    city: "Paris",
    country: "France",
  },
  services: [
    {
      title: "Hotels & rooftops",
      description:
        "Premium open-format sets for hospitality venues, rooftops and elegant guest experiences.",
    },
    {
      title: "Corporate & brands",
      description:
        "Reliable music direction for corporate events, launches and lifestyle brand moments.",
    },
    {
      title: "Cultural concepts",
      description:
        "Event concepts and community-driven formats through PANAM' EN FETE and MOB Sessions.",
    },
  ],
  testimonials: [],
  bookingEmail,
  seo: {
    title: floPressKitEn.metadata.title,
    description: floPressKitEn.metadata.description,
    keywords: [
      "FLO",
      "FLO Paris",
      "open format DJ Paris",
      "open format DJ London",
      "hotel DJ Paris London",
      "corporate DJ Paris",
      "private event DJ Paris",
      "MOB Sessions Paris",
    ],
    canonical: "https://dj-flo.vercel.app/",
    ogImage: heroImage,
  },
  defaultTheme: "dj-flo",
  defaultVariant: "impact",
  pressKit: floPressKitEn,
  hideFromSwitcher: true,
  languageSwitch: [
    { label: "FR", href: "/?client=dj-flo", clientSlug: "dj-flo" },
    { label: "EN", href: "/en?client=dj-flo-en", active: true },
  ],
};

export const djFloClient: ClientConfig = {
  ...djFloEnClient,
  slug: "dj-flo",
  vercelSubdomain: "dj-flo.vercel.app",
  hideFromSwitcher: false,
  tagline: "DJ open format - Paris et Londres - événements premium",
  category: "DJ open format / Hip-Hop / R&B / Afrobeats",
  description: floPressKitFr.metadata.description,
  longBio: floPressKitFr.about.paragraphs.join(" "),
  services: [
    {
      title: "Hotels & rooftops",
      description:
        "Sets open format premium pour hôtels, rooftops et expériences clients élégantes.",
    },
    {
      title: "Corporate & marques",
      description:
        "Direction musicale fiable pour événements corporate, lancements et moments lifestyle.",
    },
    {
      title: "Concepts culturels",
      description:
        "Création de formats événementiels et communautaires avec PANAM' EN FETE et les MOB Sessions.",
    },
  ],
  seo: {
    ...djFloEnClient.seo,
    title: floPressKitFr.metadata.title,
    description: floPressKitFr.metadata.description,
    keywords: [
      "FLO",
      "FLO Paris",
      "DJ open format Paris",
      "DJ rooftop Paris",
      "DJ soirée privée Paris",
      "DJ hôtel de luxe Paris",
      "DJ corporate Paris",
      "DJ hotel Londres",
    ],
  },
  pressKit: floPressKitFr,
  languageSwitch: [
    { label: "FR", href: "/?client=dj-flo", active: true },
    { label: "EN", href: "/en?client=dj-flo-en", clientSlug: "dj-flo-en" },
  ],
};
