<template>
  <div class="goodlist-item" @click="itemclick">
    <div class="image">
      <img v-lazy="showImg" alt="" @load="imgOnLoad">
    </div>
    <div class="intro">
        <p class="title">{{gooditem.title}}</p>
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
  computed: {
    showImg(){
      return  this.gooditem.show ? this.gooditem.show.img : this.gooditem.image
    }
  },
  methods: {
    imgOnLoad(){
      if(this.$route.path.indexOf('/home') !== -1){
        this.$bus.$emit('homeItemImgLoad')
      }
      if(this.$route.path.indexOf('/detail') !== -1){
        this.$bus.$emit('detailItemImgLoad')
      }
      // this.$store.state.betterScroll.refresh()
    },
    itemclick(){
      if(this.gooditem.iid)
      {
        this.$router.push({
          path:"/detail",
          query:{
            id:this.gooditem.iid
          }
        })
      }
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
    /* margin-bottom: 5px; */
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
