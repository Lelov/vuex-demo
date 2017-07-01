import Vue from 'vue'
import Vuex from 'vuex'
// 引入模块的模板
import Hello from './modules/hello'
// 注册vuex
Vue.use(Vuex)
// 导出 Store 实例
export default new Vuex.Store({
  modules: {
    Hello
  }
  // 还可以添加公告的actions,等
});
