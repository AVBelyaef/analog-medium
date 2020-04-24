<template>
  <div class="navbar">
    <b-navbar>
      <template slot="brand">
        <b-navbar-item tag="router-link" :to="{ path: '/posts' }">
          <img
            src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
            alt="Lightweight UI components for Vue.js based on Bulma"
          />
        </b-navbar-item>
      </template>

      <template slot="end">
        <b-navbar-item tag="div">
          <div class="buttons">
            <router-link
              to="/posts/new"
              class="button is-primary"
              v-if="isWriter"
              >Добавить пост</router-link
            >
            <router-link to="/login" class="button is-success" v-if="!user"
              >Войти</router-link
            >
            <a class="button is-danger" @click.prevent="logout" v-if="user"
              >Выход</a
            >
          </div>
        </b-navbar-item>
      </template>
    </b-navbar>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  methods: {
    async logout() {
      try {
        await this.$store.dispatch('logout');
        this.$router.push('/login');
      } catch (error) {
        throw error;
      }
    },
  },
  computed: {
    ...mapGetters(['user', 'isWriter']),
  },
};
</script>
