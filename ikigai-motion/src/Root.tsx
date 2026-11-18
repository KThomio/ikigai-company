import React from 'react';
import { Composition } from 'remotion';
import { IKIGAI_COLORS, IKIGAI_COMPOSITION_SPEC } from './assets/brandTokens';
import { IkigaiLogoMaster, IkigaiLogoMasterProps } from './compositions/IkigaiLogoMaster';
import { IkigaiCommercialNFC } from './compositions/IkigaiCommercialNFC';
import { IkigaiCommercialDigital } from './compositions/IkigaiCommercialDigital';

export const RemotionRoot: React.FC = () => {
  return (
    <>
      {/* Existing Logo Reveal (1080x1080 @ 60fps, 480 frames / 8s) */}
      <Composition
        id={IKIGAI_COMPOSITION_SPEC.id}
        component={IkigaiLogoMaster}
        durationInFrames={IKIGAI_COMPOSITION_SPEC.durationInFrames}
        fps={IKIGAI_COMPOSITION_SPEC.fps}
        width={IKIGAI_COMPOSITION_SPEC.width}
        height={IKIGAI_COMPOSITION_SPEC.height}
        defaultProps={{
          backgroundColor: IKIGAI_COLORS.obsidian,
          showCalibrationGuides: false,
        } satisfies IkigaiLogoMasterProps}
      />

      {/* Commercial 01: Linha Física NFC + Combos (1080x1920 @ 60fps, 1440 frames / 24s) */}
      <Composition
        id="IkigaiCommercialNFC"
        component={IkigaiCommercialNFC}
        durationInFrames={1440}
        fps={60}
        width={1080}
        height={1920}
      />

      {/* Commercial 02: Soluções Digitais & Motion (1080x1920 @ 60fps, 1440 frames / 24s) */}
      <Composition
        id="IkigaiCommercialDigital"
        component={IkigaiCommercialDigital}
        durationInFrames={1440}
        fps={60}
        width={1080}
        height={1920}
      />
    </>
  );
};
