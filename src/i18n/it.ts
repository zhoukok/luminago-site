import type { Dict } from "./types";

export const it: Dict = {
  nav: {
    download: "Scarica",
  },
  hero: {
    badge: "Più di un telecomando · il tuo maggiordomo IA del proiettore",
    title_line1: "L'ultimo pezzo mancante ",
    title_line2: "del tuo proiettore.",
    tagline:
      "Dove la digitazione faticosa scivola sotto la punta delle dita. Telecomando, tastiera, touchpad, air mouse, voce e testo — sei modalità di controllo, un collegamento BLE diretto, una sola app.",
    cta_primary: "Scarica l'app",
    cta_secondary: "Guarda cosa fa",
    chip_latency: "Latenza ≤ 20 ms",
    chip_voice: "50+ comandi vocali",
    chip_offline: "Offline · solo BLE",
  },
  features: {
    section_eyebrow: "Perché l'abbiamo creata",
    section_title: "Sei momenti in cui Lumina Go ti salva.",
    section_lead:
      "Ogni funzione di Lumina Go esiste perché qualcuno è rimasto bloccato. Ecco gli scenari che continuavano a tornare — e ciò che abbiamo costruito per risolverli.",
    items: [
      {
        eyebrow: "Scenario 01 — Il telecomando è sparito",
        title: "« Il telecomando è di nuovo sparito. »",
        desc: "I telecomandi dei proiettori sembrano progettati per scivolare tra i cuscini del divano. Perderne uno e una macchina eccellente diventa un costoso fermacarte. Lumina Go rimette un telecomando BLE completo nel telefono che porti già sempre con te.",
        bullets: [
          "D-Pad a 4 direzioni + OK centrale, gli stessi tasti dell'originale",
          "Accensione · Muto · Sorgente · Cast · Luminosità · Zoom · Volume",
          "Risposta BLE sotto i 20 ms fino a 10 m, senza rituale di abbinamento",
        ],
      },
      {
        eyebrow: "Scenario 02 — L'app ha bisogno di un cursore",
        title: "« Con il D-Pad non si riesce ad usarla. »",
        desc: "Browser, giochi casual, alcuni store — molte app danno per scontato un cursore. Collegare un mouse USB al proiettore è scomodo. Lumina Go offre due alternative di livello mouse in un'unica app: un touchpad preciso e un air mouse a movimento libero.",
        bullets: [
          "Touchpad: scorri per muovere + tasto sinistro / destro, sensibilità fino a 1,5×",
          "Air mouse: giroscopio + accelerometro fusi sul dispositivo, sensibilità fino a 3,0×",
          "Un tap nella tab in basso per passare dall'uno all'altro",
        ],
      },
      {
        eyebrow: "Scenario 03 — Digitare è una tortura",
        title: "« Digitare la password Wi-Fi non dovrebbe essere un puzzle. »",
        desc: "I proiettori montano alcune delle peggiori tastiere a schermo dell'elettronica di consumo. Una chiave Wi-Fi da 16 caratteri può richiedere minuti, e basta un errore per ricominciare da capo. Lumina Go stende una QWERTY completa sullo schermo che già usi ogni giorno.",
        bullets: [
          "QWERTY completa con numeri e simboli a un solo tap",
          "Sincronizzata in tempo reale con il campo che ha il fuoco sul proiettore",
          "Invio, backspace e spazio esattamente dove i pollici se li aspettano",
        ],
      },
      {
        eyebrow: "Scenario 04 — Lettera per lettera è troppo",
        title: "« Incolla la password. Incolla l'URL. »",
        desc: "Alcuni contenuti non si possono digitare lettera per lettera — chiavi Wi-Fi da 40 caratteri, un link condiviso da un amico, il titolo di un film straniero. Componi (o incolla) sul telefono, premi Invia, e Lumina Go lo consegna tutto in una volta sul proiettore tramite gli appunti.",
        bullets: [
          "Modifica e rivedi il testo sul telefono prima di inviarlo",
          "Perfetto per URL, ricerche, titoli lunghi, chiavi Wi-Fi",
          "Incollato nel campo che ha il fuoco sul proiettore in quel momento",
        ],
      },
      {
        eyebrow: "Scenario 05 — Il tuo proiettore non ha la voce",
        title: "« ‘Cerca Transformers’ — magari. »",
        desc: "Le TV moderne hanno un assistente vocale. Quasi nessun proiettore — o ce l'ha, ma solo dentro le app del costruttore. Lumina Go trasforma il telefono nel telecomando vocale che il tuo proiettore non ha mai avuto, sfruttando il riconoscimento vocale di livello mobile e oltre 50 intenti per il proiettore analizzati sul dispositivo.",
        bullets: [
          "« Apri Netflix » · « Volume su » · « Impostazioni Wi-Fi » · « Vai alla home »",
          "Usa il riconoscimento vocale nativo del telefono — niente parola di attivazione",
          "Analisi locale — audio e trascrizione non escono mai dal telefono",
        ],
      },
      {
        eyebrow: "Scenario 06 — Bloccato su qualcosa",
        title: "« Perché l'immagine è verde? Come si entra in modalità altoparlante Bluetooth? »",
        desc: "I manuali sono lunghi. Le risposte sui forum sono datate. Lumina Go integra un assistente IA per proiettori, costruito su LLM di frontiera (di classe ChatGPT) e arricchito con anni di nostre note di ingegneria proiettore e playbook di troubleshooting. Tocca « ? » in qualsiasi schermata e chiedi in qualsiasi lingua.",
        bullets: [
          "Le risposte conoscono il modello e la versione di firmware esatti",
          "Addestrato sui nostri playbook di troubleshooting e sui manuali utente",
          "Conversa in Italiano · English · 中文 · 繁體 · 日本語 · 한국어 · Français · Português · Español",
        ],
      },
      {
        eyebrow: "Scenario 07 — Serata cinema, telefono accecante",
        title: "« È l'una di notte. Perché il telefono è una torcia? »",
        desc: "Abbassi le luci, parte il film, prendi il telefono per regolare il volume — e una UI tutta bianca ti rimanda gli occhi a fuoco. Quasi nessuna app di telecomando ci ha pensato. Lumina Go offre due temi disegnati a mano: una palette pulita per il giorno e un tema notturno da sala, entrambi seguono automaticamente l'aspetto del sistema.",
        bullets: [
          "Giorno / notte automatico, segue iOS e Android, oppure cambio manuale",
          "Sei tab — Remote, Keyboard, Touchpad, Air Mouse, Voice, Text — disegnate due volte",
          "Neri puri amici dell'OLED di notte, alto contrasto per leggere di giorno",
        ],
      },
    ],
    closing: {
      eyebrow: "Cosa viene dopo",
      title: "Siamo solo all'inizio.",
      desc: "Ogni scenario qui sopra arriva da un utente reale che si è bloccato. Se c'è un momento che non abbiamo coperto — o qualcosa che ancora non funziona per te — diccelo. Lo vedrai nella prossima release.",
      cta_label: "Raccontaci il tuo scenario",
      cta_href: "mailto:luminago@hotack.cn?subject=Lumina%20Go%20Scenario%20Suggestion",
    },
  },
  download: {
    section_eyebrow: "Ottieni l'app",
    section_title: "Gratuita su App Store e Google Play",
    section_lead:
      "Inquadra il QR con la fotocamera del telefono per installarla. Lumina Go è gratuita, senza pubblicità e funziona completamente offline.",
    ios_title: "Scarica per iPhone",
    ios_subtitle: "Richiede iOS 16.0 o successivo",
    ios_scan_hint: "Scansiona con l'app Fotocamera",
    android_title: "Scarica su Google Play",
    android_subtitle: "Richiede Android 10 o successivo",
    android_scan_hint: "Scansiona con la fotocamera",
    coming_soon: "In arrivo",
    free_note: "Gratuita · Niente pubblicità · Niente tracciamento · Funziona offline",
  },
  footer: {
    tagline: "L'ultimo pezzo mancante del tuo proiettore.",
    cols: {
      product: "Prodotto",
      legal: "Legale",
    },
    links: {
      features: "Funzioni",
      download: "Scarica",
      privacy: "Informativa sulla privacy",
      terms: "Condizioni d'uso",
      contact: "Contatti",
    },
    copyright: "© 2026 Chengdu Hotack Technology Co., Ltd.",
    company_zh: "成都市和天创科技股份有限公司",
    language: "Lingua",
  },
};
