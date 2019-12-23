var MongoClient = require('mongodb').MongoClient;

//封装成为内部函数
function _connent(callback) {
  var url = 'mongodb://127.0.0.1:27017/test';

  //connect(url, user, password)


  // var url='mongodb://60.205.209.210:27017/test';

  //连接数据库
  MongoClient.connect(url,{ useNewUrlParser: true,  useUnifiedTopology: true}, function (err, db) {
    if (err) {
      callback(err, null);
      return;
    }
    callback(err, db);
  });
}

module.exports = _connent 