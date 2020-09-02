<template>
  <div class="box nav-bar" :style="backgroundcolor">
      <div class="nav-left"><slot name="left"></slot></div>
      <div class="nav-center"><slot name="center"></slot></div>
      <div class="nav-right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name:'navbar',
  computed:{
    backgroundcolor(){
      return {'background-color':this.bgColor}
    }
  },
  props:{
    bgColor:{
      type:String,
      defalut:'pink'
    }
  }
}
</script>

<style scoped>
  .box{
    height: 44px;
    line-height: 44px;
    text-align: center;
    /* background-color: lightsalmon; */
    display: flex;
  }
  div.nav-left,
  div.nav-right{
    width: 60px;
  }

  div.nav-center{
    flex:1;
  }


</style>
