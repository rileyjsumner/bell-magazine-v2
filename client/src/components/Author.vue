<template>
  <div class="wrapper author-wrapper">
    <div v-if="author" :key="updateAuthor">
      <h2>{{ author.name }}</h2>
    </div>
    <div v-if="posts">
      <PostGrid :posts="posts" />
    </div>
  </div>
</template>

<script>
import AuthorsService from '../services/AuthorsService'
import PostGrid from './PostGrid'

export default {
  name: 'Author',
  components: { PostGrid },
  data () {
    return {
      slug: this.$route.params.slug,
      author: null,
      posts: null,
      updateAuthor: 0
    }
  },
  mounted () {
    this.getCurrentAuthor(this.slug)
    this.getPostsByAuthor(this.slug)
  },
  methods: {
    async getCurrentAuthor (slug) {
      const response = await AuthorsService.getAuthor(slug)
      this.author = response.data[0]
    },
    async getPostsByAuthor (slug) {
      const response = await AuthorsService.getPostsByAuthor(slug)
      console.log(response)
      this.posts = response.data
    }
  }
}
</script>

<style scoped>

</style>
