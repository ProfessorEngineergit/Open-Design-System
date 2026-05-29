import { TYPE_CATEGORIES, typeSystemsByCategory } from '../data/typography';
import { ACCEPTED_FONT_TYPES, customFontForRole, readFontFile, registerFont } from '../engine/fonts';
import type { CustomFont, FontRole, OdsSelection } from '../engine/state';

interface Props {
  sel: OdsSelection;
  update: (patch: Partial<OdsSelection>) => void;
}

const ROLE_LABEL: Record<FontRole, string> = { heading: 'Headings', body: 'Body' };

export function TypographyStep({ sel, update }: Props) {
  const setFont = (role: FontRole, font: CustomFont) =>
    update({ customFonts: [...sel.customFonts.filter((f) => f.role !== role), font] });
  const removeFont = (role: FontRole) =>
    update({ customFonts: sel.customFonts.filter((f) => f.role !== role) });

  const onUpload = async (role: FontRole, file: File | undefined) => {
    if (!file) return;
    const { dataUrl, family, fileName } = await readFontFile(file);
    await registerFont(family, dataUrl);
    setFont(role, { family, role, fileName, dataUrl });
  };

  return (
    <section>
      <h2 className="step-title">Pick your typography</h2>
      <p className="step-sub muted">
        Type does more for personality than almost anything else. Pick a pairing, or bring your own below.
      </p>

      <div className="cat-block">
        <div className="cat-head">
          <h3>Bring your own fonts</h3>
          <span className="faint">Optional — drop in a .woff2 / .ttf / .otf to use your own</span>
        </div>
        <div className="byo-grid">
          {(['heading', 'body'] as FontRole[]).map((role) => {
            const font = customFontForRole(sel, role);
            return (
              <div key={role} className={`font-slot ${font ? 'on' : ''}`}>
                <div className="font-slot-head">
                  <strong>{ROLE_LABEL[role]}</strong>
                  {font && (
                    <button className="text-btn font-remove" onClick={() => removeFont(role)}>
                      Remove
                    </button>
                  )}
                </div>
                <div
                  className="font-specimen"
                  style={{ fontFamily: font ? `'${font.family}'` : 'inherit', fontSize: role === 'heading' ? 30 : 17 }}
                >
                  {font ? (role === 'heading' ? 'Ag Design' : 'The quick brown fox jumps over the lazy dog.') : '—'}
                </div>
                {font ? (
                  <div className="faint font-name">{font.fileName}</div>
                ) : (
                  <label className="font-drop">
                    <input
                      type="file"
                      accept={ACCEPTED_FONT_TYPES}
                      onChange={(e) => onUpload(role, e.target.files?.[0])}
                    />
                    <span>Upload {ROLE_LABEL[role].toLowerCase()} font</span>
                  </label>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {TYPE_CATEGORIES.map((cat) => {
        const systems = typeSystemsByCategory(cat.id);
        if (!systems.length) return null;
        return (
          <div key={cat.id} className="cat-block">
            <div className="cat-head">
              <h3>{cat.label}</h3>
            </div>
            <div className="type-grid">
              {systems.map((t) => {
                const active = sel.typeSystem === t.id;
                return (
                  <button
                    key={t.id}
                    className={`type-card ${active ? 'selected' : ''}`}
                    onClick={() => update({ typeSystem: t.id })}
                  >
                    <div className="type-specimen">
                      <span className="type-heading" style={{ fontFamily: t.headingStack }}>
                        Ag
                      </span>
                      <span className="type-sample-head" style={{ fontFamily: t.headingStack }}>
                        Headlines look like this
                      </span>
                      <span className="type-sample-body" style={{ fontFamily: t.bodyStack }}>
                        The quick brown fox jumps over the lazy dog. 0123456789
                      </span>
                    </div>
                    <div className="type-meta">
                      <strong>{t.name}</strong>
                      <span className="muted">{t.character}</span>
                      <div className="type-vibes">
                        {t.vibes.map((v) => (
                          <span key={v} className="vibe-tag">
                            {v}
                          </span>
                        ))}
                      </div>
                    </div>
                    {active && <span className="type-check">✓</span>}
                  </button>
                );
              })}
            </div>
          </div>
        );
      })}
    </section>
  );
}
