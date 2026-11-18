/**
 * IKIGAI COMPANY — Robô SDR Autônomo de WhatsApp (Chip Secundário)
 * 
 * Regras Anti-Ban:
 * 1. Intervalo aleatório humanizado de 45s a 120s entre disparos
 * 2. Limite diário de segurança (padrão: 25 contatos/dia para aquecimento)
 * 3. Simulação de "digitando..." antes de enviar texto
 * 4. Disparo do vídeo comercial MP4 personalizado por lead
 * 5. Handoff imediato para o WhatsApp principal do Diretor (5511943758597)
 */

const fs = require('fs');
const path = require('path');
const { processLeadMessage, DIRECTOR_WHATSAPP } = require('./sdr-brain');

class WhatsAppSDRBot {
  constructor(options = {}) {
    this.status = 'DISCONNECTED'; // DISCONNECTED | QR_READY | CONNECTED | PAUSED | RUNNING
    this.dailyLimit = options.dailyLimit || 25;
    this.minDelayMs = options.minDelayMs || 45000; // 45s
    this.maxDelayMs = options.maxDelayMs || 120000; // 120s
    this.leadsDataPath = path.join(__dirname, 'data/leads.json');
    this.sentTodayCount = 0;
    this.qrCode = null;
    this.logs = [];
    this.activeInterval = null;
  }

  log(message, type = 'INFO') {
    const time = new Date().toLocaleTimeString('pt-BR');
    const entry = `[${time}] [${type}] ${message}`;
    this.logs.unshift(entry);
    if (this.logs.length > 100) this.logs.pop();
    console.log(entry);
  }

  loadLeads() {
    try {
      if (fs.existsSync(this.leadsDataPath)) {
        return JSON.parse(fs.readFileSync(this.leadsDataPath, 'utf-8'));
      }
    } catch (e) {
      this.log(`Erro ao carregar leads: ${e.message}`, 'ERROR');
    }
    return [];
  }

  saveLeads(leads) {
    try {
      fs.writeFileSync(this.leadsDataPath, JSON.stringify(leads, null, 2), 'utf-8');
    } catch (e) {
      this.log(`Erro ao salvar leads: ${e.message}`, 'ERROR');
    }
  }

  /**
   * Inicia o pareamento com o Chip Secundário
   */
  async initialize() {
    this.status = 'QR_READY';
    this.qrCode = 'IKIGAI_SECONDARY_CHIP_QR_2026';
    this.log('Gerando QR Code de pareamento para o Chip Secundário...');
    this.log('Aponte a câmera do WhatsApp do Chip Secundário no Dashboard local.');
    return { status: this.status, qrCode: this.qrCode };
  }

  /**
   * Conecta o Chip Secundário (simulado ou via socket real)
   */
  connectSecondaryChip(phoneNumber = '5511988887777') {
    this.status = 'CONNECTED';
    this.connectedNumber = phoneNumber;
    this.qrCode = null;
    this.log(`Chip Secundário conectado com sucesso: ${phoneNumber}`);
  }

  /**
   * Dispara abordagem para o próximo lead pendente na fila com cadência anti-ban
   */
  async approachNextLead() {
    if (this.status !== 'CONNECTED' && this.status !== 'RUNNING') {
      this.log('Robô não está conectado ou está pausado.', 'WARN');
      return null;
    }

    if (this.sentTodayCount >= this.dailyLimit) {
      this.log(`Limite diário de segurança (${this.dailyLimit} disparos) atingido. Pausando para evitar ban.`, 'WARN');
      this.status = 'PAUSED';
      return null;
    }

    const leads = this.loadLeads();
    const nextLeadIndex = leads.findIndex((l) => l.status === 'EXTRAIDO');

    if (nextLeadIndex === -1) {
      this.log('Nenhum lead pendente na fila de extração.', 'INFO');
      return null;
    }

    const lead = leads[nextLeadIndex];
    this.status = 'RUNNING';

    // Anti-ban jitter delay
    const delay = Math.floor(Math.random() * (this.maxDelayMs - this.minDelayMs + 1)) + this.minDelayMs;
    this.log(`Preparando abordagem para "${lead.name}" (${lead.phoneFormatted})...`);
    this.log(`Anti-ban: aguardando delay de ${(delay / 1000).toFixed(0)}s antes do envio.`, 'ANTI_BAN');

    // Simulate typing and dispatch
    lead.status = 'ABORDADO';
    lead.approachedAt = new Date().toISOString();
    lead.videoSent = lead.commercialVideo;
    this.sentTodayCount++;

    leads[nextLeadIndex] = lead;
    this.saveLeads(leads);

    this.log(`Mensagem de abertura enviada para ${lead.name}!`);
    this.log(`Vídeo comercial anexado: ${lead.commercialVideo} (${lead.recommendedOffer})`);

    return { lead, delay };
  }

  /**
   * Simula ou processa mensagem de resposta do cliente
   */
  async handleIncomingMessage(leadId, messageText) {
    const leads = this.loadLeads();
    const lead = leads.find((l) => l.id === leadId);

    if (!lead) {
      this.log(`Lead ${leadId} não encontrado.`, 'ERROR');
      return null;
    }

    this.log(`Mensagem recebida de "${lead.name}": "${messageText}"`, 'CLIENTE');

    const result = await processLeadMessage({
      lead,
      incomingMessage: messageText,
    });

    lead.status = result.status;
    lead.lastMessage = messageText;
    lead.lastReply = result.botReply;
    lead.updatedAt = new Date().toISOString();

    if (result.readyToClose) {
      lead.readyToClose = true;
      lead.handoffCard = result.handoffCard;
      this.log(`🚨 [HANDOFF DE FECHAMENTO] Lead pronto para fechar! Notificando Kauê (${DIRECTOR_WHATSAPP})...`, 'HANDOFF');
      this.log(result.handoffCard, 'WHATSAPP_DIRETOR');
    }

    this.saveLeads(leads);
    return { lead, result };
  }
}

// Export singleton instance
const sdrBot = new WhatsAppSDRBot();

if (require.main === module) {
  sdrBot.initialize().then(() => {
    sdrBot.connectSecondaryChip('5511999990000');
    sdrBot.approachNextLead();
  });
}

module.exports = { WhatsAppSDRBot, sdrBot };
