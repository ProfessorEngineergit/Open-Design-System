import { useMemo, useState, type CSSProperties } from 'react';
import type { OdsSelection } from '../engine/state';
import { componentTokens } from '../engine/componentStyles';
import { GlassFilter } from './LiquidGlass';
import { activeStyles } from '../engine/promptEngine';
import { fontStackForRole } from '../engine/fonts';
import { typeSystemById } from '../data/typography';

interface Props {
  sel: OdsSelection;
}

type NodeId =
  | 'primary'
  | 'secondary'
  | 'ghost'
  | 'input'
  | 'toggle'
  | 'badge'
  | 'card'
  | 'nav'
  | 'list'
  | 'modal';

const UNITLESS = new Set([
  'opacity',
  'fontWeight',
  'flex',
  'zIndex',
  'lineHeight',
  'flexGrow',
  'flexShrink',
  'order',
]);

/** Turn a React style object into readable CSS for the inspector. */
function cssText(style: CSSProperties): string {
  return Object.entries(style)
    .filter(([, val]) => val !== undefined && val !== '')
    .map(([key, val]) => {
      const prop = key.replace(/[A-Z]/g, (m) => '-' + m.toLowerCase());
      const out =
        typeof val === 'number' && !UNITLESS.has(key) ? `${val}px` : String(val);
      return `${prop}: ${out};`;
    })
    .join('\n');
}

interface NodeMeta {
  label: string;
  hint: string;
  style: CSSProperties;
}

