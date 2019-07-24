<template>
  <div class="errPage-container">
    <el-button icon="arrow-left" class="pan-back-btn" @click="back">返回</el-button>
    <el-row>
      <el-col :span="24">
        <h2>你访问的页面不存在</h2>
        <ul class="list-unstyled">
          <li>或者你可以去:</li>
          <li class="link-type"><a href="https://www.taobao.com/">随便看看</a></li>
          <li><a href="#" @click.prevent="dialogVisible=true">点我看图</a></li>
        </ul>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <img :src="errGif" width="313" height="428" alt="Girl has dropped her ice cream.">
      </el-col>
    </el-row>
    <el-dialog :visible.sync="dialogVisible" title="随便看">
      <img :src="ewizardClap" class="pan-img">
    </el-dialog>
  </div>
</template>

<script>
import errGif from '@/assets/401_images/401.gif'

export default {
  name: 'Page401',
  data() {
    return {
      errGif: errGif + '?' + +new Date(),
      ewizardClap: 'https://wpimg.wallstcn.com/007ef517-bafd-4066-aae4-6883632d9646',
      dialogVisible: false
    }
  },
  methods: {
    back() {
      console.log(11111111111)
      history.go(-1)
    }
  }
}
</script>

<style lang="less" scoped>
  .errPage-container {
    width: 100%;
    height: 100vh;
    margin: auto;
    text-align: center;
    .pan-back-btn {
      background: #008489;
      margin: 50px;
      float: left;
      color: #fff;
      border: none!important;
      position: relative;
      z-index: 11111111;
      cursor: pointer;
    }
    .pan-gif {
      margin: 0 auto;
      display: block;
    }
    .pan-img {
      display: block;
      margin: 0 auto;
      width: 100%;
    }
    .text-jumbo {
      font-size: 60px;
      font-weight: 700;
      color: #484848;
    }
    .list-unstyled {
      font-size: 14px;
      li {
        padding-bottom: 5px;
      }
      a {
        color: #008489;
        text-decoration: none;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
</style>
