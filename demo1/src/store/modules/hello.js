/**
 * Created by Administrator on 2017/8/21.
 */
//Login组件
import data from '../../api/data'
import * as types from '../mutations'

const state = {
    navs:[],
    navban:false
}

//getters
const getters = {
    navarr: state => state.navs,
    navban: state => state.navban

}

//actions
const actions = {
    getNavs({ commit }){
        commit(types.GET_NAVS)
    }


}

//mutations
const mutations = {
    [types.GET_NAVS] (state){
        state.navs = data.navs
    },

    [types.GET_WEBS] (state, {webarr,type}){
        state.navban = true
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}