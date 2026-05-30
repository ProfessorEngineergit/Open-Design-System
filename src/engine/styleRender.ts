import type { CSSProperties } from 'react';

export interface SampleStyle {
  /** The little scene painted behind the sample. */
  scene: CSSProperties;
  /** The sample card itself. */
  surface: CSSProperties;
  /** The sample button. */
  button: CSSProperties;
  /** How the heading text looks. */
  heading: CSSProperties;
  /** How the body text looks. */
  body: CSSProperties;
  /** Set when the sample should be monospace. */
  mono?: boolean;
  /** A touch of grain (0–1) on the surface only, if the style calls for it. */
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

/** A quick visual spec for one style — just enough to render a believable sample. */
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

    // ── Morphism (extended) ──
    case 'glassmorphism-classic':
      return {
        ...base,
        scene: { background: 'linear-gradient(160deg, #c5d8ff, #f4c5e8 70%, #ffd9a8)' },
        surface: {
          background: 'rgba(255,255,255,0.55)',
          border: '1px solid rgba(255,255,255,0.7)',
          borderRadius: 18,
          boxShadow: '0 10px 30px rgba(50,30,90,0.18)',
          backdropFilter: 'blur(20px) saturate(140%)',
          color: '#2a2540',
        },
        button: { background: 'rgba(255,255,255,0.6)', color: '#2a2540', border: '1px solid rgba(255,255,255,0.8)', borderRadius: 999 },
        heading: { color: '#1f1a3a', fontWeight: 600 },
        body: { color: '#4a4470' },
      };
    case 'iridescent-foil':
      return {
        ...base,
        scene: {
          background:
            'conic-gradient(from 210deg at 50% 50%, #ffd1f0, #c0f0ff, #fff2c0, #d8c5ff, #ffd1f0)',
        },
        surface: {
          background:
            'linear-gradient(135deg, rgba(255,255,255,0.5), rgba(255,255,255,0.18)), conic-gradient(from 90deg, #ffd1f0, #c0f0ff, #fff2c0, #d8c5ff, #ffd1f0)',
          border: '1px solid rgba(255,255,255,0.7)',
          borderRadius: 16,
          boxShadow: '0 10px 30px rgba(160,120,200,0.25)',
          color: '#2c2645',
        },
        button: {
          background: 'conic-gradient(from 0deg, #ff9dd5, #9dd5ff, #ffd49d, #b59dff, #ff9dd5)',
          color: '#1a1830',
          border: '1px solid rgba(255,255,255,0.8)',
          borderRadius: 999,
        },
        heading: { color: '#1f1a3a', fontWeight: 700 },
        body: { color: '#5a527a' },
        grain: 0.08,
      };
    case 'risograph':
      return {
        ...base,
        scene: { background: '#fbf6e9' },
        surface: {
          background: '#fbf6e9',
          border: '2px solid #ff5fa2',
          borderRadius: 6,
          boxShadow: '4px 4px 0 0 rgba(91,168,224,0.85)',
          color: '#2b2438',
        },
        button: { background: '#ff5fa2', color: '#fbf6e9', border: '2px solid #2b2438', borderRadius: 4 },
        heading: { color: '#2b2438', fontWeight: 700 },
        body: { color: '#5b5570' },
        grain: 0.22,
      };
    case 'plywood-material':
      return {
        ...base,
        scene: {
          background:
            'repeating-linear-gradient(95deg, #d8b78a 0 6px, #cfa97a 6px 9px, #d8b78a 9px 18px), #c9a070',
        },
        surface: {
          background: 'linear-gradient(180deg,#fbf3e1,#f1e7cf)',
          border: '1px solid #b08c5e',
          borderRadius: 6,
          boxShadow: '0 8px 18px rgba(80,55,25,0.3)',
          color: '#3a2c14',
        },
        button: { background: '#7a5230', color: '#fbf3e1', border: '1px solid #5a3a1c', borderRadius: 4 },
        heading: { color: '#2a1d08', fontWeight: 700, fontFamily: "'Roboto Slab', Georgia, serif" },
        body: { color: '#5a4830' },
        grain: 0.15,
      };

