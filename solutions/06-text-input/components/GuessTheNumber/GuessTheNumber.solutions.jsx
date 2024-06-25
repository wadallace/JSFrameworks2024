import { useState } from "react";

const getRandomNumber = () => Math.floor(Math.random() * 10) + 1;

function GuessTheNumber() {
  const [answer, setAnswer] = useState(getRandomNumber());
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("");

  const handleGuess = () => {
    if (guess === "") {
      setMessage("Please enter a number!");
      return;
    }

    const intUserGuess = parseInt(guess, 10);

    if (intUserGuess < answer) {
      setMessage(`Too low! The correct number was ${answer}`);
    } else if (intUserGuess > answer) {
      setMessage(`Too high! The correct number was ${answer}`);
    } else {
      setMessage("Correct! You win!");
    }
  };

  const handleReset = () => {
    setGuess("");
    setMessage("");
    setAnswer(getRandomNumber());
  };

  return (
    <div>
      <div className="input-group mb-3">
        <input
          type="number"
          className="form-control"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
        />
        <button className="btn btn-primary" onClick={handleGuess}>
          Guess
        </button>
      </div>
      <p>{message}</p>
      <button className="btn btn-secondary" onClick={handleReset}>
        Reset Game
      </button>
    </div>
  );
}

export default GuessTheNumber;
