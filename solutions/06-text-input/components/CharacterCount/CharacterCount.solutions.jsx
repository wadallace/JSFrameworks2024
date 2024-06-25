import { useState } from "react";

const CharacterCount = () => {
  const [text, setText] = useState("");
  return (
    <>
      <p>Records the amount of words you type!</p>
      <textarea
        className="form-control"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p className="lead">Character Count: {text.length} </p>
    </>
  );
};

export default CharacterCount;
