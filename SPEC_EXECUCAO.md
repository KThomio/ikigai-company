# SPEC DE EXECUÇÃO — IKIGAI COMPANY V5.3 (CORREÇÃO DE PREÇOS NO MOBILE 375PX, CONNECT CARD R$ 79,90 SEM PREMIUM, 3 COMBOS E NOVO PRODUTO MOTION DESIGN)

**Status:** Aprovado pelo Diretor para execução imediata  
**Pasta do Projeto:** `clients/ikigai-company/`  
**Repositório GitHub:** `https://github.com/KThomio/ikigai-company.git` (branch `main`)  
**Skills Obrigatórias na Execução:** `superpowers`, `design-taste-frontend`, `geo-lgpd-shield`, `agent-browser`

---

## 1. OBJETIVO CIRÚRGICO

1. **Corrigir 100% da Sobreposição dos Preços e Selos no Mobile (`375px`):**
   - **Causa do bug anterior:** Nos cards de produtos físicos, colocar nome + badge (`Mais Escolhido` / `Mais Econômico`) + preço na mesma linha horizontal sem `whitespace-nowrap` fazia o preço quebrar em duas linhas ou colidir no mobile `375px`. E no Combo 02, o selo `MAIS ESCOLHIDO` com `position: absolute; top: 0; right: 0` ficava por cima do texto `COMBO 02 // ESTRELA DE BALCÃO`.
   - **Solução obrigatória nos 4 Cards de Produtos Físicos (`#ikigai-connect`):**
     - Cada faixa clicável de preço deve usar layout de 2 colunas com `flex items-center justify-between gap-3 p-3.5`:
       - **Coluna esquerda (`min-w-0 flex-1`):** Título principal na linha 1 (`font-semibold text-xs sm:text-sm text-ik-platinum block leading-snug`) e subtítulo/selo técnico na linha 2 (`font-mono text-[10px] uppercase tracking-wider text-ik-silver block mt-0.5`), sem badges laterais espremendo a linha.
       - **Coluna direita (`shrink-0 whitespace-nowrap text-right`):** Valor em linha única (`font-mono font-bold text-sm sm:text-base text-ik-platinum whitespace-nowrap`) que **NUNCA** quebra de linha.
   - **Solução obrigatória nos Cards de Combos (`#combos`):**
     - Proibido usar `position: absolute` para o selo `MAIS ESCOLHIDO`. Colocar a tag do combo e o selo lado a lado dentro de um `<div class="flex items-center justify-between gap-2 flex-wrap">` no fluxo normal do topo do card.

2. **Atualizar Connect Card para `R$ 79,90` (Apenas PVC Adesivado) e Remover PVC Premium:**
   - **No Card 04 (`Connect Card — Cartão Digital NFC`):**
     - Remover totalmente a versão "PVC Premium (`R$ 150,00`)" e remover o valor antigo `R$ 69,90`.
     - Exibir as 2 faixas clicáveis padronizadas (Avulso + Combo com Mini Site):
       - **Faixa 1:** `Connect Card Avulso` (subtítulo: `CARTÃO FÍSICO NFC PERSONALIZADO`) → **`R$ 79,90`** (`https://wa.me/5511943758597?text=Ol%C3%A1!%20Quero%20pedir%20o%20Connect%20Card%20%E2%80%94%20Cart%C3%A3o%20Digital%20NFC%20(R$%2079,90).`)
       - **Faixa 2 (Destaque Platinum):** `Combo Connect Card + Mini Site` (subtítulo: `CARTÃO NFC + PÁGINA EXCLUSIVA`) → **`R$ 199,90`** (`https://wa.me/5511943758597?text=Ol%C3%A1!%20Quero%20aproveitar%20o%20Combo%20Connect%20Card%20+%20Mini%20Site%20Profissional%20(R$%20199,90).`)
   - **Na Vitrine de Combos Promocionais (`#combos`):**
     - Remover o Combo 04 (`Connect Card PVC Premium + Mini Site — R$ 280,00`).
     - Alterar o grid da vitrine de 4 colunas para **3 colunas (`grid grid-cols-1 md:grid-cols-3 gap-px bg-white/15 border border-white/15`)**, apresentando os **3 Combos Oficiais**:
       1. **COMBO 01 // CONEXÃO PESSOAL:** `Connect Card + Mini Site Profissional` → **`R$ 199,90`**
       2. **COMBO 02 // ESTRELA DE BALCÃO (`MAIS ESCOLHIDO`):** `Placa de Avaliação Google + Mini Site Profissional` → **`R$ 210,00`**
       3. **COMBO 03 // TOTEM 15×10 CM:** `Totem Personalizado NFC (15×10) + Mini Site Profissional` → **`R$ 250,00`**

