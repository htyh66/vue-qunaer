<template>
  <div class="content">
      <detail-banner></detail-banner>
      <detail-header></detail-header>
      <detail-list :list="list"></detail-list>
  </div>
</template>

<script>
import DetailBanner from './components/Banner.vue';
import DetailHeader from './components/Header.vue';
import DetailList from './components/List.vue';
export default {
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data() {
    return {
      list : [
        {
          title : "1111",
          children : [
            {
              title : '2222222222',
              children : [
                {
                  title: '3333333'
                }
              ]
            },{
              title : '2222222222',
              children : [
                {
                  title: '3333333'
                }
              ]
            },{
              title : '2222222222',
              children : [
                {
                  title: '3333333'
                }
              ]
            }
          ]
        },{
          title : "1111",
        },{
          title : "1111",
        },
      ],
    }
  },
}
</script>

<style lang="less" scoped>
.content{
  height: 50rem;
}
    
</style>