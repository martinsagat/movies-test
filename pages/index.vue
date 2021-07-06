<template>
  <div class="wrapper">
    <div class="menu">
      menu
    </div>
    <div class="content">
      Content
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.wrapper {
  @apply flex;
  @apply h-screen;
  @apply w-full;
  @apply bg-red-300;
}
.menu {
  @apply h-screen;
  @apply w-64;
  @apply bg-blue-300;
}
.content {
  @apply h-screen;
  @apply flex-1;
  @apply bg-green-300;
}
</style>
