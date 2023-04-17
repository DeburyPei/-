<template>
  <div>
    <div class="navbar">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
        <el-breadcrumb-item>活动详情</el-breadcrumb-item>
      </el-breadcrumb>
      <div class="right-menu" @click='isProfieMenu=!isProfieMenu'>
        <img src="../../assets/bgImg/dashboard/profile_pic.png" alt="" />
        <span class="user-name">qqq123</span>
        <i class="el-icon-caret-bottom user-icon"></i>
        <ul  v-show="this.isProfieMenu"
        class="el-dropdown-menu el-popper el-dropdown-menu--medium"
          id="dropdown-menu" style="transform-origin: center top; z-index: 2001; "
          x-placement="bottom-end"
        >
          <div >
            <li  tabindex="-1" class="el-dropdown-menu__item">
              <!---->个人信息
            </li>
          </div>
          <div >
            <li  tabindex="-1" class="el-dropdown-menu__item">
              <!---->修改密码
            </li>
          </div>
          
          <a  href="#/dashboard" class="router-link-active"
            ><li
              
              tabindex="-1"
              class="el-dropdown-menu__item"
            >
              <!---->首页
            </li></a
          >
          <li
            tabindex="-1"
            class="el-dropdown-menu__item el-dropdown-menu__item--divided"
          >
            <!----><span  style="display: block"
              >退出登录</span
            >
          </li>
          <div x-arrow="" class="popper__arrow" style="left: 28px"></div>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RightHeader",
  data(){
    return{
        isProfieMenu: false,
    }
  }
};
</script>
    
<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
}
.right-menu img {
  width: 30px;
  height: 30px;
  vertical-align: middle;
}
.right-menu span {
  vertical-align: middle;
  font-size: 12px;
  margin-left: 7px;
}
#dropdown-menu{
    position: absolute;
    top: 36px;
    left: 893px;
}

</style>