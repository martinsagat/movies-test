<template>
  <div class="wrapper flex-col md:flex-row">
    <side-bar class="shadow-xl" />
    <top-bar class="flex md:hidden" />
    <movie v-if="movie" />
    <!-- <div v-else>Find Movie</div> -->
  </div>
</template>

<script>
import Movie from './../components/Movie'
import SideBar from './../components/SideBar'

export default {
  components: { Movie, SideBar },
  computed: {
    movieStatus () { return this.$store.getters['movie/movieStatus'] },
    movie () { return this.$store.getters['movie/movie'] }
  }
}
</script>

<style scoped>
/* .content {
  @apply p-5;
  @apply h-screen;
  @apply flex-1;
  @apply bg-gray-200;
} */
.wrapper {
  @apply bg-gray-100;
  @apply flex;
  @apply h-screen;
  @apply w-full;
}
</style>
