# SPEC DE EXECUÇÃO — IKIGAI COMPANY (FASE 4: ANIMAÇÃO REMOTION 120 BPM "PROMPT-MOTION ARCHITECTURE" + EMBED NO HERO 1:1)

## 1. Conceito Visual em 1 Linha (Prompt Motion Standard)
> **"THE ORTHOGONAL KNOT: As 4 cantoneiras técnicas do símbolo IKIGAI se expandem a 120 BPM transformando-se em tipografia cinética suíça, telemetria de IA/NFC, extrusão isométrica 2D-para-3D e entrelaçamento geométrico final em loop contínuo."**

---

## 2. Diretrizes de Engenharia de Motion (Baseadas em `prompt-motion.com/jacksonfall-54b2ac`)
1. **Ritmo Matemático (`120 BPM` @ `60 FPS`):**
   - `1 Beat` = `0.5s` = **`30 frames`**.
   - `1 Bar (Compasso 4/4)` = `2.0s` = **`120 frames`**.
   - `Duração Total` = `8.0s` = **`480 frames`** (`4 Compassos` / `16 Beats`).
2. **Continuidade Geométrica (Match-Cut / Morphing Sem Crossfade):**
   - **PROIBIDO:** Crossfades de opacidade suaves entre cenas, partículas soltas aleatórias, glows borrados exagerados, lens flares, camera shake caótico ou easing elástico infantil (*bouncy*).
   - **OBRIGATÓRIO:** Toda cena nasce da geometria da cena anterior (as barras e cantoneiras esticam, cortam a tela em *hard-wipe* invertendo o fundo entre `#0D0E11` Obsidian e `#F5F6F8` Off-White Cirúrgico, ou rotacionam em múltiplos de `45°`/`90°` com curva exponencial / spring crítico `damping: 22, stiffness: 220`).
3. **Paleta Estrita (Máximo 3 Cores + Preto/Branco da Prancha Oficial):**
   - `#0D0E11` (Obsidian Black)
   - `#F5F6F8` (Surgical Off-White)
   - `#EAECEF` / `#C4C8D0` (Platinum / Anodized Silver)
   - `#1C1F26` (Graphite Structural Grid)
4. **Tipografia Oficial Determinística (`@remotion/google-fonts`):**
   - `Montserrat` (`800 ExtraBold` / `700 Bold`) para impacto cinético brutalista.
   - `JetBrains Mono` (`500 Medium`) para índices, coordenadas e UI técnica.

---

## 3. Storyboard Beat-a-Beat (16 Beats = 480 Frames @ 60 FPS)

### COMPASSO 1 — HOOK & KINETIC TYPOGRAPHY (`Frames 000 – 119` | `Beats 1 – 4`)
- **Beat 1 (`Frames 000 – 029` | Hook & Loop Anchor):**
  - Fundo `#0D0E11`. O símbolo oficial `IkigaiRawSvg` parte da posição exata do `Frame 479` (garantindo loop infinito perfeito no frame 0) e, nos primeiros 15 frames, o nó central se recolhe (`evolvePath` reverso) enquanto as **4 cantoneiras ortogonais `[ ]`** disparam para os 4 cantos do canvas (`inset: 72px`) com cursor técnico piscando `IKIGAI_`.
- **Beat 2 (`Frames 030 – 059` | Hard Inversion Wipe — Kinetic Stencil 1):**
  - Uma barra horizontal prateada corta o centro de ponta a ponta expandindo uma máscara retangular `#F5F6F8` (Off-White) que toma 100% da tela.
  - Tipografia gigante `Montserrat 800` (`148px`, tracking `-0.04em`, cor `#0D0E11`) entra em *split-slice* seco (metade superior desliza da esquerda, metade inferior da direita): **`INTELLIGENCE`** acompanhada do índice `[ 01 // AI SYSTEMS ]`.
- **Beat 3 (`Frames 060 – 089` | Split-Screen Brutalist Grid — Kinetic Stencil 2):**
  - A tela divide-se geometricamente em 2 colunas verticais (`50%` `#0D0E11` à esquerda / `50%` `#F5F6F8` à direita).
  - As palavras **`PURPOSE`** (em `#F5F6F8` sobre preto) e **`FUTURE`** (em `#0D0E11` sobre off-white) travam em contraponto vertical com rotação mecânica de `90°` de uma cruz suíça central (`+`).
- **Beat 4 (`Frames 090 – 119` | Collapse to Vector Core):**
  - As duas metades fecham como portas de precisão para o centro, comprimindo a tipografia em uma linha vetorial prateada de `6px` no centro de um palco `#0D0E11`.

---

