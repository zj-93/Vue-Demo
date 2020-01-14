<template>
  <div id="index" class="index" @touchstart="start" @touchmove="move" @touchend="end">
    <div class="login">
      <span @click="signIn">登陆</span>
      <span @click="signUp">注册</span>
    </div>
    <banner-img />
    <top-menu @changeMenu="changeMenu" />
    <recommended-list />
    <!-- <content-list :scroll-state="scrollState" :content-list="contentList" /> -->
    <router-view />
    
    <el-dialog title="注册" :visible.sync="dialogFormVisible">
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
        <el-button type="primary" @click="sure">注 册</el-button>
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
      scrollState: "0",
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
    var _this = this;
    var arr = [0];
    setTimeout(() => {
      window.addEventListener("scroll", function(e) {
        var BodyH = document.body.clientHeight;
        var viewH = window.screen.height;
        var scrollH =
          document.documentElement.scrollTop || document.body.scrollTop;
        arr.push(scrollH);
        console.log(BodyH - viewH - scrollH);
        if (BodyH - viewH - scrollH <= "0" && arr[1] - arr[0] > 0) {
          // _this.scrollState = '1'
          _this.$store.dispatch("changeScrollState", "1");
          _this.$store.dispatch("changeScrollFlag", true);
        }
        arr = [arr[1]];
      });
    }, 300);
  },
  methods: {
    signUp() {
      this.flag = false;
      this.dialogFormVisible = true;
    },
    sure() {
      if (this.flag) {
        signIn(this.form).then(res => {
          if (res.code == 200) {
            this.$message.success(res.msg);
          } else {
            this.$message.error(res.msg);
          }
        });
      } else {
        signUp(this.form).then(res => {
          if (res.code == 200) {
            this.$message.success(res.msg);
          } else {
            this.$message.error(res.msg);
          }
        });
      }
    },
    signIn() {
      this.dialogFormVisible = true;
      this.flag = true;
    },
    start() {
      console.log("移动开始");
    },
    move() {
      console.log("移动中");
    },
    end() {
      console.log("移动结束");
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
  position: absolute;
  top: 0;
  right: 0;
  text-decoration: underline;
  color: blue;
  z-index: 999;
  cursor: pointer;
}
</style>