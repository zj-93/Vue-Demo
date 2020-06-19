const express = require('express')
const router = express.Router()

const _connent = require('../dbConnent')
const send = require('../common/send')



router.all('/getUserInfo', function (req, res) {
  _connent('userInfo', function(err, moduleColl) {
    const userName = req.query.userName
    moduleColl.find({userName: userName}).toArray(function (err, data) {
      send(res, code = 200, msg = '查询成功', data[0])
    })
  })
})


async function findUser(res, req, moduleColl) {
  const userName = req.body.userName
  moduleColl.find({ 'userName': userName }).toArray(function (err, data) {
    if(data.length == 0) {
      send(res, code = 500, msg = '未查询到该用户', data)
    } else {
      findPass(res, req, moduleColl)   
    }
  })
}

function findPass(res, req, moduleColl) {
  const passWord = req.body.passWord
  moduleColl.find({ 'passWord': passWord }).toArray(function (err, data) {
    if(data.length == 0) {
      send(res, code = 500, msg = '密码错误', data)
    } else {
      send(res, code = 200, msg = '登录成功', data[0])
    }
  })
}



router.all('/signIn', function (req, res) {
  _connent('users', function(err, moduleColl) { 
    findUser(res, req, moduleColl)
  })
  
  // const userName = req.body.userName
  // const passWord = req.body.passWord
  // let resData = {}

  // _connent('users').find({ 'userName': userName }).toArray(function (err, data) {
  //   if (data.length == 0) {
  //     resData = {
  //       "code": "0",
  //       "msg": "账号错误"
  //     };
  //     res.json(
  //       resData
  //     )
  //     return
  //   }
  //   _connent('users').find({ 'userName': userName, 'passWord': passWord }).toArray(function (err, data) {
  //     if (data.length == 0) {
  //       resData = {
  //         "code": "0",
  //         "msg": "密码错误"
  //       };
  //       res.json(
  //         resData
  //       )
  //       return
  //     }
  //     resData = {
  //       "code": "200",
  //       "msg": "登陆成功",
  //       "data": {
  //         userName: data[0].userName
  //       }
  //     };
  //     res.json(
  //       resData
  //     )
  //   })
  // })
})

exports.registerRoute = router