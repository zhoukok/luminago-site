import type { Dict } from "./types";

export const pt: Dict = {
  nav: {
    download: "Baixar",
  },
  hero: {
    badge: "Mais que um controle · seu mordomo de IA para projetores",
    title_line1: "A última peça que faltava ",
    title_line2: "no seu projetor.",
    tagline:
      "Onde a digitação tediosa flui na ponta dos dedos. Controle, teclado, touchpad, air mouse, voz e texto — seis modos de comando, um link BLE direto, um app.",
    cta_primary: "Baixar o app",
    cta_secondary: "Veja o que ele faz",
    chip_latency: "Latência ≤ 20 ms",
    chip_voice: "Mais de 50 comandos de voz",
    chip_offline: "Offline · só BLE",
  },
  features: {
    section_eyebrow: "Por que criamos isso",
    section_title: "Seis momentos em que o Lumina Go salva o dia.",
    section_lead:
      "Cada recurso do Lumina Go nasceu porque alguém ficou travado. Estes são os cenários que voltavam toda hora — e o que construímos para resolvê-los.",
    items: [
      {
        eyebrow: "Cenário 01 — O controle sumiu",
        title: "“O controle sumiu. De novo.”",
        desc: "Controles de projetor parecem feitos para escorregar entre as almofadas do sofá. Perdeu um e uma máquina poderosa vira um peso de papel caríssimo. O Lumina Go coloca um controle BLE completo de volta no celular que você já carrega para todo lado.",
        bullets: [
          "D-Pad de 4 direções + OK central, mesmas teclas do controle original",
          "Liga/Desliga · Mudo · Fonte · Cast · Brilho · Zoom · Volume",
          "Resposta BLE abaixo de 20 ms a até 10 m, sem ritual de pareamento",
        ],
      },
      {
        eyebrow: "Cenário 02 — O app precisa de cursor",
        title: "“Esse app é impossível de usar com D-Pad.”",
        desc: "Navegadores, jogos casuais, lojas de apps — muitos assumem que existe um cursor. Plugar um mouse USB no projetor é desajeitado. O Lumina Go entrega duas opções de qualidade ‘mouse’ no mesmo app: um touchpad preciso e um air mouse de movimento livre.",
        bullets: [
          "Touchpad: deslize para mover + botões esquerdo / direito, sensibilidade até 1,5×",
          "Air mouse: giroscópio + acelerômetro fundidos no aparelho, sensibilidade até 3,0×",
          "Um toque na barra inferior para alternar entre os dois",
        ],
      },
      {
        eyebrow: "Cenário 03 — Digitar é uma tortura",
        title: "“Digitar a senha do Wi-Fi não devia ser um quebra-cabeça.”",
        desc: "Projetores vêm com alguns dos piores teclados virtuais do mercado. Uma chave Wi-Fi de 16 caracteres pode levar minutos, e qualquer erro te faz começar do zero. O Lumina Go abre um QWERTY completo no aparelho em que você já digita todo dia.",
        bullets: [
          "QWERTY completo, com números e símbolos a um toque",
          "Sincronizado em tempo real com o campo focado no projetor",
          "Enter, backspace e espaço exatamente onde seus polegares esperam",
        ],
      },
      {
        eyebrow: "Cenário 04 — Letra por letra é demais",
        title: "“Cola, simplesmente cola a senha. Cola o link.”",
        desc: "Tem coisa que não dá para digitar letra por letra — chaves Wi-Fi de 40 caracteres, um link compartilhado por um amigo, o título de um filme estrangeiro. Você redige (ou cola) no celular, toca em Enviar, e o Lumina Go entrega tudo de uma vez via clipboard no projetor.",
        bullets: [
          "Edite e revise no celular antes de mandar",
          "Ótimo para URLs, buscas, títulos longos, chaves Wi-Fi",
          "Cola no campo que estiver focado no projetor naquele momento",
        ],
      },
      {
        eyebrow: "Cenário 05 — Seu projetor não tem voz",
        title: "“‘Buscar Transformers’ — se ao menos…”",
        desc: "TVs modernas vêm com assistente de voz. A maioria dos projetores não — ou tem, mas só dentro dos apps da própria fabricante. O Lumina Go transforma o celular no controle por voz que o projetor nunca teve, usando o reconhecimento de voz de classe mundial do seu telefone e mais de 50 intenções de projetor processadas localmente.",
        bullets: [
          "“Abrir Netflix” · “Aumentar volume” · “Configurações de Wi-Fi” · “Voltar ao início”",
          "Usa o reconhecimento de voz nativo do seu celular — sem palavra de ativação",
          "Análise local — áudio e transcrição nunca saem do telefone",
        ],
      },
      {
        eyebrow: "Cenário 06 — Travou em algo",
        title: "“Por que minha imagem está verde? Como entro no modo caixa de som Bluetooth?”",
        desc: "Manuais são longos. Respostas de fórum são velhas. O Lumina Go traz um assistente de IA para projetores, construído sobre LLMs de fronteira (classe ChatGPT) e reforçado com anos das nossas próprias notas de engenharia e manuais de solução de problemas. Toque no “?” em qualquer tela e pergunte em qualquer idioma.",
        bullets: [
          "Respostas conscientes do modelo e firmware exato que você tem",
          "Treinado com nossos próprios manuais de troubleshooting e de usuário",
          "Conversa em Português · English · 中文 · 日本語 · 한국어 · Français · Italiano · Español",
        ],
      },
      {
        eyebrow: "Cenário 07 — Sessão de cinema, celular ofuscando",
        title: "“É 1 da manhã. Por que meu celular virou lanterna?”",
        desc: "Você apaga as luzes, o filme começa, pega o celular para mexer no volume — e a UI branca te cega. Quase nenhum app de controle pensou nisso. O Lumina Go traz dois temas feitos à mão: uma paleta limpa para o dia e um tema noturno cinematográfico, ambos seguindo automaticamente o modo de aparência do sistema.",
        bullets: [
          "Dia / noite automáticos, seguindo iOS e Android, ou troque manualmente",
          "Cada uma das 6 abas — Remote, Keyboard, Touchpad, Air Mouse, Voice, Text — desenhada duas vezes",
          "Pretos puros amigáveis ao OLED à noite, alto contraste durante o dia",
        ],
      },
    ],
    closing: {
      eyebrow: "E o que vem agora",
      title: "Estamos só começando.",
      desc: "Cada cenário acima veio de um usuário real que ficou travado. Se houver um momento que ainda não cobrimos — ou algo que ainda não funciona para você — conte para a gente. Você vai ver isso no próximo release.",
      cta_label: "Compartilhe seu cenário",
      cta_href: "mailto:luminago@hotack.cn?subject=Lumina%20Go%20Scenario%20Suggestion",
    },
  },
  download: {
    section_eyebrow: "Pegue o app",
    section_title: "Grátis na App Store e na Google Play",
    section_lead:
      "Aponte a câmera do seu celular para o QR Code para instalar. O Lumina Go é gratuito, sem anúncios e funciona totalmente offline.",
    ios_title: "Baixar para iPhone",
    ios_subtitle: "Requer iOS 16.0 ou superior",
    ios_scan_hint: "Escaneie com o app Câmera",
    android_title: "Baixar na Google Play",
    android_subtitle: "Requer Android 10 ou superior",
    android_scan_hint: "Escaneie com a câmera",
    coming_soon: "Em breve",
    free_note: "Grátis · sem anúncios · sem rastreamento · funciona offline",
  },
  footer: {
    tagline: "A última peça que faltava no seu projetor.",
    cols: {
      product: "Produto",
      legal: "Jurídico",
    },
    links: {
      features: "Recursos",
      download: "Baixar",
      privacy: "Política de Privacidade",
      terms: "Termos de Uso",
      contact: "Contato",
    },
    copyright: "© 2026 Chengdu Hotack Technology Co., Ltd.",
    company_zh: "成都市和天创科技股份有限公司",
    language: "Idioma",
  },
};
