import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index'
// import travelList from '@/views/contentList/travelList'
// import detail from '@/views/detail'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'index',
    redirect: 'travel',
    component: index,
    children: [{
      path: '/travel',
      name: 'travel',
      component: resolve => require(['@/views/contentList/travelList'], resolve)
    }, {
      path: '/food',
      name: 'food',
      component: resolve => require(['@/views/contentList/foodList'], resolve)
    }]
  }, {
    path: '/detail',
    name: 'detail',
    component: resolve => require(['@/views/detail'], resolve)
  }]
})
