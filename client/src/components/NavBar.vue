<template>
  <div class="nav-wrapper">
    <div class="logo">
      <img src="../assets/bell_logo.svg" alt="Bell Logo"/>
    </div>
    <nav class="nav-bar" :key="path">
      <ul v-if="isAdmin">
        <li><router-link v-bind:to="{ name: 'Home' }">Home</router-link></li>
        <li><router-link v-bind:to="{ name: 'Admin' }">Admin Home</router-link></li>
        <li><router-link v-bind:to="{ name: 'Posts' }">Posts</router-link></li>
        <li><router-link v-bind:to="{ name: 'Authors' }">Authors</router-link></li>
        <li><router-link v-bind:to="{ name: 'Categories' }">Categories</router-link></li>
      </ul>
      <ul v-else>
        <li><router-link v-bind:to="{ name: 'Home' }">Home</router-link></li>
        <li><router-link v-bind:to="{ name: 'Admin' }">Admin</router-link></li>
        <li v-for="category in categories" :key="category.slug"><router-link v-if="category.slug" :to="{ name: 'Category', params: { category: category.slug }}">{{ category.name }}</router-link></li>
        <li><router-link v-bind:to="{ name: 'Staff' }">Staff</router-link></li>
        <li><router-link v-bind:to="{ name: 'About Us'}">About Us</router-link></li>
      </ul>
    </nav>
  </div>

</template>

<script>
import CategoriesService from '../services/CategoriesService'

export default {
  name: 'NavBar',
  data () {
    return {
      isAdmin: this.$route.fullPath.indexOf('admin') > -1,
      categories: null
    }
  },
  mounted () {
    this.isAdmin = this.$route.fullPath.indexOf('admin') > -1
    this.getCategories()
  },
  watch: {
    $route: function (newPath) {
      this.isAdmin = this.$route.fullPath.indexOf('admin') > -1
    }
  },
  methods: {
    async getCategories () {
      const response = await CategoriesService.fetchCategories()
      this.categories = response.data.categories
    }
  }
}
</script>

<style scoped>
  .nav-wrapper {
    display: flex;
    flex-wrap: nowrap;
    justify-content: flex-start;
    background-color: #ffe600;
  }
  .logo {
    width: 150px;
  }
  .logo img {
    width: 75px;
    height: auto;
  }
  .nav-bar ul {
    display: flex;
    flex-wrap: nowrap;
    justify-content: flex-start;
    padding: 0;
    margin: 0;
  }
  .nav-bar ul li {
    list-style-type: none;
    width: auto;
    padding: 1rem;
    margin: 0.5rem;
  }
  .nav-bar ul li a {
    color: #04070D;
    transition: color .3s ease-in-out;
  }
  .nav-bar ul li a:hover {
    color: #6891B5;
  }
  .nav-bar ul li a:visited,
  .nav-bar ul li a:link {
    text-decoration: none;
  }
</style>
