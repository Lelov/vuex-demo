import Vue from 'vue'
import App from './App'
import router from './router'
// 对store进行关联
import store from './store/index'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // 将store配置到vue实例中
  store,
  render: h => h(App)
})
