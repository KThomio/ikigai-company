import { interpolate, spring, Easing } from 'remotion';
import { evolvePath, getLength, interpolatePath } from '@remotion/paths';
import { noise2D, noise3D } from '@remotion/noise';

export { Trail, CameraMotionBlur } from '@remotion/motion-blur';

export interface StrokeRevealOptions {
  path: string;
  progress: number;
}

/**
 * Computes stroke-dasharray and stroke-dashoffset via @remotion/paths
 * for crisp SVG stroke reveal animations.
 */
export function getStrokeRevealProps({ path, progress }: StrokeRevealOptions): {
  strokeDasharray: string;
  strokeDashoffset: number;
} {
  const clamped = Math.min(1, Math.max(0, progress));
  return evolvePath(clamped, path);
}

/**
 * Returns total Euclidean length of an SVG path string.
 */
export function getPathTotalLength(path: string): number {
  return getLength(path);
}

/**
 * Morphs between two SVG path strings cleanly at normalized progress [0..1].
 */
export function getMorphPath(fromPath: string, toPath: string, progress: number): string {
  const clamped = Math.min(1, Math.max(0, progress));
  return interpolatePath(clamped, fromPath, toPath);
}

/**
 * Clamped linear/eased range interpolation helper.
 */
export function clampedInterpolate(
  frame: number,
  inputRange: [number, number],
  outputRange: [number, number],
  easing = Easing.cubic,
): number {
  return interpolate(frame, inputRange, outputRange, {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing,
  });
}

/**
 * Smooth precision spring preset calibrated for 60 FPS identity motion.
 */
export function precisionSpring(frame: number, fps: number, delayFrames = 0): number {
  return spring({
    frame: Math.max(0, frame - delayFrames),
    fps,
    config: {
      damping: 20,
      stiffness: 140,
      mass: 0.9,
    },
  });
}

/**
 * Deterministic 2D / 3D Simplex noise helpers for particle & specular light drift.
 */
export function sampleParticleNoise2D(seed: string, x: number, y: number): number {
  return noise2D(seed, x, y);
}

export function sampleFieldNoise3D(seed: string, x: number, y: number, z: number): number {
  return noise3D(seed, x, y, z);
}
