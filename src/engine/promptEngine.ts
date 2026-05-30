import { STYLES, styleById } from '../data/styles';
import { projectTypeById } from '../data/projectTypes';
import { typeSystemById } from '../data/typography';
import { shapeById } from '../data/shapes';
import { textureById } from '../data/textures';
import { customFontForRole, fontStackForRole } from './fonts';
import type { OdsSelection, VisualParams } from './state';

/** The styles actually in play (weight above zero), strongest first. */
export function activeStyles(sel: OdsSelection) {
  return Object.entries(sel.styleWeights)
    .filter(([, w]) => w > 0)
    .sort((a, b) => b[1] - a[1])
    .map(([id, w]) => ({ style: styleById(id)!, weight: w }))
    .filter((x) => x.style);
}

/** Spot pairs of chosen styles that tend to fight each other. */
export function detectConflicts(sel: OdsSelection): string[] {
  const active = activeStyles(sel).map((x) => x.style.id);
  const seen = new Set<string>();
  const out: string[] = [];
  for (const s of STYLES) {
    if (!active.includes(s.id) || !s.conflictsWith) continue;
    for (const c of s.conflictsWith) {
      if (!active.includes(c)) continue;
      const key = [s.id, c].sort().join('|');
      if (seen.has(key)) continue;
      seen.add(key);
      out.push(`${s.name} and ${styleById(c)?.name} pull in opposite directions — keep one dominant.`);
    }
  }
  return out;
}

function visualsToCss(v: VisualParams): string {
  const lines = [
    `--radius: ${v.radius}px;`,
    `--backdrop: blur(${v.blur}px) saturate(${v.saturation}%);`,
    `--border: ${v.borderWidth}px solid rgba(255,255,255,${(v.borderOpacity / 100).toFixed(2)});`,
    `--shadow: 0 ${Math.round(v.elevation * 0.6)}px ${Math.round(v.elevation * 1.4)}px rgba(0,0,0,${(
      v.elevation / 160
    ).toFixed(2)});`,
    `--accent: hsl(${v.accentHue} 85% 60%);`,
  ];
  if (v.noise > 0) lines.push(`/* grain overlay opacity: ${(v.noise / 100).toFixed(2)} */`);
  if (v.refraction > 0)
    lines.push(
      `/* liquid-glass refraction: backdrop-filter url(#glass) — SVG feTurbulence + feDisplacementMap, scale ~${Math.round(
        v.refraction * 0.7
      )} */`
    );
  return lines.join('\n');
}

function visualsToProse(v: VisualParams): string {
  const parts = [
    `corner radius ~${v.radius}px`,
    v.blur > 4 ? `backdrop blur ~${v.blur}px at ${v.saturation}% saturation` : 'no backdrop blur',
    v.elevation > 10 ? `${v.elevation < 40 ? 'soft' : 'pronounced'} elevation shadows` : 'flat (no shadow)',
    v.borderWidth > 0 ? `${v.borderWidth}px borders at ${v.borderOpacity}% white opacity` : 'borderless',
    v.noise > 10 ? `${v.noise}% grain/noise texture` : null,
    v.refraction > 0 ? `${v.refraction}% glass refraction (edge lensing on translucent surfaces)` : null,
    `accent hue ${v.accentHue}°`,
  ].filter(Boolean);
  return parts.join(', ');
}

export interface GeneratedPrompt {
  text: string;
  conflicts: string[];
}

