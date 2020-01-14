<!--  -->
<template>
  <div class=''>
    <div class="imgWrap" v-for="(item, index) in imageList" :key="index">
      <img :src="item.path" alt="">
    </div>

    <el-upload class="avatar-uploader"
               action="http://172.16.80.36:3000/api/import"
               :show-file-list="false"
               :on-success="handleAvatarSuccess"
               :before-upload="beforeAvatarUpload">
      <img v-if="imageUrl"
           :src="imageUrl"
           class="avatar">
      <i v-else
         class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
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
  },
  methods: {
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
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
</style>