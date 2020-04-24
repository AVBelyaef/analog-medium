import API from '../services/api';

export default {
  actions: {
    async login({ commit }, { email, password }) {
      const { data } = await API.get('/users', {
        params: {
          email,
          password,
        },
      });
      if (!data.length) {
        throw new Error('Пользователь не найден!');
      }
      document.cookie = `user=${data[0].email}`;
      commit('setUser', data[0]);
    },
    logout({ commit }) {
      commit('setUser', null);
      document.cookie = "user=''";
    },
  },
};
