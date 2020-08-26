// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
//引入仓库
// import store from './store'
//全局引入elementui
import ElementUI from 'element-ui'
//全局引入elementUI 样式
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/reset.css'
import './assets/css/font_6bf0ick452u/iconfont.css'
Vue.use(ElementUI)
    // 全局定义服务器地址
Vue.prototype.uploadHttp = 'http://localhost:3000'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})