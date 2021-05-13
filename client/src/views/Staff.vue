<template>
  <div class="wrapper staff-wrapper">
    <div v-if="staff">
      <p>Staff</p>
    </div>
  </div>
</template>

<script>
import AuthorsService from '../services/AuthorsService'

export default {
  name: 'Staff',
  data () {
    return {
      staff: null
    }
  },
  mounted () {
    this.getAllStaff()
  },
  methods: {
    async getAllStaff () {
      const response = await AuthorsService.fetchAuthors()
      console.log(response.data)
      this.staff = response.data
    }
  }
}
</script>

<style scoped>

</style>
