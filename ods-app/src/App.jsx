import React, { useEffect, useMemo, useRef, useState } from 'react';
import UIMixologyEngine from './components/UIMixologyEngine';
import './App.css';

const THEMES = [
  { value: 'matrix', label: 'Matrix Green' },
  { value: 'amber', label: 'CRT Amber' },
  { value: 'cyber', label: 'Cyber Neon' },
  { value: 'ice', label: 'Ice Terminal' },
];

const DESIGN_LIBRARY = {
  geometry: {
    material3: {
      label: 'Material 3 / Expressive',
      note: 'runde Ecken, tonale Container, expressive Motion mit Feder-Physik',
    },
    fluent2: {
      label: 'Microsoft Fluent 2',
      note: 'Licht, Mica/Acrylic-Layer, Tiefenstaffelung im Z-Raum',
    },
    appleHig: {
      label: 'Apple HIG / Spatial',
      note: 'randlose Flächen, organische Formen, fluides Gestenverhalten',
    },
  },
  materiality: {
    appleLiquidGlass: {
      label: 'Apple Liquid Glass',
      note: 'ultrafeines Glas-Layer mit heller Kante, weichen Highlights und tiefer Unschärfe',
    },
    liquidGlass: {
      label: 'Liquid Glass',
      note: 'Glassmorphismus mit Blur, Refraktion und transluzenten Kanten',
    },
    claymorphism: {
      label: 'Claymorphism',
      note: 'weiche, matte, aufgeblasene Flächen mit volumetrischen Schatten',
    },
    neumorphism2: {
      label: 'Neumorphism 2.0 / Cyber-Skeuomorphismus',
      note: 'haptische Physik, deutliche Highlights und klare Tiefensignale',
    },
  },
  vibes: {
    frutigerAero: {
      label: 'Frutiger Aero',
      note: 'glossy Web-2.0 Vibe, Lens-Flares, optimistischer Farblook',
    },
    acidChrome: {
      label: 'Acid Design / Chrome-Core',
      note: 'Neon auf Schwarz, flüssiges Metall, futuristische Kontraste',
    },
    neoBrutal: {
      label: 'Neo-Brutalism / Cute-alism',
      note: 'harte Kanten, starke Outlines, klare Primärfarben und Kontrast',
    },
    retroTerminal: {
      label: 'Retro-Futurism / Terminal',
      note: 'Monospace, CRT-Scanlines, Glow und CLI-Ästhetik',
    },
    industrial: {
      label: 'Industrial UI',
      note: 'gebürstetes Metall, physische Regler, mechanischer Hardware-Charakter',
    },
  },
};

const FUNCTIONAL_FIRST_PROMPT = `Programmiere meine App-Idee als funktionales Frontend-Skelett. Nutze semantisches HTML, klare Komponenten, Flexbox/Grid für eine makellose UX und barrierearme Struktur. WICHTIG: Lass jegliches visuelle Design, Farben, Theme-Logik, Effekte und Styling komplett weg. Keine dekorativen Klassen, keine Farbsysteme, keine Animationen. Liefere rein funktionalen, sauber strukturierten Code.`;

const defaultSnippetDraft = {
  target: 'Button',
  code: '',
};

let snippetCounter = 0;

const TINT_LIBRARY = {
  Rot: { accent: '#ff5b74', accentStrong: '#ff2e52' },
  Cyan: { accent: '#5fe8ff', accentStrong: '#27b7de' },
  Violett: { accent: '#c782ff', accentStrong: '#8f4dd8' },
  Lime: { accent: '#95ff68', accentStrong: '#57d038' },
  Orange: { accent: '#ffb065', accentStrong: '#ff7c2b' },
};

const BUTTON_PREVIEW_LIMITS = {
  glossMin: 0.15,
  glossMax: 0.95,
  shadowMin: 0.08,
  shadowMax: 0.8,
  borderMin: 0.2,
  borderMax: 0.95,
  iconFontMin: 14,
  iconFontBase: 17,
};

const createSnippetId = () => {
  if (globalThis.crypto?.randomUUID) {
    return globalThis.crypto.randomUUID();
  }
  snippetCounter += 1;
  return `snippet-${Date.now()}-${snippetCounter}`;
};

