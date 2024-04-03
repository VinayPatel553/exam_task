const state = {
    cartItems: []
  };
  
  const actions = {
    addToCart({ commit }, product) {
      commit('ADD_TO_CART', product);
    },
    removeFromCart({ commit }, itemId) {
      commit('REMOVE_FROM_CART', itemId);
    }
  };
  
  const mutations = {
    ADD_TO_CART(state, product) {
      state.cartItems.push(product);
    },
    REMOVE_FROM_CART(state, itemId) {
      state.cartItems = state.cartItems.filter(item => item.id !== itemId);
    }
  };
  
  export default {
    namespaced: true,
    state,
    actions,
    mutations
  };
  