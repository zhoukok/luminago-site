import type { Dict } from "./types";

export const vi: Dict = {
  nav: {
    download: "Tải xuống",
  },
  hero: {
    badge: "Hơn cả một điều khiển · trợ thủ AI cho máy chiếu của bạn",
    title_line1: "Mảnh ghép cuối cùng còn thiếu ",
    title_line2: "của máy chiếu.",
    tagline:
      "Nơi việc gõ phiền phức trôi chảy ngay đầu ngón tay. Điều khiển, bàn phím, touchpad, air mouse, giọng nói và văn bản — sáu cách điều khiển, một kết nối BLE trực tiếp, một ứng dụng.",
    cta_primary: "Tải ứng dụng",
    cta_secondary: "Xem nó làm được gì",
    chip_latency: "Độ trễ ≤ 20 ms",
    chip_voice: "50+ lệnh thoại",
    chip_offline: "Ngoại tuyến · chỉ BLE",
  },
  features: {
    section_eyebrow: "Vì sao chúng tôi làm điều này",
    section_title: "Sáu khoảnh khắc Lumina Go có mặt để cứu bạn.",
    section_lead:
      "Mọi tính năng trong Lumina Go ra đời vì có ai đó đã bị mắc kẹt. Đây là những kịch bản cứ trở đi trở lại — và những gì chúng tôi đã xây dựng để xử lý chúng.",
    items: [
      {
        eyebrow: "Kịch bản 01 — Điều khiển biến mất",
        title: "“Điều khiển lại lạc đâu rồi.”",
        desc: "Điều khiển máy chiếu cứ như được thiết kế để rơi giữa các đệm sofa. Mất một cái, một cỗ máy tuyệt vời lập tức biến thành chặn giấy đắt tiền. Lumina Go đặt một bộ điều khiển BLE đầy đủ trở lại chiếc điện thoại bạn vẫn luôn mang theo.",
        bullets: [
          "D-Pad 4 hướng + nút OK ở giữa, cùng bố cục phím với điều khiển gốc",
          "Nguồn · Tắt tiếng · Nguồn vào · Cast · Độ sáng · Zoom · Âm lượng",
          "Phản hồi BLE dưới 20 ms trong phạm vi 10 m, không cần ‘nghi thức’ ghép đôi",
        ],
      },
      {
        eyebrow: "Kịch bản 02 — Ứng dụng này cần con trỏ",
        title: "“Với D-Pad thì ứng dụng này không xài nổi.”",
        desc: "Trình duyệt, trò chơi nhẹ, một số kho ứng dụng — nhiều ứng dụng ngầm cho rằng có con trỏ. Cắm chuột USB vào máy chiếu thì rất vướng. Lumina Go cho bạn hai lựa chọn cấp ‘chuột’ trong cùng một app: touchpad chính xác và air mouse di chuyển tự do trong không gian.",
        bullets: [
          "Touchpad: trượt để di chuyển + Trái / Phải, độ nhạy tối đa 1,5×",
          "Air mouse: con quay + gia tốc kế hợp nhất ngay trên thiết bị, độ nhạy tối đa 3,0×",
          "Một chạm dưới đáy để chuyển qua lại giữa hai chế độ",
        ],
      },
      {
        eyebrow: "Kịch bản 03 — Gõ là cực hình",
        title: "“Nhập mật khẩu Wi-Fi đáng lẽ không phải câu đố.”",
        desc: "Máy chiếu gắn liền với một trong những bàn phím trên màn hình tệ nhất thế giới điện tử tiêu dùng. Một mã Wi-Fi 16 ký tự có thể tốn vài phút, sai một bước là gõ lại từ đầu. Lumina Go trải sẵn một QWERTY đầy đủ trên thiết bị bạn vốn gõ mỗi ngày.",
        bullets: [
          "QWERTY đầy đủ, số / ký hiệu chỉ một chạm",
          "Đồng bộ thời gian thực với ô nhập đang được focus trên máy chiếu",
          "Enter, Backspace, Phím cách — đúng vị trí ngón cái mong muốn",
        ],
      },
      {
        eyebrow: "Kịch bản 04 — Gõ từng chữ thì lâu quá",
        title: "“Cứ paste mật khẩu cho rồi. Cứ paste link cho rồi.”",
        desc: "Có những nội dung không nên gõ từng chữ — mã Wi-Fi 40 ký tự, link bạn bè gửi, tựa phim ngoại quốc. Soạn (hoặc paste) trên điện thoại, nhấn Gửi, rồi Lumina Go dán nguyên một lần qua clipboard trên máy chiếu.",
        bullets: [
          "Soạn và rà soát trên điện thoại trước khi gửi",
          "Hợp với URL, truy vấn tìm kiếm, tựa dài, mã Wi-Fi",
          "Dán vào ô nhập đang được focus trên máy chiếu lúc đó",
        ],
      },
      {
        eyebrow: "Kịch bản 05 — Máy chiếu của bạn không có giọng nói",
        title: "“‘Tìm Transformers’ — giá mà.”",
        desc: "TV hiện đại có trợ lý giọng nói. Hầu hết máy chiếu thì không — hoặc có nhưng chỉ trong các ứng dụng của hãng. Lumina Go biến điện thoại thành điều khiển bằng giọng nói mà máy chiếu chưa từng có: nhận dạng giọng nói trưởng thành của điện thoại + 50+ ý định máy chiếu được phân tích ngay trên thiết bị.",
        bullets: [
          "“Mở Netflix” · “To âm lượng” · “Cài đặt Wi-Fi” · “Về trang chủ”",
          "Dùng nhận dạng giọng nói hệ thống của điện thoại — không cần từ kích hoạt",
          "Phân tích cục bộ — âm thanh và bản ghi không rời khỏi điện thoại",
        ],
      },
      {
        eyebrow: "Kịch bản 06 — Mắc kẹt ở chỗ nào đó",
        title: "“Sao hình ám xanh? Vào chế độ loa Bluetooth thế nào?”",
        desc: "Sách hướng dẫn thì dài. Câu trả lời trên diễn đàn thì cũ. Lumina Go có sẵn một trợ lý AI cho máy chiếu, xây trên các LLM tiền tuyến (cấp ChatGPT) và bồi đắp bằng nhiều năm ghi chú kỹ thuật và playbook xử lý sự cố của chúng tôi. Bấm “?” ở góc trên bên phải bất kỳ màn hình nào và hỏi bằng ngôn ngữ nào cũng được.",
        bullets: [
          "Câu trả lời nhận biết model và phiên bản firmware bạn đang dùng",
          "Được huấn luyện với playbook xử lý sự cố và sách hướng dẫn của chính chúng tôi",
          "Trò chuyện bằng Tiếng Việt · English · 中文 · 繁體 · 日本語 · 한국어 · Français · Italiano · Español · Português",
        ],
      },
      {
        eyebrow: "Kịch bản 07 — Đêm xem phim, điện thoại lóa mắt",
        title: "“1 giờ sáng. Sao điện thoại lại như đèn pin?”",
        desc: "Bạn dịu đèn, phim bắt đầu, cầm điện thoại để chỉnh âm lượng — và một UI trắng tinh đốt cháy mắt bạn. Phần lớn app điều khiển không nghĩ tới điều này. Lumina Go đi kèm hai tông màu được tinh chỉnh thủ công: bảng màu ban ngày trong trẻo và tông tối hợp rạp chiếu, cả hai tự động theo giao diện hệ thống.",
        bullets: [
          "Sáng / tối tự động — theo iOS và Android, cũng có thể chuyển thủ công",
          "Sáu tab — Remote, Keyboard, Touchpad, Air Mouse, Voice, Text — đều được thiết kế hai bản",
          "Đen tuyền thân thiện OLED ban đêm, độ tương phản cao dễ đọc ban ngày",
        ],
      },
    ],
    closing: {
      eyebrow: "Tiếp theo là gì",
      title: "Chúng tôi mới chỉ bắt đầu.",
      desc: "Mọi kịch bản phía trên đều đến từ một người dùng thật từng mắc kẹt. Nếu có khoảnh khắc nào chúng tôi chưa chạm tới — hoặc điều gì đó vẫn chưa ổn với bạn — hãy cho chúng tôi biết. Bạn sẽ thấy nó ở bản phát hành sau.",
      cta_label: "Chia sẻ kịch bản của bạn",
      cta_href: "mailto:luminago@hotack.cn?subject=Lumina%20Go%20Scenario%20Suggestion",
    },
  },
  download: {
    section_eyebrow: "Lấy ứng dụng",
    section_title: "Miễn phí trên App Store và Google Play",
    section_lead:
      "Quét bằng camera điện thoại để cài đặt. Lumina Go miễn phí, không quảng cáo, và hoạt động hoàn toàn ngoại tuyến.",
    ios_title: "Tải cho iPhone",
    ios_subtitle: "Cần iOS 16.0 trở lên",
    ios_scan_hint: "Quét bằng app Camera",
    android_title: "Tải trên Google Play",
    android_subtitle: "Cần Android 10 trở lên",
    android_scan_hint: "Quét bằng camera",
    free_note: "Miễn phí · không quảng cáo · không theo dõi · hoạt động ngoại tuyến",
  },
  footer: {
    tagline: "Mảnh ghép cuối cùng còn thiếu của máy chiếu.",
    cols: {
      product: "Sản phẩm",
      legal: "Pháp lý",
    },
    links: {
      features: "Tính năng",
      download: "Tải xuống",
      privacy: "Chính sách bảo mật",
      terms: "Điều khoản sử dụng",
      contact: "Liên hệ",
    },
    copyright: "© 2026 Chengdu Hotack Technology Co., Ltd.",
    company_zh: "成都市和天创科技股份有限公司",
    language: "Ngôn ngữ",
  },
};
