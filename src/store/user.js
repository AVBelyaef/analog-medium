export default {
  state: {
    user: null,
  },

  mutations: {
    setUser: (state, user) => {
      state.user = user;
    },
  },
  getters: {
    user: (s) => s.user,
    isWriter: (s) => s.user && s.user.role === 'writer',
    isReader: (s) => s.user && s.user.role === 'reader',
  },
};
