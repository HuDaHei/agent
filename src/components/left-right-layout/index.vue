<template>
  <div class="left_right_layout">
    <div class="layout_left">
      <div>头部</div>
      <el-scrollbar> kkk </el-scrollbar>
    </div>
    <div class="layout_right">right</div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.left_right_layout {
  display: flex;
  height: 100%;
  .layout_left {
    min-width: 250px;
    margin-right: 10px;
    background-color: cornflowerblue;
  }
  .layout_right {
    flex: 1;
    background-color: cadetblue;
  }
}
</style>
