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

  let headline = 'Start with a skin';
  let tip =
    'Material & Morphism is where to begin — it sets how your surfaces feel. Hover any card to see it live.';

  if (active.length === 1) {
    headline = 'Good start';
    tip = `${active[0].style.name} it is. Add a Structure style for layout, or a Vibe to set the mood.`;
  } else if (active.length >= 2 && active.length <= 4) {
    headline = "Now you're getting somewhere";
    tip =
      "You've got a real direction going. Click your favorite again to make it the Lead — everything else falls in behind it.";
  } else if (active.length > 4) {
    headline = "That's a lot at once";
    tip =
      "Five or more styles tend to fight each other. Keep one clear Lead and let the rest stay quiet — or drop a couple.";
  }

  if (warnings.length) {
    headline = 'These pull against each other';
    tip = "A couple of these go in opposite directions. Totally fine if it's on purpose — just keep one clearly in charge.";
  }

  return { headline, tip, recommendations, warnings };
}

/** How many styles there are to choose from (the base layer doesn't count). */
export const TOTAL_STYLES = STYLES.filter((s) => s.category !== 'base-physics').length;
