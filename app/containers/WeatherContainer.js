var React = require('react');
var PropTypes = React.PropTypes;
var Weather = require('../components/Weather');
var helper = require('../util/helper');

var WeatherContainer = React.createClass({
  contextTypes: {
    router: PropTypes.object.isRequired
  },
  handleClickDay: function(){
    this.context.router.push({
      pathname: '/detail/' + this.props.city,
      state: {
        weather: this.props
      }
    });
  },
  render: function() {
    return (
      <Weather
        day={helper.DAYS_OF_WEEK[(new Date(this.props.day.dt * 1000)).getDay()]}
        temp={this.props.day.temp.day}
        image={[helper.weather_icon_base_url, this.props.day.weather[0].icon, '.png'].join('')}
        desc={this.props.day.weather[0].description}
        onClickDay={this.handleClickDay} />
    );
  }

});

module.exports = WeatherContainer;
