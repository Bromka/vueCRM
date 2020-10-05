import Vue from "vue";
import Vuex from "vuex";
import auth from "./auth"
import info from "./info"
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    error: null,
    currency: {}
  },
  mutations: {
    setError(state, message){
      state.error = message;
    },
    clearError(state){
      state.error = null;
    },
    setCurrency(state, value){
      state.currency = value
    }

  },
  actions: {
    async currency(context:any){
      const url = 'https://www.cbr-xml-daily.ru/daily_json.js'
      try {
        const response = await fetch(url)
        const JSON = await response.json();
        context.commit('setCurrency', JSON)
      } catch (e) {
        console.error('error', e)
      }
    }
  },
  getters:{
    error(state){
      return state.error;
    },
    currency: (state) => state.currency,
  },
  modules: {
    auth,
    info
  }
});
