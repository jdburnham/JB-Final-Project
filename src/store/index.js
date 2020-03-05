import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: '',
    characters: []
  },
  getters: {
    getUser: state => state.user,
    getCharacters: state => state.characters.reverse(),
    getCharacter: state => id =>
      state.characters.find(character => character.id === id)
  },
  mutations: {
    settingUser: (state, user) => (state.user = user),
    addingCharacter: (state, newCharacter) =>
      state.characters.push(newCharacter),
    removingCharacter: (state, id) =>
      (state.characters = state.characters.filter(
        character => character.id != id
      ))
  },
  actions: {
    setUser: ({ commit }, user) => commit('settingUser', user),
    addCharacter: ({ commit }, newCharacter) =>
      commit('addingCharacter', newCharacter),
    removeCharacter: ({ commit }, id) => commit('removingCharacter', id)
  }
})
