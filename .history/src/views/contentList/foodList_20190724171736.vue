<template>
  <div class="content">
      <div class="viewList" v-for="(item, index) in list" :key="index" @click="jumpDetail(item.id)">
        <span class="imgArea">
          <img :src="item.img" alt="">
        </span>
        <div class="textArea">
          <div>
            <span class="title">{{item.name}}</span>
            <count @cutCount="cutCount" @addCount="addCount" :sigle-price="item.price" :sigle-id="item.id" :num="item.num || 0"/>
          </div>
          <p class="desc">{{item.desc}}</p>
          <div class="product_tag">
            <span class="way" v-for="(ele, index) in item.way" :key="index">{{ele}}</span>
          </div>
          <div class="product_price">
            <span class="price"><i class="num">￥{{item.price}}</i> 元起</span>
          </div>
        </div>
      </div>
      <div class="footer"></div>
      <!-- <div class="footer" v-if="state=='1'">加载中...</div>
      <div class="footer" v-if="state=='2'">我也是有底线的</div> -->

      <div class="goPay">
        <div class="numDesc">
            <i class="shopping-cart"></i> 
            <div class="totalNum">
              <div class="payMoney">￥{{ totalMoney }}</div> 
              <div v-if="shipNum == 0" class="payDesc">免运费</div>
              <div v-else  class="payDesc">另需配送费￥{{shipNum}}</div>
            </div>
        </div>
        <div class="pay" @click="gotoPay">去结算</div>
      </div>
  </div>
</template>

<script>
// import list from "@/views/json/list3.json"
import count from '@/compontents/count'
import { setTimeout } from 'timers';
import { getFoodList } from "@/axios/food.js"
export default {
  components: {
    count
  },
  data () {
    return {
      list: [],
      arrList: [],
      state: '1',
      productNum: '',
      shipNum: this.$store.state.common.shipNum,
      totalMoney: 0,
      payList: [],
      payListArr: []
    };
  },
  computed: {
    scrollState() {
      return this.$store.state.common.scrollState
    }
  },
  watch: {
    scrollState(){
      console.log(this.scrollState)
      this.state = this.scrollState
    }
  },
  created() {
    this.getList()
  },
  mounted() {
    console.log(this.$route.query.info)
    if(this.$route.query) {
      this.arrList = JSON.parse(this.$route.query.info)
    }
    // this.arrList = JSON.parse(this.$route.query.info)
    setTimeout(() => {
      console.log(this.contentList, 'mounted')
    },300)
  },
  methods: {
    addCount(val, id, num) {
      if(!this.payListArr.includes(id)) {
        const obj = `{"${id}":{"num": ${num}}}`
        this.payList.push(JSON.parse(obj))
        this.payListArr.push(id)
      } else {
        this.payList.forEach(ele => {
          if(Object.keys(ele) == id) {
            ele[Object.keys(ele)].num = num
          }
        })
      }
      console.log(this.payList)
      this.totalMoney = Number(this.totalMoney) + Number(val)
    },
    cutCount(val, id, num) {
      console.log(val, id)
      if(num == 0){
        this.payList.forEach((ele, index) => {
          if(Object.keys(ele) == id) {
            this.payList.splice(index, 1)
          }
        })
      } else {
        this.payList.forEach((ele, index) => {
          if(Object.keys(ele) == id) {
            ele[Object.keys(ele)].num = num
          }
        })
      }
      console.log(this.payList)
      this.$store.dispatch('changePayList', this.payList)
      this.totalMoney = Number(this.totalMoney) - Number(val)
    },
    gotoPay() {
      this.$router.push({path: '/pay', query: {info: JSON.stringify(this.payList)}})
    },
    jumpDetail(id) {
      this.$router.push({name: 'detail', params: {id: id}})
    },
    getList(){
      getFoodList().then((respone) => {
        this.list = respone
        this.state = 2
        this.list.forEach((ele) => {
          this.arrList.forEach((item) => {
            if(ele.id == Object.keys(item)[0]) {
              const num = item[ele.id].num
              ele.num = num
              this.price += num * ele.price
            }
          })
        })
        console.log(this.list)
      }).catch(error => {
        console.log(error)
      })
    }
  }
}

</script>
<style lang='less' scoped>
.content {background-color:#fff;.viewList {padding:20px 20px;display:block;height:175px;overflow:hidden;border-bottom:1px solid #c9c9c9;position:relative;.imgArea {float:left;display:inline-block;width:280px;margin-right:20px;img {width:280px;height:160px;}
}
.textArea {display:inline-block;width:calc(100% - 20px);height:100%;margin-left:20px;padding:20px 20px 20px 300px;box-sizing:border-box;position:absolute;top:0;left:0;word-break:break-all;.title {font-size:20px;color:#222;height:60px;line-height:30px;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;box-sizing:border-box;margin-bottom:10px;}
.desc {overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:12px;color:#999;margin-bottom:20px;}
.product_tag {width:240px;display:inline-block;overflow:hidden;height:40px;.way {float:left;height:40px;margin-bottom:5px;border:1px solid #d8d8d8;line-height:30px;background-color:#f6f6f6;padding:5px;box-sizing:border-box;margin-right:10px;}
}
.product_price {display:inline-block;float:right;.price {.num {font-size:30px;color:#ff6913;}
}
}
}
}
.footer {text-align:center;margin:20px 0;color:#ccc;margin-bottom: 110px;}
}
.goPay{ position: fixed;bottom: 5px;left: 5%;display: inline-block;width: 90%;height: 100px; background-color: white;box-shadow: 0 10px 10px #ccc; 
  .pay{ width: 100px;height: 100%;line-height: 100px;float: right;background-color: #ff6913;text-align: center; color: #fff;padding: 0 20px;}
  .numDesc{ float: left;}
  .totalNum{ font-size: 40px;float: left;margin-left: 20px}
  .shopping-cart{ float: left; width: 90px;height: 90px;margin-top: 5px;margin-left: 5px;background-image: url("/static/image/foodList/shopping.png");background-size: 100% 100%;};
  .payDesc{ font-size: 18px; margin-top: 10px;}
  .payMoney{ margin-top: 10px; }
}

</style>