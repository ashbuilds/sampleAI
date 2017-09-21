import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';

import apollo from '../shared/apollo';
import redux from '../shared/store';

// Main App
import App from './app';

// Initialize Apollo Client
const client = apollo.init();

// Initialize Redux Store
const store = redux.init(client);

// Final render to document#root
ReactDOM.render(
  <ApolloProvider client={client} store={store}>
    <App />
  </ApolloProvider>, document.getElementById('root'));
