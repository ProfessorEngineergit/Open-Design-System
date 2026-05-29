import type { CategoryMeta } from './types';

export const CATEGORIES: CategoryMeta[] = [
  {
    id: 'base-physics',
    label: 'Base Physics',
    description:
      'The base your whole design sits on — how light, depth and motion behave. Pick one.',
    selection: 'single',
  },
  {
    id: 'morphism',
    label: 'Material & Morphism',
    description: 'How your surfaces feel — glass, clay, soft extrusion, texture.',
    selection: 'multi',
  },
  {
    id: 'structure',
    label: 'Structure & Layout',
    description: "How everything's arranged — grids, type, how dense or airy it feels.",
    selection: 'multi',
  },
  {
    id: 'vibe',
    label: 'Vibe & Subculture',
    description: "The mood — nostalgic, raw, playful, whatever you're going for.",
    selection: 'multi',
  },
  {
    id: 'spatial',
    label: 'Spatial & Dimensional',
    description: 'Depth past the flat screen — parallax, 3D, hardware you can almost feel.',
    selection: 'multi',
  },
  {
    id: 'ai-native',
    label: 'AI-Native & Adaptive',
    description: 'Looks that grew out of AI and modern screens — generative, agentic, true-black OLED.',
    selection: 'multi',
  },
];
