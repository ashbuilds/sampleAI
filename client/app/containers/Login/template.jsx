/* eslint-disable react/no-array-index-key */
import React from 'react';

import { Input } from '../../components';

import style from './style.less';

export default that => (
  <div className={style.login}>
    <Input.ShortText
      name="name"
      placeholder="Name"
      id="userName"
      value={that.state.name}
      onChange={that.handleChange}
    />
    <Input.ShortText
      name="email"
      placeholder="Email"
      id="userEmail"
      value={that.state.email}
      onChange={that.handleChange}
    />
    <Input.Button className={style.submit_button} title="Login" onClick={that.handleSubmit} />
  </div>);
