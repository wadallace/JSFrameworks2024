import PropTypes from 'prop-types'

function TemperatureDisplay({ temperature, scale }) {
  return (
    <>
      <div className='h4'>Current Temperature:</div>
      <div className='h1'>
        {temperature} &deg; {scale}
      </div>
    </>
  )
}

TemperatureDisplay.propTypes = {
  temperature: PropTypes.number.isRequired,
  scale: PropTypes.string.isRequired,
}

export default TemperatureDisplay
