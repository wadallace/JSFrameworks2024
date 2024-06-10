import React from "react";

/**
 * Fix the errors inside of this React component.
 */
const Cats = () => {
  const catLinkImages = [
    "https://cdn2.thecatapi.com/images/4ub.gif",
    "https://cdn2.thecatapi.com/images/LcXBJ9oWz.jpg",
    "https://25.media.tumblr.com/qgIb8tERiqo49g51UgVLRbuso1_250.jpg",
  ];

  return (
    <>
      <h1>Because everyday is a Caturday.</h1>
      <ul className="list-unstyled">
        {catLinkImages.map((cat) => (
          <li key={cat} className="d-inline">
            <img
              src={cat}
              alt={"pictures of cats"}
              width="200"
              className="img-fluid img-thumbnail"
            />
            {/* Changed the closing ">" to "/>" on the line above */}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Cats;
