import type { CategoryMeta } from './types';

export const CATEGORIES: CategoryMeta[] = [
  {
    id: 'base-physics',
    label: 'Base Physics',
    description:
      'The foundational law of light, depth and motion. Pick one — it sets the substrate every other style sits on.',
    selection: 'single',
  },
  {
    id: 'morphism',
    label: 'Material & Morphism',
    description: 'The "skin" of your components — how surfaces feel: glass, clay, extrusion, texture.',
    selection: 'multi',
  },
  {
    id: 'structure',
    label: 'Structure & Layout',
    description: 'How content is organized in the viewport: grids, typography, density.',
    selection: 'multi',
  },
  {
    id: 'vibe',
    label: 'Vibe & Subculture',
    description: 'Emotional direction — nostalgia, rawness, playfulness. The "mood".',
    selection: 'multi',
  },
  {
    id: 'spatial',
    label: 'Spatial & Dimensional',
    description: 'Depth beyond the flat screen: parallax, 3D, tactile hardware.',
    selection: 'multi',
  },
  {
    id: 'ai-native',
    label: 'AI-Native & Adaptive',
    description: 'Paradigms born from AI and modern displays: generative, agentic, OLED.',
    selection: 'multi',
  },
];
