import {
  makeExecutableSchema,
  addResolveFunctionsToSchema,
} from 'graphql-tools';

import resolvers from '../resolvers';

import home from './home';

const typeDefs = `
# Entry points into our API
type Query {
  home:Home
}
schema {
  query: Query
}

`;

// converting schema to executable that is used in graphQl endpoint,index.js
const schema = makeExecutableSchema({ typeDefs: [typeDefs].concat(home) });
addResolveFunctionsToSchema(schema, resolvers);
export default schema;
