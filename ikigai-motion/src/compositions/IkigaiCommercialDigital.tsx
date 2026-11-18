import React from 'react';
import {
  AbsoluteFill,
  Sequence,
  Audio,
  Video,
  Img,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';
import { IKIGAI_COLORS, IKIGAI_FONTS } from '../assets/brandTokens';

export const IkigaiCommercialDigital: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Helper for subtitle rendering
  const renderSubtitle = (text: string) => {
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
          [ LOCUÇÃO OFICIAL // SOLUÇÕES DIGITAIS ]
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
              backgroundColor: '#38BDF8',
              borderRadius: 0,
              boxShadow: '0 0 10px #38BDF8',
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
          <span style={{ color: '#10B981', fontWeight: 700 }}>● CONTATO:</span>
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
      {/* Background Grid Layer */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'radial-gradient(circle at 50% 20%, rgba(56, 189, 248, 0.08) 0%, transparent 65%), linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
          backgroundSize: '100% 100%, 60px 60px, 60px 60px',
          opacity: 0.8,
          pointerEvents: 'none',
        }}
      />

      {/* ========================================================================= */}
      {/* ACT 1 (0 to 240 frames / 0s - 4s) — Gancho de Posicionamento Digital      */}
      {/* ========================================================================= */}
      <Sequence from={0} durationInFrames={240}>
        <Audio src={staticFile('audio/c2-act1.mp3')} volume={1} />
        {renderHeader('01 // DIAGNÓSTICO DIGITAL', 'POSICIONAMENTO DE MARCA')}

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
          {/* Showreel Container 0px */}
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
              src={staticFile('assets/videos/ikigai-hero-showreel.mp4')}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
              muted
            />

            {/* Kinetic Text Overlay */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                backgroundColor: 'rgba(9, 9, 11, 0.55)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '0 40px',
                textAlign: 'center',
              }}
            >
              <div
                style={{
                  fontFamily: IKIGAI_FONTS.mono,
                  fontSize: 16,
                  letterSpacing: '0.28em',
                  color: '#EF4444',
                  fontWeight: 700,
                  marginBottom: 16,
                  backgroundColor: 'rgba(239, 68, 68, 0.15)',
                  border: '1px solid rgba(239, 68, 68, 0.4)',
                  padding: '6px 20px',
                }}
              >
                ALERTA DE CONVERSÃO COMERCIAL
              </div>
              <h1
                style={{
                  margin: 0,
                  fontFamily: IKIGAI_FONTS.display,
                  fontSize: 54,
                  fontWeight: 800,
                  color: '#FFFFFF',
                  lineHeight: 1.15,
                  letterSpacing: '0.02em',
                }}
              >
                SEU SITE É LENTO OU GENÉRICO?
              </h1>
              <p
                style={{
                  marginTop: 16,
                  fontFamily: IKIGAI_FONTS.mono,
                  fontSize: 16,
                  color: IKIGAI_COLORS.silver,
                  letterSpacing: '0.12em',
                }}
              >
                78% DOS CLIENTES ABANDONAM PÁGINAS AMADORAS
              </p>
            </div>
          </div>

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
            [ TRANSFORME VISITANTES EM CLIENTES PAGANTES COM ARQUITETURA BOUTIQUE ]
          </div>
        </div>

        {renderSubtitle(
          'Sua empresa ainda perde vendas por ter um site lento, genérico ou um simples link na bio?',
        )}
        {renderFooter()}
      </Sequence>

      {/* ========================================================================= */}
      {/* ACT 2 (240 to 600 frames / 4s - 10s) — Landing Pages & Mini Sites         */}
      {/* ========================================================================= */}
      <Sequence from={240} durationInFrames={360}>
        <Audio src={staticFile('audio/c2-act2.mp3')} volume={1} />
        {renderHeader('02 // PRESENÇA DIGITAL', 'MINI SITES & LANDING PAGES')}

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
          {/* Card 1: Mini Site Profissional */}
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
                src={staticFile('assets/images/produto-mini-site-ikigai.png')}
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
                ENTREGA EM 48H
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
                  SOLUÇÃO ÁGIL // MOBILE FIRST
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
                  MINI SITE PROFISSIONAL
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
                  Perfil digital completo, catálogo de serviços, mapa e link direto para WhatsApp.
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
                  INVESTIMENTO ÚNICO
                </span>
                <span
                  style={{
                    fontFamily: IKIGAI_FONTS.display,
                    fontSize: 32,
                    fontWeight: 800,
                    color: '#FFFFFF',
                  }}
                >
                  R$ 299,00
                </span>
              </div>
            </div>
          </div>

          {/* Card 2: Landing Page de Alta Conversão */}
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
                src={staticFile('assets/images/produto-lp-caravella.png')}
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
                CASE REAL DE SUCESSO
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
                  ESTÉTICA BOUTIQUE // ALTA PERFORMANCE
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
                  LANDING PAGE CONVERSÃO
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
                  Copywriting comercial, carregamento ultra-rápido, SEO local e blindagem LGPD.
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
                  A PARTIR DE
                </span>
                <span
                  style={{
                    fontFamily: IKIGAI_FONTS.display,
                    fontSize: 32,
                    fontWeight: 800,
                    color: '#38BDF8',
                  }}
                >
                  R$ 599,00
                </span>
              </div>
            </div>
          </div>
        </div>

        {renderSubtitle(
          'A Ikigai Company constrói Mini Sites Profissionais por duzentos e noventa e nove reais e Landing Pages de alta conversão por quinhentos e noventa e nove.',
        )}
        {renderFooter()}
      </Sequence>

      {/* ========================================================================= */}
      {/* ACT 3 (600 to 960 frames / 10s - 16s) — Motion Design Cinematográfico     */}
      {/* ========================================================================= */}
      <Sequence from={600} durationInFrames={360}>
        <Audio src={staticFile('audio/c2-act3.mp3')} volume={1} />
        {renderHeader('03 // MOTION DESIGN', 'VÍDEOS PROGRAMÁTICOS A 60 FPS')}

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
          {/* Motion Visual Frame */}
          <div
            style={{
              width: '100%',
              height: 880,
              backgroundColor: '#111217',
              border: '1px solid rgba(228, 228, 231, 0.3)',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 25px 60px rgba(0,0,0,0.85)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              padding: 40,
              textAlign: 'center',
            }}
          >
            {/* Ambient Animated Glow */}
            <div
              style={{
                position: 'absolute',
                width: 380,
                height: 380,
                backgroundColor: 'rgba(56, 189, 248, 0.15)',
                filter: 'blur(80px)',
                borderRadius: '50%',
              }}
            />

            <div
              style={{
                width: 120,
                height: 120,
                border: '1px solid #38BDF8',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#09090B',
                marginBottom: 28,
                position: 'relative',
                boxShadow: '0 0 40px rgba(56, 189, 248, 0.3)',
              }}
            >
              <Img
                src={staticFile('assets/images/ikigai-simbolo-transparente.png')}
                style={{ width: 80, height: 80, objectFit: 'contain' }}
              />
            </div>

            <span
              style={{
                fontFamily: IKIGAI_FONTS.mono,
                fontSize: 15,
                letterSpacing: '0.24em',
                color: '#38BDF8',
                marginBottom: 12,
                textTransform: 'uppercase',
              }}
            >
              ANIMAÇÕES BASEADAS EM CÓDIGO // REMOTION
            </span>

            <h2
              style={{
                margin: 0,
                fontFamily: IKIGAI_FONTS.display,
                fontSize: 48,
                fontWeight: 800,
                color: '#FFFFFF',
                letterSpacing: '0.02em',
                lineHeight: 1.2,
              }}
            >
              MOTION DESIGN CINEMATOGRÁFICO
            </h2>

            <p
              style={{
                margin: '16px 0 0',
                fontFamily: IKIGAI_FONTS.sans,
                fontSize: 20,
                color: IKIGAI_COLORS.silver,
                maxWidth: 720,
                lineHeight: 1.4,
              }}
            >
              Comerciais verticais para Reels, anúncios de alta retenção e vinhetas com sincronização musical frame a frame.
            </p>

            <div
              style={{
                marginTop: 36,
                backgroundColor: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(228,228,231,0.25)',
                padding: '12px 32px',
                fontFamily: IKIGAI_FONTS.mono,
                fontSize: 16,
                color: '#FFFFFF',
                letterSpacing: '0.14em',
              }}
            >
              PROJETOS SOB MEDIDA // [ SOB CONSULTA ]
            </div>
          </div>
        </div>

        {renderSubtitle(
          'Criamos vídeos em Motion Design sob medida para destacar sua marca em anúncios e no Instagram.',
        )}
        {renderFooter()}
      </Sequence>

      {/* ========================================================================= */}
      {/* ACT 4 (960 to 1200 frames / 16s - 20s) — Automações de Processos & IA    */}
      {/* ========================================================================= */}
      <Sequence from={960} durationInFrames={240}>
        <Audio src={staticFile('audio/c2-act4.mp3')} volume={1} />
        {renderHeader('04 // AUTOMAÇÕES & IA', 'ATENDIMENTO 24H WHATSAPP & CRM')}

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
          {/* Automation Visual Card */}
          <div
            style={{
              width: '100%',
              height: 980,
              backgroundColor: '#111217',
              border: '1px solid rgba(228, 228, 231, 0.3)',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 25px 60px rgba(0,0,0,0.85)',
            }}
          >
            <Img
              src={staticFile('assets/images/produto-automacoes.png')}
              style={{
                width: '100%',
                height: '65%',
                objectFit: 'cover',
              }}
            />

            <div
              style={{
                padding: '32px 36px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '35%',
                boxSizing: 'border-box',
                backgroundColor: '#111217',
                borderTop: '1px solid rgba(228, 228, 231, 0.15)',
              }}
            >
              <div>
                <span
                  style={{
                    fontFamily: IKIGAI_FONTS.mono,
                    fontSize: 13,
                    letterSpacing: '0.2em',
                    color: '#38BDF8',
                    textTransform: 'uppercase',
                  }}
                >
                  AUTOMAÇÕES COM IA & INTEGRAÇÃO WHATSAPP
                </span>
                <h3
                  style={{
                    margin: '8px 0 0',
                    fontFamily: IKIGAI_FONTS.display,
                    fontSize: 32,
                    fontWeight: 700,
                    color: '#FFFFFF',
                  }}
                >
                  QUALIFICAÇÃO DE LEADS 24/7
                </h3>
                <p
                  style={{
                    margin: '8px 0 0',
                    fontFamily: IKIGAI_FONTS.sans,
                    fontSize: 16,
                    color: IKIGAI_COLORS.silver,
                  }}
                >
                  Robôs inteligentes que atendem, tiram dúvidas e agendam clientes no seu CRM automaticamente.
                </p>
              </div>

              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  borderTop: '1px solid rgba(228, 228, 231, 0.12)',
                  paddingTop: 14,
                }}
              >
                <span style={{ fontFamily: IKIGAI_FONTS.mono, fontSize: 13, color: '#A1A1AA' }}>
                  IMPLEMENTAÇÃO PERSONALIZADA
                </span>
                <span
                  style={{
                    fontFamily: IKIGAI_FONTS.mono,
                    fontSize: 16,
                    fontWeight: 700,
                    color: '#38BDF8',
                    letterSpacing: '0.1em',
                  }}
                >
                  [ SOB CONSULTA ]
                </span>
              </div>
            </div>
          </div>
        </div>

        {renderSubtitle(
          'E automatizamos seu atendimento no WhatsApp para qualificar clientes vinte e quatro horas por dia.',
        )}
        {renderFooter()}
      </Sequence>

      {/* ========================================================================= */}
      {/* ACT 5 (1200 to 1440 frames / 20s - 24s) — CTA & Assinatura Ikigai        */}
      {/* ========================================================================= */}
      <Sequence from={1200} durationInFrames={240}>
        <Audio src={staticFile('audio/c2-act5.mp3')} volume={1} />
        {renderHeader('05 // TRANSFORMAÇÃO DIGITAL', 'ELEVE SUA MARCA')}

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
            DESENVOLVIMENTO BOUTIQUE & AUTOMAÇÕES
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
            Sites de Alta Conversão, Motion Design e Inteligência Artificial para Negócios.
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
                FALE COM NOSSA DIRETORIA NO WHATSAPP
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

        {renderSubtitle('Eleve o padrão digital do seu negócio. Fale com a Ikigai Company agora.')}
        {renderFooter()}
      </Sequence>
    </AbsoluteFill>
  );
};
