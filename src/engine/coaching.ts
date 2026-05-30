import { styleById, STYLES } from '../data/styles';
import { activeStyles, detectConflicts } from './promptEngine';
import type { OdsSelection } from './state';

/** Styles that tend to look good together. */
const COMPLEMENTS: Record<string, string[]> = {
  'liquid-glass': ['bento', 'aurora-gradient', 'oled-dark', 'spatial-depth'],
  'aurora-gradient': ['liquid-glass', 'generative-ui', 'frutiger-aero'],
  bento: ['liquid-glass', 'generative-ui', 'ultra-minimalism'],
  'neo-brutalism': ['cutealism', 'kinetic-typography'],
  claymorphism: ['cutealism', 'aurora-gradient'],
  cutealism: ['claymorphism', 'neo-brutalism'],
  'generative-ui': ['oled-dark', 'aurora-gradient', 'agentic', 'microinteraction'],
  'oled-dark': ['generative-ui', 'agentic', 'retro-futurism', 'y2k'],
  agentic: ['oled-dark', 'generative-ui'],
  editorial: ['kinetic-typography', 'macro'],
  'kinetic-typography': ['editorial', 'ultra-minimalism', 'neo-brutalism'],
  'ultra-minimalism': ['kinetic-typography', 'microinteraction', 'bento'],
  'retro-futurism': ['oled-dark', 'y2k', 'industrial'],
  y2k: ['oled-dark', 'retro-futurism'],
  'frutiger-aero': ['aurora-gradient', 'skeuomorphism'],
  skeuomorphism: ['industrial', 'frutiger-aero'],
  industrial: ['skeuomorphism', 'retro-futurism', 'oled-dark'],
  'spatial-depth': ['liquid-glass', 'webgl-3d'],
  'webgl-3d': ['spatial-depth', 'oled-dark'],
  microinteraction: ['generative-ui', 'ultra-minimalism'],
  neumorphism: ['ultra-minimalism', 'skeuomorphism'],
};

export interface Recommendation {
  id: string;
  name: string;
  reason: string;
}

export interface Coaching {
  headline: string;
  tip: string;
  recommendations: Recommendation[];
  warnings: string[];
}

export function getCoaching(sel: OdsSelection): Coaching {
  const active = activeStyles(sel);
  const activeIds = active.map((a) => a.style.id);
  const warnings = detectConflicts(sel);

  // Start from the complements of whatever's already picked.
  const recIds = new Set<string>();
  for (const { style } of active) {
    for (const c of COMPLEMENTS[style.id] ?? []) {
      if (!activeIds.includes(c) && styleById(c)) recIds.add(c);
    }
  }
  // Toss anything that clashes with a style already in the mix.
  const filtered = [...recIds].filter((id) => {
    const s = styleById(id)!;
    const clashes = (s.conflictsWith ?? []).some((c) => activeIds.includes(c));
    return !clashes;
  });

  const recommendations: Recommendation[] = filtered.slice(0, 4).map((id) => {
    const s = styleById(id)!;
    const source = active.find((a) => (COMPLEMENTS[a.style.id] ?? []).includes(id));
    return {
      id,
      name: s.name,
      reason: source ? `Goes well with ${source.style.name}` : 'Fits what you have so far',
    };
  });

  let headline = 'Pick a look';
  let tip =
    'Start with one look on the left — that\'s your base. Hover any card to see it live before you commit.';

  if (active.length >= 1) {
    const name = active[0].style.name;
    const hasShape = !!sel.shape;
    const hasTexture = !!sel.texture;
    if (hasShape && hasTexture) {
      headline = "That's a full look";
      tip = `${name}, shaped and textured. That'll read as deliberate — move on whenever you're happy, or keep tweaking.`;
    } else if (hasShape || hasTexture) {
      headline = 'Almost there';
      tip = `Nice — ${name} with a ${hasShape ? 'shape' : 'texture'}. Add a ${hasShape ? 'texture' : 'shape'} too and it'll feel finished.`;
    } else {
      headline = 'Good base';
      tip = `${name} is your base. Now layer a shape and a texture under the preview — that's where it comes together.`;
    }
  }

  return { headline, tip, recommendations, warnings };
}

/** How many styles there are to choose from (the base layer doesn't count). */
export const TOTAL_STYLES = STYLES.filter((s) => s.category !== 'base-physics').length;
