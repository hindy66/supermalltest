<template>
  <div class="goodlist-item" @click="itemclick">
    <div class="image">
      <img :src="gooditem.show.img" alt="" @load="imgOnLoad">
    </div>
    <div class="intro">
        <div class="title">{{gooditem.title}}</div>
        <span class="price">￥{{gooditem.price}}</span>
        <span class="iconfont icon-shoucang cfav">{{gooditem.cfav}}</span>
      </div>
  </div>
</template>

<script>
export default {
  name:'goodlist-item',
  props:{
    gooditem:{
      type:Object,
      default(){
        return null
      }
    }
  },
  methods: {
    imgOnLoad(){
      this.$bus.$emit('itemImgLoad')
      // this.$store.state.betterScroll.refresh()
    },
    itemclick(){
      this.$router.push({
        path:"/detail",
        query:{
          id:this.gooditem.iid
        }
      })
    }
  },
}
</script>

<style scoped>
@import '~asset/css/iconfont/iconfont.css';
  .goodlist-item{
    width: 48%;
    position: relative;
    padding-bottom: 45px;
  }
  .goodlist-item .image{
    display: block;
  }
  .goodlist-item img{
    width: 100%;
    height: 80%;
    border-radius: 5px;
    vertical-align: middle;
  }
  .title{
    font-size: 14px;
    height: 20px;
    line-height: 20px;
    white-space: nowrap;      /*超出的空白区域不换行*/
    overflow: hidden;         /*超出隐藏*/
    text-overflow: ellipsis;
  }
  .intro{
    text-align: center;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
  }
  .intro span{
    flex: 1;
    font-size: 12px;
  }
  .intro .price{
    color: #eba3aa;
  }

</style>
