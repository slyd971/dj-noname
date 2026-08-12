/**
 * Google Apps Script
 * Creates a simple onboarding Google Form for a DJ website / press kit.
 */

const FORM_CONFIG = {
  title: "Onboarding - DJ / Press Kit",
  description:
    "Ce formulaire nous aide a recuperer les bonnes informations pour creer ton site / press kit DJ. Merci de repondre simplement, avec des infos concretes et faciles a exploiter.",
  confirmationMessage:
    "Merci, tes reponses ont bien ete envoyees.",
  collectEmail: true,
  isQuiz: false,
};

function createDjOnboardingForm() {
  const form = FormApp.create(FORM_CONFIG.title);

  form.setDescription(FORM_CONFIG.description);
  form.setConfirmationMessage(FORM_CONFIG.confirmationMessage);
  form.setCollectEmail(FORM_CONFIG.collectEmail);
  form.setIsQuiz(FORM_CONFIG.isQuiz);
  form.setProgressBar(true);
  form.setShuffleQuestions(false);
  form.setAllowResponseEdits(true);

  const sections = buildDjSections();

  sections.forEach(function (section, index) {
    if (index > 0) {
      form
        .addPageBreakItem()
        .setTitle(section.title)
        .setHelpText(section.description || "");
    }

    addQuestionsFromConfig(form, section.questions);
  });

  Logger.log("Form ID: " + form.getId());
  Logger.log("Edit URL: " + form.getEditUrl());
  Logger.log("Published URL: " + form.getPublishedUrl());

  return {
    formId: form.getId(),
    editUrl: form.getEditUrl(),
    publishedUrl: form.getPublishedUrl(),
  };
}

function buildDjSections() {
  return [
    {
      title: "1. Infos generales",
      description: "Les infos de base sur toi et ton projet.",
      questions: [
        shortText("Nom d'artiste", true),
        shortText("Nom complet", false),
        shortText("Email principal", true),
        shortText("Email booking", false),
        shortText("Telephone", false),
        shortText("Instagram", true),
        shortText("Ville / zone", true),
        shortText(
          "Presentation courte",
          true,
          "Ex: DJ open format base a Paris"
        ),
        paragraph(
          "Description courte du projet",
          false,
          "Quelques lignes simples pour presenter ton univers"
        ),
      ],
    },
    {
      title: "2. Style et image",
      description: "Ton univers musical et l'image que tu veux renvoyer.",
      questions: [
        multipleChoice(
          "Template souhaite",
          ["impact", "interactive", "showcase"],
          true
        ),
        multipleChoice(
          "Couleur principale du site",
          ["red", "blue", "green", "orange", "violet", "monochrome"],
          true
        ),
        checkboxes(
          "Styles musicaux",
          [
            "Open Format",
            "Hip-Hop",
            "R&B",
            "Afro",
            "Afrobeats",
            "Amapiano",
            "Baile Funk",
            "House",
            "Afro House",
            "Dancehall",
            "Latin",
            "Pop",
            "UKG",
            "Future Beat",
          ],
          true
        ),
        paragraph(
          "Bio / presentation",
          true,
          "Raconte qui tu es, ton parcours et ton energie"
        ),
        paragraph(
          "Ce qui te differencie",
          false,
          "Qu'est-ce qui rend ton projet unique ?"
        ),
        paragraph(
          "Image / ambiance souhaitee",
          false,
          "Ex: premium, club, fashion, elegant, energique, luxe, lifestyle"
        ),
      ],
    },
    {
      title: "3. Experience",
      description: "Les infos sur ton parcours, les lieux et les types d'evenements.",
      questions: [
        paragraph(
          "References clubs / villes / pays deja mixes",
          true,
          "Separe les lieux avec des virgules ou des retours a la ligne"
        ),
        paragraph(
          "Types d'evenements",
          false,
          "Ex: clubs, festivals, mariages, brand events, corporate, rooftops, restaurants, evenements prives"
        ),
        paragraph(
          "Moments forts / belles references",
          false,
          "Ex: residences, premieres parties, gros events, dates marquantes"
        ),
        paragraph(
          "Marques / medias / partenaires",
          false,
          "Si tu as deja collabore avec des marques ou medias, liste-les ici"
        ),
      ],
    },
    {
      title: "4. Musique et contenus",
      description: "Les liens utiles pour remplir les sections Sound, Spotify et Videos.",
      questions: [
        shortText(
          "Lien SoundCloud",
          false,
          "Optionnel - lien profil SoundCloud complet"
        ),
        shortText(
          "Lien Spotify principal",
          false,
          "Optionnel - lien playlist ou profil Spotify"
        ),
        shortText(
          "Lien playlist Spotify 1",
          false,
          "Optionnel - lien playlist Spotify complet"
        ),
        shortText(
          "Lien playlist Spotify 2",
          false,
          "Optionnel - lien playlist Spotify complet"
        ),
        shortText(
          "Lien playlist Spotify 3",
          false,
          "Optionnel - lien playlist Spotify complet"
        ),
        paragraph(
          "Infos sur tes videos",
          false,
          "Si tu as 1 a 3 videos a mettre en avant, precise ce qu'on doit comprendre ou montrer"
        ),
        shortText(
          "Lien video 1",
          false,
          "Optionnel - lien Drive / WeTransfer / SwissTransfer / asset video"
        ),
        shortText(
          "Lien video 2",
          false,
          "Optionnel - lien Drive / WeTransfer / SwissTransfer / asset video"
        ),
        shortText(
          "Lien video 3",
          false,
          "Optionnel - lien Drive / WeTransfer / SwissTransfer / asset video"
        ),
      ],
    },
    {
      title: "5. Contact et booking",
      description: "Les infos de contact a afficher sur le press kit.",
      questions: [
        paragraph(
          "Texte contact / booking",
          false,
          "Ex: Pour toute demande de booking, event prive, club ou collaboration de marque"
        ),
        shortText("Contact principal", false, "Ex: Mail"),
        shortText("Valeur contact principal", false, "Ex: booking@email.com"),
        shortText("Contact secondaire", false, "Ex: Bookings"),
        shortText("Valeur contact secondaire", false, "Ex: +33 6 00 00 00 00"),
        shortText("Handle Instagram public", false),
        shortText("Handle SoundCloud public", false),
      ],
    },
    {
      title: "6. Photos, videos et logo",
      description: "Tous les assets necessaires pour construire la galerie et les blocs medias.",
      questions: [
        paragraph(
          "Liens photos / videos",
          true,
          "Merci de partager tes fichiers via Drive / WeTransfer / SwissTransfer"
        ),
        shortText(
          "Lien logo",
          false,
          "Optionnel - lien vers le logo si tu en as un"
        ),
        shortText(
          "Lien photos HD",
          false,
          "Optionnel - lien vers une selection de photos HD"
        ),
        paragraph(
          "Photos a mettre en avant",
          false,
          "Dis-nous s'il y a certaines photos ou videos a privilegier"
        ),
      ],
    },
    {
      title: "7. Derniers details",
      description: "Les derniers points utiles avant la creation du press kit.",
      questions: [
        multipleChoice(
          "Objectif principal du press kit",
          [
            "Obtenir plus de bookings",
            "Avoir une image plus pro",
            "Presenter mon univers aux marques / medias",
            "Avoir un support complet et polyvalent",
          ],
          true
        ),
        paragraph(
          "Informations complementaires",
          false,
          "Ajoute ici tout ce qui peut etre utile pour bien realiser ton projet"
        ),
      ],
    },
  ];
}

