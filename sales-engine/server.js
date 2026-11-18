/**
 * IKIGAI COMPANY — Sales Engine Local Control Server (Port 4000)
 * 
 * Estética: 0px Obsidian (#09090B) & Platinum (#E4E4E7)
 */

const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const { sdrBot } = require('./whatsapp-sdr-bot');
const { processLeadMessage } = require('./sdr-brain');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'dashboard')));

// Endpoints
app.get('/api/status', (req, res) => {
  res.json({
    botStatus: sdrBot.status,
    connectedNumber: sdrBot.connectedNumber || null,
    qrCode: sdrBot.qrCode,
    sentTodayCount: sdrBot.sentTodayCount,
    dailyLimit: sdrBot.dailyLimit,
    minDelayMs: sdrBot.minDelayMs,
    maxDelayMs: sdrBot.maxDelayMs,
    directorNumber: '5511943758597',
  });
});

app.post('/api/connect-chip', (req, res) => {
  const { phone } = req.body;
  sdrBot.connectSecondaryChip(phone || '5511999990000');
  res.json({ success: true, status: sdrBot.status, connectedNumber: sdrBot.connectedNumber });
});

app.get('/api/leads', (req, res) => {
  const leads = sdrBot.loadLeads();
  res.json(leads);
});

app.post('/api/prospect', (req, res) => {
  const { niche = 'Clínica de Estética', city = 'Sorocaba, SP', limit = 15 } = req.body;

  // Run scraper script logic in-process
  const { execSync } = require('child_process');
  try {
    const output = execSync(
      `node "${path.join(__dirname, 'scraper-gmaps.js')}" --niche="${niche}" --city="${city}" --limit=${limit}`,
      { encoding: 'utf-8' }
    );
    sdrBot.log(`Prospecção concluída: ${limit} leads em ${city} para "${niche}".`);
    const leads = sdrBot.loadLeads();
    res.json({ success: true, leads, output });
  } catch (err) {
    sdrBot.log(`Erro ao executar prospecção: ${err.message}`, 'ERROR');
    res.status(500).json({ success: false, error: err.message });
  }
});

app.post('/api/approach-next', async (req, res) => {
  try {
    const result = await sdrBot.approachNextLead();
    res.json({ success: true, result });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.post('/api/simulate-chat', async (req, res) => {
  const { leadId, message } = req.body;
  if (!leadId || !message) {
    return res.status(400).json({ error: 'leadId e message são obrigatórios' });
  }

  try {
    const response = await sdrBot.handleIncomingMessage(leadId, message);
    res.json({ success: true, response });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.get('/api/logs', (req, res) => {
  res.json(sdrBot.logs);
});

// Start server
app.listen(PORT, () => {
  console.log(`\n🚀 [IKIGAI SALES ENGINE] Servidor operacional rodando na porta ${PORT}`);
  console.log(`🌐 Painel de Controle: http://localhost:${PORT}`);
  console.log(`📱 Notificações de Fechamento direcionadas para: 5511943758597`);
  sdrBot.initialize();
});
