import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import Header from '../components/header';

let styles = {
  container: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  content: {
    backgroundImage: 'url(../images/pattern.svg)',
    flex: '1',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
}

class Main extends React.Component {
  render () {
    return (
      <div style={styles.container}>
        <Header />
        <div style={styles.content}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Main;
