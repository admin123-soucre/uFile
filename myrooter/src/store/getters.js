export default {

    //返回菜单列表
    get_MenuList(state) {
        return state.menuList
    },

    // 返回角色列表
    get_RoleList(state) {
        return state.roleList
    },

    //返回管理员列表
    get_UserList(state) {
        return state.userList
    },

    //返回商品分类列表
    get_CateList(state) {
        return state.cateList
    },

    //返回商品规格列表
    get_SpecsList(state) {
        return state.specsList
    },

    //返回商品管理列表
    get_GoodsList(state) {
        return state.goodsList
    },

    //返回会员管理列表
    get_MemberList(state) {
        return state.memberList
    },

    //返回轮播图管理列表
    get_BannerList(state) {
        return state.bannerList
    },

    //返回秒杀管理列表
    get_SeckList(state) {
        return state.seckList
    }
}