<template>
    <Swiper>
      <SwiperItem v-for="item in banner">
        <a :href="item.link">
          <img :src="item.image" alt="" @load="swiperImgLoad">
        </a>
      </SwiperItem>
    </Swiper>
</template>

<script>
import {Swiper,SwiperItem} from 'components/common/swiper/index.js'

export default {
  name:'homeSwiper',
  props:{
    banner:{
      type:Array,
      default(){
        return []
      }
    }
  },
  components:{
    Swiper,
    SwiperItem
  },
  methods: {
    swiperImgLoad(){
      this.$emit('swiperImgLoad',"轮播图加载完成")
    }
  },
}
</script>

<style>

</style>
