import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import Header from '../components/header';

let styles = {
  container: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  }
}

class Main extends React.Component {
  render () {
    return (
      <div style={styles.container}>
        <Header />
        {this.props.children}
      </div>
    )
  }
}

export default Main;
