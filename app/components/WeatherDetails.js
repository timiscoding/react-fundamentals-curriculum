import React, { PropTypes } from 'react'

class WeatherDetails extends React.Component {
  render () {
    console.log('weather details', this.props.location.state.weather);
    return (
      <div>
        Weather details
      </div>
    )
  }
}

export default WeatherDetails;
