import { renderStyle } from '../engine/styleRender';

interface Props {
  styleId: string;
  /** Compact trims the padding so it fits in a grid card. */
  compact?: boolean;
}

/** A tiny live sample — heading, body, button — in the real style. */
export function StyleThumb({ styleId, compact }: Props) {
  const s = renderStyle(styleId);
  return (
    <div className="style-thumb" style={s.scene}>
      <div
        className="style-thumb-card"
        style={{
          ...s.surface,
          position: 'relative',
          padding: compact ? '12px 14px' : '16px 18px',
          width: '100%',
          maxWidth: 220,
          overflow: 'hidden',
          fontFamily: s.mono ? "'JetBrains Mono', ui-monospace, monospace" : undefined,
        }}
      >
        {s.grain ? <span className="grain-overlay" style={{ opacity: s.grain }} /> : null}
        <div
          style={{
            ...s.heading,
            fontSize: compact ? 14 : 16,
            lineHeight: 1.1,
            marginBottom: 4,
            position: 'relative',
          }}
        >
          Aa Design
        </div>
        <div style={{ ...s.body, fontSize: 11, lineHeight: 1.4, marginBottom: 10, position: 'relative' }}>
          Live sample of this style.
        </div>
        <span
          style={{
            ...s.button,
            display: 'inline-block',
            fontSize: 11,
            fontWeight: 600,
            padding: '5px 12px',
            position: 'relative',
          }}
        >
          Button
        </span>
      </div>
    </div>
  );
}
