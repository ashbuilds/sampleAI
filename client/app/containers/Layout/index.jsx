/* eslint-disable react/prop-types */
import React, { Component } from 'react';

import style from './style.less';

// eslint-disable-next-line react/prefer-stateless-function
class Layout extends Component {
  render() {
    return (
      <div className={style.app}>
        {this.props.children}
      </div>
    );
  }
}

export default Layout;
