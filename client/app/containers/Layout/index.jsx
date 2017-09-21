/* eslint-disable react/prop-types */
import React, { Component } from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class Layout extends Component {
  render() {
    return (
      <div className="App">
        {this.props.children}
      </div>
    );
  }
}

export default Layout;
