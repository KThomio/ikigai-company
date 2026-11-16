# SPEC DE EXECUÇÃO — IKIGAI COMPANY V5 (REESTRUTURAÇÃO ENXUTA & IKIGAI CONNECT)

**Status:** Aprovado pelo Diretor para execução imediata  
**Pasta do Projeto:** `clients/ikigai-company/`  
**Repositório GitHub:** `https://github.com/KThomio/ikigai-company.git` (branch `main`)  
**Skills Obrigatórias na Execução:** `superpowers`, `design-taste-frontend`, `geo-lgpd-shield`, `agent-browser`

---

## 1. REGRAS INVIOLÁVEIS (ANTI-ALUCINAÇÃO & PADRÃO AGÊNCIA)

1. **Contato Único Oficial (ATUALIZAR EM 100% DO PROJETO):**
   - Número oficial: **11943758597**
   - Formato internacional (`wa.me`): `https://wa.me/5511943758597`
   - Exibição visual: `+55 11 94375-8597`
   - **PROIBIDO** restar qualquer ocorrência do número antigo (`5511943758957` ou `94375-8957`).
2. **Zero Preços Fixos:**
   - **REMOVER 100%** das tabelas de preços e valores fixos (`R$ 3,00`, `R$ 5,70`, `R$ 80,00`, `R$ 120,00`, `R$ 150,00`, `R$ 91,20`) em `index.html`, `lp/index.html`, `Schema.org JSON-LD`, `brand.json`, `llms.txt` e scripts JS.
   - Substituir por apresentação comercial orientada a orçamento personalizado no WhatsApp.
3. **Zero Dados Inventados:** Não adicionar CNPJ, e-mail ou Instagram (a empresa não possui no momento).
4. **Identidade `0px` Anti-IA-Slop:** Manter bordas retas (`0px` / `rounded-none`) em 100% dos elementos, inclusive em `404.html`. Proibido omitir código (`// resto do código`).

---

## 2. ARQUITETURA OFICIAL EM 5 SEÇÕES DIRETAS (`index.html`)

Reduzir de 9 para **5 seções enxutas**, com comunicação humana, direta e sem excesso de cards ou termos técnicos:

### Seção 01 — Hero Minimalista (`#hero`)
- **Coluna de Texto:**
  - Título curto (2–3 linhas): *"Conexão física e soluções digitais para empresas que querem vender melhor."*
  - Subtítulo objetivo explicando que a **Ikigai Company** une produtos inteligentes por aproximação (**Ikigai Connect NFC**), páginas profissionais de alta conversão e automações práticas.
  - 2 CTAs: **Solicitar um orçamento** (`#contato`) e **Conhecer as soluções** (`#ikigai-connect`).
  - **Remover** os 4 mini-blocos (`01 // AI .. 04 // NFC`) abaixo dos botões.
- **Coluna Visual (`#ik-motion-stage`):**
  - Manter apenas o vídeo `<video id="ik-hero-reel" src="assets/videos/ikigai-hero-showreel.mp4" poster="assets/images/ikigai-selo-oficial.png" autoplay loop muted playsinline preload="auto">` dentro do viewport `1:1` com as 4 cantoneiras `0px`.
  - **Remover** a barra superior `60 FPS · LIVE REEL`, as 4 abas (`01 // IA .. 04 // NFC`) e a caixa de texto técnico (`#ik-hub-readout`) abaixo do vídeo.

### Seção 02 — Produtos Físicos & Conexão Digital: Linha IKIGAI CONNECT (`#ikigai-connect`)
- **Abertura + Demonstração Real (2 colunas):**
  - Explicação direta e sem tecnicismo: o cliente aproxima o celular e acessa o canal digital em 1 segundo, sem aplicativo.
  - Vídeo real (`assets/videos/nfc-murano-operacao.mp4`) com **`preload="none"`** (para performance inicial) + Foto real das placas (`assets/images/nfc-placas-google-reais.jpg`).
  - **Remover** totalmente o antigo bloco `#nfc-studio` (Simulador `13.56 MHz`) e a tabela `#nfc-catalogo`.
- **Grid dos 4 Produtos Físicos (cards limpos `0px` com botão de orçamento direto):**
  1. **Placa de Avaliação do Google em Acrílico** — Facilita o cliente a avaliar sua empresa no Google em segundos no balcão ou recepção. CTA: `Solicitar um orçamento`.
  2. **Ikigai Connect — Etiquetas Adesivas NFC** — Etiquetas personalizadas para embalagens, mesas ou vitrines que direcionam o cliente por aproximação para o WhatsApp ou link desejado. CTA: `Conhecer a solução`.
  3. **Totem Personalizado NFC (Acrílico 15 × 10 cm)** — Totem em acrílico `15 × 10 cm` personalizado com a marca da empresa para atendimento em balcões e recepções. CTA: `Solicitar um orçamento`.
  4. **Connect Card — Cartão Digital NFC** — Cartão físico personalizado para compartilhar contatos, redes sociais e serviços ao aproximar do celular do cliente. CTA: `Solicitar um orçamento`.
