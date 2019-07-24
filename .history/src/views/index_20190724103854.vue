<template>
  <div id="index" class="index" @touchstart="start" @touchmove="move" @touchend="end">
    <banner-img />
    <top-menu @changeMenu="changeMenu" />
    <recommended-list/>
    <!-- <content-list :scroll-state="scrollState" :content-list="contentList" /> -->
    <router-view/>
  </div>
</template>

<script>

import list from "@/views/json/list2.json"
import bannerImg from '@/views/bannerImg/banner.vue'
import topMenu from '@/views/topNav/topMenu.vue'
// import contentList from '@/views/contentList/contentList.vue'
import recommendedList from '@/views/recommended/recommendedList.vue'
import { setTimeout } from 'timers';

export default {
  components: {
    topMenu,
    bannerImg,
    recommendedList
  },
  data () {
    return {
      scrollState: '0',
      flag: true,
      contentList: [],
      list: []
    };
  },
  mounted() {
    this.list = list
    var _this = this
    var arr = [0]
    setTimeout(() => {
      window.addEventListener('scroll', function(e){
        var BodyH = document.body.clientHeight
        var viewH = window.screen.height
        var scrollH = document.documentElement.scrollTop||document.body.scrollTop
        arr.push(scrollH)
        console.log(BodyH - viewH -scrollH)
        if(BodyH - viewH -scrollH <= '0' && arr[1] - arr[0] > 0) {
          // _this.scrollState = '1'
          _this.$store.dispatch('changeScrollState', '1')
          _this.$store.dispatch('changeScrollFlag', true)
        }
        arr = [arr[1]]
      })
    }, 300)
  },
  methods: {
    
    start() {
      console.log('移动开始')
    },
    move() {
      console.log('移动中')
    },
    end() {
      console.log('移动结束')
    },
    changeMenu(item) {
      const data = {
        menuCode: item
      }
    }
  }
}

</script>
<style lang='less' scoped>
</style>