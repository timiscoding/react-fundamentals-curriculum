import React, { PropTypes } from 'react';
import GetCityContainer from '../containers/GetCityContainer';

let styles = {
  container: {
    margin: 0,
    padding: 0,
    backgroundColor: 'rgb(254,107,58)',
    border: 0,
    borderRadius: 0
  },
  whiteText: {
    color: 'white'
  }
};

class Header extends React.Component {
  render () {
    return (
      <nav className="navbar navbar-default" style={styles.container}>
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#" style={styles.whiteText}>Hot or Not</a>
          </div>
          <GetCityContainer direction="row" />
        </div>
      </nav>
    )
  }
}

export default Header;
