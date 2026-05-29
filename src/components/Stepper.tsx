interface Props {
  steps: string[];
  current: number;
  onJump: (i: number) => void;
}

export function Stepper({ steps, current, onJump }: Props) {
  return (
    <div className="stepper">
      {steps.map((label, i) => {
        const state = i === current ? 'active' : i < current ? 'done' : 'todo';
        return (
          <button
            key={label}
            className={`step-pill ${state}`}
            onClick={() => i <= current && onJump(i)}
            disabled={i > current}
          >
            <span className="step-dot">{i < current ? '✓' : i + 1}</span>
            <span className="step-label">{label}</span>
          </button>
        );
      })}
    </div>
  );
}
