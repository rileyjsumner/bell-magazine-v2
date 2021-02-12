import Api from '@/services/Api'

export default {
  fetchCategories () {
    return Api().get('categories')
  },

  addCategory (params) {
    return Api().post('categories', params)
  },

  updateCategory (params) {
    return Api().put('categories/' + params.id, params)
  },

  getCategory (params) {
    return Api().get('category/' + params.id)
  },

  deleteCategory (id) {
    return Api().delete('categories/' + id)
  }
}
