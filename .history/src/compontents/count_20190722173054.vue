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
      alert('+++++')
    },
    addCount() {
      alert('------')
    }
  }
}

</script>
<style lang='less'>
.count_add_cut{
  float: right;
  .addBtn,
  .cutBtn {
    font-size: 16px
  }
}
</style>