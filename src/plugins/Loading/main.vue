<template>
  <transition name="fade" mode="out-in">
    <div v-if="show" class="loading-container">
      <div class="loading-mask"></div>
      <div class="loading-content">
        <a-spin tip="正在加载数据中..." size="large">
        </a-spin>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Loading',
  props: {
    show: Boolean,
  },
  data() {
    return {
    };
  },
};
</script>

<style lang="less" scoped>
  .loading-container{
    position: relative;
    text-align: center;
    z-index:9999;
    .loading-mask{
      position: fixed;
      top:0;
      bottom:0;
      left:0;
      right:0;
      background-color:rgba(0,0,0,.7);
    }
    .loading-content{
      position: fixed;
      left: 50%;
      top: 50%;
      z-index: 300;
      transform: translate(-50%,-50%);
      text-align: center;
      color:#fff;
    }
  }
</style>
