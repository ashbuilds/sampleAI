import React from 'react';
import PropTypes from 'prop-types';

import style from './style.less';

const Button = props => (
  <button
    ref={props.setRef}
    disabled={props.disable}
    className={`${style.button} ${props.className}`}
    onClick={event => props.onClick(event)}
  >
    { props.icon && <span className={`${props.icon} ${!props.title ? style.circle : ''}`} /> }
    <span>{props.title}</span>
  </button>
);

Button.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  setRef: PropTypes.func,
  disable: PropTypes.bool,
};

Button.defaultProps = {
  icon: '',
  className: '',
  setRef() {

  },
  disable: false,
  onClick(event) {
    // eslint-disable-next-line no-console
    console.log('event in Button:', event);
  },
};

export default Button;
