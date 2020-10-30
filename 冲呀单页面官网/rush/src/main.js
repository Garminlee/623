// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

import './js/swiper.js'
import './js/jquery.min.js'
import './js/bootstrap.min.js'
import './js/index.js'

import '../static/css/swiper.css'
import '../static/css/bootstrap.min.css'
import '../static/css/index.css'


/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})