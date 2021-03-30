// api路由映射表
// needVerify: 是否需要验证登录态

const routeMap = {
  '/travelList': { // 列表
      handler: 'travelList',
      needVerify: false
  },
  '/travelDetail': { // 详情
    handler: 'getTravelDetail',
    needVerify: false
  },
  '/foodList': { // 详情
    handler: 'foodList',
    needVerify: false
  },
  '/signIn': {
    handler: 'signIn',
    needVerify: false
  }
}

exports.routeMap = routeMap