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
];

export const stylesByCategory = (cat: string) => STYLES.filter((s) => s.category === cat);
export const styleById = (id: string) => STYLES.find((s) => s.id === id);
