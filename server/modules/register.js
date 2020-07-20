const express = require('express')
const router = express.Router()

const _connent = require('../dbConnent')
const send = require('../common/send')


/**得到用户信息 */
router.all('/getUserInfo', function (req, res) {
  _connent('userInfo', function (err, moduleColl) {
    const userName = req.query.userName
    moduleColl.find({ 'userName': userName }).toArray(function (err, data) {
      console.log(data)
      send(res, code = 200, msg = '查询成功', data[0])
    })
  })
})

/** 得到用户账号是否存在 */
async function findUser(res, req, moduleColl) {
  return new Promise((resolve, reject) => {
    const userName = req.body.userName
    moduleColl.find({ 'userName': userName }).toArray(function (err, data) {
      resolve(data)
    })
  })
}


/**查询用户账号密码是否匹配 */
function findPass(res, req, moduleColl) {
  return new Promise((resolve, reject) => {
    const passWord = req.body.passWord
    const userName = req.body.userName
    moduleColl.find({'userName': userName, 'passWord': passWord }).toArray(function (err, data) {
      resolve(data)
    })
  })
}


/**登录 */
router.all('/signIn', function (req, res) {
  _connent('users', function (err, moduleColl) {
    findUser(res, req, moduleColl).then(params => {
      if (params.length == 0) {
        send(res, code = 500, msg = '未查询到该用户', params)
      } else {
        findPass(res, req, moduleColl).then(data => {
          if (data.length == 0) {
            send(res, code = 500, msg = '密码错误', data)
          } else {
            console.log(data, 'data')
            send(res, code = 200, msg = '登录成功', data[0])
          }
        })
      }
    })
  })
})


/** 注册 */
router.all('/signUp', function (req, res) {
  _connent('users', function (err, moduleColl) {
    findUser(res, req, moduleColl).then(params => {
      console.log(params, 'params')
      if (params.length == 0) {
        moduleColl.insertOne({
          userName: req.body.userName,
          passWord: req.body.passWord
        }, function (err, result) {
          if (err) {
            send(res, code = 500, msg = '该用户已存在')
          } else {
            insertUserInfo(req.body.userName, req.body.nickName)
            const params = {
              userName: req.body.userName
            }
            send(res, code = 200, msg = '注册成功', params)
          }
        })
      } else {
        send(res, code = 500, msg = '该用户已存在')
      }
    })
  })
})


/** 给每个用户初始化头像 以及 积分 */
function insertUserInfo(userName, nickName) {
  _connent('userInfo', function(err, moduleColl) {
    moduleColl.insertOne({
      "userName" : userName,
      "nickName" : nickName,
      "imgSrc" : "/static/image/portrait/2.jpg",
      "integral" : "0",
      "birthday" : "",
      "sex" : ""
    })
  })
}

exports.registerRoute = router