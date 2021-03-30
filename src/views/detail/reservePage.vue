<!--  -->
<template>
  <div class='reserve'>
    <div class="calendar">
      <nut-calendar :is-visible.sync="isVisible1"
                    :default-value="date1"
                    type="range"
                    :start-date="startTime"
                    :end-date="endTime"
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
      date1: ['2019-12-23', '2019-12-26'],
      startTime: '',
      endTime: ''
    };
  },
  computed: {},
  watch: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    let date = new Date()
    let year = date.getFullYear()
    let month = date.getMonth() + 1
    let day = date.getDate()
    this.date1= [`${year}-${month}-${day}`, `${year}-${month}-${day}`],
    this.startTime = `${year}-${month}-${day}`
    this.endTime = `${year + 1}-${month}-${day}`

  },
  methods: {
    setChooseValue1(param) {
      this.date1 = [...[param[0][3], param[1][3]]];
      this.$emit('chooseTime', this.date1)
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