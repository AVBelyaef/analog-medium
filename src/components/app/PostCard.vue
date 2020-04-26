<template>
  <b-collapse>
    <article class="card">
      <header class="card-header">
        <router-link :to="`/posts/${post.id}`" class="card-header-title">
          {{ post.title }}
        </router-link>
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
          >Редактировать</router-link
        >
        <a
          class="card-footer-item"
          @click.prevent="$emit('remove-post', post.id)"
          >Удалить</a
        >
      </footer>

      <footer class="card-footer-like" v-if="isReader">
        <b-button
          v-if="isReader"
          type="is-success"
          @click.prevent="$emit('like-post', post.id, post.claps)"
          icon-right="hands-wash"
        >
          {{ post.claps }}
        </b-button>
      </footer>
    </article>
  </b-collapse>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  props: ['post'],
  computed: {
    ...mapGetters(['isWriter', 'isReader']),
  },
};
</script>
<style lang="scss">
.card {
  max-width: 500px;
  margin: 20px 0;
  .card-footer-like {
    padding: 10px;
  } 
}
</style>
