/**
 *  路由模块
 */

const url = require('url')
const requestHandler = require('./requestHandler.js')
const routeMap = require('../config/route-config.js').routeMap // api路由映射表

const getHandler = (key) => {
    return requestHandler[key]
}

const apiServer = (request, response) => {
    let requestUrl = url.parse(request.url).pathname
    let route = routeMap[requestUrl] || {}
    let moudle = getHandler(route.moudle)
    if (typeof moudle === 'function') {
        // 是否需要验证登录态
        // if (route.needVerify) {
        //     requestHandler.verifyLogin(request, response, handler)
        // } else {
        //     handler(request, response)
        // }
        moudle(request, response)
    } else {
        getHandler('noHandler')(request, response)
    }
}

exports.apiServer = apiServer