import { createStore } from 'vuex'
import usermodule from './modules/user.js';
import adminmodule from './modules/admin.js';
import cartmodule from './modules/cart.js';

export default createStore({
  modules: {
    user:usermodule,
    admin:adminmodule,
    cart:cartmodule,
  } 
})