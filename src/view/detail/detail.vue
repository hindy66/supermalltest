<template>
  <div class="detail">
    <DetailNavBar class="navbar" @navBarItemClick="BarItemClick" ref="detailNavbar"></DetailNavBar>
    <Scroll class="content" ref="detailScroll" :probeType="3" @scroll="scroll">
      <DetailSwiper :topImages="topImages" class="detail-swiper"></DetailSwiper>
      <DetailBaseInfo :goods="goods" class="detail-baseInfo"></DetailBaseInfo>
      <DetailShopInfo :shop="shop" class="detail-shop-info"></DetailShopInfo>
      <DetailGoodsInfo :detailInfo="detailInfo"class="detail-goods-info"></DetailGoodsInfo>
      <DetailParamInfo :paramInfo="paramInfo"class="detail-param-info" ref="param"></DetailParamInfo>
      <DetailCommentInfo :commentInfo="commendInfo" ref="comment"></DetailCommentInfo>
      <RecommendGoodsList :goods="recommend" ref="recommend"></RecommendGoodsList>
    </Scroll>
    <DetailBottomBar class="detail-bottom-bar" @addCart="addToCart"></DetailBottomBar>
    <BackTop @click.native="BackTopclick" v-show="showBackTopIcon"></BackTop>
  </div>

</template>

<script>

import DetailNavBar from './childComps/DetailNavbar.vue'
import DetailSwiper from './childComps/DetailSwiper.vue'
import DetailBaseInfo from './childComps/DetailBaseInfo.vue'
import DetailShopInfo from './childComps/DetailShopInfo.vue'
import DetailGoodsInfo from './childComps/DetailGoodsInfo.vue'
import DetailParamInfo from './childComps/DetailParamsInfo.vue'
import DetailCommentInfo from './childComps/DetailCommentInfo.vue'
import RecommendGoodsList from 'components/content/goods/goodlist.vue'
import Scroll from 'common/scroll/scroll.vue'
import DetailBottomBar from './childComps/DetailBottomBar'
import BackTop from 'components/common/backtop/backtop.vue'
import Toast from 'common/toast/toast'


import {getDetail,DetailGoods,ShopInfo,GoodsParam,getRecommend} from 'network/detail.js'
import {debounce} from 'common/utils/index.js'
export default {
  name:"detail",
  data() {
    return {
      id:0,
      topImages:[],
      goods:null,
      shop:{},
      detailInfo:{},
      paramInfo:{},
      commendInfo:{},
      recommend:[],
      ItemLoadListener:null,
      themeTopsY:[],
      getThemeTopsY:null,
      currentNavIndex:0,
      showBackTopIcon:false,
      message:'',
      showToast:false,
    }
  },
  created(){
    //创建获取各组件offsetTop的debounce函数
    this.getThemeTopsY = debounce(() => {
      this.themeTopsY = []
      this.themeTopsY.push(0)
      this.themeTopsY.push(this.$refs.param.$el.offsetTop-44)
      this.themeTopsY.push(this.$refs.comment.$el.offsetTop-44)
      this.themeTopsY.push(this.$refs.recommend.$el.offsetTop-44)
      this.themeTopsY.push(Number.MAX_VALUE)
    },300)
    this.getItemId()
    //请求页面数据
    this.initDetail(this.id)
    //请求推荐数据
    getRecommend().then(res => {
      this.recommend = res.data.list
    })
  },
  activated() {
    this.getItemId()
  },
  mounted() {
    //接收防抖函数
    let refresh = debounce(this.$refs.detailScroll.refresh,300)
    this.ItemLoadListener = () =>{
      refresh()
      this.getThemeTopsY()
    }
    this.$bus.$on('detailItemImgLoad',() => {
      this.ItemLoadListener()
      })
  },
  destroyed() {
    this.$bus.$off('detailItemImgLoad',this.ItemLoadListener)
  },
  components:{
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    RecommendGoodsList,
    Scroll,
    DetailBottomBar,
    BackTop,
    Toast
  },
  methods: {
    getItemId(){
      this.id = this.$route.query.id
    },
//事件监听相关
    //对子组件，顶部导航栏的点击事件的监听
    BarItemClick(index){
      //注意参数二要是负数
      this.$refs.detailScroll.scrollTo(0,-this.themeTopsY[index],100)
    },
    BackTopclick(){
      this.$refs.detailScroll.scrollTo(0,0,100)
    },
    //对子组件better-scroll的滚动监听
    scroll(position){
      let positionY= -position.y
      let length = this.themeTopsY.length
      for(var i = 0 ; i < length-1 ; i++){
        if( this.currentNavIndex !== i && this.themeTopsY[i] <= positionY && positionY < this.themeTopsY[i+1] ){
          this.currentNavIndex = i
          this.$refs.detailNavbar.currentIndex = this.currentNavIndex
        }
      }
      //回到顶部组件的显示和隐藏
      if(positionY > 1000){
        this.showBackTopIcon = true
      }else{
        this.showBackTopIcon = false
      }
    },
    //对底部导航栏点击加入购物车的监听
    addToCart(){
      //获取购物车需要展示的信息
      const product = {}
      product.img = this.topImages[0],
      product.title = this.goods.title
      product.desc = this.goods.desc
      product.price = this.goods.realPrice
      product.iid = this.id
      //改变vuex中的cartList
      this.$store.dispatch("addCart",product).then(res => {
        //调用插件式封装的toast组件
        this.$toast.show(res,1500)
      })
    },
//网络请求相关
    initDetail(id){
      getDetail(this.id).then(res => {
        const data = res.result
        //获得轮播图图片
        this.topImages = data.itemInfo.topImages
        //获取详情页中的详细数据
        this.goods = new DetailGoods(data.itemInfo,data.columns,data.shopInfo.services)
        //获取商家信息
        this.shop = new ShopInfo(data.shopInfo)
        //获取商家信息下面的商品详情信息
        this.detailInfo = data.detailInfo
        //获取商品参数信息
        this.paramInfo = new GoodsParam(data.itemParams.info,data.itemParams.rule)
        //获取评论信息
        if(data.rate.cRate !== 0){
          this.commendInfo = data.rate.list[0]
        }
      })
    }
  },
}
</script>

<style scoped>
  .detail{
    height: 100vh;
    position: relative;
    z-index: 12;
    background-color: white;
  }
  .detail-swiper,
  .detail-baseInfo,
  .detail-shop-info,
  .detail-goods-info,
  .detail-param-info{
    background-color: white;
  }

  .navbar{
    position: relative;
    z-index: 9;
    background-color: white;
  }
  .content{
    background-color: white;
    height: calc(100% - 44px - 49px);
    overflow: hidden;
  }
  .detail-bottom-bar{
    position:relative;
    bottom:0;
    z-index:9;
  }
</style>
