import Vue from 'vue'
import Router from 'vue-router'
import Posts from '../components/Posts/Posts'
import NewPost from '../components/Posts/NewPost'
import EditPost from '../components/Posts/EditPost'
import Authors from '../components/Authors/Authors'
import NewAuthor from '../components/Authors/NewAuthor'
import EditAuthor from '../components/Authors/EditAuthor'
import Categories from '../components/Categories/Categories'
import NewCategory from '../components/Categories/NewCategory'
import EditCategory from '../components/Categories/EditCategory'

import Story from '../components/Story'
import Author from '../components/Author'

import Home from '../views/Home'
import Admin from '../views/Admin'
import Staff from '../views/Staff'
import Category from '../views/Category'
import AboutUs from '../views/AboutUs'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin
    },
    {
      path: '/admin/posts',
      name: 'Posts',
      component: Posts
    },
    {
      path: '/admin/posts/new',
      name: 'NewPost',
      component: NewPost
    },
    {
      path: '/admin/posts/:id',
      name: 'EditPost',
      component: EditPost
    },
    {
      path: '/admin/authors',
      name: 'Authors',
      component: Authors
    },
    {
      path: '/admin/authors/new',
      name: 'NewAuthor',
      component: NewAuthor
    },
    {
      path: '/admin/authors/:id',
      name: 'EditAuthor',
      component: EditAuthor
    },
    {
      path: '/admin/categories',
      name: 'Categories',
      component: Categories
    },
    {
      path: '/admin/categories/new',
      name: 'NewCategory',
      component: NewCategory
    },
    {
      path: '/admin/categories/:id',
      name: 'EditCategory',
      component: EditCategory
    },
    {
      path: '/author/:slug',
      name: 'Author',
      component: Author
    },
    {
      path: '/staff',
      name: 'Staff',
      component: Staff
    },
    {
      path: '/about',
      name: 'About Us',
      component: AboutUs
    },
    {
      path: '/story/:category/:post',
      name: 'Story',
      component: Story
    },
    {
      path: '/:category/',
      name: 'Category',
      component: Category
    }
  ]
})
