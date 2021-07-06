<template>
  <div v-if="movie" class="card bg-white p-5 h-full grid grid-cols-12 rounded-xl">
    <div class="col-span-8 p-5">
      <h1>{{ movie.Title }}</h1>
      <div>
        {{ movie.Genre }}
      </div>
      <br>
      <p>{{ movie.Plot }}</p>
      <br>
      <p><b>Language:</b> {{ movie.Language }}</p>
      <p><b>Director:</b> {{ movie.Director }}</p>
      <p><b>Actors: XYZ,</b> {{ movie.Actors }}</p>
      <p><b>Duration:</b> {{ movie.Runtime }}</p>
    </div>
    <div class="col-span-4 p-5">
      <img v-if="movie.Poster !== 'N/A'" :src="movie.Poster" class="w-full">
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
