<template>
  <div id="index" class="index">
    <div class="login">
      <span class="portrait">
        <img @click="jumpPerson" class="portraitBox" :src="portraitSrc" alt="">
      </span>
      <!-- <span @click="signIn">登陆</span>
      <span @click="signUp">注册</span> -->
    </div>
    <banner-img />
    <top-menu @changeMenu="changeMenu" />
    <recommended-list />
    <!-- <content-list :scroll-state="scrollState" :content-list="contentList" /> -->
    <router-view />
    
    <el-dialog :title="btnName" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="用户名">
          <el-input v-model="form.userName" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.passWord" autocomplete="off" show-password></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary">{{ btnName }}</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import list from "@/views/json/list2.json";
import bannerImg from "@/views/bannerImg/banner.vue";
import topMenu from "@/views/topNav/topMenu.vue";
// import contentList from '@/views/contentList/contentList.vue'
import recommendedList from "@/views/recommended/recommendedList.vue";
import { setTimeout } from "timers";
import { signUp, signIn } from "@/axios/sign.js";

export default {
  components: {
    topMenu,
    bannerImg,
    recommendedList
  },
  data() {
    return {
      portraitSrc: 'static/image/portrait/1.jpg',
      scrollState: "0",
      btnName: '注册',
      flag: true,
      contentList: [],
      list: [],
      dialogFormVisible: false,
      form: {
        userName: "",
        passWord: ""
      }
    };
  },
  mounted() {
    this.list = list;
  },
  methods: {
    jumpPerson() {
      this.$router.push({
        path: '/person'
      })
    },
    changeMenu(item) {
      const data = {
        menuCode: item
      };
    }
  }
};
</script>
<style lang='less' scoped>
.login {
  position: fixed;
  top: 0;
  right: 0;
  display: block;
  width: 100%;
  height: 80px;
  background: #FFA743;
  text-decoration: underline;
  color: blue;
  z-index: 999;
  cursor: pointer;
  .portraitBox{
    display: block;
    width: 60px;
    height: 60px;
    border-radius: 60px;
    float: right;
    margin: 5px 10px;
  }
}
/deep/ .el-dialog{
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  margin-top: 0!important;
}
</style>