3. **Adicionar o Novo Produto `04 // MOTION DESIGN` em Soluções Digitais (`#solucoes-digitais`):**
   - Inserir o 4º item na lista de Soluções Digitais (logo abaixo de `03 // AUTOMAÇÕES`):
     - **Mídia no Card (`aspect-[16/10]`):** Usar o vídeo motion oficial já produzido para a Ikigai (`assets/videos/ikigai-hero-showreel.mp4`, com `poster="assets/images/ikigai-selo-oficial.png" autoplay loop muted playsinline preload="metadata" class="w-full h-full object-cover object-center block"`) e etiqueta superior `PRODUÇÃO AUTORAL // IKIGAI MOTION`.
     - **Tag:** `04 // MOTION DESIGN`
     - **Título:** `Motion Design & Vídeos Animados`
     - **Descrição:** `Animações de logotipo, vídeos institucionais dinâmicos e apresentações visuais sob medida para destacar sua marca no site, redes sociais e campanhas.`
     - **Investimento:** `Sob Consulta`
     - **Botão CTA:** `Solicitar Orçamento` → `https://wa.me/5511943758597?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20de%20Motion%20Design%20para%20minha%20marca.`

4. **Atualizar Formulário (`#contato`), `mini-site.html`, Schema JSON-LD, `brand.json`, `llms.txt` e `STATE.md`:**
   - No formulário `#ik-quote-form`:
     - Atualizar Connect Card para `Connect Card — Cartão Digital NFC (R$ 79,90)`.
     - Adicionar checkbox `Motion Design (Sob Consulta)`.
   - Em `mini-site.html` (e `lp/mini-site.html`):
     - Adicionar botão para **Motion Design & Vídeos Animados** apontando para o WhatsApp `5511943758597`.
   - Em Schema JSON-LD, `brand.json` e `llms.txt`:
     - Remover `69,90`, `69.90`, `280,00`, `280.00` e `PVC Premium`.
     - Atualizar Connect Card para `R$ 79,90` (`79.90`) e incluir `Motion Design` (`Sob Consulta`).

---

## 2. TABELA DE VALORES OFICIAIS V5.3 (PROIBIDO MANTER 69,90 OU 280,00)

| Categoria | Item | Valor Oficial |
| :--- | :--- | :--- |
| **Produtos Físicos NFC** | Placa de Avaliação do Google em Acrílico | `R$ 80,00` |
| **Produtos Físicos NFC** | Ikigai Connect — Etiquetas NFC (7×4) - Pacote 16 un. | `R$ 91,20` |
| **Produtos Físicos NFC** | Ikigai Connect — Etiquetas NFC (7×4) - Pacote 50 un. | `R$ 150,00` |
| **Produtos Físicos NFC** | Totem Personalizado NFC (15 × 10 cm) | `R$ 120,00` |
| **Produtos Físicos NFC** | Connect Card — Cartão Digital NFC (PVC Adesivado) | `R$ 79,90` |
| **Combos Promocionais** | Connect Card + Mini Site Profissional | `R$ 199,90` |
| **Combos Promocionais** | Placa de Avaliação Google + Mini Site Profissional | `R$ 210,00` |
| **Combos Promocionais** | Totem Personalizado NFC (15×10) + Mini Site Profissional | `R$ 250,00` |
| **Soluções Digitais** | Mini Site Profissional (Contratação Avulsa) | `R$ 299,00` |
| **Soluções Digitais** | Landing Page de Alta Conversão | `R$ 599,00` |
| **Soluções Digitais** | Automações de Processos (WhatsApp/Instagram) | `Sob Consulta` |
| **Soluções Digitais** | Motion Design & Vídeos Animados | `Sob Consulta` |

---

## 3. CHECKLIST DE VERIFICAÇÃO FINAL

1. Rodar checagem estática automatizada confirmando:
   - `OLD_WA_HITS === 0` e `NEW_WA_HITS >= 65`.
   - Zero ocorrências de `69,90`, `69.90`, `280,00`, `280.00` ou `PVC Premium`.
   - Presença confirmada de `79,90`, `80,00`, `91,20`, `150,00`, `120,00`, `199,90`, `210,00`, `250,00`, `299,00`, `599,00` e `Motion Design`.
   - `ROUNDED_NON_ZERO_COUNT === 0`.
   - `SYNC_INDEX_OK === true` e `SYNC_MINI_OK === true`.
2. **Inspeção Visual Obrigatória no Mobile (`375px`):**
   - Renderizar screenshot em `375px` da seção de Cards Físicos (`#ikigai-connect`) e Combos (`#combos`) desativando temporariamente a opacidade inicial do `.gsap-reveal` ou rolando a página para **ver com os próprios olhos (`read_file`)** que os preços e selos nos cards e combos estão 100% alinhados e sem nenhuma sobreposição.
3. Atualizar `STATE.md`, commitar na branch `main` e executar `git push origin main`.
