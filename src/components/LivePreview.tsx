import type { CSSProperties } from 'react';
import type { VisualParams } from '../engine/state';
import { GlassFilter, refractionScale } from './LiquidGlass';

interface Props {
  v: VisualParams;
  activeStyleIds: string[];
  headingFont?: string;
  bodyFont?: string;
}

/** A sample card on a real scene; reflects the current visual tokens live. */
export function LivePreview({ v, activeStyleIds, headingFont, bodyFont }: Props) {
  const has = (id: string) => activeStyleIds.includes(id);

  const accent = `hsl(${v.accentHue} 70% 52%)`;
  const borderRgba = `rgba(255,255,255,${(v.borderOpacity / 100).toFixed(2)})`;
  const shadow = `0 ${Math.round(v.elevation * 0.5)}px ${Math.round(v.elevation * 1.3)}px rgba(28,25,20,${(
    v.elevation / 200
  ).toFixed(2)})`;

  const brutal = has('neo-brutalism');
  const clay = has('claymorphism');
  const glass = !brutal && !clay && (has('liquid-glass') || has('apple-hig'));
  const scale = glass ? refractionScale(v.refraction) : 0;

  const backdrop = brutal
    ? 'none'
    : `${glass ? 'url(#ods-glass) ' : ''}blur(${v.blur}px) saturate(${v.saturation}%)`;

  const cardStyle: CSSProperties = {
    borderRadius: clay ? Math.max(v.radius, 34) : v.radius,
    backdropFilter: backdrop,
    WebkitBackdropFilter: backdrop,
    background: brutal
      ? '#fffdf5'
      : clay
        ? `hsl(${v.accentHue} 45% 92%)`
        : glass
          ? 'rgba(255,255,255,0.18)'
          : 'rgba(255,255,255,0.32)',
    border: brutal ? '3px solid #1a1814' : `${v.borderWidth}px solid ${borderRgba}`,
    boxShadow: brutal
      ? '7px 7px 0 0 #1a1814'
      : clay
        ? `inset 0 6px 14px rgba(255,255,255,0.9), inset 0 -8px 14px rgba(120,100,160,0.35), ${shadow}`
        : glass
          ? `${shadow}, inset 0 1px 1px rgba(255,255,255,0.7), inset 0 -1px 2px rgba(255,255,255,0.25)`
          : `${shadow}, inset 0 1px 1px rgba(255,255,255,0.5)`,
    color: '#1a1814',
  };

  const btnStyle: CSSProperties = {
    borderRadius: clay ? 999 : Math.min(v.radius, 14),
    background: brutal ? accent : `linear-gradient(180deg, ${accent}, hsl(${v.accentHue} 65% 44%))`,
    border: brutal ? '3px solid #1a1814' : 'none',
    boxShadow: brutal ? '4px 4px 0 0 #1a1814' : `0 6px 16px hsla(${v.accentHue} 70% 45% / 0.4)`,
    color: '#fff',
    padding: '10px 16px',
    fontWeight: 600,
  };

  return (
    <div className="preview-stage">
      <GlassFilter id="ods-glass" scale={scale} />

      <div className="preview-scene">
        <span className="scene-orb orb-a" />
        <span className="scene-orb orb-b" />
        <span className="scene-orb orb-c" />
      </div>
      <div className="preview-scene-text" aria-hidden>
        Refraction
        <br />
        through glass
      </div>

      {has('aurora-gradient') && <div className="preview-aurora" />}

      <div className={`preview-card ${glass ? 'is-glass' : ''}`} style={cardStyle}>
        {v.noise > 10 && <span className="grain-overlay" style={{ opacity: v.noise / 130 }} />}
        <div className="preview-eyebrow" style={{ color: brutal ? '#1a1814' : accent, position: 'relative' }}>
          {has('generative-ui') ? '✦ Generating' : 'Live preview'}
        </div>
        <h3 style={{ fontSize: 22, position: 'relative', fontFamily: headingFont }}>Your component</h3>
        <p style={{ color: '#3a3630', margin: '8px 0 16px', position: 'relative', fontFamily: bodyFont }}>
          Every slider rewrites these tokens instantly — on a real backdrop, so glass actually refracts.
        </p>
        <div className="row" style={{ alignItems: 'center', position: 'relative' }}>
          <button style={btnStyle}>Primary action</button>
          <span
            style={{
              fontSize: 13,
              color: '#5c574c',
              fontFamily: has('retro-futurism') ? 'ui-monospace, monospace' : 'inherit',
            }}
          >
            {has('retro-futurism') ? '> ready_' : 'secondary'}
          </span>
        </div>
      </div>
    </div>
  );
}
