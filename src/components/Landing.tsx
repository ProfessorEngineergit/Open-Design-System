import { StyleThumb } from './StyleThumb';

interface Props {
  onStart: () => void;
  hasProgress: boolean;
}

const SHOWCASE = ['liquid-glass', 'neo-brutalism', 'claymorphism', 'retro-futurism', 'frutiger-aero', 'oled-dark'];

const STEPS = [
  { n: '01', t: 'Pick a foundation', d: 'Material 3, Fluent or Apple — the physics of light and depth.' },
  { n: '02', t: 'Mix styles live', d: 'Every style is a real sample. Stack and weight them, coached the whole way.' },
  { n: '03', t: 'Tune & type', d: 'Fine-tune surfaces in the editor and choose typography from body to display.' },
  { n: '04', t: 'Get the prompt', d: 'Export one precise, high-signal prompt for any AI coding tool.' },
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
          <div className="hero-eyebrow">For everyone who builds with AI</div>
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
            Most people can't picture "claymorphism" or "Frutiger Aero". So we show you — live, before you choose.
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
          <p className="muted">Four steps from blank page to a prompt that actually carries your taste.</p>
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
        <h3>Ready to design with intent?</h3>
        <button className="primary-btn hero-btn" onClick={onStart}>
          {hasProgress ? 'Resume' : 'Open the editor'}
        </button>
      </section>

      <footer className="landing-foot faint">Looksmith · forge the look, ship the prompt</footer>
    </div>
  );
}
