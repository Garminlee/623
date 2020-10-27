import Vue from 'vue'
import Router from 'vue-router'
import About from '../views/About.vue'
import Home from '../views/Home.vue'
import Message from '../views/Message.vue'
import News from '../views/News.vue'
import Content from '../views/Content.vue'

Vue.use(Router)

export default new Router({
    // n 个路由
    routes: [{
            path: '/about',
            component: About,
        },
        {
            path: '/home',
            component: Home,
            children: [{
                    path: 'msg',
                    component: Message,
                    children: [{
                        path: '/home/msg/content/:id',
                        component: Content
                    }]
                },
                {
                    path: 'news',
                    component: News
                },
                {
                    path: '',
                    redirect: 'news'
                }
            ]
        },
        {
            path: '/',
            redirect: '/about'
        }
    ]
})