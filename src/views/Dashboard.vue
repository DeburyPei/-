<template>
    <el-container>
    <el-aside width="200px" >  
        <div class="logoAndTitle">
                <img src="../assets/logo/logo.svg" alt="" class="logo" />
                <h2>起航科技</h2>
            </div>
            <div class="user_infomation">
                <!-- height: calc(100% - 130px); -->
                <div class="profile_pic">
                    <img src="../assets/bgImg/dashboard/profile_pic.png" alt="">
                </div>
                <div class="profile_info">
                    <span>Welcome,</span>
                    <h3>qqq123</h3>
                </div>
            </div>
            <LeftMenu class="menu"/>
    </el-aside>
    <el-container>
        <el-header>
            <RightHeader />
        </el-header>
        <el-main >
            <div class="app-main">
                <router-view></router-view>
            </div>
          
        </el-main>
    </el-container>
</el-container>

</template>

<script>

import LeftMenu from "../components/dashboard/leftMenu.vue"
import RightMain from "../components/dashboard/rightMain.vue"
import RightHeader from "../components/dashboard/rightHeader.vue"


export default {
    
    name:"Dashboard",
    components:{
        LeftMenu,
        RightMain,
        RightHeader
    },
    data() {
      return {
       
      };
    },
}
</script>

<style scoped>

.el-container {
		height: 100%;
}
h2{
    
    color: white;
}

.menu{
    height:calc(100% - 130px);
}
.logoAndTitle{
    display: flex;
   
    position: relative;
    width: 100%;
    height: 50px;
    line-height: 50px;
    background: #304156;
    text-align: center;
    overflow: hidden;
}
.user_infomation{
    width: 100%;
    height: 80px;
    color: #fff;
    font-size: 14px;
    display: flex;
    background:#2a3f54;
}
.user_infomation .profile_pic{
    width: 35%;
}
.user_infomation .profile_pic img{
    margin-left: 15%;
    z-index: 1000;
    position: inherit;
    margin-top: 10px;
    border-radius: 50%;
    border: 2px solid #fff;
    width: 56px;
    height: 56px;
}
.profile_info{
    padding: 15px 10px 10px;
    width: 65%;
    font-weight: normal;
}
.logo{
    height: 100%;
    width: 50px;
}
.el-header{
  background: #ededed;;

}
.el-main{
  background: #fcfcfc;
    padding: 10px;
}
.app-main{
    background:#ffffff;
}
</style>