var React = require('react');
var PropTypes = React.PropTypes;
var Forecast = require('../components/Forecast');
var api = require('../util/api');

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
    console.log('getting forecast for', this.props.params.city, this.props);
    api.getForecast(this.props.params.city)
      .then(function(weatherData){
        console.log(weatherData);
        this.setState({
          isLoading: false,
          forecastData: weatherData
        });
      }.bind(this))

  },
  render: function() {
    return (
      <Forecast
        isLoading={this.state.isLoading}
        forecastData={this.state.forecastData}
        city={this.props.routeParams.city} />
    );
  }

});

module.exports = ForecastContainer;
