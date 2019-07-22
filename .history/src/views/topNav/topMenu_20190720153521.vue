<template>
  <div class="menu">
      <div class="menuList">
        <div class="ul">
          <span class="li" v-for="(item, index) in menuList" :key="index" @click="menuJump(item)">
            <i :class="item.icon"></i>
            <span class="menuName">{{item.name}}</span>
          </span>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'sss',
  data () {
    return {
        menuList: [{
          icon: 'icon1',
          name: '美食',
          code: 'food'
        },{
          icon: 'icon4',
          name: '饮品',
          code: 'drink'
        },{
          icon: 'icon3',
          name: '水果',
          code: 'fruits'
        },{
          icon: 'icon2',
          name: '旅游',
          code: 'travel'
        }]
    };
  },
  methods: {
    menuJump(item) {
      console.log(this.$router, item.name, item.code)
      this.$emit('changeMenu', item.code)
      this.$router.push({path: item.code})
    }
  }
}

</script>
<style lang='less' scoped>
  .menu{
      padding-bottom: 20px;
      padding-top: 20px;
      box-sizing: border-box;
      background-color: #fff;
      border-top: 1px solid #ccc;
      margin-bottom: 20px;
    .ul{
      display: flex;
      .li{
        display: inline-block;
        flex: 1;
        text-align: center;
        .icon1{
          display: inline-block;
          height: 60px;
          width: 60px;
          background-image: url('~@/assets/img/icon1.png');
          background-repeat: repeat;
          background-position: center center;
          background-size: cover;
        }
        .icon2{
          display: inline-block;
          height: 60px;
          width: 60px;
          background-image: url('~@/assets/img/icon2.png');
          background-repeat: repeat;
          background-position: center center;
          background-size: cover;
        }
        .icon3{
          display: inline-block;
          height: 60px;
          width: 60px;
          background-image: url('~@/assets/img/icon3.png');
          background-repeat: repeat;
          background-position: center center;
          background-size: cover;
        }
        .icon4{
          display: inline-block;
          height: 60px;
          width: 60px;
          background-image: url('~@/assets/img/icon4.png');
          background-repeat: repeat;
          background-position: center center;
          background-size: cover;
        }
        .menuName{
          display: block;
          text-align: center;
        }
      }
    }
  }
</style>