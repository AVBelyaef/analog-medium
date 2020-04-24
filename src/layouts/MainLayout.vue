<template>
  <div>
    <Navbar />

    <main>
      <router-view />
    </main>
  </div>
</template>
<script>
import Navbar from '../components/app/Navbar';
export default {
  name: 'main-layout',
  components: {
    Navbar,
  },
};
</script>
<style lang="scss">
main {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
