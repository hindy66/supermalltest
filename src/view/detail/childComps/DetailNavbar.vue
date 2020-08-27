<template>
  <NavBar>
    <span slot="left" class="lefticon" @click="backClick">
      <img src="~asset/img/navbar/back.svg" alt="">
    </span>
    <div slot="center" class="center-box">
      <div class="center-item" v-for="(item,index) in titles" :class="{'active': index == currentIndex}" @click="centerItemClick(index)">
        {{item}}
      </div>
    </div>
  </NavBar>
</template>

<script>
import NavBar from 'common/navbar/navbar.vue'
export default {
  name:'DetailNavBar',
  data() {
    return {
      titles:['商品','参数','评论','推荐'],
      currentIndex:0
    }
  },
  components:{
    NavBar
  },
  methods: {
    centerItemClick(index){
      this.currentIndex = index
    },
    backClick(){
      this.$router.back()
    }
  },
}
</script>

<style scoped>
  .center-box{
    display: flex;
  }
  .center-item{
    flex: 1;
    font-size: 15px;
  }
  .center-item.active{
    color: pink;
  }
  .lefticon{
    line-height: 44px;
  }
  .lefticon img {
    width: 20px;
    height: 20px;
    vertical-align: text-bottom;
  }
</style>
