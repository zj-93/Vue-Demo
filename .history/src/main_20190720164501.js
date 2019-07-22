// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import store from "@/store"

import ElementUI from 'element-ui'
import 'lib-flexible'
import Icon from 'vue-svg-icon/Icon.vue'

import 'swiper/dist/css/swiper.css'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
Vue.prototype.$http = axios

require('../axios/mock')

Vue.use(ElementUI)
Vue.component('icon', Icon)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
