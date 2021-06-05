<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
    <home-tuijian></home-tuijian>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons.vue'
import HomeTuijian from './components/Tuijian'
export default {
  components : {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeTuijian
  }

};
</script>
  
<style >
  
</style>