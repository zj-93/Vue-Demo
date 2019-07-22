<template>
    <div class="count_add_cut">
        <i class="el-icon-circle-plus-outline"></i>
        <span>{{countNum}}</span>
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
    
  }
}

</script>
<style lang='less'>
.count_add_cut{
  float: right;
}
</style>