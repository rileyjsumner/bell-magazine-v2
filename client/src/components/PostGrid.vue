<template>
  <div v-if="posts" class="post-grid">
    <div class="post-row post-feature-row row-forward">
      <div class="post-featured">
        <Post type="featured" :post="posts[0]"/>
      </div>
      <div class="post-short">
        <Post type="short" :post="posts[1]"/>
        <Post type="short" :post="posts[2]"/>
      </div>
    </div>
    <div class="post-row post-regular-row">
      <Post type="basic" :post="posts[3]"/>
      <Post type="basic" :post="posts[4]"/>
      <Post type="basic" :post="posts[5]"/>
    </div>
    <div class="post-row post-feature-row row-reverse">
      <div class="post-featured">
        <Post type="featured" :post="posts[6]"/>
      </div>
      <div class="post-short">
        <Post type="short" :post="posts[7]"/>
        <Post type="short" :post="posts[8]"/>
      </div>
    </div>
    <div class="post-row post-regular-row">
      <Post type="basic" :post="posts[9]"/>
      <Post type="basic" :post="posts[10]"/>
      <Post type="basic" :post="posts[11]"/>
    </div>
  </div>
</template>

<script>
import Post from './GridItem/Post'

export default {
  name: 'PostGrid',
  props: ['posts'],
  components: { Post }
}
</script>

<style scoped>
  .post-row {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;
  }
  .post-row:nth-child(even) {
    border-bottom: 3px solid #6891B5;
  }
  .post-featured {
    width: 55%;
  }
  .post-short {
    width: 40%;
  }
  .row-reverse {
    flex-flow: row-reverse;
  }
  .row-reverse .featured {
    text-align: right;
  }
  .post-regular-row {
    align-items: flex-start;
  }
</style>
