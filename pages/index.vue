<template>
  <div class="wrapper flex-col md:flex-row">
    <!-- Search Menus -->
    <side-bar class="shadow-xl" />
    <top-bar class="flex md:hidden" />
    <!-- Movie -->
    <movie-skeleton v-if="movieStatus === 'loading' && !movie" class="" />
    <transition name="fade">
      <movie v-if="movie && movieStatus === 'loaded'" />
    </transition>
    <!-- Initial Screen -->
    <div v-if="!movie && movieStatus != 'loading'" class="flex flex-col items-center justify-center h-full w-full text-5xl font-bold">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-20 w-20 mb-5 text-indigo-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
      </svg>
      Movie Finder
    </div>
  </div>
</template>

<script>
import Movie from './../components/Movie'
import SideBar from './../components/SideBar'
import MovieSkeleton from './../components/MovieSkeleton'

export default {
  components: {
    Movie,
    SideBar,
    MovieSkeleton
  },
  computed: {
    movieStatus () { return this.$store.getters['movie/status'] },
    movie () { return this.$store.getters['movie/movie'] }
  }
}
</script>

<style scoped>
.wrapper {
  @apply relative;
  @apply bg-gray-100;
  @apply flex;
  @apply h-screen;
  @apply w-full;
}
.fade-enter-active {
  transition: opacity .4s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
