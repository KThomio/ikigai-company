import React from 'react';
import { AbsoluteFill, interpolate } from 'remotion';
import { IKIGAI_FONTS } from '../assets/brandTokens';
import { MOTION_PALETTE, windowProgress } from '../animations/beatEngine';
import { ActProps } from './Act1KineticHook';

const TELEMETRY_ROWS = [
  { code: 'SYS.01 // AI AGENTS & GEO', badge: 'ACTIVE 100%', bar: 1.0 },
  { code: 'SYS.02 // WORKFLOW AUTOMATION', badge: 'ZERO FRICTION', bar: 0.92 },
  { code: 'SYS.03 // HIGH-END WEB', badge: 'SECURITY A+', bar: 0.96 },
] as const;

/**
 * COMPASSO 2 (Frames 120–239 | Beats 5–8):
 * - Beat 5 (lf 0..29): 6px vector line expands into 780x480 0px Telemetry HUD.
 * - Beat 6 (lf 30..59): HUD morphs geometrically into 560x348 NFC Executive Card + 13.56 MHz arcs.
 * - Beat 7 (lf 60..89): Concentric 0px square shockwaves emit 3 action outputs around the card.
 * - Beat 8 (lf 90..119): Everything converges inward into exact 440x440 square chassis for 3D tilt.
 */
