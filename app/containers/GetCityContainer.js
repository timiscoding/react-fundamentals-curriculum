var React = require('react');
var PropTypes = React.PropTypes;
var GetCity = require('../components/GetCity');
var api = require('../util/api');

var GetCityContainer = React.createClass({
  contextTypes: {
    router: PropTypes.object.isRequired
  },
  getInitialState: function() {
    return {
      city: ''
    };
  },
  handleUpdateCity: function(event){
    console.log('Handling update city', event.target.value);
    this.setState({
      city: event.target.value
    })
  },
  handleSubmitCity: function(event){
    event.preventDefault();
    console.log('Handling submit city', this.state.city);
    api.getForecast(this.state.city);
    this.context.router.push('/forecast/' + this.state.city);
  },
  render: function() {
    return (
      <GetCity
        direction={this.props.direction}
        onUpdateCity={this.handleUpdateCity}
        onSubmitCity={this.handleSubmitCity}
        city={this.state.city}
      />
    );
  }

});

module.exports = GetCityContainer;
