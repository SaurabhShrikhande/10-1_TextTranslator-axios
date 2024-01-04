import React, { useState, useEffect } from "react";
import axios from "axios";
import LanguageDropdown from "./LanguageDropdown";
import TextInput from "./TextInput";
// import TranslationResult from "./TranslationResult";
import { supportedLanguages } from "./apiUtils";

const styles = {
  container: {
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    padding: "20px",
    textAlign: "center",
    maxWidth: "400px",
    width: "100%"
  },
  title: {
    color: "#333"
  },
  label: {
    display: "block",
    margin: "10px 0",
    fontWeight: "bold"
  },
  input: {
    width: "100%",
    padding: "8px",
    margin: "8px 0",
    boxSizing: "border-box"
  },
  button: {
    backgroundColor: "#4caf50",
    color: "white",
    padding: "10px",
    cursor: "pointer",
    border: "none",
    borderRadius: "4px"
  },
  buttonHover: {
    backgroundColor: "#45a049",
    color: "white",
    padding: "10px",
    cursor: "pointer",
    border: "none",
    borderRadius: "4px"
  },
  result: {
    marginTop: "20px",
    fontWeight: "bold"
  }
};

const LanguageTranslator = () => {
  const [sourceLanguage, setSourceLanguage] = useState("");
  const [targetLanguage, setTargetLanguage] = useState("");
  const [textInput, setTextInput] = useState("");
  const [translationResult, setTranslationResult] = useState("");
  const [buttonStyle, setButtonStyle] = useState(styles.button);

  const translateTextHandler = async () => {
    const url = "https://text-translator2.p.rapidapi.com/translate";
    const apiKey = "78694a20d7mshef0f9d10f0862bdp1bfcf2jsn1311620c552a"; 
    

    const headers = {
      "content-type": "application/x-www-form-urlencoded",
      "X-RapidAPI-Key": apiKey,
      "X-RapidAPI-Host": "text-translator2.p.rapidapi.com"
    };

    const data = new URLSearchParams({
      source_language: sourceLanguage,
      target_language: targetLanguage,
      text: textInput
    });

    try {
      
      const response = await axios.post(url, data, { headers });
      const result = response.data;

      if (result.status === "success") {
        const translatedText = JSON.parse(`"${result.data.translatedText}"`);
        setTranslationResult(translatedText);
      } else {
        setTranslationResult("Translation failed.");
      }
    } catch (error) {
      console.error("Error:", error);
      setTranslationResult("Error occurred during translation.");
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Language Translator</h1>

      <LanguageDropdown
        label="sourceLanguage"
        languages={supportedLanguages}
        onChange={setSourceLanguage}
      />
      <LanguageDropdown
        label="targetLanguage"
        languages={supportedLanguages}
        onChange={setTargetLanguage}
      />

    <div  style={{marginTop:"20px"}}></div>
          <label>Text Input</label>
      <TextInput label="textInput"  value={textInput} onChange={setTextInput} />

      <button
        style={buttonStyle}
        onMouseOver={() => setButtonStyle(styles.buttonHover)}
        onMouseOut={() => setButtonStyle(styles.button)}
        onClick={translateTextHandler}
      >
        Translate
      </button>

      <div style={styles.result}>{translationResult}</div>
    </div>
  );
};

export default LanguageTranslator;
