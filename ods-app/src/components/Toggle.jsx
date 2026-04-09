import React from 'react';

function Toggle({ label, checked, onChange }) {
    return (
        <div>
            <label>{label}</label>
            <input type="checkbox" checked={checked} onChange={onChange} />
        </div>
    );
}

export default Toggle;