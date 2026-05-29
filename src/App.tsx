import { useEffect, useMemo, useState } from 'react';
import { DEFAULT_VISUALS, INITIAL_SELECTION, type OdsSelection } from './engine/state';
import { ensureFontsRegistered } from './engine/fonts';
import { Stepper } from './components/Stepper';
import { ProjectTypeStep } from './steps/ProjectTypeStep';
import { BasePhysicsStep } from './steps/BasePhysicsStep';
import { StyleMixStep } from './steps/StyleMixStep';
import { TypographyStep } from './steps/TypographyStep';
import { MixerStep } from './steps/MixerStep';
import { ComponentsStep } from './steps/ComponentsStep';
import { OutputStep } from './steps/OutputStep';
import { Landing } from './components/Landing';

const STEPS = ['Project', 'Foundation', 'Style Mix', 'Type', 'Mixer', 'Components', 'Prompt'] as const;
const STORAGE_KEY = 'ods.selection.v1';

function loadSelection(): OdsSelection {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      return {
        ...INITIAL_SELECTION,
        ...parsed,
        visuals: { ...DEFAULT_VISUALS, ...(parsed.visuals ?? {}) },
      };
    }
  } catch {
    /* storage was garbled — just start fresh */
  }
  return INITIAL_SELECTION;
}

export default function App() {
  const [view, setView] = useState<'landing' | 'editor'>('landing');
  const [step, setStep] = useState(0);
  const [sel, setSel] = useState<OdsSelection>(loadSelection);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(sel));
  }, [sel]);

  useEffect(() => {
    ensureFontsRegistered(sel.customFonts);
  }, [sel.customFonts]);

  const hasProgress = !!sel.projectType || Object.keys(sel.styleWeights).length > 0;

  const canAdvance = useMemo(() => {
    if (step === 0) return !!sel.projectType;
    if (step === 1) return !!sel.basePhysics;
    return true;
  }, [step, sel]);

  const update = (patch: Partial<OdsSelection>) => setSel((s) => ({ ...s, ...patch }));

  if (view === 'landing') {
    return <Landing onStart={() => setView('editor')} hasProgress={hasProgress} />;
  }

  return (
    <div className="app-shell">
      <header className="brand">
        <button className="brand-home" onClick={() => setView('landing')} aria-label="Back to home">
          <div className="brand-mark" />
        </button>
        <div className="grow">
          <h1>Looksmith</h1>
          <small>Forge a look · ship the prompt</small>
        </div>
        <button className="text-btn" onClick={() => setView('landing')}>
          Home
        </button>
        <button
          className="ghost-btn"
          onClick={() => {
            setSel(INITIAL_SELECTION);
            setStep(0);
          }}
        >
          Reset
        </button>
      </header>

      <Stepper steps={STEPS as unknown as string[]} current={step} onJump={setStep} />

      <main className="step-area">
        {step === 0 && <ProjectTypeStep sel={sel} update={update} />}
        {step === 1 && <BasePhysicsStep sel={sel} update={update} />}
        {step === 2 && <StyleMixStep sel={sel} update={update} />}
        {step === 3 && <TypographyStep sel={sel} update={update} />}
        {step === 4 && <MixerStep sel={sel} update={update} />}
        {step === 5 && <ComponentsStep sel={sel} />}
        {step === 6 && <OutputStep sel={sel} />}
      </main>

      <nav className="wizard-nav">
        <button className="ghost-btn" disabled={step === 0} onClick={() => setStep((s) => s - 1)}>
          Back
        </button>
        <div className="faint" style={{ fontSize: 13 }}>
          Step {step + 1} of {STEPS.length}
        </div>
        <button
          className="primary-btn"
          disabled={!canAdvance || step === STEPS.length - 1}
          onClick={() => setStep((s) => Math.min(STEPS.length - 1, s + 1))}
        >
          {step === STEPS.length - 2 ? 'Generate prompt' : 'Continue'}
        </button>
      </nav>
    </div>
  );
}
