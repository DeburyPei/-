<template>
<el-container style=" width: 200px!important;">
  <el-aside width="201px" style="background-color: #2a3f54">
    <el-menu :unique-opened="true" 
               :default-active="$route.path" 
               @select="handleSelect"
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
      <el-submenu index="2">
        <template slot="title"><i class="el-icon-bell"></i>公告</template>
        <el-menu-item-group>
          <el-menu-item index="2-1">公告管理</el-menu-item>
          <el-menu-item index="2-2">发送公告</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title"><i class="el-icon-edit"></i>船舶管理</template>
        <el-menu-item-group>
          <el-menu-item index="2-1">公告管理</el-menu-item>
          <el-menu-item index="2-2">发送公告</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title"><i class="el-icon-location"></i>航线管理</template>
        <el-menu-item-group>
          <el-menu-item index="2-1">公告管理</el-menu-item>
          <el-menu-item index="2-2">发送公告</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="5">
        <template slot="title"><i class="el-icon-menu"></i>货物管理</template>
        <el-menu-item-group>
          <el-menu-item index="2-1">公告管理</el-menu-item>
          <el-menu-item index="2-2">发送公告</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="6">
        <template slot="title"><i class="el-icon-time"></i>调度与任务分配</template>
        <el-menu-item-group>
          <el-menu-item index="2-1">公告管理</el-menu-item>
          <el-menu-item index="2-2">发送公告</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="7">
        <template slot="title"><i class="el-icon-tickets"></i>订单管理</template>
        <el-menu-item-group>
          <el-menu-item index="2-1">公告管理</el-menu-item>
          <el-menu-item index="2-2">发送公告</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-aside>
  
  
</el-container>


</template>

<script>
import router from '@/router';

export default {
    name: "LeftMenu",
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