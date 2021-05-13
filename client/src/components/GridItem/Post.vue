<template>
  <div v-if="post" :class="`post post_wrapper ${type}`">
    <div :style="cssVars" class="post-image"></div>
    <div class="post-details">
      <h2><router-link v-bind:to="{ name: 'Story', params: { category: post.category_slug, post: post.slug }}">{{ post.title }}</router-link></h2>
      <strong v-if="author">By {{ author.name }}</strong>
      <p>{{ post.abstract }}</p>
    </div>
  </div>
</template>

<script>
import AuthorService from '../../Services/AuthorsService'
export default {
  name: 'Post',
  props: ['post', 'index', 'type'],
  computed: {
    cssVars () {
      return {
        'background-image': `url(${this.post.photo_url})`
      }
    }
  },
  data () {
    return {
      author: null
    }
  },
  mounted () {
    if (this.post) {
      this.getPostAuthor(this.post.author_slug)
    }
  },
  methods: {
    async getPostAuthor (slug) {
      const response = await AuthorService.getAuthor(slug)
      this.author = response.data[0]
    }
  }
}
</script>

<style scoped>
  .post {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    width: 30%;
  }
  .post-image {
    width: 100%;
    height: 200px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  h2 {
    width: 100%;
  }
  .featured {
    width: 100%;
    text-align: left;
  }
  .featured .post-image {
    height: 400px;
  }
  .post.short {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    width: 100%;
    text-align: left;
    padding: 1rem 0;
  }
  .post.short:last-child {
    flex-direction: row-reverse;
    text-align: right;
  }
  .post-details {
    width: 100%;
  }
  .post.short div {
    width: 45%;
  }
</style>
