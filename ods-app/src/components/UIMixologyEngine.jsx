import React, { useState } from 'react';
import Slider from './Slider';
import Toggle from './Toggle';

const UIMixologyEngine = ({ onUpdate }) => {
  const [designElements, setDesignElements] = useState({
    sliderValue: 50,
    dropdownValue: 'default',
    toggleState: false,
  });
  const [customCodeSnippets] = useState('');

  const generateOutputPrompt = (updatedDesignElements, customCodeSnippetText) => {
    let prompt = 'Design Elements:\n';

    if (updatedDesignElements.sliderValue !== undefined) {
      prompt += `- Slider Value: ${updatedDesignElements.sliderValue}\n`;
    }

    if (updatedDesignElements.dropdownValue !== undefined) {
      prompt += `- Dropdown Value: ${updatedDesignElements.dropdownValue}\n`;
    }

    if (updatedDesignElements.toggleState !== undefined) {
      prompt += `- Toggle State: ${updatedDesignElements.toggleState}\n`;
    }

    if (customCodeSnippetText) {
      prompt += '\nCustom Code Snippets:\n';
      prompt += customCodeSnippetText;
    }

    console.log(prompt);
  };

  const updateDesignElements = (updates) => {
    setDesignElements((prev) => {
      const updatedDesignElements = { ...prev, ...updates };
      onUpdate(updatedDesignElements);
      generateOutputPrompt(updatedDesignElements, customCodeSnippets);
      return updatedDesignElements;
    });
  };

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
