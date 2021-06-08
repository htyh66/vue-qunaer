<template>
  <ul class="list">
    <li
      class="item"
      v-for="item in letters"
      :key="item"
      :ref="item"
      @click="alphabetClick"
      @touchstart="touchstart"
      @touchmove="touchmove"
      @touchend="touchend"
    >
      {{ item }}
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      touchStatus: false,
    };
  },
  props: {
    cities: Object,
  },
  computed: {
    // 只需要城市信息的字母
    letters() {
      const letters = [];
      for (let i in this.cities) {
        letters.push(i);
      }
      return letters;
    },
  },
  updated() {
    this.startY = this.$refs["A"][0].offsetTop;
  },
  methods: {
    alphabetClick(e) {
      this.$emit("change", e.target.innerText);
    },
    touchstart() {
      this.touchStatus = true;
    },
    touchmove(e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer);
        }
        // 触摸点的字母索引 = 向下取整(滑动距离 / 单个字母元素的高度)
        // 触屏点到首个字母元素边框顶部的距离 = 触屏点的视口坐标(clientY) - 其他元素高度 - 字母区域到最近定位元素顶部的距离(offsetTop)
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 79;
          const index = Math.floor((touchY - this.startY) / 20);
          if (index >= 0 && index < this.letters.length) {
            this.$emit("change", this.letters[index]);
          }
        }, 16);
      }
    },
    touchend() {
      this.touchStatus = false;
    },
  },
};
</script>

<style lang="less" scoped>
.list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 1.58rem;
  right: 0;
  bottom: 0;
  width: 1rem;
  .item {
    line-height: 0.4rem;
    text-align: center;
    color: pink;
    font-size: 0.4rem;
  }
}
</style>