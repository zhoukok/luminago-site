import type { Dict } from "./types";

export const de: Dict = {
  nav: {
    download: "Download",
  },
  hero: {
    badge: "Mehr als eine Fernbedienung · Ihr KI-Concierge für den Beamer",
    title_line1: "Das letzte fehlende Stück ",
    title_line2: "Ihres Projektors.",
    tagline:
      "Wo zähes Tippen unter den Fingerspitzen zerfließt. Fernbedienung, Tastatur, Touchpad, Air Mouse, Sprache und Text — sechs Bedienarten, eine direkte BLE-Verbindung, eine App.",
    cta_primary: "App herunterladen",
    cta_secondary: "Sehen, was sie kann",
    chip_latency: "≤ 20 ms Latenz",
    chip_voice: "50+ Sprachbefehle",
    chip_offline: "Offline · nur BLE",
  },
  features: {
    section_eyebrow: "Warum wir das gebaut haben",
    section_title: "Sechs Momente, in denen Lumina Go rettet.",
    section_lead:
      "Jede Funktion in Lumina Go entstand, weil jemand stecken geblieben ist. Das sind die Szenarien, die immer wiederkamen — und was wir gebaut haben, um sie zu lösen.",
    items: [
      {
        eyebrow: "Szenario 01 — Die Fernbedienung ist weg",
        title: "„Die Fernbedienung ist schon wieder verschwunden.“",
        desc: "Beamer-Fernbedienungen scheinen so konstruiert, dass sie zwischen Sofakissen rutschen. Verlieren Sie eine, wird ein hervorragendes Gerät zum sehr teuren Briefbeschwerer. Lumina Go bringt eine vollwertige BLE-Fernbedienung in das Smartphone, das Sie ohnehin überall dabei haben.",
        bullets: [
          "4-Wege-D-Pad + zentrales OK, dieselben Tasten wie das Original",
          "Ein/Aus · Stumm · Quelle · Cast · Helligkeit · Zoom · Lautstärke",
          "BLE-Antwort unter 20 ms auf bis zu 10 m, ohne Pairing-Ritual",
        ],
      },
      {
        eyebrow: "Szenario 02 — Diese App braucht einen Cursor",
        title: "„Mit dem D-Pad ist diese App unbenutzbar.“",
        desc: "Browser, Casual-Games, manche App-Stores — viele setzen einen Cursor voraus. Eine USB-Maus an den Beamer zu stecken ist unhandlich. Lumina Go bietet zwei mausartige Optionen in einer App: ein präzises Touchpad und eine Air Mouse mit Bewegungserkennung.",
        bullets: [
          "Touchpad: Wischen zum Bewegen + Linke / Rechte Taste, Empfindlichkeit bis 1,5×",
          "Air Mouse: Gyro + Beschleunigungssensor on-device fusioniert, Empfindlichkeit bis 3,0×",
          "Ein Tipp unten zum Umschalten zwischen beiden",
        ],
      },
      {
        eyebrow: "Szenario 03 — Tippen ist eine Qual",
        title: "„Mein WLAN-Passwort einzugeben sollte kein Rätsel sein.“",
        desc: "Beamer liefern einige der schlimmsten Bildschirmtastaturen der Unterhaltungselektronik aus. Ein 16-stelliger WLAN-Schlüssel kann Minuten dauern, ein Fehler bedeutet Neuanfang. Lumina Go legt Ihnen ein vollständiges QWERTY auf den Bildschirm, auf dem Sie ohnehin täglich tippen.",
        bullets: [
          "Vollständige QWERTY-Belegung, Zahlen / Symbole mit einem Tipp",
          "Synchronisiert sich live mit dem fokussierten Eingabefeld am Beamer",
          "Enter, Backspace, Leertaste — genau dort, wo die Daumen sie erwarten",
        ],
      },
      {
        eyebrow: "Szenario 04 — Buchstabe für Buchstabe ist zu mühsam",
        title: "„Einfach das Passwort einfügen. Einfach den Link einfügen.“",
        desc: "Manche Inhalte tippt man nicht Buchstabe für Buchstabe — 40-stellige WLAN-Schlüssel, ein vom Freund geteilter Link, ein fremdsprachiger Filmtitel. Auf dem Telefon schreiben (oder einfügen), Senden drücken, und Lumina Go fügt es per Zwischenablage am Beamer in einem Rutsch ein.",
        bullets: [
          "Auf dem Telefon erst bearbeiten und prüfen, dann senden",
          "Ideal für URLs, Suchanfragen, lange Titel, WLAN-Schlüssel",
          "Wird in das Eingabefeld eingefügt, das gerade Fokus hat",
        ],
      },
      {
        eyebrow: "Szenario 05 — Ihr Beamer hat keine Sprache",
        title: "„‚Suche Transformers‘ — wäre schön.“",
        desc: "Moderne Fernseher haben Sprachassistenten. Die meisten Beamer nicht — oder nur in den hauseigenen Apps. Lumina Go macht das Telefon zur Sprachfernbedienung, die Ihr Beamer nie hatte: ausgereifte Spracherkennung des Telefons + 50+ Beamer-Intents, die lokal geparst werden.",
        bullets: [
          "„Öffne Netflix“ · „Lauter“ · „WLAN-Einstellungen“ · „Zur Startseite“",
          "Nutzt die native Spracherkennung Ihres Telefons — kein Aktivierungswort nötig",
          "Lokale Auswertung — Audio und Text verlassen das Telefon nicht",
        ],
      },
      {
        eyebrow: "Szenario 06 — Bei etwas hängen geblieben",
        title: "„Warum ist mein Bild grün? Wie komme ich in den Bluetooth-Lautsprecher-Modus?“",
        desc: "Handbücher sind lang. Forenantworten sind alt. Lumina Go bringt einen KI-Beamer-Assistenten mit, gebaut auf modernen LLMs (auf ChatGPT-Niveau), gestützt auf jahrelange eigene Beamer-Engineering-Notizen und Troubleshooting-Playbooks. Tippen Sie auf einer beliebigen Seite oben rechts auf „?“ und fragen Sie in jeder Sprache.",
        bullets: [
          "Antworten kennen das genaue Modell und die Firmware-Version",
          "Trainiert auf unseren eigenen Troubleshooting-Playbooks und Anleitungen",
          "Spricht Deutsch · English · 中文 · 繁體 · 日本語 · 한국어 · Français · Italiano · Español · Português",
        ],
      },
      {
        eyebrow: "Szenario 07 — Filmabend, Telefon blendet",
        title: "„Es ist 1 Uhr nachts. Warum ist mein Telefon eine Taschenlampe?“",
        desc: "Sie dimmen das Licht, der Film startet, Sie greifen zum Telefon, um die Lautstärke zu ändern — und eine schneeweiße Oberfläche brennt Ihnen in die Augen. Die meisten Fernbedienungs-Apps haben das nie bedacht. Lumina Go liefert zwei handgetunte Themes: eine klare Tagespalette und ein kinotaugliches Nachtthema, beide folgen dem System automatisch.",
        bullets: [
          "Tag / Nacht automatisch — folgt iOS und Android, manueller Override möglich",
          "Sechs Tabs — Remote, Keyboard, Touchpad, Air Mouse, Voice, Text — jedes doppelt entworfen",
          "OLED-freundliches reines Schwarz nachts, kontraststarke Lesbarkeit am Tag",
        ],
      },
    ],
    closing: {
      eyebrow: "Wie geht es weiter",
      title: "Wir fangen gerade erst an.",
      desc: "Jedes Szenario oben kam von einem echten Nutzer, der hängen geblieben ist. Falls es einen Moment gibt, den wir noch nicht abdecken — oder etwas, das bei Ihnen noch nicht funktioniert — sagen Sie uns Bescheid. Sie sehen es im nächsten Release.",
      cta_label: "Teilen Sie Ihr Szenario",
      cta_href: "mailto:luminago@hotack.cn?subject=Lumina%20Go%20Scenario%20Suggestion",
    },
  },
  download: {
    section_eyebrow: "App holen",
    section_title: "Kostenlos im App Store und bei Google Play",
    section_lead:
      "Mit der Telefonkamera den Code scannen und installieren. Lumina Go ist kostenlos, werbefrei und funktioniert komplett offline.",
    ios_title: "Für iPhone laden",
    ios_subtitle: "iOS 16.0 oder neuer",
    ios_scan_hint: "Mit der Kamera-App scannen",
    android_title: "Bei Google Play holen",
    android_subtitle: "Android 10 oder neuer",
    android_scan_hint: "Mit der Kamera scannen",
    free_note: "Kostenlos · keine Werbung · kein Tracking · funktioniert offline",
  },
  footer: {
    tagline: "Das letzte fehlende Stück Ihres Projektors.",
    cols: {
      product: "Produkt",
      legal: "Rechtliches",
    },
    links: {
      features: "Funktionen",
      download: "Download",
      privacy: "Datenschutzerklärung",
      terms: "Nutzungsbedingungen",
      contact: "Kontakt",
    },
    copyright: "© 2026 Chengdu Hotack Technology Co., Ltd.",
    company_zh: "成都市和天创科技股份有限公司",
    language: "Sprache",
  },
};
