<template>
     <form>
          <div class="form_item">
            <span class="svg-container"
              ><img src="../../assets/bgImg/login/login_user.png" alt="" 
            /></span>
            <input type="text" placeholder="请输入账号">
          </div>
          <div class="form_item">
            <span class="svg-container"
              >
              <img src="../../assets/bgImg/login/login_pwd.png" alt=""
            /></span>
            <input type="new-password" placeholder="请输入密码" >
          </div>
          <div class="btnBox">
            <router-link to="/dashboard">
            <button type="button" class="submitBtn">
                <span>立即登录</span>
            </button>
          </router-link>
          </div>
          
        </form>
</template>

<script scoped>
export default {
    name:"LoginForm"
}
</script>

<style>
form{
    margin-top: 45px;
}
.form_item{
    width: 240px;
    height: 55px;
    line-height: 55px;
    border-bottom: 1px solid #999;
    margin: 0 auto;
    position: relative;
}
.form_item input{
    width: 150px;
    height: 40px;
    outline: none;
    border: none;
    font-size: 18px;
}
.svg-container{
    display: inline-block;
    width: 21px;
    height: 21px;
    position: absolute;
    top: 3px;
    left: 16px;
}
.submitBtn{

    width: 150px;
    height: 50px;
    background: #2a3f54;
    -webkit-box-shadow: 0 7px 22px 0 rgb(42 63 84 / 49%);
    box-shadow: 0 7px 22px 0 rgb(42 63 84 / 49%);
    border-radius: 30px;
    font-size: 22px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: #fff;
    outline: none;
    border: none;
    margin-top: 20px;
    cursor: pointer;

}

</style>