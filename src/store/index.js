import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
  state:{
    betterScroll:null
  },
  mutations:{
    updateBetterScroll(state,payload) {
      state.betterScroll = payload.bs
    }
  }
})

export default store

