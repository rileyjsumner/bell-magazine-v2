<template>
  <div class="wrapper category-wrapper">
    <div v-if="posts">
      <h2>{{ this.slug }}</h2>
      <PostGrid :posts="this.posts"/>
    </div>
    <div v-else>
      <p>Poop</p>
    </div>
  </div>
</template>

<script>
import CategoriesService from '../services/CategoriesService'
import PostGrid from '../components/PostGrid'

export default {
  name: 'Category',
  components: { PostGrid },
  data () {
    return {
      posts: null,
      slug: null
    }
  },
  mounted () {
    this.slug = this.$route.params.category
    this.getPostsInCategory(this.slug)
  },
  methods: {
    async getPostsInCategory (slug) {
      const response = await CategoriesService.getPostsInCategory(slug)
      this.posts = response.data
      console.log(this.posts)
    }
  }
}
</script>

<style scoped>

</style>
