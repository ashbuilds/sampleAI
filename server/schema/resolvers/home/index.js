import axios from 'axios';

import { baseApi } from '../../../mockAPI';

// Home resolver, to resolve its custom type if it has any.
const resolvers = {

};

// Basic sample query for test
const query = () => axios.get(`${baseApi}home`)
    .then(result => result.data[0])
    .catch(err => err);

export default { query, resolvers };
