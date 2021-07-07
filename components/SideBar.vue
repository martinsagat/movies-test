<template>
  <div class="menu hidden md:flex w-96">
    <!-- Search Input -->
    <search-input class="mb-6 p-3" />
    <!-- Display Results -->
    <div class="flex-1 w-full overflow-auto">
      <loader v-if="moviesStatus === 'loading'" />
      <div v-else class="w-full p-3">
        <movie-item v-for="(movie,index) in movies" :key="index" :movie="movie" class="block" />
      </div>
      <error v-if="moviesStatus === 'error'" class="p-2" />
    </div>
    <!-- Panel Footer -->
    <div class="menu-footer flex h-14 mt-2 bg-indigo-700 text-gray-200 rounded">
      <div class="inline-block w-1/6 flex justify-center items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-10 w-10 bg-indigo-400 hover:bg-indigo-500 rounded cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          @click="onPreviousPage"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
      </div>
      <div class="inline-block w-4/6 text-center">
        <b>Page {{ page }} / {{ pagesTotal }}</b>
        <br>
        {{ totalResults }} Results
      </div>
      <div class="inline-block w-1/6 flex justify-center items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-10 w-10 bg-indigo-400 hover:bg-indigo-500 rounded cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          @click="onNextPage"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import MovieItem from './../components/MovieItem.vue'
import SearchInput from './../components/SearchInput.vue'
import Loader from './../components/Loader.vue'
import Error from './../components/Error.vue'

export default {
  components: { SearchInput, MovieItem, Loader, Error },
  computed: {
    movies () { return this.$store.getters['movies/movies'] },
    totalResults () { return this.$store.getters['movies/totalResults'] },
    pagesTotal () { return this.$store.getters['movies/pagesTotal'] },
    moviesStatus () { return this.$store.getters['movies/status'] },
    error () { return this.$store.getters['movies/error'] },
    page: {
      get () { return this.$store.getters['movies/page'] },
      set (val) { this.$store.commit('movies/setPage', val) }
    }
  },
  methods: {
    onPreviousPage () {
      if (this.page > 1) {
        this.page -= 1
        this.$store.dispatch('movies/getMovies', this.page)
      }
    },
    onNextPage () {
      if (this.page < this.pagesTotal) {
        this.page += 1
        this.$store.dispatch('movies/getMovies', this.page)
      }
    }
  }
}
</script>

<style scoped>
.menu {
  @apply bg-indigo-800;
  @apply flex-col;
  @apply h-screen;
  @apply p-2;
}
</style>
