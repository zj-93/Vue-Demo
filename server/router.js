const express = require('express')
const router = express.Router()
var fs = require('fs');

var dbName = 'lvProduct'

const _connent = require('./dbConnent')



// 获取所有旅游项目
router.all('/articleList', function (req, res) {
  //前端的post一共有两种传参方式，
  //一种是body传参，后端通过req.body去拿参数
  //另一种是options传参，后端通过req.query去拿参数
  //正常是：get使用req.query去拿前端传参，post使用req.body
  _connent(function (err, db) {
    const adminDb = db.db(dbName)
    adminDb.collection('lvProduct').find({}).toArray(function (err, data) {
      if (err) {
        console.error(err, '1111111111111111')
        return
      }
      if(data.length == 0) {
        fs.readFile('./json/list.json', 'utf-8', function (err, params) {
          console.log(params)
          adminDb.collection('lvProduct').insertMany(JSON.parse(params))
          let resData = {
            "code": "200",
            "msg": "数据插入中，请等待。。。。",
            "data": data
          };
          res.json(
            resData
          )
          db.close()
        })
      } else {
        let resData = {
          "code": "200",
          "msg": "查询成功",
          "data": data
        };
        res.json(
          resData
        )
        db.close()
      }
    })
  })
})

// 获取所有旅游项目详情
router.all('/getTravelDetail', function(req, res){
  _connent(function(err, db) {
    const adminDb = db.db(dbName)
    const id = req.query.id
    adminDb.collection('travelDetail').find({id: id}).toArray(function(err, data) {
      if (err) {
        return
      }
      let resData
      if(data.length) {
        resData = {
          "code": "200",
          "msg": "查询成功",
          "data": data[0]
        }
      } else {
        resData = {
          "code": "200",
          "msg": "查询成功",
          "data": []
        }
      }
       
      res.json(
        resData
      )
      db.close()
    })
  })
})

// 获取所有美食
router.all('/foodList', function (req, res) {
  //前端的post一共有两种传参方式，
  //一种是body传参，后端通过req.body去拿参数
  //另一种是options传参，后端通过req.query去拿参数
  //正常是：get使用req.query去拿前端传参，post使用req.body
  // .skip(1).limit(2) 跳过第几条，拿几条
  _connent(function (err, db) {
    const adminDb = db.db(dbName)
    adminDb.collection('food').find({}).toArray(function (err, data) {
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
      db.close()
    })
  })

})

module.exports = router
