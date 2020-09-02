<template>
  <div class="profile">
    <NavBar :bgColor="'#ff8198'" class="profile-navbar">
      <div slot="center">我的档案</div>
    </NavBar>
    <!-- 个人头像信息栏 -->
    <div class="profile-img-content">
      <div class="profile-photo">
        <i class="iconfont icon-profile"></i>
      </div>
      <div class="profile-info">
        <div class="log-register">登录/注册</div>
        <div class="phone iconfont icon-shouji">暂无绑定手机号</div>
      </div>
      <div class="profile-info-button">
        <i class="iconfont icon-youjiantou"></i>
      </div>
    </div>
    <!-- 个人账户栏 -->
    <div class="profile-account">
      <div class="my-balance">
        <span class="money">0.00元</span>
        <span class="balance-tile">我的余额</span>
      </div>
      <div class="my-discount">
        <span class="discount">0个</span>
        <span class="discount-tile">我的优惠</span>
      </div>
      <div class="my-league">
        <span class="league">0分</span>
        <span class="league-tile">我的积分</span>
      </div>
    </div>
    <!-- 功能栏 -->
    <div class="function-list">
      <div class="function-item" v-for="(item,index) in functionTitles">
        <span class="item-icon iconfont" :class="functionIcon[index]"></span>
        <span class="item-title">{{item}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/navbar.vue'
export default {
  name:'profilepage',
  components:{
    NavBar
  },
  data() {
    return {
      functionTitles:['我的信息','积分商城','会员卡','我的购物车','下载购物app'],
      functionIcon:['icon-xinxi','icon-jifen','icon-huiyuan','icon-gouwuche','icon-shopping']
    }
  },
}
</script>

<style scoped>
  .profile{
    width: 100%;
    height: calc(100vh - 49px);
  }
  .profile-navbar{
    color: white;
  }
  .profile-img-content{
    color: white;
    height: 80px;
    background-color: #ff8198;
    display: flex;
    align-items: center;
    padding: 0 20px;
  }
  .profile-photo{
    background-color: white;
    height: 60px;
    width: 60px;
    border-radius: 50%;
    text-align: center;
    line-height: 60px;
  }
  .profile-photo i{
    font-size: 40px;
    color: #bbb;
  }
  .profile-info{
    font-size: 16px;
    margin-left: 10px;
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  .profile-img-content .profile-info-button{
    width: 20px;
  }
  .profile-account{
    height: 90px;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    font-size: 16px;
    border-bottom: 8px solid #eee;
  }
  .profile-account>div{
    padding: 20px 0 ;
    display: flex;
    flex-direction: column;
    text-align: center;
  }
  .profile-account>div>span:first-child{
    color: #f40;
    font-weight: bold;
    font-size: 20px;
    margin-bottom: 10px;
  }
  .function-list{
    font-size: 18px;
    margin-top: 10px;
    padding: 0 20px;
    height: calc(100% - 44px - 80px - 90px);
  }
  .function-item{
    height: 50px;
    line-height: 40px;
    padding: 5px;
    border-bottom: 2px solid #eee;
  }
  .function-item>span:first-child{
    color: #ff8198;
    margin-right: 10px;
  }
</style>

