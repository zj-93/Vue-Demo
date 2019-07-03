<template>
    <div class="bannerImg">
        <div class="swiper-container swiper-container1">
            <div class="swiper-wrapper">
                <div v-for="(item, index) in imgList" :key="index" class="swiper-slide">
                    <img :src="item.imgDress" alt="">
                </div>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>
        </div>
    </div>
</template>

<script>
import Swiper from 'swiper'

export default {
  data () {
    return {
        imgList: [{
            imgDress: '/static/image/img1.jpg'
        },{
            imgDress: '/static/image/img2.jpg'
        },{
            imgDress: '/static/image/img3.jpg'
        },{
            imgDress: '/static/image/img4.jpg'
        },{
            imgDress: '/static/image/img5.jpg'
        }]
    };
  },
  created() {
      
  },
  mounted() {
        new Swiper('.swiper-container1',{
            autoplay: {
                delay: 3000,
                stopOnLastSlide: false,
                disableOnInteraction: true,
            },
            loop : true,
            disableOnInteraction: false,
            pagination: {
                el: '.swiper-pagination',
                clickable :true,
            }
        })
  },
  methods: {
      alertMsg() {
        this.$message({
          message: '恭喜你，这是一条成功消息',
          type: 'success'
        });
      }
  }
}

</script>
<style lang='less'>
.bannerImg{
    width: 100%;
    height: 25vh;
    img{
        width: 100%;
        height: 25vh;
    }
}
</style>