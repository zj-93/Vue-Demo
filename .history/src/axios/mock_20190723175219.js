import Mock from 'mockjs' // 引入mockjs

var list = [{
    "id": "00003",
    "name": "有饭扒屋（储能店）",
    "img": "/static/image/foodList/foodList1.png",
    "desc": "快餐 科技园中式快餐第1名",
    "way": ["支持外卖"],
    "price": "18",
    "variety": "自由行"
},{
    "id": "00001",
    "name": "尚食海鲜坊",
    "img": "/static/image/foodList/foodList2.png",
    "desc": "回头率最高的快餐",
    "way": ["支持外卖","支持自取"],
    "price": "23",
    "variety": "跟团游"
},{
    "id": "00002",
    "name": "姜太公纸包鱼",
    "img": "/static/image/foodList/foodList3.png",
    "desc": "全城烤鱼第8名",
    "way": ["支持预定"],
    "price": "183",
    "variety": "自由行"
},{
    "id": "00004",
    "name": "紫金蛋糕店",
    "img": "/static/image/foodList/foodList4.png",
    "desc": "全城蛋糕第9名",
    "way": ["支持外卖","支持预定"],
    "price": "99",
    "variety": "跟团游"
},{
    "id": "00005",
    "name": "明记海鲜大排档",
    "img": "/static/image/foodList/foodList5.png",
    "desc": "巽寮湾海鲜第一名",
    "way": ["支持预定"],
    "price": "143",
    "variety": "自由行"
}]

Mock.mock('/food/getFoodList', 'post', 
    function(parmas) {
        console.log(parmas, '----------------')
        if(parmas.body) {
            const jsonPase = JSON.parse(parmas.body)
            const jsonunit = jsonPase.code
            ruturn list
        }
    }
) // 根据数据模板生成模拟数据