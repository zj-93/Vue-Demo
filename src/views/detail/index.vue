<template>
  <div class="detail">
    <header>
      <div class="backBoder"
           @click="goBack">
        <i class="el-icon-back" />
      </div>
      <div class="area">
        {{ dataDetail.area}}
      </div>
      <div class="title">
        产品详情
      </div>
    </header>
    <div class="desc">
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

      <el-collapse v-model="activeNames"
                   @change="handleChange"
                   accordion>
        <el-collapse-item title="请选择出行人数"
                          name="3">
          <div class="configClass">
            <div class="configMan">
              <div class="configManTitle">
                成人
              </div>
              <div class="configManCount">
                <nut-stepper :simple="false"
                             :value.sync="form.adultNum"></nut-stepper>
              </div>
            </div>
            <div class="configMan">
              <div class="configManTitle">
                儿童
              </div>
              <div class="configManCount">
                <nut-stepper :simple="false"
                             :value.sync="form.childNum"></nut-stepper>
              </div>
            </div>
          </div>
        </el-collapse-item>
        <el-collapse-item title="选择出行时间"
                          name="4">
          <!-- 日历 -->
          <reservePage ref="reservePage" @chooseTime="chooseTime"></reservePage>
          <div>
            出发时间： {{date[0]}}
          </div> 
          <div>
            结束时间： {{date[1]}}
          </div> 
        </el-collapse-item>
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

    <div class="footer">
      <div class="totalCost">
        <span class="cost">总费用: <i>{{ totalCost }}</i> 元</span>
        <span class="viewCost"
              @click="viewCost">费用明细
          <nut-icon type="down"></nut-icon>
        </span>
      </div>
      <nut-button @click.native="reserve">
        预定
      </nut-button>
    </div>

    <!-- 明细 -->
    <nut-actionsheet :is-visible="isVisible"
                     @close="switchActionSheet">
      <div slot="custom"
           class="custom-wrap">
        <div>费用明细</div>
        <div>
          <div><span>成人票</span> <span>{{this.form.adultNum}}</span>张 <span>{{this.form.childNum * dataDetail.price}}</span></div>
          <div><span>儿童票</span> <span>{{this.form.childNum}}</span>张 <span>{{this.form.childNum * Math.ceil(this.dataDetail.price / 2)}}</span></div>
        </div>
      </div>
    </nut-actionsheet>

  </div>
</template>

<script>
import reservePage from "./reservePage.vue";
import { getTravelDeatil } from "@/axios/food.js";

export default {
  components: {
    reservePage,
  },
  data() {
    return {
      isVisible: false,
      isShow: false,
      dataDetail: {},
      activeNames: [],
      form: {
        adultNum: 0,
        childNum: 0,
      },
      date: []
    };
  },
  computed: {
    totalCost() {
      return eval(
        this.form.adultNum * this.dataDetail.price +
          this.form.childNum  * Math.ceil(this.dataDetail.price / 2)
      );
    },
  },
  created() {},
  mounted() {
    this.id = this.$route.query.id;
    this.getDetailById();
  },
  methods: {
    switchActionSheet() {
      this.isVisible = !this.isVisible;
    },
    viewCost() {
      this.isVisible = !this.isVisible;
    },
    goBack() {
      history.go(-1);
    },
    handleChange(val) {
      if(val == 4) {
        this.$refs.reservePage.isVisible1 = true;
      }
    },
    getDetailById() {
      let data = {
        id: this.id,
      };
      getTravelDeatil(data).then((res) => {
        this.dataDetail = res.data;
      });
    },
    reserve() {
      // this.isShow = true;
      // console.log(this.$refs.reservePage);
      
    },
    chooseTime(val) {
      console.log(val)
      this.date = val
    }
  },
};
</script>
<style lang='less'>
header {
  width: 100%;
  height: 80px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  background-color: orangered;
  .title {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, 50%);
    color: #fff;
    font-size: 32px;
  }
  .area {
    position: absolute;
    top: 8px;
    left: 100px;
    transform: translate(0, 50%);
    color: #fff;
    font-size: 28px;
  }
}
.backBoder {
  height: 52px;
  width: 52px;
  text-align: center;
  border-radius: 100px;
  display: inline-block;
  border: 1px solid #d6d6d6;
  background-color: rgba(0, 0, 0, 0.3);
  margin: 12px;
  cursor: pointer;
  i {
    color: #fff;
    font-size: 42px;
    margin-top: 6px;
  }
}
.imgClass {
  width: 100%;
  height: 25vh;
  position: relative;
  margin-top: 80px;
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
    z-index: 9;
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
.subTitle {
  margin-top: 20px;
  font-weight: bolder;
  font-size: 28px;
}
.desc {
  max-height: 1220px;
  overflow-x: hidden;
  overflow-y: auto;
}
.footer {
  width: 100%;
  position: absolute;
  bottom: 0;
  line-height: 93px;
  /deep/ .nut-button {
    float: right;
    width: 300px;
    padding: 0;
  }
  .totalCost {
    padding-left: 20px;
    box-sizing: border-box;
    float: left;
    width: calc(100% - 300px);
    font-size: 28px;
    border-top: 2px solid #efefef;
    .viewCost {
      float: right;
      margin-right: 20px;
      color: #1974d8;
    }
    /deep/ .nut-icon {
      vertical-align: middle;
    }
  }
}
.configClass {
  .title {
    border-bottom: 2px solid #efefef;
    padding-bottom: 20px;
    margin-bottom: 40px;
    height: 40px;
    line-height: 40px;
  }
  .configMan {
    display: flex;
    margin-bottom: 40px;
    .configManTitle {
      width: 200px;
      line-height: 70px;
    }
  }
}
</style>

<style lang="less">
/deep/ .custom-wrap {
  height: 400px;
  padding: 40px;
  box-sizing: border-box;
}
</style>