import "./App.css";
import LessText from "./components/LessText/LessText";

function App() {
  return (
    <>
      <div className="container pt-4 pb-4">
        <h2 className="h3">Challenge 1 - Less Text</h2>
        <LessText
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus earum culpa expedita cumque tempora, nisi sequi, ratione debitis eveniet consequatur cupiditate quibusdam, quo voluptates asperiores voluptas inventore iusto. Et, unde!"
          maxLength={100}
        />
      </div>
      <div className="pt-4 pb-4 mb-4">
        <div className="container">
          <h1 className="h3">Challenge 2 - Dice Roll</h1>
          <DiceRoller />
        </div>
      </div>
    </>
  );
}

export default App;
