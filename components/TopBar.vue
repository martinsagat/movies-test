<template>
  <div class="relative p-2 h-16 bg-indigo-800 w-full">
    <search-input class="w-1/2" />
    <div v-if="menuOpened" class="menu">
      <div v-if="movies.length > 0 && moviesStatus === 'loaded'">
        <movie-item v-for="(m, index) in movies" :key="index" :movie="m" />
      </div>
      <loader v-if="moviesStatus === 'loading'" />
      <error v-if="moviesStatus === 'error'" />
    </div>
  </div>
</template>

<script>

import SearchInput from './../components/SearchInput.vue'
import MovieItem from './../components/MovieItem.vue'
import Loader from './../components/Loader.vue'
import Error from './../components/Error.vue'

export default {
  components: { SearchInput, MovieItem, Loader, Error },
  computed: {
    menuOpened () { return this.$store.getters['movies/menuOpened'] },
    movies () { return this.$store.getters['movies/movies'] },
    movie () { return this.$store.getters['movie/movie'] },
    moviesStatus () { return this.$store.getters['movies/status'] },
    movieStatus () { return this.$store.getters['movie/status'] }
  }
}
</script>

<style scoped>
menu {
  @apply absolute;
  @apply left-2;
  @apply right-10;
  @apply mt-10;
  @apply bg-gray-200;
  @apply p-5;
  @apply rounded-b-xl;
  @apply rounded-tr-xl;
  @apply bg-opacity-90;
}
</style>
