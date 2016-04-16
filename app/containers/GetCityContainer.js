var React = require('react');
var PropTypes = React.PropTypes;
var GetCity = require('../components/GetCity');

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
    this.setState({
      city: event.target.value
    })
  },
  handleSubmitCity: function(event){
    event.preventDefault();
    console.log('Handling submit city', this.state.city, this.state.isLoading);
    this.context.router.push({
      pathname: '/forecast/' + this.state.city
    });
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
