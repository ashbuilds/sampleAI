import home from './home';
import quiz from './quiz';
import users from './users';

const Queries = {
  Query: {
    home: home.query,
  },
  Mutation: Object.assign({}, ...[quiz.mutations, users.mutations]),
};

// Combining all resolver/query as we are working on modules
export default Object.assign({}, ...[Queries, home.resolvers, quiz.resolvers, users.resolvers]);
