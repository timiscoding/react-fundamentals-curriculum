var React = require('react');
var WeatherContainer = require('../containers/WeatherContainer')

var styles = {
  container: {
    backgroundImage: 'url(../images/pattern.svg)',
    flex: '1',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  fullWidth: {
    width: '100%'
  }
}

function Forecast(props) {
  var city = props.city.substr(0,1).toUpperCase() + props.city.substr(1).toLowerCase();

  if (props.isLoading){
    return (
      <div>Loading</div>
    );
  }
  return (
    <div style={styles.container}>
      <h1 style={styles.fullWidth} className="text-center">{city}</h1>
      {
        props.forecastData.list.map(function(day){
          return <WeatherContainer key={day.dt} city={props.city} day={day} />
        })
      }
    </div>
  )
}

module.exports = Forecast;
