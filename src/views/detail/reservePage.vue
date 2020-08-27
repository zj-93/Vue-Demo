<!--  -->
<template>
  <div class='reserve'>
    <div class="calendar">
      <nut-calendar :is-visible.sync="isVisible1"
                    :default-value="date1"
                    type="range"
                    :start-date="`2019-12-22`"
                    :end-date="`2021-01-08`"
                    @choose="setChooseValue1">
      </nut-calendar>
    </div>
      
  </div>
</template>

<script>
//例如：import 《组件名称》 from '《组件路径》';

export default {
  components: {},
  data() {
    return {
      isVisible1: false,
      date1: ['2019-12-23', '2019-12-26']
    };
  },
  computed: {},
  watch: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    // this.isVisible1 = true
  },
  methods: {
    setChooseValue1(param) {
      this.date1 = [...[param[0][3], param[1][3]]];
    }
  }
};
</script>
<style lang='less' scoped>
//@import url(); 引入公共css类
/deep/ .reserve{
  margin-top: 120px;
  .calendar{
    height: 600px;
  }
}
</style>