    // ── Structure (extended) ──
    case 'swiss-modernism':
      return {
        ...base,
        scene: { background: '#f4f1e9' },
        surface: {
          background: '#fbf9f4',
          border: 'none',
          borderRadius: 0,
          boxShadow: 'none',
          borderTop: '2px solid #1a1814',
          color: '#1a1814',
        },
        button: { background: 'transparent', color: '#1a1814', border: '1px solid #1a1814', borderRadius: 0 },
        heading: { color: '#1a1814', fontWeight: 700, fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif", letterSpacing: '-0.02em' },
        body: { color: '#4c463c' },
      };
    case 'newsroom-editorial':
      return {
        ...base,
        scene: { background: '#f8f3e8' },
        surface: { background: '#f8f3e8', border: 'none', borderRadius: 0, boxShadow: 'none', color: '#1a1814' },
        button: { background: '#1a1814', color: '#f8f3e8', border: 'none', borderRadius: 0 },
        heading: { color: '#1a1814', fontWeight: 800, fontFamily: "'Playfair Display', Georgia, serif" },
        body: { color: '#3c362c', fontFamily: "'Source Serif 4', Georgia, serif" },
      };
    case 'maximalism':
      return {
        ...base,
        scene: {
          background:
            'radial-gradient(40% 40% at 20% 30%, #ffd45f, transparent), radial-gradient(35% 35% at 75% 65%, #5fb8ff, transparent), radial-gradient(40% 40% at 60% 20%, #ff6bbf, transparent), #fdf2ef',
        },
        surface: {
          background: '#fffae8',
          border: '3px solid #1a1814',
          borderRadius: 14,
          boxShadow: '7px 7px 0 0 #ff5fa2, 12px 12px 0 0 #5fb8ff',
          color: '#1a1814',
          transform: 'rotate(-1.5deg)',
        },
        button: { background: '#ffd45f', color: '#1a1814', border: '3px solid #1a1814', borderRadius: 4 },
        heading: { color: '#1a1814', fontWeight: 900 },
        body: { color: '#3c2c14' },
      };
    case 'dieter-rams':
      return {
        ...base,
        scene: { background: '#e8e5e0' },
        surface: {
          background: '#fbfaf7',
          border: '1px solid #c5c0b8',
          borderRadius: 2,
          boxShadow: 'none',
          color: '#1c1c1c',
        },
        button: { background: '#d84a1f', color: '#fff', border: 'none', borderRadius: 2 },
        heading: { color: '#1c1c1c', fontWeight: 500, letterSpacing: '0.04em', textTransform: 'uppercase', fontSize: 12 } as CSSProperties,
        body: { color: '#5a5854' },
      };
    case 'linear-pro':
      return {
        ...base,
        scene: {
          background:
            'radial-gradient(60% 70% at 30% 25%, rgba(108,99,255,0.35), transparent 70%), radial-gradient(50% 60% at 80% 60%, rgba(43,151,255,0.25), transparent 72%), #0a0b14',
        },
        surface: {
          background: 'rgba(255,255,255,0.04)',
          border: '1px solid rgba(255,255,255,0.06)',
          borderRadius: 10,
          boxShadow: '0 1px 0 rgba(255,255,255,0.04) inset',
          color: '#e7e9ff',
        },
        button: { background: '#6c63ff', color: '#fff', border: 'none', borderRadius: 6 },
        heading: { color: '#f6f7ff', fontWeight: 600, letterSpacing: '-0.01em' },
        body: { color: '#a8acce' },
      };

    // ── Vibe (extended) ──
    case 'vaporwave':
      return {
        ...base,
        scene: {
          background:
            'linear-gradient(180deg, #ff2bd0 0%, #b04bff 35%, #2bf5ff 70%, #2a1166 100%)',
        },
        surface: {
          background: 'rgba(20,8,40,0.55)',
          border: '1px solid #ff2bd0',
          borderRadius: 0,
          boxShadow: '0 0 22px rgba(43,245,255,0.5), inset 0 0 18px rgba(255,43,208,0.25)',
          color: '#f3e8ff',
        },
        button: { background: 'transparent', color: '#2bf5ff', border: '1px solid #2bf5ff', borderRadius: 0 },
        heading: { color: '#fff', fontWeight: 800, letterSpacing: '0.08em' },
        body: { color: '#d8c8ff' },
      };
    case 'cyberpunk-neon':
      return {
        ...base,
        scene: { background: '#05050a' },
        surface: {
          background: '#0a0a16',
          border: '1px solid #ff2bd0',
          borderRadius: 0,
          boxShadow: '0 0 18px rgba(255,43,208,0.6)',
          color: '#eaffff',
          clipPath: 'polygon(0 8px, 8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%)',
        } as CSSProperties,
        button: { background: '#2bf5ff', color: '#05050a', border: 'none', borderRadius: 0, boxShadow: '0 0 14px rgba(43,245,255,0.7)' },
        heading: { color: '#ff2bd0', fontWeight: 700 },
        body: { color: '#9adfe6' },
      };
    case 'glitch':
      return {
        ...base,
        scene: { background: '#0c0c10' },
        surface: {
          background: '#15151b',
          border: '1px solid #555',
          borderRadius: 2,
          boxShadow: '4px 0 0 0 rgba(255,43,208,0.5), -4px 0 0 0 rgba(43,245,255,0.5)',
          color: '#eee',
        },
        button: { background: '#15151b', color: '#fff', border: '1px solid #888', borderRadius: 0 },
        heading: { color: '#fff', fontWeight: 700, textShadow: '2px 0 #ff2bd0, -2px 0 #2bf5ff' } as CSSProperties,
        body: { color: '#bbb' },
      };
    case 'dark-academia':
      return {
        ...base,
        scene: { background: 'linear-gradient(160deg, #f3ead2, #d8c79c)' },
        surface: {
          background: '#f6efdc',
          border: '1px solid #a18650',
          borderRadius: 4,
          boxShadow: '0 8px 18px rgba(60,40,10,0.25)',
          color: '#3a2a10',
        },
        button: { background: '#b58a3a', color: '#f6efdc', border: '1px solid #6b4a18', borderRadius: 2 },
        heading: { color: '#2a1d08', fontWeight: 700, fontFamily: "'Playfair Display', Georgia, serif" },
        body: { color: '#5a4828', fontFamily: "'Lora', Georgia, serif" },
        grain: 0.18,
      };
    case 'solarpunk':
      return {
        ...base,
        scene: {
          background:
            'linear-gradient(160deg, #d8ecd5, #a8d8b0 60%, #6fb88a), radial-gradient(50% 50% at 80% 20%, #f5d690, transparent)',
        },
        surface: {
          background: '#f8f4e8',
          border: '1px solid #6fb88a',
          borderRadius: 22,
          boxShadow: '0 8px 18px rgba(30,80,40,0.18)',
          color: '#1f3a25',
        },
        button: { background: '#2f6a4a', color: '#f8f4e8', border: 'none', borderRadius: 999 },
        heading: { color: '#1f3a25', fontWeight: 700 },
        body: { color: '#3a5d40' },
      };
    case 'wabi-sabi':
      return {
        ...base,
        scene: { background: 'linear-gradient(160deg, #efe6d5, #d4c4a8)' },
        surface: {
          background: '#f6efdc',
          border: '1px solid #b8a47e',
          borderRadius: 4,
          boxShadow: '0 4px 12px rgba(80,60,30,0.15)',
          color: '#3a2e1a',
          transform: 'rotate(-0.4deg)',
        },
        button: { background: 'transparent', color: '#3a2e1a', border: '1px solid #3a2e1a', borderRadius: 0 },
        heading: { color: '#28200e', fontWeight: 500 },
        body: { color: '#5a4e36' },
        grain: 0.14,
      };
    case 'memphis-80s':
      return {
        ...base,
        scene: {
          background:
            'radial-gradient(circle at 20% 30%, #ffd60a 0 14px, transparent 14px), radial-gradient(circle at 80% 65%, #ff2bd0 0 14px, transparent 14px), repeating-linear-gradient(45deg,#fff 0 8px,#1a1814 8px 10px)',
        },
        surface: {
          background: '#fff',
          border: '3px solid #1a1814',
          borderRadius: 0,
          boxShadow: '6px 6px 0 0 #2bf5ff, 12px 12px 0 0 #ff2bd0',
          color: '#1a1814',
        },
        button: { background: '#ffd60a', color: '#1a1814', border: '3px solid #1a1814', borderRadius: 0 },
        heading: { color: '#1a1814', fontWeight: 900 },
        body: { color: '#1a1814' },
      };
    case 'anti-design':
      return {
        ...base,
        scene: { background: '#fff' },
        surface: { background: '#fff', border: '1px solid #000', borderRadius: 0, boxShadow: 'none', color: '#000' },
        button: { background: '#dcdcdc', color: '#000', border: '1px outset #aaa', borderRadius: 2 },
        heading: { color: '#000', fontWeight: 700, fontFamily: "'Times New Roman', Times, serif" } as CSSProperties,
        body: { color: '#000', fontFamily: "'Times New Roman', Times, serif" },
      };
    case 'pixel-art':
      return {
        ...base,
        scene: { background: 'repeating-conic-gradient(#1d3a7a 0 25%, #295ec0 0 50%) 0 0/24px 24px' },
        surface: {
          background: '#fbf9f4',
          border: '4px solid #1a1814',
          borderRadius: 0,
          boxShadow: '4px 4px 0 0 #1a1814, 8px 8px 0 0 #ff5c00',
          color: '#1a1814',
          imageRendering: 'pixelated' as CSSProperties['imageRendering'],
        },
        button: { background: '#ff5c00', color: '#fff', border: '3px solid #1a1814', borderRadius: 0, boxShadow: '3px 3px 0 0 #1a1814' },
        heading: { color: '#1a1814', fontWeight: 700, fontFamily: "'Space Mono', monospace" },
        body: { color: '#1a1814', fontFamily: "'Space Mono', monospace" },
        mono: true,
      };
    case 'hand-drawn':
      return {
        ...base,
        scene: { background: '#fbf6e9' },
        surface: {
          background: '#fffaee',
          border: '2px solid #1a1814',
          borderRadius: 18,
          boxShadow: '3px 4px 0 0 rgba(26,24,20,0.25)',
          color: '#1a1814',
        },
        button: { background: '#fffaee', color: '#1a1814', border: '2px solid #1a1814', borderRadius: 14 },
        heading: { color: '#1a1814', fontWeight: 700, fontFamily: "'Caveat', 'Comic Sans MS', cursive" } as CSSProperties,
        body: { color: '#3a3630', fontFamily: "'Caveat', 'Comic Sans MS', cursive" } as CSSProperties,
        grain: 0.12,
      };

    // ── Spatial (extended) ──
    case 'photographic-bw':
      return {
        ...base,
        scene: {
          background:
            'linear-gradient(180deg, rgba(0,0,0,0.2), rgba(0,0,0,0.7)), repeating-linear-gradient(90deg,#888 0 2px,#666 2px 6px)',
        },
        surface: {
          background: 'transparent',
          border: 'none',
          borderRadius: 0,
          boxShadow: 'none',
          color: '#fff',
          borderTop: '1px solid #fff',
        },
        button: { background: '#fff', color: '#000', border: 'none', borderRadius: 0 },
        heading: { color: '#fff', fontWeight: 600 },
        body: { color: '#ddd' },
      };
    case 'architectural-blueprint':
      return {
        ...base,
        scene: {
          background:
            'linear-gradient(0deg, rgba(20,60,120,0.92), rgba(20,60,120,0.92)), repeating-linear-gradient(0deg, transparent 0 16px, rgba(255,255,255,0.06) 16px 17px), repeating-linear-gradient(90deg, transparent 0 16px, rgba(255,255,255,0.06) 16px 17px)',
        },
        surface: {
          background: 'transparent',
          border: '1px dashed #8ec5ff',
          borderRadius: 0,
          boxShadow: 'none',
          color: '#d4e7ff',
        },
        button: { background: 'transparent', color: '#8ec5ff', border: '1px solid #8ec5ff', borderRadius: 0 },
        heading: { color: '#fff', fontWeight: 600, fontFamily: "'IBM Plex Mono', monospace" },
        body: { color: '#c8d8ee', fontFamily: "'IBM Plex Mono', monospace" },
        mono: true,
      };

    // ── AI-native (extended) ──
    case 'streaming-tokens':
      return {
        ...base,
        scene: {
          background: 'radial-gradient(60% 80% at 50% 40%, #1a1d3a, #0a0b16)',
        },
        surface: {
          background: 'rgba(255,255,255,0.04)',
          border: '1px solid rgba(140,160,255,0.25)',
          borderRadius: 14,
          boxShadow: '0 0 30px rgba(100,120,255,0.25)',
          backdropFilter: 'blur(10px)',
          color: '#e0e4ff',
        },
        button: { background: '#8b9bff', color: '#0a0b16', border: 'none', borderRadius: 8 },
        heading: { color: '#fff', fontWeight: 600 },
        body: { color: '#a8b0d8' },
      };

    // ── Structure (systems & eras) ──
    case 'flat-design':
      return {
        ...base,
        scene: { background: '#ecf0f1' },
        surface: { background: '#ffffff', border: 'none', borderRadius: 6, boxShadow: 'none', color: '#2c3e50' },
        button: { background: '#1abc9c', color: '#fff', border: 'none', borderRadius: 4 },
        heading: { color: '#2c3e50', fontWeight: 700 },
        body: { color: '#7f8c8d' },
      };
    case 'material-2':
      return {
        ...base,
        scene: { background: '#fafafa' },
        surface: { background: '#ffffff', border: 'none', borderRadius: 4, boxShadow: '0 1px 3px rgba(0,0,0,0.2), 0 1px 2px rgba(0,0,0,0.12)', color: '#212121' },
        button: { background: '#6200ee', color: '#fff', border: 'none', borderRadius: 4 },
        heading: { color: '#212121', fontWeight: 600 },
        body: { color: '#5f5f5f' },
      };
    case 'metro':
      return {
        ...base,
        scene: { background: '#1f1f1f' },
        surface: { background: '#2d2d30', border: 'none', borderRadius: 0, boxShadow: 'none', color: '#ffffff' },
        button: { background: '#00a4ef', color: '#fff', border: 'none', borderRadius: 0 },
        heading: { color: '#ffffff', fontWeight: 300 },
        body: { color: '#c8c8c8' },
      };
    case 'ibm-carbon':
      return {
        ...base,
        scene: { background: '#f4f4f4' },
        surface: { background: '#ffffff', border: '1px solid #e0e0e0', borderRadius: 0, boxShadow: 'none', color: '#161616' },
        button: { background: '#0f62fe', color: '#fff', border: 'none', borderRadius: 0 },
        heading: { color: '#161616', fontWeight: 600 },
        body: { color: '#525252' },
        mono: true,
      };
    case 'modern-minimal':
      return {
        ...base,
        scene: { background: '#fafafa' },
        surface: { background: '#ffffff', border: '1px solid rgba(0,0,0,0.08)', borderRadius: 10, boxShadow: '0 1px 2px rgba(0,0,0,0.06)', color: '#18181b' },
        button: { background: '#18181b', color: '#fafafa', border: 'none', borderRadius: 8 },
        heading: { color: '#18181b', fontWeight: 600 },
        body: { color: '#71717a' },
      };
    case 'fintech':
      return {
        ...base,
        scene: { background: 'linear-gradient(160deg, #efeafc, #e7ecfb)' },
        surface: { background: '#ffffff', border: 'none', borderRadius: 18, boxShadow: '0 10px 26px rgba(60,40,160,0.14)', color: '#0f1024' },
        button: { background: '#5b3df5', color: '#fff', border: 'none', borderRadius: 12 },
        heading: { color: '#0f1024', fontWeight: 700 },
        body: { color: '#6b6b80' },
      };

    // ── Morphism (extended again) ──
    case 'skeuominimalism':
      return {
        ...base,
        scene: { background: '#eef0f3' },
        surface: {
          background: 'linear-gradient(180deg,#ffffff,#f1f3f6)',
          border: '1px solid rgba(28,25,20,0.08)',
          borderRadius: 14,
          boxShadow: '0 6px 14px rgba(40,50,70,0.14), inset 0 1px 0 rgba(255,255,255,0.9)',
          color: '#2a2e35',
        },
        button: { background: 'linear-gradient(180deg,#4a6cf7,#3a55d8)', color: '#fff', border: 'none', borderRadius: 10, boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.4), 0 3px 8px rgba(58,85,216,0.4)' },
        heading: { color: '#2a2e35', fontWeight: 600 },
        body: { color: '#6a7080' },
      };
    case 'duotone':
      return {
        ...base,
        scene: { background: 'linear-gradient(135deg, #1f2a6b, #ff4d8d)' },
        surface: { background: 'rgba(20,24,60,0.7)', border: '1px solid rgba(255,77,141,0.5)', borderRadius: 8, boxShadow: '0 10px 24px rgba(20,20,60,0.4)', color: '#ffd9e6' },
        button: { background: '#ff4d8d', color: '#1a1030', border: 'none', borderRadius: 6 },
        heading: { color: '#ff7db0', fontWeight: 800 },
        body: { color: '#aeb6e8' },
      };

    // ── Vibe (movements & subcultures) ──
    case 'bauhaus':
      return {
        ...base,
        scene: { background: '#f0e9da' },
        surface: { background: '#ffffff', border: '2px solid #1a1814', borderRadius: 0, boxShadow: 'none', color: '#1a1814' },
        button: { background: '#d6202a', color: '#fff', border: '2px solid #1a1814', borderRadius: 0 },
        heading: { color: '#1a1814', fontWeight: 700 },
        body: { color: '#4a463c' },
      };
    case 'art-deco':
      return {
        ...base,
        scene: { background: 'linear-gradient(160deg,#0e211c,#08110e)' },
        surface: { background: '#0c1512', border: '1px solid #c9a24b', borderRadius: 2, boxShadow: '0 0 0 3px rgba(201,162,75,0.18)', color: '#e9dcb8' },
        button: { background: 'linear-gradient(180deg,#e6c878,#b8902f)', color: '#0e211c', border: 'none', borderRadius: 1 },
        heading: { color: '#d9b85a', fontWeight: 700, fontFamily: "'Playfair Display', Georgia, serif", letterSpacing: '0.08em' },
        body: { color: '#b8b09a' },
      };
    case 'art-nouveau':
      return {
        ...base,
        scene: { background: 'linear-gradient(160deg,#efe6d2,#ddc9a8)' },
        surface: { background: '#f6efda', border: '1px solid #a98b4a', borderRadius: 28, boxShadow: '0 6px 16px rgba(90,60,20,0.2)', color: '#4a3320' },
        button: { background: '#6b7a3a', color: '#f6efda', border: 'none', borderRadius: 999 },
        heading: { color: '#5a3a22', fontWeight: 700, fontFamily: "'Playfair Display', Georgia, serif" },
        body: { color: '#6a5c44' },
        grain: 0.12,
      };
    case 'constructivism':
      return {
        ...base,
        scene: { background: '#ece6da' },
        surface: { background: '#ffffff', border: '2px solid #1a1814', borderRadius: 0, boxShadow: '6px 6px 0 0 #d6202a', color: '#1a1814' },
        button: { background: '#d6202a', color: '#fff', border: 'none', borderRadius: 0 },
        heading: { color: '#1a1814', fontWeight: 800, letterSpacing: '0.02em' },
        body: { color: '#3a352c' },
      };
    case 'pop-art':
      return {
        ...base,
        scene: { background: 'radial-gradient(#ffd60a 22%, transparent 23%) 0 0/14px 14px, #ffe14d' },
        surface: { background: '#ffffff', border: '3px solid #000000', borderRadius: 0, boxShadow: '6px 6px 0 0 #000', color: '#000000' },
        button: { background: '#ff2b56', color: '#fff', border: '3px solid #000', borderRadius: 0 },
        heading: { color: '#0040c0', fontWeight: 900 },
        body: { color: '#222222' },
      };
    case 'grunge':
      return {
        ...base,
        scene: { background: '#2a2724' },
        surface: { background: '#f0e8d8', border: 'none', borderRadius: 2, boxShadow: '0 8px 18px rgba(0,0,0,0.5)', color: '#1a1814', transform: 'rotate(-1deg)' },
        button: { background: '#1a1814', color: '#f0e8d8', border: 'none', borderRadius: 0 },
        heading: { color: '#1a1814', fontWeight: 800 },
        body: { color: '#4a443a' },
        grain: 0.3,
      };
    case 'steampunk':
      return {
        ...base,
        scene: { background: 'linear-gradient(160deg,#2a1d10,#1a120a)' },
        surface: { background: 'linear-gradient(180deg,#b8894a,#8a5f30)', border: '1px solid #5a3a1c', borderRadius: 8, boxShadow: 'inset 0 1px 0 rgba(255,230,180,0.4), 0 8px 18px rgba(0,0,0,0.5)', color: '#2a1c0c' },
        button: { background: 'linear-gradient(180deg,#d8b06a,#9a6f38)', color: '#2a1c0c', border: '1px solid #5a3a1c', borderRadius: 6 },
        heading: { color: '#2a1c0c', fontWeight: 700, fontFamily: "'Playfair Display', Georgia, serif" },
        body: { color: '#3e2c16' },
        grain: 0.16,
      };
    case 'cottagecore':
      return {
        ...base,
        scene: { background: 'linear-gradient(160deg,#dfe6cf,#f3ecd9)' },
        surface: { background: '#fbf6ea', border: '1px solid #cdbfa0', borderRadius: 18, boxShadow: '0 6px 14px rgba(120,110,70,0.18)', color: '#5a4a30' },
        button: { background: '#8a9a6a', color: '#fbf6ea', border: 'none', borderRadius: 999 },
        heading: { color: '#5a4630', fontWeight: 700, fontFamily: "'Lora', Georgia, serif" },
        body: { color: '#7a6f55' },
      };
    case 'quiet-luxury':
      return {
        ...base,
        scene: { background: '#e8e2d6' },
        surface: { background: 'transparent', border: 'none', borderRadius: 0, boxShadow: 'none', color: '#2a2620' },
        button: { background: 'transparent', color: '#2a2620', border: '1px solid #2a2620', borderRadius: 0 },
        heading: { color: '#2a2620', fontWeight: 500, fontFamily: "'Playfair Display', Georgia, serif" },
        body: { color: '#6a6456' },
      };
    case 'scandinavian':
      return {
        ...base,
        scene: { background: '#f3efe9' },
        surface: { background: '#ffffff', border: 'none', borderRadius: 12, boxShadow: '0 6px 16px rgba(60,50,40,0.1)', color: '#2e2a24' },
        button: { background: '#b08968', color: '#fff', border: 'none', borderRadius: 10 },
        heading: { color: '#2e2a24', fontWeight: 600 },
        body: { color: '#7a746a' },
      };
    case 'japandi':
      return {
        ...base,
        scene: { background: 'linear-gradient(160deg,#e7e1d5,#d8cfbd)' },
        surface: { background: '#f4efe6', border: '1px solid #cabfa9', borderRadius: 6, boxShadow: '0 4px 12px rgba(70,60,40,0.12)', color: '#2a2620' },
        button: { background: '#3a352e', color: '#f4efe6', border: 'none', borderRadius: 4 },
        heading: { color: '#2a2620', fontWeight: 600 },
        body: { color: '#6a6354' },
        grain: 0.1,
      };
    case 'acid-design':
      return {
        ...base,
        scene: { background: '#07070c' },
        surface: { background: '#10101a', border: '1px solid #39ff14', borderRadius: 4, boxShadow: '0 0 18px rgba(57,255,20,0.4)', color: '#e8ffe0' },
        button: { background: 'linear-gradient(180deg,#dfe8f0,#8fb0d8)', color: '#07070c', border: 'none', borderRadius: 2 },
        heading: { color: '#39ff14', fontWeight: 800 },
        body: { color: '#9aa0b0' },
      };

    // ── Spatial (extended again) ──
    case 'visionos':
      return {
        ...base,
        scene: { background: 'radial-gradient(50% 60% at 30% 30%, #b7c8e8, transparent 70%), radial-gradient(50% 60% at 75% 60%, #e8c6dc, transparent 72%), linear-gradient(160deg,#eef1f7,#dfe3ec)' },
        surface: { background: 'rgba(255,255,255,0.5)', border: '1px solid rgba(255,255,255,0.7)', borderRadius: 28, boxShadow: '0 24px 50px rgba(40,40,80,0.28), inset 0 1px 1px rgba(255,255,255,0.8)', backdropFilter: 'blur(20px) saturate(160%)', color: '#1a1a2a' },
        button: { background: 'rgba(255,255,255,0.6)', color: '#1a1a2a', border: '1px solid rgba(255,255,255,0.8)', borderRadius: 999, backdropFilter: 'blur(8px)' },
        heading: { color: '#1a1a2a', fontWeight: 600 },
        body: { color: '#4a4a5a' },
      };

    // ── AI-native (extended again) ──
    case 'claymation-3d':
      return {
        ...base,
        scene: { background: 'linear-gradient(160deg,#ffe6f2,#e6ecff)' },
        surface: { background: '#ffffff', border: 'none', borderRadius: 28, boxShadow: '0 18px 36px rgba(150,120,200,0.28)', color: '#3a3550' },
        button: { background: 'linear-gradient(180deg,#ff9ec7,#ff7db0)', color: '#fff', border: 'none', borderRadius: 999, boxShadow: 'inset 0 -3px 6px rgba(200,90,150,0.5), 0 6px 14px rgba(255,140,190,0.4)' },
        heading: { color: '#3a3550', fontWeight: 700 },
        body: { color: '#6a6388' },
      };

    default:
      return base;
  }
}
