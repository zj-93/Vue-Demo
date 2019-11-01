var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers")
var MongoClient = require("mongodb").MongoClient // 引包

//数据库地址
var dbUrl = 'mongodb://127.0.0.1:27017'

var dbName = 'lvProduct'

MongoClient.connect(dbUrl, function(err, client) {
  const adminDb = client.db(dbName)
  if(err) {
    console.log('连接错误！')
    return
  }
  console.log("连接成功")
  // adminDb.collection('lvProduct').insert(data, function(err,result){
  //   if(err) {
  //     console.log('Error:' + err)
  //     return
  //   }
  //   console.log('------------' + '/n' + result)
  // })
  adminDb.collection('lvProduct').find({}).toArray(function(err, data) {
    console.log(data)
    client.close()
  })
})




var handle = {}
handle["/index"] = requestHandlers.index;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;

server.start(router.route, handle)