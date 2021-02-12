<template>
  <div>
    <h1>Welcome to the Bell Admin Center</h1>
    <p>Select an interface to update:</p>
    <ul>
      <li><router-link v-bind:to="{ name: 'Posts' }">Posts</router-link></li>
      <li><router-link v-bind:to="{ name: 'Authors' }">Authors</router-link></li>
      <li><router-link v-bind:to="{ name: 'Categories' }">Categories</router-link></li>
    </ul>

    <h2>Admin Docs</h2>
    <p>Below shows each field with some documentation</p>

    <h3>Posts</h3>
    <table>
      <thead>
        <tr>
          <th>Field Name</th>
          <th>Description</th>
          <th>Data Type</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Title</td>
          <td>Headline of the article being posted</td>
          <td>String</td>
        </tr>
        <tr>
          <td>Post Slug</td>
          <td>Slug for the article for navigation. URL formatting will be bell.com/{category}/{slug}</td>
          <td>String</td>
        </tr>
        <tr>
          <td>Author Slug</td>
          <td>Slug for the author of the post, should be entered as a comma separated if multiple authors. Slug in most cases will be {first}-{last}</td>
          <td>Array</td>
        </tr>
        <tr>
          <td>Category</td>
          <td>Slug for the category of the post</td>
          <td>String</td>
        </tr>
        <tr>
          <td>Publish Date</td>
          <td>Date/Time the article is/should be published</td>
          <td>Date</td>
        </tr>
        <tr>
          <td>Photo URL</td>
          <td>URL to the cloud storage where the photo is uploaded</td>
          <td>String</td>
        </tr>
        <tr>
          <td>Abstract</td>
          <td>A brief introduction to the article, much like the social media intro.</td>
          <td>String</td>
        </tr>
        <tr>
          <td>Content</td>
          <td>HTML contents to the article posted</td>
          <td>String</td>
        </tr>
      </tbody>
    </table>

    <h3>Authors</h3>
    <table>
      <thead>
      <tr>
        <th>Field Name</th>
        <th>Description</th>
        <th>Data Type</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>Name</td>
        <td>Full name of the author</td>
        <td>String</td>
      </tr>
      <tr>
        <td>Pronouns</td>
        <td>The Authors preferred pronouns</td>
        <td>String</td>
      </tr>
      <tr>
        <td>Author Slug</td>
        <td>Slug for the author. Slug in most cases will be {first}-{last}</td>
        <td>String</td>
      </tr>
      <tr>
        <td>Staff Bio</td>
        <td>Staff bio for the author that will show up at the end of each post by the author.</td>
        <td>String</td>
      </tr>
      <tr>
        <td>Photo URL</td>
        <td>URL to the cloud storage where the photo is uploaded</td>
        <td>String</td>
      </tr>
      <tr>
        <td>Position</td>
        <td>Title the author holds at Bell Magazine, ie. "EIC", "ME", "Editor", "Staff Writer", "Contributing Writer"</td>
        <td>String</td>
      </tr>
      <tr>
        <td>Rank</td>
        <td>Numerical Rank representing the authors position. EIC = 5, ME = 4, Editor = 3, Staff Writer = 2, Contributing Writer = 1</td>
        <td>Number</td>
      </tr>
      </tbody>
    </table>

    <h3>Categories</h3>
    <table>
      <thead>
      <tr>
        <th>Field Name</th>
        <th>Description</th>
        <th>Data Type</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>Name</td>
        <td>Full name of the category</td>
        <td>String</td>
      </tr>
      <tr>
        <td>Category Slug</td>
        <td>Slug for the category. Slug in most cases will replace category punctuation/spaces with a dash</td>
        <td>String</td>
      </tr>
      <tr>
        <td>Description</td>
        <td>Description of the category.</td>
        <td>String</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Admin'
}
</script>

<style scoped>

</style>
