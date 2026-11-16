# SPEC DE EXECUÇÃO — IKIGAI COMPANY V5.2 (HERO MOBILE EM DESTAQUE + TABELA DE PREÇOS & COMBOS DE ALTA CONVERSÃO)

**Status:** Aprovado pelo Diretor para execução imediata  
**Pasta do Projeto:** `clients/ikigai-company/`  
**Repositório GitHub:** `https://github.com/KThomio/ikigai-company.git` (branch `main`)  
**Skills Obrigatórias na Execução:** `superpowers`, `design-taste-frontend`, `geo-lgpd-shield`, `agent-browser`

---

## 1. OBJETIVO CIRÚRGICO

1. **Destaque Total do Vídeo no Hero Mobile (Sem Borda Quadrada e com Brilho 95%–100%):**
   - **Problema a corrigir:** Na versão anterior (V5.1), `.ik-hero-bg-motion` no mobile (`< 1024px`) ficou com `opacity: 0.18` e escondido atrás do texto, deixando o emblema apagado.
   - **Como implementar em `index.html`:**
     - **No Desktop (`>= 1024px`):** Manter `.ik-hero-bg-motion` posicionado à direita (`position: absolute; top: 50%; right: -10px; transform: translateY(-50%); width: 580px; height: 580px; opacity: 0.85; pointer-events: none;`) com máscara radial suave (`-webkit-mask-image: radial-gradient(circle at center, rgba(0,0,0,1) 42%, rgba(0,0,0,0) 74%); mask-image: radial-gradient(circle at center, rgba(0,0,0,1) 42%, rgba(0,0,0,0) 74%);`).
     - **No Mobile (`@media (max-width: 1023px)`):** Posicionar `.ik-hero-bg-motion` no **topo do Hero** (logo abaixo do header fixo e imediatamente acima da badge `INTELLIGENCE • PURPOSE • FUTURE`), como bloco em destaque (`position: relative; top: auto; right: auto; transform: none; width: 300px; height: 300px; margin: -8px auto 8px auto; opacity: 0.98;`), mantendo a **mesma máscara radial suave sem nenhuma borda ou caixa quadrada**. Assim o vídeo pulsa no topo com brilho máximo no celular e o título H1 entra logo abaixo com leitura 100% limpa.

2. **Inserir Preços Oficiais Clicáveis nos 4 Cards de Produtos Físicos (`#ikigai-connect`):**
   - **Regra Comercial:** Exibir apenas o **valor final** (sem menção a parcelamento ou "De/Por" exagerado de panfleto). Nos produtos com 2 opções, cada faixa de preço deve ser um link `<a>` clicável (corte reto `0px`, estilo técnico Obsidian & Platinum) que abre direto o WhatsApp `5511943758597` com a mensagem exata daquela opção:
   - **Card 01 — Placa de Avaliação do Google em Acrílico:**
     - Faixa clicável 1: `Placa em Acrílico Avulsa` → **`R$ 80,00`** (`wa.me/5511943758597?text=Olá! Quero pedir a Placa de Avaliação do Google em Acrílico (R$ 80,00).`)
     - Faixa clicável 2 (Destaque Platinum): `Combo Placa Google + Mini Site` → **`R$ 210,00`** (`wa.me/5511943758597?text=Olá! Quero aproveitar o Combo Placa de Avaliação Google + Mini Site Profissional (R$ 210,00).`)
   - **Card 02 — Ikigai Connect — Etiquetas Adesivas NFC (7×4 cm):**
     - Faixa clicável 1: `Pacote 16 un. (7×4 cm)` → **`R$ 91,20`** (`wa.me/5511943758597?text=Olá! Quero pedir o Pacote de 16 un. das Etiquetas NFC Ikigai Connect 7x4cm (R$ 91,20).`)
     - Faixa clicável 2 (Destaque Platinum): `Pacote 50 un. (7×4 cm)` → **`R$ 150,00`** (`wa.me/5511943758597?text=Olá! Quero pedir o Pacote de 50 un. das Etiquetas NFC Ikigai Connect 7x4cm (R$ 150,00).`)
     - Nota obrigatória no card: *"Importante: Os valores das etiquetas referem-se estritamente à medida 7×4 cm. Projetos com outros tamanhos, formatos ou recortes especiais estão sujeitos a ajustes orçamentários sob consulta prévia."*
   - **Card 03 — Totem Personalizado NFC (15 × 10 cm):**
     - Faixa clicável 1: `Totem 15×10 cm Avulso` → **`R$ 120,00`** (`wa.me/5511943758597?text=Olá! Quero pedir o Totem Personalizado NFC 15x10 cm (R$ 120,00).`)
     - Faixa clicável 2 (Destaque Platinum): `Combo Totem 15×10 + Mini Site` → **`R$ 250,00`** (`wa.me/5511943758597?text=Olá! Quero aproveitar o Combo Totem Personalizado NFC 15x10 + Mini Site Profissional (R$ 250,00).`)
   - **Card 04 — Connect Card — Cartão Digital NFC:**
     - Faixa clicável 1: `Connect Card (PVC Adesivado)` → **`R$ 69,90`** (`wa.me/5511943758597?text=Olá! Quero pedir o Connect Card em PVC Adesivado (R$ 69,90).`)
     - Faixa clicável 2 (Destaque Platinum): `Connect Card (PVC Premium)` → **`R$ 150,00`** (`wa.me/5511943758597?text=Olá! Quero pedir o Connect Card em PVC Premium (R$ 150,00).`)

