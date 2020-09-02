<template>
  <div class="shop-nav-bar">
    <NavBar :bgColor="'#ff8198'">
      <div slot="center">购物车({{cartLength}})</div>
    </NavBar>
  </div>
</template>

<script>
import NavBar from 'common/navbar/navbar.vue'
import {mapGetters} from 'vuex'
export default {
  name:"ShopNarBar",
  components:{
    NavBar
  },
  computed: {
    ...mapGetters({
      cartLength:'cartLength',
      cartList:'cartList'
    })
  },
}
</script>

<style>

</style>
