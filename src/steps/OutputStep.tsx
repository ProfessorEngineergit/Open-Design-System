import { useMemo, useState } from 'react';
import { generatePrompt } from '../engine/promptEngine';
import type { OdsSelection } from '../engine/state';

interface Props {
  sel: OdsSelection;
}

export function OutputStep({ sel }: Props) {
  const [copied, setCopied] = useState(false);
  const result = useMemo(() => generatePrompt(sel), [sel]);

  const copy = async () => {
    await navigator.clipboard.writeText(result.text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  };

  const download = () => {
    const blob = new Blob([result.text], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'ods-prompt.md';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <section>
      <div className="output-head">
        <div>
          <h2 className="step-title">Your prompt is ready</h2>
          <p className="step-sub muted">Paste it into any AI coding tool. Go back and change anything — it rewrites itself.</p>
        </div>
        <div className="row">
          <button className="ghost-btn" onClick={download}>
            Download .md
          </button>
          <button className="primary-btn" onClick={copy}>
            {copied ? 'Copied ✓' : 'Copy prompt'}
          </button>
        </div>
      </div>

      {result.conflicts.length > 0 && (
        <div className="conflict-banner">
          {result.conflicts.map((c) => (
            <div key={c}>⚠ {c}</div>
          ))}
        </div>
      )}

      <pre className="prompt-out">{result.text}</pre>
    </section>
  );
}
