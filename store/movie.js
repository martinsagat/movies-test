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
    await this.$axios.get(`https://www.omdbapi.com/?i=${id}&apikey=${process.env.VUE_APP_API_KEY}`)
      .then((res) => {
        commit('setMovie', res.data)
        commit('setStatus', 'loaded')
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
