import axios from 'axios';

import { baseApi } from '../../../mockAPI';

const user = {
  find(email) {
    return axios.get(`${baseApi}users`).then((res) => {
      const data = res.data.find(userInfo => userInfo.email === email);
      return { status: !!data };
    });
  },
};


const resolvers = {
  Mutation: {
    setUser(obj, { name, email }) {
      return user.find(email).then((data) => {
        if (!data.status) {
          return axios.post(`${baseApi}users`, {
            name,
            email,
          }).then((res) => {
            if (res.data) return { status: true };
            return { status: false };
          });
        }
        return { status: false };
      });
    },
    getUser(obj, { email }) {
      return axios.get(`${baseApi}users`).then((res) => {
        const data = res.data.find(userInfo => userInfo.email === email);
        return { status: !!data };
      });
    },
  },
};

export default { resolvers };
