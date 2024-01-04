import LanguageTranslator from "./LanguageTranslator";
// import "./styles.css";

export default function App() {
  return (
    <div style={{minHeight:"100vh", display:"flex", alignItems:"center", justifyContent:"center" ,background : "url('https://cdn3.vectorstock.com/i/1000x1000/77/17/digital-blue-geometric-background-design-vector-30227717.jpg') no-repeat", backgroundSize:"cover" }}>
      <LanguageTranslator />
    </div>
  );
}