3. **Vitrine Oficial de Combos Promocionais (`#combos` — Produto Físico + Digital):**
   - Substituir o banner simples de upsell logo abaixo dos 4 cards físicos por uma **Vitrine de Combos Promocionais (`id="combos"`)** de altíssima conversão:
   - **Cabeçalho da Vitrine:**
     - Tag: `[ COMBOS PROMOCIONAIS // PRODUTO FÍSICO + DIGITAL ]`
     - Título: `Leve seu Produto NFC + Mini Site Profissional pagando menos que o Mini Site avulso.`
     - Subtítulo explicando a vantagem: *"O Mini Site Profissional avulso custa R$ 299,00. Nos Combos Promocionais, você integra a tecnologia física NFC com seu Mini Site exclusivo a partir de R$ 199,90."*
     - Botão de apoio no cabeçalho: **"Ver Exemplo Real de Mini Site ↗"** (`href="mini-site.html" target="_blank"`).
   - **Grid dos 4 Combos Oficiais (Corte Reto `0px`, cada um com botão direto para WhatsApp):**
     1. **Connect Card (PVC Adesivado) + Mini Site Profissional:** **`R$ 199,90`**
     2. **Placa de Avaliação Google + Mini Site Profissional** *(Selo: `MAIS ESCOLHIDO`)*: **`R$ 210,00`**
     3. **Totem Personalizado NFC (15×10) + Mini Site Profissional:** **`R$ 250,00`**
     4. **Connect Card (PVC Premium) + Mini Site Profissional:** **`R$ 280,00`**

4. **Preços Oficiais nas 3 Faixas de Soluções Digitais (`#solucoes-digitais`):**
   - **01 // Landing Pages (`Landing Page de Alta Conversão`):** Exibir investimento **`R$ 599,00`** e botão para contratar no WhatsApp.
   - **02 // Mini Sites (`Mini Site Profissional`):** Exibir investimento **`R$ 299,00`** *(Contratação Avulsa — ou a partir de R$ 199,90 nos Combos com NFC)*, mantendo os botões **"Ver Exemplo ao Vivo ↗"** (`mini-site.html`) e **"Contratar Mini Site"**.
   - **03 // Automações (`Automações de Processos — WhatsApp/Instagram`):** Exibir investimento **`Sob Consulta`** e botão **"Solicitar Diagnóstico"**.

