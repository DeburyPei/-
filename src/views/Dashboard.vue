<template>
    <div id="dashboard">
        <div class="left">
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
            <LeftMenu />
        </div> 
        <div class="right main-container">
            <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
                <el-radio-button :label="false">展开</el-radio-button>
                <el-radio-button :label="true">收起</el-radio-button>
            </el-radio-group>
        </div>
    </div>
</template>

<script>

import LeftMenu from "../components/dashboard/leftMenu.vue"
export default {
    
    name:"Dashboard",
    components:{
        LeftMenu
    },
    data() {
      return {
        isCollapse: true
      };
    },
}
</script>

<style scoped>
#dashboard{
    display: flex;
}
.main-container{
    min-height: 100%;
    -webkit-transition: margin-left .28s;
    transition: margin-left .28s;
    margin-left: 230px;
    position: relative;
}
h2{
    
    color: white;
}
.left{
    transition: width .28s;
    width: 200px!important;
    background-color: #2a3f54; 
    height: 100%;
    position: fixed;
    width: 200px!important;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 1001;
    overflow: hidden;
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
</style>