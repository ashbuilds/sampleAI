import axios from 'axios';

import { baseApi } from '../../../mockAPI';

// Home resolver, to resolve its custom type if it has any.
const resolvers = {
  Mutation: {
    getDimension(obj, { dimensionId }) {
      return axios.get(`${baseApi}answers/${dimensionId}`).then(data => data.data);
    },
  },
};

// // Basic sample query for test
// const query = () => axios.get(`${baseApi}home`)
//     .then(result => result.data[Math.floor((Math.random() * result.data.length))])
//     .catch(err => err);

export default { resolvers };
