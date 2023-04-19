<template>
    <el-container style=" width: 200px!important;">
      <el-aside width="201px" style="background-color: #2a3f54">
        <el-menu :unique-opened="true" 
                   :default-active="$route.path" 
                   router
                   @select=""
                   background-color="#2a3f54"
                   text-color="#fff"
                   active-text-color="#ffd04b"    
                   >
          <el-submenu index="1">
            <template slot="title">
             
                <i class="el-icon-message"></i>
                <router-link to="/dashboard"><span style="color:#fff;">首页</span> </router-link>
              </template>
            
          </el-submenu>


          <el-submenu index="4">
            <template slot="title"><i class="el-icon-menu"></i>货物管理</template>
            <el-menu-item-group>
              <el-menu-item index="/customer/cargo/info">基本信息管理</el-menu-item>
              <el-menu-item index="2-2">货物跟踪</el-menu-item>
              <el-menu-item index="2-3">货物入库</el-menu-item>
            </el-menu-item-group>
          </el-submenu> 
          <el-submenu index="7">
            <template slot="title"><i class="el-icon-tickets"></i>
              <router-link to="/user/order"><span style="color:#fff;">订单管理</span> </router-link>
              </template>
            
          </el-submenu>
        </el-menu>
      </el-aside>
      
      
    </el-container>
    
    
    </template>
    
    <script>
    import router from '@/router';
    
    export default {
        name: "CustomerMenu",
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        },
        components: { router }
    };
    </script>
        
    <style scoped>
    .el-menu--collapse .el-menu .el-submenu, .el-menu--popup {
    min-width: 260px;
    }
    </style>