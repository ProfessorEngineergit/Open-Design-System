import { ComponentCanvas } from '../components/ComponentCanvas';
import type { OdsSelection } from '../engine/state';

interface Props {
  sel: OdsSelection;
}

export function ComponentsStep({ sel }: Props) {
  return (
    <section>
      <h2 className="step-title">Test it on real components</h2>
      <p className="step-sub muted">
        Your whole design language, applied to a live component set. Click any element to inspect the exact CSS it
        resolves to.
      </p>

      <ComponentCanvas sel={sel} />
    </section>
  );
}
