<!--  -->
<template>
  <div class='sign'>
    <div class="head">
      <i class="el-icon-arrow-left"
         @click="goBack"></i>
      <span class="title">登录</span>
    </div>

    <div class="formData">
      <div class="logo" />

      <div class="signForm">
        <el-form :model="form">
          <el-form-item label="用户名">
            <el-input v-model="form.userName"
                      autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input v-model="form.passWord"
                      autocomplete="off"
                      show-password></el-input>
          </el-form-item>
        </el-form>
        <div class="footer">
          <div class="signBtn"
               @click="signIn">登录</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//例如：import 《组件名称》 from '《组件路径》';
import { signIn } from "@/axios/sign.js";

export default {
  components: {},
  data() {
    return {
      form: {
        userName: "",
        passWord: ""
      }
    };
  },
  computed: {},
  watch: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
  },
  methods: {
    goBack() {
      history.go(-1);
    },
    signIn() {
      signIn(this.form).then(res => {
        if (res.code == 200) {
          this.$router.push({
            path: '/person'
          })
          const userName = res.data.userName
          this.$cookie.setCookie('userName', userName, 1)
        } else {
          this.$message.error(res.msg);
        }
      });
    }
  }
};
</script>
<style lang='less' scoped>
//@import url(); 引入公共css类
.sign {
  background: rgb(245, 242, 238);
  height: 100vh;
  /deep/ .el-icon-arrow-left {
    font-size: 60px;
    margin-top: 10px;
    margin-left: 20px;
    position: absolute;
    left: 0;
    top: 0;
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
  .logo {
    display: inline-block;
    width: 300px;
    height: 300px;
    background-image: url("/static/image/logo/logo.png");
    background-position: 0 0;
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
  .formData {
    text-align: center;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    /deep/ .el-form-item__label {
      display: block;
      width: 100%;
      margin-bottom: 20px;
      text-align: center;
    }
  }
  .signForm {
    width: 600px;
    height: 500px;
    margin-top: 50px;
    /deep/ .el-input__inner {
      width: 500px;
      border: 1px solid #ccc;
      height: 100px;
      line-height: 100px;
    }
  }
  .footer {
    margin-top: 60px;
    .signBtn {
      display: inline-block;
      border: 1px solid #ccc;
      padding: 30px 120px;
      background-color: #409eff;
      color: #fff;
    }
  }
}
</style>