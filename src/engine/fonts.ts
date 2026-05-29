import type { CustomFont, FontRole, OdsSelection } from './state';

/** Read an uploaded font into a data URL and a safe CSS family name. */
export function readFontFile(file: File): Promise<{ dataUrl: string; family: string; fileName: string }> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject(reader.error);
    reader.onload = () => {
      const base = file.name.replace(/\.[^.]+$/, '');
      const family = `Looksmith ${base.replace(/[^a-zA-Z0-9 ]+/g, ' ').trim() || 'Custom'}`;
      resolve({ dataUrl: reader.result as string, family, fileName: file.name });
    };
    reader.readAsDataURL(file);
  });
}

const registered = new Set<string>();

/** Hand a font to the browser, unless we've already loaded it. */
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

/** Re-add every saved font when the app boots. */
export function ensureFontsRegistered(fonts: CustomFont[]): void {
  fonts.forEach((f) => void registerFont(f.family, f.dataUrl));
}

export const customFontForRole = (sel: OdsSelection, role: FontRole): CustomFont | undefined =>
  sel.customFonts.find((f) => f.role === role);

/** If the user uploaded a font for this role, put it first in the stack. */
export function fontStackForRole(sel: OdsSelection, role: FontRole, fallback: string): string {
  const custom = customFontForRole(sel, role);
  return custom ? `'${custom.family}', ${fallback}` : fallback;
}

export const ACCEPTED_FONT_TYPES = '.woff2,.woff,.ttf,.otf';
