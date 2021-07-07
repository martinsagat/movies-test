
export const state = () => ({
  movie: null,
  status: null
})

export const getters = {
  movie: state => state.movie,
  status: state => state.status,
  genres: (state) => {
    if (state.movie.Genre) {
      const genres = state.movie.Genre.split(', ')
      genres.forEach((g) => {
        g.trim()
      })
      return genres
    } else {
      return []
    }
  }
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
        alert(err.response.data.Error)
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
