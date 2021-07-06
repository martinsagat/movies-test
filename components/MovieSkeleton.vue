<template>
  <div class="grid pulse grid-cols-12 w-full">
    <div class="col-span-8 p-5">
      <div class="h-8 w-60 bg-gray-300 rounded" />
      <div class="short-text" />
      <br>
      <div class="short-text" />
      <br>
      <div class="long-text" />
      <div class="medium-text" />
      <div class="long-text" />
      <div class="medium-text" />
    </div>
    <div class="col-span-4 p-5">
      <div class="w-5/6 h-3/6 bg-gray-300" />
      <!-- <img v-if="movie.Poster !== 'N/A'" :src="movie.Poster" class="w-full"> -->
    </div>
  </div>
</template>

<style scoped>
.short-text {
    @apply h-6;
    @apply w-32;
    @apply bg-gray-300;
    @apply mt-2;
    @apply rounded;
}
.medium-text {
    @apply h-6;
    @apply w-52;
    @apply bg-gray-300;
    @apply mt-2;
    @apply rounded;
}
.long-text {
    @apply h-6;
    @apply w-56;
    @apply bg-gray-300;
    @apply mt-2;
    @apply rounded;
}

</style>
