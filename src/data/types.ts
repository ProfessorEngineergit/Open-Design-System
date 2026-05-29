export type StyleCategory =
  | 'base-physics'
  | 'morphism'
  | 'structure'
  | 'vibe'
  | 'spatial'
  | 'ai-native';

export interface DesignStyle {
  id: string;
  name: string;
  category: StyleCategory;
  /** The core idea, in one line. */
  philosophy: string;
  /** Tell-tale visual cues a designer would spot. */
  markers: string[];
  /** How it moves, if movement is part of its character. */
  motion?: string;
  /** The CSS tricks that actually pull the look off. */
  cssHints: string[];
  /** What we drop into the prompt when someone picks this style. */
  promptFragment: string;
  /** Styles that really don't get along with this one — we warn about these. */
  conflictsWith?: string[];
}

export interface CategoryMeta {
  id: StyleCategory;
  label: string;
  description: string;
  /** Whether you pick just one from this category, or several. */
  selection: 'single' | 'multi';
}
