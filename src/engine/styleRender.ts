import type { CSSProperties } from 'react';

export interface SampleStyle {
  /** Background of the little scene behind the sample. */
  scene: CSSProperties;
  /** The sample surface (card). */
  surface: CSSProperties;
  /** The sample button. */
  button: CSSProperties;
  /** Heading text style on the sample. */
  heading: CSSProperties;
  /** Body text style. */
  body: CSSProperties;
  /** Optional monospace flag for sample text. */
  mono?: boolean;
  /** Optional grain amount 0..1 applied to the surface only. */
  grain?: number;
}

const INK = '#1a1814';

const base: SampleStyle = {
  scene: { background: 'linear-gradient(160deg, #f3ede1, #e7e0d2)' },
  surface: {
    background: '#fbf9f4',
    border: '1px solid rgba(28,25,20,0.12)',
    borderRadius: 12,
    boxShadow: '0 6px 16px rgba(28,25,20,0.1)',
    color: INK,
  },
  button: {
    background: '#cc785c',
    color: '#fff',
    border: 'none',
    borderRadius: 8,
  },
  heading: { color: INK, fontWeight: 600 },
  body: { color: '#5c574c' },
};

/** Returns a representative visual spec for a given style id. */
export function renderStyle(id: string): SampleStyle {
  switch (id) {
    // ── Base physics ──
    case 'material-3':
      return {
        ...base,
        scene: { background: 'linear-gradient(160deg, #efe6f7, #e7ecf7)' },
        surface: {
          background: '#efe7f6',
          border: 'none',
          borderRadius: 20,
          boxShadow: '0 1px 3px rgba(0,0,0,0.12)',
          color: '#2b2733',
        },
        button: { background: '#6750a4', color: '#fff', border: 'none', borderRadius: 999 },
        heading: { color: '#21005d', fontWeight: 600 },
        body: { color: '#49454f' },
      };
    case 'fluent-2':
      return {
        ...base,
        scene: { background: 'linear-gradient(160deg, #dfe7f0, #cdd9ea)' },
        surface: {
          background: 'rgba(255,255,255,0.6)',
          border: '1px solid rgba(255,255,255,0.7)',
          borderRadius: 10,
          boxShadow: '0 8px 24px rgba(40,60,90,0.18)',
          backdropFilter: 'blur(14px) saturate(150%)',
          color: '#1b2430',
        },
        button: { background: '#0f6cbd', color: '#fff', border: 'none', borderRadius: 6 },
        heading: { color: '#11212e', fontWeight: 600 },
        body: { color: '#445163' },
      };
    case 'apple-hig':
    case 'liquid-glass':
      return {
        ...base,
        scene: {
          background:
            'radial-gradient(40% 60% at 25% 30%, #f0a07e, transparent 70%), radial-gradient(45% 55% at 80% 30%, #8fb6e0, transparent 72%), radial-gradient(50% 60% at 60% 90%, #c7a6e8, transparent 70%), linear-gradient(160deg,#f3ede1,#e3ddd0)',
        },
        surface: {
          background: 'rgba(255,255,255,0.28)',
          border: '1px solid rgba(255,255,255,0.55)',
          borderRadius: 22,
          boxShadow: '0 10px 30px rgba(28,25,20,0.18), inset 0 1px 1px rgba(255,255,255,0.6)',
          backdropFilter: 'blur(16px) saturate(180%)',
          color: INK,
        },
        button: {
          background: 'rgba(255,255,255,0.45)',
          color: INK,
          border: '1px solid rgba(255,255,255,0.6)',
          borderRadius: 999,
          backdropFilter: 'blur(8px)',
        },
        heading: { color: INK, fontWeight: 600 },
        body: { color: '#3a3630' },
      };

    // ── Morphism ──
    case 'claymorphism':
      return {
        ...base,
        scene: { background: 'linear-gradient(160deg, #efe9ff, #e7f0ff)' },
        surface: {
          background: '#ece7ff',
          border: 'none',
          borderRadius: 34,
          boxShadow:
            'inset 0 6px 12px rgba(255,255,255,0.9), inset 0 -8px 14px rgba(146,130,200,0.45), 0 14px 26px rgba(120,100,180,0.3)',
          color: '#3a3060',
        },
        button: {
          background: '#a98bff',
          color: '#fff',
          border: 'none',
          borderRadius: 999,
          boxShadow: 'inset 0 -4px 8px rgba(120,90,200,0.5), 0 6px 14px rgba(140,110,220,0.4)',
        },
        heading: { color: '#352a5c', fontWeight: 700 },
        body: { color: '#6b6090' },
      };
    case 'neumorphism':
      return {
        ...base,
        scene: { background: '#e6e2d8' },
        surface: {
          background: '#e6e2d8',
          border: 'none',
          borderRadius: 18,
          boxShadow: '8px 8px 16px rgba(180,174,160,0.8), -8px -8px 16px rgba(255,255,255,0.9)',
          color: '#4a463c',
        },
        button: {
          background: '#e6e2d8',
          color: '#8a5b46',
          border: 'none',
          borderRadius: 12,
          boxShadow: '4px 4px 8px rgba(180,174,160,0.8), -4px -4px 8px rgba(255,255,255,0.9)',
        },
        heading: { color: '#3a362e', fontWeight: 600 },
        body: { color: '#6e695c' },
      };
    case 'skeuomorphism':
      return {
        ...base,
        scene: { background: 'linear-gradient(160deg, #d8d2c4, #c4bca8)' },
        surface: {
          background: 'linear-gradient(180deg, #f7f3ea, #e2dccc)',
          border: '1px solid #b8af9a',
          borderRadius: 10,
          boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.8), 0 6px 14px rgba(80,70,50,0.25)',
          color: '#3c3424',
        },
        button: {
          background: 'linear-gradient(180deg, #b98a5e, #8a5f38)',
          color: '#fff',
          border: '1px solid #6e4a28',
          borderRadius: 7,
        },
        heading: { color: '#34291a', fontWeight: 600 },
        body: { color: '#6a5c44' },
        grain: 0.18,
      };
    case 'aurora-gradient':
      return {
        ...base,
        scene: {
          background:
            'radial-gradient(40% 50% at 30% 30%, #c08bff, transparent), radial-gradient(45% 55% at 75% 35%, #ff8bbf, transparent), radial-gradient(50% 60% at 55% 85%, #8be0c0, transparent), #efeafc',
        },
        surface: {
          background: 'rgba(255,255,255,0.42)',
          border: '1px solid rgba(255,255,255,0.6)',
          borderRadius: 18,
          boxShadow: '0 10px 30px rgba(120,80,180,0.2)',
          backdropFilter: 'blur(8px)',
          color: '#3a2f50',
        },
        button: { background: 'linear-gradient(90deg,#b06bff,#ff6bbf)', color: '#fff', border: 'none', borderRadius: 999 },
        heading: { color: '#33285a', fontWeight: 600 },
        body: { color: '#5b5080' },
      };

    // ── Structure ──
    case 'bento':
      return {
        ...base,
        surface: {
          background: '#fbf9f4',
          border: '1px solid rgba(28,25,20,0.1)',
          borderRadius: 16,
          boxShadow: '0 4px 12px rgba(28,25,20,0.08)',
          color: INK,
        },
        button: { background: '#1a1814', color: '#fff', border: 'none', borderRadius: 10 },
      };
    case 'editorial':
      return {
        ...base,
        scene: { background: '#f4f1e9' },
        surface: { background: 'transparent', border: 'none', borderRadius: 0, boxShadow: 'none', color: INK },
        button: { background: 'transparent', color: INK, border: '1px solid #1a1814', borderRadius: 0 },
        heading: { color: INK, fontWeight: 700, fontFamily: "'Playfair Display', Georgia, serif" },
        body: { color: '#5c574c' },
      };
    case 'kinetic-typography':
      return {
        ...base,
        surface: { background: 'transparent', border: 'none', boxShadow: 'none', color: INK },
        button: { background: '#1a1814', color: '#fff', border: 'none', borderRadius: 6 },
        heading: { color: INK, fontWeight: 900, fontFamily: "'Fraunces', Georgia, serif", letterSpacing: '-0.03em' },
        body: { color: '#5c574c' },
      };
    case 'ultra-minimalism':
      return {
        ...base,
        scene: { background: '#f6f4ee' },
        surface: { background: 'transparent', border: 'none', boxShadow: 'none', color: INK },
        button: { background: 'transparent', color: INK, border: '1px solid rgba(28,25,20,0.2)', borderRadius: 0 },
        heading: { color: INK, fontWeight: 500 },
        body: { color: '#8a8475' },
      };

    // ── Vibe ──
    case 'frutiger-aero':
      return {
        ...base,
        scene: { background: 'linear-gradient(160deg, #aee6ff, #5bc0f0 60%, #2ea8e0)' },
        surface: {
          background: 'linear-gradient(180deg, rgba(255,255,255,0.85), rgba(255,255,255,0.45))',
          border: '1px solid rgba(255,255,255,0.9)',
          borderRadius: 16,
          boxShadow: '0 8px 22px rgba(0,90,150,0.3), inset 0 1px 0 rgba(255,255,255,1)',
          color: '#0a3a52',
        },
        button: {
          background: 'linear-gradient(180deg, #6fd0ff, #1c92d6)',
          color: '#fff',
          border: '1px solid #1c80c0',
          borderRadius: 999,
          boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.8)',
        },
        heading: { color: '#073549', fontWeight: 700 },
        body: { color: '#2a6585' },
      };
    case 'y2k':
      return {
        ...base,
        scene: { background: '#05050a' },
        surface: {
          background: '#0c0c16',
          border: '1px solid #2bf5ff',
          borderRadius: 4,
          boxShadow: '0 0 18px rgba(43,245,255,0.5)',
          color: '#d6faff',
        },
        button: { background: 'linear-gradient(90deg,#ff2bd0,#2bf5ff)', color: '#05050a', border: 'none', borderRadius: 2 },
        heading: { color: '#2bf5ff', fontWeight: 800 },
        body: { color: '#9adfe6' },
      };
    case 'neo-brutalism':
      return {
        ...base,
        scene: { background: '#ffe14d' },
        surface: {
          background: '#fff',
          border: '3px solid #000',
          borderRadius: 0,
          boxShadow: '6px 6px 0 0 #000',
          color: '#000',
        },
        button: { background: '#ff5c00', color: '#000', border: '3px solid #000', borderRadius: 0, boxShadow: '4px 4px 0 0 #000' },
        heading: { color: '#000', fontWeight: 800 },
        body: { color: '#222' },
      };
    case 'cutealism':
      return {
        ...base,
        scene: { background: 'linear-gradient(160deg, #ffe9f4, #e9f4ff)' },
        surface: {
          background: '#fff',
          border: '2px dashed #ffaad4',
          borderRadius: 22,
          boxShadow: '0 8px 18px rgba(255,140,200,0.3)',
          color: '#7a3a5c',
        },
        button: { background: '#ff8ec7', color: '#fff', border: '2px solid #fff', borderRadius: 999, boxShadow: '0 4px 10px rgba(255,140,200,0.5)' },
        heading: { color: '#9c3a6e', fontWeight: 800 },
        body: { color: '#b56a90' },
      };
    case 'retro-futurism':
      return {
        ...base,
        scene: { background: '#0a0e08' },
        surface: {
          background: '#0d130b',
          border: '1px solid #2f8f3a',
          borderRadius: 4,
          boxShadow: '0 0 14px rgba(80,255,120,0.3), inset 0 0 30px rgba(0,0,0,0.6)',
          color: '#7dff8c',
        },
        button: { background: 'transparent', color: '#7dff8c', border: '1px solid #7dff8c', borderRadius: 2 },
        heading: { color: '#aaffb0', fontWeight: 600 },
        body: { color: '#5fbf6a' },
        mono: true,
      };

    // ── Spatial ──
    case 'spatial-depth':
      return {
        ...base,
        scene: { background: 'linear-gradient(160deg, #e7e2f0, #d4cce6)' },
        surface: {
          background: 'rgba(255,255,255,0.7)',
          border: '1px solid rgba(255,255,255,0.8)',
          borderRadius: 16,
          boxShadow: '0 18px 40px rgba(60,40,100,0.3), 0 4px 10px rgba(60,40,100,0.2)',
          backdropFilter: 'blur(6px)',
          color: '#2c2447',
        },
        button: { background: '#5a4a9c', color: '#fff', border: 'none', borderRadius: 10 },
      };
    case 'industrial':
      return {
        ...base,
        scene: { background: 'repeating-linear-gradient(90deg,#3a3a3e 0 2px,#2e2e32 2px 4px)' },
        surface: {
          background: 'linear-gradient(180deg,#4a4a50,#34343a)',
          border: '1px solid #1c1c20',
          borderRadius: 8,
          boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.15), 0 6px 14px rgba(0,0,0,0.5)',
          color: '#e6e6ea',
        },
        button: { background: 'linear-gradient(180deg,#6a6a72,#3a3a40)', color: '#fff', border: '1px solid #1c1c20', borderRadius: 6 },
        heading: { color: '#f0f0f4', fontWeight: 600 },
        body: { color: '#a8a8b0' },
        grain: 0.12,
      };
    case 'webgl-3d':
      return {
        ...base,
        scene: { background: 'radial-gradient(60% 80% at 50% 40%, #2a2f4a, #0d0f1a)' },
        surface: {
          background: 'rgba(255,255,255,0.08)',
          border: '1px solid rgba(255,255,255,0.18)',
          borderRadius: 14,
          boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
          backdropFilter: 'blur(10px)',
          color: '#eef',
        },
        button: { background: '#00d0c0', color: '#04201d', border: 'none', borderRadius: 8 },
        heading: { color: '#fff', fontWeight: 600 },
        body: { color: '#aab' },
      };

    // ── AI-native ──
    case 'generative-ui':
      return {
        ...base,
        scene: { background: 'linear-gradient(160deg, #f3eafc, #eaf0fc)' },
        surface: {
          background: '#fff',
          border: '1.5px solid transparent',
          borderRadius: 16,
          backgroundImage: 'linear-gradient(#fff,#fff), linear-gradient(120deg,#b06bff,#ff6bbf,#6b9bff)',
          backgroundOrigin: 'border-box',
          backgroundClip: 'padding-box, border-box',
          boxShadow: '0 0 24px rgba(160,100,255,0.3)',
          color: '#33285a',
        } as CSSProperties,
        button: { background: 'linear-gradient(90deg,#a06bff,#ff6bbf)', color: '#fff', border: 'none', borderRadius: 10 },
        heading: { color: '#33285a', fontWeight: 600 },
        body: { color: '#6b6090' },
      };
    case 'agentic':
      return {
        ...base,
        scene: { background: 'radial-gradient(60% 80% at 50% 50%, #1a1d3a, #0a0b16)' },
        surface: {
          background: 'rgba(255,255,255,0.06)',
          border: '1px solid rgba(140,160,255,0.3)',
          borderRadius: 20,
          boxShadow: '0 0 40px rgba(100,120,255,0.4)',
          backdropFilter: 'blur(12px)',
          color: '#dfe2ff',
        },
        button: { background: 'radial-gradient(circle,#8b9bff,#5a6be0)', color: '#fff', border: 'none', borderRadius: 999 },
        heading: { color: '#fff', fontWeight: 600 },
        body: { color: '#a6acd8' },
      };
    case 'oled-dark':
      return {
        ...base,
        scene: { background: '#000' },
        surface: {
          background: '#000',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: 16,
          boxShadow: '0 0 30px rgba(0,229,255,0.25)',
          color: '#eaffff',
        },
        button: { background: '#00e5ff', color: '#001a1d', border: 'none', borderRadius: 10, boxShadow: '0 0 16px rgba(0,229,255,0.7)' },
        heading: { color: '#fff', fontWeight: 600 },
        body: { color: '#8aa' },
      };
    case 'microinteraction':
      return {
        ...base,
        surface: {
          background: '#fbf9f4',
          border: '1px solid rgba(28,25,20,0.12)',
          borderRadius: 14,
          boxShadow: '0 6px 16px rgba(28,25,20,0.1)',
          color: INK,
        },
        button: { background: '#5b8c6e', color: '#fff', border: 'none', borderRadius: 999 },
        heading: { color: INK, fontWeight: 600 },
        body: { color: '#5c574c' },
      };

    default:
      return base;
  }
}
