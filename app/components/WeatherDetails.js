import React, { PropTypes } from 'react';
import helper from '../util/helper';

var styles = {
  container: {
    textAlign: 'center',
    background: 'rgba(0,0,200,0.2)',
    color: 'white',
    borderRadius: '10px',
    fontSize: '2em',
    height: '100%'
  },
  imgSize: {
    width: '200px'
  }
};

class WeatherDetails extends React.Component {
  render () {
    console.log('weather details', this.props.location.state.weather);
    var weather = this.props.location.state.weather.day;
    return (
      <div style={styles.container} className="col-xs-4">
        <h1>{helper.capitalise(this.props.params.city)}</h1>
        <p>{new Date(weather.dt * 1000).toString()}</p>
        <img style={styles.imgSize} src={helper.weather_icon_base_url + weather.weather[0].icon + '.png'} />
        <p>Day: {weather.temp.day}</p>
        <p>Max: {weather.temp.max}</p>
        <p>Min: {weather.temp.min}</p>
        <p>{weather.weather[0].description}</p>
        <p>Rain: {weather.rain}</p>
        <p>Humidity: {weather.humidity}</p>
      </div>
    )
  }
}

export default WeatherDetails;


// <p>{this.props.location.state.weather}</p>
