import "./App.css";

import Temperature from "./components/Temperature/Temperature";
import Address from "./components/Address/Address";

function App() {
  return (
    <>
      <div className="bg-secondary pt-4 pb-4 mb-4">
        <div className="container">
          <h1 className="h3 text-white">Challenge 1 - Temperature</h1>
          <Temperature />
        </div>
      </div>
      <div className="container mb-4">
        <h1 className="h3">Challenge 2 - Address Form</h1>
        <Address />
      </div>
    </>
  );
}

export default App;
