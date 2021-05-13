import Api from './Api'

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

  getAuthor (slug) {
    return Api().get('author/slug/' + slug)
  },

  getPostsByAuthor (slug) {
    return Api().get('author/' + slug + '/posts')
  },

  deleteAuthor (id) {
    return Api().delete('authors/' + id)
  }
}
