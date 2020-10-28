// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/'

Vue.config.productionTip = false;
// import './mock/'
import './css/base.css'
import './js/jquery.min.js'
import './js/bootstrap/js/bootstrap'
import './js/bootstrap/css/bootstrap.min.css'
import './css/fonts/iconfont.css'
import './css/animation.css'
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store, // 映射配置后 所有组件都有一个$store对象
    components: {
        App
    },
    template: '<App/>',

})