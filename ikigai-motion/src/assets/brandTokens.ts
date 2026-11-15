import { loadFont as loadMontserrat } from '@remotion/google-fonts/Montserrat';
import { loadFont as loadPlusJakartaSans } from '@remotion/google-fonts/PlusJakartaSans';
import { loadFont as loadJetBrainsMono } from '@remotion/google-fonts/JetBrainsMono';

export const IKIGAI_COLORS = {
  obsidian: '#0D0E11',
  carbon: '#13151A',
  graphite: '#1C1F26',
  slate: '#353840',
  light: '#F5F6F8',
  platinum: '#EAECEF',
  silver: '#C4C8D0',
  steel: '#8C919C',
} as const;

export const IKIGAI_COMPOSITION_SPEC = {
  id: 'IkigaiLogoReveal',
  width: 1080,
  height: 1080,
  fps: 60,
  durationSeconds: 8,
  durationInFrames: 480,
} as const;

const montserrat = loadMontserrat('normal', {
  weights: ['500', '600', '700', '800'],
  subsets: ['latin'],
});

const plusJakarta = loadPlusJakartaSans('normal', {
  weights: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
});

const jetbrainsMono = loadJetBrainsMono('normal', {
  weights: ['400', '500', '600'],
  subsets: ['latin'],
});

export const IKIGAI_FONTS = {
  display: montserrat.fontFamily,
  sans: plusJakarta.fontFamily,
  mono: jetbrainsMono.fontFamily,
} as const;
