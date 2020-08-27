<template>
   <!-- 这里的类名不要是swiper不然会跟Swiper组件中的实现代码有冲突 -->
  <Swiper class="swiper-box">
    <SwiperItem v-for="item in topImages">
      <img :src="item" alt="">
    </SwiperItem>
  </Swiper>
</template>

<script>
import {Swiper,SwiperItem} from 'common/swiper/index.js'
export default {
  name:'DetailSwiper',
  props:{
    topImages:{
      type:Array,
      default:[]
    }
  },
  components:{
    Swiper,
    SwiperItem
  }
}
</script>

<style scoped>
  .swiper-box{
    height: 300px;
    overflow: hidden;
  }
</style>
