import React, { useState } from 'react';

function CommaNumberInput() {
  const [formattedValue, setFormattedValue] = useState('');
  const [rawValue, setRawValue] = useState('');

  const handleChange = (e) => {
    // Remove non-digit characters
    const raw = e.target.value.replace(/\D/g, '');

    // Format the number with commas
    const formatted = raw ? Number(raw).toLocaleString() : '';

    setRawValue(raw);
    setFormattedValue(formatted);
  };

  return (
    <div>
      <input
        type="text"
        inputMode="numeric"
        pattern="\d*"
        placeholder="Enter number"
        value={formattedValue}
        onChange={handleChange}
      />
      <p>Raw Value (for backend): {rawValue}</p>
    </div>
  );
}

export default CommaNumberInput;
