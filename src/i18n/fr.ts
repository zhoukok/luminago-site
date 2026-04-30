import type { Dict } from "./types";

export const fr: Dict = {
  nav: {
    download: "Télécharger",
  },
  hero: {
    badge: "Plus qu'une télécommande · votre majordome IA pour vidéoprojecteur",
    title_line1: "La pièce manquante ",
    title_line2: "de votre vidéoprojecteur.",
    tagline:
      "Là où la saisie pénible glisse au bout des doigts. Télécommande, clavier, pavé tactile, souris aérienne, voix et texte — six modes de pilotage, un lien BLE direct, une seule app.",
    cta_primary: "Télécharger l'app",
    cta_secondary: "Voir ce qu'elle fait",
    chip_latency: "Latence ≤ 20 ms",
    chip_voice: "50+ commandes vocales",
    chip_offline: "Hors-ligne · BLE seul",
  },
  features: {
    section_eyebrow: "Pourquoi nous avons fait ça",
    section_title: "Six moments où Lumina Go vous sauve la mise.",
    section_lead:
      "Chaque fonctionnalité de Lumina Go est née parce que quelqu'un est resté coincé. Voici les scénarios qui revenaient sans cesse — et ce que nous avons construit pour les résoudre.",
    items: [
      {
        eyebrow: "Scénario 01 — La télécommande a disparu",
        title: "« La télécommande est encore introuvable. »",
        desc: "Les télécommandes de vidéoprojecteur semblent conçues pour glisser entre les coussins du canapé. Une fois perdue, une excellente machine devient un presse-papier hors de prix. Lumina Go remet une télécommande BLE complète dans le téléphone que vous emportez déjà partout.",
        bullets: [
          "D-Pad 4 directions + OK central, mêmes touches que la télécommande d'origine",
          "Marche · Muet · Source · Cast · Luminosité · Zoom · Volume",
          "Réponse BLE sous 20 ms jusqu'à 10 m, sans rituel d'appairage",
        ],
      },
      {
        eyebrow: "Scénario 02 — Cette app a besoin d'un curseur",
        title: "« Impossible de l'utiliser au D-Pad. »",
        desc: "Navigateurs, jeux décontractés, certains stores — beaucoup d'apps supposent un curseur. Brancher une souris USB sur le vidéoprojecteur, c'est lourd. Lumina Go propose deux approches dignes d'une souris dans une seule app : un pavé tactile précis et une souris aérienne libre dans l'espace.",
        bullets: [
          "Pavé tactile : glisser pour bouger + clic gauche / droit, sensibilité jusqu'à 1,5×",
          "Souris aérienne : gyro + accéléromètre fusionnés à bord, sensibilité jusqu'à 3,0×",
          "Un appui en bas pour basculer entre les deux",
        ],
      },
      {
        eyebrow: "Scénario 03 — Taper est un supplice",
        title: "« Saisir mon mot de passe Wi-Fi ne devrait pas être une énigme. »",
        desc: "Les vidéoprojecteurs livrent certains des pires claviers virtuels de l'électronique grand public. Une clé Wi-Fi de 16 caractères peut prendre des minutes, et une fausse touche oblige à recommencer. Lumina Go déploie un QWERTY complet sur l'écran sur lequel vous tapez tous les jours.",
        bullets: [
          "Clavier complet, chiffres et symboles à un appui",
          "Synchronisé en temps réel avec le champ qui a le focus côté projecteur",
          "Entrée, retour arrière, espace — exactement là où vos pouces les attendent",
        ],
      },
      {
        eyebrow: "Scénario 04 — Bien trop long à taper",
        title: "« Colle simplement le mot de passe. Colle l'URL. »",
        desc: "Certains contenus ne se tapent pas lettre par lettre — clés Wi-Fi de 40 caractères, lien partagé par un ami, titre de film étranger. Vous écrivez (ou collez) sur le téléphone, vous appuyez sur Envoyer, et Lumina Go les colle d'un coup côté projecteur via le presse-papiers.",
        bullets: [
          "Préparer et relire le texte sur le téléphone avant l'envoi",
          "Idéal pour URLs, requêtes, titres longs, clés Wi-Fi",
          "Collé dans le champ qui a le focus côté projecteur à cet instant",
        ],
      },
      {
        eyebrow: "Scénario 05 — Votre vidéoprojecteur n'a pas de voix",
        title: "« ‘Cherche Transformers’ — si seulement. »",
        desc: "Les TV modernes embarquent un assistant vocal. La plupart des vidéoprojecteurs non — ou seulement dans les apps maison. Lumina Go transforme votre téléphone en télécommande vocale, en s'appuyant sur la reconnaissance vocale de votre téléphone et sur 50+ intentions projecteur analysées localement.",
        bullets: [
          "« Ouvre Netflix » · « Volume plus » · « Réglages Wi-Fi » · « Retour à l'accueil »",
          "Utilise la reconnaissance vocale native du téléphone — pas de mot d'éveil",
          "Analyse locale — audio et transcription ne quittent pas le téléphone",
        ],
      },
      {
        eyebrow: "Scénario 06 — Bloqué sur un détail",
        title: "« Pourquoi mon image est verte ? Comment passer en mode enceinte Bluetooth ? »",
        desc: "Les manuels sont longs. Les réponses de forum sont anciennes. Lumina Go embarque un assistant IA pour vidéoprojecteurs, bâti sur des LLM de pointe (de classe ChatGPT) et enrichi de nos propres notes d'ingénierie projecteur et guides de dépannage. Touchez le « ? » sur n'importe quel écran et posez votre question dans n'importe quelle langue.",
        bullets: [
          "Les réponses tiennent compte du modèle exact et de la version du firmware",
          "Entraîné sur nos propres guides de dépannage et manuels utilisateur",
          "Discute en Français · English · 中文 · 繁體 · 日本語 · 한국어 · Italiano · Português · Español",
        ],
      },
      {
        eyebrow: "Scénario 07 — Soirée ciné, téléphone aveuglant",
        title: "« Il est 1 h du matin. Pourquoi mon téléphone est-il une lampe torche ? »",
        desc: "Vous baissez la lumière, le film démarre, vous prenez le téléphone pour ajuster le son — et une UI toute blanche vous brûle les yeux. La plupart des apps de télécommande n'y ont pas pensé. Lumina Go propose deux thèmes ciselés à la main : une palette claire pour le jour, et un thème sombre digne d'une salle, qui suit automatiquement l'apparence système.",
        bullets: [
          "Jour / nuit auto, suit iOS et Android, bascule manuelle aussi possible",
          "Six onglets — Remote, Keyboard, Touchpad, Air Mouse, Voice, Text — chacun dessiné en deux versions",
          "Noirs purs amis de l'OLED la nuit, contraste élevé pour la lecture le jour",
        ],
      },
    ],
    closing: {
      eyebrow: "Et ensuite",
      title: "Ce n'est qu'un début.",
      desc: "Chaque scénario ci-dessus vient d'un utilisateur réel resté coincé. S'il y a un moment que nous n'avons pas couvert — ou quelque chose qui ne fonctionne pas pour vous — dites-le-nous. Vous le verrez dans la prochaine version.",
      cta_label: "Partagez votre scénario",
      cta_href: "mailto:luminago@hotack.cn?subject=Lumina%20Go%20Scenario%20Suggestion",
    },
  },
  download: {
    section_eyebrow: "Obtenir l'app",
    section_title: "Gratuite sur l'App Store et Google Play",
    section_lead:
      "Scannez avec l'appareil photo de votre téléphone pour installer. Lumina Go est gratuite, sans pub, et fonctionne entièrement hors-ligne.",
    ios_title: "Télécharger pour iPhone",
    ios_subtitle: "iOS 16.0 ou plus récent",
    ios_scan_hint: "Scanner avec l'app Appareil photo",
    android_title: "Obtenir sur Google Play",
    android_subtitle: "Android 10 ou plus récent",
    android_scan_hint: "Scanner avec l'appareil photo",
    coming_soon: "Bientôt disponible",
    free_note: "Gratuite · Sans pub · Sans pistage · Fonctionne hors-ligne",
  },
  footer: {
    tagline: "La pièce manquante de votre vidéoprojecteur.",
    cols: {
      product: "Produit",
      legal: "Mentions légales",
    },
    links: {
      features: "Fonctionnalités",
      download: "Télécharger",
      privacy: "Politique de confidentialité",
      terms: "Conditions d'utilisation",
      contact: "Contact",
    },
    copyright: "© 2026 Chengdu Hotack Technology Co., Ltd.",
    company_zh: "成都市和天创科技股份有限公司",
    language: "Langue",
  },
};