export const Act2UiToNfcMorph: React.FC<ActProps> = ({ frame }) => {
  const lf = frame - 120;

  // Beat 5: Expand from 780x6 line -> 780x480 HUD
  const expandT = windowProgress(lf, 0, 22);
  // Beat 6: Morph 780x480 HUD -> 560x348 NFC Card
  const morphCardT = windowProgress(lf, 30, 52);
  // Beat 8: Morph 560x348 NFC Card -> 440x440 Square Chassis
  const morphSquareT = windowProgress(lf, 90, 114);

  let boxWidth = 780;
  let boxHeight = interpolate(expandT, [0, 1], [6, 480]);

  if (lf >= 30 && lf < 90) {
    boxWidth = interpolate(morphCardT, [0, 1], [780, 560]);
    boxHeight = interpolate(morphCardT, [0, 1], [480, 348]);
  } else if (lf >= 90) {
    boxWidth = interpolate(morphSquareT, [0, 1], [560, 440]);
    boxHeight = interpolate(morphSquareT, [0, 1], [348, 440]);
  }

  const hudContentOpacity = lf < 36 ? interpolate(lf, [6, 16, 30, 36], [0, 1, 1, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }) : 0;
  const nfcCardOpacity = lf >= 38 && lf < 104 ? interpolate(lf, [38, 46, 94, 104], [0, 1, 1, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }) : 0;

  // Beat 7: Three square NFC shockwaves + 3 output pills
  const wave1 = windowProgress(lf, 60, 86);
  const wave2 = windowProgress(lf, 67, 90);
  const nodesIn = windowProgress(lf, 62, 78);
  const nodesRetract = lf >= 90 ? windowProgress(lf, 90, 104) : 0;
  const nodeOpacity = lf >= 62 && lf < 105 ? interpolate(nodesIn - nodesRetract, [0, 1], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }) : 0;
  const nodeSlide = interpolate(nodesIn, [0, 1], [30, 0]) + interpolate(nodesRetract, [0, 1], [0, -30]);

  return (
    <AbsoluteFill
      style={{
        backgroundColor: MOTION_PALETTE.obsidian,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Background Subtle Architectural Grid */}
      <div
        style={{
          position: 'absolute',
          inset: 64,
          border: '1px solid rgba(196, 200, 208, 0.1)',
          backgroundImage:
            'linear-gradient(to right, rgba(234,236,239,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(234,236,239,0.03) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
        }}
      />

      {/* Beat 7: Square 0px Contactless Waves */}
      {lf >= 60 && lf < 96 && (
        <>
          <div
            style={{
              position: 'absolute',
              width: 560 + wave1 * 340,
              height: 348 + wave1 * 340,
              border: '1px solid rgba(234, 236, 239, 0.45)',
              opacity: 1 - wave1,
            }}
          />
          <div
            style={{
              position: 'absolute',
              width: 560 + wave2 * 260,
              height: 348 + wave2 * 260,
              border: '1px solid rgba(196, 200, 208, 0.35)',
              opacity: 1 - wave2,
            }}
          />
        </>
      )}

      {/* Beat 7: Output Action Callouts Outside Card Bounds */}
      {lf >= 62 && lf < 106 && (
        <>
          <div
            style={{
              position: 'absolute',
              top: 210,
              border: '1px solid #EAECEF',
              backgroundColor: MOTION_PALETTE.obsidian,
              padding: '12px 24px',
              fontFamily: IKIGAI_FONTS.mono,
              fontSize: 16,
              letterSpacing: '0.18em',
              color: MOTION_PALETTE.platinum,
              opacity: nodeOpacity,
              transform: `translateY(${nodeSlide}px)`,
            }}
          >
            [ GOOGLE REVIEWS 5★ ]
          </div>
          <div
            style={{
              position: 'absolute',
              bottom: 220,
              left: 160,
              border: '1px solid #EAECEF',
              backgroundColor: MOTION_PALETTE.offWhite,
              padding: '12px 22px',
              fontFamily: IKIGAI_FONTS.mono,
              fontSize: 16,
              fontWeight: 600,
              letterSpacing: '0.16em',
              color: MOTION_PALETTE.obsidian,
              opacity: nodeOpacity,
              transform: `translateY(${-nodeSlide}px)`,
            }}
          >
            [ WHATSAPP DIRECT ]
          </div>
          <div
            style={{
              position: 'absolute',
              bottom: 220,
              right: 160,
              border: '1px solid rgba(234,236,239,0.55)',
              backgroundColor: MOTION_PALETTE.carbon,
              padding: '12px 22px',
              fontFamily: IKIGAI_FONTS.mono,
              fontSize: 16,
              letterSpacing: '0.16em',
              color: MOTION_PALETTE.platinum,
              opacity: nodeOpacity,
              transform: `translateY(${-nodeSlide}px)`,
            }}
          >
            [ MINI-SITE HUB ]
          </div>
        </>
      )}

      {/* Main Morphing Geometric Chassis */}
      <div
        style={{
          position: 'relative',
          width: boxWidth,
          height: boxHeight,
          backgroundColor: MOTION_PALETTE.carbon,
          border: '1.5px solid #EAECEF',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        {/* Corner Orthogonal Brackets Inside Chassis */}
        {[
          { top: 10, left: 10, borderTop: '2px solid #EAECEF', borderLeft: '2px solid #EAECEF' },
          { top: 10, right: 10, borderTop: '2px solid #EAECEF', borderRight: '2px solid #EAECEF' },
          { bottom: 10, left: 10, borderBottom: '2px solid #EAECEF', borderLeft: '2px solid #EAECEF' },
          { bottom: 10, right: 10, borderBottom: '2px solid #EAECEF', borderRight: '2px solid #EAECEF' },
        ].map((s, i) => (
          <div key={i} style={{ position: 'absolute', width: 16, height: 16, zIndex: 4, ...s }} />
        ))}

        {/* BEAT 5 HUD Content */}
        {hudContentOpacity > 0 && (
          <div
            style={{
              position: 'absolute',
              inset: 0,
              padding: '38px 42px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              opacity: hudContentOpacity,
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                borderBottom: '1px solid rgba(234,236,239,0.16)',
                paddingBottom: 16,
                fontFamily: IKIGAI_FONTS.mono,
                fontSize: 15,
                letterSpacing: '0.16em',
                color: MOTION_PALETTE.platinum,
              }}
            >
              <span>IKIGAI // INFRASTRUCTURE TELEMETRY</span>
              <span>SYS ACTIVE</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
              {TELEMETRY_ROWS.map((row, idx) => {
                const barFill = windowProgress(lf, 8 + idx * 4, 24 + idx * 4) * row.bar * 100;
                return (
                  <div key={row.code} style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        fontFamily: IKIGAI_FONTS.mono,
                        fontSize: 15,
                        color: MOTION_PALETTE.silver,
                        letterSpacing: '0.1em',
                      }}
                    >
                      <span>{row.code}</span>
                      <span style={{ color: MOTION_PALETTE.platinum, fontWeight: 600 }}>[ {row.badge} ]</span>
                    </div>
                    <div style={{ width: '100%', height: 6, backgroundColor: MOTION_PALETTE.graphite }}>
                      <div
                        style={{
                          width: `${barFill}%`,
                          height: '100%',
                          backgroundColor: MOTION_PALETTE.platinum,
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            <div
              style={{
                borderTop: '1px solid rgba(234,236,239,0.16)',
                paddingTop: 14,
                fontFamily: IKIGAI_FONTS.mono,
                fontSize: 13,
                letterSpacing: '0.2em',
                color: MOTION_PALETTE.steel,
              }}
            >
              MORPH READY → HARDWARE INTEGRATION
            </div>
          </div>
        )}

        {/* BEAT 6–7 NFC Executive Card Content */}
        {nfcCardOpacity > 0 && (
          <div
            style={{
              position: 'absolute',
              inset: 0,
              padding: '30px 36px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              opacity: nfcCardOpacity,
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span
                style={{
                  fontFamily: IKIGAI_FONTS.mono,
                  fontSize: 14,
                  letterSpacing: '0.18em',
                  color: MOTION_PALETTE.silver,
                }}
              >
                NFC HARDWARE // 13.56 MHz
              </span>
              {/* Contactless SVG Arcs Popping Sequentially */}
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#EAECEF" strokeWidth="1.8">
                <path d="M8.5 16.5a6.5 6.5 0 0 1 0-9" opacity={lf >= 42 ? 1 : 0.15} />
                <path d="M12 18.5a10 10 0 0 1 0-13" opacity={lf >= 48 ? 1 : 0.15} />
                <path d="M15.5 20a13.5 13.5 0 0 1 0-16" opacity={lf >= 54 ? 1 : 0.15} />
              </svg>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <span
                style={{
                  fontFamily: IKIGAI_FONTS.display,
                  fontWeight: 800,
                  fontSize: 38,
                  letterSpacing: '0.14em',
                  color: MOTION_PALETTE.platinum,
                }}
              >
                IKIGAI NFC
              </span>
              <span
                style={{
                  fontFamily: IKIGAI_FONTS.mono,
                  fontSize: 14,
                  letterSpacing: '0.2em',
                  color: MOTION_PALETTE.steel,
                }}
              >
                CONEXÃO FÍSICO-DIGITAL INSTANTÂNEA
              </span>
            </div>

            <div
              style={{
                borderTop: '1px solid rgba(234,236,239,0.16)',
                paddingTop: 12,
                display: 'flex',
                justifyContent: 'space-between',
                fontFamily: IKIGAI_FONTS.mono,
                fontSize: 13,
                color: MOTION_PALETTE.platinum,
              }}
            >
              <span>TAP TO CONNECT</span>
              <span>IKIGAI COMPANY</span>
            </div>
          </div>
        )}
      </div>
    </AbsoluteFill>
  );
};
