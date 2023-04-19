<template>
  <div>
    <div class="navbar">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
        <el-breadcrumb-item>活动详情</el-breadcrumb-item>
      </el-breadcrumb>
      <el-dropdown>
        <span class="el-dropdown-link">
             <div class="right-menu" @click='isProfieMenu=!isProfieMenu'>
        <img src="../../assets/bgImg/dashboard/profile_pic.png" alt="" />
        <span class="user-name">qqq123</span>
        <i class="el-icon-arrow-down el-icon--right"></i>
      
        
      </div>
        </span>
        <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>首页</el-dropdown-item>
            <el-dropdown-item @click.native="dialogFormVisible=true">修改密码</el-dropdown-item>
            <el-dropdown-item divided>退出登录</el-dropdown-item>
           
        </el-dropdown-menu>
        </el-dropdown>
     
      <el-dialog title="修改密码" :visible.sync="dialogFormVisible" width="40%"  >
            <el-form >
                <el-form-item label="旧密码" >
                    <el-input type="password" v-model="ruleForm.oldPass" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="新密码" >
                    <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="再输入新密码" >
                    <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item style="display: flex;justify-content: flex-end;margin-top: 10px;">
                    <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                    <el-button @click="resetForm('ruleForm')">重置</el-button>
                </el-form-item>
            </el-form>
        </el-dialog>
    </div>
  </div>
</template>

<script>

export default {
  name: "RightHeader",
  data(){
    return{
        isProfieMenu: false,
        dialogFormVisible:false,
        ruleForm: {
            oldPass:'',
          pass: '',
          checkPass: '',
        
        }
    }

  },
  methods:{
   
      submitForm(formName) {
        
            alert('submit!');
          
      },
      resetForm(formName) {
         Object.assign(this.ruleForm,{
            oldPass:'',
          pass: '',
          checkPass: '',
        
        })
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
/* #dropdown-menu{
    position: absolute;
    top: 36px;
    left: calc(100vw - 133px);
} */
.el-form-item{
    margin-bottom: 0;
}
.el-form{
    margin-top: 0;
}
.el-dialog{
    width: 40%;
}
</style>