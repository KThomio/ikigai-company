import React from 'react';
import { AbsoluteFill, interpolate } from 'remotion';
import { IKIGAI_FONTS } from '../assets/brandTokens';
import { MOTION_PALETTE, windowProgress } from '../animations/beatEngine';
import { ActProps } from './Act1KineticHook';
import { IkigaiRawSvg } from './IkigaiRawSvg';

/**
 * COMPASSO 4 (Frames 360–479 | Beats 13–16):
 * - Beat 13 (lf 0..29): Wordmark IKIGAI COMPANY expands cleanly underneath the 440px emblem.
 * - Beat 14 (lf 30..59): Architectural perimeter hairline frame & orthogonal brackets lock.
 * - Beats 15–16 (lf 60..119): Monolithic rest ending at Frame 479 pixel-identical to Frame 000.
 */
export const Act4BrandLockup: React.FC<ActProps> = ({ frame }) => {
  const lf = frame - 360;

  // Beat 13: Wordmark unmasks without shifting abruptly (layout gap & height grow smoothly from centered 440px svg)
  const lockupT = windowProgress(lf, 0, 26);
  const wordmarkHeight = interpolate(lockupT, [0, 1], [0, 76]);
  const lockupGap = interpolate(lockupT, [0, 1], [0, 36]);
  const wordmarkSlide = interpolate(lockupT, [0, 1], [60, 0]);

  // Beat 14: Perimeter Architectural Frame & Mantra
  const perimeterT = windowProgress(lf, 30, 54);
  const taglineOpacity = interpolate(perimeterT, [0, 1], [0, 1]);

  return (
    <AbsoluteFill
      style={{
        backgroundColor: MOTION_PALETTE.obsidian,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Perimeter Hairline Frame Matching Frame 000 at lf >= 54 */}
      <div
        style={{
          position: 'absolute',
          inset: 64,
          border: '1px solid rgba(196, 200, 208, 0.16)',
          opacity: perimeterT,
        }}
      />

      {/* 4 Orthogonal Corner Brackets Drawing Around Safe Frame */}
      {[
        { top: 64, left: 64, borderTop: '2px solid #EAECEF', borderLeft: '2px solid #EAECEF' },
        { top: 64, right: 64, borderTop: '2px solid #EAECEF', borderRight: '2px solid #EAECEF' },
        { bottom: 64, left: 64, borderBottom: '2px solid #EAECEF', borderLeft: '2px solid #EAECEF' },
        { bottom: 64, right: 64, borderBottom: '2px solid #EAECEF', borderRight: '2px solid #EAECEF' },
      ].map((s, idx) => (
        <div
          key={idx}
          style={{
            position: 'absolute',
            width: 24 * perimeterT,
            height: 24 * perimeterT,
            opacity: perimeterT,
            ...s,
          }}
        />
      ))}

      {/* Final Monolithic Lockup (Matches Act 1 Frame 000 Pixel-for-Pixel) */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: lockupGap,
        }}
      >
        <IkigaiRawSvg size={440} backgroundCutoutColor={MOTION_PALETTE.obsidian} />

        <div
          style={{
            height: wordmarkHeight,
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

      {/* Bottom Signature Mantra */}
      <div
        style={{
          position: 'absolute',
          bottom: 92,
          fontFamily: IKIGAI_FONTS.mono,
          fontSize: 13,
          letterSpacing: '0.26em',
          color: MOTION_PALETTE.silver,
          opacity: taglineOpacity,
          textTransform: 'uppercase',
        }}
      >
        INTELLIGENCE • PURPOSE • FUTURE
      </div>
    </AbsoluteFill>
  );
};
