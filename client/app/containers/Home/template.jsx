/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Link } from 'react-router-dom';

import style from './style.less';

export default (that) => {
  const { data: { home } } = that.props;
  return (
    <div className={style.home}>
      <div className={style.button_wrapper}>
        {home.quote.map((item, i) => {
          if (item.isButton) {
            return (<span key={i} className={style.button}>
              <Link to={'/login'} >{item.text}</Link>
            </span>);
          }
          return <span key={i}>{item.text}</span>;
        })}
      </div>
    </div>);
};
