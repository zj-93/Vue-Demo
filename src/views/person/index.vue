<!--  -->
<template>
  <div class='person'>
    <div class="head">
      <i class="el-icon-arrow-left"
         @click="goBack"></i>
      <span class="title">个人中心</span>
    </div>
    <div class="person_base_info"
         v-if="signFlag">
      <div class="person_img">
        <img :src="personInfo.imgSrc"
             alt="">
      </div>
      <div class="person_info">
        <div class="person_info_title">{{ personInfo.nickName }}</div>
        <div class="person_info_growth">
          <span class="person_info_growth_title">成长值</span>
          <i>{{ personInfo.integral }}</i>
        </div>
      </div>
    </div>

    <div class="person_base_info"
         v-if="!signFlag">
      <div class="person_img">
        <span class="person_register">未登录</span>
      </div>
      <div class="person_info">
        <div class="person_info_title">
          <span class="signIn"
                @click="signIn">登录</span>
          /
          <span class="signUp"
                @click="signUp">注册</span>
        </div>
      </div>
    </div>

    <div class="person_menu_modul">
      <div class="person_menu_title">个人中心</div>
      <div class="person_menu_wrapper">
        <div class="person_menu_box"
             v-for="(item, index) in menuList"
             :key="index">
          <div class="person_menu_img">
            <img :src="item.imgSrc"
                 alt="">
          </div>
          <div class="person_menu_text">{{ item.menuName }}</div>
        </div>
      </div>
    </div>

    <input ref="camera"
           @change="upload_photo"
           class="js_upFile cover1"
           type="file"
           name="cover"
           accept="image/*"
           capture="camera"
           multiple />
  </div>
</template>

<script>
//例如：import 《组件名称》 from '《组件路径》';

import { getUserInfo, importPic } from "@/axios/sign.js";

// import  VConsole  from  'vconsole';
// var vConsole = new VConsole();

export default {
  components: {},
  data() {
    return {
      signFlag: false,
      menuList: [
        {
          imgSrc: "static/image/portrait/1.jpg",
          menuName: "待付款"
        },
        {
          imgSrc: "static/image/portrait/2.jpg",
          menuName: "待使用"
        },
        {
          imgSrc: "static/image/portrait/3.jpg",
          menuName: "待评价"
        },
        {
          imgSrc: "static/image/portrait/4.jpg",
          menuName: "退款/售后"
        }
      ],
      personInfo: {},
      cameraPic: {}
    };
  },
  computed: {},
  watch: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.getUserInfo();
  },
  methods: {
    goBack() {
      history.go(-1);
    },
    signIn() {
      this.$router.push({
        path: "/signIn",
        query: {
          type: "signIn"
        }
      });
    },
    signUp() {
      this.$router.push({
        path: "/signUp",
        query: {
          type: "signUp"
        }
      });
    },
    getUserInfo() {
      const userName = this.$cookie.getCookie("userName");
      if (userName) {
        getUserInfo({ userName: userName }).then(res => {
          this.signFlag = true;
          this.personInfo = res.data;
        });
      }
    },
    upload_photo() {
      var inputDOM = this.$refs.camera;
      var file = inputDOM.files;
      var formData = new FormData();
      for (let i = 0; i < file.length; i++) {
        formData.append("file", file[0]);
      }
      console.log(formData.get("file"), "formData");


      // importPic({formData: formData }).then(res => {
      //   console.log(res)
      // })
      this.$Ajax.post('http://172.16.80.46:3000/api/import', formData).then(res => {
        console.log(res);
      });
    }
  }
};
</script>
<style lang='less' scoped>
//@import url(); 引入公共css类
.person {
  background: #f9f9f9;
  height: 100vh;
  /deep/ .el-icon-arrow-left {
    font-size: 60px;
    margin-top: 10px;
    margin-left: 20px;
    position: absolute;
    left: 0;
    top: 0;
  }
  img {
    display: inline-block;
    width: 58px;
    height: 58px;
  }
  .head {
    display: block;
    width: 100%;
    height: 80px;
    background: #ffa743;
    text-align: center;
    line-height: 80px;
    color: #fff;
    .title {
      font-size: 36px;
    }
  }
  .person_base_info {
    display: flex;
    width: 100%;
    height: 280px;
    background-color: #fff;
    .person_img {
      display: inline-block;
      width: 160px;
      height: 160px;
      margin: 30px;
      img {
        display: block;
        width: 100%;
        height: 100%;
        border-radius: 200px;
      }
      .person_register {
        display: block;
        width: 100%;
        height: 100%;
        text-align: center;
        line-height: 160px;
        border-radius: 200px;
        background: #cfcfcf;
      }
    }
    .person_info {
      margin: 60px;
      .person_info_title {
        font-size: 36px;
        margin-bottom: 20px;
      }
      .person_info_growth {
        display: inline-block;
        background: #c9c9c9;
        padding: 10px 20px;
        border-radius: 50px;
      }
      .signUp {
        text-decoration: underline;
        color: blue;
      }
      .signIn {
        text-decoration: underline;
        color: blue;
      }
    }
  }
  .person_menu_modul {
    display: block;
    width: 100%;
    height: 240px;
    background: #fff;
    margin-top: 20px;
    .person_menu_title {
      display: inline-block;
      height: 60px;
      line-height: 60px;
      padding: 20px;
      font-weight: bolder;
    }
    .person_menu_wrapper {
      display: flex;
      .person_menu_box {
        flex: 1;
        text-align: center;
        .person_menu_img {
          text-align: center;
          margin-bottom: 15px;
        }
      }
    }
  }
}
</style>