- **Faixa de Upsell Integrado (logo abaixo dos 4 produtos):**
  - Destaque claro: **Potencialize seus produtos NFC com um Mini Site Profissional** — página exclusiva que reúne WhatsApp, Instagram, avaliação no Google e serviços quando o cliente aproxima o celular. Botão: `Quero combinar NFC + Mini Site` (abre WhatsApp `5511943758597` com mensagem pronta).

### Seção 03 — Soluções Digitais (`#solucoes-digitais`)
- **Layout Editorial em 3 Faixas Horizontais Numeradas** (visualmente distinto dos cards dos produtos físicos):
  1. `01 // LANDING PAGES` — **Landing Pages:** Páginas rápidas e objetivas pensadas para apresentar sua oferta e gerar contatos reais no WhatsApp. CTA: `Falar com um especialista`.
  2. `02 // MINI SITES PROFISSIONAIS` — **Mini Sites Profissionais:** Página digital completa com contatos, redes sociais, serviços e botões de ação — contratada de forma independente ou como adicional aos produtos NFC. CTA: `Conhecer a solução`.
  3. `03 // AUTOMAÇÕES DE PROCESSOS` — **Automações de Processos:** Fluxos práticos para organizar solicitações no WhatsApp, agilizar o atendimento e eliminar tarefas manuais repetitivas. CTA: `Falar com um especialista`.

### Seção 04 — Projetos Entregues & Como Funciona (`#portfolio` / `#como-funciona`, fundo Off-White `#F5F6F8`)
- **Cases Reais (`Studio Caravella` e `Murano Vidraçaria`):**
  - Linguagem 100% comercial (remover tags técnicas `WebGL`, `GSAP`, `GEO + Headers A+` e remover o selo *"Projeto Registrado · Redirecionamento em Breve"*).
  - Manter o botão **Ver detalhes e imagens** abrindo o modal `#case-modal` (também sem termos técnicos e sem "Redirecionamento em Breve", apontando para `5511943758597`).
- **Como Funciona (3 Passos Simples):**
  - Substitui os antigos `3 Pilares + 5 Diferenciais + 5 Etapas` por **3 passos diretos**:
    - `01` **Conversa rápida no WhatsApp** (entendemos sua necessidade sem burocracia)
    - `02` **Personalização da solução** (arte, página ou fluxo sob medida para seu negócio)
    - `03` **Entrega pronta para usar** (publicado no ar ou com produtos NFC configurados)

### Seção 05 — Contato Comercial (`#contato`)
- **Esquerda:** Chamada comercial direta + botão de 1 clique para `https://wa.me/5511943758597` (`+55 11 94375-8597`).
- **Direita (`#ik-quote-form`):** Nome + Empresa/Segmento + Checkboxes atualizados (*Placa Google / Totem NFC*, *Ikigai Connect (Etiquetas)*, *Connect Card*, *Mini Site Profissional*, *Landing Page*, *Automação de Processos*) + Detalhes opcionais, enviando direto para `5511943758597`.

---

## 3. OTIMIZAÇÃO DE PERFORMANCE & LIMPEZA DE ARQUIVOS

1. **Remover** `<canvas id="ik-particles">` e toda a função JS `loopParticles()` em `index.html`.
2. **Remover** do JS os blocos obsoletos da antiga tabela de preços (`selectedNfc`, `updateNfcSelection`), do simulador (`nfcScenarios`) e das abas do Hero (`hubModules`).
3. **Configurar `preload="none"`** no `<video>` de `assets/videos/nfc-murano-operacao.mp4`.
4. **Atualizar `404.html`:** Trocar `5511943758957` por `5511943758597` e alterar `border-radius` de `6px`/`8px` para `0px`.
5. **Atualizar `brand.json` e `llms.txt`:** Remover preços fixos, atualizar WhatsApp para `5511943758597` e estruturar as 7 soluções nas 2 frentes oficiais.
6. **Sincronizar `index.html` → `lp/index.html`** (SHA-256 idêntico) e atualizar `STATE.md` (< 40 linhas).

---

## 4. CHECKLIST OBRIGATÓRIO DE VALIDAÇÃO (SUPERPOWERS + AGENT-BROWSER)

Após editar todos os arquivos:
1. Rodar no PowerShell dentro de `clients/ikigai-company`:
   - `Select-String -Path index.html,lp\index.html,404.html,brand.json,llms.txt -Pattern "943758957|94375-8957"` → deve retornar **0 ocorrências**.
   - `Select-String -Path index.html,lp\index.html,brand.json,llms.txt -Pattern "R\$"` → deve retornar **0 ocorrências**.
   - Verificar `SYNC_OK: True` entre `index.html` e `lp/index.html` e `ROUNDED_CLASS_COUNT: 0`.
2. Subir servidor HTTP local (`python -m http.server`) e auditar via `agent-browser` em **Desktop (`1440×900`)** e **Mobile (`375×812`)**:
   - Confirmar `0` erros no console e `0` overflow horizontal.
   - Testar abertura do modal de cases, modal LGPD e geração de link WhatsApp `5511943758597`.
3. Realizar `git add .` e `git commit` na branch `main` de `clients/ikigai-company` (e `git push origin main` se autenticado).
