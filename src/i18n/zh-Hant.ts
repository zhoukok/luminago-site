import type { Dict } from "./types";

export const zhHant: Dict = {
  nav: {
    download: "下載",
  },
  hero: {
    badge: "不只是遙控 · 更是你的 AI 投影管家",
    title_line1: "投影機的",
    title_line2: "最後一塊拼圖。",
    tagline:
      "讓繁瑣的輸入，化為指尖的流轉。遙控、鍵盤、觸控板、空中飛鼠、語音、文字——6 種操控方式，一條直連 BLE 通道，一個 App。",
    cta_primary: "立即下載",
    cta_secondary: "看看它能做什麼",
    chip_latency: "≤ 20 ms 延遲",
    chip_voice: "50+ 語音指令",
    chip_offline: "離線 · 純 BLE",
  },
  features: {
    section_eyebrow: "我們為什麼做這個 App",
    section_title: "6 個你大概率遇到過的投影場景。",
    section_lead:
      "Lumina Go 的每一個功能，都對應一個真實被卡住過的使用者瞬間。下面這 6 個場景，我們用一個 App 一次性解決。",
    items: [
      {
        eyebrow: "場景 01 — 遙控器找不到了",
        title: "「遙控器又不見了。」",
        desc: "投影機能做的事越來越多，但原廠遙控的設計目標似乎就是「掉進沙發縫」。一旦它不見了，一台好機器瞬間變成一塊磚。Lumina Go 把一支完整的 BLE 遙控器裝回你本來就隨身帶的手機裡。",
        bullets: [
          "4 向 D-Pad + 中央 OK，按鍵布局與原廠一致",
          "電源 · 靜音 · 訊號源 · 投屏 · 亮度 · 縮放 · 音量",
          "BLE 直連，10 m 內回應 ≤ 20 ms，無需配對助手",
        ],
      },
      {
        eyebrow: "場景 02 — 這 App 需要滑鼠",
        title: "「這 App 用 D-Pad 根本點不動。」",
        desc: "瀏覽器、休閒遊戲、一部分應用商店——它們預設你有一支滑鼠。可是給投影機插 USB 滑鼠又很彆扭。Lumina Go 把「滑鼠級」的兩套方案都放進了一個 App 裡：一個精準的觸控板，一個全空間定位的空中飛鼠。",
        bullets: [
          "觸控板：滑動移動 + 獨立左右鍵，靈敏度最高 1.5×",
          "空中飛鼠：陀螺儀 + 加速度計本機融合，靈敏度最高 3.0×",
          "底部 tab 一鍵切換，哪種順手用哪種",
        ],
      },
      {
        eyebrow: "場景 03 — 投影機的軟鍵盤太難用",
        title: "「輸一次 Wi-Fi 密碼像做一次解謎。」",
        desc: "投影機自帶的系統軟鍵盤，大概是消費電子裡最磨人的輸入法之一。一個 16 位的 Wi-Fi 密碼可以讓你敲幾分鐘，按錯一次就要從頭來。Lumina Go 直接在你每天都在用的手機螢幕上，攤開一塊完整的 QWERTY 鍵盤。",
        bullets: [
          "完整 QWERTY 鍵位，數字 / 符號一鍵切換",
          "與投影機端目前焦點的輸入框即時連動",
          "Enter / Backspace / 空白鍵的位置符合手指直覺",
        ],
      },
      {
        eyebrow: "場景 04 — 一個字一個字敲太煩",
        title: "「這種東西，貼一下不就好了？」",
        desc: "有些內容真的不適合一個字一個字敲——40 位的 Wi-Fi 金鑰、別人發來的分享連結、一部外文片名。在手機上編輯好（或直接貼上），按 Send，Lumina Go 透過剪貼簿一次性貼到投影機。",
        bullets: [
          "在手機上先編輯、確認再傳送",
          "適用 URL、搜尋詞、長片名、Wi-Fi 金鑰",
          "貼到投影機端目前焦點的任意輸入框",
        ],
      },
      {
        eyebrow: "場景 05 — 投影機沒有語音功能",
        title: "「要是能喊一聲『搜《變形金剛》』就好了。」",
        desc: "現代電視早就自帶語音助理，可大多數投影機沒有；就算有，也多半只在廠商自家幾個 App 裡生效。Lumina Go 把你的手機變成一支語音遙控器——用的是手機級成熟的語音辨識，50+ 條投影端意圖全部在手機上本機解析。",
        bullets: [
          "「打開 Netflix」·「音量加大」·「Wi-Fi 設定」·「回主頁」",
          "直接呼叫你手機的系統語音辨識，不需喚醒詞",
          "辨識結果完全本機解析，音訊與文字都不離開手機",
        ],
      },
      {
        eyebrow: "場景 06 — 遇到問題不知道找誰",
        title: "「為什麼畫面偏綠？藍牙喇叭模式怎麼進？」",
        desc: "說明書太長，網路上的教學大多過期。Lumina Go 內建了一個 AI 投影助理——底層是 ChatGPT 級的大型語言模型，之上疊加了我們這些年累積的投影工程經驗與排障手冊。任何一頁右上角的「?」按下去就能問，用任何語言都行。",
        bullets: [
          "回答會結合你手上的具體機型與韌體版本",
          "訓練語料包含我們自家的排障手冊與使用者手冊",
          "支援繁體中文 · English · 简体 · 日本語 · 한국어 · Français · Italiano · Português · Español",
        ],
      },
      {
        eyebrow: "場景 07 — 深夜看片，手機一亮刺眼",
        title: "「凌晨一點，手機螢幕白得像手電筒。」",
        desc: "房間剛調暗、電影剛開場，你想拿手機調一下音量——結果一打開 App，整塊螢幕白得刺眼。大部分遙控類 App 壓根沒考慮過這件事。Lumina Go 內建兩套手工調色的主題：清爽的日間色板，以及戲院級的夜間深色主題，跟著手機系統的深淺模式自動切換。",
        bullets: [
          "日 / 夜自動跟隨 iOS、Android 系統深色模式，也支援手動切換",
          "6 個 tab 每一頁都做了兩版——Remote / Keyboard / Touchpad / Air Mouse / Voice / Text",
          "夜間 OLED 純黑省電又柔和，日間對比度拉滿讀起來不費力",
        ],
      },
    ],
    closing: {
      eyebrow: "接下來呢？",
      title: "這只是一個開始。",
      desc: "上面 6 個場景，都來自一位真實被卡住過的使用者。如果你還有我們沒覆蓋到的使用瞬間，或者某個地方用起來還是不順——告訴我們，下一次打開 App 就能用上。",
      cta_label: "告訴我們你的場景",
      cta_href: "mailto:luminago@hotack.cn?subject=Lumina%20Go%20%E5%A0%B4%E6%99%AF%E5%BB%BA%E8%AD%B0",
    },
  },
  download: {
    section_eyebrow: "取得 App",
    section_title: "在 App Store 與 Google Play 免費下載",
    section_lead:
      "用手機相機掃 QR 即可安裝。Lumina Go 完全免費、無廣告、完全離線可用。",
    ios_title: "iPhone 下載",
    ios_subtitle: "需 iOS 16.0 或更新",
    ios_scan_hint: "用相機 App 掃碼",
    android_title: "Google Play 下載",
    android_subtitle: "需 Android 10 或更新",
    android_scan_hint: "用相機掃碼",
    free_note: "完全免費 · 無廣告 · 不追蹤 · 離線可用",
  },
  footer: {
    tagline: "投影機的最後一塊拼圖。",
    cols: {
      product: "產品",
      legal: "法務",
    },
    links: {
      features: "功能",
      download: "下載",
      privacy: "隱私權政策",
      terms: "使用條款",
      contact: "聯絡我們",
    },
    copyright: "© 2026 成都市和天創科技股份有限公司",
    company_zh: "Chengdu Hotack Technology Co., Ltd.",
    language: "語言",
  },
};
