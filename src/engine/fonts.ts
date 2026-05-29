import type { CustomFont, FontRole, OdsSelection } from './state';

/** Read an uploaded font file into a data URL + a safe CSS family name. */
export function readFontFile(file: File): Promise<{ dataUrl: string; family: string; fileName: string }> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject(reader.error);
    reader.onload = () => {
      const base = file.name.replace(/\.[^.]+$/, '');
      const family = `ODS ${base.replace(/[^a-zA-Z0-9 ]+/g, ' ').trim() || 'Custom'}`;
      resolve({ dataUrl: reader.result as string, family, fileName: file.name });
    };
    reader.readAsDataURL(file);
  });
}

const registered = new Set<string>();

/** Register a single font with the browser if it isn't already loaded. */
export async function registerFont(family: string, dataUrl: string): Promise<void> {
  if (registered.has(family)) return;
  registered.add(family);
  try {
    const face = new FontFace(family, `url(${dataUrl})`);
    await face.load();
    document.fonts.add(face);
  } catch {
    registered.delete(family);
  }
}

/** Re-register all persisted custom fonts (call on app load). */
export function ensureFontsRegistered(fonts: CustomFont[]): void {
  fonts.forEach((f) => void registerFont(f.family, f.dataUrl));
}

export const customFontForRole = (sel: OdsSelection, role: FontRole): CustomFont | undefined =>
  sel.customFonts.find((f) => f.role === role);

/** Prepend any custom font for a role onto the fallback stack. */
export function fontStackForRole(sel: OdsSelection, role: FontRole, fallback: string): string {
  const custom = customFontForRole(sel, role);
  return custom ? `'${custom.family}', ${fallback}` : fallback;
}

export const ACCEPTED_FONT_TYPES = '.woff2,.woff,.ttf,.otf';
