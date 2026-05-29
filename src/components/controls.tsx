interface SliderProps {
  label: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  unit?: string;
  /** Show a rainbow track instead of a plain one — for the hue slider. */
  hue?: boolean;
  onChange: (v: number) => void;
}

export function Slider({ label, value, min, max, step = 1, unit = '', hue, onChange }: SliderProps) {
  const clamp = (n: number) => Math.min(max, Math.max(min, n));
  return (
    <label className="control">
      <div className="control-head">
        <span>{label}</span>
        <span className="control-edit">
          <input
            className="control-num"
            type="number"
            min={min}
            max={max}
            step={step}
            value={value}
            onChange={(e) => onChange(clamp(Number(e.target.value)))}
          />
          {unit && <span className="control-unit">{unit}</span>}
        </span>
      </div>
      <input
        type="range"
        className={hue ? 'hue-range' : ''}
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
      />
    </label>
  );
}

interface ChoiceProps {
  title: string;
  subtitle?: string;
  selected: boolean;
  onClick: () => void;
}

export function ChoiceCard({ title, subtitle, selected, onClick }: ChoiceProps) {
  return (
    <button className={`choice-card ${selected ? 'selected' : ''}`} onClick={onClick}>
      <div className="choice-check">{selected ? '✓' : ''}</div>
      <strong>{title}</strong>
      {subtitle && <span className="muted">{subtitle}</span>}
    </button>
  );
}
