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
  updateUserInfo({ commit }, payload) {
    commit(UPDATE_USER_INFO, payload);
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
