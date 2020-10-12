<template>
  <div class="left_right_layout">
    <div class="layout_left">
      <slot name="title"></slot>
      <el-scrollbar style="height:calc(100% - 90px);overflow:hidden">
        <slot name="list"></slot>
      </el-scrollbar>
    </div>
    <div class="layout_right">right</div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
$bg_color:#fff;
.left_right_layout {
  display: flex;
  height: 100%;
  .layout_left {
    min-width: 250px;
    margin-right: 10px;
    background-color: $bg_color;
  }
  .layout_right {
    flex: 1;
    background-color: $bg_color;
  }
  & ::v-deep .el-scrollbar__wrap{
    overflow-x: hidden;
  }
}
</style>
