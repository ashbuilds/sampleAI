import React from 'react';
import { Link } from 'react-router-dom';

import style from './style.less';

// Dumb Component
const NotFound = () => (
  <div className={style.not_found}>
    <span>404, its not here...</span><br />
    <Link to={'/'}>I found this for you.</Link>
    <span role="img" aria-label="figure_cross">🤞</span>
  </div>
);

export default NotFound;
