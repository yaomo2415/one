import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login'
import Home from '../components/Home'

Vue.use(VueRouter)

const routes = [{
  path: '/login',
  component: Login
}, {
  path: '/home',
  component: Home
}
]

const router = new VueRouter({
  routes
})
router.beforeEach((to, from, next) => {
  // to 将要访问的页面
  // next 放行
  if (to.path === '/login') return next()
  const token = window.sessionStorage.getItem('token')
  // 重定向
  if (!token) return next('/login')
  return next()
})
export default router
