export const state = () => ({
  searchName: '',
  movies: [],
  totalResults: 0,
  status: null,
  page: 0,
  error: null
})

export const getters = {
  searchName: state => state.searchName,
  movies: state => state.movies,
  status: state => state.status,
  totalResults: state => state.totalResults,
  page: state => state.page || 0,
  pagesTotal: (state) => { return Math.ceil(state.totalResults / 10) || 0 },
  error: (state) => { return state.error }
}

export const actions = {
  async getMovies ({ commit, state }, page) {
    commit('setStatus', 'loading')
    console.log(process.env)
    await this.$axios.get(`https://www.omdbapi.com/?s=${state.searchName}&page=${page}&apikey=${process.env.VUE_APP_API_KEY}`)
      .then((res) => {
        console.log('Response', res.data.Response)
        if (res.data.Response !== 'False') {
          console.log(res.data)
          commit('setPage', page)
          commit('setMovies', res.data.Search)
          commit('setTotalResults', res.data.totalResults)
          commit('setStatus', 'loaded')
        } else {
          commit('setError', res.data.Error)
        }
      })
      .catch((err) => {
        alert(err.response.data.Error)
        commit('setStatus', 'error')
        // commit('setErrorMessage', err)
      })
  }
}

export const mutations = {
  setStatus (state, text) {
    if (text === 'loading') {
      state.movies = []
      state.totalResults = 0
      state.page = 0
    }
    state.status = text
  },
  setMovies (state, movies) {
    state.movies = movies
  },
  setTotalResults (state, number) {
    state.totalResults = number
  },
  setSearchName (state, name) {
    state.searchName = name
  },
  setPage (state, page) {
    state.page = page
  },
  setError (state, error) {
    state.error = error
    state.status = 'error'
  }
}
