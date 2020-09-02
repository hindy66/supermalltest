<template>
  <div class="shop-list-item">
    <div class="check">
      <CheckButton @click.native="checkboxClick" :isChecked="product.checked"></CheckButton>
    </div>
    <div class="product-img">
      <img :src="product.img" alt="">
    </div>
    <div class="product-info">
      <div class="product-title">{{product.title}}</div>
      <div class="product-desc">{{product.desc}}</div>
      <div class="info-bottom">
        <div class="product-price">￥{{product.price}}</div>
        <div class="product-count">×{{product.count}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from 'components/content/checkbox/checkbox.vue'
export default {
  name:"ShopListItem",
  components:{
    CheckButton
  },
  props:{
    product:{
      type:Object,
      default:{}
    }
  },
  methods: {
    checkboxClick(){
      this.product.checked = !this.product.checked
    }
  },
  activated() {

  },
}
</script>

<style scoped>
  .shop-list-item{
    display: flex;
    justify-content: space-around;
    padding: 8px 2px;
    height: 120px;
    color: black;
    border-bottom: 1px solid #bbb;
  }
  .check{
    width: 20px;
    margin-right: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .product-img{
    height: 100%;
    background-color: lightcoral;
  }
  .product-img img{
    height: 100%;
    width: 80px;
    border-radius: 5px;
  }
  .product-info{
    padding:0 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

  }
  .product-info .product-title,
  .product-info .product-desc{
    width: 200px;
    white-space: nowrap;
    text-overflow:ellipsis;
    overflow: hidden;
  }

  .product-info .product-title{
    font-weight: bold;
  }
  .product-info .product-desc{
     font-size: 14px;
  }
  .info-bottom{
    display: flex;
    justify-content: space-between;
  }
  .info-bottom .product-price{
    color: #f40;
  }
  .info-bottom .product-count{
    float: right;
  }
</style>
