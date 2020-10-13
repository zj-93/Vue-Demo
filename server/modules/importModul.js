
const fs = require('fs')
const express = require('express')
const router = express.Router()

const _connent = require('../dbConnent')
const send = require('../common/send')

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

router.all('/import',upload.single('file'), function(req, res) {
  var file = req.file;
  if (file) {
    var fileStr = ''
    var fileNameArr = file.originalname.split('.');
    var suffix = fileNameArr[fileNameArr.length - 1];
    //文件重命名
    fs.renameSync(`E:\\files\\${file.filename}`, `E:\\files\\${file.filename}.${suffix}`);
    file['base64FileUrl'] = `E:\\files\\${file.filename}.${suffix}`
    const read =fs.createReadStream(file.base64FileUrl, {encoding: 'base64'})
    read.on('data',dataStream =>{//监听读取的数据，如果打印data就是文件的内容
      fileStr += dataStream
    })
    read.on('end', (dataStreamEnd) => { //监听状态
      _connent('imageSet', function(err, moduleColl) {
        const data = {
          originalname: file.originalname,
          filename: file.filename,
          fileUrl: `${file.path}.${suffix}`,
          fileAccept: "data:image/png;base64," + fileStr
        }
        moduleColl.insertOne(data, function(err, result) {
          if(err) {
            send(res, code = 500, msg = '上传失败')
          } else {
            send(res, code = 200, msg = '上传成功', data)
          }
        })
      })
    })
  }
})

router.all('/getImgList', function(req, res) {
  _connent('imageSet', function(err, moduleColl) {
    moduleColl.find({}).toArray(async (err, data) => {
      if(err) {
        send(res, code = 500, msg = '查询失败')
      } else {
        send(res, code = 200, msg = '查询成功', data)
      }
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
})

exports.importModuleRoute = router