### COMPASSO 2 — SHAPE MORPHING & DATA / UI MOMENT (`Frames 120 – 239` | `Beats 5 – 8`)
- **Beat 5 (`Frames 120 – 149` | UI Blueprint — AI & Automation Matrix):**
  - A linha central se abre em um **HUD Arquitetônico de Corte Reto `0px`** (`760×480px`) dividido por linhas de `1px` (`#C4C8D0`).
  - Barras de dados e contadores monoespaçados (`JetBrains Mono`) preenchem em velocidade extrema:
    - `SYS.01 // AI AGENTS & GEO` → `[ ACTIVE 100% ]`
    - `SYS.02 // WORKFLOW AUTOMATION` → `[ ZERO FRICTION ]`
    - `SYS.03 // HIGH-END WEB` → `[ SECURITY A+ ]`
- **Beat 6 (`Frames 150 – 179` | Shape Morph — UI to Physical NFC Hardware):**
  - O quadro de UI (`760×480px`) sofre *shape morph* geométrico para a proporção exata de uma **Placa/Cartão Executivo NFC (`520×340px`)** em `#13151A` com borda especular `#EAECEF` e ícone de ondas de radiofrequência `13.56 MHz`.
- **Beat 7 (`Frames 180 – 209` | NFC Contactless Pulse & Action Split):**
  - Ao bater o `Frame 180`, 3 ondas quadradas concêntricas de corte reto (`0px`) expandem do cartão NFC e disparam 3 módulos de saída ao redor:
    - `[ GOOGLE REVIEWS 5★ ]`
    - `[ WHATSAPP DIRECT ]`
    - `[ MINI-SITE HUB ]`
- **Beat 8 (`Frames 210 – 239` | Orthographic Fold Prep):**
  - Os 3 módulos convergem para dentro do cartão NFC, que gira em um quadrado perfeito (`440×440px`) delimitado pelas 4 cantoneiras técnicas.

---

### COMPASSO 3 — 2D-TO-3D ISOMETRIC MOMENT (`Frames 240 – 359` | `Beats 9 – 12`)
- **Beat 9 (`Frames 240 – 269` | 2D-to-3D Isometric Tilt):**
  - O quadrado `440×440px` inclina no espaço 3D (`perspective(1200px) rotateX(54deg) rotateZ(-45deg)`) e se desdobra verticalmente no eixo Z em **3 lâminas paralelas flutuantes** (Camada Base: Circuito Ortogonal; Camada Média: Lobos Secundários do Símbolo; Camada Topo: Lobos Principais e Cantoneiras).
- **Beat 10 (`Frames 270 – 299` | Stroke Reveal in 3D Space):**
  - Enquanto a câmera 3D orbita suavemente (`rotateZ` de `-45°` para `-15°`), cada caminho vetorial (`IKIGAI_SVG_PATHS`) é desenhado via `getStrokeRevealProps` (`@remotion/paths` `evolvePath` de `0` a `1`) com feixe especular metálico percorrendo as curvas.
- **Beat 11 (`Frames 300 – 329` | Z-Axis Compression & Interlacing Lock):**
  - As 3 lâminas 3D colapsam de volta ao plano frontal `2D` (`translateZ -> 0`, `rotateX -> 0deg`, `rotateZ -> 0deg`) em uma batida seca no `Frame 315`, cravando o **entrelaçamento oficial** (passagem superior da diagonal `M 150 94 L 90 146` com recorte `#0D0E11`).
- **Beat 12 (`Frames 330 – 359` | Specular Anodized Sweep):**
  - Um feixe diagonal de luz platina atravessa a geometria do símbolo já montado (`MetallicDefs` + gradiente dinâmico), revelando a precisão dos chanfros e curvas.

---

### COMPASSO 4 — CLIMAX LOCKUP & SEAMLESS LOOP (`Frames 360 – 479` | `Beats 13 – 16`)
- **Beat 13 (`Frames 360 – 389` | Monolithic Brand Lockup Reveal):**
  - O símbolo `IkigaiRawSvg` (`size={440}`) estabiliza no centro superior e o wordmark oficial **`IKIGAI`** (`Montserrat 700`, `44px`, tracking `0.28em`) + **`COMPANY`** (`JetBrains Mono 500`, `16px`, tracking `0.46em`) emerge por máscara de recorte reto (`overflow: hidden`, `translateY(100% -> 0%)`).
- **Beat 14 (`Frames 390 – 419` | Architectural Telemetry Frame):**
  - A moldura perimetral técnica (`inset: 64px`) e a assinatura inferior `INTELLIGENCE • PURPOSE • FUTURE` travam com precisão milimétrica.
