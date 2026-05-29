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
  /** One-line philosophy / core idea. */
  philosophy: string;
  /** Concrete visual markers a designer would recognize. */
  markers: string[];
  /** Motion / interaction character, if distinctive. */
  motion?: string;
  /** Concrete CSS techniques that realize the look. */
  cssHints: string[];
  /** Sentence(s) injected into the generated prompt when this style is chosen. */
  promptFragment: string;
  /** Styles that clash hard with this one (used to warn in the mixer). */
  conflictsWith?: string[];
}

export interface CategoryMeta {
  id: StyleCategory;
  label: string;
  description: string;
  /** Selection rule for this category in the wizard. */
  selection: 'single' | 'multi';
}
