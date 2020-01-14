
const fs = require('fs')
const express = require('express')
const router = express.Router()
const _connect = require('./dbConnent')
const dbName = 'lvProduct'

// 文件上传
var multer = require('multer');//引入multer
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'E:\\files')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now())
  }
})
var upload = multer({ storage: storage });//设置上传文件存储地址
router.all('/import', upload.single('file'), function (req, res) {
  let ret = {};
  ret['code'] = 200;
  var file = req.file;
  if (file) {
    var fileNameArr = file.originalname.split('.');
    var suffix = fileNameArr[fileNameArr.length - 1];
    //文件重命名
    fs.renameSync(`E:\\files\\${file.filename}`, `E:\\files\\${file.filename}.${suffix}`);
    file['newfilename'] = `${file.filename}.${suffix}`;
    ret['file'] = file;
    _connect(function (err, db) {
      const adminDb = db.db(dbName)
      adminDb.collection('imageSet').insertMany([
        { id: Date.now(),path: `E:\\files\\${file.filename}.${suffix}` }
      ], function (err, result) {
        if (err) {
          ret['msg'] = '请重新上传'
        }
        ret['msg'] = '上传成功'
      })
      res.send(ret);
      db.close()
    })
  }
})

router.all('/getImgList', function (req, res) {
  _connect(function (err, db) {
    const adminDb = db.db(dbName)
    adminDb.collection('imageSet').find({}).toArray((err, data) => {
      const resData = {}
      if(err) { 
        resData['code'] = '201'
        resData['msg'] = '查询失败'
        resData['data'] = []
      } else {
        resData['code'] = '200'
        resData['msg'] = '查询成功'
        resData['data'] = data
      }
      res.json(
        resData
      )
    })
  })
})


router.all('/export', function (req, res) {

  var filename = req.query.filename;
  var oldname = req.query.oldname;
  var file = './uploads/' + filename;
  res.writeHead(200, {
    'Content-Type': 'application/octet-stream',//告诉浏览器这是一个二进制文件
    'Content-Disposition': 'attachment; filename=' + encodeURI(oldname),//告诉浏览器这是一个需要下载的文件
  });//设置响应头
  var readStream = fs.createReadStream(file);//得到文件输入流
  readStream.on('data', (chunk) => {
    res.write(chunk, 'binary');//文档内容以二进制的格式写到response的输出流
  });
  readStream.on('end', () => {
    res.end();
  })
  // _connect(function (err, db) {
  //   const adminDb = db.db(dbName)

  // })
})

module.exports = router
