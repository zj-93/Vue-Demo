<template>
  <div class="content">
      <div class="viewList" v-for="(item, index) in list" :key="index" @click="jumpDetail(item.id)">
        <span class="imgArea">
          <img :src="item.img" alt="">
        </span>
        <div class="textArea">
          <h2 class="title">{{item.name}}</h2>
          <p class="desc">{{item.desc}}</p>
          <div class="product_tag">
            <span class="way" v-for="(ele, index) in item.way" :key="index">{{ele}}</span>
          </div>
          <div class="product_price">
            <span class="price"><i class="num">￥{{item.price}}</i> 元起</span>
          </div>
        </div>
      </div>
      <div class="footer" v-if="scrollState=='1'">加载中...</div>
      <div class="footer" v-if="scrollState=='2'">我也是有底线的</div>
  </div>
</template>

<script>
import list from "@/views/json/list3.json"
import { setTimeout } from 'timers';
import { getFoodList } from "@/axios/food.js"
export default {
  data () {
    return {
      list: [],
      scrollState: this.$store.state.common.scrollState,
      flag: true,
      contentList: []
    };
  },
  computed: {
    // scrollState() {
    //   return this.$store.state.common.scrollState
    // },
    scrollFlag() {
      return this.$store.state.common.scrollFlag
    }
  },
  watch: {
    scrollFlag(val) {
      // debugger
      if(val) {
        this.queryContentListData()
        this.$store.dispatch('changeScrollFlag', false)
      }
    }
  },
  created() {
    this.list = list
    this.getList()
  },
  mounted() {
    console.log(list, 'scrollFlag')
    this.contentList = list
    console.log(this.scrollFlag, 'scrollFlag')
    setTimeout(() => {
      console.log(this.contentList, 'mounted')
    },300)
  },
  methods: {
    queryContentListData() {
      this.scrollState = '1'
      // this.list = []
      var i = Math.floor(Math.random())
      if(i>1){
        // this.queryContentListData()
      }else if(i <= 1){
        if(i== 1) {
          this.$store.dispatch('changeScrollState', '1')
          this.list.push(this.contentList)
          setTimeout(() => {
            this.$store.dispatch('changeScrollState', '2')
          },500)
        }else{
          this.list.push(this.contentList)
          this.$store.dispatch('changeScrollState', '2')
        }
      }
      this.$message({
        message: '请求数据',
        type: 'success'
      })
    },
    jumpDetail(id) {
      this.$router.push({name: 'detail', params: {id: id}})
    },
    getList(){
      const data = {
        code: 'food'
      }
      getFoodList(data).then((respone) => {
        console.log(respone)
      }).catch(error => {
        console.log(error)
      })
    }
  }
}

</script>
<style lang='less'>
.content{
    background-color: #fff;
    .viewList{
      padding: 20px 20px;
      display: block;
      height: 175px;
      overflow: hidden;
      border-bottom: 1px solid #c9c9c9;
      position: relative;
      .imgArea{
        float: left;
        display: inline-block;
        width: 280px;
        margin-right: 20px;
        img{
          width: 280px;
          height: 160px;
        }
      }
      .textArea{
        display: inline-block;
        width: calc(100% - 20px);
        height: 100%;
        margin-left: 20px;
        padding: 20px 20px 20px 300px;
        box-sizing: border-box;
        position: absolute;
        top: 0;
        left: 0;
        word-break: break-all;
        .title{
          font-size: 20px;
          color: #222;
          height: 60px;
          line-height: 30px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          box-sizing: border-box;
          margin-bottom: 10px;
        }
        .desc{
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          font-size: 12px;
          color: #999;
          margin-bottom: 20px;
        }
        .product_tag{
          width: 240px;
          display: inline-block;
          overflow: hidden;
          height: 40px;
          .way{
            float: left;
            height: 40px;
            margin-bottom: 5px;
            border: 1px solid #d8d8d8;
            line-height: 30px;
            background-color: #f6f6f6;
            padding: 5px;
            box-sizing: border-box;
            margin-right: 10px;
          }
        }
        .product_price{
          display: inline-block;
          float: right;
          .price{
            .num{
              font-size: 30px;
              color: #ff6913;
            }
          }
        }
      }
    }
    .footer{
      text-align: center;
      margin: 20px 0;
      color: #ccc;
    }
}
</style>