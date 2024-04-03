import { createRouter,createWebHistory } from "vue-router";
import HomeComponent from '../components/HomeComponent.vue';
import UserRegister from '../components/UserRegister.vue';
import AdminRegister from '../components/AdminRegister.vue';
import CartComponent from '../components/CartComponent.vue'

const routes = [
    {
        path:'/home',
        component:HomeComponent,
    },
    {
        path:'/user',
        component:UserRegister,
    },
    {
        path:'/admin',
        component:AdminRegister,
    },
    {
        path:'/cart',
        component:CartComponent,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;