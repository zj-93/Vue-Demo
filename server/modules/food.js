const express = require('express')
const router = express.Router()

const _connent = require('../dbConnent')


// 获取所有美食
router.all('/foodList', function (req, res) {
  //前端的post一共有两种传参方式，
  //一种是body传参，后端通过req.body去拿参数
  //另一种是options传参，后端通过req.query去拿参数
  //正常是：get使用req.query去拿前端传参，post使用req.body
  // .skip(1).limit(2) 跳过第几条，拿几条
  _connent('food', function(err, moduleColl) {
    moduleColl.find({}).toArray(function (err, data) {
      if (err) {
        return
      }
      let resData = {
        "code": "200",
        "msg": "查询成功",
        "data": data
      };
      res.json(
        resData
      )
    })
  })
})

exports.foodRouter = router

