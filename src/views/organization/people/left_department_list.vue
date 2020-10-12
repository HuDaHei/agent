<template>
  <el-tree
    :data="getDepartmentTreeData"
    :props="defaultProps"
    node-key="id"
    highlight-current
    :indent="16"
    :current-node-key="nodeKey"
    default-expand-all
    @node-click="handleNodeClick"
    ref="tree"
  >
    <div slot-scope="{ node }" class="custom-action">
      <span class="custom-label custom-tree-node">{{ node.label }}</span>
    </div>
  </el-tree>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "leftDepartmentList",
  data() {
    return {
      defaultProps: Object.freeze({
        children: "children",
        label: "name",
      }),
    };
  },
  computed: {
    ...mapGetters("organization", ["getDepartmentTreeData"]),
  },
};
</script>

<style></style>
