<template>
  <div class="content">
      <detail-banner></detail-banner>
      <detail-header></detail-header>
  </div>
</template>

<script>
import DetailBanner from './components/Banner.vue';
import DetailHeader from './components/Header.vue';
export default {
  components: {
    DetailBanner,
    DetailHeader
  }
}
</script>

<style lang="less" scoped>
.content{
  height: 50rem;
}
    
</style>