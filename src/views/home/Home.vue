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
import {mapState} from 'vuex';
export default {
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeTuijian,
  },
  data(){
    return {
      lastCity :'',
      swiperList: [],
      iconList: [],
      tuijianList: []
    }
  },
  computed: {
    ...mapState(['city'])
  },
  methods: {
    getHomeInfo() {
        axios.get('/api/index.json?city='+ this.city)
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
    this.lastCity = this.city
    this.getHomeInfo();
  },
  activated () {
    if (this.lastCity !== this.city) {
      this.lastCity = this.city
      this.getHomeInfo();
    }
    
  }
};
</script>
  
<style >
</style>