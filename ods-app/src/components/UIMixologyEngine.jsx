import React, { useEffect, useRef, useState } from 'react';
import Slider from './Slider';
import Toggle from './Toggle';

const UIMixologyEngine = ({ onUpdate }) => {
  const isFirstRender = useRef(true);
  const [designElements, setDesignElements] = useState({
    sliderValue: 50,
    dropdownValue: 'default',
    toggleState: false,
  });

  const updateDesignElements = (updates) => {
    setDesignElements((prev) => ({ ...prev, ...updates }));
  };

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    onUpdate(designElements);
  }, [designElements, onUpdate]);

  const handleSliderChange = (value) => {
    updateDesignElements({ sliderValue: value });
  };

  const handleDropdownChange = (value) => {
    updateDesignElements({ dropdownValue: value });
  };

  const handleToggleChange = (value) => {
    updateDesignElements({ toggleState: value });
  };

  return (
    <div className='ui-mixology-engine'>
      <Slider
        label='Design Element Intensity'
        value={designElements.sliderValue}
        onChange={(event) => handleSliderChange(Number(event.target.value))}
      />
      <select
        value={designElements.dropdownValue}
        onChange={(e) => handleDropdownChange(e.target.value)}
      >
        <option value='default'>Default</option>
        <option value='variant1'>Variant 1</option>
        <option value='variant2'>Variant 2</option>
      </select>
      <Toggle
        label='Enable Feature'
        checked={designElements.toggleState}
        onChange={(event) => handleToggleChange(event.target.checked)}
      />
    </div>
  );
};

export default UIMixologyEngine;
