<template>
  <div>
    <div class="title">热门推荐</div>
    <ul>
      <li class="item" v-for="(item, index) in tuijianList" :key="index">
        <img :src="item.imgUrl" class="item-img" />
        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-content">{{ item.desc }}</p>
          <span class="item-price">{{ item.price }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    };
  },
  props:{
    tuijianList : Array
  }
};
</script>

<style lang='less' scoped>
.title {
  margin-top: 0.2rem;
  line-height: 0.8rem;
  text-indent: 0.2rem;
}
.item {
  overflow: hidden;
  display: flex;
  height: 1.9rem;
  border-radius: 0.2rem;
  margin: 0.1rem 0.2rem;
  .item-img {
    width: 1.7rem;
    height: 1.7rem;
    padding: 0.1rem;
  }
  .item-info {
    flex: 1;
    position: relative;
    padding: 0.1rem;
    min-width: 0;
    font-size: 0.4rem;
    .item-content {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .item-price {
      color: red;
      position: absolute;
      bottom: 0;
    }
  }
}
</style>