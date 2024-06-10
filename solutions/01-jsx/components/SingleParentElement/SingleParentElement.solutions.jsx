import React from "react";

/**
 * Fix the errors inside of this React component.
 */
const SingleParentElement = () => {
  // I'm wrapping my content in between React fragments (<></>) below
  return (
    <>
      <p>React is the most popular Framework of 2022.</p>
      <p>React keeps the doctor away!</p>
    </>
  );
  /**
   * Or you could wrap this is an HTML element like a <div></div>
   * @example <div>
   *   <p>React is the most popular Framework of 2022.</p>,
   *   <p>React keeps the doctor away!</p>,
   * </div>
   *
   * Or you could also turn this into an array:
   * @example return [
   *   <p>React is the most popular Framework of 2022.</p>,
   *   <p>React keeps the doctor away!</p>
   * ]
   */
};

export default SingleParentElement;
