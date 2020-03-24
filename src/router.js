import Vue from 'vue'
import router from 'vue-router'
import VueRouter from 'vue-router'
Vue.use(router)

const routes = [
  { path: '/', component: () => import('./views/Home.vue') } 
]

export default new VueRouter({ routes, mode: 'history' })
