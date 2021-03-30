// const mongoose = require('mongoose')

module.exports = {
  travel: {
    name: String,
    img: String,
    desc: String,
    way: Array,
    price: String,
    variety: String
  },
  travelDetail: {
    name: String,
    img: Array,
    price: String,
    area: String,
    variety: String,
    desc: Array,
    warning: String,
  },
  food: {
    name: String,
    img: String,
    desc: String,
    way: Array,
    price: String,
    variety: String
  },
  users: {
    userName: String, 
    passWord: String, 
  },
  userInfo: {
    userName: String, 
    nickName: String, 
    imgSrc: String, 
    integral: String, 
    birthday: String, 
    realName: String, 
  },
}