<template>
  <div>
    <home-header ></home-header>
    <home-swiper :swiperList="swiperList"></home-swiper>
    <home-icons :iconList="iconList"></home-icons>
    <home-tuijian :tuijianList="tuijianList"></home-tuijian>
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
  data(){
    return {
      swiperList: [],
      iconList: [],
      tuijianList: []
    }
  },
  methods: {
    getHomeInfo() {
        axios.get("/api/index.json")
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc(indexRes) { 
      indexRes = indexRes.data
      if(indexRes.ret && indexRes.data){
        const data = indexRes.data
        this.swiperList = data.swiperList 
        this.iconList = data.iconList 
        this.tuijianList = data.tuijianList
      }
    },
  },
  mounted() {
    this.getHomeInfo();
  },
};
</script>
  
<style >
</style>