<template>
  <div class="content">
    <detail-banner
      :sightName="sightName"
      :bannerImg="bannerImg"
      :gallaryImgs="gallaryImgs"
    ></detail-banner>
    <detail-header></detail-header>
    <detail-list :list="list"></detail-list>
  </div>
</template>

<script>
import DetailBanner from './components/Banner.vue';
import DetailHeader from './components/Header.vue';
import DetailList from './components/List.vue';
import axios from "axios";
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data() {
    return {
      sightName : '',
      bannerImg : '',
      gallaryImgs: [],
      list: []
    }
  },
  methods: {
    getDetailInfo(){
       axios.get('/api/detail.json',{
         params:{
           id:this.$route.params.id
         }
       }).then(this.getDetailInfoSucc)
    },
    getDetailInfoSucc(detailRes){
       detailRes = detailRes.data;
       if(detailRes.ret && detailRes.data){
        const data = detailRes.data
        this.sightName = data.sightName
        this.bannerImg = data.bannerImg 
        this.gallaryImgs = data.gallaryImgs
        this.list = data.categoryList
      }
    }
  },  
  mounted () {
   this.getDetailInfo()
  }
}
</script>

<style lang="less" scoped>
.content {
  height: 50rem;
}
</style>