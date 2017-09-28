const user = {
  get() {
    const rawUser = localStorage.getItem('#user');
    return JSON.parse(rawUser);
  },
  set(name, email) {
    const userData = { name, email };
    localStorage.setItem('#user', JSON.stringify(userData));
  },
  logout() {
    localStorage.removeItem('#user');
  },
};

export default user;
