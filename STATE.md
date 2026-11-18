# STATE — IKIGAI COMPANY

- **Fase:** V6.0 concluída — Motor Comercial & Prospecção B2B 100% operacional.
- **Fase 1 (Estúdio Remotion — 2 Vídeos Comerciais 9:16 @ 60fps):**
  - Locução Neural PT-BR (`pt-BR-AntonioNeural` via `edge-tts` / 10 faixas de áudio por ato sincronizadas).
  - `comercial-01-nfc.mp4` (4.2 MB): Linha Física NFC (Placa Google R$ 80, Totem 15x10 R$ 120, Connect Card CR80 R$ 79,90, Etiquetas 7x4 R$ 91,20/R$ 150) e Combos Promocionais a partir de R$ 199,90.
  - `comercial-02-digital.mp4` (2.3 MB): Soluções Digitais (Mini Sites R$ 299, Landing Pages R$ 599, Motion Design e Automações de Processos WhatsApp).
- **Fase 2 (Motor de Prospecção Google Maps + Robô SDR WhatsApp Chip Secundário):**
  - `sales-engine/scraper-gmaps.js`: Extrator Google Maps com classificador automático de dor e oferta (`OFERTA_NFC` vs `OFERTA_DIGITAL`).
  - `sales-engine/whatsapp-sdr-bot.js`: Bot para Chip Secundário com cadência anti-ban (45s–120s), limite diário de 25 disparos e simulação "digitando".
  - `sales-engine/sdr-brain.js`: IA consultiva alimentada pelo `brand.json` com Handoff automático de fechamento para o WhatsApp principal do Diretor (`5511943758597`).
  - `sales-engine/server.js` + `dashboard/`: Painel Web Local 0px Obsidian & Platinum rodando na porta 4000.
- **Auditoria de Qualidade:** Validado no Chrome Headless em 1440px e 375px (`audit-desktop-1440px.png` e `audit-mobile-375px.png`), zero erros de console e 100% alinhado ao `brand.json`.
