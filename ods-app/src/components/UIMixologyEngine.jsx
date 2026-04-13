import React from 'react';
import Slider from './Slider';
import Toggle from './Toggle';
import Dial from './Dial';

const UIMixologyEngine = ({ value, onChange, designLibrary }) => {
  const updateValue = (updates) => {
    onChange((prev) => ({ ...prev, ...updates }));
  };

  return (
    <div className='mixology-grid'>
      <label>
        Basis-Geometrie
        <select value={value.geometry} onChange={(event) => updateValue({ geometry: event.target.value })}>
          {Object.entries(designLibrary.geometry).map(([optionValue, optionData]) => (
            <option key={optionValue} value={optionValue}>
              {optionData.label}
            </option>
          ))}
        </select>
      </label>

      <label>
        Materialität & Textur
        <select value={value.materiality} onChange={(event) => updateValue({ materiality: event.target.value })}>
          {Object.entries(designLibrary.materiality).map(([optionValue, optionData]) => (
            <option key={optionValue} value={optionValue}>
              {optionData.label}
            </option>
          ))}
        </select>
      </label>

      <label>
        Vibe & Ästhetik
        <select value={value.vibe} onChange={(event) => updateValue({ vibe: event.target.value })}>
          {Object.entries(designLibrary.vibes).map(([optionValue, optionData]) => (
            <option key={optionValue} value={optionValue}>
              {optionData.label}
            </option>
          ))}
        </select>
      </label>

      <label>
        Globaler Tint
        <select value={value.tint} onChange={(event) => updateValue({ tint: event.target.value })}>
          <option value='Rot'>Rot</option>
          <option value='Cyan'>Cyan</option>
          <option value='Violett'>Violett</option>
          <option value='Lime'>Lime</option>
          <option value='Orange'>Orange</option>
        </select>
      </label>

      <Slider
        label='Design-Intensität'
        value={value.intensity}
        min={0}
        max={100}
        onChange={(event) => updateValue({ intensity: Number(event.target.value) })}
      />

      <Slider
        label='Textur-Stärke'
        value={value.textureStrength}
        min={0}
        max={100}
        onChange={(event) => updateValue({ textureStrength: Number(event.target.value) })}
      />

      <label>
        Button-Material
        <select value={value.buttonMaterial} onChange={(event) => updateValue({ buttonMaterial: event.target.value })}>
          {Object.entries(designLibrary.materiality).map(([optionValue, optionData]) => (
            <option key={optionValue} value={optionValue}>
              {optionData.label}
            </option>
          ))}
        </select>
      </label>

      <Slider
        label='Button-Rundung (px)'
        value={value.buttonRoundness}
        min={0}
        max={40}
        onChange={(event) => updateValue({ buttonRoundness: Number(event.target.value) })}
      />

      <Slider
        label='Button-Höhe (px)'
        value={value.buttonHeight}
        min={34}
        max={72}
        onChange={(event) => updateValue({ buttonHeight: Number(event.target.value) })}
      />

      <Dial
        label='Button-Rand (px)'
        value={value.buttonBorderWidth}
        min={0.5}
        max={4}
        step={0.1}
        onChange={(event) => updateValue({ buttonBorderWidth: Number(event.target.value) })}
      />

      <Slider
        label='Button-Glanz'
        value={value.buttonGloss}
        min={0}
        max={100}
        onChange={(event) => updateValue({ buttonGloss: Number(event.target.value) })}
      />

      <Slider
        label='Button-Schatten'
        value={value.buttonShadow}
        min={0}
        max={100}
        onChange={(event) => updateValue({ buttonShadow: Number(event.target.value) })}
      />

      <Dial
        label='Tiefen-Layer'
        value={value.depthLayers}
        min={1}
        max={10}
        step={1}
        onChange={(event) => updateValue({ depthLayers: Number(event.target.value) })}
      />

      <Dial
        label='Control-Scale (x)'
        value={value.controlScale}
        min={0.7}
        max={2}
        step={0.1}
        onChange={(event) => updateValue({ controlScale: Number(event.target.value) })}
      />

      <Toggle
        label='Scanlines aktivieren'
        checked={value.enableScanlines}
        onChange={(event) => updateValue({ enableScanlines: event.target.checked })}
      />
      <Toggle
        label='Micro-Glow aktivieren'
        checked={value.enableMicroGlow}
        onChange={(event) => updateValue({ enableMicroGlow: event.target.checked })}
      />
      <Toggle
        label='A11y-Kontrast priorisieren'
        checked={value.enforceAccessibility}
        onChange={(event) => updateValue({ enforceAccessibility: event.target.checked })}
      />
      <Toggle
        label='Logic-Lock (nur CSS ändern)'
        checked={value.preserveLogicLock}
        onChange={(event) => updateValue({ preserveLogicLock: event.target.checked })}
      />
    </div>
  );
};

export default UIMixologyEngine;
