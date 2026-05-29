import { ComponentCanvas } from '../components/ComponentCanvas';
import type { OdsSelection } from '../engine/state';

interface Props {
  sel: OdsSelection;
}

export function ComponentsStep({ sel }: Props) {
  return (
    <section>
      <h2 className="step-title">Try it on real components</h2>
      <p className="step-sub muted">
        Here's your whole look on a set of real components. Click any one to see the exact CSS behind it.
      </p>

      <ComponentCanvas sel={sel} />
    </section>
  );
}
