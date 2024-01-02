import React from "react";

const TextInput = ({ label, value, onChange }) => (
  <div>
    <label htmlFor={label}>{label}</label>
    <textarea
      id={label}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    ></textarea>
  </div>
);

export default TextInput;
