import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

const reducer = function (apolloReducer) {
  return combineReducers({
    routing: routerReducer,
    apollo: apolloReducer,
  });
};

export default reducer;
