const express = require('express')
const router = express.Router()

const _connent = require('../dbConnent')
const send = require('../common/send')

function updateField(req) {
  return {
    $set: req
  }
}

router.all('/updateUserInfo', function(req, res) {
  _connent('userInfo', function(err, moduleColl) {
    console.log(req.body)
    moduleColl.updateOne({userName: '123'}, updateField(req.body)).then(el => {
      if(el.result.ok == 1) {
        send(res, code = 200, msg = '更新成功')
      } else {
        send(res, code = 500, msg = '更新失败')
      }
      
    })
  })
})

exports.personCenterRoute = router