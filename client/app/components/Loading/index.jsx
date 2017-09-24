import React from 'react';

import style from './style.less';

const Loading = () => (<div className={style.preloader}>
  <div className={style.spinner} />
</div>);

export default Loading;
