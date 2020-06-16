<!--  -->
<template>
  <div class="head">
    <i v-if="headConfig.left" class="el-icon-arrow-left"
       @click="goBack"></i>
    <span class="title">{{ headConfig.text }}</span>
    <i v-if="headConfig.right" class="el-icon-user-solid personCenter"
       @click="personCenter"></i>
  </div>
</template>

<script>
//例如：import 《组件名称》 from '《组件路径》';

export default {
  props: {
    headConfig: {
      type: Object,
      default: {
        left: true,
        right: false,
        text: '',
      }
    }
  },
  components: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  methods: {
    goBack() {
      history.go(-1)
    }
  }
};
</script>
<style lang='less' scoped>
//@import url(); 引入公共css类
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
  /deep/ .personCenter {
    font-size: 60px;
    position: absolute;
    right: 20px;
    top: 10px;
  }
  /deep/ .el-icon-arrow-left {
    font-size: 60px;
    margin-top: 10px;
    margin-left: 20px;
    position: absolute;
    left: 0;
    top: 0;
  }
}
</style>