import React from 'react';

function Toggle({ label, checked, onChange }) {
  return (
    <label className='toggle-control'>
      <span>{label}</span>
      <input type='checkbox' checked={checked} onChange={onChange} />
    </label>
  );
}

export default Toggle;
