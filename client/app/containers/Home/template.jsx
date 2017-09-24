/* eslint-disable react/no-array-index-key */
import React from 'react';

import { Input } from '../../components';

import style from './style.less';

export default (that) => {
  const { data: { home } } = that.props;
  return (
    <div className={style.home}>
      <div className={style.button_wrapper}>
        {home.quote.map((item, i) => {
          if (item.isButton) {
            return (<Input.Button
              key={i}
              title={item.text}
              className={style.button}
              onClick={that.navigateToMain}
            />);
          }
          return <span key={i}>{item.text}</span>;
        })}
      </div>
    </div>);
};
