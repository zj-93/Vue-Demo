const express = require('express')
const router = express.Router()

var dbName = 'lvProduct'

var MongoClient =require('mongodb').MongoClient;

//封装成为内部函数
function _connent(callback) {
     var url='mongodb://127.0.0.1:27017/test';

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


// 获取所有文章
router.all('/articleList', function (req, res) {
  //前端的post一共有两种传参方式，
  //一种是body传参，后端通过req.body去拿参数
  //另一种是options传参，后端通过req.query去拿参数
  //正常是：get使用req.query去拿前端传参，post使用req.body
  _connent(function(err, db) {
    const adminDb = db.db(dbName)
    adminDb.collection('lvProduct').find({}).toArray(function(err, data) {
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



module.exports = router