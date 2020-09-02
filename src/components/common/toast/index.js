import  Toast from './toast.vue'
const obj = {}
obj.install = function(Vue){
  //创建组件构造器
  const constructor = Vue.extend(Toast)
  //new的方式，根据组件构造器创建出一个组件实例
  const toast = new constructor()
  //讲组件挂载到某个页面元素上
  toast.$mount(document.createElement('div'))
  //讲组件实例增加到body当中
  document.body.appendChild(toast.$el)
  Vue.prototype.$toast = toast
}
export default obj
