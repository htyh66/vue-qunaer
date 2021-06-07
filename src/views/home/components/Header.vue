<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont back">&#xe601;</span>
    </div>
    <div class="header-input">
      <span class="iconfont search">&#xe60c;</span>
    </div>
    <router-link to="/city">
      <div class="header-right" >
        {{ this.city }}
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    city: String,
  },
};
</script>

<style lang="less" scoped>
.header {
  display: flex;
  line-height: 0.86rem;
  background: #00bcd4;
  color: #fff;
  .header-left {
    width: 1rem;
    float: left;
    text-align: center;
    .back {
      font-size: 0.6rem;
    }
  }
  .header-input {
    flex: 1;
    height: 0.64rem;
    line-height: 0.64rem;
    background: #fff;
    border-radius: 0.2rem;
    color: #ccc;
    margin-top: 0.13rem;
    .search {
      font-size: 0.4rem;
      margin-left: 0.1rem;
    }
  }
  .header-right {
    width: 1.5rem;
    float: right;
    text-align: center;
    font-size: 0.5rem;
    color: #fff;
  }
}
</style>