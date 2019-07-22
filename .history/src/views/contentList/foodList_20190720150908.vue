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
export default {
  props: {
    contentList: {
      type: Array,
      default: ()=> []
    }
  },
  data () {
    return {
      list: []
    };
  },
  computed: {
    scrollState() {
      return this.$store.state.common.scrollState
    }
  },
  watch: {
    contentList(val) {
      if(val.length>0){
        this.list = val
      }
    }
  },
  created() {
    this.list = list
  },
  mounted() {
    setTimeout(() => {
      console.log(this.contentList, 'mounted')
    },300)
  },
  methods: {
    jumpDetail(id) {
      this.$router.push({name: 'detail', params: {id: id}})
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