import "./App.css";
import CharacterCount from "./components/CharacterCount/CharacterCount";
import GuessTheNumber from "./components/GuessTheNumber/GuessTheNumber";

function App() {
  return (
    <>
      <div className="bg-secondary text-white pt-4 pb-4 mb-4">
        <div className="container">
          <h1 className="h3">Challenge 1 - Character Count</h1>
          <CharacterCount />
        </div>
      </div>
      <div className="container">
        <h1 className="h3">Challenge 2 - Guessing The Number</h1>
        <GuessTheNumber />
      </div>
    </>
  );
}

export default App;
