import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Index from '../views/Index.vue'
import About from '../views/About.vue'
import Products from '../views/Products.vue'
import News from '../views/News.vue'
import Cases from '../views/Cases.vue'
import Newsinfo from '../views/Newsinfo.vue'
import Productinfo from '../views/Productinfo.vue'
export default new Router({
    routes: [{
            path: '/',
            component: Index
        },
        {
            path: '/index',
            component: Index
        },
        {
            path: '/about',
            component: About
        },
        {
            path: '/products',
            component: Products
        },
        {
            path: '/news',
            component: News
        },
        {
            path: '/cases',
            component: Cases
        },
        {
            path: '/newsinfo/:id',
            component: Newsinfo,
            props: true
        },
        {
            path: '/productinfo/:id',
            component: Productinfo,
            props: true
        }
    ]
})