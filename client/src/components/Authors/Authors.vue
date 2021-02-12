<template>
  <div class="authors">
    <h1>Authors</h1>
    <div v-if="authors.length > 0" class="table-wrap">
      <div>
        <router-link v-bind:to="{ name: 'NewAuthor' }" class="">Add Author</router-link>
      </div>
      <table>
        <tr>
          <td>Title</td>
          <td width="550">Description</td>
          <td width="100" align="center">Action</td>
        </tr>
        <tr v-bind:key="author.id" v-for="author in authors">
          <td>{{ author.name }}</td>
          <td>{{ author.bio }}</td>
          <td align="center">
            <router-link v-bind:to="{ name: 'EditAuthor', params: { id: author._id } }">Edit</router-link> |
            <a href="#" @click="deleteAuthor(author._id)">Delete</a>
          </td>
        </tr>
      </table>
    </div>
    <div v-else>
      There are no authors.. Lets add one now!!! <br /><br />
      <router-link v-bind:to="{ name: 'NewAuthor' }" class="add_author_link">Add Author</router-link>
    </div>
  </div>
</template>

<script>
import AuthorsService from '@/services/AuthorsService'
export default {
  name: 'Authors',
  data () {
    return {
      authors: []
    }
  },
  mounted () {
    this.getAuthors()
  },
  methods: {
    async getAuthors () {
      const response = await AuthorsService.fetchAuthors()
      this.authors = response.data.authors
    },
    async deleteAuthor (id) {
      await AuthorsService.deleteAuthor(id)
      await this.getAuthors()
      this.$router.push({ name: 'Authors' })
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
a.add_author_link {
  background: #4d7ef7;
  color: #fff;
  padding: 10px 80px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
}
</style>
