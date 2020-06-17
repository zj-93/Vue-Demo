<!-- 个人信息 -->
<template>
  <div class='personInfo'>
    <HeadIndex :headConfig="headConfig">
      <i class="edit"
         slot="langTitle"
         @click="editInfo">修改</i>
    </HeadIndex>
    <div>
      <nut-cell :is-link="true"
                :show-icon="true">
        <span slot="title">头像</span>
        <nut-avatar bg-icon
                    slot="desc">
          <img class="userIcon"
               :src="info.imgSrc" /></nut-avatar>
      </nut-cell>
      <nut-cell :is-link="true"
                :show-icon="true">
        <span slot="title">用户名</span>
        <span slot="icon">{{ info.userName }}</span>
      </nut-cell>
      <nut-cell :is-link="true"
                :show-icon="true">
        <span slot="title">昵称</span>
        <span slot="desc">{{ info.nickName }}</span>
      </nut-cell>

      <nut-cell :show-icon="true"
                :is-link="true"
                @click-cell="clickSex">
        <span slot="title">性别</span>
        <span slot="desc">{{ info.sex }}</span>
      </nut-cell>

      <nut-cell :show-icon="true"
                :is-link="true"
                disabled
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
        Rtext: "修改",
        text: "个人信息"
      },
      info: {
        imgSrc: "",
        userName: "",
        nickName: "",
        sex: "请选择",
        birthDate: "请选择"
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
      pickerDialog: false
    };
  },
  computed: {},
  watch: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    const userName = this.$cookie.getCookie("userName");
    if (userName) {
      this.$store.dispatch("GetUserInfo", { user: userName }).then(
        res => {
          if (res.code == 200) {
            this.info.imgSrc = res.data.imgSrc;
            this.info.userName = res.data.userName;
            this.info.nickName = res.data.nickName;
            this.info.sex = res.data.sex;
            this.info.birthDate = res.data.birthday;
          }
        },
        err => {
          console.log(err);
        }
      );
    } else {
      this.signFlag = false;
    }
  },
  methods: {
    editInfo() {
      console.log(111);
    },
    clickSex() {
      this.isVisible = !this.isVisible;
    },
    chooseItem(itemParams) {
      this.info.sex = itemParams.name;
      this.isVisible = this.isVisible;
    },
    clickBirth() {
      this.pickerDialog = !this.pickerDialog;
    },
    setBirth(param) {
      this.info.birthDate = param[3];
      this.pickerDialog = this.pickerDialog;
    }
  }
};
</script>
<style lang='less' scoped>
//@import url(); 引入公共css类
/deep/ .userIcon {
  display: block;
  width: 100%;
  height: 100%;
}
.edit {
  position: absolute;
  right: 20px;
  top: auto;
}
</style>