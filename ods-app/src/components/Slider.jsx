import React from 'react';

function Slider({ label, value, onChange, min = 0, max = 100 }) {
  return (
    <label className='control'>
      <span>
        {label}: <strong>{value}</strong>
      </span>
      <input type='range' min={min} max={max} value={value} onChange={onChange} />
    </label>
  );
}

export default Slider;
