import React from 'react';
import { AbsoluteFill, useCurrentFrame, useVideoConfig } from 'remotion';
import { IKIGAI_COLORS, IKIGAI_FONTS } from '../assets/brandTokens';

export interface TechnicalGridOverlayProps {
  visible?: boolean;
}

/**
 * Neutral architectural safe-area calibration overlay for Remotion Studio.
 * Toggleable via composition props (showCalibrationGuides).
 */
export const TechnicalGridOverlay: React.FC<TechnicalGridOverlayProps> = ({ visible = true }) => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames, width, height } = useVideoConfig();

  if (!visible) {
    return null;
  }

  return (
    <AbsoluteFill style={{ pointerEvents: 'none' }}>
      {/* Perimeter Safe Frame (80px inset) */}
      <div
        style={{
          position: 'absolute',
          inset: 64,
          border: '1px solid rgba(196, 200, 208, 0.12)',
        }}
      />

      {/* Orthogonal Crosshair Axis Lines */}
      <div
        style={{
          position: 'absolute',
          left: '50%',
          top: 64,
          bottom: 64,
          width: 1,
          backgroundColor: 'rgba(196, 200, 208, 0.06)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: 64,
          right: 64,
          height: 1,
          backgroundColor: 'rgba(196, 200, 208, 0.06)',
        }}
      />

      {/* Corner Telemetry */}
      <div
        style={{
          position: 'absolute',
          top: 32,
          left: 64,
          right: 64,
          display: 'flex',
          justifyContent: 'space-between',
          fontFamily: IKIGAI_FONTS.mono,
          fontSize: 14,
          letterSpacing: '0.16em',
          color: IKIGAI_COLORS.steel,
          textTransform: 'uppercase',
        }}
      >
        <span>IKIGAI // MOTION STUDIO ENV</span>
        <span>
          {width}×{height} · {fps} FPS
        </span>
      </div>

      <div
        style={{
          position: 'absolute',
          bottom: 32,
          left: 64,
          right: 64,
          display: 'flex',
          justifyContent: 'space-between',
          fontFamily: IKIGAI_FONTS.mono,
          fontSize: 14,
          letterSpacing: '0.16em',
          color: IKIGAI_COLORS.steel,
          textTransform: 'uppercase',
        }}
      >
        <span>CALIBRATION STAGE // NO FINAL CHOREOGRAPHY</span>
        <span>
          FRAME {String(frame).padStart(3, '0')} / {durationInFrames}
        </span>
      </div>
    </AbsoluteFill>
  );
};
