export const state = () => ({
  movies: null,
  status: null
})

export const getters = {
  movies: state => state.movies,
  status: state => state.status
}

export const actions = {
  async fetchMovies ({ commit }) {
    commit('setStatus', 'loading')
    await this.$axios.get('/servers')
      .then((res) => {
        commit('setMovies', res.data)
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
    state.servers = movies
  }
}
