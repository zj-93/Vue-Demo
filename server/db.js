const mongoose = require('mongoose')

const articleSchema = new mongoose.Schema({
  name: String,
  img: String,
  desc: String,
  way: Array,
  price: String,
  variety: String
})


const Models = {
  Article: mongoose.model('lvProduct', articleSchema)
}

module.exports = Models