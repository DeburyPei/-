
import Vue from 'vue'
import Router from 'vue-router'
import Login from '../views/Login.vue'
import Dashboard from '../views/Dashboard.vue'

import Welcome from '../components/dashboard/welcome.vue'

import ShipInfoManager from '../components/ship/shipInfoMananger.vue'
import CargoInfoManager from '../components/cargo/CargoInfoManager.vue'
import OrderManager from '../components/order/orderManager.vue'
import UserManager from '../components/account/userManager.vue'
import CourierManager from '../components/account/courierManager.vue'
// import Welcome from '../components/dashboard/leftMenu/adminMe'

import Customer from '../components/customer/customer.vue'



Vue.use(Router)
export default new Router({
  routes: [
    {
        name:'root',
        path: '/',
        component:Login
        

    },
   //admin
    {
        name:'dashboard',
        path: '/dashboard',
        component:Dashboard  ,
        children:[
          {
            path:'',
            component:Welcome
          }
        ]
    },
    {
      name:'account',
      path: '/account',
      component:Dashboard  ,
      children:[
        {
          path: 'users',
          component: UserManager
        },
        {
          path: 'couriers',
          component: CourierManager
        },
      ]
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
    {
      name:'order',
      path: '/order',
      component:Dashboard  ,
      children:[
        {
          path: '',
          component: OrderManager
        }
      ]
    },
    //user
    {
      name:'customer',
      path: '/customer',
      redirect:'/customer/order',
      component:Customer,
      children:[
        {
          name:'cargo',
          path: 'cargo',
          component:Dashboard  ,
          children:[
            {
              path: 'info',
              component: CargoInfoManager
            }
          ]
        },
        {
          name:'order',
          path: 'order',
          component:Dashboard  ,
          children:[
            {
              path: '',
              component: OrderManager
            }
          ]
        },
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