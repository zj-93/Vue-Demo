const db = require("../../module/db/db.js")
const jsonParse = require('../../lib/jsonParse.js')
const params = require("../../lib/params.js")

const travel = db.getSchema("travel")  // 表
const travelDetail = db.getSchema("travelDetail")


module.exports = {
  
  travelList(request, response, handler){
    travel.find({},(err,res) => {
      jsonParse.sendResult(response, 200, res, null)
    }) 
  },

  async getTravelDetail(request, response, handler){
    let param = await params.grabGetParams(request)
    travelDetail.find({id: param.id},(err,res) => {
      jsonParse.sendResult(response, 200, res[0], null)
    }) 
  },
}