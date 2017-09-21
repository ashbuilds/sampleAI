import React from 'react';

import { Input } from '../../components';

import style from './style.less';

export default data => (
  <div className={style.home}>
    {data.title}
    <Input.Button title="Lets roll..." />
  </div>
);
