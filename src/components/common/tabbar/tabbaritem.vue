<template>
    <div class="tab-bar-item" @click="itemclick">
      <div  v-if="!isActive"><slot name="item-icon"></slot></div>
      <div v-else><slot name="item-icon-active"></slot></div>
      <div :style="textColor"><slot name="item-text" ></slot></div>
        <!-- <img src="../../assets/img/tabbar/first.png" alt="" slot="item-icon">
        <div slot="item-text">首页</div> -->
    </div>
</template>

<script>
export default {
  name:"tabbaritem",
  props:{
    path:String,
    activeColor:String
  },
  data () {
    return {

    }
  },
  computed: {
    isActive(){
      return this.$route.path.indexOf(this.path) != -1
    },
    textColor(){
      return this.isActive? {color:this.activeColor} : {}
    }
  },
  methods: {
    itemclick(){
      this.$router.replace(this.path)
      // console.log(this.path)
    }
  }
}
</script>

<style>
  .tab-bar-item{
    flex: 1;
    text-align: center;
    /* tabbar常见的高度就是49px */
    height: 49px;
    font-size: 14px;
  }
  .tab-bar-item img{
    margin-top: 3px;
    height: 20px;
    width: 20px;
    vertical-align: middle;
  }
  .tab-bar-item img.active{
    display: none;
  }
</style>
