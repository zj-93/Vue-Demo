const express = require('express')
const router = express.Router()

const _connent = require('../dbConnent')

router.all('/signIn', function(req, res) {
  const userName = req.body.userName
  const passWord = req.body.passWord
  let resData = {}

  _connent('users').find({'userName': userName}).toArray(function(err, data) {
    if(data.length == 0){
      resData = {
        "code": "0",
        "msg": "账号错误"
      };
      res.json(
        resData
      )
      return
    }
    _connent('users').find({ 'userName': userName, 'passWord': passWord }).toArray(function (err, data) {
      if (data.length == 0) {
        resData = {
          "code": "0",
          "msg": "密码错误"
        };
        res.json(
          resData
        )
        return
      }
      resData = {
        "code": "200",
        "msg": "登陆成功",
        "data": {
          userName: data[0].userName
        }
      };
      res.json(
        resData
      )
    })
  })
})

module.exports.registerRoute = router