<template>
    <div class="home">
      <!-- 自定义顶部导航栏的颜色,通过:backColor传入一个字符串 -->
      <NavBar :bgColor='"pink"' class="home-navbar">
        <div slot="center">购物街</div>
      </NavBar>
      <TabControl :titles="['流行','新款','精选']" @childItemClick="changeGoods" ref="tabcontrol1" class="tabcontrol1" v-show="isTabFixed"></TabControl>
      <Scroll class="content" ref="Scroll" :probeType="3" :pullUpLoad="true" @scroll="scroll" @pullingUp="loadMore">
        <HomeSwiper :banner='banner' class="HomeSwiper" @swiperImgLoad="swiperImgLoad"></HomeSwiper>
        <HomeRecommend :recommends="recommend" class="homerecommend"></HomeRecommend>
        <HomeFeatureView></HomeFeatureView>
        <TabControl :titles="['流行','新款','精选']" @childItemClick="changeGoods" ref="tabcontrol2"></TabControl>
        <Goodlist :goods="showGoods" class="goodlist"></Goodlist>
      </Scroll>
      <BackTop @click.native="BackTopclick" v-show="showBackTopIcon"></BackTop>
    </div>
</template>

<script>
import NavBar from 'components/common/navbar/navbar.vue'
import HomeSwiper from './childComps/homeSwiper.vue'
import HomeRecommend from './childComps/recommend.vue'
import HomeFeatureView from './childComps/FeatureView.vue'
import TabControl from 'components/common/tabcontrol/tabcontrol.vue'
import Goodlist from 'components/content/goods/goodlist.vue'
import Scroll from 'components/common/scroll/scroll.vue'
import BackTop from 'components/common/backtop/backtop.vue'

import {getHomemultidata,getHomeGoods} from 'network/homerequest.js'
import {debounce} from 'common/utils/index.js'
export default {
  name:'homepage',
  components:{
    NavBar,
    HomeSwiper,
    HomeRecommend,
    HomeFeatureView,
    TabControl,
    Goodlist,
    Scroll,
    BackTop
  },
  data() {
    return {
      banner:[],
      recommend:[],
      goods:{
        'pop':{
          page:0,
          list:[]
        },
        'new':{
          page:0,
          list:[]
        },
        'sell':{
          page:0,
          list:[]
        }
      },
      currentGoodsType:'pop',
      showBackTopIcon:false,
      tabControlOffSetTop:0,
      isTabFixed:false,
      //用于记录从home组件切换到其他界面之前，better-scroll滚动了的高度
      saveScrollY:0
    }
  },
  computed: {
    showGoods(){
      return this.goods[this.currentGoodsType].list
    }
  },
  created() {
    //请求多个数据
    this.loadHomemultidata()
    //请求首页的商品数据
    this.loadHomeGoods('sell')
    this.loadHomeGoods('new')
    this.loadHomeGoods('pop')
  },
  mounted() {
    let refresh = debounce(this.$refs.Scroll.refresh,100)

     //监听gooditem的图片加载
    this.$bus.$on('itemImgLoad',() => {
       refresh()
    })

  },
  activated() {
    this.$refs.Scroll.refresh()
    this.$refs.Scroll.scrollTop(0,this.saveScrollY,0)
  },
  deactivated() {
    this.saveScrollY = this.$refs.Scroll.getScrollY()
  },
  methods: {
    /* 事件监听相关的方法*/
    changeGoods(index){
      switch(index){
        case 0 :
          this.currentGoodsType = 'pop'
          break
        case 1 :
          this.currentGoodsType = 'new'
          break
        case 2 :
          this.currentGoodsType = 'sell'
          break

      }
      this.$refs.tabcontrol1.currentIndex = index
      this.$refs.tabcontrol2.currentIndex = index
    },
    //轮播图图片加载的监听
    swiperImgLoad(){
      this.tabControlOffSetTop = this.$refs.tabcontrol2.$el.offsetTop
    },
    BackTopclick(){
      this.$refs.Scroll.scrollTop(0,0)
    },
    scroll(position){
      this.showBackTopIcon = (-position.y) > 800 ? true : false
      this.isTabFixed = (-position.y) > this.tabControlOffSetTop ? true : false
    },
    // 下拉刷新调用的方法
    loadMore(){
      this.loadHomeGoods(this.currentGoodsType)
    },


    /*网络请求相关的方法*/
    loadHomemultidata(){
      getHomemultidata().then( res => {
      this.banner = res.data.banner.list
      this.recommend = res.data.recommend.list
    })
    },
    loadHomeGoods(type){
      let page = this.goods[type].page + 1;
      getHomeGoods(type,page).then( res => {
        //将获取到的数据保存到对应的list数组中
        this.goods[type].page += 1
        this.goods[type].list.push(...res.data.list)
        this.$refs.Scroll.finishPullUp()
      })
    }
  },
}
</script>

<style scoped>
  .home{
    /* padding-top: 44px; */
    background-color: white;
  }
  .home-navbar{
    /* 在使用浏览器原生滚动时，为了不让导航栏跟随滚动 */
    /* position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9; */
    color: white;
  }
  .tabcontrol1{
    position: relative;
    z-index: 9;
  }
  /* 当使用了better-scroll组件之后,position:sticky将不再生效*/
  .tabcontrol{
    background-color: white;
  }
  /*为better-scroll组件设置固定高度*/
   /* 1. */
  /* .content{
    height: calc( 100vh - 93px);
    overflow: hidden;
  } */

  /*  2.  */
  .content{
    position: absolute;
    right: 0;
    left: 0;
    top:44px;
    bottom: 49px;
    z-index: -2;
  }
</style>
