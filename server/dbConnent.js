var MongoClient = require('mongodb').MongoClient;
var send = require('./common/send')
var dbName = 'lvProduct'

//封装成为内部函数
function _connent(collName, callback) {
  var url = 'mongodb://127.0.0.1:27017/';
  //连接数据库
  MongoClient.connect(url,{ useNewUrlParser: true,  useUnifiedTopology: true}, function (err, db) {
    if(err) {
      return
    } else {
      const adminDb = db.db(dbName)
      const moduleColl = adminDb.collection(`${collName}`)
      callback(err, moduleColl);
    }
  });
}

module.exports = _connent 