var React = require('react');
var PropTypes = React.PropTypes;

var styles = {
  container: {
    borderRadius: '10px',
    height: '100%',
    background: 'rgba(0,0,200,0.2)',
    color: 'white',
    fontSize: '2em'
  }
}

function Weather(props){
  return (
    <div style={styles.container} onClick={props.onClickDay}>
      <p className="text-center">{props.day}</p>
      <img style={{width: '200px'}} src={props.image} />
      <p className="text-center">{props.temp}°C</p>
      <p className="text-center" style={{fontSize: '0.5em'}}>{props.desc}</p>
    </div>
  )
}

Weather.propTypes = {
  day: PropTypes.string.isRequired,
  image: PropTypes.string,
  temp: PropTypes.number.isRequired
};

module.exports = Weather;
