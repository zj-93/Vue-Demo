const db = require("../../module/db/db.js")
const jsonParse = require('../../lib/jsonParse.js')
const axios = require("../../lib/params.js")

const users = db.getSchema("users")


/** 查询用户账号是否存在 */
function findUser(params) {
  return new Promise((resolve, reject) => {
    const userName = params.userName
    users.find({ 'userName': userName }).exec(function (err, data) {
      resolve(data)
    })
  })
}

/**查询用户账号密码是否匹配 */
function findPass(params) {
  return new Promise((resolve, reject) => {
    const passWord = params.passWord
    const userName = params.userName
    users.find({'userName': userName, 'passWord': passWord }).exec(function (err, data) {
      resolve(data)
    })
  })
}

module.exports = {
  async signIn(request, response, handler){
    let param = await axios.grabPostParams(request)
    findUser(param).then(res => {
      if(res.length) {
        findPass(param).then(res => {
          jsonParse.sendResult(res, 200, '登陆成功', )
        })
      } else {
        jsonParse.sendResult(response, 0, '未查询到该用户', )
      }
    })
  }
}

