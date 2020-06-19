const express = require('express')
const router = express.Router()

const _connent = require('../dbConnent')
const send = require('../common/send')

router.all('/travelList', function (req, res) {
  _connent('travel', function(err, moduleColl) {
      moduleColl.find({}).toArray(function(err, data) {
        send(res, code = 200, msg = '查询成功', data)
      })
  })
})

router.all('/travelDetail', function (req, res) {
  _connent('travelDetail', function(err, moduleColl) {
      const id = req.query.id
      moduleColl.find({id: id}).toArray(function(err, data) {
        send(res, code = 200, msg = '查询成功', data[0])
      })
  })
})


exports.travelRoute = router