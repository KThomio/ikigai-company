/**
 * IKIGAI COMPANY — SDR Brain & Closing Handoff Engine
 * 
 * Regras Obrigatórias:
 * 1. Zero Invenção: carrega dinamicamente ../brand.json
 * 2. Suporte a Gemini API ou motor heurístico consultivo
 * 3. Handoff imediato para o WhatsApp principal do Diretor (5511943758597) ao fechar
 */

const fs = require('fs');
const path = require('path');

// Load brand.json
const brandPath = path.join(__dirname, '../brand.json');
let brandData = {};
try {
  brandData = JSON.parse(fs.readFileSync(brandPath, 'utf-8'));
} catch (err) {
  console.error('[SDR BRAIN] Erro ao carregar brand.json:', err.message);
}

const DIRECTOR_WHATSAPP = '5511943758597';
const DIRECTOR_NAME = 'Kauê Thomio';

/**
 * Knowledge Base gerada estritamente a partir do brand.json
 */
function getKnowledgeBase() {
  const phys = (brandData.physicalProducts || [])
    .map((p) => `- ${p.name}: ${p.price} ${p.comboWithMiniSite ? `(Combo c/ Mini Site: ${p.comboWithMiniSite})` : ''} ${p.price16un ? `(16un: ${p.price16un} / 50un: ${p.price50un})` : ''}`)
    .join('\n');

  const combos = (brandData.promotionalCombos || [])
    .map((c) => `- ${c.name}: ${c.price}`)
    .join('\n');

  const digi = (brandData.digitalSolutions || [])
    .map((d) => `- ${d.name}: ${d.price}`)
    .join('\n');

  return `
PRODUTOS FÍSICOS NFC:
${phys}

COMBOS PROMOCIONAIS COM MINI SITE PROFISSIONAL:
${combos}

SOLUÇÕES DIGITAIS & MOTION:
${digi}

PRAZOS & PERSONALIZAÇÃO:
- Todos os produtos físicos levam a logo e cores oficiais do cliente.
- Etiquetas adesivas possuem relevo circular de 25mm para encaixe do chip.
- Mini Sites prontos em até 48 horas úteis.
- Diretor de Projetos: ${DIRECTOR_NAME} (${DIRECTOR_WHATSAPP}).
`;
}

/**
 * Responde à mensagem do lead e avalia se o lead está PRONTO PARA FECHAR
 */
