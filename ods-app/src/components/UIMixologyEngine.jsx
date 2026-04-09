import React, { useState } from 'react';

const [customCodeSnippets, setCustomCodeSnippets] = useState('');
import Slider from './Slider';
import Toggle from './Toggle';

const UIMixologyEngine = ({ onUpdate }) => {
  const [designElements, setDesignElements] = useState({
    sliderValue: 50,
    dropdownValue: 'default',
    toggleState: false,
  });

  const handleSliderChange = (value) => {
    setDesignElements((prev) => ({ ...prev, sliderValue: value }));
    const updatedDesignElements = { ...designElements, sliderValue: value };
    onUpdate(updatedDesignElements);
    generateOutputPrompt(updatedDesignElements, customCodeSnippets);
  };

  const handleDropdownChange = (value) => {
    setDesignElements((prev) => ({ ...prev, dropdownValue: value }));
    const updatedDesignElements = { ...designElements, dropdownValue: value };
    onUpdate(updatedDesignElements);
    generateOutputPrompt(updatedDesignElements, customCodeSnippets);
  };

  const handleToggleChange = (value) => {
    setDesignElements((prev) => ({ ...prev, toggleState: value }));
    const updatedDesignElements = { ...designElements, toggleState: value };
    onUpdate(updatedDesignElements);
    generateOutputPrompt(updatedDesignElements, customCodeSnippets);
  };

  return (
    <div className='ui-mixology-engine'>
      <Slider
        label='Design Element Intensity'
        value={designElements.sliderValue}
        onChange={handleSliderChange}
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
        onChange={handleToggleChange}
      />
    </div>
  );

  // Test with default values
  React.useEffect(() => {
    const testDesignElements = {
      sliderValue: 50,
      dropdownValue: 'default',
      toggleState: false,
    };
    generateOutputPrompt(testDesignElements, '');
  }, []);

  // Test with custom values
  React.useEffect(() => {
    const testDesignElements = {
      sliderValue: 75,
      dropdownValue: 'variant1',
      toggleState: true,
    };
    generateOutputPrompt(testDesignElements, 'console.log("Custom Code Snippet")');
  }, []);

  const generateOutputPrompt = (designElements, customCodeSnippets) => {
    let prompt = 'Design Elements:\n';

    if (designElements.sliderValue !== undefined) {
      prompt += `- Slider Value: ${designElements.sliderValue}\n`;
    }

    if (designElements.dropdownValue !== undefined) {
      prompt += `- Dropdown Value: ${designElements.dropdownValue}\n`;
    }

    if (designElements.toggleState !== undefined) {
      prompt += `- Toggle State: ${designElements.toggleState}\n`;
    }

    if (customCodeSnippets) {
      prompt += '\nCustom Code Snippets:\n';
      prompt += customCodeSnippets;
    }

    console.log(prompt);
  };
};

export default UIMixologyEngine;
