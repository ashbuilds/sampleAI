import {
  makeExecutableSchema,
  addResolveFunctionsToSchema,
} from 'graphql-tools';

import resolvers from '../resolvers';

import home from './home';
import quiz from './quiz';
import users from './users';

const typeDefs = `
# Entry points into our API
type Mutation {
   getDimension(dimensionId: Int!):Dimension
   setUser(name: String!,email: String!):Login
   getUser(email: String!):Login
}
type Query {
  home:Home
}
schema {
  query: Query
  mutation: Mutation
}
`;

// converting schema to executable that is used in graphQl endpoint,index.js
const schema = makeExecutableSchema({ typeDefs: [typeDefs].concat(home, quiz, users) });
addResolveFunctionsToSchema(schema, resolvers);
export default schema;
