var React = require('react');
var Weather = require('./Weather')

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
  var DAYS_OF_WEEK = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  var _weather_icon_base_url = 'http://openweathermap.org/img/w/';
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
          return (
            <Weather
              day={DAYS_OF_WEEK[(new Date(day.dt * 1000)).getDay()]}
              temp={day.temp.day}
              image={[_weather_icon_base_url, day.weather[0].icon, '.png'].join('')}
              desc={day.weather[0].description}/>
          )

        })
      }
    </div>
  )
}

module.exports = Forecast;
