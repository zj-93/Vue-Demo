<template>
  <div class="count_add_cut">
    <i v-if="countNum> 0" class="el-icon-remove-outline cutBtn" @click.stop="cutCount"></i>
    <span v-if="countNum> 0" class="countNum">{{countNum}}</span>
    <i class="el-icon-circle-plus-outline addBtn" @click.stop="addCount"></i>
  </div>
</template>

<script>
import Swiper from 'swiper'

export default {
  props: {
    siglePrice: {
      type: String,
      default: '0'
    },
    sigleId: {
      type: String,
      default: '0'
    },
    num: {
      type: Number,
      default: 0,
    }
  },
  data () {
    return {
      countNum: 0
    };
  },
  created() {
  },
  mounted() {
  },
  methods: {
    cutCount() {
      if(this.countNum !== 0) {
        --this.countNum
        this.$emit('cutCount', this.siglePrice, this.sigleId, this.countNum)
      }
    },
    addCount() {
      ++this.countNum
      console.log(this.sigleId)
      this.$emit('addCount', this.siglePrice, this.sigleId, this.countNum)
    }
  }
}

</script>
<style lang='less'>
.count_add_cut{
  position: absolute;
  top: 20px;
  right: 20px;
  user-select: none;
  .countNum {
    font-size: 28px;
  }
  /deep/ .addBtn,
  .cutBtn {
    font-size: 28px;
    cursor: pointer;
  }
}
</style>