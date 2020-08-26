//引入核心库
import Vue from 'vue'
//引入路由插件
import Router from 'vue-router'
Vue.use(Router)
export default new Router({
    mode: 'history', //history模式
    routes: [{
            path: '/index',
            // 路由懒加载
            component: () =>
                import ('@/components/uIndex'),
            children: [{
                    path: '/home',
                    component: () =>
                        import ('@/components/views/home'),
                },
                {
                    path: '/cart',
                    component: () =>
                        import ('@/components/views/cart'),
                },
                {
                    path: '/mine',
                    component: () =>
                        import ('@/components/views/mine'),
                },
                {
                    path: '/ssub',
                    component: () =>
                        import ('@/components/views/shop_submit'),
                },
                {
                    path: '/search',
                    component: () =>
                        import ('@/components/views/shopSearch'),
                },
                // 二级路由重定向
                {
                    path: '',
                    redirect: '/home'
                }
            ]
        },
        {
            path: '/shopDatil',
            component: () =>
                import ('@/components/shopDatil'),
        },
        {
            path: '/missage',
            component: () =>
                import ('@/components/shopMissage'),
        },
        {
            path: '/login',
            component: () =>
                import ('@/components/login'),
        },
        {
            path: '/register',
            component: () =>
                import ('@/components/register'),
        },
        //一级路由重定向
        {
            path: '*',
            redirect: '/index'
        },

    ]
})