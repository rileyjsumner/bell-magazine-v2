<template>
  <div class="container">
    <PostGrid v-if="posts"
      v-for="n in post_groups"
      :posts="posts.slice(n - 1, n + 11)"
      :key="n"
    />
    <div class="overflow-posts">
      <Post v-if="posts" v-for="n in posts_remaining"
            :key="posts[post_length - posts_remaining + n - 1].category_slug + '/' + posts[post_length - posts_remaining + n - 1].slug"
            :post="posts[post_length - posts_remaining + n - 1]"
            :index="post_length - posts_remaining + n - 1"
            type="basic"
      />
    </div>
  </div>
</template>

<script>
import PostsService from '../services/PostsService'
import Post from '../components/GridItem/Post'
import PostGrid from '../components/PostGrid'

export default {
  name: 'Home',
  components: { Post, PostGrid },
  data () {
    return {
      posts: [],
      post_length: 0,
      post_groups: 0,
      posts_remaining: 0
    }
  },
  mounted () {
    this.getAllPosts()
  },
  methods: {
    async getAllPosts () {
      const response = await PostsService.fetchPosts()
      this.posts = response.data.posts
      this.post_length = this.posts.length
      this.post_groups = Math.floor(this.post_length / 12)
      this.posts_remaining = this.post_length % 12
    }
  }
}
</script>

<style scoped>
  .overflow-posts {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
    padding: 1rem 0;
  }
</style>
