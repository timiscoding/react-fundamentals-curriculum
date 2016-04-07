import React, { PropTypes } from 'react';

let styles = {
  container: {
    backgroundImage: 'url(../images/pattern.svg)',
    flex: '1',
  }
};

class Home extends React.Component {
  render () {
    return (
      <div style={styles.container}>Home</div>
    )
  }
}

export default Home;
