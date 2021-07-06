<template>
  <div class="flex pulse flex-1 w-full animate-pulse">
    <div class="p-5 flex-col flex-1">
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
    <div class="p-5">
      <div class="w-32 h-52 lg:w-80 lg:h-3/6 bg-gray-300" />
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
