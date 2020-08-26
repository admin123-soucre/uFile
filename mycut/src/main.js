// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//引入rem.js
import './assets/js/rem'
//引入默认清除样式
import './assets/css/reset.css'
import './assets/css/public.css'
//引入图标样式
import './assets/css/font_6bf0ick452u/iconfont.css';


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})