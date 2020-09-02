export default {
  updateBetterScroll(state,payload) {
    state.betterScroll = payload.bs
  },
  addToCart(state,payload){
    state.cartList.push(payload)
  },
  addCount(state,payload){
    payload.count++
  },
  clearTheCart(state,payload){
    state.cartList.length = 0
  }

}
