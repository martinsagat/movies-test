<template>
  <div v-if="movie" class="flex flex-1">
    <div class="p-5 flex flex-col flex-1">
      <h1>{{ movie.Title }}</h1>
      <div class="mb-5">
        {{ movie.Genre }}
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
