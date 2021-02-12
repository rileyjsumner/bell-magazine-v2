<template>
  <div class="posts">
    <h1>Add Post</h1>
      <div class="form">
        <div>
          <input type="text" name="title" placeholder="Title" v-model="title">
        </div>
        <div>
          <input type="text" name="slug" placeholder="Post Slug" v-model="slug">
        </div>
        <div>
          <input type="text" name="author_slug" placeholder="Author Slug" v-model="author_slug">
        </div>
        <div>
          <input type="text" name="category" placeholder="Category" v-model="category_slug">
        </div>
        <div>
          <input type="datetime-local" name="publish_date" placeholder="Publish Date" v-model="publish_date">
        </div>
        <div>
          <input type="text" name="photo_url" placeholder="Photo URL" v-model="photo_url">
        </div>
        <div>
          <input type="text" name="abstract" placeholder="Abstract" v-model="abstract">
        </div>
        <div>
          <textarea rows="15" cols="15" placeholder="Content" v-model="content"></textarea>
        </div>
        <div>
          <button class="app_post_btn" @click="addPost">Add</button>
        </div>
      </div>
  </div>
</template>

<script>
import PostsService from '@/services/PostsService'
export default {
  name: 'NewPost',
  data () {
    return {
      title: '',
      author_slug: '',
      content: '',
      publish_date: Date.now(),
      slug: '',
      photo_url: '',
      category_slug: '',
      abstract: ''
    }
  },
  methods: {
    async addPost () {
      await PostsService.addPost({
        title: this.title,
        author_slug: this.author_slug,
        content: this.content,
        publish_date: this.publish_date,
        slug: this.slug,
        photo_url: this.photo_url,
        category_slug: this.category_slug,
        abstract: this.abstract
      })
      this.$router.push({ name: 'Posts' })
    }
  }
}
</script>
<style lang="scss" scoped>
.form input, .form textarea {
  width: 500px;
  padding: 10px;
  border: 1px solid #e0dede;
  outline: none;
  font-size: 12px;
}
.form div {
  margin: 20px;
}
.app_post_btn {
  background: #4d7ef7;
  color: #fff;
  padding: 10px 80px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
  width: 520px;
  border: none;
  cursor: pointer;
}
</style>
