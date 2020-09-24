import { get } from "@/utils/fetch.js";

const WORKBENCH_TABLE_LIST_URL =
  "/marketing/advertiser-accounts/collect/filtering/from/workbench";

export async function getWorkbenchTableListData(config = {}) {
  const { records, current, pages, total, size } = await get(
    WORKBENCH_TABLE_LIST_URL,
    config
  );
  return { tableData: Object.freeze(records), current, pages, total, size };
}
