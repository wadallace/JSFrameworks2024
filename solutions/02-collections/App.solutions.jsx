/******
 * Import an object of image paths from the images directory and render them to the screen using the map() method
 *
 *  Developer notes:
 *  Use the img tag to render an image syntax: <img src="path" />
 *
 */

import { technologies } from "./images/technologies";
import { phones } from "./images/phones";
import "./App.css";

function App() {
  return (
    <div className="App">
      {technologies.map((image, index) => (
        <img src={image} key={`technology-${index}`} />
      ))}
      {Object.values(phones).map((image, index) => (
        <img src={image} key={`phone-${index}`} />
      ))}
    </div>
  );
}

export default App;
