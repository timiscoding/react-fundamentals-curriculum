import React, { PropTypes } from 'react';
import GetCityContainer from '../containers/GetCityContainer';

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
        <GetCityContainer />
      </div>
    )
  }
}

export default Home;
