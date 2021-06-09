<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="btn-list">
          <div class="btn-wrapper" @click="cityClick(currentCity)">
            <div class="btn">{{ this.currentCity }}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title bordertopbottom">热门城市</div>
        <div class="btn-list">
          <div
            class="btn-wrapper"
            v-for="(item, index) in hotCities"
            :key="index"
            @click="cityClick(item.name)"
          >
            <div class="btn">{{ item.name }}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(item, key) in cities" :key="key" :ref="key">
        <div class="title border-topbottom">{{ key }}</div>
        <div
          class="item-list"
          v-for="innerItem in item"
          :key="innerItem.id"
          @click="cityClick(innerItem.name)"
        >
          <div class="item border-bottom">{{ innerItem.name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "@better-scroll/core";
import { mapState, mapMutations } from "vuex";
export default {
  props: {
    cities: Object,
    hotCities: Array,
    letter: String,
  },
  computed: {
    ...mapState({
      currentCity: 'city'
    }),
  },
  methods: {
    bt() {
      this.$nextTick(() => {
        if (!this.scroll) {
          this.scroll = new BScroll(this.$refs.wrapper);
        } else {
          this.scroll.refresh();
        }
      });
    },
    ...mapMutations(["changeCity"]),
    cityClick(city) {
      this.changeCity(city);
      this.$router.push("/");
    },
  },

  watch: {
    letter() {
      if (this.letter) {
        const element = this.$refs[this.letter][0];

        this.scroll.scrollToElement(element);
      }
    },
  },
  mounted() {},
  updated() {
    this.bt();
  },
};
</script>

<style lang="less" scoped>
.border-topbottom {
  &:before {
    border-color: #ccc;
  }
  &:after {
    border-color: #ccc;
  }
}
.border-bottom {
  &:before {
    border-color: #ccc;
  }
}
.list {
  overflow: hidden;
  position: absolute;
  top: 1.58rem;
  left: 0;
  right: 0;
  bottom: 0;
  .title {
    line-height: 0.44rem;
    background: #eee;
    padding-left: 0.2rem;
    color: #666;
    font-size: 0.26rem;
  }
  .btn-list {
    overflow: hidden;
    padding: 0.1rem 1rem 0.1rem 0.1rem;
    .btn-wrapper {
      float: left;
      width: 33.33%;
      .btn {
        margin: 0.1rem;
        padding: 0.1rem 0;
        text-align: center;
        border: 0.02rem solid #ccc;
        border-radius: 0.06rem;
      }
    }
  }
  .item-list {
    .item {
      line-height: 0.76rem;
      color: #666;
      padding-left: 0.2rem;
    }
  }
}
</style>