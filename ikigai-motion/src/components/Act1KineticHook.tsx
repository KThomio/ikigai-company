import React from 'react';
import { AbsoluteFill, interpolate } from 'remotion';
import { IKIGAI_FONTS } from '../assets/brandTokens';
import { MOTION_PALETTE, windowProgress } from '../animations/beatEngine';
import { IkigaiRawSvg } from './IkigaiRawSvg';

export interface ActProps {
  frame: number;
}

/**
 * COMPASSO 1 (Frames 000–119 | Beats 1–4):
 * - Beat 1 (0..29): Loop anchor departure from Frame 479 lockup -> corners explode outward, IKIGAI_ prompt blinks.
 * - Beat 2 (30..59): Hard off-white horizontal blade wipe -> split-slice kinetic "INTELLIGENCE".
 * - Beat 3 (60..89): Dual split-screen (Obsidian vs Off-White) -> "PURPOSE" / "FUTURE" + 90deg Swiss cross.
 * - Beat 4 (90..119): Twin shutters collapse inward into a central 6px platinum vector bar.
 */
export const Act1KineticHook: React.FC<ActProps> = ({ frame }) => {
  // Beat 1 (0..29): Seamlessly departs from identical Frame 479 layout at frame 0
  const retractProgress = windowProgress(frame, 1, 20);
  const logoScale = interpolate(retractProgress, [0, 1], [1, 0.42]);
  const logoOpacity = interpolate(frame, [10, 22], [1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const wordmarkSlide = interpolate(retractProgress, [0, 1], [0, 70]);
  const cornerInset = interpolate(retractProgress, [0, 1], [64, 48]);
  const hookCursorOpacity = frame >= 16 && frame < 30 ? (Math.floor(frame / 4) % 2 === 0 ? 1 : 0.25) : 0;

  // Beat 2 (30..59): Hard inversion wipe to #F5F6F8 + Kinetic "INTELLIGENCE"
  const wipeHeight = windowProgress(frame, 30, 44) * 1080;
  const shearOffset = interpolate(windowProgress(frame, 32, 50), [0, 1], [130, 0]);
  const subLabelSlide = interpolate(windowProgress(frame, 36, 52), [0, 1], [32, 0]);

  // Beat 3 (60..89): Dual vertical split-screen
  const leftBlackHeight = windowProgress(frame, 60, 74) * 1080;
  const purposeY = interpolate(windowProgress(frame, 62, 80), [0, 1], [90, 0]);
  const futureY = interpolate(windowProgress(frame, 64, 82), [0, 1], [-90, 0]);
  const crossRotation = interpolate(windowProgress(frame, 60, 82), [0, 1], [0, 90]);

  // Beat 4 (90..119): Shutters collapse inward leaving horizontal 6px bar
  const shutterWidth = windowProgress(frame, 90, 108) * 540;
  const lineWidth = interpolate(windowProgress(frame, 104, 118), [0, 1], [1080, 780]);

  return (
    <AbsoluteFill style={{ backgroundColor: MOTION_PALETTE.obsidian, overflow: 'hidden' }}>
      {/* BEAT 1: Loop Lockup State -> Expansion Departure */}
      {frame < 30 && (
        <AbsoluteFill
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {/* Perimeter Frame Matching Beat 16 End Frame */}
          <div
            style={{
              position: 'absolute',
              inset: cornerInset,
              border: '1px solid rgba(196, 200, 208, 0.16)',
            }}
          />

          {/* 4 Corner Orthogonal Brackets */}
          {[
            { top: cornerInset, left: cornerInset, borderTop: '2px solid #EAECEF', borderLeft: '2px solid #EAECEF' },
            { top: cornerInset, right: cornerInset, borderTop: '2px solid #EAECEF', borderRight: '2px solid #EAECEF' },
            { bottom: cornerInset, left: cornerInset, borderBottom: '2px solid #EAECEF', borderLeft: '2px solid #EAECEF' },
            { bottom: cornerInset, right: cornerInset, borderBottom: '2px solid #EAECEF', borderRight: '2px solid #EAECEF' },
          ].map((s, idx) => (
            <div
              key={idx}
              style={{
                position: 'absolute',
                width: 24,
                height: 24,
                ...s,
              }}
            />
          ))}

          {/* Centered Emblem + Wordmark Lockup (Pixel-match with Frame 479 at frame 0) */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 36,
              opacity: logoOpacity,
              transform: `scale(${logoScale})`,
            }}
          >
            <IkigaiRawSvg size={440} backgroundCutoutColor={MOTION_PALETTE.obsidian} />

            <div
              style={{
                height: 76,
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 10,
              }}
            >
              <div
                style={{
                  transform: `translateY(${wordmarkSlide}px)`,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 10,
                }}
              >
                <span
                  style={{
                    fontFamily: IKIGAI_FONTS.display,
                    fontWeight: 700,
                    fontSize: 44,
                    letterSpacing: '0.28em',
                    color: MOTION_PALETTE.platinum,
                    textTransform: 'uppercase',
                    lineHeight: 1,
                    paddingLeft: '0.28em',
                  }}
                >
                  IKIGAI
                </span>
                <span
                  style={{
                    fontFamily: IKIGAI_FONTS.mono,
                    fontWeight: 500,
                    fontSize: 16,
                    letterSpacing: '0.46em',
                    color: MOTION_PALETTE.steel,
                    textTransform: 'uppercase',
                    paddingLeft: '0.46em',
                  }}
                >
                  COMPANY
                </span>
              </div>
            </div>
          </div>

          {/* Bottom Mantra (Fades cleanly with Frame 0 match) */}
          <div
            style={{
              position: 'absolute',
              bottom: 92,
              fontFamily: IKIGAI_FONTS.mono,
              fontSize: 13,
              letterSpacing: '0.26em',
              color: MOTION_PALETTE.silver,
              opacity: logoOpacity,
              textTransform: 'uppercase',
            }}
          >
            INTELLIGENCE • PURPOSE • FUTURE
          </div>

          {/* Kinetic Hook Prompt Appears as Emblem Retracts */}
          {frame >= 14 && (
            <div
              style={{
                position: 'absolute',
                display: 'flex',
                alignItems: 'center',
                fontFamily: IKIGAI_FONTS.mono,
                fontSize: 38,
                fontWeight: 600,
                letterSpacing: '0.18em',
                color: MOTION_PALETTE.platinum,
              }}
            >
              <span>IKIGAI</span>
              <span style={{ opacity: hookCursorOpacity }}>_</span>
            </div>
          )}
        </AbsoluteFill>
      )}

      {/* BEAT 2: Hard Off-White Inversion Wipe -> Kinetic "INTELLIGENCE" */}
      {frame >= 30 && frame < 60 && (
        <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center' }}>
          <div
            style={{
              position: 'absolute',
              width: '100%',
              height: wipeHeight,
              backgroundColor: MOTION_PALETTE.offWhite,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: 64,
                left: 64,
                right: 64,
                display: 'flex',
                justifyContent: 'space-between',
                fontFamily: IKIGAI_FONTS.mono,
                fontSize: 15,
                letterSpacing: '0.2em',
                color: MOTION_PALETTE.obsidian,
                transform: `translateY(${subLabelSlide}px)`,
              }}
            >
              <span>[ 01 // AI SYSTEMS ]</span>
              <span>120 BPM · BEAT 02</span>
            </div>

            {/* Split Shear Stencil Word */}
            <div style={{ position: 'relative', width: 960, height: 150 }}>
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  clipPath: 'inset(0 0 50% 0)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transform: `translateX(${-shearOffset}px)`,
                }}
              >
                <span
                  style={{
                    fontFamily: IKIGAI_FONTS.display,
                    fontWeight: 800,
                    fontSize: 110,
                    letterSpacing: '-0.04em',
                    color: MOTION_PALETTE.obsidian,
                    lineHeight: 1,
                  }}
                >
                  INTELLIGENCE
                </span>
              </div>
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  clipPath: 'inset(50% 0 0 0)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transform: `translateX(${shearOffset}px)`,
                }}
              >
                <span
                  style={{
                    fontFamily: IKIGAI_FONTS.display,
                    fontWeight: 800,
                    fontSize: 110,
                    letterSpacing: '-0.04em',
                    color: MOTION_PALETTE.obsidian,
                    lineHeight: 1,
                  }}
                >
                  INTELLIGENCE
                </span>
              </div>
            </div>

            <div
              style={{
                marginTop: 28,
                width: 920,
                height: 2,
                backgroundColor: MOTION_PALETTE.obsidian,
              }}
            />
          </div>
        </AbsoluteFill>
      )}

      {/* BEAT 3 & BEAT 4: Vertical 50/50 Dual Split + Collapse */}
      {frame >= 60 && (
        <AbsoluteFill style={{ backgroundColor: MOTION_PALETTE.offWhite }}>
          {/* Left Half: Obsidian */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: 540,
              height: leftBlackHeight,
              backgroundColor: MOTION_PALETTE.obsidian,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              overflow: 'hidden',
            }}
          >
            <div style={{ overflow: 'hidden' }}>
              <span
                style={{
                  display: 'block',
                  fontFamily: IKIGAI_FONTS.display,
                  fontWeight: 800,
                  fontSize: 82,
                  letterSpacing: '-0.03em',
                  color: MOTION_PALETTE.offWhite,
                  transform: `translateY(${purposeY}px)`,
                }}
              >
                PURPOSE
              </span>
            </div>
            <span
              style={{
                marginTop: 14,
                fontFamily: IKIGAI_FONTS.mono,
                fontSize: 14,
                letterSpacing: '0.2em',
                color: MOTION_PALETTE.silver,
              }}
            >
              02 // AUTOMATION
            </span>
          </div>

          {/* Right Half: Off-White */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              width: 540,
              height: 1080,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              overflow: 'hidden',
            }}
          >
            <div style={{ overflow: 'hidden' }}>
              <span
                style={{
                  display: 'block',
                  fontFamily: IKIGAI_FONTS.display,
                  fontWeight: 800,
                  fontSize: 82,
                  letterSpacing: '-0.03em',
                  color: MOTION_PALETTE.obsidian,
                  transform: `translateY(${futureY}px)`,
                }}
              >
                FUTURE
              </span>
            </div>
            <span
              style={{
                marginTop: 14,
                fontFamily: IKIGAI_FONTS.mono,
                fontSize: 14,
                letterSpacing: '0.2em',
                color: MOTION_PALETTE.graphite,
              }}
            >
              03 // ARCHITECTURE
            </span>
          </div>

          {/* Central Swiss Cross Rotating 90deg on Beat 3 */}
          {frame < 96 && (
            <div
              style={{
                position: 'absolute',
                left: '50%',
                top: '50%',
                width: 48,
                height: 48,
                marginLeft: -24,
                marginTop: -24,
                backgroundColor: MOTION_PALETTE.platinum,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transform: `rotate(${crossRotation}deg)`,
              }}
            >
              <div style={{ position: 'absolute', width: 22, height: 3, backgroundColor: MOTION_PALETTE.obsidian }} />
              <div style={{ position: 'absolute', width: 3, height: 22, backgroundColor: MOTION_PALETTE.obsidian }} />
            </div>
          )}

          {/* BEAT 4: Twin Black Shutters Compress to 6px Center Line */}
          {frame >= 90 && (
            <>
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  bottom: 0,
                  width: shutterWidth,
                  backgroundColor: MOTION_PALETTE.obsidian,
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  bottom: 0,
                  width: shutterWidth,
                  backgroundColor: MOTION_PALETTE.obsidian,
                }}
              />
              {/* 6px Platinum Bridge Vector Line for Beat 5 Match-Cut */}
              <div
                style={{
                  position: 'absolute',
                  left: '50%',
                  top: '50%',
                  width: lineWidth,
                  height: 6,
                  transform: 'translate(-50%, -50%)',
                  backgroundColor: MOTION_PALETTE.platinum,
                }}
              />
            </>
          )}
        </AbsoluteFill>
      )}
    </AbsoluteFill>
  );
};
