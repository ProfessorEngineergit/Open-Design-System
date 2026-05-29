import type { CSSProperties } from 'react';
import type { VisualParams } from './state';
import { refractionScale } from '../components/LiquidGlass';

const INK = '#1a1814';

export interface ComponentTokens {
  glass: boolean;
  brutal: boolean;
  clay: boolean;
  glassScale: number;
  accent: string;
  accentDeep: string;
  text: string;
  muted: string;
  divider: string;
  surface: CSSProperties;
  primaryBtn: CSSProperties;
  secondaryBtn: CSSProperties;
  ghostBtn: CSSProperties;
  input: CSSProperties;
  badge: CSSProperties;
  toggleTrack: (on: boolean) => CSSProperties;
}

/** Take the current settings and hand back ready-to-use styles for every component. */
export function componentTokens(v: VisualParams, active: string[]): ComponentTokens {
  const has = (id: string) => active.includes(id);
  const brutal = has('neo-brutalism');
  const clay = has('claymorphism');
  const glass = !brutal && !clay && (has('liquid-glass') || has('apple-hig'));
  const glassScale = glass ? refractionScale(v.refraction) : 0;

  const accent = `hsl(${v.accentHue} 70% 52%)`;
  const accentDeep = `hsl(${v.accentHue} 65% 44%)`;
  const accentWash = `hsla(${v.accentHue} 60% 50% / 0.12)`;
  const borderRgba = `rgba(255,255,255,${(v.borderOpacity / 100).toFixed(2)})`;
  const shadow = `0 ${Math.round(v.elevation * 0.5)}px ${Math.round(v.elevation * 1.3)}px rgba(28,25,20,${(
    v.elevation / 200
  ).toFixed(2)})`;
  const backdrop = brutal
    ? 'none'
    : `${glass ? 'url(#ods-glass) ' : ''}blur(${v.blur}px) saturate(${v.saturation}%)`;
  const radius = clay ? Math.max(v.radius, 28) : v.radius;
  const smallRadius = clay ? 999 : Math.min(v.radius, 14);

  const surface: CSSProperties = {
    borderRadius: radius,
    backdropFilter: backdrop,
    WebkitBackdropFilter: backdrop,
    background: brutal ? '#fffdf5' : clay ? `hsl(${v.accentHue} 45% 93%)` : glass ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.66)',
    border: brutal ? `3px solid ${INK}` : `${v.borderWidth}px solid ${borderRgba}`,
    boxShadow: brutal
      ? `6px 6px 0 0 ${INK}`
      : clay
        ? `inset 0 6px 14px rgba(255,255,255,0.9), inset 0 -8px 14px rgba(120,100,160,0.32), ${shadow}`
        : glass
          ? `${shadow}, inset 0 1px 1px rgba(255,255,255,0.7)`
          : `${shadow}, inset 0 1px 1px rgba(255,255,255,0.5)`,
    color: INK,
  };

  const primaryBtn: CSSProperties = {
    borderRadius: smallRadius,
    background: brutal ? accent : `linear-gradient(180deg, ${accent}, ${accentDeep})`,
    border: brutal ? `3px solid ${INK}` : 'none',
    boxShadow: brutal ? `4px 4px 0 0 ${INK}` : `0 6px 16px hsla(${v.accentHue} 70% 45% / 0.4)`,
    color: '#fff',
    padding: '10px 18px',
    fontWeight: 600,
    cursor: 'pointer',
  };

  const secondaryBtn: CSSProperties = {
    borderRadius: smallRadius,
    background: brutal ? '#fff' : 'rgba(255,255,255,0.55)',
    border: brutal ? `3px solid ${INK}` : `1px solid rgba(28,25,20,0.16)`,
    boxShadow: brutal ? `4px 4px 0 0 ${INK}` : 'none',
    color: INK,
    padding: '10px 18px',
    fontWeight: 600,
    cursor: 'pointer',
  };

  const ghostBtn: CSSProperties = {
    borderRadius: smallRadius,
    background: 'transparent',
    border: 'none',
    color: accentDeep,
    padding: '10px 14px',
    fontWeight: 600,
    cursor: 'pointer',
  };

  const input: CSSProperties = {
    borderRadius: Math.min(radius, 12),
    background: 'rgba(255,255,255,0.7)',
    border: brutal ? `3px solid ${INK}` : `1px solid rgba(28,25,20,0.16)`,
    padding: '11px 14px',
    color: INK,
    width: '100%',
  };

  const badge: CSSProperties = {
    borderRadius: 999,
    background: brutal ? accent : accentWash,
    border: brutal ? `2px solid ${INK}` : 'none',
    color: brutal ? '#fff' : accentDeep,
    padding: '4px 12px',
    fontSize: 12,
    fontWeight: 700,
    letterSpacing: '0.02em',
  };

  const toggleTrack = (on: boolean): CSSProperties => ({
    display: 'inline-flex',
    width: 46,
    height: 26,
    borderRadius: 999,
    background: on ? accent : 'rgba(28,25,20,0.18)',
    border: brutal ? `2px solid ${INK}` : 'none',
    position: 'relative',
    transition: 'background 0.18s ease',
    flex: 'none',
  });

  return {
    glass,
    brutal,
    clay,
    glassScale,
    accent,
    accentDeep,
    text: INK,
    muted: '#5c574c',
    divider: 'rgba(28,25,20,0.1)',
    surface,
    primaryBtn,
    secondaryBtn,
    ghostBtn,
    input,
    badge,
    toggleTrack,
  };
}
