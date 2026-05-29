import { useState, type DragEvent } from 'react';
import { CATEGORIES } from '../data/categories';
import { stylesByCategory, styleById } from '../data/styles';
import { getCoaching } from '../engine/coaching';
import { StyleThumb } from '../components/StyleThumb';
import { MixPreview } from '../components/MixPreview';
import type { OdsSelection } from '../engine/state';

interface Props {
  sel: OdsSelection;
  update: (patch: Partial<OdsSelection>) => void;
}

const SLOT_WEIGHTS = [85, 55, 30] as const;
const SLOT_LABELS = ['Lead', 'Supporting', 'Accent'] as const;
const SLOT_HINTS = [
  'Drives the whole look',
  'Adds a second voice',
  'A grace note, not a fight',
];

/** Returns the active style ids ordered by weight (strongest first). */
function rankedIds(weights: Record<string, number>): string[] {
  return Object.entries(weights)
    .sort((a, b) => b[1] - a[1])
    .map(([id]) => id);
}

export function StyleMixStep({ sel, update }: Props) {
  const [dragging, setDragging] = useState<string | null>(null);
  const [hoverSlot, setHoverSlot] = useState<number | null>(null);

  const ranked = rankedIds(sel.styleWeights);

  /** Rebuild weights from a desired ordered list of ids. */
  const writeRanked = (ids: string[]) => {
    const next: Record<string, number> = {};
    ids.slice(0, 3).forEach((id, i) => {
      next[id] = SLOT_WEIGHTS[i];
    });
    // anything past slot 3 stays at a low weight so we don't silently drop selections
    ids.slice(3).forEach((id) => {
      next[id] = 20;
    });
    update({ styleWeights: next });
  };

  const placeInSlot = (id: string, slot: number) => {
    const others = ranked.filter((x) => x !== id);
    const target = Math.min(slot, others.length);
    const next = [...others];
    next.splice(target, 0, id);
    writeRanked(next);
  };

  const removeStyle = (id: string) => {
    writeRanked(ranked.filter((x) => x !== id));
  };

  /** Single-click promotion path. Always reliable, no D&D required.
   *  - Not active → drop into the first empty slot (or append).
   *  - Active and not yet Lead → promote one tier up.
   *  - Active and already Lead → remove. */
  const cycleStyle = (id: string) => {
    const idx = ranked.indexOf(id);
    if (idx === -1) {
      placeInSlot(id, Math.min(ranked.length, 3));
      return;
    }
    if (idx === 0) {
      removeStyle(id);
      return;
    }
    const next = [...ranked];
    [next[idx - 1], next[idx]] = [next[idx], next[idx - 1]];
    writeRanked(next);
  };

  const setWeight = (id: string, w: number) => {
    const next = { ...sel.styleWeights };
    if (w <= 0) delete next[id];
    else next[id] = w;
    update({ styleWeights: next });
  };

  const onDragStart = (id: string) => (e: DragEvent) => {
    setDragging(id);
    e.dataTransfer.setData('text/plain', id);
    e.dataTransfer.effectAllowed = 'move';
  };
  const onDragEnd = () => {
    setDragging(null);
    setHoverSlot(null);
  };
  const onSlotOver = (slot: number) => (e: DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    setHoverSlot(slot);
  };
  const onSlotDrop = (slot: number) => (e: DragEvent) => {
    e.preventDefault();
    const id = e.dataTransfer.getData('text/plain') || dragging;
    if (id) placeInSlot(id, slot);
    setHoverSlot(null);
  };

  const coaching = getCoaching(sel);
  const mixCats = CATEGORIES.filter((c) => c.selection === 'multi');

  return (
    <section>
      <h2 className="step-title">Mix your styles</h2>
      <p className="step-sub muted">
        Click any style on the left to add it. Click it again to promote its priority. Drag also works. Lead drives the
        look, Supporting adds a voice, Accent is the grace note — the button on the right morphs live.
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
                  const w = sel.styleWeights[s.id] ?? 0;
                  const active = w > 0;
                  return (
                    <div
                      key={s.id}
                      className={`catalog-card ${active ? 'on' : ''} ${dragging === s.id ? 'dragging' : ''}`}
                      draggable
                      onDragStart={onDragStart(s.id)}
                      onDragEnd={onDragEnd}
                      onClick={() => cycleStyle(s.id)}
                      title={
                        active
                          ? ranked.indexOf(s.id) === 0
                            ? 'Lead — click to remove'
                            : 'Click to promote priority'
                          : 'Click to add to your stack'
                      }
                    >
                      <StyleThumb styleId={s.id} compact />
                      <div className="catalog-meta">
                        <strong>{s.name}</strong>
                        <span className="muted catalog-phil">{s.philosophy}</span>
                      </div>
                      {active && (
                        <span className={`catalog-rank tier-${Math.min(ranked.indexOf(s.id), 3)}`} aria-hidden>
                          {ranked.indexOf(s.id) + 1}
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <aside className="mix-priority">
          <div className="priority-head">
            <h3>Your stack</h3>
            <span className="faint">Click or drag styles in. Heavier slots dominate.</span>
          </div>

          <div className="priority-slots">
            {SLOT_LABELS.map((label, i) => {
              const id = ranked[i];
              const style = id ? styleById(id) : null;
              return (
                <div
                  key={label}
                  className={`priority-slot tier-${i} ${hoverSlot === i ? 'hover' : ''} ${style ? 'filled' : ''}`}
                  onDragOver={onSlotOver(i)}
                  onDragLeave={() => setHoverSlot((s) => (s === i ? null : s))}
                  onDrop={onSlotDrop(i)}
                >
                  <div className="slot-tier">
                    <span className="slot-badge">{i + 1}</span>
                    <span className="slot-label">{label}</span>
                    <span className="faint slot-hint">{SLOT_HINTS[i]}</span>
                  </div>
                  {style ? (
                    <div className="slot-filled">
                      <StyleThumb styleId={style.id} compact />
                      <div className="slot-meta">
                        <strong>{style.name}</strong>
                        <label className="slot-weight">
                          <span className="faint">Weight</span>
                          <input
                            type="range"
                            min={5}
                            max={100}
                            step={5}
                            value={sel.styleWeights[style.id] ?? SLOT_WEIGHTS[i]}
                            onChange={(e) => setWeight(style.id, Number(e.target.value))}
                            aria-label={`${style.name} weight`}
                          />
                          <span className="control-val">{sel.styleWeights[style.id] ?? SLOT_WEIGHTS[i]}%</span>
                        </label>
                      </div>
                      <button className="slot-remove" onClick={() => removeStyle(style.id)} title="Remove">
                        ✕
                      </button>
                    </div>
                  ) : (
                    <div className="slot-empty">Drop a style here</div>
                  )}
                </div>
              );
            })}
          </div>

          {ranked.length > 3 && (
            <div className="priority-extra">
              <div className="faint" style={{ fontSize: 12, marginBottom: 6 }}>Also active</div>
              <div className="mix-chips">
                {ranked.slice(3).map((id) => (
                  <button key={id} className="mix-chip" onClick={() => removeStyle(id)} title="Remove">
                    {styleById(id)?.name} ✕
                  </button>
                ))}
              </div>
            </div>
          )}

          <MixPreview sel={sel} />

          <div className="coach-card panel">
            <div className="coach-badge">Coach</div>
            <h3 className="coach-headline">{coaching.headline}</h3>
            <p className="muted coach-tip">{coaching.tip}</p>
          </div>

          {coaching.warnings.length > 0 && (
            <div className="coach-card conflict-banner">
              <strong style={{ fontSize: 13 }}>Watch out</strong>
              {coaching.warnings.map((wn) => (
                <div key={wn}>⚠ {wn}</div>
              ))}
            </div>
          )}

          {coaching.recommendations.length > 0 && (
            <div className="coach-card panel">
              <div className="coach-badge">Suggested next</div>
              <div className="rec-list">
                {coaching.recommendations.map((r) => (
                  <button key={r.id} className="rec-item" onClick={() => placeInSlot(r.id, ranked.length)}>
                    <StyleThumb styleId={r.id} compact />
                    <div className="rec-meta">
                      <strong>{r.name}</strong>
                      <span className="faint">{r.reason}</span>
                    </div>
                    <span className="rec-add">+</span>
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
