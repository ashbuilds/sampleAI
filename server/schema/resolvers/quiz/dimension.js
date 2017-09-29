import axios from 'axios';

import { baseApi } from '../../../mockAPI';

const dimension = {
  get(id) { return axios.get(`${baseApi}answers/${id}`).then(res => res.data); },
};

export default dimension;

