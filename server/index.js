import express from 'express';
import cors from 'cors';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import bodyParser from 'body-parser';

import schema from './schema/typedefs';
import config from '../config/url';

// Default port from client
const DEFAULT_PORT = config.port;
const HOST = config.host;

const app = express();

// Assign port to server by adding 1, localhost:3001
app.set('port', DEFAULT_PORT + 1);

// FIXES COR'S giving access to localhost:3000
const whitelist = [
  'http://sampleai.ashishmishra.com',
];
const corsOptions = {
  origin(origin, callback) {
    const originIsWhitelisted = whitelist.indexOf(origin) !== -1;
    callback(null, originIsWhitelisted);
  },
  credentials: true,
};

// GraphQL endpoints
app.use(cors(corsOptions));
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

// Starting server
const serverPort = app.get('port');
app.listen(serverPort, (err) => {
  if (err) {
    // eslint-disable-next-line no-console
    console.error(`Server error${err}`);
  } else {
    // eslint-disable-next-line no-console
    console.info(`==> GraphQL on  ${serverPort}/graphql
        \n==> GraphQL Explorer on  ${serverPort}/graphiql`);
  }
});
