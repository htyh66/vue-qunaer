<template>
  <div class="banner">
    <img
      class="banner-img"
      src="http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg"
      @click="clickGallary"
    />
    <div class="banner-info">
      <div class="banner-title">1111111111111111111</div>
      <div class="banner-number">
        <span class="iconfont banner-icon">&#xe60c;</span>
        99
      </div>
    </div>
    <Gallary :imgs="imgs" v-show="showGallary" @close="closeGallary"></Gallary>
  </div>
</template>

<script>
import Gallary from "@/components/gallary/Gallary.vue";
export default {
  data() {
    return {
      imgs: [
        "http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg",
        "http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg",
      ],
      showGallary: false,
    };
  },
  components: {
    Gallary,
  },
  methods: {
    clickGallary() {
      this.showGallary = true;
    },
    closeGallary() {
      this.showGallary = false;
    },
  },
};
</script>

<style lang="less" >
.banner {
  position: relative;
  overflow: hidden;
  height: 0;
  padding-bottom: 55%;
  .banner-img {
    width: 100%;
  }
  .banner-info {
    display: flex;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    line-height: 0.6rem;
    color: #fff;
    background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.8)
    );
    .banner-title {
      flex: 1;
      font-size: 0.32rem;
      padding: 0 0.2rem;
    }

    .banner-number {
      height: 0.32rem;
      line-height: 0.32rem;
      margin-top: 0.14rem;
      padding: 0 0.4rem;
      border-radius: 0.2rem;
      background: rgba(0, 0, 0, 0.8);
      font-size: 0.24rem;
      .banner-icon {
        font-size: 0.24rem;
      }
    }
  }
}
</style>