var React = require('react');

function Forecast(props) {
  if (props.isLoading){
    return (
      <div>Loading</div>
    );
  }
  return (
    <div>Forecast data received for {props.city}
      <pre>{JSON.stringify(props.forecastData, null, 2)}</pre>
    </div>
  )
}

module.exports = Forecast;