- **Beats 15 & 16 (`Frames 420 – 479` | Final Hold & Frame-0 Loop Match):**
  - Sustentação nobre da assinatura completa da marca até o `Frame 479`, cuja posição, escala (`440px`), cores (`#0D0E11`) e coordenadas do símbolo coincidem **100% pixel a pixel** com o estado inicial do `Frame 000`.

---

## 4. Implementação Técnica em `clients/ikigai-company/ikigai-motion/`

### 4.1. Arquivos a Criar / Atualizar (Sem Omitir Código)
1. `src/animations/beatEngine.ts`:
   - Constantes `BPM = 120`, `FPS = 60`, `FRAMES_PER_BEAT = 30`, `FRAMES_PER_BAR = 120`.
   - Funções puras determinísticas do frame (`getBeatIndex(frame)`, `getBeatProgress(frame, beatNumber)`, `expoOut(t)`, `expoInOut(t)`, `snapSpring(frame, fps, triggerFrame)`).
2. `src/components/Act1KineticHook.tsx`:
   - Renderiza o Compasso 1 (`Frames 0–119`): desconstrução inicial das cantoneiras a partir do estado de loop, *hard-wipe* Off-White `#F5F6F8`, tipografia cinética cortada `INTELLIGENCE` / `PURPOSE` / `FUTURE` e colapso na linha central.
3. `src/components/Act2UiToNfcMorph.tsx`:
   - Renderiza o Compasso 2 (`Frames 120–239`): matriz de telemetria `0px` (`AI`, `AUTOMATION`, `WEB`), morph geométrico para a placa executiva `NFC 13.56 MHz` e ondas quadradas acionando `GOOGLE REVIEWS`, `WHATSAPP` e `MINI-SITE`.
4. `src/components/Act3IsometricAssembly.tsx`:
   - Renderiza o Compasso 3 (`Frames 240–359`): câmera 3D isométrica (`perspective`, `rotateX`, `rotateZ`), separação das 3 camadas de `IKIGAI_SVG_PATHS` no eixo `Z`, *stroke reveal* via `getStrokeRevealProps` (`@remotion/paths`) e colapso para o símbolo entrelaçado oficial com varredura especular.
5. `src/components/Act4BrandLockup.tsx`:
   - Renderiza o Compasso 4 (`Frames 360–479`): lockup final `IkigaiRawSvg` + `IKIGAI COMPANY` + moldura técnica perimetral, terminando no `Frame 479` idêntico à âncora do `Frame 000`.
6. `src/compositions/IkigaiLogoMaster.tsx` & `src/Root.tsx`:
   - Orquestra os 4 Atos em função pura de `useCurrentFrame()` e define `showCalibrationGuides: false` por padrão para o render de produção (mantendo a prop editável no Remotion Studio).

---

## 5. Inspeção Frame-a-Beat, Render MP4 e Integração no Site (`index.html` e `lp/index.html`)

1. **Verificação Frame-a-Beat (Regra `<build>` item 5 do Prompt Motion):**
   - Antes ou junto do render completo, exportar stills de verificação nos beats-chave (`frames 15, 45, 75, 135, 195, 275, 340, 420`) e inspecioná-los via `read_file` para garantir zero sobreposição de texto, legibilidade máxima e alinhamento geométrico perfeito.
2. **Renderização MP4 Final (`1080×1080` @ `60 FPS` H.264):**
   - Executar `npm run render:mp4` gerando `clients/ikigai-company/ikigai-motion/out/ikigai-logo-1080x1080-60fps.mp4`.
   - Copiar o vídeo final para `clients/ikigai-company/assets/videos/ikigai-hero-showreel.mp4`.
3. **Embutir no Hero `1:1` do Site (`index.html` e `lp/index.html`):**
   - Dentro de `#ik-motion-viewport` no Hero, inserir o `<video id="ik-hero-reel" src="assets/videos/ikigai-hero-showreel.mp4" poster="assets/images/ikigai-selo-oficial.png" autoplay loop muted playsinline preload="metadata" class="w-full h-full object-cover block"></video>`, mantendo a barra superior de telemetria (`IKIGAI // STAGE 1:1` · `60 FPS · LIVE`) e a barra inferior de 4 módulos (`01 // IA`, `02 // AUTO`, `03 // WEB`, `04 // NFC`).
   - Sincronizar `index.html` → `lp/index.html` (`SHA-256` idênticos).
4. **Validação Final (`agent-browser`):**
   - Inspecionar `index.html` em `1440×900` e `375×812` no Chrome confirmando que o vídeo `ikigai-hero-showreel.mp4` carrega com HTTP `200`/`206`, reproduz em loop no Hero `1:1` sem bordas arredondadas, com `0` erros de console e `0` overflow horizontal.
