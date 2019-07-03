import Vue from 'vue'
import Vuex from 'vuex'
import common from './modules/common'
import getters from './getter'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    common
  },
  getters
})

export default store