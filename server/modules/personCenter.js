const express = require('express')
const router = express.Router()

const _connent = require('../dbConnent')
const send = require('../common/send')

function updateField(req) {
  return {
    $set: req
  }
}

/** 更新用户信息 */
router.all('/updateUserInfo', function(req, res) {
  _connent('userInfo', function(err, moduleColl) {
    const userName = req.body.userName
    moduleColl.updateOne({ userName: userName }, updateField(req.body)).then(el => {
      if(el.result.ok == 1) {
        send(res, code = 200, msg = '更新成功')
      } else {
        send(res, code = 500, msg = '更新失败')
      }
      
    })
  })
})

/** 实名认证 */
router.all('/realRegister', function(req, res) {
  _connent('userInfo', function(err, moduleColl) {
    const userName = req.body.userName
    let data = {
      realName: req.body.realName,
      realCardId: req.body.realCardId
    }
    moduleColl.updateOne({ userName: userName }, {$set: data}).then(el => {
      if(el.result.ok == 1) {
        send(res, code = 200, msg = '认证成功')
      } else {
        send(res, code = 500, msg = '认证失败')
      }
    })
  })
})

exports.personCenterRoute = router