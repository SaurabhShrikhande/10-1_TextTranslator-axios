import React from "react";

const LanguageDropdown = ({ label, languages, onChange }) => (
  <div style={{padding:"5px"}}>
    <label htmlFor={label}>{label}</label>
    <select id={label} onChange={(e) => onChange(e.target.value)}>
      {Object.entries(languages).map(([languageName, languageCode]) => (
        <option key={languageCode} value={languageCode}>
          {languageName}
        </option>
      ))}
    </select>
  </div>
);

export default LanguageDropdown;
