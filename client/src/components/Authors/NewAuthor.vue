<template>
  <div class="authors">
    <h1>Add Author</h1>
    <div class="form">
      <div>
        <input type="text" name="name" placeholder="Name" v-model="name">
      </div>
      <div>
        <input type="text" name="pronouns" placeholder="Pronouns" v-model="pronouns">
      </div>
      <div>
        <input type="text" name="slug" placeholder="Author Slug" v-model="slug">
      </div>
      <div>
        <input type="text" name="bio" placeholder="Staff Bio" v-model="bio">
      </div>
      <div>
        <input type="text" name="photo_url" placeholder="Photo URL" v-model="photo_url">
      </div>
      <div>
        <input type="text" name="title" placeholder="Position" v-model="title">
      </div>
      <div>
        <input type="number" name="rank" placeholder="Rank" v-model="rank">
      </div>
      <div>
        <button class="app_author_btn" @click="addAuthor">Add</button>
      </div>
    </div>
  </div>
</template>

<script>
import AuthorsService from '@/services/AuthorsService'
export default {
  name: 'NewAuthor',
  data () {
    return {
      name: '',
      slug: '',
      bio: '',
      pronouns: '',
      photo_url: '',
      title: '',
      rank: -1
    }
  },
  methods: {
    async addAuthor () {
      await AuthorsService.addAuthor({
        name: this.name,
        slug: this.slug,
        pronouns: this.pronouns,
        bio: this.bio,
        title: this.title,
        photo_url: this.photo_url,
        rank: this.rank
      })
      this.$router.push({ name: 'Authors' })
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
.app_author_btn {
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
