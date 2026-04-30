import type { Dict } from "./types";

export const tr: Dict = {
  nav: {
    download: "İndir",
  },
  hero: {
    badge: "Sadece bir kumanda değil · projektörünüzün AI uşağı",
    title_line1: "Projektörünüzün ",
    title_line2: "son eksik parçası.",
    tagline:
      "Yorucu yazımın parmak ucunda akıp gittiği yer. Kumanda, klavye, dokunmatik yüzey, hava faresi, ses ve metin — altı kontrol modu, tek BLE bağlantısı, tek uygulama.",
    cta_primary: "Uygulamayı indir",
    cta_secondary: "Neler yaptığını gör",
    chip_latency: "≤ 20 ms gecikme",
    chip_voice: "50+ sesli komut",
    chip_offline: "Çevrimdışı · sadece BLE",
  },
  features: {
    section_eyebrow: "Bunu neden yaptık",
    section_title: "Lumina Go'nun imdada yetiştiği altı an.",
    section_lead:
      "Lumina Go'daki her özellik, biri takıldığı için var. İşte tekrar tekrar karşımıza çıkan senaryolar — ve onları çözmek için yaptıklarımız.",
    items: [
      {
        eyebrow: "Senaryo 01 — Kumanda kayıp",
        title: "“Kumanda yine kayıp.”",
        desc: "Projektör kumandaları sanki koltuk minderlerinin arasına kayacak şekilde tasarlanmış. Birini kaybedin, mükemmel bir cihaz pahalı bir kâğıt ağırlığına dönüşür. Lumina Go, eksiksiz bir BLE kumandayı zaten yanınızda taşıdığınız telefona geri koyar.",
        bullets: [
          "4 yönlü D-Pad + ortada OK, orijinal kumandayla aynı tuş düzeni",
          "Güç · Sessiz · Kaynak · Cast · Parlaklık · Yakınlaştırma · Ses",
          "BLE yanıtı 10 m'ye kadar 20 ms altında, eşleşme ritüeli yok",
        ],
      },
      {
        eyebrow: "Senaryo 02 — Bu uygulamanın imleci lazım",
        title: "“D-Pad ile bu uygulama kullanılmıyor.”",
        desc: "Tarayıcılar, mobil oyunlar, bazı uygulama mağazaları — pek çoğu sessizce imleç olduğunu varsayar. Projektöre USB fare takmak ise hantal. Lumina Go iki fare seviyesinde seçeneği tek uygulamada sunar: hassas bir dokunmatik yüzey ve tam hareketli hava faresi.",
        bullets: [
          "Dokunmatik: kaydırarak hareket + Sol / Sağ tıklama, hassasiyet 1,5×'a kadar",
          "Hava faresi: jiroskop + ivmeölçer cihazda birleşir, hassasiyet 3,0×'a kadar",
          "Alt sekmeden tek dokunuşla geçiş",
        ],
      },
      {
        eyebrow: "Senaryo 03 — Yazmak işkence",
        title: "“Wi-Fi şifremi girmek bulmaca olmamalı.”",
        desc: "Projektörler, tüketici elektroniğinin en kötü ekran klavyelerinden bazılarıyla geliyor. 16 karakterlik bir Wi-Fi anahtarı dakikalar sürebilir, bir hata yapın baştan başlayın. Lumina Go, zaten her gün yazdığınız ekrana tam bir QWERTY açar.",
        bullets: [
          "Tam QWERTY, sayılar / sembollere tek dokunuş",
          "Projektörde odakta olan alanla anlık senkron",
          "Enter, geri silme, boşluk — başparmaklarınızın tam beklediği yerde",
        ],
      },
      {
        eyebrow: "Senaryo 04 — Harf harf yazmak çok uzun",
        title: "“Şifreyi sadece yapıştır. Linki sadece yapıştır.”",
        desc: "Bazı şeyler harf harf yazılamaz — 40 karakterlik Wi-Fi anahtarları, bir arkadaşın paylaştığı bağlantı, yabancı bir film adı. Telefonda yazın (veya yapıştırın), Gönder'e basın, Lumina Go pano üzerinden tek seferde projektöre yapıştırır.",
        bullets: [
          "Göndermeden önce telefonda düzenleyin ve gözden geçirin",
          "URL'ler, aramalar, uzun başlıklar, Wi-Fi anahtarları için ideal",
          "Projektörde o an odakta olan alana yapıştırılır",
        ],
      },
      {
        eyebrow: "Senaryo 05 — Projektörünüzün sesi yok",
        title: "“‘Transformers ara’ — keşke.”",
        desc: "Modern TV'lerde sesli asistan var. Çoğu projektörde yok — ya da varsa sadece üreticinin kendi uygulamalarında. Lumina Go telefonu projektörünüzün hiç sahip olmadığı sesli kumandaya dönüştürür: telefonunuzun olgun konuşma altyapısı ve cihazda işlenen 50+ projektör niyeti.",
        bullets: [
          "“Netflix'i aç” · “Sesi aç” · “Wi-Fi ayarları” · “Ana ekrana dön”",
          "Telefonunuzun sistem konuşma tanımasını kullanır — uyandırma sözcüğü gerekmez",
          "Yerel ayrıştırma — ses ve metin telefonu terk etmez",
        ],
      },
      {
        eyebrow: "Senaryo 06 — Bir konuda takıldınız",
        title: "“Görüntü neden yeşil? Bluetooth hoparlör moduna nasıl geçiliyor?”",
        desc: "Kullanım kılavuzları uzundur. Forum yanıtları eskidir. Lumina Go bir AI projektör asistanıyla gelir; ChatGPT seviyesinde modern LLM'ler üzerine, yıllardır biriktirdiğimiz projektör mühendisliği notları ve sorun giderme kılavuzlarını ekleriz. Herhangi bir ekranın sağ üstündeki “?” düğmesine basın, herhangi bir dilde sorun.",
        bullets: [
          "Yanıtlar, sahip olduğunuz modeli ve firmware sürümünü dikkate alır",
          "Kendi sorun giderme kılavuzlarımız ve kullanıcı kılavuzlarıyla eğitildi",
          "Türkçe · English · 中文 · 繁體 · 日本語 · 한국어 · Français · Italiano · Español · Português dilinde sohbet",
        ],
      },
      {
        eyebrow: "Senaryo 07 — Gece sineması, telefon gözleri kamaştırıyor",
        title: "“Gece 1. Telefonum neden el feneri oldu?”",
        desc: "Işıkları kıstınız, film başladı, sesi ayarlamak için telefonu aldınız — ve bembeyaz arayüz gözlerinizi yakıyor. Çoğu kumanda uygulaması bunu hiç düşünmemiş. Lumina Go elden ayarlanmış iki tema sunar: berrak bir gündüz paleti ve sinema dostu bir gece teması; ikisi de sistem görünümünü otomatik takip eder.",
        bullets: [
          "Gündüz / gece otomatik — iOS ve Android sistemini takip eder, manuel de geçer",
          "Altı sekme — Remote, Keyboard, Touchpad, Air Mouse, Voice, Text — her biri iki kez tasarlandı",
          "Geceleri OLED dostu saf siyahlar, gündüzleri yüksek kontrastlı okunabilirlik",
        ],
      },
    ],
    closing: {
      eyebrow: "Sırada ne var",
      title: "Daha yeni başlıyoruz.",
      desc: "Yukarıdaki her senaryo, takılan gerçek bir kullanıcıdan geldi. Henüz kapsamadığımız bir an varsa — veya hâlâ sizin için işe yaramayan bir şey — bize söyleyin. Bir sonraki sürümde göreceksiniz.",
      cta_label: "Senaryonuzu paylaşın",
      cta_href: "mailto:luminago@hotack.cn?subject=Lumina%20Go%20Scenario%20Suggestion",
    },
  },
  download: {
    section_eyebrow: "Uygulamayı al",
    section_title: "App Store ve Google Play'de ücretsiz",
    section_lead:
      "Yüklemek için telefon kameranızla kodu tarayın. Lumina Go ücretsiz, reklamsız ve tamamen çevrimdışı çalışır.",
    ios_title: "iPhone için indir",
    ios_subtitle: "iOS 16.0 veya üzeri gerekir",
    ios_scan_hint: "Kamera uygulamasıyla tarayın",
    android_title: "Google Play'den al",
    android_subtitle: "Android 10 veya üzeri gerekir",
    android_scan_hint: "Kameranızla tarayın",
    free_note: "Ücretsiz · reklamsız · izleme yok · çevrimdışı çalışır",
  },
  footer: {
    tagline: "Projektörünüzün son eksik parçası.",
    cols: {
      product: "Ürün",
      legal: "Hukuki",
    },
    links: {
      features: "Özellikler",
      download: "İndir",
      privacy: "Gizlilik Politikası",
      terms: "Kullanım Şartları",
      contact: "İletişim",
    },
    copyright: "© 2026 Chengdu Hotack Technology Co., Ltd.",
    company_zh: "成都市和天创科技股份有限公司",
    language: "Dil",
  },
};
