<template>
  <div v-if="movie !== null" :title="movie.Title" class="select-none cursor-pointer bg-indigo-100 rounded-md flex flex-1 items-center px-2 py-1 mb-2 shadow hover:bg-indigo-200" @click="onSelectMovie(movie.imdbID)">
    <div class="flex-col font-sm flex-1 mr-16 truncate">
      {{ movie.Title }}
    </div>
    <div class="flex flex-col text-gray-600 text-xs bg-yellow-30">
      <div class="flex justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      </div>
      <div class="font-bold text-center">
        {{ movie.Year | movieYear }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  filters: {
    movieYear (year) {
      if (year.includes('–')) {
        const firstYear = year.split('–')
        return firstYear[0]
      } else {
        return year
      }
    }
  },
  props: {
    movie: {
      type: Object,
      default: null
    }
  },
  methods: {
    onSelectMovie (imdbID) {
      this.$store.commit('movies/closeMenu')
      this.$store.dispatch('movie/fetchMovie', imdbID)
    }
  }
}
</script>
