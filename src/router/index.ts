import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

import { USER_MODE, TOPIC_MODE } from '../constants'

const Home = () => import('../views/Home.vue')
const Topics = () => import('../views//Topics.vue')
const Notfound = () => import('../views/notfound.vue')

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
    {
        path: '/',
        name: USER_MODE,
        component: Home,
        meta: {
            placeholder: 'Enter a github user name...',
        },
    },
    {
        path: '/topics',
        name: TOPIC_MODE,
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