5. **Atualizar Formulário (`#contato`), Menu, `mini-site.html`, `brand.json`, `llms.txt` e Schema JSON-LD:**
   - Adicionar link **"Combos"** (`#combos`) na navegação principal (Desktop e Mobile).
   - Atualizar os checkboxes do formulário `#ik-quote-form` com os valores oficiais e opção de Combos Promocionais.
   - Em `mini-site.html` (e `lp/mini-site.html`), adicionar um botão em destaque **"Combos Promocionais (NFC + Mini Site) — A partir de R$ 199,90"** apontando para `index.html#combos`.
   - Atualizar o Schema JSON-LD (`OfferCatalog`), `brand.json` e `llms.txt` com os preços exatos da tabela oficial.

---

## 2. TABELA DE VALORES OFICIAIS (PROIBIDO INVENTAR OU ALTERAR VALORES)

| Categoria | Item | Valor Oficial |
| :--- | :--- | :--- |
| **Produtos Físicos NFC** | Ikigai Connect — Etiquetas NFC (7×4) - Pacote 16 un. | `R$ 91,20` |
| **Produtos Físicos NFC** | Ikigai Connect — Etiquetas NFC (7×4) - Pacote 50 un. | `R$ 150,00` |
| **Produtos Físicos NFC** | Placa de Avaliação do Google em Acrílico | `R$ 80,00` |
| **Produtos Físicos NFC** | Totem Personalizado NFC (15 × 10 cm) | `R$ 120,00` |
| **Produtos Físicos NFC** | Connect Card — Cartão Digital NFC (PVC Adesivado) | `R$ 69,90` |
| **Produtos Físicos NFC** | Connect Card — Cartão Digital NFC (PVC Premium) | `R$ 150,00` |
| **Combos Promocionais** | Connect Card (PVC Adesivado) + Mini Site Profissional | `R$ 199,90` |
| **Combos Promocionais** | Placa de Avaliação Google + Mini Site Profissional | `R$ 210,00` |
| **Combos Promocionais** | Totem Personalizado NFC (15×10) + Mini Site Profissional | `R$ 250,00` |
| **Combos Promocionais** | Connect Card (PVC Premium) + Mini Site Profissional | `R$ 280,00` |
| **Soluções Digitais** | Mini Site Profissional (Contratação Avulsa) | `R$ 299,00` |
| **Soluções Digitais** | Landing Page de Alta Conversão | `R$ 599,00` |
| **Soluções Digitais** | Automações de Processos (WhatsApp/Instagram) | `Sob Consulta` |

---

## 3. REGRAS INVIOLÁVEIS

1. **WhatsApp Único:** `5511943758597` (`+55 11 94375-8597`) em 100% dos links. Zero ocorrências de `8957`.
2. **Corte Reto `0px` (`rounded-none`):** Zero bordas arredondadas (`ROUNDED_NON_ZERO_COUNT: 0`).
3. **Sem Menção a Parcelamento:** Exibir apenas os valores finais da tabela acima, sem textos de "12x" ou parcelas.
4. **Proibido Omitir Código:** Escrever os arquivos completos e sincronizar `index.html` → `lp/index.html` e `mini-site.html` → `lp/mini-site.html`.

---

## 4. CHECKLIST DE VERIFICAÇÃO FINAL

1. Rodar checagem automatizada confirmando:
   - `OLD_WA_HITS === 0`
   - `NEW_WA_HITS >= 55`
   - Presença exata dos valores `91,20`, `150,00`, `80,00`, `120,00`, `69,90`, `199,90`, `210,00`, `250,00`, `280,00`, `299,00`, `599,00` em `index.html`.
   - `ROUNDED_NON_ZERO_COUNT === 0`
   - `SYNC_INDEX_OK === true` e `SYNC_MINI_OK === true`
2. Capturar e inspecionar visualmente `index.html` no Mobile (`375x812`) e Desktop (`1440x900`) via Chrome Headless / `agent-browser`, garantindo que o vídeo do Hero no mobile esteja nítido e brilhante no topo com fusão radial.
3. Atualizar `STATE.md`, commitar na branch `main` e executar `git push origin main`.
