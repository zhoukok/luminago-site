import type { Dict } from "./types";

export const zh: Dict = {
  nav: {
    features: "功能",
    ecosystem: "生态",
    showcase: "App",
    developers: "开发者",
    download: "下载",
  },
  hero: {
    badge: "已接入 Alexa、Google Home 与 AI 智能帮助",
    title_line1: "投得更大，",
    title_line2: "操控更聪明。",
    tagline:
      "为 WEMI 与 LYNCAST 投影仪打造的蓝牙低功耗遥控器 + 语音助手。无需云端绑定，无需账号注册——打开 App 即刻可用。",
    cta_ios: "iOS 下载",
    cta_android: "Google Play",
    cta_docs: "查看开发者文档",
    sub_small: "完全免费 · 无广告 · 不追踪 · 离线可用",
  },
  features: {
    section_eyebrow: "核心亮点",
    section_title: "重新定义一根口袋里的遥控器",
    section_lead:
      "我们做 Lumina Go 是因为——遥控器不该只是四个方向键加一个 OK。",
    items: [
      {
        title: "蓝牙 LE 遥控",
        desc: "20 ms 以内响应的方向键、键盘、触摸板、媒体键。10 米范围稳定连接，无需 Wi-Fi。",
      },
      {
        title: "空中飞鼠",
        desc: "挥动手机即可移动光标。陀螺仪与加速计在设备端实时融合，轨迹丝滑。",
      },
      {
        title: "语音控制",
        desc: "50+ 种投影仪意图全部在设备端解析。隐私优先：音频数据永远不离开手机。",
      },
      {
        title: "AI 智能帮助",
        desc: "设置遇到困难？一键打开聊天助手，读懂您的型号与固件，后端由 Cloudflare AI 驱动。",
      },
    ],
  },
  ecosystem: {
    section_eyebrow: "兼容并蓄",
    section_title: "您惯用的语音助手，都已经会说 Lumina",
    section_lead:
      "完成一次账号绑定，投影仪就成为您日常使用的语音助手里的一等公民。",
    quote: "\u201cAlexa, turn on my projector.\u201d",
    quote_by: "……它就这么打开了。",
    coming_soon: "即将支持",
  },
  showcase: {
    section_eyebrow: "真机体验",
    section_title: "为单手操作而生，为沙发场景而造",
    section_lead: "6 屏全览，拇指可达每一个交互点。",
  },
  developers: {
    section_eyebrow: "面向开发者",
    section_title: "开放 API，开源代码，集成随心",
    section_lead:
      "每台设备都提供本地 REST + WebSocket 接口，云中继托管于 relay.luminago.app，完全免费。Fork 接收端固件，扩展遥控器 App，或直接接入 Matter 桥接。",
    curl_caption: "试试公开的流媒体搜索端点：",
    btn_github: "前往 GitHub",
    btn_docs: "开发者文档",
    btn_api: "服务状态",
  },
  footer: {
    tagline: "Lumina Go —— 诞生于成都的智能投影新物种。",
    cols: {
      product: "产品",
      company: "公司",
      legal: "法务",
      developer: "开发者",
    },
    links: {
      features: "功能",
      ecosystem: "生态",
      download: "下载",
      github: "GitHub",
      docs: "文档",
      status: "服务状态",
      contact: "联系我们",
      privacy: "手机端隐私",
      smart_home_privacy: "智能家居隐私",
      alexa_privacy: "Alexa 精简隐私",
      terms: "使用条款",
    },
    copyright: "© 2026 成都市和天创科技股份有限公司",
    company_zh: "Chengdu Hotack Technology Co., Ltd.",
    language: "语言",
  },
};
