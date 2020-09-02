<template>
  <div class="bottombar">
    <div class="check-content">
      <CheckBox :isChecked="isSelectedAll" class="checkbutton" @click.native="selectedAllClick"></CheckBox>
      <span>全选</span>
    </div>
    <div class="total-price">
      合计￥{{totalPrice}}
    </div>
    <div class="to-count" @click="countClick">
      去计算({{checkedLength}})
    </div>
  </div>
</template>

<script>
import CheckBox from 'components/content/checkbox/checkbox'
import {mapGetters} from 'vuex'
export default {
  name:"shopbottombar",
  components:{
    CheckBox
  },
  computed: {
    ...mapGetters(['cartLength','cartList']),
    totalPrice(){
      return this.cartList.filter((item) => {
        return item.checked
      }).reduce( (preval,item) => {
        return preval+ item.count * item.price
      },0).toFixed(2)
    },
    checkedLength(){
      return this.cartList.filter((item) => {
        return item.checked
      }).reduce( (preval,item) => {
        return preval + item.count
      },0)
    },
    isSelectedAll(){
      if(this.cartLength == 0){
        return false
      }
      return !(this.cartList.find(item => {
        return !item.checked
      }))
    }
  },
  methods: {
    selectedAllClick(){
      if(this.isSelectedAll){
        this.cartList.forEach((item) => {
            item.checked = false
        })
      }else{
        this.cartList.forEach((item) => {
            item.checked = true
        })
      }
    },
    countClick(){
      if(this.checkedLength == 0){
        this.$toast.show("请先选中商品!")
      }else{
        let remainCartList =this.cartList.filter((item) => {
        return !item.checked
      })
        this.$store.state.cartList = remainCartList
        this.$toast.show('已结清选中商品!')
      }
    }
  },
}
</script>

<style scoped>
  .bottombar{
    display: flex;
    align-items: center;
    height: 40px;
    position: relative;
    font-size: 16px;
    line-height: 40px;
  }
  .check-content{
    width: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 5px;
  }
  .checkbutton{
    width: 20px;
    height: 20px;
    line-height: 20px;
  }
  .total-price{
    flex: 1;
  }
  .to-count{
    background-color: #ff5777;
    width:100px;
    text-align: center;
    color: white;
  }
</style>
