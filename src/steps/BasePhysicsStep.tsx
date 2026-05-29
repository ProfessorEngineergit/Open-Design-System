import { stylesByCategory } from '../data/styles';
import { StyleThumb } from '../components/StyleThumb';
import type { OdsSelection } from '../engine/state';

interface Props {
  sel: OdsSelection;
  update: (patch: Partial<OdsSelection>) => void;
}

export function BasePhysicsStep({ sel, update }: Props) {
  const bases = stylesByCategory('base-physics');
  return (
    <section>
      <h2 className="step-title">Choose your foundation</h2>
      <p className="step-sub muted">
        The base layer sets the physics of light, depth and motion. Pick one — everything else layers on top.
      </p>
      <div className="base-grid">
        {bases.map((b) => {
          const active = sel.basePhysics === b.id;
          return (
            <button
              key={b.id}
              className={`base-card ${active ? 'selected' : ''}`}
              onClick={() => update({ basePhysics: b.id })}
            >
              <div className="base-thumb">
                <StyleThumb styleId={b.id} compact />
              </div>
              <div className="base-card-body">
                <div className="base-head">
                  <strong>{b.name}</strong>
                  {active && <span className="base-check">✓</span>}
                </div>
                <p className="muted base-phil">{b.philosophy}</p>
                <ul className="marker-list">
                  {b.markers.slice(0, 3).map((m) => (
                    <li key={m}>{m}</li>
                  ))}
                </ul>
                {b.motion && <div className="base-motion faint">↻ {b.motion}</div>}
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}
