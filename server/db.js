const mongoose = require('mongoose')

const articleSchema = new mongoose.Schema({
  name: String,
  img: String,
  desc: String,
  way: Array,
  price: String,
  variety: String
})

const fruitsSchema = new mongoose.Schema({
  id: String, 
  path: String, 
})


const Models = {
  Article: mongoose.model('lvProduct', articleSchema),
  fruitsSchema: mongoose.model('imageSet', fruitsSchema)
}

module.exports = Models