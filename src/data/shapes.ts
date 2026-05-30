// Shape is one of the two things that actually compose on top of any look:
// it just decides how corners are treated, so it works the same whether the
// surface underneath is glass, clay or brutalist.

export interface ShapeOption {
  id: string;
  name: string;
  hint: string;
  /** corner radius for surfaces, in px */
  radius: number;
  /** corner radius for buttons, in px (999 = full pill) */
  buttonRadius: number;
  /** optional fancy border-radius string for an organic, hand-shaped corner */
  organic?: string;
  promptFragment: string;
}

export const SHAPE_OPTIONS: ShapeOption[] = [
  {
    id: 'sharp',
    name: 'Sharp',
    hint: 'Hard 90° corners. Editorial, brutalist.',
    radius: 0,
    buttonRadius: 0,
    promptFragment: 'Corners are sharp — 0px radius everywhere, hard 90° edges.',
  },
  {
    id: 'soft',
    name: 'Soft',
    hint: 'Barely-there rounding. Calm and neutral.',
    radius: 10,
    buttonRadius: 8,
    promptFragment: 'Corners are softly rounded (~10px) — gentle, neutral, never harsh or bubbly.',
  },
  {
    id: 'rounded',
    name: 'Rounded',
    hint: 'Friendly modern rounding.',
    radius: 22,
    buttonRadius: 14,
    promptFragment: 'Corners are clearly rounded (~22px on cards, ~14px on buttons) — friendly and modern.',
  },
  {
    id: 'pill',
    name: 'Pill',
    hint: 'Capsule buttons, big round cards.',
    radius: 28,
    buttonRadius: 999,
    promptFragment: 'Buttons and inputs are full pills (fully rounded ends); cards use a large ~28px radius.',
  },
  {
    id: 'expressive',
    name: 'Expressive (M3)',
    hint: 'Material 3 shape tokens — generous, pill buttons.',
    radius: 26,
    buttonRadius: 999,
    promptFragment:
      'Use Material 3 Expressive shape tokens: generously rounded containers (~26px), full-pill buttons, and a couple of larger "hero" radii for emphasis. Shape carries the personality.',
  },
  {
    id: 'organic',
    name: 'Organic',
    hint: 'Asymmetric, hand-shaped blobs.',
    radius: 30,
    buttonRadius: 999,
    organic: '42% 58% 68% 32% / 42% 45% 55% 58%',
    promptFragment:
      'Surfaces use organic, asymmetric corners (uneven per-corner border-radius, blob-like) so nothing feels machine-perfect; buttons stay pill-shaped.',
  },
];

export const shapeById = (id: string) => SHAPE_OPTIONS.find((s) => s.id === id);
