export const state = () => ({
  movie: null,
  status: null
})

export const getters = {
  movie: state => state.movie,
  status: state => state.status
}

export const actions = {
  async fetchMovie ({ commit }, id) {
    commit('setStatus', 'loading')
    await this.$axios.get(`https://www.omdbapi.com/?i=${id}&apikey=508429e0`)
      .then((res) => {
        console.log(res.data)
        commit('setMovie', res.data)
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
  setMovie (state, movie) {
    state.movie = movie
  }
}
