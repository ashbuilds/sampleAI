import ApolloClient, { createNetworkInterface } from 'apollo-client';

const apolloClient = (function () {
// eslint-disable-next-line no-process-env
  const { NODE_ENV } = process.env;
  let client = {};
  return {
    init(initialState = {}) {
      const networkInterface = createNetworkInterface({
        uri: 'http://localhost:3001/graphql',
      });
      client = new ApolloClient({
        ssrMode: false,
        initialState,
        networkInterface,
        connectToDevTools: (NODE_ENV === 'development'),
      });
      return client;
    },
    get() {
      return client;
    },
  };
}());

export default apolloClient;
