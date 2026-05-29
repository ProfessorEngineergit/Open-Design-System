import { LivePreview } from '../components/LivePreview';
import { Slider } from '../components/controls';
import { activeStyles } from '../engine/promptEngine';
import { fontStackForRole } from '../engine/fonts';
import { typeSystemById } from '../data/typography';
import type { OdsSelection, VisualParams } from '../engine/state';

interface Props {
  sel: OdsSelection;
  update: (patch: Partial<OdsSelection>) => void;
}

export function MixerStep({ sel, update }: Props) {
  const set = (patch: Partial<VisualParams>) => update({ visuals: { ...sel.visuals, ...patch } });
  const v = sel.visuals;
  const activeIds = activeStyles(sel).map((a) => a.style.id);
  if (sel.basePhysics) activeIds.push(sel.basePhysics);

  const type = sel.typeSystem ? typeSystemById(sel.typeSystem) : null;
  const headingFont = fontStackForRole(sel, 'heading', type?.headingStack ?? 'var(--font-display)');
  const bodyFont = fontStackForRole(sel, 'body', type?.bodyStack ?? 'var(--font-body)');

  return (
    <section>
      <h2 className="step-title">Fine-tune the look</h2>
      <p className="step-sub muted">Drag the sliders to shape the surface. The preview and the tokens keep up as you go.</p>

      <div className="mixer-layout">
        <div className="mixer-controls panel">
          <Slider label="Corner radius" value={v.radius} min={0} max={48} unit="px" onChange={(x) => set({ radius: x })} />
          <Slider label="Backdrop blur" value={v.blur} min={0} max={40} unit="px" onChange={(x) => set({ blur: x })} />
          <Slider
            label="Refraction"
            value={v.refraction}
            min={0}
            max={100}
            unit="%"
            onChange={(x) => set({ refraction: x })}
          />
          <Slider
            label="Saturation"
            value={v.saturation}
            min={100}
            max={220}
            unit="%"
            onChange={(x) => set({ saturation: x })}
          />
          <Slider label="Elevation" value={v.elevation} min={0} max={100} onChange={(x) => set({ elevation: x })} />
          <Slider
            label="Border width"
            value={v.borderWidth}
            min={0}
            max={4}
            unit="px"
            onChange={(x) => set({ borderWidth: x })}
          />
          <Slider
            label="Border opacity"
            value={v.borderOpacity}
            min={0}
            max={100}
            unit="%"
            onChange={(x) => set({ borderOpacity: x })}
          />
          <Slider label="Grain / noise" value={v.noise} min={0} max={100} onChange={(x) => set({ noise: x })} />
          <Slider label="Accent hue" value={v.accentHue} min={0} max={360} unit="°" hue onChange={(x) => set({ accentHue: x })} />
        </div>

        <LivePreview v={v} activeStyleIds={activeIds} headingFont={headingFont} bodyFont={bodyFont} />
      </div>
    </section>
  );
}
