// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Ajax from 'axios'
import store from "@/store"

import ElementUI from 'element-ui'
import 'lib-flexible'
import './permission'
import Icon from 'vue-svg-icon/Icon.vue'

import  "./views/head/index"

import 'swiper/dist/css/swiper.css'
import 'element-ui/lib/theme-chalk/index.css'

import NutUI from '@nutui/nutui'
// import '@nutui/nutui/dist/nutui.css';

import cookie from '@/until/setCookie'

Vue.config.productionTip = false
Vue.prototype.$Ajax = Ajax

Vue.prototype.$cookie = cookie



// require('./axios/mock.js')
NutUI.install(Vue)
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
