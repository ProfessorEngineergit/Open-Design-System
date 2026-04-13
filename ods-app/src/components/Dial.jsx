import React from 'react';

function Dial({ label, value, onChange, min = 0, max = 10, step = 1 }) {
  return (
    <label className='dial-control'>
      <span>{label}</span>
      <input type='number' min={min} max={max} step={step} value={value} onChange={onChange} />
    </label>
  );
}

export default Dial;
