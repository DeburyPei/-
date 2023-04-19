
import Vue from 'vue'
import Router from 'vue-router'
import Login from '../views/Login.vue'
import Dashboard from '../views/Dashboard.vue'
import RightMain from '../components/dashboard/rightMain.vue'
import ShipInfoManager from '../components/ship/shipInfoMananger.vue'
import CargoInfoManager from '../components/cargo/CargoInfoManager.vue'



Vue.use(Router)
export default new Router({
  routes: [
    {
        name:'root',
        path: '/',
        component:Login
        

    },
    {
        name:'dashboard',
        path: '/dashboard',
        component:Dashboard  ,
    },
    {
      name:'ship',
      path: '/ship',
      component:Dashboard  ,
      children:[
        {
          path: 'info',
          component: ShipInfoManager
        }
      ]
    },
    {
      name:'cargo',
      path: '/cargo',
      component:Dashboard  ,
      children:[
        {
          path: 'info',
          component: CargoInfoManager
        }
      ]
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