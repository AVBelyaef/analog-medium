<template>
  <b-loading :active.sync="isLoading" v-if="isLoading"></b-loading>
  <div v-else>
    <article class="card">
      <header class="card-header">
        <p class="card-header-title">
          {{ post.title }}
        </p>
      </header>
      <div class="card-content">
        <div class="content">
          {{ post.description }}
          <div class="date">
            <time>{{ post.createdAt | date }}</time>
          </div>
        </div>
      </div>
      <footer class="card-footer" v-if="isWriter">
        <router-link :to="`/posts/${post.id}/edit`" class="card-footer-item"
          >Edit</router-link
        >
        <a class="card-footer-item" @click.prevent="removePost">Delete</a>
      </footer>
      <footer class="card-footer" v-if="isReader">
        <b-button
          type="is-success"
          @click.prevent="likePost"
          icon-right="hands-wash"
        >
          {{ post.claps }}
        </b-button>
      </footer>
    </article>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  data: () => ({
    post: '',
    isLoading: true,
  }),
  async mounted() {
    try {
      const id = this.$route.params.id;
      this.post = await this.$store.dispatch('fetchPost', id);
      this.isLoading = false;
    } catch (error) {
      throw error;
    }
  },
  methods: {
    async removePost() {
      this.isLoading = true;
      const id = this.$route.params.id;
      try {
        await this.$store.dispatch('removePost', id);
        this.isLoading = false;
        this.$router.push('/posts');
      } catch (error) {
        throw error;
      }
    },
    async likePost() {
      try {
        const data = {
          id: this.$route.params.id,
          claps: ++this.post.claps,
        };
        await this.$store.dispatch('likePost', data);
        this.post = await this.$store.dispatch('fetchPost', id);
      } catch (error) {
        throw error;
      }
    },
  },
  computed: {
    ...mapGetters(['isWriter', 'isReader']),
  },
};
</script>
<style lang="scss">
.card {
  max-width: 500px;
  margin: 20px 0;
}
</style>