function addQuestionsFromConfig(form, questions) {
  questions.forEach(function (question) {
    switch (question.type) {
      case "short_text":
        createShortTextItem(form, question);
        break;
      case "paragraph":
        createParagraphItem(form, question);
        break;
      case "multiple_choice":
        createMultipleChoiceItem(form, question);
        break;
      case "checkboxes":
        createCheckboxItem(form, question);
        break;
      default:
        throw new Error("Unsupported question type: " + question.type);
    }
  });
}

function createShortTextItem(form, question) {
  const item = form
    .addTextItem()
    .setTitle(question.title)
    .setRequired(!!question.required);
  if (question.helpText) item.setHelpText(question.helpText);
}

function createParagraphItem(form, question) {
  const item = form
    .addParagraphTextItem()
    .setTitle(question.title)
    .setRequired(!!question.required);
  if (question.helpText) item.setHelpText(question.helpText);
}

function createMultipleChoiceItem(form, question) {
  const item = form
    .addMultipleChoiceItem()
    .setTitle(question.title)
    .setRequired(!!question.required);
  if (question.helpText) item.setHelpText(question.helpText);
  item.setChoiceValues(question.choices || []);
}

function createCheckboxItem(form, question) {
  const item = form
    .addCheckboxItem()
    .setTitle(question.title)
    .setRequired(!!question.required);
  if (question.helpText) item.setHelpText(question.helpText);
  item.setChoiceValues(question.choices || []);
}

function shortText(title, required, helpText) {
  return {
    type: "short_text",
    title: title,
    required: !!required,
    helpText: helpText || "",
  };
}

function paragraph(title, required, helpText) {
  return {
    type: "paragraph",
    title: title,
    required: !!required,
    helpText: helpText || "",
  };
}

function multipleChoice(title, choices, required, helpText) {
  return {
    type: "multiple_choice",
    title: title,
    choices: choices,
    required: !!required,
    helpText: helpText || "",
  };
}

function checkboxes(title, choices, required, helpText) {
  return {
    type: "checkboxes",
    title: title,
    choices: choices,
    required: !!required,
    helpText: helpText || "",
  };
}
