<template>
  <div class="relative text-gray-800 focus-within:text-gray-600">
    <span class="absolute inset-y-0 left-0 flex items-center pl-2">
      <button class="p-1 focus:outline-none focus:shadow-outline">
        <svg
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
          class="w-6 h-6"
        ><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
      </button>
    </span>
    <input
      v-model="searchName"
      type="search"
      class="p-2 text-lg text-gray-800 bg-gray-200 rounded-md pl-10 focus:outline-none focus:bg-gray-300 w-full h-12 focus:text-gray-900"
      placeholder="Search movies"
      autocomplete="off"
      @input="onSearch"
    >
  </div>
</template>

<script>
export default {
  data () {
    return {
      debounce: null
    }
  },
  computed: {
    searchName: {
      get () { return this.$store.getters['movies/searchName'] },
      set (val) { this.$store.commit('movies/setSearchName', val) }
    },
    page: {
      get () { return this.$store.getters['movies/page'] },
      set (val) { this.$store.commit('movies/setPage', val) }
    },
    moviesStatus: {
      get () { return this.$store.getters['movies/status'] },
      set (val) { this.$store.commit('movies/setStatus', val) }
    }
  },
  methods: {
    onSearch (event) {
      clearTimeout(this.debounce)
      if (this.searchName !== '') {
        this.debounce = setTimeout(() => {
          if (this.searchName !== '') {
            this.$store.commit('movies/setStatus', 'loading')
            this.$store.dispatch('movies/getMovies', 1)
          }
        }, 1000)
      } else {
        this.moviesStatus = null
      }
    }
  }
}
</script>
