import React from 'react';

import style from './style.less';

export default that => (
  <div className={style.quiz}>
    <span><button onClick={that.handleLogout} >Logout</button></span>
    <span><button onClick={that.getAnswers} >getDimension</button></span>
    <ul>
      {/*
      Todo map result to element
      */}
      {that.state.nextAnswers.map(item => (<li key={item.id}>{item.answers[0]}</li>))}
    </ul>
  </div>
);
