import ApolloClient, { createNetworkInterface } from 'apollo-client';
import url from '../../../host';

const apolloClient = (function () {
// eslint-disable-next-line no-process-env
  const { NODE_ENV } = process.env;
  let client = {};
  return {
    init(initialState = {}) {
      console.log('url.server : ', url.server);
      const networkInterface = createNetworkInterface({
        uri: url.server,
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
