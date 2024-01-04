import React from "react";

const TextInput = ({ label, value, onChange }) => (
  <div>
    {/* <label htmlFor={label}>{label}</label> */}
    <textarea style={{padding:"5px", margin:"15px"}}
      id={label}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    ></textarea>
  </div>
);

export default TextInput;
