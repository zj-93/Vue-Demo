<template>
  <div class="detail">
    <header>
      <div class="backBoder" @click="goBack">
        <i class="el-icon-back"/>
      </div>
    </header>
    <banner-img />
  </div>
</template>

<script>
import Swiper from 'swiper'
import bannerImg from '@/views/bannerImg/banner.vue'

export default {
  components: {
    bannerImg
  },
  data () {
    return {
    }
  },
  created() {
      
  },
  mounted() {
  },
  methods: {
      goBack() {
        history.go(-1)
      }
  }
}

</script>
<style lang='less'>
.backBoder{
  padding: 15px;
  border-radius: 100px;
  display: inline-block;
  border: 1px solid #d6d6d6;
  position: absolute;
  top: 15px;
  left: 15px;
  z-index: 999;
  background-color: rgba(0,0,0,0.3);
  cursor: pointer;
  i{
    color: #fff
  }
}
</style>