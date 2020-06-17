const express = require('express')
const fs = require('fs')
const path = require('path')
const bodyParse = require('body-parser')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)

const foodRouter = require('./modules/food')
const travelRoute = require('./modules/travel')
const registerRoute = require('./register')


console.log(foodRouter, 'foodRouter.router.routerter')


const app = express()

var debug = require('debug')('my-application');

const resolve = file => path.resolve(__dirname, file)

app.use('/dist', express.static(resolve('./dist')))
app.use(bodyParse.json())
app.use(bodyParse.urlencoded({ extended: true }))



// session
app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'lvProduct',
  resave: false,
  saveUninitialized: true,
  cookie: {
    secure: true,
    maxAge: 2592000000
  },
  store: new MongoStore({
    url: 'mongodb://localhost:27017/lvProduct'
  })
}))


function getClientIp(req) {
  return req.headers['x-forwarded-for'] ||
  req.connection.remoteAddress ||
  req.socket.remoteAddress ||
  req.connection.socket.remoteAddress;
};

//拦截所以api接口设置头部信息（不能放底部，why？）
app.all('*', function(req, res, next) {
  //跨域
  res.header('Access-Control-Allow-Origin', '*');
  res.header("Access-Control-Allow-Headers", "Content-Type,X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5,  Date, X-Api-Version, X-File-Name");
  //设置前端的这些ajax请求方法'GET,POST,PUT,HEAD,DELETE,OPTIONS'，都有权限调接口
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,HEAD,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Credentials', true);

  console.log('前端的请求方法：',req.method,'请求ip为：',getClientIp(req) );
  console.log(req.url,'前端传进来的参数为===：',req.method == 'GET'?req.query:req.body)

  if ('OPTIONS' == req.method) {
      res.send(200);
  } else {
      next();
  }
});

app.use('/api', foodRouter.foodRouter)
app.use('/api', travelRoute.travelRoute)
// app.use('/api', registerRoute)

//默认首页路由
app.get('/travel', function (req, res, next) {
  fs.readFile('./json/list.json',function(err,data){
      res.writeHead(200,{"Content-type":"text/html;charset=UTF-8"})
      res.end(data);
  })
});



let server = app.listen(3000, function () {
  console.log('访问地址为 localhost:3000')
  var host = server.address().address
  var port = server.address().port

  console.log("应用实例，访问地址为 http://%s:%s", host, port)
  debug('Express server listening on port ' + server.address().port);

})
