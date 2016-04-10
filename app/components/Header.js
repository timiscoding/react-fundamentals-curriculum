import React, { PropTypes } from 'react'

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
  },
  gap: {
    marginRight: '10px'
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
          <form className="navbar-form navbar-right" role="search">
            <div className="form-group" style={styles.gap}>
              <input type="text" className="form-control" placeholder="Sydney, Australia" />
            </div>
            <button type="submit" className="btn btn-success">Get Weather</button>
          </form>
        </div>
      </nav>
    )
  }
}

export default Header;
