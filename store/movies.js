export const state = () => ({
  searchName: '',
  movies: [],
  totalResults: 0,
  status: null,
  page: 0
})

export const getters = {
  searchName: state => state.searchName,
  movies: state => state.movies,
  status: state => state.status,
  totalResults: state => state.totalResults,
  page: state => state.page || 0,
  pagesTotal: (state) => { return Math.ceil(state.totalResults / 10) || 0 }
}

export const actions = {
  async getMovies ({ commit, state }, page) {
    commit('setStatus', 'loading')
    await this.$axios.get(`https://www.omdbapi.com/?s=${state.searchName}&page=${page}&apikey=508429e0`)
      .then((res) => {
        console.log(res.data)
        commit('setMovies', res.data.Search)
        commit('setTotalResults', res.data.totalResults)
        commit('setStatus', 'success')
      })
      .catch((err) => {
        console.log(err)
        commit('setStatus', 'error')
        // commit('setErrorMessage', err)
      })
  }
}

export const mutations = {
  setStatus (state, text) {
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
  }
}
