import Home from './home';

const Queries = {
  Query: {
    home: Home.query,
  },
};

// Combining all resolver/query as we are working on modules
export default Object.assign({}, ...[Queries, Home.resolvers]);
