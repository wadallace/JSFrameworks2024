import PropTypes from "prop-types";

function TemperatureDisplay(props) {
  return (
    <>
      <div className="h4">Current Temperature:</div>
      <div className="h1">
        {/* Using "props.___" for what I get from the parent */}
        {props.temperature} &deg; {props.scale}
      </div>
    </>
  );
}

TemperatureDisplay.propTypes = {
  temperature: PropTypes.number.isRequired,
  scale: PropTypes.string.isRequired,
};

export default TemperatureDisplay;
