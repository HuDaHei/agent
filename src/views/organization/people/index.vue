<template>
  <left-right-layout>
    <template #title>
      <div class="title">
        <h4>部门列表</h4>
        <el-button>+添加部门</el-button>
      </div>
    </template>
    <template #list>
      <left-department-list />
    </template>
  </left-right-layout>
</template>

<script>
import leftRightLayout from "@/components/left-right-layout/index.vue";
import leftDepartmentList from "@/views/organization/people/left_department_list.vue";
import { mapActions } from "vuex";
export default {
  name: "organization",
  components: {
    leftRightLayout,
    leftDepartmentList,
  },
  mounted() {
    this.fetchDepartmentTreeData();
  },
  methods: {
    ...mapActions("organization", ["fetchDepartmentTreeData"]),
  },
};
</script>

<style lang="scss" scoped>
.title {
  display: flex;
  flex-direction: column;
  padding: 10px;
  h4 {
    margin: 0;
    padding: 0;
  }
}
</style>
