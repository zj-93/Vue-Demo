import Mock from 'mockjs' // 引入mockjs
const arr = [1,2,3,1,2,3,4]


Mock.mock('/food/getFoodList', 'post', arr) // 根据数据模板生成模拟数据