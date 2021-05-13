<template>
  <div class="categories">
    <h1>Categories</h1>
    <div v-if="categories.length > 0" class="table-wrap">
      <div>
        <router-link v-bind:to="{ name: 'NewCategory' }" class="">Add Category</router-link>
      </div>
      <table>
        <tr>
          <td>Title</td>
          <td width="550">Description</td>
          <td width="100" align="center">Action</td>
        </tr>
        <tr v-bind:key="category.id" v-for="category in categories">
          <td>{{ category.name }}</td>
          <td>{{ category.description }}</td>
          <td align="center">
            <router-link v-bind:to="{ name: 'EditCategory', params: { id: category._id } }">Edit</router-link> |
            <a href="#" @click="deleteCategory(category._id)">Delete</a>
          </td>
        </tr>
      </table>
    </div>
    <div v-else>
      There are no categories.. Lets add one now!!! <br /><br />
      <router-link v-bind:to="{ name: 'NewCategory' }" class="add_category_link">Add Category</router-link>
    </div>
  </div>
</template>

<script>
import CategoriesService from '@/services/CategoriesService'
export default {
  name: 'Categories',
  data () {
    return {
      categories: []
    }
  },
  mounted () {
    this.getAllCategories()
  },
  methods: {
    async getAllCategories () {
      const response = await CategoriesService.fetchCategories()
      this.categories = response.data.categories
    },
    async deleteCategory (id) {
      await CategoriesService.deleteCategory(id)
      await this.getCategories()
      this.$router.push({ name: 'Categories' })
    }
  }
}
</script>
<style lang="scss" scoped>
.table-wrap {
  width: 60%;
  margin: 0 auto;
  text-align: center;
}
table th, table tr {
  text-align: left;
}
table thead {
  background: #f2f2f2;
}
table tr td {
  padding: 10px;
}
table tr:nth-child(odd) {
  background: #f2f2f2;
}
table tr:nth-child(1) {
  background: #4d7ef7;
  color: #fff;
}
a {
  color: #4d7ef7;
  text-decoration: none;
}
a.add_category_link {
  background: #4d7ef7;
  color: #fff;
  padding: 10px 80px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
}
</style>