const buildSnippetSection = (customSnippets, materialityLabel, vibeLabel) => {
  if (customSnippets.length === 0) {
    return '- Keine Custom-Snippets hinterlegt. Nutze die globale Stildefinition für alle Komponenten.';
  }

  return customSnippets
    .map((snippet, index) => {
      const instructions = [
        `${index + 1}. Zielkomponente: ${snippet.target}`,
        '   Referenz-Code:',
        snippet.code,
        `   Vorgabe: Repliziere die Struktur exakt für ${snippet.target} und überlagere zusätzlich die globale Materialität (${materialityLabel}) plus Vibe-Layer (${vibeLabel}).`,
      ];
      return instructions.join('\n');
    })
    .join('\n\n');
};

const buildBlendPrompt = ({ engineState, geometry, materiality, vibe, snippetSection }) => {
  const globalMix = [
    `- Basis-Geometrie: ${geometry.label} -> ${geometry.note}`,
    `- Materialität & Textur: ${materiality.label} -> ${materiality.note}`,
    `- Vibe-Layer: ${vibe.label} -> ${vibe.note}`,
    `- Globaler Farb-Tint: ${engineState.tint}`,
    `- Intensität: ${engineState.intensity}/100`,
    `- Textur-Stärke: ${engineState.textureStrength}/100`,
    `- Tiefen-Layer: ${engineState.depthLayers}`,
    `- Kontroll-Skalierung: ${engineState.controlScale}x`,
    `- Button-Material: ${engineState.buttonMaterial}`,
    `- Button-Rundheit: ${engineState.buttonRoundness}px`,
    `- Button-Höhe: ${engineState.buttonHeight}px`,
    `- Button-Randstärke: ${engineState.buttonBorderWidth}px`,
    `- Button-Glanz: ${engineState.buttonGloss}/100`,
    `- Button-Schatten: ${engineState.buttonShadow}/100`,
    `- Scanlines aktiv: ${engineState.enableScanlines ? 'Ja' : 'Nein'}`,
    `- Micro-Glow aktiv: ${engineState.enableMicroGlow ? 'Ja' : 'Nein'}`,
    `- A11y-Kontrast absichern: ${engineState.enforceAccessibility ? 'Ja' : 'Nein'}`,
  ];

  const fixedRules = [
    '1) Ändere keine Logik, kein Datenmodell, keine Event-Handler, keine Accessibility-Labels.',
    '2) Verändere nur visuelle Schicht (CSS/Design-Tokens/Design-spezifische Klassen).',
    '3) Alle bestehenden Flows müssen funktional identisch bleiben.',
    `4) Logic-Lock aktiv: ${engineState.preserveLogicLock ? 'Erzwungen (keine Strukturänderung)' : 'Locker (minimal notwendige Strukturänderung nur bei Stil-Zwang)'}.`,
  ];

  return [
    'SYSTEM-ROLLE: Du bist Senior UI Engineer. Du erhältst bereits funktionierenden Code.',
    '',
    'UNVERHANDELBAR:',
    ...fixedRules,
    '',
    'GLOBALER STYLE-MIX:',
    ...globalMix,
    '',
    'CUSTOM KOMPONENTEN-MAPPINGS:',
    snippetSection,
    '',
    'OUTPUT-ANWEISUNG:',
    '- Liefere nur die aktualisierte Styling-Schicht (CSS, ggf. tokenisierte Variablen und ausschließlich notwendige Klassenzuweisungen).',
    '- Behalte bestehende Komponentenstruktur maximal stabil.',
    '- Dokumentiere in 5-10 Bullet Points, welche visuellen Entscheidungen umgesetzt wurden und warum sie zum Mix passen.',
  ].join('\n');
};

