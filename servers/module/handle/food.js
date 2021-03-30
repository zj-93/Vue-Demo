const db = require("../../module/db/db.js")
const jsonParse = require('../../lib/jsonParse.js')

const food = db.getSchema("food")

module.exports = {
  foodList(request, response, handler){
    food.find({},(err,res) => {
      jsonParse.sendResult(response, 200, res, null)
    }) 
  },
}