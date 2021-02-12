<template>
  <div class="categories">
    <h1>Edit Category</h1>
    <div class="form">
      <div>
        <input type="text" name="name" placeholder="Name" v-model="name">
      </div>
      <div>
        <input type="text" name="slug" placeholder="Category Slug" v-model="slug">
      </div>
      <div>
        <input type="text" name="description" placeholder="Description" v-model="description">
      </div>
      <div>
        <button class="app_category_btn" @click="updateCategory">Update</button>
      </div>
    </div>
  </div>
</template>

<script>
import CategoriesService from '@/services/CategoriesService'
export default {
  name: 'EditCategory',
  data () {
    return {
      name: '',
      slug: '',
      description: ''
    }
  },
  mounted () {
    this.getCategory()
  },
  methods: {
    async getCategory () {
      const response = await CategoriesService.getCategory({
        id: this.$route.params.id
      })
      this.name = response.data.name
      this.slug = response.data.slug
      this.description = response.data.description
    },
    async updateCategory () {
      await CategoriesService.updateCategory({
        id: this.$route.params.id,
        name: this.name,
        slug: this.slug,
        description: this.description
      })
      this.$router.push({ name: 'Categories' })
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
.app_category_btn {
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
