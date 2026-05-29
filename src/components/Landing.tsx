import { StyleThumb } from './StyleThumb';

interface Props {
  onStart: () => void;
  hasProgress: boolean;
}

const SHOWCASE = ['liquid-glass', 'neo-brutalism', 'claymorphism', 'retro-futurism', 'frutiger-aero', 'oled-dark'];

const STEPS = [
  { n: '01', t: 'Pick a foundation', d: 'Material, Fluent or Apple — the base your whole design sits on.' },
  { n: '02', t: 'Mix styles live', d: "Every style is a real, working sample. Stack a few, and we'll nudge you along the way." },
  { n: '03', t: 'Tune & type', d: 'Nudge the surfaces and pick your fonts, from body text to big display.' },
  { n: '04', t: 'Copy the prompt', d: 'One clear prompt you can paste into any AI coding tool.' },
];

export function Landing({ onStart, hasProgress }: Props) {
  return (
    <div className="landing">
      <header className="landing-nav">
        <div className="brand">
          <div className="brand-mark" />
          <div>
            <h1>Looksmith</h1>
            <small>Forge a look, not a default</small>
          </div>
        </div>
        <button className="primary-btn" onClick={onStart}>
          {hasProgress ? 'Resume' : 'Open the editor'}
        </button>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <div className="hero-eyebrow">For anyone building with AI</div>
          <h2 className="hero-title">
            Stop shipping <em>default</em> AI design.
          </h2>
          <p className="hero-sub">
            Looksmith lets you forge a look — mix glass, clay, brutalism, editorial type and dozens more — then ship
            it as one precise prompt to your AI. No more burning credits guessing your way to a vibe.
          </p>
          <div className="hero-cta">
            <button className="primary-btn hero-btn" onClick={onStart}>
              {hasProgress ? 'Resume your design' : 'Start designing — free'}
            </button>
            <span className="faint">No signup · paste straight into any AI tool</span>
          </div>
        </div>
        <div className="hero-art">
          {SHOWCASE.slice(0, 4).map((id, i) => (
            <div key={id} className={`hero-tile tile-${i}`}>
              <StyleThumb styleId={id} />
            </div>
          ))}
        </div>
      </section>

      <section className="showcase">
        <div className="section-head">
          <h3>See every style, instantly</h3>
          <p className="muted">
            Nobody can picture "claymorphism" or "Frutiger Aero" from the name alone. So we just show you, before you pick.
          </p>
        </div>
        <div className="showcase-grid">
          {SHOWCASE.map((id) => (
            <div key={id} className="showcase-card">
              <StyleThumb styleId={id} />
            </div>
          ))}
        </div>
      </section>

      <section className="how">
        <div className="section-head">
          <h3>How it works</h3>
          <p className="muted">Four steps from blank page to a prompt that actually sounds like you.</p>
        </div>
        <div className="how-grid">
          {STEPS.map((s) => (
            <div key={s.n} className="how-card panel">
              <div className="how-n">{s.n}</div>
              <strong>{s.t}</strong>
              <p className="muted">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-band">
        <h3>Ready to make something that isn't default?</h3>
        <button className="primary-btn hero-btn" onClick={onStart}>
          {hasProgress ? 'Resume' : 'Open the editor'}
        </button>
      </section>

      <footer className="landing-foot faint">Looksmith · forge the look, ship the prompt</footer>
    </div>
  );
}
