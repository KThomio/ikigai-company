import React from 'react';
import { Composition } from 'remotion';
import { IKIGAI_COLORS, IKIGAI_COMPOSITION_SPEC } from './assets/brandTokens';
import { IkigaiLogoMaster, IkigaiLogoMasterProps } from './compositions/IkigaiLogoMaster';

export const RemotionRoot: React.FC = () => {
  return (
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
  );
};
