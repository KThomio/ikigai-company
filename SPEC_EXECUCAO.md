# SPEC DE EXECUÇÃO — IKIGAI COMPANY V6.0 (2 Comerciais 9:16 Remotion + Motor de Prospecção Google Maps & Robô SDR WhatsApp)

> **Gerado por:** Modelo Forte (ARCHITECT)
> **Destinado a:** Modelo Executor Rápido (BUILDER — Gemini Flash)
> **Skills Obrigatórias na Execução:** `superpowers`, `motion-studio`, `design-taste-frontend`, `agent-browser`

---

## 1. Escopo Aprovado pelo Diretor
Construir em 2 Fases integradas o ecossistema completo de vendas da **IKIGAI COMPANY**:
1. **Fase 1 (Estúdio de Comerciais 9:16 no Remotion `ikigai-motion`):**
   - Gerar locução neural em Português (`pt-BR-AntonioNeural` via `edge-tts` / Python) para 2 roteiros comerciais de ~24 segundos (`1440 frames` @ `60fps`, `1080×1920`).
   - Criar e renderizar `comercial-01-nfc.mp4` (**Linha Física Ikigai Connect + Combos**) usando os ativos reais (`nfc-murano-operacao.mp4`, `nfc-placas-google-reais.jpg`, `produto-totem-nfc.png`, `produto-connect-card.png`, `produto-etiquetas-nfc.png`).
   - Criar e renderizar `comercial-02-digital.mp4` (**Landing Pages, Mini Sites, Motion Design & Automações**) usando os ativos reais (`ikigai-hero-showreel.mp4`, `produto-lp-caravella.png`, `produto-mini-site-ikigai.png`, `produto-automacoes.png`).
2. **Fase 2 (Motor de Prospecção Google Maps + Agente SDR Autônomo via Chip Secundário):**
   - Criar `clients/ikigai-company/sales-engine/` contendo:
     - `scraper-gmaps.js`: Extrator de leads B2B do Google Maps por nicho + cidade (com classificador automático de dor: `< 80 reviews` $\rightarrow$ Oferta NFC / `Comercial 01`; `sem site ou linktree` $\rightarrow$ Oferta Digital / `Comercial 02`).
     - `whatsapp-sdr-bot.js`: Bot SDR autônomo para **Chip Secundário** (via `@whiskeysockets/baileys`) com delay humanizado anti-ban (`45s–120s`), limite diário configurável, envio do vídeo comercial MP4 correspondente, qualificação 24/7 via Gemini API alimentada pelo `brand.json`, e **Handoff Automático de Fechamento** que envia o resumo do pedido pronto para o WhatsApp principal do Diretor (`5511943758597`).
     - `server.js` + `dashboard/index.html`: Painel Web Local (`http://localhost:4000`, estética `0px` Obsidian `#09090B` & Platinum `#E4E4E7`) com QR Code do Chip Secundário, disparador do Scraper Google Maps, Kanban de Leads em tempo real, Simulador de Conversa SDR + Handoff e Player dos 2 vídeos comerciais.

---

## 2. Passo a Passo Cirúrgico de Implementação

### PASSO 1 — Geração das Locuções Neurais PT-BR (`edge-tts`) e Cópias de Ativos para o Remotion
1. Garantir que `edge-tts` esteja instalado (`pip install edge-tts`).
2. Copiar os ativos visuais reais de `clients/ikigai-company/assets/` para `clients/ikigai-company/ikigai-motion/public/assets/`:
   - `videos/nfc-murano-operacao.mp4`
   - `videos/ikigai-hero-showreel.mp4`
   - `images/nfc-placas-google-reais.jpg`
   - `images/produto-totem-nfc.png`
   - `images/produto-connect-card.png`
   - `images/produto-etiquetas-nfc.png`
   - `images/produto-lp-caravella.png`
   - `images/produto-mini-site-ikigai.png`
   - `images/produto-automacoes.png`
   - `images/logo-ikigai-oficial.png`
3. Gerar via `edge-tts` (voz `pt-BR-AntonioNeural`, `--rate=+8%`) os 10 clipes de áudio por ato (ou 2 faixas contínuas sincronizadas por timestamp) em `clients/ikigai-company/ikigai-motion/public/audio/`:
   - **Comercial 01 (`comercial-01-voice.mp3`):**
     - Ato 1 (`0s–4s`): *"Seu cliente encosta o celular por um segundo e já avalia sua empresa no Google ou salva seu contato."*
     - Ato 2 (`4s–10s`): *"Com as Placas e Totens em Acrílico NFC da Ikigai Company, você multiplica suas avaliações cinco estrelas no balcão."*
     - Ato 3 (`10s–16s`): *"Use o Connect Card nos atendimentos ou aplique nossas etiquetas inteligentes direto nas mesas e vitrines."*
     - Ato 4 (`16s–20s`): *"Quer tudo pronto? Leve o produto físico mais seu Mini Site Profissional no combo a partir de cento e noventa e nove e noventa."*
     - Ato 5 (`20s–24s`): *"Ikigai Company. Peça o seu personalizado agora aqui no WhatsApp."*
   - **Comercial 02 (`comercial-02-voice.mp3`):**
     - Ato 1 (`0s–4s`): *"Sua empresa ainda perde vendas por ter um site lento, genérico ou um simples link na bio?"*
     - Ato 2 (`4s–10s`): *"A Ikigai Company constrói Mini Sites Profissionais por duzentos e noventa e nove reais e Landing Pages de alta conversão por quinhentos e noventa e nove."*
     - Ato 3 (`10s–16s`): *"Criamos vídeos em Motion Design sob medida para destacar sua marca em anúncios e no Instagram."*
     - Ato 4 (`16s–20s`): *"E automatizamos seu atendimento no WhatsApp para qualificar clientes vinte e quatro horas por dia."*
     - Ato 5 (`20s–24s`): *"Eleve o padrão digital do seu negócio. Fale com a Ikigai Company agora."*

