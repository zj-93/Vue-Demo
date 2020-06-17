const mongoose = require('mongoose')

module.exports = {
  article:{
    id: String,
    name: String,
    img: String,
    desc: String,
    way: Array,
    price: String,
    variety: String
  },

  foods:{
    id: String, 
    path: String, 
  },
  user:{
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
  }
}
