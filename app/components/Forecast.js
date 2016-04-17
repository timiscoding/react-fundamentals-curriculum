var React = require('react');
var WeatherContainer = require('../containers/WeatherContainer');
var helper = require('../util/helper');

var styles = {
  container: {
    flex: '1',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  fullWidth: {
    width: '100%'
  },
  loadingText: {
    fontSize: '3em',
    color: 'white'
  }
}

function Forecast(props) {
  if (props.isLoading){
    return (
      <div style={styles.loadingText}>Loading</div>
    );
  }
  return (
    <div style={styles.container}>
      <h1 style={styles.fullWidth} className="text-center">{helper.capitalise(props.city)}</h1>
      {
        props.forecastData.list.map(function(day){
          return <WeatherContainer key={day.dt} city={props.city} day={day} />
        })
      }
    </div>
  )
}

module.exports = Forecast;
