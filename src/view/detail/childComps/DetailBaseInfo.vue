<template>
  <div class="base-info" v-if="goods !== null">
    <div class="info-title">
      {{goods.title}}
    </div>
    <div class="info-price">
      <span class="n-price">{{goods.newPrice}}</span>
      <span class="o-price">{{goods.oldPrice}}</span>
      <span v-if="goods.discount" class="discount" :style="{'backgroundColor':goods.discountBgColor}">{{goods.discount}}</span>
    </div>
    <div class="info-other">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.services[goods.services.length-1].name}}</span>
    </div>
    <div class="info-service">
      <span class="info-service-item" v-for="index in goods.services.length-1" :key="index">
        <img :src="goods.services[index-1].icon" alt="">
        <span>{{goods.services[index-1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name:"DetailBaseInfo",
  props:{
    goods:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  mounted() {
  },
}
</script>

<style scoped>
  .base-info{
    padding: 0 8px 8px 8px;
    border-bottom: 8px solid #eee;
  }
  .info-title{
    color: black;
    font-size: 20px;
  }
  .info-price{
    margin-top: 8px;
  }
  .info-price span:first-child{
    margin-left: 0;
  }
  .info-price span{
    margin-left: 5px;
  }
  .info-price .discount{
    padding: 2px;
    font-size: 10px;
    color: white;
    border-radius: 3px;
    vertical-align: text-top;
  }
  .info-price .n-price{
    font-size: 20px;
    font-weight: bold;
    color: pink;
  }
  .info-price .o-price{
    font-size: 14px;
    text-decoration:line-through;
  }
  .info-other{
    display: flex;
    font-size: 14px;
    padding: 8px 0;
    border-bottom: 1px solid #eeeeee;
  }
  .info-other span{
    flex: 1;
    text-align: center;

  }
  .info-other span:first-child{
    text-align: start;
  }
  .info-other span:last-child{
    text-align: end;
  }
  .info-service{
    margin-top: 8px;
    display: flex;
    font-size: 10px;
  }
  .info-service img{
    width: 10px;
    height: 10px;
  }
  .info-service-item{
    flex: 1;
    text-align: start;
  }
</style>
