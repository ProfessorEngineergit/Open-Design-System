import { useMemo } from 'react';
import type { OdsSelection } from '../engine/state';
import { renderStyle } from '../engine/styleRender';
import { activeStyles } from '../engine/promptEngine';
import { fontStackForRole } from '../engine/fonts';
import { typeSystemById } from '../data/typography';
import { shapeById } from '../data/shapes';
import { textureById } from '../data/textures';

interface Props {
  sel: OdsSelection;
}

/** Live preview that genuinely composes the three things you picked: the base
 *  look (its scene, surface, button, type) with your shape and texture layered
 *  on top. What you see here is what the prompt will describe. */
export function MixPreview({ sel }: Props) {
  const ranked = useMemo(() => activeStyles(sel), [sel]);
  const leadId = ranked[0]?.style.id ?? sel.basePhysics ?? 'apple-hig';
  const lead = useMemo(() => renderStyle(leadId), [leadId]);

  const type = sel.typeSystem ? typeSystemById(sel.typeSystem) : null;
  const headingFont = fontStackForRole(sel, 'heading', type?.headingStack ?? 'var(--font-display)');
  const bodyFont = fontStackForRole(sel, 'body', type?.bodyStack ?? 'var(--font-body)');

  const shape = sel.shape ? shapeById(sel.shape) : null;
  const texture = sel.texture ? textureById(sel.texture) : null;

  const lookName = ranked[0]?.style.name ?? 'Foundation only';
  const kicker = [lookName, shape?.name, texture && texture.id !== 'clean' ? texture.name : null]
    .filter(Boolean)
    .join(' · ');

  // Shape overrides the look's own corners.
  const surfaceRadius = shape ? (shape.organic ?? shape.radius) : (lead.surface.borderRadius as number | string);
  const buttonRadius = shape ? shape.buttonRadius : (lead.button.borderRadius as number | string);

  // Texture overrides the look's own grain.
  const grain = texture ? texture.grain : (lead.grain ?? 0);
  const scanlines = texture?.kind === 'scanlines';

  const eyebrowColor = typeof lead.heading.color === 'string' ? lead.heading.color : '#1a1814';

  return (
    <div className="mix-preview-stage" style={{ ...lead.scene }}>
      <div className="mix-preview-body" style={{ fontFamily: bodyFont }}>
        <div className="mix-preview-kicker" style={{ color: eyebrowColor }}>
          {kicker} · live
        </div>
        <div
          className="mix-preview-card"
          style={{
            ...lead.surface,
            borderRadius: surfaceRadius,
            padding: 18,
            fontFamily: lead.mono ? "'JetBrains Mono', ui-monospace, monospace" : bodyFont,
          }}
        >
          {grain > 0 && <span className="grain-overlay" style={{ opacity: grain }} />}
          {scanlines && <span className="scanline-overlay" />}
          <h4
            style={{
              ...lead.heading,
              fontFamily: lead.heading.fontFamily ?? headingFont,
              fontSize: 18,
              margin: 0,
              position: 'relative',
            }}
          >
            Your component
          </h4>
          <p
            style={{
              ...lead.body,
              fontFamily: lead.body.fontFamily ?? bodyFont,
              fontSize: 13,
              margin: '4px 0 14px',
              position: 'relative',
            }}
          >
            Look, shape and texture — all three layered together, live.
          </p>
          <div
            style={{ display: 'flex', gap: 10, flexWrap: 'wrap', alignItems: 'center', position: 'relative' }}
          >
            <button
              style={{
                ...lead.button,
                borderRadius: buttonRadius,
                padding: '8px 16px',
                fontWeight: 600,
                fontSize: 13,
                cursor: 'pointer',
              }}
            >
              Primary
            </button>
            <span
              style={{
                ...lead.surface,
                background: 'transparent',
                boxShadow: 'none',
                borderRadius: buttonRadius,
                padding: '7px 14px',
                fontSize: 13,
                fontWeight: 600,
              }}
            >
              Secondary
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
