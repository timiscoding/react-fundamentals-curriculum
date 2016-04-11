var React = require('react');
var PropTypes = React.PropTypes;
var GetCity = require('../components/GetCity');

var GetCityContainer = React.createClass({
  handleUpdateCity: function(){
    console.log('Handling update city');
  },
  handleSubmitCity: function(){
    console.log('Handling submit city');
  },
  render: function() {
    return (
      <GetCity
        direction={this.props.direction}
        onUpdateCity={this.handleUpdateCity}
        onSubmitCity={this.handleSubmitCity}
      />
    );
  }

});

module.exports = GetCityContainer;