const App = () => {
  const [theme, setTheme] = useState('matrix');
  const [engineState, setEngineState] = useState({
    geometry: 'material3',
    materiality: 'liquidGlass',
    vibe: 'retroTerminal',
    tint: 'Rot',
    intensity: 78,
    textureStrength: 64,
    depthLayers: 5,
    controlScale: 1,
    buttonMaterial: 'appleLiquidGlass',
    buttonRoundness: 18,
    buttonHeight: 46,
    buttonBorderWidth: 1.2,
    buttonGloss: 74,
    buttonShadow: 54,
    preserveLogicLock: true,
    enableScanlines: true,
    enableMicroGlow: true,
    enforceAccessibility: true,
  });
  const [snippetDraft, setSnippetDraft] = useState(defaultSnippetDraft);
  const [customSnippets, setCustomSnippets] = useState([]);
  const [copyState, setCopyState] = useState('');
  const copyTimeoutRef = useRef(null);

  useEffect(
    () => () => {
      if (copyTimeoutRef.current) {
        window.clearTimeout(copyTimeoutRef.current);
      }
    },
    []
  );

  const architecturePlan = useMemo(
    () => [
      'Frontend: React + Vite (lokal, ohne Backend), kompletter State in App-Level.',
      'ODS-Flow in 5 Panels: Architektur, Functional Prompt, Mixology, Custom-Snippets, Blend-Output.',
      'Prompt-Engine: Live-Generierung aus Taxonomie + Kontrollparametern + Snippet-Mappings.',
      'Theming: App-weite CSS-Variablen mit Theme-Switcher für Developer-Looks.',
      'Lokaler Start: npm install && npm run dev (oder npm run build && npm run serve).',
    ],
    []
  );

  const fileStructure = useMemo(
    () => [
      'ods-app/src/App.jsx (State, Prompt-Engine, User-Flow)',
      'ods-app/src/components/UIMixologyEngine.jsx (Dashboard-Controls)',
      'ods-app/src/components/Slider.jsx | Toggle.jsx | Dial.jsx (physische UI-Controls)',
      'ods-app/src/App.css (Terminal-Design, Themes, Cockpit-Layout)',
      'ods-app/package.json (Scripts: dev/build/serve)',
    ],
    []
  );

  const blendPrompt = useMemo(() => {
    const geometry = DESIGN_LIBRARY.geometry[engineState.geometry];
    const materiality = DESIGN_LIBRARY.materiality[engineState.materiality];
    const vibe = DESIGN_LIBRARY.vibes[engineState.vibe];
    const snippetSection = buildSnippetSection(customSnippets, materiality.label, vibe.label);

    return buildBlendPrompt({ engineState, geometry, materiality, vibe, snippetSection });
  }, [engineState, customSnippets]);

  const previewStyles = useMemo(() => {
    const tint = TINT_LIBRARY[engineState.tint] || TINT_LIBRARY.Rot;
    const glossOpacity = Math.min(
      BUTTON_PREVIEW_LIMITS.glossMax,
      Math.max(BUTTON_PREVIEW_LIMITS.glossMin, engineState.buttonGloss / 100)
    );
    const shadowOpacity = Math.min(
      BUTTON_PREVIEW_LIMITS.shadowMax,
      Math.max(BUTTON_PREVIEW_LIMITS.shadowMin, engineState.buttonShadow / 100)
    );
    const borderOpacity = Math.min(
      BUTTON_PREVIEW_LIMITS.borderMax,
      Math.max(BUTTON_PREVIEW_LIMITS.borderMin, engineState.intensity / 100)
    );
    const blurAmount = 8 + Math.round((engineState.textureStrength / 100) * 12);
    const fontSize = Math.round(15 * engineState.controlScale);
    const materialStyles = {
      appleLiquidGlass: {
        background: `linear-gradient(140deg, rgba(255,255,255,${0.2 + glossOpacity * 0.25}) 0%, rgba(255,255,255,0.08) 35%, rgba(0,0,0,0.25) 100%), radial-gradient(circle at 20% 10%, ${tint.accent}4f 0%, ${tint.accentStrong}2a 60%, #09111a 100%)`,
        borderColor: `rgba(255,255,255,${0.25 + borderOpacity * 0.35})`,
        boxShadow: `inset 0 1px 0 rgba(255,255,255,${0.35 + glossOpacity * 0.25}), inset 0 -1px 0 rgba(0,0,0,0.35), 0 12px 28px rgba(0,0,0,${shadowOpacity})`,
        backdropFilter: `blur(${blurAmount}px) saturate(150%)`,
      },
      liquidGlass: {
        background: `linear-gradient(180deg, rgba(255,255,255,${0.14 + glossOpacity * 0.2}), rgba(255,255,255,0.03)), linear-gradient(135deg, ${tint.accentStrong}66 0%, #0d1520 100%)`,
        borderColor: `rgba(255,255,255,${0.2 + borderOpacity * 0.25})`,
        boxShadow: `inset 0 1px 0 rgba(255,255,255,${0.25 + glossOpacity * 0.2}), 0 10px 20px rgba(0,0,0,${shadowOpacity})`,
        backdropFilter: `blur(${Math.max(4, blurAmount - 2)}px)`,
      },
      claymorphism: {
        background: `linear-gradient(155deg, ${tint.accent}e8 0%, ${tint.accentStrong}f2 100%)`,
        borderColor: `rgba(255,255,255,${0.12 + borderOpacity * 0.22})`,
        boxShadow: `inset 6px 6px 14px rgba(255,255,255,${0.16 + glossOpacity * 0.15}), inset -8px -8px 14px rgba(0,0,0,0.35), 0 10px 24px rgba(0,0,0,${shadowOpacity})`,
        backdropFilter: 'none',
      },
      neumorphism2: {
        background: `linear-gradient(150deg, #151b24 0%, #0c1017 100%)`,
        borderColor: `${tint.accent}99`,
        boxShadow: `inset 1px 1px 0 rgba(255,255,255,${0.1 + glossOpacity * 0.12}), inset -1px -1px 0 rgba(0,0,0,0.6), 0 0 ${8 + Math.round(engineState.intensity / 6)}px ${tint.accentStrong}66, 0 12px 25px rgba(0,0,0,${shadowOpacity})`,
        backdropFilter: 'none',
      },
    };

    const selectedMaterial = materialStyles[engineState.buttonMaterial] || materialStyles.appleLiquidGlass;
    return {
      width: 'fit-content',
      minWidth: '180px',
      height: `${engineState.buttonHeight}px`,
      borderRadius: `${engineState.buttonRoundness}px`,
      borderWidth: `${engineState.buttonBorderWidth}px`,
      borderStyle: 'solid',
      color: '#f5fbff',
      fontWeight: 600,
      fontSize: `${fontSize}px`,
      padding: '0 22px',
      letterSpacing: '0.01em',
      transition: 'all 180ms ease',
      cursor: 'pointer',
      ...selectedMaterial,
    };
  }, [engineState]);

  const fallbackCopy = (text) => {
    const temporaryTextArea = document.createElement('textarea');
    temporaryTextArea.value = text;
    temporaryTextArea.readOnly = true;
    temporaryTextArea.style.position = 'absolute';
    temporaryTextArea.style.left = '-9999px';
    document.body.appendChild(temporaryTextArea);
    temporaryTextArea.select();
    const wasCopied = document.execCommand('copy');
    document.body.removeChild(temporaryTextArea);
    return wasCopied;
  };

  const copyText = async (text, label) => {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(text);
      } else if (!fallbackCopy(text)) {
        throw new Error('copy-failed');
      }
      setCopyState(`${label} kopiert.`);
      if (copyTimeoutRef.current) {
        window.clearTimeout(copyTimeoutRef.current);
      }
      copyTimeoutRef.current = window.setTimeout(() => {
        setCopyState('');
        copyTimeoutRef.current = null;
      }, 1800);
    } catch {
      setCopyState('Clipboard nicht verfügbar. Bitte manuell kopieren.');
    }
  };

  const addSnippet = () => {
    if (!snippetDraft.code.trim()) return;
    const normalizedTarget = snippetDraft.target.trim() || 'Unbenannte Komponente';
    setCustomSnippets((prev) => [
      ...prev,
      { id: createSnippetId(), ...snippetDraft, target: normalizedTarget, code: snippetDraft.code.trim() },
    ]);
    setSnippetDraft(defaultSnippetDraft);
  };

  const removeSnippet = (index) => {
    setCustomSnippets((prev) => prev.filter((_, snippetIndex) => snippetIndex !== index));
  };

  return (
    <div className='app-shell' data-theme={theme}>
      <header className='hud-header'>
        <div>
          <p className='badge'>OPEN DESIGN SYSTEM // LOCAL STUDIO</p>
          <h1>Open Design System (ODS)</h1>
          <p className='lead'>
            Generiere ein funktionales Code-Skelett, mische deinen UI-Stil granular und erzeuge einen massiven
            Blend-Design-Prompt für dein LLM.
          </p>
        </div>
        <div className='theme-switcher'>
          <label htmlFor='theme-switch'>Theme</label>
          <select id='theme-switch' value={theme} onChange={(event) => setTheme(event.target.value)}>
            {THEMES.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        </div>
      </header>

      <section className='panel'>
        <h2>Architekturentwurf & Dateistruktur</h2>
        <div className='grid-columns'>
          <div>
            <h3>Entwicklungsplan</h3>
            <ul>
              {architecturePlan.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Kern-Dateien</h3>
            <ul>
              {fileStructure.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className='panel'>
        <h2>Schritt 1 · Functional First Prompt</h2>
        <p className='hint'>
          Kopiere diesen Prompt in dein LLM, damit zuerst nur funktionaler Code ohne Styling generiert wird.
        </p>
        <pre>{FUNCTIONAL_FIRST_PROMPT}</pre>
        <button className='action-btn' onClick={() => copyText(FUNCTIONAL_FIRST_PROMPT, 'Functional Prompt')}>
          Functional Prompt kopieren
        </button>
      </section>

      <section className='panel'>
        <h2>Schritt 2 · UI-Mixology-Engine</h2>
        <UIMixologyEngine value={engineState} onChange={setEngineState} designLibrary={DESIGN_LIBRARY} />
      </section>

      <section className='panel'>
        <h2>Schritt 2.5 · Live Button Studio</h2>
        <p className='hint'>Wähle Material und Slider in der Mixology-Engine – der Button rendert sofort im gewählten Stil.</p>
        <div className='button-preview-grid'>
          <button className='preview-button' style={previewStyles} type='button'>
            Primary Action
          </button>
          <button
            className='preview-button'
            style={{
              ...previewStyles,
              opacity: 0.82,
              minWidth: '150px',
              transform: 'scale(0.96)',
            }}
            type='button'
          >
            Secondary
          </button>
          <button
            className='preview-button'
            style={{
              ...previewStyles,
              minWidth: `${engineState.buttonHeight}px`,
              width: `${engineState.buttonHeight}px`,
              padding: 0,
              borderRadius: '999px',
              fontSize: `${Math.max(
                BUTTON_PREVIEW_LIMITS.iconFontMin,
                Math.round(BUTTON_PREVIEW_LIMITS.iconFontBase * engineState.controlScale)
              )}px`,
            }}
            aria-label='Favorites'
            type='button'
          >
            ★
          </button>
        </div>
      </section>

      <section className='panel'>
        <h2>Schritt 3 · Eigene Code-Schnipsel</h2>
        <p className='hint'>
          Hinterlege Referenz-Snippets und mappe sie auf Komponenten wie Button, Card, Input oder Modal.
        </p>
        <div className='snippet-form'>
          <label>
            Zielkomponente
            <input
              type='text'
              value={snippetDraft.target}
              placeholder='z.B. Button'
              onChange={(event) => setSnippetDraft((prev) => ({ ...prev, target: event.target.value }))}
            />
          </label>
          <label>
            HTML/CSS-Snippet
            <textarea
              value={snippetDraft.code}
              placeholder='<button class="neo">Launch</button>\n.neo { ... }'
              onChange={(event) => setSnippetDraft((prev) => ({ ...prev, code: event.target.value }))}
            />
          </label>
          <button className='action-btn' onClick={addSnippet}>
            Snippet hinzufügen
          </button>
        </div>

        <div className='snippet-list'>
          {customSnippets.length === 0 ? (
            <p className='hint'>Noch keine Snippets hinzugefügt.</p>
          ) : (
            customSnippets.map((snippet, index) => (
              <article key={snippet.id} className='snippet-item'>
                <div>
                  <strong>{snippet.target}</strong>
                  <pre>{snippet.code}</pre>
                </div>
                <button className='ghost-btn' onClick={() => removeSnippet(index)}>
                  Entfernen
                </button>
              </article>
            ))
          )}
        </div>
      </section>

      <section className='panel'>
        <h2>Schritt 4 · Blend Design Prompt</h2>
        <p className='hint'>
          Nutze diesen Prompt nach dem funktionalen Code-Output. Er überschreibt nur die visuelle Schicht.
        </p>
        <pre>{blendPrompt}</pre>
        <button className='action-btn' onClick={() => copyText(blendPrompt, 'Blend Design Prompt')}>
          Blend Design Prompt kopieren
        </button>
      </section>

      <footer className='status-line'>{copyState || 'Ready // ODS prompt engine live update aktiv.'}</footer>
    </div>
  );
};

export default App;
