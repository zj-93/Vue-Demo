<!--  -->
<template>
  <div class='realNameAuth'>
    <HeadIndex :headConfig="headConfig" />
    <div class="content">
      <nut-textinput v-model="info.realName"
                     label="姓名:"
                     placeholder="请输入姓名"
                     :clearBtn="true"
                     :disabled="false" />
      <nut-textinput v-model="info.realCardId"
                     type="number"
                     label="身份证号:"
                     placeholder="请输入身份证号"
                     :clearBtn="true"
                     :disabled="false" />
    </div>
    <div class="footer">
      <nut-button block
                  @click.native="submit">
        提交
      </nut-button>
    </div>
  </div>
</template>

<script>
//例如：import 《组件名称》 from '《组件路径》';
import { realRegister } from "@/axios/personCenter.js";

export default {
  components: {},
  data() {
    return {
      headConfig: {
        left: true,
        right: false,
        text: "实名认证"
      },
      info: {
        realName: "",
        realCardId: ""
      }
    };
  },
  computed: {},
  watch: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  methods: {
    submit() {
      const userName = this.$cookie.getCookie("userName");
      let data = {
        userName: userName,
        ...this.info
      };
      realRegister(data).then(res => {
        if (res.code == 200) {
          this.$message.success(res.msg);
          this.$router.push({
            path: "/personCenter"
          });
        }
      });
    }
  }
};
</script>
<style lang='less' scoped>
//@import url(); 引入公共css类
.content {
  background: #fff;
  padding: 20px;
  box-sizing: border-box;
  /deep/ .nut-textinput {
    margin-bottom: 20px;
    font-size: 32px;
    .nut-textinput-label {
      display: inline-block;
      width: 150px;
      text-align: right;
      margin-right: 20px;
    }
  }
}
.footer {
  display: block;
  width: 90%;
  position: absolute;
  bottom: 0;
  left: 5%;
  /deep/ .nut-button {
    background: #ffa743;
  }
}
</style>