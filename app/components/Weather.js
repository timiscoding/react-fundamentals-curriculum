var React = require('react');

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
    <div style={styles.container}>
      <p className="text-center">{props.day}</p>
      <img style={{width: '200px'}} src={props.image} />
      <p className="text-center">{props.temp}°C</p>
      <p className="text-center" style={{fontSize: '0.5em'}}>{props.desc}</p>
    </div>
  )
}

module.exports = Weather;
