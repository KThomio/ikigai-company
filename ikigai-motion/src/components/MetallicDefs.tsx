import React from 'react';

export interface MetallicDefsProps {
  idPrefix?: string;
}

/**
 * Reusable SVG defs prepared for glow, metallic specular highlights,
 * light sweep masks, and motion compositing.
 */
export const MetallicDefs: React.FC<MetallicDefsProps> = ({ idPrefix = 'ikigai' }) => {
  return (
    <defs>
      <linearGradient id={`${idPrefix}-metal`} x1="24" y1="20" x2="216" y2="220" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#F2F4F8" />
        <stop offset="48%" stopColor="#C8CCD4" />
        <stop offset="100%" stopColor="#7F8591" />
      </linearGradient>

      <linearGradient id={`${idPrefix}-metal-dim`} x1="40" y1="40" x2="200" y2="200" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#B9BEC8" />
        <stop offset="100%" stopColor="#696E78" />
      </linearGradient>

      <filter id={`${idPrefix}-glow`} x="-25%" y="-25%" width="150%" height="150%">
        <feGaussianBlur stdDeviation="4" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>

      <filter id={`${idPrefix}-specular`} x="-15%" y="-15%" width="130%" height="130%">
        <feGaussianBlur in="SourceAlpha" stdDeviation="2" result="blur" />
        <feSpecularLighting
          in="blur"
          surfaceScale="3"
          specularConstant="0.85"
          specularExponent="22"
          lightingColor="#EAECEF"
          result="specOut"
        >
          <fePointLight x="120" y="32" z="140" />
        </feSpecularLighting>
        <feComposite in="specOut" in2="SourceAlpha" operator="in" result="specMask" />
        <feComposite in="SourceGraphic" in2="specMask" operator="arithmetic" k1="0" k2="1" k3="0.65" k4="0" />
      </filter>
    </defs>
  );
};
