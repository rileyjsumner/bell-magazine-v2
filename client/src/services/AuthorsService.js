import Api from '@/services/Api'

export default {
  fetchAuthors () {
    return Api().get('authors')
  },

  addAuthor (params) {
    return Api().post('authors', params)
  },

  updateAuthor (params) {
    return Api().put('authors/' + params.id, params)
  },

  getAuthor (params) {
    return Api().get('author/' + params.id)
  },

  deleteAuthor (id) {
    return Api().delete('authors/' + id)
  }
}
