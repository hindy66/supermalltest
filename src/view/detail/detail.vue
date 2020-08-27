<template>
  <div class="detail">
    <DetailNavBar class="navbar"></DetailNavBar>
    <Scroll class="content" ref="detailScroll">
      <DetailSwiper :topImages="topImages"></DetailSwiper>
      <DetailBaseInfo :goods="goods"></DetailBaseInfo>
      <DetailShopInfo :shop="shop"></DetailShopInfo>
      <DetailGoodsInfo :detailInfo="detailInfo" ></DetailGoodsInfo>
    </Scroll>
  </div>

</template>

<script>
import DetailNavBar from './childComps/DetailNavbar.vue'
import DetailSwiper from './childComps/DetailSwiper.vue'
import DetailBaseInfo from './childComps/DetailBaseInfo.vue'
import DetailShopInfo from './childComps/DetailShopInfo.vue'
import DetailGoodsInfo from './childComps/DetailGoodsInfo.vue'
import Scroll from 'common/scroll/scroll.vue'

import {getDetail,DetailGoods,ShopInfo} from 'network/detail.js'
import {debounce} from 'common/utils/index.js'
export default {
  name:"detail",
  data() {
    return {
      id:0,
      topImages:null,
      goods:null,
      shop:null,
      detailInfo:{},
      refresh:null
    }
  },
  created(){
    this.getItemId()
    //请求页面数据
    this.initDetail(this.id)
  },
  activated() {
    this.getItemId()
  },
  mounted() {
    //接收防抖函数
    let refresh = debounce(this.$refs.detailScroll.refresh,800)
    this.$bus.$on('itemLoad',() => {
      refresh()
    })
  },
  components:{
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    Scroll
  },
  methods: {
    getItemId(){
      this.id = this.$route.query.id
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
      })
    }
  },
}
</script>

<style scoped>
  .detail{
    height: 100vh;
    position: relative;
    z-index: 10;
    background: white;
  }
  .navbar{
    position: relative;
    z-index: 9;
    background-color: white;
  }
  .content{
    height: calc(100% - 44px);
  }
</style>
