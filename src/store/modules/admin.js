const state = {
  admin: [] 
};

const actions = {
  registerAdmin({ commit }, adminData) {
    
    commit('ADD_ADMIN', adminData);
  }
};

const mutations = {
  ADD_ADMIN(state, adminData) {
    state.admin.push(adminData);
    localStorage.setItem('admin', JSON.stringify(state.admin));
  }
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
