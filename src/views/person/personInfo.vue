<!-- 个人信息 -->
<template>
  <div class='personInfo'>
    <HeadIndex :headConfig="headConfig">
    </HeadIndex>
    <div>
      <nut-cell :is-link="true"
                :show-icon="true"
                @click-cell="clickImg">
        <span slot="title">头像</span>
        <nut-avatar bg-icon
                    slot="desc">
          <img class="userIcon"
               :src="info.imgSrc" />
        </nut-avatar>
      </nut-cell>
      <nut-cell :is-link="true"
                :show-icon="true">
        <span slot="title">用户名</span>
        <span slot="icon">{{ info.userName }}</span>
      </nut-cell>
      <nut-cell :is-link="true"
                :show-icon="true"
                @click-cell="clickNickName">
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
                    startDate="1991-1-1"
                    @close="clickBirth"
                    @choose="setBirth">
    </nut-datepicker>

    <nut-actionsheet :is-visible="isVisible"
                     @close="clickSex"
                     :menu-items="menuItems"
                     @choose="chooseItem" />

    <nut-dialog title="昵称修改"
                :visible="dialogShow"
                @ok-btn-click="nickNameModify"
                @cancel-btn-click="nickNameCancel"
                @close="dialogShow=false">
      <nut-textinput v-model="info.nickName"
                     placeholder="请输入昵称"
                     :clearBtn="true"
                     :disabled="false" />
    </nut-dialog>

    <input ref="camera"
           @change="upload_photo"
           class="js_upFile cover1"
           type="file"
           name="cover"
           accept="image/*"
           capture="camera" />

  </div>
</template>

<script>
//例如：import 《组件名称》 from '《组件路径》';
import { updateUserInfo, importPhoto } from "@/axios/personCenter.js";

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
      tempNickName: "",
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
      dialogShow: false
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
    upload_photo() {
      var inputDOM = this.$refs.camera;
      var file = inputDOM.files;
      var formData = new FormData();
      for (let i = 0; i < file.length; i++) {
        formData.append("file", file[0]);
      }
      importPhoto(formData).then(res => {
        if (res.code == 200) {
          this.$set(this.info, "imgSrc", res.data.fileAccept);
          let data = {
            imgSrc: res.data.fileAccept
          };
          this.updateInfo(data);
        }
      });
    },
    clickImg() {
      this.$refs.camera.click();
    },
    clickSex() {
      this.isVisible = !this.isVisible;
    },
    chooseItem(itemParams) {
      this.info.sex = itemParams.name;
      this.isVisible = this.isVisible;
      const data = {
        sex: itemParams.name
      };
      this.updateInfo(data);
    },
    clickBirth() {
      this.pickerDialog = !this.pickerDialog;
    },
    setBirth(param) {
      this.info.birthDate = param[3];
      this.pickerDialog = this.pickerDialog;
      const data = {
        birthday: param[3]
      };
      this.updateInfo(data);
    },
    clickNickName() {
      this.tempNickName = this.info.nickName;
      this.dialogShow = true;
    },
    nickNameModify() {
      const data = {
        nickName: this.info.nickName
      };
      this.updateInfo(data);
    },
    nickNameCancel() {
      this.info.nickName = this.tempNickName;
      this.dialogShow = false;
    },
    updateInfo(data) {
      let params = {
        ...data,
        userName: this.info.userName
      };
      updateUserInfo(params).then(res => {
        if (res.code == 200) {
          this.$message.success(res.msg);
          this.dialogShow = false;
        }
      });
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
.cover1 {
  display: none;
}
</style>