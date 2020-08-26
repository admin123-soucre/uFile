export default {

    //修改state菜单列表
    REQ_MENULIST(state, payload) {
        state.menuList = payload
    },

    //修改state角色列表
    REQ_ROLELIST(state, payload) {
        state.roleList = payload
    },

    //修改state管理员列表
    REQ_USERLIST(state, payload) {
        state.userList = payload
    },

    //修改state商品分类列表
    REQ_CATELIST(state, payload) {
        state.cateList = payload
    },

    //修改state商品规格列表
    REQ_SPECSLIST(state, payload) {
        state.specsList = payload
    },

    //修改state商品管理列表
    REQ_GOODSLIST(state, payload) {
        state.goodsList = payload
    },

    //修改state会员管理列表
    REQ_MEMBERLIST(state, payload) {
        state.memberList = payload
    },

    //修改state轮播图管理列表
    REQ_BANNERLIST(state, payload) {
        state.bannerList = payload
    },

    //修改state秒杀管理列表
    REQ_SECKLIST(state, payload) {
        state.seckList = payload
    }
}