<template>
  <div class="container" @click="closeGallary">
    <div class="wrapper">
      <swiper :options="swiperOption" class="swiper-container">
        <swiper-slide v-for="(item, index) in imgs" :key="index">
          <img class="gallary-img" :src="item" />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imgs: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      swiperOption: {
        pagination: {
            el: ".swiper-pagination",
        },
        paginationType: "fraction",
        observeParents: true,
        observer: true,
      },
    };
  },
  methods: {
      closeGallary(){
          this.$emit('close')
      }
  }
};
</script>

<style lang="less" scoped>


.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 99;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: pink;
  .wrapper {
    height: 0;
    width: 100%;
    padding-bottom: 100%;
    .swiper-container{
        overflow: inherit;
    }
    .gallary-img {
      width: 100%;
    }

    .swiper-pagination {
      color: #fff;
      bottom: -1rem;
    }
  }
}
</style>