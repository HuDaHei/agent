import { get } from "@/utils/fetch.js";

const organization = {
  namespaced: true,
  state: {
    departmentTreeData: [],
  },
  mutations: {
    setDepartmentTreeData(state, payload = []) {
      if (Array.isArray(payload)) {
        state.departmentTreeData = Object.freeze(payload);
      }
    },
  },
  actions: {
    // 获取部门树
    async fetchDepartmentTreeData({ commit }) {
      let result = await get("/ucenter/departments");
      commit("setDepartmentTreeData", result);
    },
  },
  getters: {
    getDepartmentTreeData: (state) => {
      return state.departmentTreeData;
    },
  },
};
export default organization;
