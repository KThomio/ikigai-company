import React from 'react';
import { AbsoluteFill, interpolate } from 'remotion';
import { MOTION_PALETTE, windowProgress } from '../animations/beatEngine';
import { getStrokeRevealProps } from '../animations/primitives';
import { ActProps } from './Act1KineticHook';
import { IKIGAI_SVG_PATHS } from './IkigaiRawSvg';

/**
 * COMPASSO 3 (Frames 240–359 | Beats 9–12):
 * - Beat 9  (lf 0..29): 440x440 square tilts 2D->3D isometric (rotateX 54deg, rotateZ -45deg) splitting 3 Z planes.
 * - Beat 10 (lf 30..59): Camera orbits while @remotion/paths evolvePath draws every IKIGAI curve & bracket.
 * - Beat 11 (lf 60..89): Axial snap back to 2D frontal plane + #0D0E11 interlacing weave cutout locks.
 * - Beat 12 (lf 90..119): Anodized metallic specular sweep across assembled symbol.
 */
export const Act3IsometricAssembly: React.FC<ActProps> = ({ frame }) => {
  const lf = frame - 240;

  // 2D <-> 3D Isometric Camera Language
  const tiltIn = windowProgress(lf, 0, 26);
  const tiltOut = lf >= 60 ? windowProgress(lf, 60, 82) : 0;
  const is3DFactor = Math.max(0, tiltIn - tiltOut);

  const rotateX = 54 * is3DFactor;
  const rotateZ = lf < 60
    ? interpolate(lf, [0, 26, 60], [0, -45, -18], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' })
    : interpolate(tiltOut, [0, 1], [-18, 0]);
  const zGap = 72 * is3DFactor;

  // Beat 10 Stroke Reveal Progress via @remotion/paths
  const baseCircuitDraw = windowProgress(lf, 10, 40);
  const cornersDraw = windowProgress(lf, 24, 48);
  const sideLobesDraw = windowProgress(lf, 30, 56);
  const mainLobesDraw = windowProgress(lf, 34, 60);
  const diagPassDraw = windowProgress(lf, 42, 64);

  // Box frame recedes when 2D assembly locks on Beat 11
  const chassisBorderOpacity = lf < 60 ? 1 : interpolate(lf, [60, 76], [1, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  const weaveCutoutOpacity = lf >= 68 ? interpolate(lf, [68, 78], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }) : 0;

  // Beat 12 Specular Metallic Sweep across ViewBox
  const sweepPos = lf >= 90 ? interpolate(windowProgress(lf, 90, 116), [0, 1], [-140, 380]) : -200;

  return (
    <AbsoluteFill
      style={{
        backgroundColor: MOTION_PALETTE.obsidian,
        justifyContent: 'center',
        alignItems: 'center',
        perspective: '1200px',
        overflow: 'hidden',
      }}
    >
      {/* 3D Isometric Stage Wrapper */}
      <div
        style={{
          position: 'relative',
          width: 440,
          height: 440,
          transformStyle: 'preserve-3d',
          transform: `rotateX(${rotateX}deg) rotateZ(${rotateZ}deg)`,
        }}
      >
        {/* LAYER 1 (-Z): Base Orthogonal Circuit Grid */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: MOTION_PALETTE.carbon,
            border: `1.5px solid rgba(234, 236, 239, ${chassisBorderOpacity})`,
            transform: `translateZ(${-zGap}px)`,
            opacity: lf < 78 ? 1 : chassisBorderOpacity,
          }}
        >
          <svg viewBox="0 0 240 240" width={440} height={440} fill="none">
            {[
              'M 20 50 H 78 L 96 68 H 144 L 162 50 H 220',
              'M 20 120 H 64 L 82 102 H 158 L 176 120 H 220',
              'M 20 190 H 84 L 102 172 H 138 L 156 190 H 220',
            ].map((d, i) => {
              const strokeProps = getStrokeRevealProps({ path: d, progress: baseCircuitDraw });
              return (
                <path
                  key={`circuit-${i}`}
                  d={d}
                  stroke="rgba(196, 200, 208, 0.32)"
                  strokeWidth={1.5}
                  {...strokeProps}
                />
              );
            })}
          </svg>
        </div>

        {/* LAYER 2 (0Z): Side Concentric Lobes + Subtle Plane Grid */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            border: chassisBorderOpacity > 0 ? `1px solid rgba(196, 200, 208, ${0.35 * chassisBorderOpacity})` : 'none',
            transform: 'translateZ(0px)',
          }}
        >
          <svg viewBox="0 0 240 240" width={440} height={440} fill="none">
            <defs>
              <linearGradient id="act3-dim" x1="40" y1="40" x2="200" y2="200" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#B9BEC8" />
                <stop offset="100%" stopColor="#696E78" />
              </linearGradient>
            </defs>
            <g stroke="url(#act3-dim)" strokeWidth={9} strokeLinecap="round">
              {IKIGAI_SVG_PATHS.sideLobes.map((d, idx) => {
                const strokeProps = getStrokeRevealProps({ path: d, progress: sideLobesDraw });
                return <path key={`sl-${idx}`} d={d} {...strokeProps} />;
              })}
            </g>
          </svg>
        </div>

        {/* LAYER 3 (+Z): Corners + Main Interlaced Lobes + Anodized Specular Sweep */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            border: chassisBorderOpacity > 0 ? `1px solid rgba(234, 236, 239, ${0.45 * chassisBorderOpacity})` : 'none',
            transform: `translateZ(${zGap}px)`,
          }}
        >
          <svg viewBox="0 0 240 240" width={440} height={440} fill="none">
            <defs>
              <linearGradient id="act3-metal" x1="24" y1="20" x2="216" y2="220" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#F2F4F8" />
                <stop offset="48%" stopColor="#C8CCD4" />
                <stop offset="100%" stopColor="#7F8591" />
              </linearGradient>
              <linearGradient
                id="act3-sweep"
                x1={sweepPos - 45}
                y1="0"
                x2={sweepPos + 45}
                y2="240"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0%" stopColor="#EAECEF" stopOpacity="0" />
                <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.95" />
                <stop offset="100%" stopColor="#EAECEF" stopOpacity="0" />
              </linearGradient>
            </defs>

            {/* 4 Orthogonal Corners */}
            <g stroke="url(#act3-metal)" strokeWidth={6.5} strokeLinecap="square" strokeLinejoin="miter">
              {IKIGAI_SVG_PATHS.corners.map((d, idx) => {
                const strokeProps = getStrokeRevealProps({ path: d, progress: cornersDraw });
                return <path key={`cn-${idx}`} d={d} {...strokeProps} />;
              })}
            </g>

            {/* Underlay Cutout Mask Locks on Beat 11 2D Collapse */}
            <g
              stroke={MOTION_PALETTE.obsidian}
              strokeWidth={15}
              strokeLinecap="round"
              opacity={weaveCutoutOpacity}
            >
              {IKIGAI_SVG_PATHS.underlayMaskPaths.map((d, idx) => (
                <path key={`ul-${idx}`} d={d} />
              ))}
            </g>

            {/* Main Lobes + Primary Diagonal */}
            <g stroke="url(#act3-metal)" strokeWidth={9} strokeLinecap="round">
              {IKIGAI_SVG_PATHS.mainLobes.map((d, idx) => {
                const strokeProps = getStrokeRevealProps({ path: d, progress: mainLobesDraw });
                return <path key={`ml-${idx}`} d={d} {...strokeProps} />;
              })}
            </g>

            {/* Opposing Diagonal Pass */}
            <path
              d={IKIGAI_SVG_PATHS.diagonalPass}
              stroke={MOTION_PALETTE.obsidian}
              strokeWidth={15}
              strokeLinecap="round"
              opacity={weaveCutoutOpacity}
            />
            <path
              d={IKIGAI_SVG_PATHS.diagonalPass}
              stroke="url(#act3-metal)"
              strokeWidth={9}
              strokeLinecap="round"
              {...getStrokeRevealProps({ path: IKIGAI_SVG_PATHS.diagonalPass, progress: diagPassDraw })}
            />

            {/* Beat 12 Specular Light Bar */}
            {lf >= 90 && (
              <g stroke="url(#act3-sweep)" strokeWidth={9} strokeLinecap="round">
                {IKIGAI_SVG_PATHS.mainLobes.map((d, idx) => (
                  <path key={`sw-ml-${idx}`} d={d} />
                ))}
                <path d={IKIGAI_SVG_PATHS.diagonalPass} />
              </g>
            )}
          </svg>
        </div>
      </div>
    </AbsoluteFill>
  );
};
