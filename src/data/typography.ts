export type TypeCategory =
  | 'grotesque'
  | 'geometric'
  | 'humanist'
  | 'serif-editorial'
  | 'slab'
  | 'mono'
  | 'display-wide'
  | 'expressive';

export interface TypeSystem {
  id: string;
  name: string;
  category: TypeCategory;
  /** Heading font stack (first entry is the intended face). */
  headingStack: string;
  /** Body font stack. */
  bodyStack: string;
  /** One-line character of the pairing. */
  character: string;
  /** Mood tags. */
  vibes: string[];
  /** Sentence injected into the prompt. */
  promptFragment: string;
}

export interface TypeCategoryMeta {
  id: TypeCategory;
  label: string;
}

export const TYPE_CATEGORIES: TypeCategoryMeta[] = [
  { id: 'grotesque', label: 'Grotesque / Neo-grotesque' },
  { id: 'geometric', label: 'Geometric sans' },
  { id: 'humanist', label: 'Humanist sans' },
  { id: 'serif-editorial', label: 'Editorial serif' },
  { id: 'slab', label: 'Slab serif' },
  { id: 'mono', label: 'Monospace / Code' },
  { id: 'display-wide', label: 'Display & Wide' },
  { id: 'expressive', label: 'Expressive / Character' },
];

