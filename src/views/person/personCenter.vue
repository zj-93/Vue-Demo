<!-- 个人中心 -->
<template>
  <div class='personCenters'>
    <HeadIndex :headConfig="headConfig" />
    <div>
      <nut-cell :is-link="true"
                to="/personInfo"
                @click-cell="clickEvnt"
                :show-icon="true"
                title="个人信息">
      </nut-cell>
      <div class="exit">
        <nut-button block @click.native="exit">
          退出登录
        </nut-button>
      </div>
    </div>
  </div>
</template>

<script>
//例如：import 《组件名称》 from '《组件路径》';
export default {
  components: {
  },
  data() {
    return {
      headConfig: {
        left: true,
        right: false,
        text: "设置"
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
    clickEvnt() {
      console.log(1111111)
    },
    exit() {
      this.$cookie.removeCookie('userName')
      this.$router.push({
        path: "/person"
      });
    }
  }
};
</script>
<style lang='less' scoped>
//@import url(); 引入公共css类
.exit {
  display: block;
  width: 90%;
  position: absolute;
  bottom: 0;
  left: 5%;
  /deep/ .nut-button{
    background: #ffa743;
  }
}
</style>