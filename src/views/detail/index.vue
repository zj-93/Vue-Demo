<template>
  <div class="detail">
    <header>
      <div class="backBoder"
           @click="goBack">
        <i class="el-icon-back" />
      </div>
    </header>
    <div class="imgClass">
      <el-carousel height="25vh">
        <el-carousel-item v-for="(item,index) in dataDetail.img"
                          :key="index">
          <img :src="item.url"
               alt="">
        </el-carousel-item>
      </el-carousel>

      <div class="nameClass">
        <span>{{dataDetail.variety}} · {{dataDetail.way}}</span>
        <span class="numClass">产品编码：{{dataDetail.id}}</span>
      </div>
    </div>
    <div class="priceClass">
      <span class="numClass">￥{{dataDetail.price}}</span> <i>起</i>
    </div>

    <div class="">

    </div>

    <el-collapse v-model="activeNames"
                 @change="handleChange"
                 accordion>
      <el-collapse-item title="费用说明"
                        name="1">
        <div v-for="(item, index) in dataDetail.desc"
             :key="index">
             <div class="subTitle">{{item.subTitle}}</div>
             <div>{{ item.content }}</div>
        </div>
      </el-collapse-item>
      <el-collapse-item title="温馨提示"
                        name="2">
        <div>{{ dataDetail.warning }}</div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
import { getTravelDeatil } from "@/axios/food.js";

export default {
  data() {
    return {
      dataDetail: {},
      activeNames: []
    };
  },
  created() {},
  mounted() {
    this.id = this.$route.query.id;
    this.getDetailById();
  },
  methods: {
    goBack() {
      history.go(-1);
    },
    handleChange(val) {
      console.log(val);
    },
    getDetailById() {
      let data = {
        id: this.id
      };
      getTravelDeatil(data).then(res => {
        console.log(res, "res");
        this.dataDetail = res.data;
      });
    }
  }
};
</script>
<style lang='less'>
.backBoder {
  padding: 15px;
  border-radius: 100px;
  display: inline-block;
  border: 1px solid #d6d6d6;
  position: absolute;
  top: 15px;
  left: 15px;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.3);
  cursor: pointer;
  i {
    color: #fff;
  }
}
.imgClass {
  width: 100%;
  height: 25vh;
  position: relative;
  img {
    width: 100%;
    height: 28vh;
  }
  .nameClass {
    height: 48px;
    line-height: 48px;
    padding: 0 20px;
    position: absolute;
    bottom: 0;
    z-index: 999;
    width: 94%;
    left: 0;
    color: #fff;
    h2 {
      display: inline-block;
    }
    .numClass {
      float: right;
    }
  }
}

.priceClass {
  margin-top: 25px;
  padding: 0 20px;
  .numClass {
    color: orangered;
    font-size: 60px;
    font-weight: bold;
  }
}
.el-collapse-item__header {
  height: 8vh;
  padding: 0 20px;
}
.el-collapse-item__content {
  padding: 0 20px;
}
.subTitle{
  margin-top: 20px;
  font-weight: bolder;
  font-size: 28px;
}
</style>