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

const userSchema = new mongoose.Schema({
  userName: String, 
  passWord: String, 
})

const userInfoSchema = new mongoose.Schema({
  userName: String, 
  nickName: String, 
  imgSrc: String, 
  integral: String, 
  birthday: String, 
  realName: String, 
})


const Models = {
  Article: mongoose.model('lvProduct', articleSchema),
  fruitsSchema: mongoose.model('imageSet', fruitsSchema),
  userSchema: mongoose.model('users', userSchema),
  userInfoSchema: mongoose.model('users', userInfoSchema),
}

module.exports = Models