// Texture is the other thing that composes cleanly on top of any look — it's
// just an overlay on the surface, so it never fights with the look underneath.

export type TextureKind =
  | 'none'
  | 'grain'
  | 'paper'
  | 'noise'
  | 'scanlines'
  // effects borrowed from other looks, layered over whatever surface you picked
  | 'glass'
  | 'aurora'
  | 'neon'
  | 'holographic';

export interface TextureOption {
  id: string;
  name: string;
  hint: string;
  kind: TextureKind;
  /** overlay opacity 0..1 for the grain-style textures */
  grain: number;
  /** effects (glass, aurora…) are pulled from a look rather than being a flat grain */
  effect?: boolean;
  promptFragment: string;
}

export const TEXTURE_OPTIONS: TextureOption[] = [
  {
    id: 'clean',
    name: 'Clean',
    hint: 'No texture. Pure, flat surfaces.',
    kind: 'none',
    grain: 0,
    promptFragment: 'Surfaces are perfectly clean — no grain or noise overlay.',
  },
  {
    id: 'grain',
    name: 'Film grain',
    hint: 'A fine, even grain.',
    kind: 'grain',
    grain: 0.14,
    promptFragment: 'Add a fine film grain over surfaces (~14% opacity, overlay blend) so they feel less digital.',
  },
  {
    id: 'paper',
    name: 'Paper',
    hint: 'Subtle paper tooth.',
    kind: 'paper',
    grain: 0.2,
    promptFragment: 'Give surfaces a subtle paper tooth — a soft warm grain (~20%) like printed cardstock.',
  },
  {
    id: 'noise',
    name: 'Static',
    hint: 'Visible digital noise.',
    kind: 'noise',
    grain: 0.32,
    promptFragment: 'Lay a visible static/noise texture over surfaces (~32%) for a gritty, tactile feel.',
  },
  {
    id: 'scanlines',
    name: 'Scanlines',
    hint: 'Retro CRT lines.',
    kind: 'scanlines',
    grain: 0,
    promptFragment: 'Overlay faint horizontal CRT scanlines across surfaces for a retro-screen feel.',
  },
  // ── effects borrowed from other looks, layered on top of your base ──
  {
    id: 'glass',
    name: 'Glass',
    hint: 'A liquid-glass pane over the surface.',
    kind: 'glass',
    grain: 0,
    effect: true,
    promptFragment:
      'Lay a liquid-glass pane over the surface: a translucent layer with backdrop blur, a hairline white rim and a bright diagonal sheen, so even an opaque base look reads as glass on top.',
  },
  {
    id: 'aurora',
    name: 'Aurora',
    hint: 'A soft mesh-gradient wash.',
    kind: 'aurora',
    grain: 0,
    effect: true,
    promptFragment:
      'Wash the surface with a soft aurora / mesh gradient (blurred violet, pink and teal clouds at low opacity, screen blend) drifting under the content.',
  },
  {
    id: 'neon',
    name: 'Neon glow',
    hint: 'An accent glow around the edge.',
    kind: 'neon',
    grain: 0,
    effect: true,
    promptFragment:
      'Add a neon glow: a luminous accent halo around the surface edge plus a faint inner glow, like the OLED / cyberpunk looks, over whatever base you chose.',
  },
  {
    id: 'holographic',
    name: 'Holographic',
    hint: 'An iridescent foil shimmer.',
    kind: 'holographic',
    grain: 0,
    effect: true,
    promptFragment:
      'Overlay an iridescent holographic shimmer (a low-opacity conic rainbow, overlay blend, shifting on hover) like foil catching the light, on top of the base surface.',
  },
];

export const textureById = (id: string) => TEXTURE_OPTIONS.find((t) => t.id === id);
