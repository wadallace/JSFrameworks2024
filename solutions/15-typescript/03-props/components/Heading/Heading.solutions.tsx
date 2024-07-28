import React from "react";

interface HeadingProps {
  children: React.ReactNode;
}

const Heading: React.FC<HeadingProps> = (props) => {
  return <h2>{props.children}</h2>;
}

export default Heading;