### PASSO 2 — Composições Remotion `9:16` (`1080×1920`, 60fps, 1440 frames)
1. Criar `clients/ikigai-company/ikigai-motion/src/compositions/IkigaiCommercialNFC.tsx` (`id="IkigaiCommercialNFC"`, `1080×1920`, `60fps`, `1440 frames`):
   - Estética estrita `0px` (`borderRadius: 0`), fundo `#09090B`, bordas especulares `1px solid rgba(228,228,231,0.22)`, Film Grain sutil, HUD técnico numerado (`01 // OPERAÇÃO REAL`, `02 // PLACA & TOTEM NFC`, `03 // CONNECT CARD & ETIQUETAS`, `04 // COMBOS FÍSICO + MINI SITE`, `05 // IKIGAI COMPANY`), legendas dinâmicas na parte inferior segura (`bottom: 180px`) e preços 100% fiéis ao `brand.json`.
2. Criar `clients/ikigai-company/ikigai-motion/src/compositions/IkigaiCommercialDigital.tsx` (`id="IkigaiCommercialDigital"`, `1080×1920`, `60fps`, `1440 frames`):
   - Mesma direção de arte `0px` Obsidian & Platinum com os 5 atos de Soluções Digitais (`Landing Pages R$ 599,00`, `Mini Sites R$ 299,00`, `Motion Design Sob Consulta`, `Automações de Processos Sob Consulta`).
3. Registrar ambas as composições em `clients/ikigai-company/ikigai-motion/src/Root.tsx` e adicionar scripts `render:comercial-nfc` e `render:comercial-digital` no `package.json`.
4. Renderizar os 2 arquivos MP4 finais em `clients/ikigai-company/assets/videos/comercial-01-nfc.mp4` e `clients/ikigai-company/assets/videos/comercial-02-digital.mp4` e inspecionar frames-chave (`still`) de cada ato para validar visualmente.

### PASSO 3 — Motor de Prospecção Google Maps + Robô SDR WhatsApp + Painel Local (`sales-engine/`)
1. Criar `clients/ikigai-company/sales-engine/package.json` com scripts `start`, `prospect`, `sdr` e dependências leves.
2. Criar `clients/ikigai-company/sales-engine/scraper-gmaps.js`:
   - Busca empresas no Google Maps por `--niche` e `--city`, extrai Nome, Telefone/WhatsApp, Site, Rating e Número de Avaliações.
   - Classifica cada lead em `OFERTA_NFC` (envia `comercial-01-nfc.mp4` + pitch focado em Placa Google `R$ 80` / Totem `R$ 120` / Combo `R$ 210`) ou `OFERTA_DIGITAL` (envia `comercial-02-digital.mp4` + pitch focado em Mini Site `R$ 299` / Landing Page `R$ 599` / Automações).
   - Gera mensagem inicial personalizada para cada lead e salva em `sales-engine/data/leads.json` e `leads.csv`.
3. Criar `clients/ikigai-company/sales-engine/sdr-brain.js`:
   - Carrega dinamicamente `../brand.json` para garantir **Zero Invenção**.
   - Usa a API do Gemini (`GEMINI_API_KEY` do `.env`) com fallback inteligente baseado em regras comerciais para responder dúvidas de preços, prazos, personalização e detectar o gatilho de **Pronto para Fechar (`READY_TO_CLOSE`)**.
   - Quando `READY_TO_CLOSE === true`, formata o Card de Handoff completo e dispara para o WhatsApp principal do Diretor (`5511943758597`).
4. Criar `clients/ikigai-company/sales-engine/whatsapp-sdr-bot.js`:
   - Conecta ao **Chip Secundário** via QR Code (`@whiskeysockets/baileys`), respeita fila anti-ban (`45s–120s` de intervalo aleatório, limite diário configurável, status `"composing"` antes de enviar texto/vídeo) e integra com `sdr-brain.js`.
5. Criar `clients/ikigai-company/sales-engine/server.js` + `dashboard/index.html`:
   - Servidor local na porta `4000` com interface `0px` Obsidian & Platinum que exibe:
     - Status do Chip Secundário + QR Code + Controles Anti-Ban;
     - Buscador de Leads Google Maps por Nicho + Cidade;
     - Tabela/Kanban de Leads com filtro (`NFC` vs `Digital`), status do funil e botão de Simulação do SDR + Handoff para o Diretor;
     - Preview lado a lado dos 2 vídeos comerciais (`comercial-01-nfc.mp4` e `comercial-02-digital.mp4`).

### PASSO 4 — Auditoria Visual & Funcional (`agent-browser`) + Atualização do `STATE.md`
1. Auditar os frames renderizados dos 2 comerciais e testar o Painel SDR (`http://localhost:4000`) no navegador em `1440px` (Desktop) e `375px` (Mobile) garantindo zero erros de console e estética `0px` impecável.
2. Atualizar `clients/ikigai-company/STATE.md` (< 40 linhas).
