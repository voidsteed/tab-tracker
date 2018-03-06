import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default store = new Vuex.Store({
  strict: true,
  state: {
    token: null
  },
  mutation: {
    setToken (state, token) {
      state.token = token
    }
  },
  actions: {
    setToken ({commit}, token) {
      commit('setToken', token)
    }
  }
})
