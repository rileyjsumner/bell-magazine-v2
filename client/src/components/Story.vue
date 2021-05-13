<template>
  <div class="wrapper story-wrapper" :key="updatePost">
    <div v-if="post">
      <h2>{{ post.title }}</h2>
      <p v-if="author"><a :href="'/author/' + author.slug">By {{ author.name }}</a></p>
      <p>{{ post.content }}</p>
    </div>
    <div v-else>
      <h2>Error: This story doesn't exist</h2>
    </div>
  </div>
</template>

<script>
import PostsService from '../services/PostsService'
import AuthorsService from '../services/AuthorsService'

export default {
  name: 'Story',
  data () {
    return {
      category: this.$route.params.category,
      slug: this.$route.params.post,
      author: null,
      post: null,
      updatePost: 0
    }
  },
  mounted () {
    this.getPost(this.slug)
  },
  methods: {
    async getPost (slug) {
      const response = await PostsService.getPostBySlug(slug)
      this.post = response.data[0]
      this.updatePost += 1
      await this.getAuthorDetails(this.post.author_slug)
    },
    async getAuthorDetails (slug) {
      const response = await AuthorsService.getAuthor(slug)
      this.author = response.data[0]
    }
  },
  watch: {
    $route: function (newRoute) {
      console.log(newRoute)
      this.post = this.getPost(this.slug)
    }
  }
}
</script>

<style scoped>

</style>