export function ComponentCanvas({ sel }: Props) {
  const v = sel.visuals;
  const activeIds = useMemo(() => {
    const ids = activeStyles(sel).map((a) => a.style.id);
    if (sel.basePhysics) ids.push(sel.basePhysics);
    return ids;
  }, [sel]);

  const t = useMemo(() => componentTokens(v, activeIds), [v, activeIds]);

  const type = sel.typeSystem ? typeSystemById(sel.typeSystem) : null;
  const headingFont = fontStackForRole(sel, 'heading', type?.headingStack ?? 'var(--font-display)');
  const bodyFont = fontStackForRole(sel, 'body', type?.bodyStack ?? 'var(--font-body)');

  const [selected, setSelected] = useState<NodeId>('primary');
  const [toggleOn, setToggleOn] = useState(true);

  const surfaceKind = t.brutal ? 'Neo-brutalist' : t.clay ? 'Claymorphic' : t.glass ? 'Liquid glass' : 'Soft material';

  const nodes: Record<NodeId, NodeMeta> = {
    primary: { label: 'Primary button', hint: 'Accent-filled call to action.', style: t.primaryBtn },
    secondary: { label: 'Secondary button', hint: 'Quiet, bordered alternative.', style: t.secondaryBtn },
    ghost: { label: 'Ghost button', hint: 'Text-only, lowest emphasis.', style: t.ghostBtn },
    input: { label: 'Text input', hint: 'Field with focus affordance.', style: t.input },
    toggle: { label: 'Toggle', hint: 'On/off switch — click to test.', style: t.toggleTrack(toggleOn) },
    badge: { label: 'Badge', hint: 'Compact status pill.', style: t.badge },
    card: { label: 'Stat card', hint: `${surfaceKind} surface.`, style: t.surface },
    nav: { label: 'Nav bar', hint: `${surfaceKind} surface, horizontal.`, style: t.surface },
    list: { label: 'List row', hint: `${surfaceKind} surface with avatar.`, style: t.surface },
    modal: { label: 'Dialog', hint: `${surfaceKind} surface, elevated.`, style: t.surface },
  };

  const meta = nodes[selected];

  const knob: CSSProperties = {
    position: 'absolute',
    top: 3,
    left: toggleOn ? 23 : 3,
    width: 20,
    height: 20,
    borderRadius: 999,
    background: '#fff',
    boxShadow: '0 1px 3px rgba(28,25,20,0.4)',
    transition: 'left 0.18s ease',
  };

  const select = (id: NodeId) => (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelected(id);
  };

  const nodeClass = (id: NodeId) => `canvas-node ${selected === id ? 'is-selected' : ''}`;

  return (
    <div className="canvas-layout">
      <div className="canvas-stage">
        <GlassFilter id="ods-glass" scale={t.glassScale} />
        <div className="preview-scene">
          <span className="scene-orb orb-a" />
          <span className="scene-orb orb-b" />
          <span className="scene-orb orb-c" />
        </div>

        <div className="canvas-grid" style={{ color: t.text, fontFamily: bodyFont }}>
          {/* Nav bar */}
          <div
            className={nodeClass('nav')}
            data-label={nodes.nav.label}
            onClick={select('nav')}
            style={{ ...t.surface, padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 14 }}
          >
            <span style={{ fontWeight: 700, fontFamily: headingFont }}>Acme</span>
            <span style={{ color: t.muted, fontSize: 14 }}>Overview</span>
            <span style={{ color: t.muted, fontSize: 14 }}>Activity</span>
            <span style={{ flex: 1 }} />
            <span style={t.badge}>Pro</span>
          </div>

          {/* Controls cluster */}
          <div className="canvas-row">
          <div
            className={nodeClass('primary')}
            data-label={nodes.primary.label}
            onClick={select('primary')}
          >
            <button style={t.primaryBtn}>Get started</button>
          </div>
          <div
            className={nodeClass('secondary')}
            data-label={nodes.secondary.label}
            onClick={select('secondary')}
          >
            <button style={t.secondaryBtn}>Cancel</button>
          </div>
          <div
            className={nodeClass('ghost')}
            data-label={nodes.ghost.label}
            onClick={select('ghost')}
          >
            <button style={t.ghostBtn}>Learn more</button>
          </div>

          {/* Toggle */}
          <div
            className={nodeClass('toggle')}
            data-label={nodes.toggle.label}
            onClick={(e) => {
              select('toggle')(e);
              setToggleOn((x) => !x);
            }}
          >
            <span style={t.toggleTrack(toggleOn)}>
              <span style={knob} />
            </span>
          </div>

          {/* Badge */}
          <div
            className={nodeClass('badge')}
            data-label={nodes.badge.label}
            onClick={select('badge')}
          >
            <span style={t.badge}>New</span>
          </div>
          </div>

          {/* Input */}
          <div
            className={nodeClass('input')}
            data-label={nodes.input.label}
            onClick={select('input')}
          >
            <input style={t.input} placeholder="you@example.com" />
          </div>

          {/* Surfaces cluster */}
          <div className="canvas-row two">
          {/* Stat card */}
          <div
            className={nodeClass('card')}
            data-label={nodes.card.label}
            onClick={select('card')}
            style={{ ...t.surface, padding: 18 }}
          >
            <div style={{ color: t.muted, fontSize: 13 }}>Revenue</div>
            <div style={{ fontSize: 28, fontWeight: 700, fontFamily: headingFont }}>$48.2k</div>
            <div style={{ color: t.accentDeep, fontSize: 13, fontWeight: 600 }}>↑ 12.4%</div>
          </div>

          {/* List row */}
          <div
            className={`${nodeClass('list')} node-half`}
            data-label={nodes.list.label}
            onClick={select('list')}
            style={{ ...t.surface, padding: 14, display: 'flex', alignItems: 'center', gap: 12 }}
          >
            <span
              style={{
                width: 36,
                height: 36,
                borderRadius: 999,
                background: `linear-gradient(135deg, ${t.accent}, ${t.accentDeep})`,
                flex: 'none',
              }}
            />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontWeight: 600 }}>Mara Vance</span>
              <span style={{ color: t.muted, fontSize: 13 }}>Invited you</span>
            </div>
          </div>
          </div>

          {/* Dialog */}
          <div
            className={nodeClass('modal')}
            data-label={nodes.modal.label}
            onClick={select('modal')}
            style={{ ...t.surface, padding: 20 }}
          >
            <div style={{ fontSize: 17, fontWeight: 700, fontFamily: headingFont }}>Delete project?</div>
            <p style={{ color: t.muted, fontSize: 14, margin: '6px 0 14px' }}>
              This can't be undone. All boards will be removed.
            </p>
            <div style={{ display: 'flex', gap: 10 }}>
              <button style={t.secondaryBtn}>Keep</button>
              <button style={t.primaryBtn}>Delete</button>
            </div>
          </div>
        </div>
      </div>

      <aside className="canvas-inspector panel">
        <div className="inspector-kicker">{surfaceKind} system</div>
        <h3 className="inspector-title">{meta.label}</h3>
        <p className="muted inspector-hint">{meta.hint}</p>

        <div className="inspector-swatches">
          <span className="swatch" style={{ background: t.accent }} title="accent" />
          <span className="swatch" style={{ background: t.accentDeep }} title="accent deep" />
          <span className="swatch" style={{ background: t.text }} title="text" />
          <span className="swatch swatch-ring" style={{ background: t.muted }} title="muted" />
        </div>

        <div className="inspector-css-head">Resolved CSS</div>
        <pre className="inspector-css">{cssText(meta.style)}</pre>

        <p className="faint inspector-foot">
          Click any element on the canvas to inspect it. Values are driven live by the Mixer.
        </p>
      </aside>
    </div>
  );
}
