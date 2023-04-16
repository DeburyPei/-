
import Vue from 'vue'
import Router from 'vue-router'
import Login from '../views/Login.vue'
import Dashboard from '../views/Dashboard.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
        name:'root',
        path: '/',
        components:{
          main:Login
        }

    },
    {
        name:'dashboard',
        path: '/dashboard',
        components:{
          main:Dashboard
        }
        
    },
    // {
    //     name:'user_info',
    //     path: '/userinfo/:name', // :id 相当于 router-link 中的 params 的id
    //     components:{
    //         main:UserInfo,
    //     }

    // }
  ]
})