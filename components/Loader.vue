<template>
  <div class="flex bg-gray-100 justify-center rounded p-2 mx-2">
    <div class="loading-dots-wrapper">
      <div class="loading-dots dark:bg-gray-100" :class="color" />
      <div class="loading-dots dark:bg-gray-100" :class="color" />
      <div class="loading-dots dark:bg-gray-100" :class="color" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    variant: {
      type: String,
      default: ''
    }
  },
  computed: {
    color () {
      switch (this.variant) {
        case 'light':
          return 'bg-white'
        default:
          return 'bg-black'
      }
    }
  }
}
</script>

<style scoped>
.loading-dots {
  height: 10px;
  width: 10px;
  border-radius: 50%;
  display: inline-block;
  animation: scaling 1.5s ease-in-out infinite;
}
@keyframes scaling {
  0%, 100%{
    transform:scale(0.1);
    /* background-color: red; */
  }
  50%{
    transform:scale(1);
    /* background-color: blue; */
  }
}

.loading-dots:nth-child(0){
  animation-delay: 0s;
}
.loading-dots:nth-child(1){
  animation-delay: 0.1s;
}
.loading-dots:nth-child(2){
  animation-delay: 0.2s;
}
.loading-dots:nth-child(3){
  animation-delay: 0.3s;
}
</style>
