<template>
  <div class="shoppage">
    <!-- 顶部导航 -->
    <ShopTopNavBar class="shop-top-nav-bar"></ShopTopNavBar>
    <!-- 商品列表 -->
    <ShopList></ShopList>
    <!-- 底部栏 -->
    <ShopBottomBar class="bottom-bar"></ShopBottomBar>
  </div>
</template>

<script>
import ShopTopNavBar from './childComps/ShopNavBar'
import ShopList from'./childComps/ShopList'
import ShopBottomBar from'./childComps/ShopBottomBar'
export default {
  name:'shoppage',
  components:{
    ShopTopNavBar,
    ShopList,
    ShopBottomBar
  },
}
</script>

<style scoped>
  .shoppage{
    height: 100vh;
  }
  .shoppage div{
    width: 100%;
    overflow: hidden;
  }
  .shop-top-nav-bar{
    color: white;
  }
  .bottom-bar{
    padding: 0 2px;
  }
</style>
