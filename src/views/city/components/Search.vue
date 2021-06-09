<template>
  <div>
    <div class="search">
      <input
        class="search-input"
        type="text"
        placeholder="请输入城市"
        v-model="keyword"
      />
    </div>
    <div class="search-content" ref="search" v-show="keyword">
      <ul>
        <li
          class="search-item border-bottom"
          v-for="(item, index) in list"
          :key="index"
          @click="cityClick(item.name)"
        >
          {{ item.name }}
        </li>
        <li v-show="hasNoData">无</li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from "@better-scroll/core";
import { mapState,mapMutations } from "vuex";
export default {
  data() {
    return {
      keyword: "",
      list: [],
      timer: null,
    };
  },
  props: {
    cities: Object,
  },
  methods: {
    ...mapMutations(['changeCity']),
    cityClick(city) {
      this.changeCity(city)
      this.$router.push('/')
    },
  },
  computed: {
    hasNoData() {
      return !this.list.length;
    },
  },
  watch: {
    keyword() {
      // 清除之前的有延时器
      if (this.timer) {
        clearTimeout(this.timer);
      }
      // 没有输入时列表为空
      if (!this.keyword) {
        this.list = [];
        return;
      }

      this.timer = setTimeout(() => {
        const result = [];
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (
              value.spell.indexOf(this.keyword) >= 0 ||
              value.name.indexOf(this.keyword) >= 0
            ) {
              result.push(value);
            }
          });
        }
        this.list = result;
      }, 100);
    },
  },
  updated() {
    this.scroll = new BScroll(this.$refs.search);
  },
};
</script>

<style lang="less" scoped>
.search {
  height: 0.72rem;
  padding: 0 0.1rem;
  background: pink;
  .search-input {
    box-sizing: border-box;
    width: 100%;
    height: 0.62rem;
    padding: 0 0.1rem;
    line-height: 0.62rem;
    text-align: center;
    border-radius: 0.06rem;
    color: #666;
  }
}
.search-content {
  z-index: 1;
  overflow: hidden;
  position: absolute;
  top: 1.58rem;
  left: -0;
  right: 0;
  bottom: -0;
  background: rgb(243, 240, 240);
  .search-item {
    line-height: 0.62rem;
    padding-left: 0.2rem;
    background: #fff;
    color: #666;
  }
}
</style>