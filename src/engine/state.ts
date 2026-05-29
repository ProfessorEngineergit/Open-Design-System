/** Continuous visual parameters tuned in the live mixer. */
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
  /** sanitized CSS family name we register the font under */
  family: string;
  role: FontRole;
  /** original uploaded filename, shown in the UI */
  fileName: string;
  /** base64 data URL of the font file, so it survives reloads */
  dataUrl: string;
}

export interface OdsSelection {
  projectType: string | null;
  basePhysics: string | null;
  /** style id -> intensity weight 0..100 */
  styleWeights: Record<string, number>;
  /** chosen typography system id */
  typeSystem: string | null;
  /** user-uploaded fonts, assigned to heading/body roles */
  customFonts: CustomFont[];
  visuals: VisualParams;
  /** free-text extra instructions from the user */
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
