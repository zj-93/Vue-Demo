const express = require('express')
const router = express.Router()

var dbName = 'lvProduct'

var MongoClient = require('mongodb').MongoClient;

//封装成为内部函数
function _connent(callback) {
  var url = 'mongodb://127.0.0.1:27017/test';

  //connect(url, user, password)


  // var url='mongodb://60.205.209.210:27017/test';

  //连接数据库
  MongoClient.connect(url, function (err, db) {
    if (err) {
      callback(err, null);
      return;
    }
    callback(err, db);
  });
}


// 获取所有旅游项目
router.all('/articleList', function (req, res) {
  //前端的post一共有两种传参方式，
  //一种是body传参，后端通过req.body去拿参数
  //另一种是options传参，后端通过req.query去拿参数
  //正常是：get使用req.query去拿前端传参，post使用req.body
  _connent(function (err, db) {
    const adminDb = db.db(dbName)
    adminDb.collection('lvProduct').find({}).toArray(function (err, data) {
      console.log(data)
      if (err) {
        console.error(err, '1111111111111111')
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

// 获取所有美食
router.all('/foodList', function (req, res) {
  //前端的post一共有两种传参方式，
  //一种是body传参，后端通过req.body去拿参数
  //另一种是options传参，后端通过req.query去拿参数
  //正常是：get使用req.query去拿前端传参，post使用req.body
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

// 注册账号
router.all('/signUp', function (req, res) {
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