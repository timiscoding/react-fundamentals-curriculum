var React = require('react');
var PropTypes = React.PropTypes;
var Forecast = require('../components/Forecast');
var api = require('../util/helper');

var ForecastContainer = React.createClass({
  getInitialState: function(){
    return {
      isLoading: true
    }
  },
  contextTypes: {
    router: PropTypes.object.isRequired
  },
  componentDidMount() {
    api.getForecast(this.props.params.city)
      .then(function(weatherData){
        console.log('forecast for',this.props.params.city, weatherData);
        this.setState({
          isLoading: false,
          forecastData: weatherData
        });
      }.bind(this))

  },
  handleClickDay: function(){
    console.log('Day clicked');
  },
  render: function() {
    return (
      <Forecast
        isLoading={this.state.isLoading}
        forecastData={this.state.forecastData}
        city={this.props.routeParams.city}
        onClickDay={this.handleClickDay} />
    );
  }

});

module.exports = ForecastContainer;
