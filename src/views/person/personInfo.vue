<!-- 个人信息 -->
<template>
  <div class='personInfo'>
    <HeadIndex :headConfig="headConfig" />
    <div>
      <nut-cell :is-link="true"
                :show-icon="true">
        <span slot="title">头像</span>
        <nut-avatar bg-icon
                    slot="desc"
                    bg-image='/static/image/portrait/1.jpg'></nut-avatar>
      </nut-cell>
      <nut-cell :is-link="true"
                :show-icon="true">
        <span slot="title">用户名</span>
        <span slot="icon">adsdadas</span>
      </nut-cell>
      <nut-cell :is-link="true"
                :show-icon="true">
        <span slot="title">昵称</span>
        <span slot="desc">会飞的牛</span>
      </nut-cell>

      <nut-cell :show-icon="true"
                :is-link="true"
                @click-cell="clickSex">
        <span slot="title">性别</span>
        <span slot="desc">{{ info.sex }}</span>
      </nut-cell>

      <nut-cell :show-icon="true"
                :is-link="true"
                @click-cell="clickBirth">
        <span slot="title">出生日期</span>
        <span slot="desc">{{ info.birthDate }}</span>
      </nut-cell>

    </div>

    <nut-datepicker :is-visible="pickerDialog"
                    title="请选择日期"
                    type="date"
                    @close="clickBirth"
                    @choose="setBirth" />

    <nut-actionsheet :is-visible="isVisible"
                     @close="clickSex"
                     :menu-items="menuItems"
                     @choose="chooseItem" />
  </div>
</template>

<script>
//例如：import 《组件名称》 from '《组件路径》';

export default {
  components: {},
  data() {
    return {
      headConfig: {
        left: true,
        right: false,
        text: "个人信息"
      },
      info: {
        sex: "请选择",
        birthDate: '请选择'
      },
      isVisible: false,
      menuItems: [
        {
          name: "男",
          value: 0
        },
        {
          name: "女",
          value: 1
        }
      ],
      pickerDialog: false,
    };
  },
  computed: {},
  watch: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  methods: {
    clickSex() {
      this.isVisible = !this.isVisible;
    },
    chooseItem(itemParams) {
      console.log(itemParams)
      this.info.sex = itemParams.name;
      this.isVisible = this.isVisible;
    },
    clickBirth() {
      this.pickerDialog = !this.pickerDialog;
    },
    setBirth(param) {
      console.log(param)
      this.info.birthDate = param[3];
      this.pickerDialog = this.pickerDialog;
    },
  }
};
</script>
<style lang='less' scoped>
//@import url(); 引入公共css类
</style>