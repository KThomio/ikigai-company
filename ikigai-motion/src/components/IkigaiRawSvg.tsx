import React from 'react';
import { MetallicDefs } from './MetallicDefs';

/**
 * Exact raw path definitions extracted 1:1 from clients/ikigai-company/assets/images/ikigai-symbol.svg
 * without modifying coordinates or geometric proportions.
 */
export const IKIGAI_SVG_PATHS = {
  corners: [
    'M 48 72 V 48 H 72',
    'M 168 48 H 192 V 72',
    'M 192 168 V 192 H 168',
    'M 72 192 H 48 V 168',
  ],
  sideLobes: [
    'M 76 74 A 48 48 0 0 0 76 166',
    'M 88 86 A 34 34 0 0 0 88 154',
    'M 164 74 A 48 48 0 0 1 164 166',
    'M 152 86 A 34 34 0 0 1 152 154',
  ],
  underlayMaskPaths: [
    'M 74 84 A 48 48 0 0 1 166 84',
    'M 86 96 A 34 34 0 0 1 154 96',
    'M 74 156 A 48 48 0 0 0 166 156',
    'M 86 144 A 34 34 0 0 0 154 144',
    'M 86 96 L 154 144',
    'M 154 96 L 86 144',
  ],
  mainLobes: [
    'M 74 84 A 48 48 0 0 1 166 84',
    'M 86 96 A 34 34 0 0 1 154 96',
    'M 74 156 A 48 48 0 0 0 166 156',
    'M 86 144 A 34 34 0 0 0 154 144',
    'M 90 94 L 150 146',
  ],
  diagonalPass: 'M 150 94 L 90 146',
} as const;

export interface IkigaiRawSvgProps {
  size?: number;
  backgroundCutoutColor?: string;
  idPrefix?: string;
  useSpecularFilter?: boolean;
}

/**
 * Official IKIGAI COMPANY geometric emblem SVG wrapper.
 * Geometry matches public/ikigai-symbol.svg strictly.
 */
export const IkigaiRawSvg: React.FC<IkigaiRawSvgProps> = ({
  size = 440,
  backgroundCutoutColor = '#0D0E11',
  idPrefix = 'ikigai',
  useSpecularFilter = false,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 240 240"
      width={size}
      height={size}
      fill="none"
      role="img"
      aria-label="Símbolo Geométrico IKIGAI COMPANY"
      filter={useSpecularFilter ? `url(#${idPrefix}-specular)` : undefined}
    >
      <MetallicDefs idPrefix={idPrefix} />

      {/* 4 Cantoneiras Técnicas Ortogonais */}
      <g
        id="ikigai-layer-corners"
        stroke={`url(#${idPrefix}-metal)`}
        strokeWidth={6.5}
        strokeLinecap="square"
        strokeLinejoin="miter"
      >
        {IKIGAI_SVG_PATHS.corners.map((d, index) => (
          <path key={`corner-${index}`} d={d} />
        ))}
      </g>

      {/* Lobos Concêntricos Esquerdo e Direito (Segundo Plano) */}
      <g
        id="ikigai-layer-side-lobes"
        stroke={`url(#${idPrefix}-metal-dim)`}
        strokeWidth={9}
        strokeLinecap="round"
      >
        {IKIGAI_SVG_PATHS.sideLobes.map((d, index) => (
          <path key={`side-lobe-${index}`} d={d} />
        ))}
      </g>

      {/* Recorte de Fundo para Entrelaçamento */}
      <g
        id="ikigai-layer-underlay"
        stroke={backgroundCutoutColor}
        strokeWidth={15}
        strokeLinecap="round"
      >
        {IKIGAI_SVG_PATHS.underlayMaskPaths.map((d, index) => (
          <path key={`underlay-${index}`} d={d} />
        ))}
      </g>

      {/* Lobos Concêntricos Superior e Inferior + Diagonal Primária */}
      <g
        id="ikigai-layer-main-lobes"
        stroke={`url(#${idPrefix}-metal)`}
        strokeWidth={9}
        strokeLinecap="round"
      >
        {IKIGAI_SVG_PATHS.mainLobes.map((d, index) => (
          <path key={`main-lobe-${index}`} d={d} />
        ))}
      </g>

      {/* Passagem Superior da Diagonal Oposta para Efeito de Entrelaçamento */}
      <g id="ikigai-layer-diagonal-pass">
        <path
          d={IKIGAI_SVG_PATHS.diagonalPass}
          stroke={backgroundCutoutColor}
          strokeWidth={15}
          strokeLinecap="round"
        />
        <path
          d={IKIGAI_SVG_PATHS.diagonalPass}
          stroke={`url(#${idPrefix}-metal)`}
          strokeWidth={9}
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
};
