<template>
  <section class="workbench_container">
    <h4>workbench'</h4>
    <!-- <div v-if="$_hasPermisson('we')">werwer</div> -->
    <div>workbench' workbench'</div>
    <div class="workbench_table_list">
      <vxe-table
        :border="true"
        :align="allAlign"
        :data="tableData"
        :loading="loading"
        highlight-hover-row
        highlight-current-row
        height="auto"
        resizable
      >
        <vxe-table-column field="platformName" title="媒体"></vxe-table-column>
        <vxe-table-column
          field="accountId"
          title="账号ID"
          width="180"
        ></vxe-table-column>
        <vxe-table-column
          show-overflow
          field="corporationName"
          title="公司名称"
          width="120"
        ></vxe-table-column>
        <vxe-table-column
          show-overflow
          field="accountName"
          title="公司名称"
          width="120"
        ></vxe-table-column>
        <vxe-table-column field="pv" title="曝光量"></vxe-table-column>
        <vxe-table-column field="click" title="点击量"></vxe-table-column>
        <vxe-table-column field="clickRate" title="点击率"></vxe-table-column>
        <vxe-table-column field="convert" title="目标转化量"></vxe-table-column>
        <vxe-table-column
          field="convertcost"
          title="目标转化量"
        ></vxe-table-column>
        <vxe-table-column
          field="converRate"
          title="目标转化率"
        ></vxe-table-column>
        <vxe-table-column field="spend" title="花费"></vxe-table-column>
        <vxe-table-column field="balance" title="余额"></vxe-table-column>
        <vxe-table-column title="操作" width="120">
          <template v-slot="{ row }">
            <el-button @click="handlerAccount(row)">进入账户</el-button>
          </template>
        </vxe-table-column>
      </vxe-table>
      <vxe-pager
        background
        size="small"
        :current-page="currentPage"
        :page-size="pageSize"
        :total="totalResult"
        :page-sizes="[
          10,
          20,
          100,
          { label: '大量数据', value: 1000 },
          { label: '全量数据', value: -1 },
        ]"
        :layouts="[
          'PrevPage',
          'JumpNumber',
          'NextPage',
          'FullJump',
          'Sizes',
          'Total',
        ]"
        @page-change="handlePageChange"
      >
      </vxe-pager>
    </div>
  </section>
</template>

<script>
import { getWorkbenchTableListData } from "@/views/workbench/api.js";
export default {
  name: "workbench",
  data() {
    return {
      allAlign: null,
      loading: true,
      currentPage: 1,
      pageSize: 20,
      totalResult: 0,
      tableData: [],
    };
  },
  async created() {
    const data = {
      page: 1,
      size: 20,
      sort: "id",
      order: "desc",
      startTime: "2020-09-08",
      endTime: "2020-09-08",
    };
    const {
      tableData,
      current: currentPage,
      size: pageSize,
      total: totalResult,
    } = await getWorkbenchTableListData({ data });
    this.loading = false;
    this.tableData = tableData;
    this.currentPage = currentPage;
    this.pageSize = pageSize;
    this.totalResult = totalResult;
  },
  methods: {
    handlePageChange() {
      console.log("kkk");
    },
  },
};
</script>

<style lang="scss" scoped>
h4 {
  margin: 0;
  padding: 0;
}
.workbench_container {
  box-sizing: border-box;
  height: 100%;
  // width: 100%;
  padding: 0 20px;
}
.workbench_table_list {
  height: 85%;
  // width: 90%;
}
</style>
