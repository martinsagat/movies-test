<template>
  <div>
    {{ error }}
  </div>
</template>

<script>
export default {
  computed: {
    error () { return this.$store.getters['movies/error'] }
  }
}
</script>
