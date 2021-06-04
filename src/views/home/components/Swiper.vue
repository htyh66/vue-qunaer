<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="slide in swiperSlides" :key="slide">
        <img :src="slide" class="swiper-img" />
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
      swiperSlides: [
        "https://img1.qunarzz.com/qs/2103/22/dfd49774c7a1f102.jpg",
        "https://img1.qunarzz.com/qs/2101/87/f3fa48c8346dab02.jpg",
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.wrapper ::v-deep .swiper-pagination-bullet-active{
    background: red !important; 
}
.wrapper {
  overflow: hidden;
  width: 100%;
  height: 0;
  padding-bottom: 54.4%;
  .swiper-img {
    width: 100%;
  }
}
</style>
