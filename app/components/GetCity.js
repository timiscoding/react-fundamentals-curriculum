import React from 'react';
import {PropTypes} from 'react';

function Button (props) {
  return (
    <button type="submit"
      className="btn btn-success"
      onClick={props.onSubmitCity}
      style={{margin: '0 10px'}}
    >
      Get Weather
    </button>
  )
}

function InputField (props) {
  return (
    <div className="form-group">
      <input type="text"
        placeholder="Sydney, Ausralia"
        className="form-control"
        onChange={props.onUpdateCity}
        value={props.city} />
    </div>
  )
}

function getStyles (props) {
  return {
    display: 'flex',
    flexDirection: props.direction || 'column',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '300px'
  }
}

function GetCity (props) {
  var formType = props.direction === 'row' ? "navbar-form navbar-right" : "form-horizontal" ;
  return (
    <form
      style={getStyles(props)}
      className={formType}>
      <InputField
        onUpdateCity={props.onUpdateCity}
        city={props.city}
      />
      <Button
        onSubmitCity={props.onSubmitCity}
      />
  </form>
  )
}

GetCity.propTypes = {
  direction: PropTypes.string,
  onUpdateCity: PropTypes.func.isRequired,
  onSubmitCity: PropTypes.func.isRequired,
  city: PropTypes.string
};

module.exports = GetCity;
