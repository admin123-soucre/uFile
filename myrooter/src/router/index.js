import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        // 一级路由
        {
            path: '/login',
            component: () =>
                import ('@/pages/login')
        },
        {
            path: '/index',
            component: () =>
                import ('@/pages/index'),
            // 二级路由
            children: [{
                    path: '/home',
                    component: () =>
                        import ('@/views/home')
                },
                {
                    path: '/menu',
                    component: () =>
                        import ('@/views/menu/index'),
                    meta: {
                        name: '菜单列表'
                    }
                },
                {
                    path: '/role',
                    component: () =>
                        import ('@/views/role/index'),
                    meta: {
                        name: '角色列表'
                    }
                },
                {
                    path: '/user',
                    component: () =>
                        import ('@/views/user/index'),
                    meta: {
                        name: '管理员列表'
                    }
                },

                {
                    path: '/shop',
                    component: () =>
                        import ('@/views/sort/index'),
                    meta: {
                        name: '商品分类列表'
                    }
                },
                {
                    path: '/specs',
                    component: () =>
                        import ('@/views/specs/index'),
                    meta: {
                        name: '商品规格列表'
                    }
                },
                {
                    path: '/goods',
                    component: () =>
                        import ('@/views/goods/index'),
                    meta: {
                        name: '商品管理列表'
                    }
                },
                {
                    path: '/member',
                    component: () =>
                        import ('@/views/member/index'),
                    meta: {
                        name: '会员管理列表'
                    }
                },
                {
                    path: '/banner',
                    component: () =>
                        import ('@/views/banner/index'),
                    meta: {
                        name: '轮播图管理列表'
                    }
                },
                {
                    path: '/seck',
                    component: () =>
                        import ('@/views/seck/index'),
                    meta: {
                        name: '秒杀活动列表'
                    }
                },
                {
                    // 二级路由重定向
                    path: '',
                    redirect: '/home'
                }
            ]
        },
        {
            // 一级路由重定向
            path: '*',
            redirect: '/index'
        }
    ]
})