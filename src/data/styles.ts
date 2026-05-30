import type { DesignStyle } from './types';

export const STYLES: DesignStyle[] = [
  // ─────────────────────────── Base Physics ───────────────────────────
  {
    id: 'material-3',
    name: 'Material 3 Expressive',
    category: 'base-physics',
    philosophy: 'Personalized, emotional and accessible.',
    markers: [
      'Dynamic tonal color palettes instead of fixed hex values',
      'Variable corner radii (shape tokens)',
      '"Container" concept instead of rigid borders',
      'Flat surfaces with tonal elevation instead of hard shadows',
    ],
    motion: 'Expressive spring physics — overshoot, elasticity, playful touch response.',
    cssHints: [
      'Tonal surface layers (surface, surface-container, surface-variant)',
      'border-radius tokens from 4px to 28px',
      'Color derived from a single seed via HCT/tonal palette',
    ],
    promptFragment:
      'Use Google Material 3 Expressive as the base layer: dynamic tonal color derived from a seed color, tonal elevation (layered surfaces) rather than drop shadows, generous and variable corner radii, and spring-based expressive motion with gentle overshoot.',
    conflictsWith: ['fluent-2', 'apple-hig'],
  },
  {
    id: 'fluent-2',
    name: 'Fluent 2',
    category: 'base-physics',
    philosophy: 'Light, texture and performance.',
    markers: [
      'Mica (opaque, picks up wallpaper tint)',
      'Acrylic (translucent, strong blur + noise texture)',
      'Smoke (dimming layer for modals)',
    ],
    motion: 'Connected animations with shared-axis transitions and Z-depth staggering.',
    cssHints: [
      'backdrop-filter: blur(30px) with subtle noise overlay',
      'Layered translucency for panels (Acrylic)',
      'Shared-axis page transitions',
    ],
    promptFragment:
      'Use Microsoft Fluent 2 as the base layer: materials that react to light — Mica for opaque surfaces that subtly tint to the background, Acrylic (blurred translucent panels with a faint noise texture) for floating layers, and a Smoke dim layer behind modals. Transitions use shared-axis connected animation.',
    conflictsWith: ['material-3', 'apple-hig'],
  },
  {
    id: 'apple-hig',
    name: 'Apple HIG / Spatial',
    category: 'base-physics',
    philosophy: 'Glass, vibrancy and immersive depth.',
    markers: [
      'Liquid Glass — thick glass with edge refraction/distortion',
      'Vibrancy — background saturation lifts through the material',
      'Borderless inputs, strong focus shadows',
    ],
    motion: 'Fluid gesture — direct manipulation, parallax, real-time physics on touch velocity.',
    cssHints: [
      'backdrop-filter: blur(20px) saturate(180%)',
      'SVG feDisplacementMap for edge refraction',
      'Hairline translucent borders rgba(255,255,255,0.3)',
    ],
    promptFragment:
      'Use Apple Human Interface Guidelines (Spatial) as the base layer: Liquid Glass surfaces with edge refraction and vibrancy (background saturation lifting through translucent material), borderless inputs, strong soft focus shadows, and fluid gesture-driven motion that responds to touch velocity in real time.',
    conflictsWith: ['material-3', 'fluent-2'],
  },

  // ─────────────────────────── Morphism ───────────────────────────
  {
    id: 'liquid-glass',
    name: 'Advanced Liquid Glass',
    category: 'morphism',
    philosophy: 'Depth through physically accurate glass.',
    markers: [
      'Real refraction and optical distortion at edges',
      'Background bends at component borders',
      'Semi-transparent hairline borders',
    ],
    cssHints: [
      'backdrop-filter: blur(20px) saturate(180%)',
      'border: 1px solid rgba(255,255,255,0.3)',
      'SVG feDisplacementMap for edge bending',
    ],
    promptFragment:
      'Surfaces are advanced liquid glass: heavy backdrop blur with saturation boost, hairline translucent white borders, and subtle optical refraction where the background bends at the edges of panels.',
    conflictsWith: ['neo-brutalism', 'claymorphism'],
  },
  {
    id: 'claymorphism',
    name: 'Claymorphism',
    category: 'morphism',
    philosophy: 'Inflated, soft, organic clay/marshmallow shapes.',
    markers: [
      'Matte surfaces',
      'Strong inner shadows for volumetric bulge',
      'Extremely round "squircle" corners',
      'Floating outer shadows',
    ],
    cssHints: [
      'inset box-shadow for inner volume',
      'border-radius: 40px+ (squircles)',
      'Soft dual outer shadows for floating feel',
    ],
    promptFragment:
      'Components look like soft inflated clay: matte fills, strong inset shadows giving a puffy volumetric bulge, very large squircle corner radii, and soft floating drop shadows.',
    conflictsWith: ['neo-brutalism', 'liquid-glass'],
  },
  {
    id: 'neumorphism',
    name: 'Post-Neumorphism 2.0',
    category: 'morphism',
    philosophy: 'Subtle extrusion from the background — now with accessible contrast.',
    markers: [
      'Targeted highlights + stronger shading ("depth with clarity")',
      'Light texture for accessibility',
      'Elements appear pressed into / extruded from the surface',
    ],
    cssHints: [
      'Dual box-shadow (light top-left, dark bottom-right)',
      'Background and element share a base tone',
      'Higher contrast variants for text legibility',
    ],
    promptFragment:
      'Use post-neumorphism: elements gently extrude from a same-toned background via paired light/dark shadows, but with deliberately stronger contrast and subtle texture so text and controls stay accessible.',
    conflictsWith: ['neo-brutalism'],
  },
  {
    id: 'skeuomorphism',
    name: 'Tactile Skeuomorphism 3.0',
    category: 'morphism',
    philosophy: 'Hyperreal material imitation for specific components.',
    markers: [
      'Grained leather, matte paper, felt, brushed aluminium',
      'Focus on micro-texture, not kitschy metaphors',
    ],
    cssHints: [
      'Noise/grain textures via SVG filter or PNG overlay',
      'repeating-linear-gradient for brushed metal',
      'Realistic micro-bevels',
    ],
    promptFragment:
      'Selected surfaces use tactile skeuomorphism: realistic micro-textures (brushed aluminium, matte paper, felt or grained leather) rendered subtly — material realism through texture, never kitschy real-world metaphors.',
  },
  {
    id: 'aurora-gradient',
    name: 'Aurora & Mesh Gradients',
    category: 'morphism',
    philosophy: 'Soft organic clouds of color that flow into each other.',
    markers: ['Layered animated radial gradients', 'Extreme blur', 'Ambient color fields'],
    cssHints: [
      'Stacked radial-gradients with filter: blur(100px)',
      'Slow keyframe drift animation',
      'Optional WebGL shader for fluid motion',
    ],
    promptFragment:
      'Backgrounds use aurora / mesh gradients: several heavily blurred radial color clouds layered and slowly drifting, creating an ambient, organic color atmosphere.',
  },

  // ─────────────────────────── Structure ───────────────────────────
  {
    id: 'bento',
    name: 'Bento Box UI',
    category: 'structure',
    philosophy: 'Strict modular grid of rounded tiles of varying sizes.',
    markers: ['Perfect hierarchy', 'Uniform gaps', 'Reduces chaos in data-dense dashboards'],
    cssHints: ['CSS grid with spanning tiles', 'Consistent gap + border-radius', 'Pairs well with glass'],
    promptFragment:
      'Lay out content as a Bento grid: rounded tiles of varying sizes packed into a strict modular grid with uniform gaps and clear visual hierarchy — ideal for dashboards and feature overviews.',
  },
  {
    id: 'editorial',
    name: 'Editorial Asymmetry',
    category: 'structure',
    philosophy: 'Web design borrowing from high-end print magazines.',
    markers: [
      'Deliberately overlapping elements',
      'Asymmetric whitespace',
      'Images breaking out of grids, headlines overlapping images',
    ],
    cssHints: ['Overlapping z-index layers', 'Asymmetric margins', 'Large type over imagery'],
    promptFragment:
      'Use editorial, magazine-style asymmetry: intentional overlaps, asymmetric whitespace, images that break the grid, and headlines layered over imagery — "planned chaos" with strong hierarchy.',
    conflictsWith: ['ultra-minimalism', 'bento'],
  },
  {
    id: 'kinetic-typography',
    name: 'Macro & Kinetic Typography',
    category: 'structure',
    philosophy: 'Typography becomes the primary UI element.',
    markers: ['Oversized fonts', 'Serif/sans contrast', 'Custom typefaces'],
    motion: 'Text morphs, fades and reacts to scroll and cursor via variable fonts.',
    cssHints: ['Variable font axes animated on scroll', 'clamp() for fluid oversized type'],
    promptFragment:
      'Make typography the hero: oversized macro headlines, strong serif/sans contrast, and kinetic behavior — type that morphs, reveals on scroll, and reacts to the cursor using variable font axes.',
  },
  {
    id: 'ultra-minimalism',
    name: 'Ultra-Minimalism (Zen)',
    category: 'structure',
    philosophy: 'Maximal reduction to the core function.',
    markers: ['Vast negative space', 'Monochrome palette', 'Invisible/absent borders', 'Micro-text over icons'],
    cssHints: ['Generous spacing scale', 'Monochrome tokens', 'Hairline or no dividers'],
    promptFragment:
      'Embrace ultra-minimalism: vast intentional negative space, a near-monochrome palette, borderless layouts, and tiny precise labels instead of icons — purposeful simplicity.',
    conflictsWith: ['editorial', 'y2k'],
  },

  // ─────────────────────────── Vibe ───────────────────────────
  {
    id: 'frutiger-aero',
    name: 'Frutiger Aero',
    category: 'vibe',
    philosophy: 'Optimistic futurism of 2005–2012.',
    markers: ['Glossy surfaces', 'Lens flares', 'Water droplets', 'Sky motifs, glass architecture'],
    cssHints: ['linear-gradient gloss edges (white→transparent)', 'High saturation', 'Glossy highlights'],
    promptFragment:
      'Channel Frutiger Aero: glossy high-saturation surfaces, white-to-transparent gloss highlights, water/sky/nature motifs and an optimistic mid-2000s techno-utopian mood.',
    conflictsWith: ['neo-brutalism', 'ultra-minimalism'],
  },
  {
    id: 'y2k',
    name: 'Y2K / Acid / Chrome-Core',
    category: 'vibe',
    philosophy: 'Late-90s rave culture meets dystopian cyberpunk.',
    markers: ['"Colorful black" (neon on deep black)', 'Liquid chrome type', 'Distorted grids', 'Glitch'],
    cssHints: ['mix-blend-mode: difference', 'conic-gradient holographic textures', 'Glitch keyframes'],
    promptFragment:
      'Go Y2K / chrome-core: neon accents on deep black, liquid chrome metallic typography, holographic conic-gradient textures, distorted grids and glitch effects.',
    conflictsWith: ['ultra-minimalism'],
  },
  {
    id: 'neo-brutalism',
    name: 'Neo-Brutalism',
    category: 'vibe',
    philosophy: 'Raw, unpolished design as a reaction to corporate minimalism.',
    markers: [
      'High contrast, pure HTML colors',
      'Thick black borders (3px solid #000)',
      'Hard unblurred shadows (4px 4px 0 #000)',
      'System fonts, marquee text',
    ],
    cssHints: ['border: 3px solid #000', 'box-shadow: 4px 4px 0 0 #000', 'No blur, no gradient'],
    promptFragment:
      'Use neo-brutalism: thick solid black borders, hard offset shadows with zero blur, raw saturated primary colors, blunt system typography and an intentionally unpolished, high-contrast feel.',
    conflictsWith: ['liquid-glass', 'claymorphism', 'neumorphism', 'frutiger-aero'],
  },
  {
    id: 'cutealism',
    name: 'Cute-alism / Sticker UI',
    category: 'vibe',
    philosophy: 'Hard layouts mixed with extremely playful elements.',
    markers: ['Pastel colors', 'Digital stickers stuck slightly askew', '3D emojis', 'Thick rounded borders, kawaii'],
    cssHints: ['Slight rotate() on sticker elements', 'Pastel tokens', 'Chunky rounded borders'],
    promptFragment:
      'Add a cute-alism / sticker layer: pastel palette, playful digital stickers tilted slightly off-axis, 3D emoji accents and chunky rounded borders — kawaii energy over a structured base.',
  },
  {
    id: 'retro-futurism',
    name: 'Retro-Futurism / Terminal',
    category: 'vibe',
    philosophy: 'The future as imagined in the 1980s.',
    markers: ['Monospace amber/neon-green fonts', 'CRT scanlines', 'Text glow', 'Chunky frames, CLI aesthetic'],
    cssHints: ['repeating-linear-gradient scanlines', 'text-shadow glow', 'Monospace stack'],
    promptFragment:
      'Use retro-futurism / cassette-futurism: monospace amber or neon-green text on dark panels, CRT scanline overlays, glowing text, chunky terminal frames and a command-line aesthetic.',
  },

  // ─────────────────────────── Spatial ───────────────────────────
  {
    id: 'spatial-depth',
    name: 'Spatial UI & Z-Depth',
    category: 'spatial',
    philosophy: 'UI lives in real 3D space and reacts to perspective.',
    markers: ['Multi-layer parallax', 'Dynamic real-time lighting on panels', 'Elements cast shadows on each other'],
    motion: 'Reacts to cursor/eye-tracking with perspective shifts.',
    cssHints: ['transform: perspective() + translateZ', 'Cursor-driven parallax', 'Layered shadows'],
    promptFragment:
      'Build a spatial, Z-depth interface: layered parallax planes, panels that cast real shadows on each other, and dynamic lighting that shifts as the cursor moves to suggest true 3D depth.',
  },
  {
    id: 'industrial',
    name: 'Industrial UI (Hardware)',
    category: 'spatial',
    philosophy: 'Tactile controls from hi-fi, audio and industrial hardware.',
    markers: ['Realistic rotary knobs', 'Chunky toggle switches', 'Brushed metal backgrounds', 'Mechanical click feedback'],
    cssHints: ['repeating-linear-gradient + noise for brushed metal', 'Rotating knob via transform', 'Beveled controls'],
    promptFragment:
      'Use industrial hardware skeuomorphism for controls: realistic rotary knobs, chunky physical toggle switches, brushed-metal panels and mechanical click feedback on interaction.',
  },
  {
    id: 'webgl-3d',
    name: 'Immersive 3D / WebGL',
    category: 'spatial',
    philosophy: '3D objects are the interface, not decoration.',
    markers: ['Navigable 3D spaces', 'Rotatable 3D products', 'UI pinned to 3D model coordinates (spatial annotations)'],
    cssHints: ['Three.js / react-three-fiber scene', 'Spatial annotation overlays', 'Orbit controls'],
    promptFragment:
      'Make 3D the interface: interactive WebGL scenes where users rotate products or move through space, with UI labels pinned as spatial annotations to coordinates on the 3D model.',
  },

  // ─────────────────────────── AI-Native ───────────────────────────
  {
    id: 'generative-ui',
    name: 'Generative UI (Sparkle)',
    category: 'ai-native',
    philosophy: 'Interfaces that generate in real time as the AI thinks.',
    markers: ['Shimmering skeletons', 'Glowing animated borders (violet/magenta)', 'Typewriter reveals', 'Breathing pulse'],
    cssHints: ['Animated gradient border', 'Shimmer keyframes on skeletons', 'Soft pulsing opacity/scale'],
    promptFragment:
      'Adopt the generative-UI "sparkle" paradigm: shimmering skeleton loaders, glowing animated violet/magenta gradient borders, typewriter text reveals and soft breathing pulse animations that signal live AI generation.',
  },
  {
    id: 'agentic',
    name: 'Agentic & Voice-Visual',
    category: 'ai-native',
    philosophy: 'Visual representation of invisible AI agents.',
    markers: ['Morphing orbs', 'Fluid audio visualizers reacting to voice', 'Dynamic blur for listen/speak state'],
    cssHints: ['SVG/canvas morphing blob', 'Audio-reactive amplitude', 'State-driven blur transitions'],
    promptFragment:
      'Represent the AI agent visually: a morphing orb and fluid audio visualizer that react to voice frequency, with dynamic blur shifting to communicate listening vs. speaking states.',
  },
  {
    id: 'oled-dark',
    name: 'Adaptive OLED Dark',
    category: 'ai-native',
    philosophy: 'Evolution of dark mode for OLED and energy efficiency.',
    markers: ['True black (#000)', 'Neon accent glows under cards', 'Light-streak luminous typography'],
    cssHints: ['Background #000', 'box-shadow glow accents', 'Luminous text via text-shadow'],
    promptFragment:
      'Use an adaptive OLED dark theme: true black backgrounds with depth created by luminous neon accents — glow under cards and light-streak typography rather than grey elevation.',
  },
  {
    id: 'microinteraction',
    name: 'Microinteraction-Driven',
    category: 'ai-native',
    philosophy: 'Every system state is communicated through micro-motion.',
    markers: ['Buttons morph into checkmarks on success', 'Micro-shake haptic simulation', 'Physics-based drag-and-drop'],
    motion: 'No classic spinners — status is always a small fluid motion.',
    cssHints: ['Morph button→check via SVG path', 'Spring-based drag', 'Subtle shake on error'],
    promptFragment:
      'Drive feedback through microinteractions: buttons morph into checkmarks on success, errors trigger a subtle shake, drag-and-drop uses spring physics, and there are no classic loading bars — every state is a small fluid motion.',
  },

  // ─────────────────────────── Morphism (extended) ───────────────────────────
  {
    id: 'glassmorphism-classic',
    name: 'Glassmorphism (2020)',
    category: 'morphism',
    philosophy: 'The original frosted-glass trend — flat, no refraction.',
    markers: [
      'Heavy backdrop blur on light/colored backgrounds',
      'Visible hairline white border',
      '50–70% white tint on the surface',
      'Soft drop shadow underneath',
    ],
    cssHints: [
      'backdrop-filter: blur(24px) saturate(140%)',
      'background: rgba(255,255,255,0.55)',
      'border: 1px solid rgba(255,255,255,0.6)',
    ],
    promptFragment:
      'Use classic 2020-era glassmorphism: heavy backdrop blur on a colorful background, a roughly 55% white surface tint with a clean hairline white border, and a single soft shadow. No optical refraction — this is the flat, accessible version of glass.',
    conflictsWith: ['neo-brutalism'],
  },
  {
    id: 'iridescent-foil',
    name: 'Iridescent / Holographic Foil',
    category: 'morphism',
    philosophy: 'Chromatic shimmer like a hologram sticker or oil slick.',
    markers: [
      'Conic-gradient rainbow on accent surfaces',
      'Hue rotation on hover',
      'Mirror-like specular highlight',
      'Subtle grain so the foil reads physical',
    ],
    motion: 'Slow continuous hue-rotate; cursor parallax tilts the highlight.',
    cssHints: [
      'background: conic-gradient with smooth-stop pastels',
      'mix-blend-mode: overlay for the shine',
      'filter: hue-rotate animated on scroll',
    ],
    promptFragment:
      'Treat accent surfaces as iridescent foil: a conic-gradient pastel rainbow with a mirror-like specular highlight that parallaxes on cursor, slow hue-rotation in motion, and a faint grain so the shimmer reads physical rather than synthetic.',
    conflictsWith: ['neo-brutalism', 'ultra-minimalism'],
  },
  {
    id: 'risograph',
    name: 'Risograph Print',
    category: 'morphism',
    philosophy: 'Two-color print process — overlapping inks, paper grain.',
    markers: [
      'Limited 2–3 color palette (fluorescent pink, blue, yellow)',
      'Visible overprint where colors stack',
      'Paper texture under everything',
      'Slight misregistration as a feature',
    ],
    cssHints: [
      'mix-blend-mode: multiply for layered colors',
      'Subtle paper-grain SVG overlay',
      '~1–2px intentional color offset on hover',
    ],
    promptFragment:
      'Use a Risograph print aesthetic: a limited 2–3 ink palette (fluorescent pink, sky blue, sunshine yellow) layered via mix-blend-mode multiply, paper grain under everything, and tiny intentional misregistration so type and edges feel printed, not pixel-perfect.',
    conflictsWith: ['liquid-glass', 'apple-hig'],
  },
  {
    id: 'plywood-material',
    name: 'Plywood & Paper',
    category: 'morphism',
    philosophy: 'Honest natural materials — wood, paper, fabric.',
    markers: [
      'Real wood-grain or paper texture on cards',
      'Soft shadow under physical-feeling layers',
      'Earthy palette (oak, cream, charcoal)',
      'Sans body, slab heading',
    ],
    cssHints: [
      'CSS noise + sepia overlays for paper',
      'Repeating gradient micro-stripes for wood grain',
      'Soft umbral shadow (no neon)',
    ],
    promptFragment:
      'Surfaces look like honest natural materials — plywood, cream cardstock, raw linen. Use grain textures, soft umbral shadows, an earthy palette and slab-serif headings. The interface should feel like an object you could hold.',
  },

  // ─────────────────────────── Structure (extended) ───────────────────────────
  {
    id: 'swiss-modernism',
    name: 'Swiss Modernism',
    category: 'structure',
    philosophy: 'Grid, objectivity, asymmetric balance — the school of Müller-Brockmann.',
    markers: [
      'Strict modular grid (8 or 12 column)',
      'Left-aligned, ragged-right text',
      'Hairline rules between sections',
      'Single neo-grotesque, two weights max',
    ],
    cssHints: [
      'CSS grid with explicit named columns',
      '1px solid divider rules',
      'Helvetica/Inter only',
    ],
    promptFragment:
      'Adopt Swiss Modernism: a strict modular grid with hairline rules between sections, left-aligned ragged-right text, a single neo-grotesque (Helvetica/Inter) in two weights, and asymmetric balance instead of centered symmetry. Maximum objectivity, zero ornament.',
  },
  {
    id: 'newsroom-editorial',
    name: 'Newsroom Editorial',
    category: 'structure',
    philosophy: 'Dense columns, hierarchy by typography — NYT, FT, Bloomberg.',
    markers: [
      '2–4 columns of body text',
      'Bold serif headlines with kicker labels',
      'Pull quotes set in italic display serif',
      'Byline + timestamp metadata',
    ],
    cssHints: [
      'CSS columns or grid for newsprint flow',
      'Drop caps via :first-letter',
      'Mixed serif headline + sans body',
    ],
    promptFragment:
      'Lay out the page like a newsroom: 2–4 columns of body text, bold serif headlines with kicker labels, italic pull quotes that break the grid, drop caps on long articles, and visible byline + timestamp metadata. Hierarchy is achieved by type and rule lines, not boxes.',
  },
  {
    id: 'maximalism',
    name: 'Digital Maximalism',
    category: 'structure',
    philosophy: 'Density and layering — anti-minimal, anti-grid, intentional chaos.',
    markers: [
      'Overlapping layers and tilted cards',
      'Mix of typefaces and weights',
      'Visible scroll cues and stickers',
      'Bright clashing colors',
    ],
    cssHints: [
      'transform: rotate(-3deg) on cards',
      'z-index choreography',
      'Multiple background images and gradients stacked',
    ],
    promptFragment:
      'Embrace digital maximalism: overlapping tilted cards, multiple typefaces fighting for attention, stickers and scroll cues stacked on top of content, bright clashing colors. Intentional chaos — every screen should feel hand-collaged.',
    conflictsWith: ['ultra-minimalism', 'swiss-modernism'],
  },
  {
    id: 'dieter-rams',
    name: 'Quiet Design (Rams)',
    category: 'structure',
    philosophy: 'Less, but better — Braun-era restraint applied to UI.',
    markers: [
      'Neutral grey palette + a single bright accent',
      'Tight hairline borders, no shadows',
      'Aligned, technical labels in small caps',
      'No decorative elements',
    ],
    cssHints: [
      'Greyscale tokens with one accent (often orange or red)',
      'No box-shadow anywhere',
      'Letter-spacing on uppercase labels',
    ],
    promptFragment:
      'Apply Dieter Rams "less but better" restraint: a neutral grey palette with a single bright functional accent, tight hairline borders, zero decorative shadows, small-caps labels with positive letter-spacing. Every element earns its place or is removed.',
  },
  {
    id: 'linear-pro',
    name: 'Linear / Pro SaaS',
    category: 'structure',
    philosophy: 'Quiet productivity — keyboard-first, dim gradients, tight type.',
    markers: [
      'Near-black surfaces with subtle violet/blue gradient bloom',
      'Compact rows with shortcut hints',
      'Tight Inter Tight / Söhne-feel grotesque',
      'Hairline dividers, no heavy shadows',
    ],
    cssHints: [
      'Background: very dark with soft radial gradient',
      'border-color: rgba(255,255,255,0.06)',
      'Cmd+K shortcut chips next to actions',
    ],
    promptFragment:
      'Build a Linear / pro-SaaS feel: near-black surfaces with a subtle blue-violet gradient bloom, tight grotesque typography, compact rows with visible Cmd+K shortcut chips, hairline dividers and no heavy shadows. Keyboard-first, quietly fast.',
  },

  // ─────────────────────────── Vibe (extended) ───────────────────────────
  {
    id: 'vaporwave',
    name: 'Vaporwave / Synthwave',
    category: 'vibe',
    philosophy: 'Sunset gradient + neon grid — VHS nostalgia for a future that never was.',
    markers: [
      'Magenta → cyan gradients',
      'Perspective grid floor',
      'Chromatic aberration on type',
      'CRT scanline overlay',
    ],
    cssHints: [
      'linear-gradient(180deg,#ff2bd0,#2bf5ff)',
      'CSS perspective transform on grid background',
      'Subtle scanline via repeating-linear-gradient',
    ],
    promptFragment:
      'Channel vaporwave/synthwave: sunset magenta-to-cyan gradients, a perspective neon grid floor, slight chromatic aberration on headlines, and a faint CRT scanline overlay. VHS nostalgia for a future that never arrived.',
    conflictsWith: ['ultra-minimalism', 'swiss-modernism'],
  },
  {
    id: 'cyberpunk-neon',
    name: 'Cyberpunk Neon',
    category: 'vibe',
    philosophy: 'Hi-tech low-life — neon rain on black glass.',
    markers: [
      'True black backgrounds',
      'Hot magenta + electric cyan accents',
      'Hard angular cuts on panels',
      'Glitchy hover states',
    ],
    cssHints: [
      'clip-path: polygon for angled panels',
      'box-shadow neon glow on focus',
      'Monospace metadata labels',
    ],
    promptFragment:
      'Build a cyberpunk neon interface: true black backgrounds, hot magenta and electric cyan accents, hard angular clipped panels, neon glow on focus, monospace metadata labels and glitchy hover states. Hi-tech low-life energy.',
    conflictsWith: ['cutealism', 'frutiger-aero'],
  },
  {
    id: 'glitch',
    name: 'Glitch / Datamosh',
    category: 'vibe',
    philosophy: 'Broken signal as aesthetic — RGB split, datamosh, dropped frames.',
    markers: [
      'RGB-split text shadows',
      'Sliced horizontal displacement bands',
      'Pixel-sorted hero images',
      'Random hover offset',
    ],
    cssHints: [
      'text-shadow with offset cyan + magenta layers',
      'SVG feDisplacementMap with high turbulence',
      'JS-driven random transform on hover',
    ],
    promptFragment:
      'Use glitch / datamosh aesthetics: RGB-split text shadows (cyan + magenta offset), horizontal displacement bands across hero images, pixel-sorted artwork and randomized micro-offsets on hover. Broken signal as a stylistic choice.',
  },
  {
    id: 'dark-academia',
    name: 'Dark Academia',
    category: 'vibe',
    philosophy: 'Library-by-candlelight — sepia, leather, classical serif.',
    markers: [
      'Sepia / parchment palette',
      'Classical serif (Caslon, Garamond)',
      'Warm gold accent',
      'Deep umbral shadows',
    ],
    cssHints: [
      'Background: #f3ead2 with paper grain',
      'Serif-only typography',
      'Gold accent #b58a3a',
    ],
    promptFragment:
      'Adopt a dark academia mood: sepia and parchment backgrounds, classical serif typography (Caslon / Garamond), warm gold accents, deep umbral shadows and parchment grain. A research library by candlelight rendered as an app.',
    conflictsWith: ['cyberpunk-neon', 'vaporwave'],
  },
  {
    id: 'solarpunk',
    name: 'Solarpunk',
    category: 'vibe',
    philosophy: 'Optimistic green-tech utopia — leaves + circuits.',
    markers: [
      'Verdant greens with copper accents',
      'Botanical illustrations as ornaments',
      'Soft organic curves',
      'Art-Nouveau-derived borders',
    ],
    cssHints: [
      'Green palette: #2f6a4a, #7fb88f, copper #b87333',
      'SVG botanical line-art accents',
      'Generous border-radius on cards',
    ],
    promptFragment:
      'Use a solarpunk aesthetic: verdant green and copper palette, botanical line-art ornaments, soft organic curves, Art-Nouveau-derived border decoration. Optimistic green-tech utopia rendered as UI.',
  },
  {
    id: 'wabi-sabi',
    name: 'Wabi-Sabi',
    category: 'vibe',
    philosophy: 'Beauty in imperfection — asymmetric, natural, weathered.',
    markers: [
      'Asymmetric compositions',
      'Earthy clay / stone palette',
      'Hand-painted ink accents',
      'Generous negative space',
    ],
    cssHints: [
      'Off-grid placement (intentional misalignment)',
      'SVG brush-stroke dividers',
      'Cream backgrounds with subtle texture',
    ],
    promptFragment:
      'Embrace wabi-sabi: asymmetric compositions, an earthy clay-and-stone palette, hand-painted ink accents and brush-stroke dividers, generous negative space. Beauty through imperfection and weathered restraint.',
    conflictsWith: ['neo-brutalism', 'cyberpunk-neon'],
  },
  {
    id: 'memphis-80s',
    name: 'Memphis 80s',
    category: 'vibe',
    philosophy: 'Primary shapes, squiggles, and confetti — the Sottsass legacy.',
    markers: [
      'Primary colors + black + white',
      'Squiggle and zigzag patterns',
      'Geometric shape stickers',
      'Black-and-white grid backgrounds',
    ],
    cssHints: [
      'SVG squiggle decorations layered on cards',
      'Bold geometric shape cutouts',
      'Pattern fills via background-image',
    ],
    promptFragment:
      'Channel Memphis Group / Sottsass 80s: primary colors plus black and white, squiggle and zigzag patterns, geometric shape stickers (triangle, dot, slash), and grid pattern fills. Playful postmodern energy.',
    conflictsWith: ['ultra-minimalism', 'dieter-rams'],
  },
  {
    id: 'anti-design',
    name: 'Anti-Design',
    category: 'vibe',
    philosophy: 'Intentionally crude — mismatched type, raw HTML, broken hierarchy.',
    markers: [
      'Mismatched typefaces in a single screen',
      'Default browser styling visible',
      'Unbalanced margins',
      'No grid, no shadows',
    ],
    cssHints: [
      'Browser defaults left in place where possible',
      'Intentionally clashing serif + sans + mono',
      'Asymmetric whitespace',
    ],
    promptFragment:
      'Adopt anti-design: deliberately mismatched typefaces in the same view, default browser styling left visible, broken hierarchy, asymmetric margins. The crudeness is the statement — pairs with neo-brutalism but pushes further.',
    conflictsWith: ['swiss-modernism', 'dieter-rams', 'apple-hig'],
  },
  {
    id: 'pixel-art',
    name: 'Pixel Art / 8-bit',
    category: 'vibe',
    philosophy: 'Crunchy low-res retro game UI.',
    markers: [
      'Image-rendering: pixelated',
      'Limited 8-bit palette',
      'Pixel-perfect borders, no anti-aliasing',
      'CRT scanline overlay (optional)',
    ],
    cssHints: [
      'image-rendering: pixelated',
      'border-image with a tiled 8-bit corner',
      'box-shadow: 4px 4px 0 0 in primary palette',
    ],
    promptFragment:
      'Render the interface as 8-bit pixel art: image-rendering pixelated everywhere, a limited NES/SNES-era palette, pixel-perfect blocky borders, optional CRT scanline overlay. UI as retro game.',
  },
  {
    id: 'hand-drawn',
    name: 'Hand-drawn / Sketchy',
    category: 'vibe',
    philosophy: 'Sketchbook energy — Excalidraw, low-fidelity charm.',
    markers: [
      'Wobbly hand-drawn borders',
      'Marker / pencil texture',
      'Cream paper background',
      'Casual labeled annotations',
    ],
    cssHints: [
      'SVG filters: feTurbulence for jitter on edges',
      'Subtle paper texture background',
      "Rounded sans like Comic Neue or Caveat for labels",
    ],
    promptFragment:
      'Use a hand-drawn / Excalidraw sketchbook aesthetic: wobbly SVG-filtered borders, marker textures, a cream paper background, casual labeled annotations in a friendly handwritten font. Low-fidelity by intent.',
    conflictsWith: ['swiss-modernism', 'apple-hig'],
  },

  // ─────────────────────────── Spatial (extended) ───────────────────────────
  {
    id: 'photographic-bw',
    name: 'Documentary B&W',
    category: 'spatial',
    philosophy: 'Photojournalism aesthetics — full-bleed B&W imagery as structure.',
    markers: [
      'Full-bleed grayscale photography',
      'Sans-serif captions with white rules',
      'High-contrast layout grid',
      'Generous quiet margins',
    ],
    cssHints: [
      'filter: grayscale(1) contrast(1.05)',
      'Caption rule: border-top 1px solid #fff',
      'Black-on-image overlays for legibility',
    ],
    promptFragment:
      'Lay the interface out as B&W documentary photography: full-bleed grayscale images that act as the page structure, sans-serif captions on white rules, high-contrast composition and generous quiet margins. Photojournalism as UI.',
  },
  {
    id: 'architectural-blueprint',
    name: 'Architectural Blueprint',
    category: 'spatial',
    philosophy: 'Technical drawing — drafting paper, dimension lines, callouts.',
    markers: [
      'Cyan/blue line-art on cream or white',
      'Visible dimension lines and callouts',
      'Technical mono labels',
      'Isometric or orthographic projections',
    ],
    cssHints: [
      'border: 1px solid #2a5fa0 with dashed dimension lines',
      'Mono labels in IBM Plex Mono',
      'Subtle grid background',
    ],
    promptFragment:
      'Render the UI like a technical architectural drawing: cyan line-work on cream drafting paper, visible dimension lines and callouts pointing at components, monospace technical labels, isometric or orthographic projection on key visuals.',
  },

  // ─────────────────────────── AI-native (extended) ───────────────────────────
  {
    id: 'streaming-tokens',
    name: 'Streaming Tokens',
    category: 'ai-native',
    philosophy: 'The AI is generating live — make it visible.',
    markers: [
      'Word-by-word reveal cadence',
      'Cursor caret blinking at the stream tail',
      'Soft fade on incoming tokens',
      'Backpressure-aware skeletons',
    ],
    motion: 'Tokens fade in at ~30 Hz with a trailing caret.',
    cssHints: [
      'CSS opacity transition per chunk',
      "::after blinking caret on streaming containers",
      'Skeleton shimmer for awaited blocks',
    ],
    promptFragment:
      'Make AI generation visible: stream output token-by-token with a soft per-chunk fade-in, a blinking caret at the stream tail, and skeleton shimmer for blocks that are still awaited. The interface should feel alive while the model thinks.',
  },

  // ─────────────────────────── Structure (systems & eras) ───────────────────────────
  {
    id: 'flat-design',
    name: 'Flat Design 2.0',
    category: 'structure',
    philosophy: 'No fake depth — bright, simple, flat. The post-skeuomorphic reset.',
    markers: [
      'Solid bright fills, no gradients or shadows',
      'Simple geometric icons',
      'Long-shadow only as a deliberate accent',
      'Bold flat color blocks',
    ],
    cssHints: ['Flat solid backgrounds, no box-shadow', 'A bright flat palette (#1abc9c, #e74c3c, #3498db…)', 'Simple 2px line or solid-fill icons'],
    promptFragment:
      'Use Flat Design 2.0: solid bright fills with no gradients or drop shadows, simple geometric iconography, generous flat color blocks, and (sparingly) a single long-shadow accent. Clarity over realism.',
    conflictsWith: ['skeuomorphism', 'neumorphism'],
  },
  {
    id: 'material-2',
    name: 'Material Design 2',
    category: 'structure',
    philosophy: 'Paper and ink — Google’s classic elevation system.',
    markers: [
      'Cards that cast real elevation shadows',
      'A floating action button (FAB)',
      'Bold single primary color + accent',
      'Ripple feedback on tap',
    ],
    motion: 'Material motion — ripples from the touch point, shared-element transitions.',
    cssHints: ['Elevation shadows on a 0–24dp scale', 'A 600-weight primary + accent color', 'Circular FAB with a single icon'],
    promptFragment:
      'Use classic Material Design 2: surfaces are sheets of paper at different elevations (real layered shadows), a bold primary color with an accent, a circular floating action button, and ripple feedback radiating from the touch point.',
    conflictsWith: ['flat-design'],
  },
  {
    id: 'metro',
    name: 'Metro / Modern UI',
    category: 'structure',
    philosophy: 'Content over chrome — flat typographic tiles. The Windows Phone era.',
    markers: [
      'Live tiles in a grid',
      'Big, light-weight typography as the interface',
      'Bold flat accent on dark or white',
      'Edge-to-edge, no borders or bevels',
    ],
    motion: 'Tiles flip and slide; fast typographic transitions.',
    cssHints: ['Square/rectangular tiles in a tight grid', 'A single saturated accent (often one per app)', 'Light-weight large headings, tight to the edge'],
    promptFragment:
      'Use the Metro / Modern UI language: a grid of flat rectangular tiles, large light-weight typography doing the navigational work, one saturated accent color, and absolutely no bevels or borders — content runs edge to edge.',
    conflictsWith: ['skeuomorphism', 'neumorphism'],
  },
  {
    id: 'ibm-carbon',
    name: 'IBM Carbon',
    category: 'structure',
    philosophy: 'Confident, productive enterprise design on a strict grid.',
    markers: [
      'IBM Plex type family',
      '2px grid, square corners',
      'Restrained palette with IBM blue',
      'Dense data tables and clear states',
    ],
    cssHints: ['IBM Plex Sans / Mono', 'border-radius: 0; 2px spacing grid', 'Primary #0f62fe on near-white or #161616'],
    promptFragment:
      'Use the IBM Carbon design language: IBM Plex typography, a strict 2px grid with square corners, a restrained palette anchored by IBM blue (#0f62fe), and dense, legible data tables. Productive and confident, never decorative.',
  },
  {
    id: 'modern-minimal',
    name: 'Modern Minimal',
    category: 'structure',
    philosophy: 'The 2024 open-source default — neutral, subtle, accessible.',
    markers: [
      'Neutral zinc/slate palette, one accent',
      'Soft 8–12px radii, hairline borders',
      'Subtle shadows, lots of whitespace',
      'Tight grotesque type (Inter/Geist)',
    ],
    cssHints: ['Zinc/slate neutral scale + a single accent', 'border-radius ~10px, 1px subtle borders', 'Very soft shadows, focus rings for a11y'],
    promptFragment:
      'Use the modern minimal style that tools like shadcn/ui and Radix popularised: a neutral zinc/slate palette with one accent, soft ~10px corners, hairline borders, very subtle shadows, tight Inter/Geist typography, and visible focus rings. Calm, accessible, slightly boring on purpose.',
  },
  {
    id: 'fintech',
    name: 'Neobank / Fintech',
    category: 'structure',
    philosophy: 'Trust through clarity — big numbers, calm color, tight type.',
    markers: [
      'Oversized balance/number typography',
      'Card-based account tiles',
      'A confident single brand color',
      'Monospace for figures and codes',
    ],
    cssHints: ['Tabular/mono numerals for money', 'Rounded brand-colored cards', 'Generous spacing, restrained accents'],
    promptFragment:
      'Use a neobank / fintech style: oversized tabular numbers for balances, rounded account cards in a confident single brand color, monospace for figures and codes, and a calm, spacious layout that signals trust.',
  },

  // ─────────────────────────── Morphism (extended again) ───────────────────────────
  {
    id: 'skeuominimalism',
    name: 'Skeuominimalism',
    category: 'morphism',
    philosophy: 'Skeuomorphism’s subtle revival — just enough depth to feel touchable.',
    markers: [
      'Soft realistic shadows, gentle gradients',
      'Tactile but not literal (no leather/wood)',
      'Light inner highlights on controls',
      'Restrained, modern palette',
    ],
    cssHints: ['Subtle dual shadows + faint inner highlight', 'Gentle 2–6% gradients on fills', 'Modern palette, soft 12–16px radii'],
    promptFragment:
      'Use skeuominimalism: the 2023 revival of subtle realism — gentle gradients, soft realistic shadows and faint inner highlights that make controls feel touchable, but with a clean modern palette and none of the literal leather-and-wood of old skeuomorphism.',
    conflictsWith: ['flat-design'],
  },
  {
    id: 'duotone',
    name: 'Duotone',
    category: 'morphism',
    philosophy: 'Two colors, total commitment — the Spotify-era photographic treatment.',
    markers: [
      'Images mapped to a two-color gradient',
      'A bold shadow + highlight color pair',
      'High-contrast, graphic feel',
      'Type in one of the two tones',
    ],
    cssHints: ['mix-blend-mode + duotone gradient maps over images', 'A committed two-color palette', 'High contrast between the pair'],
    promptFragment:
      'Use a duotone treatment: map photography to a bold two-color gradient (a dark shadow tone and a bright highlight tone), keep type in one of the two colors, and lean into the high-contrast, graphic, poster-like result.',
  },

  // ─────────────────────────── Vibe (movements & subcultures) ───────────────────────────
  {
    id: 'bauhaus',
    name: 'Bauhaus',
    category: 'vibe',
    philosophy: 'Form follows function — primary colors and pure geometry.',
    markers: [
      'Red / yellow / blue + black on cream',
      'Circles, triangles, squares as building blocks',
      'Geometric sans, often lowercase',
      'Asymmetric but balanced composition',
    ],
    cssHints: ['Primary palette on warm off-white', 'Bold geometric shape blocks', 'Geometric sans (Futura-like), tight grid'],
    promptFragment:
      'Use the Bauhaus aesthetic: a primary palette (red, yellow, blue) plus black on warm cream, composition built from pure circles, triangles and squares, geometric sans typography (often lowercase), and asymmetric-but-balanced layout. Function first, ornament never.',
    conflictsWith: ['skeuomorphism'],
  },
  {
    id: 'art-deco',
    name: 'Art Deco',
    category: 'vibe',
    philosophy: 'Machine-age glamour — gold, symmetry and stepped geometry.',
    markers: [
      'Gold / brass on deep black or emerald',
      'Symmetrical, stepped (ziggurat) motifs',
      'High-contrast display serifs, all-caps',
      'Fine line ornament and sunbursts',
    ],
    cssHints: ['Gold (#c9a24b) on near-black or deep green', 'Symmetric layouts, stepped/fan borders', 'Elegant high-contrast caps display type'],
    promptFragment:
      'Use Art Deco: machine-age glamour with gold or brass on deep black or emerald, strict symmetry, stepped ziggurat and sunburst motifs, fine line ornament, and elegant high-contrast all-caps display serifs.',
    conflictsWith: ['neo-brutalism', 'anti-design'],
  },
  {
    id: 'art-nouveau',
    name: 'Art Nouveau',
    category: 'vibe',
    philosophy: 'Nature as ornament — whiplash curves and floral line-work.',
    markers: [
      'Organic “whiplash” curves',
      'Botanical line ornament framing content',
      'Muted earthy + gold palette',
      'Flowing, decorative display type',
    ],
    cssHints: ['SVG floral / vine line ornaments', 'Sinuous curved dividers, generous frames', 'Earthy muted palette with gilt accents'],
    promptFragment:
      'Use Art Nouveau: nature turned into ornament — sinuous whiplash curves, botanical vine line-work framing the content, a muted earthy palette with gilt accents, and flowing decorative display type. Everything curves; nothing is purely rectangular.',
    conflictsWith: ['neo-brutalism', 'swiss-modernism'],
  },
  {
    id: 'constructivism',
    name: 'Constructivism',
    category: 'vibe',
    philosophy: 'Art as propaganda — diagonal grids, red and black, raw power.',
    markers: [
      'Red, black and off-white only',
      'Strong diagonals and angled type',
      'Heavy geometric sans, all-caps',
      'Photomontage and bold rules',
    ],
    cssHints: ['Red #d6202a + black on paper', 'Rotated/diagonal type and blocks', 'Heavy bars and angled dividers'],
    promptFragment:
      'Use Russian Constructivism: a red-black-and-paper palette, aggressive diagonal grids with angled all-caps type, heavy geometric sans, bold rules and photomontage. Dynamic, political, unmistakably loud.',
    conflictsWith: ['cutealism', 'frutiger-aero'],
  },
  {
    id: 'pop-art',
    name: 'Pop Art',
    category: 'vibe',
    philosophy: 'Comic-book pop — Ben-Day dots and loud primaries.',
    markers: [
      'Ben-Day halftone dot patterns',
      'Bold primary colors + black outlines',
      'Comic “speech bubble” and burst shapes',
      'Heavy outlined display type',
    ],
    cssHints: ['Radial-gradient halftone dot backgrounds', 'Thick black outlines on everything', 'Primary fills, comic burst shapes'],
    promptFragment:
      'Use Pop Art: Lichtenstein-style Ben-Day halftone dots, loud primary colors with thick black outlines, comic speech-bubbles and burst shapes, and heavy outlined display type. Playful, graphic, high-energy.',
    conflictsWith: ['ultra-minimalism', 'quiet-luxury'],
  },
  {
    id: 'grunge',
    name: 'Grunge',
    category: 'vibe',
    philosophy: '90s zine energy — distressed, photocopied, torn.',
    markers: [
      'Distressed textures and ink splatter',
      'Torn paper and tape edges',
      'Ransom-note mixed type',
      'Muted, dirty palette',
    ],
    cssHints: ['Grunge/scratch texture overlays', 'Rotated torn-paper edges, tape strips', 'Mixed clashing typefaces, heavy grain'],
    promptFragment:
      'Use a 90s grunge / zine aesthetic: distressed and photocopied textures, ink splatter, torn-paper and tape edges, ransom-note mixed typography, and a muted dirty palette. Deliberately rough and hand-made.',
    conflictsWith: ['ultra-minimalism', 'quiet-luxury', 'apple-hig'],
  },
  {
    id: 'steampunk',
    name: 'Steampunk',
    category: 'vibe',
    philosophy: 'Victorian machinery — brass, gears and aged paper.',
    markers: [
      'Brass and copper on aged parchment',
      'Exposed gears, rivets and dials',
      'Ornate Victorian serif type',
      'Mechanical, tactile controls',
    ],
    cssHints: ['Brass gradients + parchment texture', 'Gear / cog SVG ornaments, rivet details', 'Ornate serif headings, sepia grain'],
    promptFragment:
      'Use Steampunk: Victorian machinery rendered in brass and copper on aged parchment, exposed gears, rivets and dials, ornate serif typography, and tactile mechanical controls. Retro-futurist by way of the 1800s.',
    conflictsWith: ['ultra-minimalism', 'modern-minimal'],
  },
  {
    id: 'cottagecore',
    name: 'Cottagecore',
    category: 'vibe',
    philosophy: 'Cosy pastoral nostalgia — soft floral and warm naturals.',
    markers: [
      'Warm cream, sage and dusty rose',
      'Floral and botanical motifs',
      'Soft serif or handwritten type',
      'Gentle, rounded, hand-made feel',
    ],
    cssHints: ['Muted natural palette (sage, cream, rose)', 'Floral SVG accents, soft rounded cards', 'Warm serif or script headings'],
    promptFragment:
      'Use Cottagecore: cosy pastoral nostalgia in warm cream, sage and dusty rose, with floral and botanical motifs, soft serif or handwritten headings, and gentle rounded shapes. Hand-made, comforting, a little vintage.',
    conflictsWith: ['cyberpunk-neon', 'constructivism'],
  },
  {
    id: 'quiet-luxury',
    name: 'Quiet Luxury',
    category: 'vibe',
    philosophy: 'Whispered wealth — warm neutrals, fine serifs, huge whitespace.',
    markers: [
      'Warm beige / stone / off-black palette',
      'Refined high-contrast serif',
      'Enormous whitespace and small type',
      'Almost no color, no ornament',
    ],
    cssHints: ['Beige/stone neutrals, near-black text', 'Refined serif display at calm sizes', 'Very generous margins, hairline rules'],
    promptFragment:
      'Use Quiet Luxury: whispered wealth in warm beige, stone and off-black, a refined high-contrast serif, enormous whitespace, small confident type and almost no color or ornament. Expensive by restraint, like The Row.',
    conflictsWith: ['maximalism', 'y2k', 'pop-art'],
  },
  {
    id: 'scandinavian',
    name: 'Scandinavian',
    category: 'vibe',
    philosophy: 'Hygge and function — light wood, muted calm, honest layout.',
    markers: [
      'Light woods and soft greys',
      'Muted, desaturated accents',
      'Functional, uncluttered layout',
      'Clean humanist sans',
    ],
    cssHints: ['Pale wood + soft grey palette', 'Lots of light, soft shadows', 'Humanist sans, calm spacing'],
    promptFragment:
      'Use Scandinavian / Nordic design: light woods and soft greys, muted desaturated accents, an honest uncluttered layout, humanist sans typography and plenty of light. Functional, calm, cosy — hygge as UI.',
    conflictsWith: ['cyberpunk-neon', 'maximalism'],
  },
  {
    id: 'japandi',
    name: 'Japandi',
    category: 'vibe',
    philosophy: 'Japanese restraint meets Nordic warmth — calm, natural, spare.',
    markers: [
      'Warm neutrals + charcoal + clay',
      'Natural materials, matte surfaces',
      'Asymmetry and intentional emptiness (ma)',
      'Quiet humanist or serif type',
    ],
    cssHints: ['Warm neutral + charcoal palette', 'Matte surfaces, generous empty space', 'Asymmetric balance, soft natural texture'],
    promptFragment:
      'Use Japandi: Japanese restraint blended with Nordic warmth — warm neutrals, charcoal and clay, matte natural surfaces, deliberate emptiness (ma) and asymmetric balance, with quiet humanist or serif type. Spare and grounded.',
    conflictsWith: ['maximalism', 'y2k'],
  },
  {
    id: 'acid-design',
    name: 'Acid Graphics',
    category: 'vibe',
    philosophy: 'Chrome, acid color and melted type — the anti-clean reaction.',
    markers: [
      'Liquid chrome / metallic type',
      'Acid green, electric blue, hot pink',
      'Distorted, melted, warped shapes',
      'Y2K-adjacent but harder, glossier',
    ],
    cssHints: ['Chrome gradient text (silver→blue)', 'Acid saturated palette on dark', 'Warp/distort transforms, gloss highlights'],
    promptFragment:
      'Use Acid Graphics: liquid-chrome metallic type, an acid palette (toxic green, electric blue, hot pink) on dark, melted and warped shapes, and glossy highlights. The hard, glossy reaction to clean minimalism.',
    conflictsWith: ['ultra-minimalism', 'quiet-luxury', 'dieter-rams'],
  },

  // ─────────────────────────── Spatial (extended again) ───────────────────────────
  {
    id: 'visionos',
    name: 'visionOS / Spatial',
    category: 'spatial',
    philosophy: 'Glass floating in space — depth, light and eye-driven focus.',
    markers: [
      'Frosted glass panels floating over the world',
      'Strong soft shadows for layered depth',
      'Bright hover/focus highlight (eye-driven)',
      'Fully rounded, generously padded surfaces',
    ],
    motion: 'Panels lift and brighten on focus; gentle parallax with viewpoint.',
    cssHints: ['Heavy frosted glass + large soft shadows', 'Big radii, generous padding', 'Bright focus highlight on hover'],
    promptFragment:
      'Use a visionOS / spatial style: frosted-glass panels floating in space with strong soft shadows for depth, very rounded and generously padded surfaces, and a bright highlight on the focused element as if gaze-driven. Light and dimensional.',
    conflictsWith: ['neo-brutalism', 'anti-design'],
  },

  // ─────────────────────────── AI-native (extended again) ───────────────────────────
  {
    id: 'claymation-3d',
    name: '3D Illustration',
    category: 'ai-native',
    philosophy: 'Soft rendered 3D — the Spline / claymation hero aesthetic.',
    markers: [
      'Soft-shaded 3D blobs and props',
      'Pastel, candy-like materials',
      'Big rounded forms with soft shadows',
      'Playful depth and floating objects',
    ],
    motion: 'Objects bob and rotate slowly; soft spring on hover.',
    cssHints: ['Rendered 3D hero imagery (Spline / Blender)', 'Pastel matte materials, soft global shadows', 'Big rounded forms, gentle float animation'],
    promptFragment:
      'Use a soft 3D illustration style (Spline / claymation): pastel matte 3D blobs and props with soft global shadows, big rounded candy-like forms, and playful floating depth. Friendly, tactile and modern.',
    conflictsWith: ['neo-brutalism', 'swiss-modernism'],
  },
];

export const stylesByCategory = (cat: string) => STYLES.filter((s) => s.category === cat);
export const styleById = (id: string) => STYLES.find((s) => s.id === id);
