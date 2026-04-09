import React from 'react';

function Slider({ label, value, onChange }) {
    return (
        <div>
            <label>{label}</label>
            <input type="range" value={value} onChange={onChange} />
        </div>
    );
}

export default Slider;