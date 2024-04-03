import { createStore } from 'vuex'
import usermodule from './modules/user.js';
import adminmodule from './modules/admin.js';
export default createStore({
  modules: {
    user:usermodule,
    admin:adminmodule,
  } 
})