<template>
  <div class="icons">
    <swiper>
      <swiper-slide v-for="(page,index) in pages" :key="index">
        <div class="icon" v-for="(icon,index) in page" :key="index">
          <div class="icon-img">
            <img class="icon-img-content" :src="icon.imgUrl" />
          </div>
          <div class="icon-name">{{ icon.desc }}</div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    };
  },
  props: {
    iconList : Array
  },
  computed: {
    pages() {
      const pages = [];
      this.iconList.forEach((item, index) => {
          const page = Math.floor(index / 8)
          if(!pages[page]){
              pages[page] = [];
          }
          pages[page].push(item);
      });
      return pages;
    },
  },
};
</script>

<style lang="less" scoped>
.icons ::v-deep .swiper-container {
  overflow: hidden;
  width: 100%;
  height: 0;
  padding-bottom: 50%;
}
.icon {
  overflow: hidden;
  position: relative;
  float: left;
  width: 25%;
  height: 0;
  padding-bottom: 25%;
  .icon-img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0.44rem;
    padding: 0.1rem;
    box-sizing: border-box;
    .icon-img-content {
      display: block;
      margin: 0 auto;
      height: 100%;
    }
  }
  .icon-name {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    text-align: center;
    height: 0.44rem;
    line-height: 0.44rem;
    color: #333;
  }
}
</style>