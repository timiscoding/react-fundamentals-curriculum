import React, { PropTypes } from 'react';

let styles = {
  container: {
    backgroundImage: 'url(../images/pattern.svg)',
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white'
  },
  space: {
    marginTop: '10px'
  }
};

class Home extends React.Component {
  render () {
    return (
      <div style={styles.container}>
        <h1>Enter a City and State</h1>
        <div className="col-xs-2" style={styles.space}>
          <input type="input" className="form-control" placeholder="Sydney, Australia" />
        </div>
        <button className="btn btn-lg btn-success" style={styles.space}>Get Weather</button>
      </div>
    )
  }
}

export default Home;
