import React, { useState } from 'react';
import UIMixologyEngine from './components/UIMixologyEngine';
import './App.css';

const App = () => {
  const [outputPrompt, setOutputPrompt] = useState('Initial Output');

  const handleUpdate = (designElements) => {
    // Generate output prompt based on design elements
    const newOutput = `Design Intensity: ${designElements.sliderValue}, Variant: ${designElements.dropdownValue}, Feature Enabled: ${designElements.toggleState}`;
    setOutputPrompt(newOutput);
  };

  return (
    <div className='app'>
      <h1>UI-Mixology Engine</h1>
      <UIMixologyEngine onUpdate={handleUpdate} />
      <div className='output-prompt'>
        <h2>Output Prompt</h2>
        <p>{outputPrompt}</p>
      </div>
    </div>
  );
};

export default App;
