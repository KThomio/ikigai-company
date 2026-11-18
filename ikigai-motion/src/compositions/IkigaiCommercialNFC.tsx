import React from 'react';
import {
  AbsoluteFill,
  Sequence,
  Audio,
  Video,
  Img,
  staticFile,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';
import { IKIGAI_COLORS, IKIGAI_FONTS } from '../assets/brandTokens';

export const IkigaiCommercialNFC: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Helper for subtitle rendering
  const renderSubtitle = (text: string, highlight?: string) => {
    return (
      <div
        style={{
          position: 'absolute',
          bottom: 160,
          left: 48,
          right: 48,
          backgroundColor: 'rgba(9, 9, 11, 0.92)',
          border: '1px solid rgba(228, 228, 231, 0.35)',
          padding: '20px 28px',
          boxShadow: '0 20px 40px rgba(0,0,0,0.8)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          backdropFilter: 'blur(12px)',
        }}
      >
        <span
          style={{
            fontFamily: IKIGAI_FONTS.mono,
            fontSize: 14,
            letterSpacing: '0.22em',
            color: '#38BDF8',
            marginBottom: 8,
            textTransform: 'uppercase',
          }}
        >
          [ LOCUÇÃO OFICIAL // IKIGAI CONNECT ]
        </span>
        <p
          style={{
            margin: 0,
            fontFamily: IKIGAI_FONTS.sans,
            fontSize: 26,
            lineHeight: 1.35,
            fontWeight: 700,
            color: '#FFFFFF',
            textTransform: 'uppercase',
            letterSpacing: '0.02em',
          }}
        >
          {text}
        </p>
      </div>
    );
  };

  // Header HUD
  const renderHeader = (actNumber: string, actTitle: string) => {
    const elapsedSeconds = (frame / fps).toFixed(1);
    return (
      <div
        style={{
          position: 'absolute',
          top: 56,
          left: 48,
          right: 48,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingBottom: 16,
          borderBottom: '1px solid rgba(228, 228, 231, 0.2)',
          fontFamily: IKIGAI_FONTS.mono,
          fontSize: 15,
          color: IKIGAI_COLORS.silver,
          zIndex: 50,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div
            style={{
              width: 10,
              height: 10,
              backgroundColor: '#EF4444',
              borderRadius: 0,
              boxShadow: '0 0 10px #EF4444',
            }}
          />
          <span style={{ fontWeight: 700, color: '#FFFFFF', letterSpacing: '0.14em' }}>
            IKIGAI COMPANY
          </span>
          <span style={{ color: 'rgba(228,228,231,0.4)' }}>//</span>
          <span style={{ color: '#38BDF8', letterSpacing: '0.1em' }}>{actNumber}</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <span style={{ letterSpacing: '0.1em', color: IKIGAI_COLORS.platinum }}>
            {actTitle}
          </span>
          <span style={{ color: 'rgba(228,228,231,0.4)' }}>|</span>
          <span style={{ color: '#38BDF8' }}>{elapsedSeconds}s</span>
        </div>
      </div>
    );
  };

  // Footer CTA Banner
  const renderFooter = () => {
    return (
      <div
        style={{
          position: 'absolute',
          bottom: 56,
          left: 48,
          right: 48,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingTop: 16,
          borderTop: '1px solid rgba(228, 228, 231, 0.2)',
          fontFamily: IKIGAI_FONTS.mono,
          fontSize: 16,
          color: IKIGAI_COLORS.silver,
          zIndex: 50,
        }}
      >
        <span style={{ letterSpacing: '0.12em', color: '#E4E4E7' }}>
          ikigaicompany.vercel.app
        </span>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ color: '#10B981', fontWeight: 700 }}>● PEDIDOS:</span>
          <span style={{ fontWeight: 700, color: '#FFFFFF', letterSpacing: '0.08em' }}>
            (11) 94375-8597
          </span>
        </div>
      </div>
    );
  };

  return (
    <AbsoluteFill
      style={{
        backgroundColor: '#09090B',
        fontFamily: IKIGAI_FONTS.sans,
        overflow: 'hidden',
      }}
    >
      {/* Background Subtle Grid */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'radial-gradient(circle at 50% 30%, rgba(56, 189, 248, 0.08) 0%, transparent 60%), linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
          backgroundSize: '100% 100%, 60px 60px, 60px 60px',
          opacity: 0.8,
          pointerEvents: 'none',
        }}
      />

      {/* ========================================================================= */}
      {/* ACT 1 (0 to 240 frames / 0s - 4s) — Operação Real NFC                     */}
      {/* ========================================================================= */}
      <Sequence from={0} durationInFrames={240}>
        <Audio src={staticFile('audio/c1-act1.mp3')} volume={1} />
        {renderHeader('01 // OPERAÇÃO REAL', 'APROXIMAÇÃO INSTANTÂNEA')}

        <div
          style={{
            position: 'absolute',
            top: 150,
            bottom: 300,
            left: 56,
            right: 56,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {/* Video Container 0px */}
          <div
            style={{
              width: '100%',
              height: 1040,
              backgroundColor: '#000000',
              border: '1px solid rgba(228, 228, 231, 0.35)',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 25px 60px rgba(0,0,0,0.85)',
            }}
          >
            <Video
              src={staticFile('assets/videos/nfc-murano-operacao.mp4')}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
              muted
            />

            {/* Tech HUD Overlay on Video */}
            <div
              style={{
                position: 'absolute',
                top: 24,
                left: 24,
                backgroundColor: 'rgba(9, 9, 11, 0.85)',
                border: '1px solid rgba(56, 189, 248, 0.4)',
                padding: '8px 16px',
                fontFamily: IKIGAI_FONTS.mono,
                fontSize: 14,
                color: '#38BDF8',
                letterSpacing: '0.16em',
                fontWeight: 600,
              }}
            >
              CHIP NFC NTAG213 // 13.56 MHz
            </div>

            <div
              style={{
                position: 'absolute',
                bottom: 24,
                right: 24,
                backgroundColor: 'rgba(9, 9, 11, 0.85)',
                border: '1px solid rgba(228, 228, 231, 0.3)',
                padding: '8px 16px',
                fontFamily: IKIGAI_FONTS.mono,
                fontSize: 13,
                color: '#E4E4E7',
                letterSpacing: '0.12em',
              }}
            >
              ABERTURA EM 0.8 SEGUNDOS
            </div>
          </div>

          {/* Technical badge below video */}
          <div
            style={{
              marginTop: 24,
              fontFamily: IKIGAI_FONTS.mono,
              fontSize: 13,
              letterSpacing: '0.18em',
              color: 'rgba(228, 228, 231, 0.6)',
              textTransform: 'uppercase',
            }}
          >
            [ GRAVAÇÃO REAL EM CLIENTE // SEM APLICATIVO NECESSÁRIO ]
          </div>
        </div>

        {renderSubtitle(
          'Seu cliente encosta o celular por um segundo e já avalia sua empresa no Google ou salva seu contato.',
        )}
        {renderFooter()}
      </Sequence>

      {/* ========================================================================= */}
      {/* ACT 2 (240 to 600 frames / 4s - 10s) — Placa Google & Totem de Balcão     */}
      {/* ========================================================================= */}
      <Sequence from={240} durationInFrames={360}>
        <Audio src={staticFile('audio/c1-act2.mp3')} volume={1} />
        {renderHeader('02 // BALCÃO & RECEPÇÃO', 'AVALIAÇÃO GOOGLE 5 ESTRELAS')}

        <div
          style={{
            position: 'absolute',
            top: 150,
            bottom: 300,
            left: 56,
            right: 56,
            display: 'flex',
            flexDirection: 'column',
            gap: 28,
            justifyContent: 'center',
          }}
        >
          {/* Card 1: Placa Google */}
          <div
            style={{
              backgroundColor: '#111217',
              border: '1px solid rgba(228, 228, 231, 0.25)',
              display: 'flex',
              height: 480,
              overflow: 'hidden',
              boxShadow: '0 20px 40px rgba(0,0,0,0.6)',
            }}
          >
            <div style={{ width: '48%', height: '100%', position: 'relative' }}>
              <Img
                src={staticFile('assets/images/nfc-placas-google-reais.jpg')}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div
                style={{
                  position: 'absolute',
                  top: 12,
                  left: 12,
                  backgroundColor: 'rgba(0,0,0,0.85)',
                  border: '1px solid rgba(228,228,231,0.2)',
                  padding: '4px 8px',
                  fontFamily: IKIGAI_FONTS.mono,
                  fontSize: 10,
                  color: '#A1A1AA',
                }}
              >
                FOTO REAL DO LOTE
              </div>
            </div>
            <div
              style={{
                width: '52%',
                padding: '28px 24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <span
                  style={{
                    fontFamily: IKIGAI_FONTS.mono,
                    fontSize: 12,
                    letterSpacing: '0.18em',
                    color: '#38BDF8',
                    textTransform: 'uppercase',
                  }}
                >
                  ACRÍLICO CRISTAL 3MM
                </span>
                <h3
                  style={{
                    margin: '8px 0 0',
                    fontFamily: IKIGAI_FONTS.display,
                    fontSize: 26,
                    fontWeight: 700,
                    color: '#FFFFFF',
                    lineHeight: 1.2,
                  }}
                >
                  PLACA GOOGLE NFC
                </h3>
                <p
                  style={{
                    margin: '10px 0 0',
                    fontFamily: IKIGAI_FONTS.sans,
                    fontSize: 15,
                    color: IKIGAI_COLORS.silver,
                    lineHeight: 1.35,
                  }}
                >
                  Multiplica avaliações no balcão e caixas de atendimento.
                </p>
              </div>
              <div
                style={{
                  borderTop: '1px solid rgba(228, 228, 231, 0.15)',
                  paddingTop: 12,
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'baseline',
                }}
              >
                <span style={{ fontFamily: IKIGAI_FONTS.mono, fontSize: 13, color: '#A1A1AA' }}>
                  VALOR UNITÁRIO
                </span>
                <span
                  style={{
                    fontFamily: IKIGAI_FONTS.display,
                    fontSize: 32,
                    fontWeight: 800,
                    color: '#FFFFFF',
                  }}
                >
                  R$ 80,00
                </span>
              </div>
            </div>
          </div>

          {/* Card 2: Totem 15x10x5 */}
          <div
            style={{
              backgroundColor: '#111217',
              border: '1px solid rgba(228, 228, 231, 0.25)',
              display: 'flex',
              height: 480,
              overflow: 'hidden',
              boxShadow: '0 20px 40px rgba(0,0,0,0.6)',
            }}
          >
            <div style={{ width: '48%', height: '100%', position: 'relative' }}>
              <Img
                src={staticFile('assets/images/produto-totem-nfc.png')}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div
                style={{
                  position: 'absolute',
                  top: 12,
                  left: 12,
                  backgroundColor: 'rgba(0,0,0,0.85)',
                  border: '1px solid rgba(228,228,231,0.2)',
                  padding: '4px 8px',
                  fontFamily: IKIGAI_FONTS.mono,
                  fontSize: 10,
                  color: '#A1A1AA',
                }}
              >
                ILUSTRATIVO // SUA MARCA
              </div>
            </div>
            <div
              style={{
                width: '52%',
                padding: '28px 24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <span
                  style={{
                    fontFamily: IKIGAI_FONTS.mono,
                    fontSize: 12,
                    letterSpacing: '0.18em',
                    color: '#38BDF8',
                    textTransform: 'uppercase',
                  }}
                >
                  BASE ANGULAR 15×10×5 CM
                </span>
                <h3
                  style={{
                    margin: '8px 0 0',
                    fontFamily: IKIGAI_FONTS.display,
                    fontSize: 26,
                    fontWeight: 700,
                    color: '#FFFFFF',
                    lineHeight: 1.2,
                  }}
                >
                  TOTEM DE ACRÍLICO
                </h3>
                <p
                  style={{
                    margin: '10px 0 0',
                    fontFamily: IKIGAI_FONTS.sans,
                    fontSize: 15,
                    color: IKIGAI_COLORS.silver,
                    lineHeight: 1.35,
                  }}
                >
                  Presença imponente no balcão de consultórios e lojas.
                </p>
              </div>
              <div
                style={{
                  borderTop: '1px solid rgba(228, 228, 231, 0.15)',
                  paddingTop: 12,
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'baseline',
                }}
              >
                <span style={{ fontFamily: IKIGAI_FONTS.mono, fontSize: 13, color: '#A1A1AA' }}>
                  VALOR UNITÁRIO
                </span>
                <span
                  style={{
                    fontFamily: IKIGAI_FONTS.display,
                    fontSize: 32,
                    fontWeight: 800,
                    color: '#FFFFFF',
                  }}
                >
                  R$ 120,00
                </span>
              </div>
            </div>
          </div>
        </div>

        {renderSubtitle(
          'Com as Placas e Totens em Acrílico NFC da Ikigai Company, você multiplica suas avaliações cinco estrelas no balcão.',
        )}
        {renderFooter()}
      </Sequence>

      {/* ========================================================================= */}
      {/* ACT 3 (600 to 960 frames / 10s - 16s) — Connect Card & Etiquetas Adesivas */}
      {/* ========================================================================= */}
      <Sequence from={600} durationInFrames={360}>
        <Audio src={staticFile('audio/c1-act3.mp3')} volume={1} />
        {renderHeader('03 // PORTABILIDADE & MESAS', 'CARTÕES CR80 & ETIQUETAS')}

        <div
          style={{
            position: 'absolute',
            top: 150,
            bottom: 300,
            left: 56,
            right: 56,
            display: 'flex',
            flexDirection: 'column',
            gap: 28,
            justifyContent: 'center',
          }}
        >
          {/* Card 1: Connect Card CR80 */}
          <div
            style={{
              backgroundColor: '#111217',
              border: '1px solid rgba(228, 228, 231, 0.25)',
              display: 'flex',
              height: 480,
              overflow: 'hidden',
              boxShadow: '0 20px 40px rgba(0,0,0,0.6)',
            }}
          >
            <div style={{ width: '48%', height: '100%', position: 'relative' }}>
              <Img
                src={staticFile('assets/images/produto-connect-card.png')}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div
                style={{
                  position: 'absolute',
                  top: 12,
                  left: 12,
                  backgroundColor: 'rgba(0,0,0,0.85)',
                  border: '1px solid rgba(228,228,231,0.2)',
                  padding: '4px 8px',
                  fontFamily: IKIGAI_FONTS.mono,
                  fontSize: 10,
                  color: '#A1A1AA',
                }}
              >
                CR80 // 85.6 × 54 MM
              </div>
            </div>
            <div
              style={{
                width: '52%',
                padding: '28px 24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <span
                  style={{
                    fontFamily: IKIGAI_FONTS.mono,
                    fontSize: 12,
                    letterSpacing: '0.18em',
                    color: '#38BDF8',
                    textTransform: 'uppercase',
                  }}
                >
                  PVC ADESIVADO PREMIUM
                </span>
                <h3
                  style={{
                    margin: '8px 0 0',
                    fontFamily: IKIGAI_FONTS.display,
                    fontSize: 26,
                    fontWeight: 700,
                    color: '#FFFFFF',
                    lineHeight: 1.2,
                  }}
                >
                  CONNECT CARD NFC
                </h3>
                <p
                  style={{
                    margin: '10px 0 0',
                    fontFamily: IKIGAI_FONTS.sans,
                    fontSize: 15,
                    color: IKIGAI_COLORS.silver,
                    lineHeight: 1.35,
                  }}
                >
                  Substitua milhares de cartões de papel com 1 aproximação.
                </p>
              </div>
              <div
                style={{
                  borderTop: '1px solid rgba(228, 228, 231, 0.15)',
                  paddingTop: 12,
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'baseline',
                }}
              >
                <span style={{ fontFamily: IKIGAI_FONTS.mono, fontSize: 13, color: '#A1A1AA' }}>
                  VALOR UNITÁRIO
                </span>
                <span
                  style={{
                    fontFamily: IKIGAI_FONTS.display,
                    fontSize: 32,
                    fontWeight: 800,
                    color: '#FFFFFF',
                  }}
                >
                  R$ 79,90
                </span>
              </div>
            </div>
          </div>

          {/* Card 2: Etiquetas 7x4 cm */}
          <div
            style={{
              backgroundColor: '#111217',
              border: '1px solid rgba(228, 228, 231, 0.25)',
              display: 'flex',
              height: 480,
              overflow: 'hidden',
              boxShadow: '0 20px 40px rgba(0,0,0,0.6)',
            }}
          >
            <div style={{ width: '48%', height: '100%', position: 'relative' }}>
              <Img
                src={staticFile('assets/images/produto-etiquetas-nfc.png')}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div
                style={{
                  position: 'absolute',
                  top: 12,
                  left: 12,
                  backgroundColor: 'rgba(0,0,0,0.85)',
                  border: '1px solid rgba(228,228,231,0.2)',
                  padding: '4px 8px',
                  fontFamily: IKIGAI_FONTS.mono,
                  fontSize: 10,
                  color: '#A1A1AA',
                }}
              >
                RELEVO Ø25MM // CHIP EMBUTIDO
              </div>
            </div>
            <div
              style={{
                width: '52%',
                padding: '28px 24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <span
                  style={{
                    fontFamily: IKIGAI_FONTS.mono,
                    fontSize: 12,
                    letterSpacing: '0.18em',
                    color: '#38BDF8',
                    textTransform: 'uppercase',
                  }}
                >
                  ADESIVAS 7×4 CM
                </span>
                <h3
                  style={{
                    margin: '8px 0 0',
                    fontFamily: IKIGAI_FONTS.display,
                    fontSize: 26,
                    fontWeight: 700,
                    color: '#FFFFFF',
                    lineHeight: 1.2,
                  }}
                >
                  ETIQUETAS NFC
                </h3>
                <p
                  style={{
                    margin: '10px 0 0',
                    fontFamily: IKIGAI_FONTS.sans,
                    fontSize: 15,
                    color: IKIGAI_COLORS.silver,
                    lineHeight: 1.35,
                  }}
                >
                  Ideais para mesas, vitrines, cardápios e balcões.
                </p>
              </div>
              <div
                style={{
                  borderTop: '1px solid rgba(228, 228, 231, 0.15)',
                  paddingTop: 12,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 4,
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <span style={{ fontFamily: IKIGAI_FONTS.mono, fontSize: 13, color: '#A1A1AA' }}>
                    16 UNIDADES:
                  </span>
                  <span style={{ fontFamily: IKIGAI_FONTS.display, fontSize: 24, fontWeight: 700, color: '#FFFFFF' }}>
                    R$ 91,20
                  </span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <span style={{ fontFamily: IKIGAI_FONTS.mono, fontSize: 13, color: '#38BDF8' }}>
                    50 UNIDADES:
                  </span>
                  <span style={{ fontFamily: IKIGAI_FONTS.display, fontSize: 24, fontWeight: 700, color: '#38BDF8' }}>
                    R$ 150,00
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {renderSubtitle(
          'Use o Connect Card nos atendimentos ou aplique nossas etiquetas inteligentes direto nas mesas e vitrines.',
        )}
        {renderFooter()}
      </Sequence>

      {/* ========================================================================= */}
      {/* ACT 4 (960 to 1200 frames / 16s - 20s) — Combos Físico + Mini Site       */}
      {/* ========================================================================= */}
      <Sequence from={960} durationInFrames={240}>
        <Audio src={staticFile('audio/c1-act4.mp3')} volume={1} />
        {renderHeader('04 // SOLUÇÃO COMPLETA', 'COMBOS FÍSICO + MINI SITE')}

        <div
          style={{
            position: 'absolute',
            top: 150,
            bottom: 300,
            left: 56,
            right: 56,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: 20,
          }}
        >
          {/* Header banner */}
          <div
            style={{
              backgroundColor: 'rgba(56, 189, 248, 0.1)',
              border: '1px solid rgba(56, 189, 248, 0.35)',
              padding: '16px 24px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <span
              style={{
                fontFamily: IKIGAI_FONTS.mono,
                fontSize: 14,
                letterSpacing: '0.16em',
                color: '#38BDF8',
                fontWeight: 600,
              }}
            >
              PRODUTO FÍSICO NFC + MINI SITE PROFISSIONAL PRONTO
            </span>
            <span
              style={{
                fontFamily: IKIGAI_FONTS.mono,
                fontSize: 12,
                color: '#E4E4E7',
                border: '1px solid rgba(228,228,231,0.3)',
                padding: '4px 10px',
              }}
            >
              ECONOMIA DE ATÉ R$ 170,00
            </span>
          </div>

          {/* Combo 1 */}
          <div
            style={{
              backgroundColor: '#111217',
              border: '1px solid rgba(228, 228, 231, 0.22)',
              padding: '24px 32px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <div>
              <span style={{ fontFamily: IKIGAI_FONTS.mono, fontSize: 13, color: '#A1A1AA' }}>
                COMBO 01 // INDIVIDUAL
              </span>
              <h4
                style={{
                  margin: '4px 0 0',
                  fontFamily: IKIGAI_FONTS.display,
                  fontSize: 26,
                  fontWeight: 700,
                  color: '#FFFFFF',
                }}
              >
                CONNECT CARD + MINI SITE
              </h4>
              <p style={{ margin: '4px 0 0', fontSize: 14, color: IKIGAI_COLORS.silver }}>
                Cartão PVC adesivado + Perfil digital completo integrado
              </p>
            </div>
            <div style={{ textAlign: 'right' }}>
              <span style={{ fontFamily: IKIGAI_FONTS.mono, fontSize: 12, color: '#EF4444', textDecoration: 'line-through' }}>
                DE R$ 378,90
              </span>
              <div
                style={{
                  fontFamily: IKIGAI_FONTS.display,
                  fontSize: 34,
                  fontWeight: 800,
                  color: '#FFFFFF',
                }}
              >
                R$ 199,90
              </div>
            </div>
          </div>

          {/* Combo 2 */}
          <div
            style={{
              backgroundColor: '#161820',
              border: '1px solid #38BDF8',
              padding: '24px 32px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              boxShadow: '0 10px 30px rgba(56,189,248,0.15)',
              position: 'relative',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: -12,
                left: 32,
                backgroundColor: '#38BDF8',
                color: '#09090B',
                fontFamily: IKIGAI_FONTS.mono,
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: '0.14em',
                padding: '2px 10px',
              }}
            >
              MAIS VENDIDO
            </div>
            <div>
              <span style={{ fontFamily: IKIGAI_FONTS.mono, fontSize: 13, color: '#38BDF8' }}>
                COMBO 02 // ESTABELECIMENTOS
              </span>
              <h4
                style={{
                  margin: '4px 0 0',
                  fontFamily: IKIGAI_FONTS.display,
                  fontSize: 26,
                  fontWeight: 700,
                  color: '#FFFFFF',
                }}
              >
                PLACA GOOGLE + MINI SITE
              </h4>
              <p style={{ margin: '4px 0 0', fontSize: 14, color: IKIGAI_COLORS.silver }}>
                Placa de acrílico cristal + Mini Site com link direto
              </p>
            </div>
            <div style={{ textAlign: 'right' }}>
              <span style={{ fontFamily: IKIGAI_FONTS.mono, fontSize: 12, color: '#EF4444', textDecoration: 'line-through' }}>
                DE R$ 379,00
              </span>
              <div
                style={{
                  fontFamily: IKIGAI_FONTS.display,
                  fontSize: 34,
                  fontWeight: 800,
                  color: '#38BDF8',
                }}
              >
                R$ 210,00
              </div>
            </div>
          </div>

          {/* Combo 3 */}
          <div
            style={{
              backgroundColor: '#111217',
              border: '1px solid rgba(228, 228, 231, 0.22)',
              padding: '24px 32px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <div>
              <span style={{ fontFamily: IKIGAI_FONTS.mono, fontSize: 13, color: '#A1A1AA' }}>
                COMBO 03 // CORPORATIVO
              </span>
              <h4
                style={{
                  margin: '4px 0 0',
                  fontFamily: IKIGAI_FONTS.display,
                  fontSize: 26,
                  fontWeight: 700,
                  color: '#FFFFFF',
                }}
              >
                TOTEM 15×10 + MINI SITE
              </h4>
              <p style={{ margin: '4px 0 0', fontSize: 14, color: IKIGAI_COLORS.silver }}>
                Totem balcão de alta visibilidade + Mini Site próprio
              </p>
            </div>
            <div style={{ textAlign: 'right' }}>
              <span style={{ fontFamily: IKIGAI_FONTS.mono, fontSize: 12, color: '#EF4444', textDecoration: 'line-through' }}>
                DE R$ 419,00
              </span>
              <div
                style={{
                  fontFamily: IKIGAI_FONTS.display,
                  fontSize: 34,
                  fontWeight: 800,
                  color: '#FFFFFF',
                }}
              >
                R$ 250,00
              </div>
            </div>
          </div>
        </div>

        {renderSubtitle(
          'Quer tudo pronto? Leve o produto físico mais seu Mini Site Profissional no combo a partir de cento e noventa e nove e noventa.',
        )}
        {renderFooter()}
      </Sequence>

      {/* ========================================================================= */}
      {/* ACT 5 (1200 to 1440 frames / 20s - 24s) — CTA & Assinatura Ikigai        */}
      {/* ========================================================================= */}
      <Sequence from={1200} durationInFrames={240}>
        <Audio src={staticFile('audio/c1-act5.mp3')} volume={1} />
        {renderHeader('05 // CONTATO IMEDIATO', 'PEDIDOS PERSONALIZADOS')}

        <div
          style={{
            position: 'absolute',
            top: 150,
            bottom: 300,
            left: 56,
            right: 56,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          {/* Official Emblem */}
          <div
            style={{
              width: 140,
              height: 140,
              border: '1px solid rgba(228, 228, 231, 0.4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#111217',
              marginBottom: 32,
              boxShadow: '0 0 50px rgba(56, 189, 248, 0.25)',
              position: 'relative',
            }}
          >
            <Img
              src={staticFile('assets/images/ikigai-simbolo-transparente.png')}
              style={{ width: 100, height: 100, objectFit: 'contain' }}
            />
          </div>

          <span
            style={{
              fontFamily: IKIGAI_FONTS.mono,
              fontSize: 16,
              letterSpacing: '0.24em',
              color: '#38BDF8',
              textTransform: 'uppercase',
              marginBottom: 12,
            }}
          >
            AGÊNCIA BOUTIQUE // TECNOLOGIA & DESIGN
          </span>

          <h2
            style={{
              margin: 0,
              fontFamily: IKIGAI_FONTS.display,
              fontSize: 54,
              fontWeight: 800,
              color: '#FFFFFF',
              letterSpacing: '0.04em',
            }}
          >
            IKIGAI COMPANY
          </h2>

          <p
            style={{
              margin: '16px 0 0',
              fontFamily: IKIGAI_FONTS.sans,
              fontSize: 22,
              color: IKIGAI_COLORS.silver,
              maxWidth: 700,
            }}
          >
            Produtos Inteligentes NFC, Mini Sites e Landing Pages de Alta Conversão.
          </p>

          {/* Action WhatsApp Button Box */}
          <div
            style={{
              marginTop: 48,
              backgroundColor: '#161820',
              border: '1px solid #10B981',
              padding: '28px 48px',
              display: 'flex',
              alignItems: 'center',
              gap: 20,
              boxShadow: '0 15px 40px rgba(16, 185, 129, 0.2)',
            }}
          >
            <div
              style={{
                width: 16,
                height: 16,
                backgroundColor: '#10B981',
                borderRadius: 0,
                boxShadow: '0 0 16px #10B981',
              }}
            />
            <div style={{ textAlign: 'left' }}>
              <div
                style={{
                  fontFamily: IKIGAI_FONTS.mono,
                  fontSize: 13,
                  letterSpacing: '0.16em',
                  color: '#A1A1AA',
                }}
              >
                SOLICITE SEU ORÇAMENTO AGORA NO WHATSAPP
              </div>
              <div
                style={{
                  fontFamily: IKIGAI_FONTS.display,
                  fontSize: 38,
                  fontWeight: 800,
                  color: '#FFFFFF',
                  letterSpacing: '0.04em',
                }}
              >
                (11) 94375-8597
              </div>
            </div>
          </div>
        </div>

        {renderSubtitle('Ikigai Company. Peça o seu personalizado agora aqui no WhatsApp.')}
        {renderFooter()}
      </Sequence>
    </AbsoluteFill>
  );
};
