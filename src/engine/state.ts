/** The knobs the mixer sliders write into. */
export interface VisualParams {
  radius: number; // px, corner radius
  blur: number; // px, backdrop blur
  saturation: number; // %, backdrop saturation
  elevation: number; // 0-100, shadow strength
  borderWidth: number; // px
  borderOpacity: number; // 0-100, white border alpha
  noise: number; // 0-100, texture/grain
  refraction: number; // 0-100, liquid-glass edge displacement strength
  accentHue: number; // 0-360
}

export const DEFAULT_VISUALS: VisualParams = {
  radius: 16,
  blur: 12,
  saturation: 140,
  elevation: 30,
  borderWidth: 1,
  borderOpacity: 24,
  noise: 0,
  refraction: 45,
  accentHue: 265,
};

export type FontRole = 'heading' | 'body';

export interface CustomFont {
  /** the CSS family name we register it under (cleaned up) */
  family: string;
  role: FontRole;
  /** the original filename, so we can show it back to the user */
  fileName: string;
  /** the font itself as a base64 data URL, so it survives a reload */
  dataUrl: string;
}

export interface OdsSelection {
  projectType: string | null;
  basePhysics: string | null;
  /** style id → how strongly it's weighted, 0 to 100 */
  styleWeights: Record<string, number>;
  /** which type pairing they picked */
  typeSystem: string | null;
  /** any fonts the user brought, slotted into heading or body */
  customFonts: CustomFont[];
  visuals: VisualParams;
  /** anything extra the user typed in */
  notes: string;
}

export const INITIAL_SELECTION: OdsSelection = {
  projectType: null,
  basePhysics: null,
  styleWeights: {},
  typeSystem: null,
  customFonts: [],
  visuals: DEFAULT_VISUALS,
  notes: '',
};
