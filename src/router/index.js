import Vue from 'vue'
import VueRouter from 'vue-router'
/**
 * 官方 component: () => import('../views/login/Login')
 * webpack懒加载  component: r => require.ensure([], () => r(require('../views/login/Login')), 'Login'),
 * import加载所有 import Login from '../views/login/Login'
 */

 const User = () => import('../views/syscfg/userModule/user.vue')
 const User2 = () => import('../views/syscfg/userModule/user2.vue')
 const Priority = () => import('../views/syscfg/priority/priority.vue')
 const Summary = () => import('../views/Summary.vue')
Vue.use(VueRouter)

const routes = [
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/login/Login'),
        meta: {
            keepAlive: false,
            title: '登录'
        }
    },
    {
        path: '*',//输错路由前往404
        redirect: '/404',
        meta: {
            keepAlive: false,
            title: '404'
        }
    },
    {
        path: '/404',
        name: 'notFound',
        component: () => import('../views/error/NotFound'),
        meta: {
            keepAlive: false,
            title: '404'
        }
    },
    {
        path: '',
        name: 'home',
        redirect: '/summary',
        component: () => import('../views/home/Index'),
        meta: {
            keepAlive: false,
            title: '首页'
        },
        children: [
            {
                path: '/summary',
                name: 'summary',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: Summary,
                meta: {//缓存、路由元信息、元字段
                    keepAlive: false,
                    title: '概述',
                    //requiresAuth: true
                }
            },
            // {
            //     path: '/good-list',
            //     name: 'goodList',
            //     component: () => import('../views/good-list/GoodList'),
            //     meta: {
            //         keepAlive: false,
            //         title: '商品列表'
            //     },
            //     children: []
            // },
            // {
            //     path: '/good-list/good-detail',
            //     name: 'goodDetail',
            //     component: () => import('../views/good-list/GoodDetail'),
            //     meta: {
            //         keepAlive: false,
            //         title: '商品详情',
            //         parentPath: '/good-list',
            //         parentTitle: '商品列表'
            //     }
            // },
            {
                path: '/user',
                name: 'user',
                component: User,
                meta: {
                    keepAlive: false,
                    title: '文档'
                }
            },
            {
                path: '/user2',
                name: 'user2',
                component: User2,
                meta: {
                    keepAlive: false,
                    title: '文档'
                }
            },
            {
                path: '/priority',
                name: 'priority',
                component: Priority,
                meta: {
                    keepAlive: false,
                    title: '文档'
                }
            },
        ]
    }
]

const router = new VueRouter({
    mode: 'history', // 去除默认的hash模式下,url会带有一个#
    base: process.env.BASE_URL,
    routes
})
export default router
