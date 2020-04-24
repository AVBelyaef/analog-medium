import Vue from 'vue';
import Vuex from 'vuex';
import auth from './auth';
import posts from './posts';
import user from './user';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    auth,
    posts,
    user,
  },
});
