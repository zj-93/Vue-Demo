const express = require('express')
const router = express.Router()

const _connent = require('../dbConnent')

router.all('/travelList', function (req, res) {
  _connent('travel', function(err, moduleColl) {
      moduleColl.find({}).toArray(function(err, data) {
        let resData = {
          'code': 200,
          'msg': '查询成功',
          'data': data
        }
        res.json(
          resData
        )
      })
  })
})

router.all('/travelDetail', function (req, res) {
  _connent('travelDetail', function(err, moduleColl) {
      const id = req.query.id
      moduleColl.find({id: id}).toArray(function(err, data) {
        let resData = {}
        console.log(data)
        if(err) {
          resData = {
            'code': 500,
            'msg': err,
          }
        } else {
          resData = {
            'code': 200,
            'msg': '查询成功',
            'data': data[0]
          }
        }
        res.json(
          resData
        )
      })
  })
})


exports.travelRoute = router