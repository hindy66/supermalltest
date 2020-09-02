<template>
  <div class="detail-bottom-bar">
    <div class="left-list">
      <div v-for="(item,index) in itemContent" class="lefitem">
        <i  class="iconfont" :class="itemContent[index].icon"></i>
        <span>{{itemContent[index].text}}</span>
      </div>
    </div>
    <div class="btn1" @click="addCart">
        加入购物车
    </div>
    <div class="btn2">
        购买
    </div>
  </div>
</template>

<script>
export default {
  name:"detail-bottom-bar",
  data() {
    return {
      itemContent:[
        {
          icon:"icon-kefu",
          text:'客服'
        },
        {
          icon:"icon-shoucang",
          text:'收藏'
        },
        {
          icon:"icon-dianpu",
          text:'店铺'
        }
      ]
    }
  },
  methods: {
    addCart(){
      this.$emit("addCart")
    }
  },
}
</script>

<style scoped>
  .detail-bottom-bar{
    text-align: center;
    line-height: 49px;
    height: 49px;
    background-color: tomato;
    display: flex;
  }
  .detail-bottom-bar>div:first-child{
    flex: 2;
  }
  .detail-bottom-bar>div{
    flex: 1;
  }
  .left-list{
    display: flex;
    align-content: space-around;
    background: white;
  }
  .left-list .lefitem{
    flex: 1;
    line-height: 100%;
  }
  .left-list .lefitem>i{
    font-size: 18px;
    width: 100%;
    display: inline-block;
    margin-bottom: 10px;
  }

  .detail-bottom-bar .btn1{
    background-color: yellow;
  }
  .detail-bottom-bar .btn2{
    color: white;
    background-color: #ff5777;
  }
</style>
