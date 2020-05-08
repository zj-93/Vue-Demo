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
    }, {
      path: '/fruits',
      name: 'fruits',
      component: resolve => require(['@/views/contentList/fruitsList'], resolve)
    }]
  }, {
    path: '/detail',
    name: 'detail',
    component: resolve => require(['@/views/detail'], resolve)
  }, {
    path: '/person',
    name: 'person',
    component: resolve => require(['@/views/person'], resolve)
  }, {
    path: '/signIn',
    name: 'signIn',
    component: resolve => require(['@/views/register/signIn'], resolve)
  }, {
    path: '/signUp',
    name: 'signUp',
    component: resolve => require(['@/views/register/signUp'], resolve)
  }, {
    path: '/pay',
    name: 'pay',
    component: resolve => require(['@/views/payCard'], resolve)
  }, {
    path: '/401',
    name: '401',
    component: resolve => require(['@/views/errorPage/401'], resolve),
    hidden: true
  },
  { path: '*', redirect: '/401', hidden: true }
  ]
})
