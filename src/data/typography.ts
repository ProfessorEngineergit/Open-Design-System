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

  // ── Grotesque (extended) ──
  {
    id: 'sharp-tech',
    name: 'Sharp Tech',
    category: 'grotesque',
    headingStack: "'Inter Tight', 'Inter', system-ui, sans-serif",
    bodyStack: "'Inter', system-ui, sans-serif",
    character: 'Tight, optical-sized grotesque — the Söhne/Geist feel.',
    vibes: ['technical', 'modern', 'pro-saas'],
    promptFragment:
      'Typography: a tight, optically-sized grotesque (Inter Tight for headings, Inter for body) with -0.02em tracking on display sizes. Söhne/Geist energy — pairs with Linear-Pro and dim dark surfaces.',
  },
  {
    id: 'designer-default',
    name: 'Designer Default',
    category: 'grotesque',
    headingStack: "'Outfit', 'Aeonik', 'Inter', sans-serif",
    bodyStack: "'Outfit', system-ui, sans-serif",
    character: 'The unofficial 2024 designer-portfolio default.',
    vibes: ['modern', 'designer', 'product'],
    promptFragment:
      'Typography: a clean modern designer-default grotesque (Outfit, Aeonik-feel) used at both heading and body weights — pairs with bento layouts and quiet SaaS aesthetics.',
  },

  // ── Geometric (extended) ──
  {
    id: 'soft-modern',
    name: 'Soft Modern',
    category: 'geometric',
    headingStack: "'Sora', 'Cabinet Grotesk', 'Inter', sans-serif",
    bodyStack: "'Sora', system-ui, sans-serif",
    character: 'Geometric with slightly softened terminals.',
    vibes: ['friendly', 'modern', 'studio'],
    promptFragment:
      'Typography: a modern geometric sans with softly humanist terminals (Sora / Cabinet Grotesk) used throughout. Warm without being cute.',
  },

  // ── Humanist (extended) ──
  {
    id: 'friendly-rounded',
    name: 'Friendly Rounded',
    category: 'humanist',
    headingStack: "'Quicksand', 'Nunito', sans-serif",
    bodyStack: "'Nunito', system-ui, sans-serif",
    character: 'Rounded, soft, very approachable.',
    vibes: ['soft', 'consumer', 'kid-friendly'],
    promptFragment:
      'Typography: thoroughly rounded geometric humanist (Quicksand / Nunito) — soft terminals, generous counters, consumer-friendly. Pairs with claymorphism and cute palettes.',
  },

  // ── Serif editorial (extended) ──
  {
    id: 'editorial-italian',
    name: 'Editorial Italian',
    category: 'serif-editorial',
    headingStack: "'Fraunces', 'Tiempos Headline', Georgia, serif",
    bodyStack: "'Source Serif 4', 'Tiempos Text', Georgia, serif",
    character: 'Warm contemporary serif with strong personality.',
    vibes: ['editorial', 'warm', 'sophisticated'],
    promptFragment:
      'Typography: a warm contemporary serif (Fraunces / Tiempos Headline) for headlines with a comfortable text serif (Source Serif 4) for body. Italian editorial sophistication — pairs with newsroom and editorial layouts.',
  },
  {
    id: 'academic-library',
    name: 'Academic Library',
    category: 'serif-editorial',
    headingStack: "'EB Garamond', 'Garamond', Georgia, serif",
    bodyStack: "'EB Garamond', Georgia, serif",
    character: 'Renaissance Garamond — bookish, calm, scholarly.',
    vibes: ['scholarly', 'bookish', 'calm'],
    promptFragment:
      'Typography: EB Garamond throughout — Renaissance proportions, calm reading rhythm, scholarly mood. Pairs with dark-academia and quiet content sites.',
  },

  // ── Slab (extended) ──
  {
    id: 'vinyl-display',
    name: 'Vinyl Sleeve',
    category: 'slab',
    headingStack: "'Anton', 'Saira Condensed', sans-serif",
    bodyStack: "'IBM Plex Sans', system-ui, sans-serif",
    character: 'Bold condensed display over a quiet body sans.',
    vibes: ['music', 'poster', 'bold'],
    promptFragment:
      'Typography: a bold condensed display face (Anton / Saira Condensed) for hero headlines like a record sleeve, paired with IBM Plex Sans for body. Strong poster energy.',
  },

  // ── Mono (extended) ──
  {
    id: 'brutalist-mono',
    name: 'Brutalist Mono',
    category: 'mono',
    headingStack: "'IBM Plex Mono', 'JetBrains Mono', monospace",
    bodyStack: "'IBM Plex Mono', monospace",
    character: 'Monospace everywhere as a design statement.',
    vibes: ['brutalist', 'technical', 'editorial'],
    promptFragment:
      'Typography: IBM Plex Mono / JetBrains Mono used for absolutely everything — headings, body, labels, captions. A deliberately fixed-width statement that pairs with neo-brutalism and anti-design.',
  },

  // ── Display & Wide (extended) ──
  {
    id: 'display-power',
    name: 'Display Power',
    category: 'display-wide',
    headingStack: "'Archivo Expanded', 'Anton', sans-serif",
    bodyStack: "'Inter', system-ui, sans-serif",
    character: 'Magazine-scale hero type at marketing weight.',
    vibes: ['marketing', 'cinematic', 'bold'],
    promptFragment:
      'Typography: huge magazine-scale display type (Archivo Expanded / Anton) for the hero, set with negative tracking and tight leading, dropped over a calm Inter body. Marketing-power energy.',
  },
  {
    id: 'architectural-din',
    name: 'Architectural DIN',
    category: 'display-wide',
    headingStack: "'Saira', 'DIN Next', sans-serif",
    bodyStack: "'Inter', system-ui, sans-serif",
    character: 'Mechanical industrial precision.',
    vibes: ['technical', 'architectural', 'precise'],
    promptFragment:
      'Typography: an industrial DIN-style face (Saira) for labels and headings, paired with Inter body. Mechanical precision — pairs with architectural blueprint and industrial UI.',
  },

  // ── Expressive (extended) ──
  {
    id: 'handwritten-warm',
    name: 'Handwritten Warm',
    category: 'expressive',
    headingStack: "'Caveat', 'Kalam', cursive",
    bodyStack: "'Inter', system-ui, sans-serif",
    character: 'Handwritten accent over a calm sans body.',
    vibes: ['personal', 'warm', 'craft'],
    promptFragment:
      'Typography: a warm handwritten script (Caveat / Kalam) used sparingly for headings and accents, paired with a calm Inter body. Personal, hand-made feel — pairs with hand-drawn and wabi-sabi.',
  },
  {
    id: 'magazine-classic',
    name: 'Magazine Classic',
    category: 'expressive',
    headingStack: "'Playfair Display', 'Didot', serif",
    bodyStack: "'Inter', system-ui, sans-serif",
    character: 'Classic Didone heading, modern grotesque body.',
    vibes: ['editorial', 'fashion', 'classic'],
    promptFragment:
      'Typography: a classic Didone headline (Playfair Display / Didot) over a modern Inter body — the timeless magazine pairing. Pairs strongly with newsroom-editorial and dark-academia.',
  },
];

export const typeSystemsByCategory = (cat: TypeCategory) =>
  TYPE_SYSTEMS.filter((t) => t.category === cat);
export const typeSystemById = (id: string) => TYPE_SYSTEMS.find((t) => t.id === id);
