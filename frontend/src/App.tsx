import "./App.css";
import Converter from "./componants/Converter";

function App() {
  return (
    <>
      <div className="header">
        <img className="logo-img" src="/logo.png" />
        <h1>currency converter</h1>
      </div>
      <Converter />
    </>
  );
}

export default App;
