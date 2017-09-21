import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import reducer from '../reducers';

let Compose = compose;
// eslint-disable-next-line no-process-env
if (process.env.NODE_ENV !== 'production') {
  // eslint-disable-next-line global-require
  const { composeWithDevTools } = require('redux-devtools-extension');
  Compose = composeWithDevTools;
}

const manageStore = (function () {
  let store = {};

  return {
    init(apolloClient, initState = {}) {
      const middleWare = [thunk, apolloClient.middleware()];
      store = createStore(reducer(apolloClient.reducer()), initState, Compose(
          applyMiddleware(...middleWare),
      ));
      return store;
    },
    get() {
      return store;
    },
  };
}());

export default manageStore;
