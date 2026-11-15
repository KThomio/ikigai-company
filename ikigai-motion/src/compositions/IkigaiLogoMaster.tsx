import React from 'react';
import { AbsoluteFill, useCurrentFrame } from 'remotion';
import { Act1KineticHook } from '../components/Act1KineticHook';
import { Act2UiToNfcMorph } from '../components/Act2UiToNfcMorph';
import { Act3IsometricAssembly } from '../components/Act3IsometricAssembly';
import { Act4BrandLockup } from '../components/Act4BrandLockup';
import { TechnicalGridOverlay } from '../components/TechnicalGridOverlay';

export type IkigaiLogoMasterProps = Record<string, unknown> & {
  backgroundColor: string;
  showCalibrationGuides: boolean;
};

/**
 * IKIGAI COMPANY — Master 120 BPM Prompt-Motion Composition (480 frames / 8s @ 60fps).
 * Seamless loop: Frame 479 matches Frame 000 pixel-for-pixel.
 */
export const IkigaiLogoMaster: React.FC<IkigaiLogoMasterProps> = ({
  backgroundColor,
  showCalibrationGuides,
}) => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{ backgroundColor }}>
      {frame < 120 && <Act1KineticHook frame={frame} />}
      {frame >= 120 && frame < 240 && <Act2UiToNfcMorph frame={frame} />}
      {frame >= 240 && frame < 360 && <Act3IsometricAssembly frame={frame} />}
      {frame >= 360 && <Act4BrandLockup frame={frame} />}

      <TechnicalGridOverlay visible={showCalibrationGuides} />
    </AbsoluteFill>
  );
};
