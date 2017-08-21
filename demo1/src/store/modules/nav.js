/**
 * Created by Administrator on 2017/8/21.
 */

//Login组件
import data from '../../api/data'
import * as types from '../mutations'

const state = {
    navtype:'',
    webs:[]
}

//getters
const getters = {

    webarr : state => state.webs,
    navtype : state => state.navtype

}

//actions
const actions = {
    getWebs({ commit }){
        commit(types.GET_WEBS)
    },

    addweb({commit,state},webarr){
        commit(types.ADD_WEB,{webarr:webarr})
    }


}

//mutations
const mutations = {
    [types.GET_WEBS] (state,{webarr,type}){
        state.webs = webarr
        state.navtype = type
    },

    [types.ADD_WEB](state,{webarr}){
        state.webs = webarr
    }

}

export default {
    state,
    getters,
    actions,
    mutations
}