import { useMemo } from 'react';
import type { OdsSelection } from '../engine/state';
import { componentTokens } from '../engine/componentStyles';
import { GlassFilter } from './LiquidGlass';
import { activeStyles } from '../engine/promptEngine';
import { fontStackForRole } from '../engine/fonts';
import { typeSystemById } from '../data/typography';

interface Props {
  sel: OdsSelection;
}

/** Compact live preview that morphs as the user re-orders / weights styles. */
export function MixPreview({ sel }: Props) {
  const activeIds = useMemo(() => {
    const ids = activeStyles(sel).map((a) => a.style.id);
    if (sel.basePhysics) ids.push(sel.basePhysics);
    return ids;
  }, [sel]);

  const t = useMemo(() => componentTokens(sel.visuals, activeIds), [sel.visuals, activeIds]);
  const type = sel.typeSystem ? typeSystemById(sel.typeSystem) : null;
  const headingFont = fontStackForRole(sel, 'heading', type?.headingStack ?? 'var(--font-display)');
  const bodyFont = fontStackForRole(sel, 'body', type?.bodyStack ?? 'var(--font-body)');

  const ranked = activeStyles(sel);
  const dominantName = ranked[0]?.style.name;
  const surfaceKind = dominantName
    ?? (t.brutal ? 'Neo-brutalist' : t.clay ? 'Claymorphic' : t.glass ? 'Liquid glass' : 'Soft material');

  return (
    <div className="mix-preview-stage">
      <GlassFilter id="ods-glass-mix" scale={t.glassScale} />
      <div className="preview-scene">
        <span className="scene-orb orb-a" />
        <span className="scene-orb orb-b" />
        <span className="scene-orb orb-c" />
      </div>

      <div className="mix-preview-body" style={{ color: t.text, fontFamily: bodyFont }}>
        <div className="mix-preview-kicker" style={{ color: t.brutal ? t.text : t.accentDeep }}>
          {surfaceKind} · live
        </div>
        <div
          className="mix-preview-card"
          style={{
            ...t.surface,
            backdropFilter: t.glass
              ? `url(#ods-glass-mix) blur(${sel.visuals.blur}px) saturate(${sel.visuals.saturation}%)`
              : (t.surface.backdropFilter as string | undefined),
            WebkitBackdropFilter: t.glass
              ? `url(#ods-glass-mix) blur(${sel.visuals.blur}px) saturate(${sel.visuals.saturation}%)`
              : (t.surface.WebkitBackdropFilter as string | undefined),
            padding: 20,
          }}
        >
          <h4 style={{ fontFamily: headingFont, fontSize: 18, margin: 0 }}>Your component</h4>
          <p style={{ color: t.muted, fontSize: 13, margin: '4px 0 14px' }}>
            Re-order or weight styles — the button and surface update live.
          </p>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', alignItems: 'center' }}>
            <button style={t.primaryBtn}>Primary</button>
            <button style={t.secondaryBtn}>Cancel</button>
            <span style={t.badge}>New</span>
          </div>
        </div>
      </div>
    </div>
  );
}
