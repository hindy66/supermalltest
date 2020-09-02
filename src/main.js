import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import toast from 'common/toast/index.js'
import FastClick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'
Vue.config.productionTip = false
//安装toast插件
Vue.use(toast)
//安装vue-lazyload插件
Vue.use(VueLazyLoad)
//附加fastclick插件
FastClick.attach(document.body)
Vue.prototype.$bus = new Vue()
new Vue({
  render: h => h(App),
  router,
  store,
  toast
}).$mount('#app')
