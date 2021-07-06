<template>
  <div class="relative p-2 h-16 bg-indigo-800 w-full">
    <search-input class="w-1/2" />
    <div v-if="movies && movies.length > 0 && !movie" class="absolute left-2 right-10 mt-10 bg-gray-200 p-5 rounded-b-xl">
      <movie-item v-for="(m, index) in movies" :key="index" :movie="m" />
    </div>
  </div>
</template>

<script>

import SearchInput from './../components/SearchInput.vue'
import MovieItem from './../components/MovieItem.vue'

export default {
  components: { SearchInput, MovieItem },
  computed: {
    movies () { return this.$store.getters['movies/movies'] },
    movie () { return this.$store.getters['movie/movie'] }
  }
}
</script>
