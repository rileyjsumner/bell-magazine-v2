<template>
  <div>
    <p>Find a story</p>
  </div>
</template>

<script>
export default {
  name: 'StoryBase',
  mounted () {
    console.log(this.$route.params)
  }
}
</script>

<style scoped>

</style>
