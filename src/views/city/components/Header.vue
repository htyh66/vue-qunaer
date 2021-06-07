<template>
  <div class="header">
      城市选择
      <router-link to="/">
        <div class="iconfont back">&#xe601;</div>
      </router-link>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
    .header{
        position: relative;
        overflow: hidden;
        height: .86rem;
        line-height: .86rem;
        text-align: center;
        color: #fff;
        background: pink;
        font-size: .4rem;
        .back{
            position: absolute;
            top: 0;
            left: 0;
            width: .64rem;
            text-align: center;
            font-size: .4rem;
        }
    }
</style>