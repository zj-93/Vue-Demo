import personCenter from '@/views/person/personCenter.vue'
import personInfo from '@/views/person/personInfo.vue'

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
}]