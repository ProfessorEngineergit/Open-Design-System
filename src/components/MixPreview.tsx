import { useMemo, type CSSProperties } from 'react';
import type { OdsSelection } from '../engine/state';
import { renderStyle } from '../engine/styleRender';
import { activeStyles } from '../engine/promptEngine';
import { fontStackForRole } from '../engine/fonts';
import { typeSystemById } from '../data/typography';

interface Props {
  sel: OdsSelection;
}

/** Pull a representative accent color out of a rendered style's button. */
function accentFrom(buttonStyle: CSSProperties): string {
  const bg = buttonStyle.background ?? buttonStyle.backgroundColor;
  return typeof bg === 'string' ? bg : '#cc785c';
}

/** Live preview that renders the actual lead style (not a generic clay
 *  fallback) and accents it with the supporting + accent style colors. */
export function MixPreview({ sel }: Props) {
  const ranked = useMemo(() => activeStyles(sel), [sel]);
  const leadId = ranked[0]?.style.id ?? sel.basePhysics ?? 'apple-hig';
  const lead = useMemo(() => renderStyle(leadId), [leadId]);

  const type = sel.typeSystem ? typeSystemById(sel.typeSystem) : null;
  const headingFont = fontStackForRole(sel, 'heading', type?.headingStack ?? 'var(--font-display)');
  const bodyFont = fontStackForRole(sel, 'body', type?.bodyStack ?? 'var(--font-body)');

  const surfaceKind = ranked[0]?.style.name ?? 'Foundation only';
  const supporting = ranked.slice(1, 3);

  const eyebrowColor =
    typeof lead.heading.color === 'string' ? lead.heading.color : '#1a1814';
  const bodyColor =
    typeof lead.body.color === 'string' ? lead.body.color : '#5c574c';

  return (
    <div className="mix-preview-stage" style={{ ...lead.scene }}>
      <div className="mix-preview-body" style={{ fontFamily: bodyFont }}>
        <div className="mix-preview-kicker" style={{ color: eyebrowColor }}>
          {surfaceKind} · live
        </div>
        <div
          className="mix-preview-card"
          style={{
            ...lead.surface,
            padding: 18,
            fontFamily: lead.mono ? "'JetBrains Mono', ui-monospace, monospace" : bodyFont,
          }}
        >
          {lead.grain ? <span className="grain-overlay" style={{ opacity: lead.grain }} /> : null}
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
            Click another style to promote it. The preview always shows your Lead.
          </p>
          <div
            style={{
              display: 'flex',
              gap: 10,
              flexWrap: 'wrap',
              alignItems: 'center',
              position: 'relative',
            }}
          >
            <button
              style={{
                ...lead.button,
                padding: '8px 16px',
                fontWeight: 600,
                fontSize: 13,
                cursor: 'pointer',
              }}
            >
              Primary
            </button>
            {supporting.length > 0 && (
              <div className="mix-preview-accents" aria-hidden>
                {supporting.map((s, i) => {
                  const r = renderStyle(s.style.id);
                  return (
                    <span
                      key={s.style.id}
                      className="mix-preview-accent"
                      title={`${i === 0 ? 'Supporting' : 'Accent'} — ${s.style.name}`}
                      style={{ background: accentFrom(r.button), borderColor: bodyColor }}
                    />
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
