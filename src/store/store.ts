import { createStore } from 'vuex';
import axios from 'axios';

const store = createStore({
  state: {
    characters: [],
    filter: 'all'
  },
  mutations: {
    SET_CHARACTERS(state, characters) {
      state.characters = characters;
    },
    SET_FILTER(state, filter) {
      state.filter = filter;
    }
  },
  actions: {
    async fetchCharacters({ commit }) {
      try {
        const response = await axios.get('https://swapi.dev/api/people/');
        const characters = response.data.results;
        commit('SET_CHARACTERS', characters);
      } catch (error) {
        console.error(error);
      }
    }
  },
  getters: {
    characters: state => state.characters,
    filter: state => state.filter
  }
});

export default store;