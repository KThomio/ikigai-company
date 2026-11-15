import { Easing, interpolate, spring } from 'remotion';

export const MOTION_TIMING = {
  bpm: 120,
  fps: 60,
  framesPerBeat: 30,
  framesPerBar: 120,
  totalFrames: 480,
} as const;

export const MOTION_PALETTE = {
  obsidian: '#0D0E11',
  carbon: '#13151A',
  graphite: '#1C1F26',
  offWhite: '#F5F6F8',
  platinum: '#EAECEF',
  silver: '#C4C8D0',
  steel: '#8C919C',
} as const;

/**
 * Exponential out curve for crisp mechanical snaps without bounce.
 */
export function expoOut(t: number): number {
  const clamped = Math.min(1, Math.max(0, t));
  return clamped === 1 ? 1 : 1 - Math.pow(2, -10 * clamped);
}

/**
 * Exponential in-out curve for geometric wipes and collapses.
 */
export function expoInOut(t: number): number {
  const clamped = Math.min(1, Math.max(0, t));
  if (clamped === 0) return 0;
  if (clamped === 1) return 1;
  return clamped < 0.5
    ? Math.pow(2, 20 * clamped - 10) / 2
    : (2 - Math.pow(2, -20 * clamped + 10)) / 2;
}

/**
 * Returns 0-based beat index (0..15) for a given frame at 120 BPM / 60 FPS.
 */
export function getBeatIndex(frame: number): number {
  return Math.floor(Math.max(0, frame) / MOTION_TIMING.framesPerBeat);
}

/**
 * Normalized progress [0..1] inside a specific 30-frame beat, eased cleanly.
 */
export function getBeatProgress(
  frame: number,
  beatIndex: number,
  durationFrames: number = MOTION_TIMING.framesPerBeat,
  easing: (t: number) => number = expoOut,
): number {
  const start = beatIndex * MOTION_TIMING.framesPerBeat;
  const raw = interpolate(frame, [start, start + durationFrames], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  return easing(raw);
}

/**
 * Critically damped snap spring (no overshoot/bounce) synchronized to beat trigger frames.
 */
export function snapSpring(frame: number, fps: number, triggerFrame: number): number {
  return spring({
    frame: Math.max(0, frame - triggerFrame),
    fps,
    config: {
      damping: 24,
      stiffness: 240,
      mass: 0.7,
      overshootClamping: true,
    },
  });
}

/**
 * Linear clamped window helper for intra-act sequencing.
 */
export function windowProgress(
  localFrame: number,
  startFrame: number,
  endFrame: number,
  easing = Easing.out(Easing.exp),
): number {
  return interpolate(localFrame, [startFrame, endFrame], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing,
  });
}
