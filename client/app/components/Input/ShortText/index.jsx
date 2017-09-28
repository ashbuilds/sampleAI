import React from 'react';
import PropTypes from 'prop-types';

import style from './style.less';

const ShortText = props => (
  <label className={`${style.short_text} ${props.className}`} htmlFor={props.id}>
    {props.title && <span className={style.title}>{props.title}</span> }
    <input
      {...props}
      id={props.id}
      name={props.name}
      value={props.value}
      placeholder={props.placeholder}
      onChange={event => props.onChange(event)}
    />
  </label>
);

ShortText.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  title: PropTypes.string,
  value: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};

ShortText.defaultProps = {
  id: '',
  name: '',
  title: '',
  value: '',
  className: '',
  placeholder: '',
  onChange(event) {
// eslint-disable-next-line no-console
    console.log('event in ShortText', event);
  },
};

export default ShortText;
