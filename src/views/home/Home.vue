<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
    <home-tuijian></home-tuijian>
  </div>
</template>

<script>
import HomeHeader from "./components/Header";
import HomeSwiper from "./components/Swiper";
import HomeIcons from "./components/Icons.vue";
import HomeTuijian from "./components/Tuijian";
import axios from "axios";
export default {
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeTuijian,
  },
  methods: {
    getHomeInfo() {
      axios.get("/api/index.json")
      .then(this.getHomeInfoSucc);
    },
    getHomeInfoSucc(res) {
      console.log(res);
    },
  },
  mounted() {
    this.getHomeInfo();
  },
};
</script>
  
<style >
</style>