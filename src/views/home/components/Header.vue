<template>
  <div class="header">
    <div class="header-left">
        <span class="iconfont back">&#xe601;</span>
    </div>
    <div class="header-input">
        <span class="iconfont search">&#xe60c;</span>
    </div>
    <div class="header-right">
        城市
    </div>
  </div>
</template>

<script>
export default {};
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
    .back{
        font-size: .6rem; 
    }
  }
  .header-input {
    flex: 1;
    height: 0.64rem;
    line-height: 0.64rem;
    background: #fff;
    border-radius: 0.2rem;
    color: #ccc;
    margin-top: .13rem;
    .search{
        font-size: .4rem;
        margin-left: .1rem;
    }
  }
  .header-right {
    width: 1.5rem;
    float: right;
    text-align: center;
    font-size: .5rem;
  }
}
</style>