export const TYPE_SYSTEMS: TypeSystem[] = [
  // ── Grotesque ──
  {
    id: 'helvetica-now',
    name: 'Neue Grotesque',
    category: 'grotesque',
    headingStack: "'Helvetica Neue', 'Inter', Arial, sans-serif",
    bodyStack: "'Helvetica Neue', 'Inter', Arial, sans-serif",
    character: 'Neutral, Swiss, timeless. Lets content speak.',
    vibes: ['neutral', 'corporate', 'swiss', 'clean'],
    promptFragment:
      'Typography: a neutral neo-grotesque (Helvetica/Inter family) for both headings and body — tight tracking on large sizes, generous line-height in body. Swiss objectivity.',
  },
  {
    id: 'akzidenz',
    name: 'Industrial Grotesk',
    category: 'grotesque',
    headingStack: "'Space Grotesk', 'Archivo', sans-serif",
    bodyStack: "'Inter', system-ui, sans-serif",
    character: 'Slightly mechanical headings over a clean body.',
    vibes: ['technical', 'modern', 'startup'],
    promptFragment:
      'Typography: an industrial grotesk (Space Grotesk / Archivo) for headlines paired with Inter for body — confident, slightly mechanical headings, highly legible body text.',
  },
  // ── Geometric ──
  {
    id: 'futura-geo',
    name: 'Geometric Modernist',
    category: 'geometric',
    headingStack: "'Poppins', 'Futura', 'Century Gothic', sans-serif",
    bodyStack: "'Poppins', system-ui, sans-serif",
    character: 'Circular, optimistic, Bauhaus-derived geometry.',
    vibes: ['friendly', 'optimistic', 'rounded'],
    promptFragment:
      'Typography: geometric sans (Poppins / Futura) — perfect circular o/e shapes, even stroke weight, optimistic and friendly. Use slightly looser tracking for warmth.',
  },
  {
    id: 'circular-soft',
    name: 'Soft Geometric',
    category: 'geometric',
    headingStack: "'Nunito', 'Quicksand', sans-serif",
    bodyStack: "'Nunito', system-ui, sans-serif",
    character: 'Rounded terminals, gentle and approachable.',
    vibes: ['soft', 'playful', 'consumer'],
    promptFragment:
      'Typography: soft geometric sans (Nunito / Quicksand) with rounded terminals — approachable, consumer-friendly, pairs well with pastel and clay aesthetics.',
  },
  // ── Humanist ──
  {
    id: 'humanist-warm',
    name: 'Humanist Warm',
    category: 'humanist',
    headingStack: "'Source Sans 3', 'Open Sans', sans-serif",
    bodyStack: "'Source Sans 3', system-ui, sans-serif",
    character: 'Calligraphic roots, warm and highly readable.',
    vibes: ['warm', 'readable', 'editorial'],
    promptFragment:
      'Typography: humanist sans (Source Sans / Open Sans) — calligraphic warmth, open apertures, excellent for long-form readability across UI and content.',
  },
  // ── Editorial serif ──
  {
    id: 'modern-serif',
    name: 'High-Contrast Didone',
    category: 'serif-editorial',
    headingStack: "'Playfair Display', 'Didot', Georgia, serif",
    bodyStack: "'Source Serif 4', Georgia, serif",
    character: 'Dramatic thick/thin contrast — luxury & fashion.',
    vibes: ['luxury', 'fashion', 'editorial', 'elegant'],
    promptFragment:
      'Typography: a high-contrast Didone (Playfair Display / Didot) for oversized headlines paired with a readable serif body (Source Serif) — dramatic thick/thin strokes, fashion-editorial elegance.',
  },
  {
    id: 'transitional-serif',
    name: 'Classic Editorial',
    category: 'serif-editorial',
    headingStack: "'Lora', Georgia, serif",
    bodyStack: "'Lora', Georgia, serif",
    character: 'Bookish, trustworthy, long-read friendly.',
    vibes: ['trustworthy', 'bookish', 'journalism'],
    promptFragment:
      'Typography: a transitional editorial serif (Lora / Georgia) throughout — bookish and trustworthy, optimized for blog and long-form reading with comfortable measure (60–75ch).',
  },
  // ── Slab ──
  {
    id: 'slab-strong',
    name: 'Confident Slab',
    category: 'slab',
    headingStack: "'Roboto Slab', 'Rockwell', serif",
    bodyStack: "'Inter', system-ui, sans-serif",
    character: 'Blocky slab headings, sturdy and grounded.',
    vibes: ['sturdy', 'editorial', 'bold'],
    promptFragment:
      'Typography: a confident slab serif (Roboto Slab / Rockwell) for headlines over a clean sans body — sturdy, grounded, strong editorial presence.',
  },
  // ── Mono ──
  {
    id: 'mono-technical',
    name: 'Technical Mono',
    category: 'mono',
    headingStack: "'JetBrains Mono', 'IBM Plex Mono', monospace",
    bodyStack: "'IBM Plex Mono', ui-monospace, monospace",
    character: 'Fixed-width, developer-native, terminal vibe.',
    vibes: ['technical', 'developer', 'retro-terminal'],
    promptFragment:
      'Typography: monospace throughout (JetBrains Mono / IBM Plex Mono) — fixed-width, developer-native, pairs strongly with terminal/retro-futurism and dev-tool aesthetics.',
  },
  {
    id: 'mono-mix',
    name: 'Mono Accent',
    category: 'mono',
    headingStack: "'Space Mono', monospace",
    bodyStack: "'Inter', system-ui, sans-serif",
    character: 'Mono for labels/headings, sans for reading.',
    vibes: ['technical', 'modern', 'editorial'],
    promptFragment:
      'Typography: monospace (Space Mono) for headings, labels and metadata, with Inter for body — a technical accent that keeps long text readable.',
  },
  // ── Display & Wide ──
  {
    id: 'wide-display',
    name: 'Extended / Wide Display',
    category: 'display-wide',
    headingStack: "'Archivo Expanded', 'Anton', 'Saira', sans-serif",
    bodyStack: "'Inter', system-ui, sans-serif",
    character: 'Ultra-wide, cinematic, poster-like headlines.',
    vibes: ['bold', 'cinematic', 'poster', 'fashion'],
    promptFragment:
      'Typography: ultra-wide extended display faces (Archivo Expanded / Anton / Saira) for huge poster-like headlines, set in uppercase with tight leading, over a neutral sans body. Cinematic impact.',
  },
  {
    id: 'condensed-impact',
    name: 'Condensed Impact',
    category: 'display-wide',
    headingStack: "'Oswald', 'Bebas Neue', sans-serif",
    bodyStack: "'Inter', system-ui, sans-serif",
    character: 'Tall, narrow, magazine-cover energy.',
    vibes: ['bold', 'magazine', 'sport'],
    promptFragment:
      'Typography: tall condensed display faces (Oswald / Bebas Neue) for stacked, narrow headlines with magazine-cover energy, over a clean body sans.',
  },
  // ── Expressive ──
  {
    id: 'variable-kinetic',
    name: 'Variable Kinetic',
    category: 'expressive',
    headingStack: "'Fraunces', 'Recursive', serif",
    bodyStack: "'Inter', system-ui, sans-serif",
    character: 'Variable-font axes animated on scroll/hover.',
    vibes: ['expressive', 'modern', 'kinetic'],
    promptFragment:
      'Typography: an expressive variable font (Fraunces / Recursive) with animated axes (weight, optical size, softness) reacting to scroll and hover — kinetic typographic personality.',
  },
  {
    id: 'brutalist-system',
    name: 'Raw System Type',
    category: 'expressive',
    headingStack: "'Courier New', 'Times New Roman', monospace",
    bodyStack: "'Times New Roman', Georgia, serif",
    character: 'Default browser fonts as a deliberate statement.',
    vibes: ['brutalist', 'raw', 'anti-design'],
    promptFragment:
      'Typography: raw default system faces (Times New Roman, Courier, Arial) used deliberately as an anti-design statement — pairs with neo-brutalism. No webfonts; embrace the browser default look.',
  },
];

export const typeSystemsByCategory = (cat: TypeCategory) =>
  TYPE_SYSTEMS.filter((t) => t.category === cat);
export const typeSystemById = (id: string) => TYPE_SYSTEMS.find((t) => t.id === id);
