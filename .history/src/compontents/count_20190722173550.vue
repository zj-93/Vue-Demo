<template>
    <div class="count_add_cut">
        <i class="el-icon-remove-outline cutBtn" @click.stop="cutCount"></i>
        <span>{{countNum}}</span>
        <i class="el-icon-circle-plus-outline addBtn" @click.stop="addCount"></i>
    </div>
</template>

<script>
import Swiper from 'swiper'

export default {
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
      }
    },
    addCount() {
      ++this.countNum
    }
  }
}

</script>
<style lang='less'>
.count_add_cut{
  float: right;
  user-select: none;
  /deep/ .addBtn,
  .cutBtn {
    font-size: 28px;
    cursor: pointer;
  }
}
</style>