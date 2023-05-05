import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/login',
        name: 'Login',
        meta: {
            title: '登录',
            keepAlive: true,
            requireAuth: false
        },
        component: () => import('@/pages/login.vue')
    },
    {
        path: '/',
        name: 'Index',
        meta: {
            title: '首页',
            keepAlive: true,
            requireAuth: true
        },
        component: () => import('@/pages/index.vue')
    },
    {
        path: '/use',
        name: 'Use',
        meta: {
            title: 'useDemo',
            keepAlive: true,
            requireAuth: true
        },
        component: () => import('@/page/vueUse.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;