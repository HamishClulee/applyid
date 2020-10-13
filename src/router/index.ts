import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

const Home = () => import('../views/Home.vue')
const Topics = () => import('../views//Topics.vue')
const Notfound = () => import('../views/notfound.vue')

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
    {
        path: '/',
        name: 'Users',
        component: Home,
        meta: {
            placeholder: 'Enter a github user name...',
        },
    },
    {
        path: '/topics',
        name: 'Topics',
        component: Topics,
        meta: {
            placeholder: 'Enter a github topic name...',
        },
    },
    {
        path: '*',
        name: 'notfound',
        component: Notfound,
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
})

export default router
