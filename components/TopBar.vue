<template>
  <div class="relative p-2 h-16 bg-indigo-800 w-full">
    <search-input class="w-1/2" />
    <div v-if="menuOpened" class="absolute left-2 right-10 mt-10 bg-gray-200 p-5 rounded-b-xl rounded-tr-xl bg-opacity-90">
      <div v-if="movies.length > 0 && moviesStatus === 'loaded'">
        <movie-item v-for="(m, index) in movies" :key="index" :movie="m" />
      </div>
      <loader v-if="moviesStatus === 'loading'" />
      <search-error v-if="moviesStatus === 'error'" />
    </div>
  </div>
</template>

<script>
import SearchInput from './../components/SearchInput.vue'
import MovieItem from './../components/MovieItem.vue'
import Loader from './../components/Loader.vue'
import SearchError from './../components/SearchError.vue'

export default {
  components: { SearchInput, MovieItem, Loader, SearchError },
  computed: {
    menuOpened () { return this.$store.getters['movies/menuOpened'] },
    movies () { return this.$store.getters['movies/movies'] },
    movie () { return this.$store.getters['movie/movie'] },
    moviesStatus () { return this.$store.getters['movies/status'] },
    movieStatus () { return this.$store.getters['movie/status'] }
  }
}
</script>
