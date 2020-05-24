<template>
  <div class="dashboard">
    <template v-for="(item, index) in new Array(200)">
      <p style="text-align: center;" :key="index">dashboard</p>
    </template>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="less" scoped></style>
