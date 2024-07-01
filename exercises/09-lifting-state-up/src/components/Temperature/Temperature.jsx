import { useState } from "react";
import "./Temperature.css";

import TemperatureDisplay from "../TemperatureDisplay/TemperatureDisplay";
import TemperatureScale from "../TemperatureScale/TemperatureScale";

const CURRENT_TEMPERATURE_CELSIUS = 3;

function Temperature() {
  /**
   * Scale (Celsius or Fahrenheit)
   * @type {string} Either one of two things:
   * 1. "C" for Celsius
   * 2. "F" for Fahrenheit
   */
  const [scale, setScale] = useState("F");
  /**
   * Converts CURRENT_TEMPERATURE_CELSIUS to the selected temperature scale (Celsius or Fahrenheit)
   * @type number
   */
  const temperature =
    scale === "F"
      ? CURRENT_TEMPERATURE_CELSIUS * 1.8 + 32
      : CURRENT_TEMPERATURE_CELSIUS;

  return (
    <div className="Temperature flex-inline text-center">
      <div className="card card-body">
        <div className="mb-3">
          {/* START Move this into <TemperatureDisplay />. (You will see errors and have to fix them when you do this). */}
          <div className="h4">Current Temperature:</div>
          <div className="h1">
            {temperature} &deg; {scale}
          </div>
          {/* END */}

          {/* Pass props to <TemperatureDisplay /> */}
          <TemperatureDisplay />
        </div>
        {/* START Move this into <TemperatureScale />. (You will see errors and have to fix them when you do this). */}
        <div
          className="btn-group"
          role="group"
          aria-label="Convert temperature"
        >
          <button
            className="btn btn-outline-primary"
            onClick={() => setScale("F")}
          >
            Fahrenheit
          </button>
          <button
            className="btn btn-outline-primary"
            onClick={() => setScale("C")}
          >
            Celsius
          </button>
        </div>
        {/* END */}

        {/* Pass props to <TemperatureScale /> */}
        <TemperatureScale />
      </div>
    </div>
  );
}

export default Temperature;
