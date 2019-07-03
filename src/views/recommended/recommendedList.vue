<template>
  <div class="recommended">
    <icon name="icon1" scale="20"></icon>
    <span class="dayRecommended">今日推荐</span>
    <div class="recommendedList">
      <div class="swiper-container swiper-container2">
        <div class="swiper-wrapper">
            <div v-for="(item, index) in recommendedList" :key="index" class="swiper-slide">
              <span>
                <span :class="item.level" class="recommendedLevel" v-text="item.level==='height'?'强推':'推荐'"></span>
                <span :id="item.id" class="recommendedName">{{item.value}}</span>
              </span>  
            </div>
        </div>
      </div>  
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'

export default {
  name: 'recommendedList',
  data () {
    return {
      id: '',
      recommendedList: [{
            id: '00001',
            level: 'height',
            value: '云南昆明+大理+丽江+洱海6日5晚跟团游'
        },{
            id: '00002',
            level: 'normal',
            value: '香港4日自由行'
        },{
            id: '00003',
            level: 'height',
            value: '三亚5日自由行(5钻)'
        },{
            id: '00004',
            level: 'height',
            value: '日本北海道5日4晚跟团游(3钻)'
        },{
            id: '00005',
            level: 'normal',
            value: '厦门4日自由行(5钻)'
        }]
    };
  },
  mounted() {
    var _this = this
    new Swiper('.swiper-container2',{
      // autoplay: false,
      autoplay: {
        delay: 4000,
        stopOnLastSlide: false,
        disableOnInteraction: true,
      },
      speed: 600,
      loop : true,
      autoHeight: true,
      height: 40,
      direction : 'vertical',
      on:{
        click: function(parms){
          _this.id = parms.path[0].id
          console.log( _this.id)
        }
      }
    })
  },
  methods: {

  }
}

</script>
<style lang='less'>
.recommended{
  background-color: #fff;
  margin-bottom: 20px;
  padding: 20px;
  .svg-icon{
    display: inline-block;
    width: 80px;
    height: 80px;
    color: red;
    vertical-align: middle;
  }
  .dayRecommended{
    display: inline-block;
    vertical-align: middle;
    font-size: 36px;
    font-weight: bolder;
    font-style: oblique;
    // text-shadow: 8px 10px 3px #ccc;
  }
  .recommendedList{
    display: inline-block;
    height: 80px;
    overflow: hidden;
    vertical-align: middle;
    line-height: 80px;
    margin-left: 20px;
    .swiper-container{
      display: inline-block;
      vertical-align: middle;
    }
  }
  .recommendedName{
    display: inline-block;
    width: 350px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    line-height: initial;
    vertical-align: middle;
    padding: 5px;
  }
  .recommendedLevel{
    display: inline-block;
    padding: 5px;
    line-height: initial;
    vertical-align: middle;
  }
  .height{
    background-color: rgb(245, 237, 237);
    color: rgb(248, 153, 153);
  }
  .normal{
    background-color: rgb(237, 248, 237);
    color: green;
  }
}
</style>