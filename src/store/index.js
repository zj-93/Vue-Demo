import Vue from 'vue'
import Vuex from 'vuex'
import common from './modules/common'
import userInfo from './modules/userInfo'
import getters from './getter'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    common,
    userInfo
  },
  getters
})

export default store