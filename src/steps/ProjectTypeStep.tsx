import { PROJECT_TYPES } from '../data/projectTypes';
import { ChoiceCard } from '../components/controls';
import type { OdsSelection } from '../engine/state';

interface Props {
  sel: OdsSelection;
  update: (patch: Partial<OdsSelection>) => void;
}

export function ProjectTypeStep({ sel, update }: Props) {
  return (
    <section>
      <h2 className="step-title">What are you building?</h2>
      <p className="step-sub muted">This frames the whole prompt — pick the closest fit.</p>
      <div className="choice-grid">
        {PROJECT_TYPES.map((p) => (
          <ChoiceCard
            key={p.id}
            title={p.label}
            subtitle={p.hint}
            selected={sel.projectType === p.id}
            onClick={() => update({ projectType: p.id })}
          />
        ))}
      </div>
    </section>
  );
}
