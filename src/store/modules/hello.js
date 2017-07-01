// 存放hello.vue的数据模型
// 数据
const state = {
  count: 0
}
// 异步操作的函数
const actions = {
  // commit 用来调用 mutations中的方法
}
// 对外暴露接口
const getters = {
  getCount: state => state.count
}
// 同步操作的函数
const mutations = {
  inc: state => state.count++,
  dec: state => state.count--
}
// 导出模板数据
export default {
  state,
  mutations,
  actions,
  getters
}
