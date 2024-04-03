const state = {
  users: [] 
};

const actions = {
  registerUser({ commit }, userData) {
    
    commit('ADD_USER', userData);
  }
};

const mutations = {
  ADD_USER(state, userData) {
    state.users.push(userData);
    localStorage.setItem('users', JSON.stringify(state.users));
  }
};

export default {
  namespaced: true,
  state,
  actions,
  mutations
};
