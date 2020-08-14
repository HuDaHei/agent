import { getUserInfo } from "@/api/index.js";

// 全局通用的vuex数据存储
export const UPDATE_USER_INFO = "UPDATE_USER_INFO"; // 更新用户信息
const state = {
  userInfo: {}
};
const mutations = {
  [UPDATE_USER_INFO](state, payload = {}) {
    state.userInfo = Object.freeze(payload);
  }
};
const actions = {
  async updateUserInfo({ commit }) {
    const userInfo = await getUserInfo();
    // module
    let { permissions } = userInfo;
    permissions = permissions.map(p => {
      const { module } = p;
      return module;
    });
    commit(UPDATE_USER_INFO, Object.assign({}, userInfo, { permissions }));
  }
};
const getters = {
  getUserInfo: state => {
    return state.userInfo;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
