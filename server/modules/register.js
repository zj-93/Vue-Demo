const express = require('express')
const router = express.Router()

const _connent = require('../dbConnent')
const send = require('../common/send')



router.all('/getUserInfo', function (req, res) {
  _connent('userInfo', function (err, moduleColl) {
    const userName = req.query.userName
    moduleColl.find({ userName: userName }).toArray(function (err, data) {
      send(res, code = 200, msg = '查询成功', data[0])
    })
  })
})


async function findUser(res, req, moduleColl) {
  return new Promise((resolve, reject) => {
    const userName = req.body.userName
    moduleColl.find({ 'userName': userName }).toArray(function (err, data) {
      resolve(data)
    })
  })
}

function findPass(res, req, moduleColl) {
  return new Promise((resolve, reject) => {
    const passWord = req.body.passWord
    moduleColl.find({ 'passWord': passWord }).toArray(function (err, data) {
      resolve(data)
    })
  })



}



router.all('/signIn', function (req, res) {
  _connent('users', function (err, moduleColl) {
    findUser(res, req, moduleColl).then(params => {
      console.log(params, 'params')
      if (params.length == 0) {
        send(res, code = 500, msg = '未查询到该用户', params)
      } else {
        findPass(res, req, moduleColl).then(data => {
          if (data.length == 0) {
            send(res, code = 500, msg = '密码错误', data)
          } else {
            send(res, code = 200, msg = '登录成功', data[0])
          }
        })
      }
    })
  })
})

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
            console.log(result, 'result')
            send(res, code = 500, msg = '该用户已存在')
          } else {
            console.log(result, 'result')
            send(res, code = 200, msg = '注册成功')
          }
        })
      } else {
        send(res, code = 500, msg = '该用户已存在')
      }
    })
  })
})

exports.registerRoute = router