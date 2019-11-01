<template>
  <div class="detail">
    <header>
      <div class="backBoder" @click="goBack">
        <i class="el-icon-back"/>
      </div>
    </header>
    <banner-img />
    <table cellpadding="0" cellspacing="0">
      <tr>
        <th>name</th>
        <th>code</th>
        <th>grand</th>
      </tr>
      <tr v-for="(item, index) in tableList" :key="index">
        <td :id="item.colspanNum" :rowspan="item.colspanNum" v-show="item.disPlay">{{ item.name }}</td>
        <td>{{ item.code }}</td>
        <td>{{ item.grand }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import Swiper from 'swiper'
import bannerImg from '@/views/bannerImg/banner.vue'
import { getFoodList } from "@/axios/food.js"
import { throws } from 'assert';

export default {
  components: {
    bannerImg
  },
  data () {
    return {
      list: [{
        name: '123',
        code: 'abc',
        grand: 456
      },{
        name: '123',
        code: 'cbd',
        grand: 456
      },{
        name: '123',
        code: 'afc',
        grand: 456
      },{
        name: '123',
        code: 'god',
        grand: 456
      },{
        name: '456',
        code: 123,
        grand: 456
      },{
        name: '456',
        code: 123,
        grand: 456
      },{
        name: '789',
        code: 123,
        grand: 456
      }],
      tableList: []
    }
  },
  created() {
      
  },
  mounted() {
    let k = 0
    let j = 0
    let l = 1
    this.listFor(k, j, l)
  },
  methods: {
      goBack() {
        history.go(-1)
      },
      listFor(k, j, l){
        if(k < this.list.length) {
            if(this.list[j].name === this.list[k].name) {
              this.list[k].colspanNum = 1
              this.list[k].disPlay = false
              this.list[j].disPlay = true
              this.list[j].colspanNum = l
              k++
              l++
              this.listFor(k, j, l)
            } else {
              j = k
              l = 1
              this.listFor(k, j, l)
            }
        } else {
          this.tableList = this.list
          return false
        }
      }
  }
}

</script>
<style lang='less'>
.backBoder{
  padding: 15px;
  border-radius: 100px;
  display: inline-block;
  border: 1px solid #d6d6d6;
  position: absolute;
  top: 15px;
  left: 15px;
  z-index: 999;
  background-color: rgba(0,0,0,0.3);
  cursor: pointer;
  i{
    color: #fff
  }
}
.detail{
  table{
    border: 1px solid #ccc;
    border-bottom: none;
    border-left: none;
    margin-left: 40px;
  }
  td, th{
    width: 200px;
    height: 30px;
    border-left: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    text-align: center;
  }
}
</style>