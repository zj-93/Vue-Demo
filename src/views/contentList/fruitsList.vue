<!--  -->
<template>
  <div class='imgBox'>
    <div class="imgWrapper" v-for="(item, index) in imageList" :key="index">
      <img class="img" :src="item.fileAccept" alt="">
    </div>

    <div class="uploadWrap">
       <el-upload class="avatar-uploader"
                action="http://172.16.80.46:3000/api/import"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload">
        <img v-if="imageUrl"
            :src="imageUrl"
            class="avatar">
        <i v-else
          class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>

      <input ref="camera" class="js_upFile cover1" type="file" name="cover" accept="image/*" multiple/>
    </div>
  </div>
</template>

<script>
//例如：import 《组件名称》 from '《组件路径》';
import { getImgList } from '@/axios/fruitsList.js';


export default {
  components: {},
  data() {
    //这里存放数据
    return {
      imageUrl: "",
      fileList: [],
      imageList: []
    };
  },
  watch: {},
  created() {},
  mounted() {
    this.getImgList()
    this.init()

    //获取浏览器的userAgent,并转化为小写
    var ua = navigator.userAgent.toLowerCase();
    //判断是否是苹果手机，是则是true
    var isIos = (ua.indexOf('iphone') != -1) || (ua.indexOf('ipad') != -1);
    // if (isIos) {
    //     this.$refs.camera.removeAttr("capture");
    // };
  },
  methods: {
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
      this.getImgList()
    },
    getImgList() {
      getImgList().then(res => {
        if(res.code == 200) {
          this.imageList = res.data
        }
        console.log(res)
      }) 
    },
    beforeAvatarUpload(file) {
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isLt2M;
    },
    init() {
      let result = Math.random();
      console.log(result);
    },
    
  }
};
</script>
<style lang='less'>
//@import url(); 引入公共css类
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
.imgBox{
  background: #fff;
  padding: 10px;
  box-sizing: border-box;
}
.imgWrapper{
  display: inline-block;
  margin-right: 20px;
  margin-bottom: 20px;
  border: 2px solid #ccc;
  width: 122px;
  height: 122px;
}
.img{
  display: inline-block;
  width: 100%;
  height: 100%;
}
</style>