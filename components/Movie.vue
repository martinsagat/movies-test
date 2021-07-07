<template>
  <div v-if="movie" class="text-xl grid grid-cols-12 gap-1 w-full">
    <div class="p-5 col-span-12 md:col-span-8">
      <h1>{{ movie.Title }}</h1>
      <div class="mb-5 mt-2 flex flex-wrap">
        <div v-for="(genre, index) in genres" :key="index" class="genre-badge">
          {{ genre }}
        </div>
      </div>
      <!-- Plot -->
      <div class="mb-5">
        {{ movie.Plot }}
      </div>
      <!-- Other Info -->
      <p><b>Language:</b> {{ movie.Language }}</p>
      <p><b>Director:</b> {{ movie.Director }}</p>
      <p><b>Actors: XYZ,</b> {{ movie.Actors }}</p>
      <p><b>Duration:</b> {{ movie.Runtime }}</p>
    </div>
    <!-- Image -->
    <div class="p-5 col-span-12 md:col-span-4">
      <img v-if="movie.Poster !== 'N/A'" :src="movie.Poster" class="w-full">
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    movie () {
      return this.$store.getters['movie/movie']
    },
    genres () {
      return this.$store.getters['movie/genres']
    }
  }
}
</script>

<style scoped>
.genre-badge {
  @apply inline-block;
  @apply bg-gray-800;
  @apply text-gray-200;
  @apply mr-1;
  @apply mt-1;
  @apply px-4;
  @apply py-1;
  @apply font-medium;
  @apply rounded-full;
}
</style>