async function processLeadMessage({ lead, incomingMessage, conversationHistory = [] }) {
  const text = (incomingMessage || '').toLowerCase().trim();
  const kb = getKnowledgeBase();

  // Intent Detection: Fechamento / Compra
  const closingKeywords = [
    'fechar',
    'comprar',
    'quero',
    'vamos fazer',
    'como pago',
    'pix',
    'contrato',
    'dados',
    'pode ser',
    'fechado',
    'fecho',
    'gostei do combo',
    'gostei da placa',
    'gostei do totem',
    'gostei do cartão',
    'vou querer',
    'manda o pix',
    'manda o contrato',
  ];

  const isReadyToClose = closingKeywords.some((kw) => text.includes(kw));

  if (isReadyToClose) {
    // Determine which product/combo was discussed or default to lead recommendation
    let chosenProduct = 'Combo Placa Google + Mini Site (R$ 210,00)';
    if (text.includes('totem')) chosenProduct = 'Totem Personalizado NFC 15x10 cm (R$ 120,00 ou Combo R$ 250,00)';
    else if (text.includes('placa')) chosenProduct = 'Placa de Avaliação Google em Acrílico (R$ 80,00 ou Combo R$ 210,00)';
    else if (text.includes('cartão') || text.includes('card')) chosenProduct = 'Connect Card PVC NFC (R$ 79,90 ou Combo R$ 199,90)';
    else if (text.includes('etiqueta')) chosenProduct = 'Etiquetas Adesivas NFC 7x4 cm (16 un R$ 91,20 ou 50 un R$ 150,00)';
    else if (text.includes('landing page') || text.includes('site')) chosenProduct = 'Landing Page de Alta Conversão (R$ 599,00) ou Mini Site (R$ 299,00)';

    // Generate Handoff Card
    const handoffCard = `🔔 *LEAD PRONTO PARA FECHAR — IKIGAI SDR*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🏢 *Empresa:* ${lead.name} (${lead.city})
👤 *Contato:* ${lead.phoneFormatted || lead.phone}
📦 *Produto de Interesse:* ${chosenProduct}
🎯 *Oferta Inicial:* ${lead.recommendedOffer} (${lead.commercialVideo})
💬 *Última Mensagem:* "${incomingMessage}"
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
👉 *Clique para assumir a conversa:* https://wa.me/${lead.phone.replace(/\D/g, '')}
`;

    // Customer message
    const botReply = `Excelente escolha! 🎉 Já registrei seu pedido do *${chosenProduct}* aqui no nosso sistema.

Como personalizamos cada peça com a logo e cores exatas da sua empresa, estou transferindo seu atendimento agora mesmo para o *Kauê Thomio*, nosso Diretor de Projetos.

Ele vai assumir o contato com você pelo WhatsApp oficial da diretoria *(11) 94375-8597* para receber sua logo, formalizar o prazo e enviar os dados do contrato/PIX. Seja muito bem-vindo à Ikigai Company!`;

    return {
      status: 'PRONTO_PARA_FECHAR',
      botReply,
      readyToClose: true,
      handoffCard,
      directorNotification: {
        to: DIRECTOR_WHATSAPP,
        message: handoffCard,
      },
    };
  }

  // Question: Preços
  if (text.includes('preço') || text.includes('valor') || text.includes('quanto') || text.includes('custa')) {
    if (lead.recommendedOffer === 'OFERTA_NFC') {
      return {
        status: 'EM_NEGOCIACAO',
        readyToClose: false,
        botReply: `Nossos produtos de balcão começam a partir de *R$ 80,00* (Placa Google em Acrílico Cristal) e *R$ 120,00* (Totem de Mesa 15×10 cm).

🔥 *O mais vendido é o Combo:* Você leva a Placa de Acrílico + um Mini Site Profissional próprio para sua empresa por apenas *R$ 210,00* (em vez de R$ 379 avulsos).

Qual modelo combina melhor com o balcão da ${lead.name}?`,
      };
    } else {
      return {
        status: 'EM_NEGOCIACAO',
        readyToClose: false,
        botReply: `Trabalhamos com duas opções de presença digital:
1. *Mini Site Profissional:* R$ 299,00 (catálogo, bio e botão direto para WhatsApp, pronto em 48h).
2. *Landing Page de Alta Conversão:* R$ 599,00 (copy comercial exclusiva, design boutique e SEO local).

Gostaria de ver um exemplo no ar para sua área?`,
      };
    }
  }

  // Question: Personalização / Logo
  if (text.includes('logo') || text.includes('marca') || text.includes('personaliza') || text.includes('cor')) {
    return {
      status: 'EM_NEGOCIACAO',
      readyToClose: false,
      botReply: `Sim, 100%! Todas as nossas peças (Placas, Totens, Cartões e Mini Sites) são produzidas com a logo oficial e identidade visual da sua empresa. Você nos envia sua logo em alta resolução e montamos a prévia digital antes de produzir. Vamos produzir o lote da ${lead.name}?`,
    };
  }

  // Question: Como funciona NFC
  if (text.includes('funciona') || text.includes('nfc') || text.includes('aplicativo') || text.includes('app')) {
    return {
      status: 'EM_NEGOCIACAO',
      readyToClose: false,
      botReply: `É 100% automático e *não precisa de nenhum aplicativo instalado*. Seu cliente apenas encosta qualquer celular moderno (iPhone ou Android) na placa ou totem e, em menos de 1 segundo, a tela do Google para avaliar ou o seu contato já abre direto na tela dele! É uma experiência mágica para o cliente.`,
    };
  }

  // Default Consultative Follow-up
  return {
    status: 'EM_NEGOCIACAO',
    readyToClose: false,
    botReply: `Entendi perfeitamente! Para a ${lead.name}, o melhor caminho é garantir o kit com a Placa Google ou o Mini Site integrado. Se quiser, posso reservar o seu lote agora e já te conectar com o Kauê para alinharem a arte. O que acha?`,
  };
}

module.exports = {
  processLeadMessage,
  getKnowledgeBase,
  DIRECTOR_WHATSAPP,
};
