import type { Dict } from "./types";

export const id: Dict = {
  nav: {
    download: "Unduh",
  },
  hero: {
    badge: "Lebih dari sekadar remote · concierge AI untuk proyektor Anda",
    title_line1: "Kepingan terakhir yang hilang ",
    title_line2: "dari proyektor Anda.",
    tagline:
      "Saat ketikan yang melelahkan mengalir di ujung jari. Remote, keyboard, touchpad, air mouse, suara, dan teks — enam mode kontrol, satu tautan BLE langsung, satu app.",
    cta_primary: "Unduh app",
    cta_secondary: "Lihat apa yang bisa dilakukannya",
    chip_latency: "Latensi ≤ 20 ms",
    chip_voice: "50+ perintah suara",
    chip_offline: "Offline · hanya BLE",
  },
  features: {
    section_eyebrow: "Mengapa kami membuatnya",
    section_title: "Enam momen di mana Lumina Go menyelamatkan.",
    section_lead:
      "Setiap fitur Lumina Go ada karena seseorang pernah terjebak. Inilah skenario yang terus kembali — dan apa yang kami bangun untuk menyelesaikannya.",
    items: [
      {
        eyebrow: "Skenario 01 — Remote-nya hilang",
        title: "“Remote-nya hilang lagi.”",
        desc: "Remote proyektor seakan dirancang untuk meluncur di antara bantal sofa. Hilang sekali, dan mesin hebat berubah menjadi pemberat kertas mahal. Lumina Go mengembalikan remote BLE lengkap ke ponsel yang sudah selalu Anda bawa.",
        bullets: [
          "D-Pad 4 arah + OK di tengah, susunan tombol sama dengan aslinya",
          "Daya · Bisu · Sumber · Cast · Kecerahan · Zoom · Volume",
          "Respons BLE di bawah 20 ms hingga 10 m, tanpa ritual pairing",
        ],
      },
      {
        eyebrow: "Skenario 02 — App ini perlu kursor",
        title: "“App ini tidak bisa dipakai dengan D-Pad.”",
        desc: "Browser, gim ringan, beberapa app store — banyak app diam-diam mengasumsikan ada kursor. Mencolokkan mouse USB ke proyektor itu canggung. Lumina Go menyajikan dua opsi setara mouse dalam satu app: touchpad presisi dan air mouse dengan gerak bebas di ruang.",
        bullets: [
          "Touchpad: geser untuk menggerakkan + Klik Kiri / Kanan, sensitivitas hingga 1,5×",
          "Air mouse: gyro + akselerometer dipadukan di perangkat, sensitivitas hingga 3,0×",
          "Satu ketukan di bawah untuk berpindah di antara keduanya",
        ],
      },
      {
        eyebrow: "Skenario 03 — Mengetik itu siksaan",
        title: "“Memasukkan kata sandi Wi-Fi seharusnya bukan teka-teki.”",
        desc: "Proyektor datang dengan beberapa keyboard layar terburuk di elektronik konsumer. Kunci Wi-Fi 16 karakter bisa makan menit, salah sekali ulang dari awal. Lumina Go membentangkan QWERTY penuh di layar yang sudah Anda pakai mengetik setiap hari.",
        bullets: [
          "QWERTY lengkap, angka / simbol cuma satu ketukan",
          "Sinkron real-time dengan field input yang sedang fokus di proyektor",
          "Enter, Backspace, Spasi — tepat di tempat yang dicari ibu jari",
        ],
      },
      {
        eyebrow: "Skenario 04 — Huruf demi huruf terlalu panjang",
        title: "“Tinggal tempel saja kata sandinya. Tinggal tempel saja URL-nya.”",
        desc: "Beberapa konten memang tak layak diketik huruf demi huruf — kunci Wi-Fi 40 karakter, tautan dari teman, judul film asing. Tulis (atau tempel) di ponsel, ketuk Kirim, lalu Lumina Go menempelkannya sekaligus melalui clipboard di proyektor.",
        bullets: [
          "Edit dan periksa teks di ponsel sebelum mengirim",
          "Bagus untuk URL, kueri pencarian, judul panjang, kunci Wi-Fi",
          "Ditempel ke field yang sedang fokus di proyektor saat itu",
        ],
      },
      {
        eyebrow: "Skenario 05 — Proyektor Anda tanpa suara",
        title: "“‘Cari Transformers’ — andai saja.”",
        desc: "TV modern punya asisten suara. Sebagian besar proyektor tidak — atau ada tapi hanya di app pabrikannya. Lumina Go mengubah ponsel menjadi remote suara yang tak pernah dimiliki proyektor Anda: pengenalan suara matang dari ponsel + 50+ intent proyektor yang diuraikan di perangkat.",
        bullets: [
          "“Buka Netflix” · “Volume naik” · “Pengaturan Wi-Fi” · “Kembali ke beranda”",
          "Memakai pengenalan suara bawaan ponsel — tanpa wake word",
          "Diuraikan secara lokal — audio dan transkrip tidak meninggalkan ponsel",
        ],
      },
      {
        eyebrow: "Skenario 06 — Macet di sesuatu",
        title: "“Kenapa gambarnya menghijau? Bagaimana masuk mode speaker Bluetooth?”",
        desc: "Buku panduan panjang. Jawaban forum sudah usang. Lumina Go membawa asisten AI proyektor, dibangun di atas LLM modern (kelas ChatGPT) yang dilapisi catatan engineering proyektor dan playbook troubleshooting kami selama bertahun-tahun. Ketuk “?” di kanan atas layar mana pun dan tanyakan dalam bahasa apa pun.",
        bullets: [
          "Jawaban memperhitungkan model dan versi firmware Anda",
          "Dilatih dengan playbook troubleshooting dan manual pengguna kami",
          "Mengobrol dalam Indonesia · English · 中文 · 繁體 · 日本語 · 한국어 · Français · Italiano · Español · Português",
        ],
      },
      {
        eyebrow: "Skenario 07 — Nonton larut, ponsel menyilaukan",
        title: "“Pukul 1 dini hari. Kenapa ponsel jadi senter?”",
        desc: "Lampu redup, film mulai, Anda ambil ponsel untuk mengatur volume — dan UI putih membakar mata Anda. Sebagian besar app remote tidak memikirkan ini. Lumina Go menyajikan dua tema yang ditata manual: palet siang yang bersih dan tema malam ala bioskop, keduanya mengikuti tampilan sistem secara otomatis.",
        bullets: [
          "Siang / malam otomatis — mengikuti iOS dan Android, override manual juga bisa",
          "Enam tab — Remote, Keyboard, Touchpad, Air Mouse, Voice, Text — masing-masing dirancang dua kali",
          "Hitam pekat ramah OLED malam hari, kontras tinggi yang nyaman dibaca siang hari",
        ],
      },
    ],
    closing: {
      eyebrow: "Apa selanjutnya",
      title: "Kami baru saja mulai.",
      desc: "Setiap skenario di atas datang dari pengguna nyata yang sempat terjebak. Jika ada momen yang belum kami sentuh — atau sesuatu yang masih mengganjal — beri tahu kami. Anda akan melihatnya di rilis berikutnya.",
      cta_label: "Bagikan skenario Anda",
      cta_href: "mailto:luminago@hotack.cn?subject=Lumina%20Go%20Scenario%20Suggestion",
    },
  },
  download: {
    section_eyebrow: "Dapatkan app",
    section_title: "Gratis di App Store dan Google Play",
    section_lead:
      "Pindai dengan kamera ponsel untuk memasang. Lumina Go gratis, tanpa iklan, dan bekerja sepenuhnya offline.",
    ios_title: "Unduh untuk iPhone",
    ios_subtitle: "Memerlukan iOS 16.0 atau yang lebih baru",
    ios_scan_hint: "Pindai dengan app Kamera",
    android_title: "Dapatkan di Google Play",
    android_subtitle: "Memerlukan Android 10 atau yang lebih baru",
    android_scan_hint: "Pindai dengan kamera",
    free_note: "Gratis · tanpa iklan · tanpa pelacakan · bekerja offline",
  },
  footer: {
    tagline: "Kepingan terakhir yang hilang dari proyektor Anda.",
    cols: {
      product: "Produk",
      legal: "Legal",
    },
    links: {
      features: "Fitur",
      download: "Unduh",
      privacy: "Kebijakan Privasi",
      terms: "Ketentuan Penggunaan",
      contact: "Kontak",
    },
    copyright: "© 2026 Chengdu Hotack Technology Co., Ltd.",
    company_zh: "成都市和天创科技股份有限公司",
    language: "Bahasa",
  },
};
