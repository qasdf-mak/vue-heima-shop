import vue from 'vue'
import vueRouter from 'vue-router'
vue.use(vueRouter)
const routes = [
    { path: '/', redirect: '/login' },
    { path: '/login', component: () => import('@/views/login/index.vue') },
    { path: '/home', component: () => import('@/views/home/index.vue') }
]

const router = new vueRouter({
    routes,
    mode: 'history'
})
router.beforeEach((to, from, next) => {
    if (to.path === '/login') return next()
    const token = sessionStorage.getItem('token')
    if (!token) return next('/login')
    next()
})
export default router