var React = require('react');
var PropTypes = React.PropTypes;
var Forecast = require('../components/Forecast');

var ForecastContainer = React.createClass({
  render: function() {
    return (
      <Forecast />
    );
  }

});

module.exports = ForecastContainer;
