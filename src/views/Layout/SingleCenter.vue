<template>
  <a-layout class="single-centerlayout">
    <a-layout-content>
      <a-row type="flex" justify="center" align="middle">
        <transition name="fade" mode="out-in">
          <router-view></router-view>
        </transition>
      </a-row>
    </a-layout-content>
  </a-layout>
</template>

<script>
export default {
  name: 'SingleCenterLayout',
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="less" scoped>
.single-centerlayout {
  height: 100%;
}
.ant-row-flex {
  height: 100%;
}
</style>
