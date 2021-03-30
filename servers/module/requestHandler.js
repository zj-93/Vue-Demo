/**
 *  请求处理器模块
 */

const jsonParse = require('../lib/jsonParse.js')
const db = require('../module/db/db.js')

const travel = require('./handle/travel.js')
const food = require('./handle/food.js')
const register = require('./handle/register.js')
// const errorLog = require('./handler/errorLog.js')
// const requests = require('./handler/requests.js')
// const login = require('./handler/login.js')
// const projects = require('./handler/projects.js')
// const members = require('./handler/members.js')


// 连接DB
db.connectMongoDb('lvProduct')

module.exports = {

    ...travel, // 旅游模块

    ...food, // 美食模块

    ...register, // 注册&&登录

    // ...errorLog, // err模块

    // ...requests, // requests模块

    // ...login, // 登陆态模块

    // ...projects, // 项目配置模块

    // ...members, // 成员配置

    noHandler: (request, response) => {
        jsonParse.sendResult(response, 404)
    },

}