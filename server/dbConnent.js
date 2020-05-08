var MongoClient = require('mongodb').MongoClient;
var dbName = 'lvProduct'

//封装成为内部函数
function _connent(callback) {
  var url = 'mongodb://127.0.0.1:27017/';

  //连接数据库
  MongoClient.connect(url,{ useNewUrlParser: true,  useUnifiedTopology: true}, function (err, db) {
    const adminDb = db.db(dbName)
    if (err) {
      callback(err, null, adminDb);
      return;
    }
    callback(err, db, adminDb);
  });
}

module.exports = _connent 