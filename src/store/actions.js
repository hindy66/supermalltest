export default {
  addCart(context,payload){
    return new Promise((resolve,reject) => {
      let oldProduct = null
      //查找之前的数组中是否有该商品
      oldProduct = context.state.cartList.find((item) => {
        return item.iid == payload.iid
      })
      if(oldProduct){
        context.commit('addCount',oldProduct)
        resolve('当前商品数量加1!')
      }
      else{
        payload.count = 1
        payload.checked = true
        context.commit("addToCart",payload)
        resolve('添加新的商品')
      }
    })
  },
  clearCart(context,payload){
    context.commit('clearTheCart')
  }
}
