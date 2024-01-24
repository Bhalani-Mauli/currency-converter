import Converter from "./componants/converter/Converter";

import "./App.css";

function App() {
  return (
    <div className="app-wrapper">
      <div className="section-converter">
        <div className="header">
          <img className="logo-img" src="/logo.png" />
          <h1>currency converter</h1>
        </div>
        <Converter />
      </div>

      <div className="section-img">
        <img src="/currency.jpg" />
      </div>
    </div>
  );
}

export default App;
