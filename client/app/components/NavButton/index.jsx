import React from 'react';
import { withRouter } from 'react-router-dom';
// this also works with react-router-native

const Button = props => withRouter(({ history }) => (
  <button
    type="button"
    onClick={() => { history.push(props.location); }}
  >
     props.
    </button>
));

export default Button;
