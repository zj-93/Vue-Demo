const express = require('express')
const router = express.Router()
const _connent = require('./dbConnent')
var dbName = 'lvProduct'

// 注册账号
router.all('/signUp', function (req, res) {
  console.log(1111111111)
  _connent(function (err, db) {
    const adminDb = db.db(dbName)
    let resData = {}
    adminDb.collection('users', function (err, collection) {
      collection.insertOne({
        userName: req.body.userName,
        passWord: req.body.passWord,
      }, function (err, result) {
        if (err) {
          resData = {
            "code": "200",
            "msg": "注册失败"
          };
        }
        resData = {
          "code": "200",
          "msg": "注册成功"
        };
        res.json(
          resData
        )
        db.close()
      })
    })
  })
})

// 账号登陆
router.all('/signIn', function (req, res) {
  _connent(function (err, db) {
    const adminDb = db.db(dbName)
    const userName = req.body.userName
    const passWord = req.body.passWord
    console.log(userName,passWord )
    let resData = {}
    
    adminDb.collection('users').find({ 'userName': userName }).toArray(function (err, data) {
      console.log(data)
      if (data.length == 0) {
        resData = {
          "code": "0",
          "msg": "账号错误"
        };
        res.json(
          resData
        )
        return
      }
      adminDb.collection('users').find({'passWord': passWord}).toArray(function (err, data) {
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
          "msg": "登陆成功"
        };
        res.json(
          resData
        )
        db.close()
      })
    })
  })
})

module.exports = router