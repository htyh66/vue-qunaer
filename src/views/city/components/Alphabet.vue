<template>
  <ul class="list">
    <li class="item" v-for="(item, key) in cities" :key="key">{{key}}</li>
  </ul>
</template>

<script>
export default {
  props:{
    cities: Object
  }
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
    line-height: .4rem;
    text-align: center;
    color: pink;
    font-size: .4rem;
  }
}
</style>