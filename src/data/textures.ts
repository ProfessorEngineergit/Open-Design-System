// Texture is the other thing that composes cleanly on top of any look — it's
// just an overlay on the surface, so it never fights with the look underneath.

export type TextureKind = 'none' | 'grain' | 'paper' | 'noise' | 'scanlines';

export interface TextureOption {
  id: string;
  name: string;
  hint: string;
  kind: TextureKind;
  /** overlay opacity 0..1 for the grain-style textures */
  grain: number;
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
];

export const textureById = (id: string) => TEXTURE_OPTIONS.find((t) => t.id === id);
