import React from 'react';

import style from './style.less';

export default that => (
  <div className={style.quiz}>
    <span><button onClick={that.handleLogout} >Logout</button></span>
  </div>
);
