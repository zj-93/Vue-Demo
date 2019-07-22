<template>
    <div class="count_add_cut">
        <i class="el-icon-circle-plus-outline addBtn"></i>
        <span>{{countNum}}</span>
        <i class="el-icon-remove-outline cutBtn"></i>
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