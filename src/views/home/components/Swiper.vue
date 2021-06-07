<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="swiperList.length">
      <swiper-slide v-for="(slide) in swiperList" :key="slide.id">
        <img :src="slide.imgUrl" class="swiper-img" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
        },
        loop: true,
      },

    };
  },
  props:{
      swiperList : Array
  },
};
</script>

<style lang="less" scoped>
.wrapper ::v-deep .swiper-pagination-bullet-active{
    background: red ; 
}
.wrapper {
  overflow: hidden;
  width: 100%;
  height: 0;
  padding-bottom: 54.4%;
  .swiper-img{
    
  }
}
</style>
