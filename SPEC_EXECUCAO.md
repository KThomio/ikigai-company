# SPEC DE EXECUÇÃO — IKIGAI COMPANY V5.1 (IMAGENS NOS PRODUTOS, MINI SITE OFICIAL & HERO MOTION BACKGROUND)

**Status:** Aprovado pelo Diretor para execução imediata  
**Pasta do Projeto:** `clients/ikigai-company/`  
**Repositório GitHub:** `https://github.com/KThomio/ikigai-company.git` (branch `main`)  
**Skills Obrigatórias na Execução:** `superpowers`, `design-taste-frontend`, `geo-lgpd-shield`, `agent-browser`

---

## 1. OBJETIVO CIRÚRGICO

1. **Motion do Hero Integrado ao Background (`#hero`):**
   - Remover a moldura quadrada (`.ik-motion-stage` com borda e cantoneiras) e transformar o vídeo `assets/videos/ikigai-hero-showreel.mp4` em um **background integrado ao ambiente escuro do Hero** (posicionado à direita no desktop e integrado ao topo no mobile) usando máscara radial CSS (`-webkit-mask-image` e `mask-image: radial-gradient(circle at center, rgba(0,0,0,1) 38%, rgba(0,0,0,0) 74%)`) + gradiente de proteção sobre o texto para manter leitura 100% limpa.
2. **Criar o Modelo Oficial de Mini Site da Ikigai (`clients/ikigai-company/mini-site.html`):**
   - Desenvolver `clients/ikigai-company/mini-site.html` (e copiar para `clients/ikigai-company/lp/mini-site.html`) com a identidade Obsidian & Platinum `0px` (`rounded-none`), logo oficial da Ikigai, apresentação curta e botões funcionais para:
     - **Falar no WhatsApp Agora** (`https://wa.me/5511943758597?text=...`)
     - **Linha Ikigai Connect — Etiquetas & Produtos NFC** (`index.html#ikigai-connect`)
     - **Placa de Avaliação Google & Totem Acrílico 15×10** (`https://wa.me/5511943758597?text=...`)
     - **Landing Pages & Mini Sites Profissionais** (`index.html#solucoes-digitais`)
     - **Automações de Atendimento** (`https://wa.me/5511943758597?text=...`)
     - **Acessar Site Institucional Completo** (`index.html`)
3. **Gerar os 2 Prints Oficiais via Navegador (`assets/images/`):**
   - `assets/images/produto-lp-caravella.png`: Print real renderizado da Landing Page do projeto `clients/studio-caravella/index.html`.
   - `assets/images/produto-mini-site-ikigai.png`: Print real renderizado de `clients/ikigai-company/mini-site.html`.
4. **Incluir Área de Imagem (`aspect-[16/10]`) nos 7 Produtos em `index.html`:**
   - **Frente 01 (`#ikigai-connect` — 4 Produtos Físicos):**
     - Manter o vídeo real de operação (`assets/videos/nfc-murano-operacao.mp4`, `preload="none"`) em uma faixa de demonstração no topo da seção (sem duplicar a foto da Placa do Google ao lado, pois a foto da Placa agora vai direto no card do Produto 01).
     - **Produto 01 (Placa de Avaliação do Google em Acrílico):** Foto real `assets/images/nfc-placas-google-reais.jpg`.
     - **Produto 02 (Ikigai Connect — Etiquetas Adesivas NFC):** Quadro visual arquitetônico `0px` elegante com selo `[ IMAGEM EM DEFINIÇÃO ]`.
     - **Produto 03 (Totem Personalizado NFC 15 × 10 cm):** Quadro visual arquitetônico `0px` elegante com selo `[ IMAGEM EM DEFINIÇÃO ]`.
     - **Produto 04 (Connect Card — Cartão Digital NFC):** Quadro visual arquitetônico `0px` elegante com selo `[ IMAGEM EM DEFINIÇÃO ]`.
     - **Faixa de Upsell (Mini Site + NFC):** Adicionar botão secundário **"Ver Exemplo de Mini Site"** apontando para `mini-site.html`.
   - **Frente 02 (`#solucoes-digitais` — 3 Soluções Digitais):**
     - Transformar cada uma das 3 faixas horizontais em um layout com **imagem de referência (`aspect-[16/10]`) + texto + CTA**:
     - **01 // Landing Pages:** Exibir `assets/images/produto-lp-caravella.png` (print real do Studio Caravella).
     - **02 // Mini Sites Profissionais:** Exibir `assets/images/produto-mini-site-ikigai.png` (print real do Mini Site da Ikigai) + botão **"Ver Exemplo ao Vivo"** (`mini-site.html`) + botão **"Conhecer a Solução"** (WhatsApp `5511943758597`).
     - **03 // Automações de Processos:** Exibir quadro visual arquitetônico `0px` elegante com selo `[ IMAGEM EM DEFINIÇÃO ]`.

---

## 2. REGRAS INVIOLÁVEIS

1. **WhatsApp Único:** `5511943758597` (`+55 11 94375-8597`) em 100% dos links, inclusive dentro de `mini-site.html`. Zero ocorrências de `8957`.
2. **Zero Preços Fixos:** Nenhuma menção a `R$` em nenhum arquivo.
3. **Corte Reto `0px` (`rounded-none`):** Zero bordas arredondadas em `index.html`, `lp/index.html`, `mini-site.html` e `404.html`.
4. **Proibido Omitir Código:** Escrever os arquivos completos e sincronizar `index.html` → `lp/index.html` e `mini-site.html` → `lp/mini-site.html`.

---

## 3. CHECKLIST DE VERIFICAÇÃO FINAL

1. Verificar existência e tamanho (`> 0 bytes`) de `assets/images/produto-lp-caravella.png`, `assets/images/produto-mini-site-ikigai.png` e `mini-site.html`.
2. Rodar checagem estática: `OLD_WA_HITS: 0`, `PRICE_R_HITS: 0`, `ROUNDED_CLASS_COUNT: 0`, `SYNC_OK: True`.
3. Capturar e inspecionar visualmente `index.html` e `mini-site.html` via navegador (`agent-browser` / Chrome Headless).
4. Atualizar `STATE.md`, commitar na branch `main` e executar `git push origin main`.
