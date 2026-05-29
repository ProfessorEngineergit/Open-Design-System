import { styleById, STYLES } from '../data/styles';
import { activeStyles, detectConflicts } from './promptEngine';
import type { OdsSelection } from './state';

/** Pairs that reinforce each other well. */
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

  // Build recommendation set from complements of active styles.
  const recIds = new Set<string>();
  for (const { style } of active) {
    for (const c of COMPLEMENTS[style.id] ?? []) {
      if (!activeIds.includes(c) && styleById(c)) recIds.add(c);
    }
  }
  // Drop anything that conflicts with an active style.
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
      reason: source ? `Pairs naturally with ${source.style.name}` : 'Works well with your mix',
    };
  });

  let headline = 'Start mixing';
  let tip =
    'Pick a "skin" first — Material & Morphism decides how surfaces feel. Hover any card to see a live sample.';

  if (active.length === 1) {
    headline = 'Good start';
    tip = `You chose ${active[0].style.name}. Now add a Structure style to organize layout, or a Vibe for mood.`;
  } else if (active.length >= 2 && active.length <= 4) {
    headline = 'Nice mix forming';
    tip =
      'You have a real direction now. Click your favorite again to promote it to Lead — that style drives the rest.';
  } else if (active.length > 4) {
    headline = 'Lots going on';
    tip =
      'Five+ styles can fight each other. Keep the Lead clear and the others as quiet supports, or drop a few.';
  }

  if (warnings.length) {
    headline = 'Tension detected';
    tip = 'Some choices pull in opposite directions. That can be intentional — just keep one clearly dominant.';
  }

  return { headline, tip, recommendations, warnings };
}

/** Total number of styles available, for progress hints. */
export const TOTAL_STYLES = STYLES.filter((s) => s.category !== 'base-physics').length;
