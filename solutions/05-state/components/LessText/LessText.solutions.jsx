import { useState } from "react";

const LessText = ({ text = "", maxLength }) => {
  const [hidden, setHidden] = useState(false);
  return (
    <div>
      <p>{!hidden ? text.substring(0, maxLength).trim() : text}</p>
      <div>
        <button
          type="button"
          className="btn btn-dark mr-2"
          onClick={() => setHidden(true)}
        >
          Read More
        </button>
        <button
          type="button"
          className="btn btn-dark"
          onClick={() => setHidden(false)}
        >
          Read Less
        </button>
      </div>
    </div>
  );
};

export default LessText;
