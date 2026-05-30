import { useState, type DragEvent } from 'react';
import { CATEGORIES } from '../data/categories';
import { stylesByCategory, styleById } from '../data/styles';
import { SHAPE_OPTIONS } from '../data/shapes';
import { TEXTURE_OPTIONS } from '../data/textures';
import { getCoaching } from '../engine/coaching';
import { StyleThumb } from '../components/StyleThumb';
import { MixPreview } from '../components/MixPreview';
import type { OdsSelection } from '../engine/state';

interface Props {
  sel: OdsSelection;
  update: (patch: Partial<OdsSelection>) => void;
}

export function StyleMixStep({ sel, update }: Props) {
  const [dragOverLook, setDragOverLook] = useState(false);

  // One look at a time now — the look is whatever has the highest weight.
  const lookId = Object.entries(sel.styleWeights).sort((a, b) => b[1] - a[1])[0]?.[0] ?? null;
  const look = lookId ? styleById(lookId) : null;

  const setLook = (id: string | null) => update({ styleWeights: id ? { [id]: 100 } : {} });
  const setShape = (id: string) => update({ shape: sel.shape === id ? null : id });
  const setTexture = (id: string) => update({ texture: sel.texture === id ? null : id });

  const onDragStart = (id: string) => (e: DragEvent) => {
    e.dataTransfer.setData('text/plain', id);
    e.dataTransfer.effectAllowed = 'copy';
  };
  const onLookDrop = (e: DragEvent) => {
    e.preventDefault();
    const id = e.dataTransfer.getData('text/plain');
    if (id && styleById(id)) setLook(id);
    setDragOverLook(false);
  };

  const coaching = getCoaching(sel);
  const mixCats = CATEGORIES.filter((c) => c.selection === 'multi');

  return (
    <section>
      <h2 className="step-title">Mix your look</h2>
      <p className="step-sub muted">
        Pick one look on the left — that's the base. Then layer a shape and a texture over it. All three genuinely
        stack, so the preview on the right is what you'll actually get.
      </p>

      <div className="mix-layout-v2">
        <div className="mix-catalog">
          {mixCats.map((cat) => (
            <div key={cat.id} className="cat-block">
              <div className="cat-head">
                <h3>{cat.label}</h3>
                <span className="faint">{cat.description}</span>
              </div>
              <div className="catalog-grid">
                {stylesByCategory(cat.id).map((s) => {
                  const active = lookId === s.id;
                  return (
                    <div
                      key={s.id}
                      className={`catalog-card ${active ? 'on' : ''}`}
                      draggable
                      onDragStart={onDragStart(s.id)}
                      onClick={() => setLook(active ? null : s.id)}
                      title={active ? 'Your look — click to clear' : 'Click to make this your look'}
                    >
                      <StyleThumb styleId={s.id} compact />
                      <div className="catalog-meta">
                        <strong>{s.name}</strong>
                        <span className="muted catalog-phil">{s.philosophy}</span>
                      </div>
                      {active && <span className="catalog-rank tier-0" aria-hidden>✓</span>}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <aside className="mix-priority">
          <div className="priority-head">
            <h3>Your look</h3>
            <span className="faint">One base, plus a shape and a texture on top.</span>
          </div>

          {/* Base look */}
          <div
            className={`look-slot ${dragOverLook ? 'hover' : ''} ${look ? 'filled' : ''}`}
            onDragOver={(e) => {
              e.preventDefault();
              setDragOverLook(true);
            }}
            onDragLeave={() => setDragOverLook(false)}
            onDrop={onLookDrop}
          >
            {look ? (
              <div className="slot-filled">
                <StyleThumb styleId={look.id} compact />
                <div className="slot-meta">
                  <strong>{look.name}</strong>
                  <span className="muted slot-philosophy">{look.philosophy}</span>
                </div>
                <button className="slot-remove" onClick={() => setLook(null)} title="Clear">
                  ✕
                </button>
              </div>
            ) : (
              <div className="slot-empty">Click or drag a look here</div>
            )}
          </div>

          {/* Shape axis */}
          <div className="axis-block">
            <div className="axis-head">
              <span className="axis-label">Shape</span>
              <span className="faint">How corners are treated</span>
            </div>
            <div className="axis-chips">
              {SHAPE_OPTIONS.map((s) => (
                <button
                  key={s.id}
                  className={`axis-chip ${sel.shape === s.id ? 'on' : ''}`}
                  onClick={() => setShape(s.id)}
                  title={s.hint}
                >
                  <span
                    className="axis-chip-glyph"
                    style={{ borderRadius: s.organic ?? Math.min(s.radius, 18) }}
                  />
                  {s.name}
                </button>
              ))}
            </div>
          </div>

          {/* Texture axis */}
          <div className="axis-block">
            <div className="axis-head">
              <span className="axis-label">Texture</span>
              <span className="faint">Overlay on the surface</span>
            </div>
            <div className="axis-chips">
              {TEXTURE_OPTIONS.map((t) => (
                <button
                  key={t.id}
                  className={`axis-chip ${sel.texture === t.id ? 'on' : ''}`}
                  onClick={() => setTexture(t.id)}
                  title={t.hint}
                >
                  <span className={`axis-chip-tex tex-${t.kind}`} />
                  {t.name}
                </button>
              ))}
            </div>
          </div>

          <MixPreview sel={sel} />

          <div className="coach-card panel">
            <div className="coach-badge">Coach</div>
            <h3 className="coach-headline">{coaching.headline}</h3>
            <p className="muted coach-tip">{coaching.tip}</p>
          </div>

          {coaching.recommendations.length > 0 && (
            <div className="coach-card panel">
              <div className="coach-badge">Looks you might like</div>
              <div className="rec-list">
                {coaching.recommendations.map((r) => (
                  <button key={r.id} className="rec-item" onClick={() => setLook(r.id)}>
                    <StyleThumb styleId={r.id} compact />
                    <div className="rec-meta">
                      <strong>{r.name}</strong>
                      <span className="faint">{r.reason}</span>
                    </div>
                    <span className="rec-add">→</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </aside>
      </div>
    </section>
  );
}
