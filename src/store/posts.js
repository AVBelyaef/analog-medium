import API from '../services/api';
let _id = 100;

export default {
  state: {
    posts: [],
  },
  mutations: {
    setPosts(state, posts) {
      state.posts = posts;
    },
  },
  actions: {
    async fetchPosts({ commit }) {
      try {
        const { data } = await API.get('/posts');
        commit('setPosts', data);
        return data;
      } catch (error) {
        throw error;
      }
    },
    async fetchPost({ dispatch }, id) {
      const { data } = await API.get('/posts', {
        params: {
          id,
        },
      });
      return data[0];
    },
    async createPost({ commit }, { title, description, userId }) {
      const id = _id;
      const claps = 0;
      const createdAt = new Date().toString();
      const updateAt = null;
      try {
        let { data } = await API.post('/posts', {
          id,
          title,
          description,
          userId,
          claps,
          createdAt,
          updateAt,
        });
        _id++;
        commit('setPosts', data);
      } catch (error) {
        throw error;
      }
    },
    async updatePost({ commit }, { title, description, id }) {
      const updateAt = new Date().toString();
      await API.patch(`/posts/${id}`, {
        title,
        description,
        updateAt,
      });
    },
    async fetchPostById({ commit }, id) {
      const { data } = await API.get('/posts', {
        params: {
          id,
        },
      });
      return data;
    },
    async removePost({ dispatch }, id) {
      await API.delete(`/posts/${id}`);
    },
    async likePost({ dispatch }, { id, claps }) {
      await API.patch(`/posts/${id}`, {
        claps,
      });
    },
  },
  getters: {
    posts: (s) => s.posts,
  },
};
