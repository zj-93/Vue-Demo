import personCenter from '@/views/person/personCenter.vue'
import personInfo from '@/views/person/personInfo.vue'
import realNameAuth from '@/views/person/realNameAuth.vue'

export const personRouter = [{
  path: '/personCenter',
  name: 'personCenter',
  component: personCenter,
  meta: {
    permissionValue: '*'
  }
},{
  path: '/personInfo',
  name: 'personInfo',
  component: personInfo,
  meta: {
    permissionValue: '*'
  }
}, {
  path: '/realNameAuth',
  name: 'realNameAuth',
  component: realNameAuth,
  meta: {
    permissionValue: '*'
  }
}]