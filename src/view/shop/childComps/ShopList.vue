<template>
  <div class="shop-list">
    <Scroll class="content" :probeType="3" ref="ShopScroll">
      <ShopListItem v-for="(item,index) in cartList" :product="item"></ShopListItem>
    </Scroll>
  </div>
</template>

<script>
import Scroll from 'common/scroll/scroll.vue'
import ShopListItem from './ShopListItem'
import {mapGetters} from 'vuex'
export default {
  name:"ShopList",
  components:{
    Scroll,
    ShopListItem
  },
  computed: {
   ...mapGetters([
     'cartList'
   ])
  },
  activated() {
    this.$refs.ShopScroll.refresh()
  },
}
</script>

<style scoped>
  .shop-list{
    height: calc(100% - 44px - 49px - 40px);
    overflow: hidden;
  }
  .content{
    height: 100%;
  }
</style>