export function generatePrompt(sel: OdsSelection): GeneratedPrompt {
  const project = sel.projectType ? projectTypeById(sel.projectType) : null;
  const base = sel.basePhysics ? styleById(sel.basePhysics) : null;
  const active = activeStyles(sel);
  const conflicts = detectConflicts(sel);

  const lines: string[] = [];

  lines.push(
    `You are an expert product designer and front-end engineer. Design and build ${
      project ? project.promptFragment : 'a polished web interface'
    }.`
  );
  lines.push('');
  lines.push('## Visual direction');

  if (base) {
    lines.push(`- **Foundation:** ${base.promptFragment}`);
  }

  if (active.length) {
    const leadStyle = active[0].style;
    lines.push(`- **Base look:** ${leadStyle.promptFragment}`);
    // legacy: if more than one style somehow carries weight, mention them as nudges
    for (const { style } of active.slice(1)) {
      lines.push(`  - with a touch of *${style.name}*. ${style.promptFragment}`);
    }
  }

  const shape = sel.shape ? shapeById(sel.shape) : null;
  const texture = sel.texture ? textureById(sel.texture) : null;
  if (shape) lines.push(`- **Shape:** ${shape.promptFragment}`);
  if (texture && texture.id !== 'clean') lines.push(`- **Texture:** ${texture.promptFragment}`);

  const type = sel.typeSystem ? typeSystemById(sel.typeSystem) : null;
  const baseHeading = type?.headingStack ?? 'system-ui, sans-serif';
  const baseBody = type?.bodyStack ?? 'system-ui, sans-serif';
  const headingStack = fontStackForRole(sel, 'heading', baseHeading);
  const bodyStack = fontStackForRole(sel, 'body', baseBody);
  const customHeading = customFontForRole(sel, 'heading');
  const customBody = customFontForRole(sel, 'body');

  if (type || customHeading || customBody) {
    lines.push('');
    lines.push('## Typography');
    if (type) lines.push(`- ${type.promptFragment}`);
    lines.push(`- Heading stack: \`${headingStack}\``);
    lines.push(`- Body stack: \`${bodyStack}\``);
    if (customHeading || customBody) {
      lines.push(
        `- Custom uploaded fonts (load via @font-face): ${[customHeading, customBody]
          .filter(Boolean)
          .map((f) => `\`${f!.family}\` (${f!.role}, from ${f!.fileName})`)
          .join(', ')}.`
      );
    }
  }

  lines.push('');
  lines.push('## Concrete design tokens');
  lines.push('Apply these baseline values, then refine to taste:');
  lines.push('```css');
  lines.push(':root {');
  lines.push(
    visualsToCss(sel.visuals)
      .split('\n')
      .map((l) => '  ' + l)
      .join('\n')
  );
  if (shape) {
    lines.push(`  --radius: ${shape.radius}px;`);
    lines.push(`  --radius-button: ${shape.buttonRadius === 999 ? '999px (full pill)' : shape.buttonRadius + 'px'};`);
    if (shape.organic) lines.push(`  --radius-organic: ${shape.organic};`);
  }
  if (type || customHeading || customBody) {
    lines.push(`  --font-heading: ${headingStack};`);
    lines.push(`  --font-body: ${bodyStack};`);
  }
  lines.push('}');
  lines.push('```');
  lines.push(`In prose: ${visualsToProse(sel.visuals)}.`);

  // Grab concrete CSS tricks from the top styles so the model has something to work with.
  const hintSources = [base, ...active.slice(0, 3).map((a) => a.style)].filter(Boolean);
  const hints = [...new Set(hintSources.flatMap((s) => s!.cssHints))];
  if (hints.length) {
    lines.push('');
    lines.push('## Techniques to use');
    for (const h of hints) lines.push(`- ${h}`);
  }

  const motions = hintSources.map((s) => s!.motion).filter(Boolean);
  if (motions.length) {
    lines.push('');
    lines.push('## Motion');
    for (const m of motions) lines.push(`- ${m}`);
  }

  if (conflicts.length) {
    lines.push('');
    lines.push('## Tension to resolve deliberately');
    for (const c of conflicts) lines.push(`- ${c}`);
  }

  if (sel.notes.trim()) {
    lines.push('');
    lines.push('## Additional requirements');
    lines.push(sel.notes.trim());
  }

  lines.push('');
  lines.push('## Output expectations');
  lines.push(
    '- Make it feel intentional and cohesive — every choice should reinforce the chosen direction, not dilute it.'
  );
  lines.push('- Ensure WCAG AA contrast and full keyboard accessibility regardless of aesthetic.');
  lines.push('- Responsive from 360px to ultrawide. Respect prefers-reduced-motion.');
  lines.push('- Ship real, working code — no lorem-ipsum placeholders where real structure is implied.');

  return { text: lines.join('\n'), conflicts };
}
