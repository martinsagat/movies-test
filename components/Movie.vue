<template>
  <div v-if="movie" class="flex flex-1 text-xl">
    <div class="p-5 flex flex-col flex-1">
      <h1>{{ movie.Title }}</h1>
      <div class="mb-5 mt-2 flex">
        <div v-for="(genre, index) in genres" :key="index" class="inline-block bg-gray-800 text-gray-200 mr-1 mt-1 px-4 py-1 font-medium rounded-full">
          {{ genre }}
        </div>
      </div>

      <div class="mb-5">
        {{ movie.Plot }}
      </div>

      <p><b>Language:</b> {{ movie.Language }}</p>
      <p><b>Director:</b> {{ movie.Director }}</p>
      <p><b>Actors: XYZ,</b> {{ movie.Actors }}</p>
      <p><b>Duration:</b> {{ movie.Runtime }}</p>
    </div>
    <div class="p-5">
      <img v-if="movie.Poster !== 'N/A'" :src="movie.Poster" class="w-32 lg:w-full">
      <object v-else data="~static/noimage.svg" width="300" height="600" />
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
h1 {
  @apply text-3xl;
  @apply font-bold;
}
</style>
