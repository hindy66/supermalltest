<template>
  <div>
    <TabBar>
      <TabBarItem :path="'/home'" activeColor="lightsalmon">
        <img src="~asset/img/tabbar/home.png" alt="" slot="item-icon">
        <img src="~asset/img/tabbar/home-active.png" alt="" slot="item-icon-active">
        <div slot="item-text">首页</div>
      </TabBarItem>
      <TabBarItem :path="'/kind'" activeColor="lightsalmon">
        <img src="~asset/img/tabbar/kind.png" alt="" slot="item-icon">
        <img src="~asset/img/tabbar/kind-active.png" alt="" slot="item-icon-active">
        <div slot="item-text">分类</div>
      </TabBarItem>
      <TabBarItem :path="'/shop'" activeColor="lightsalmon">
        <img src="~asset/img/tabbar/shop.png" alt="" slot="item-icon">
        <img src="~asset/img/tabbar/shop-active.png" alt="" slot="item-icon-active">
        <div slot="item-text">购物车</div>
      </TabBarItem>
      <TabBarItem :path="'/profile'" activeColor="lightsalmon">
        <img src="~asset/img/tabbar/profile.png" alt="" slot="item-icon">
        <img src="~asset/img/tabbar/profile-active.png" alt="" slot="item-icon-active">
        <div slot="item-text">我的</div>
      </TabBarItem>
    </TabBar>
  </div>
</template>

<script>
  import TabBar from 'components/common/tabbar/tabbar.vue'
  import TabBarItem from 'components/common/tabbar/tabbaritem.vue'
  export default {
    name:'MainTabBar',
    components:{
      TabBar,
      TabBarItem
    }
  }
</script>

<style>

</style>
