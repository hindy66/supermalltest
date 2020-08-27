//防抖动函数
export  function debounce(func,delay){
  let timer = null
  return function(...args){
    if(timer){
      window.clearTimeout(timer)
    }
    timer = window.setTimeout( (args) => {
      func.apply(this,args)
    },delay)
  }
}
