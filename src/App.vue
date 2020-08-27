<template>
  <div id="app">
    <keep-alive exclude="detail">
      <router-view></router-view>
    </keep-alive>
    <MainTabBar>
    </MainTabBar>
  </div>
</template>

<script>
import MainTabBar from 'components/content/MainTabBar/MainTabBar.vue'
export default {
  name: 'App',
  components: {
    MainTabBar
  }
}
</script>

<style>
@import '~asset/css/iconfont/iconfont.css';
/* 这里的导入用到了别名，别名在vue.config.js中有定义 */
@import '~asset/css/base.css';
</style>
