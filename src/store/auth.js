import { setSessionStorage, getSessionStorage } from '@/utils/storage';
import { login, loginOut } from '@/api/auth';

const KEY_LOGINED = 'KEY_LOGINED';

const state = {
  logined: getSessionStorage(KEY_LOGINED) || false,
};

const mutations = {
  'SET/LOGINED': (state, payload) => {
    state.logined = payload;
    setSessionStorage(KEY_LOGINED, payload, 12 * 60);
  },
};

const actions = {
  loginOut({ commit }) {
    commit('SET/LOGINED', false);
  },
  async loginIn({ commit }, {
    loginName,
    loginPwd,
    verifyCode,
  }) {
    const aclTree = await login({
      loginName,
      loginPwd,
      verifyCode,
    });
    commit('SET/LOGINED', true);
  },
  checkAuth({ state: { logined } }) {
    return logined;
  },
};

const getters = {};

export default {
  namespaced: false,
  state,
  mutations,
  actions,
  getters,
};
