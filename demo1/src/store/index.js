/**
 * Created by Administrator on 2017/8/18.
 */
//store/index.js
import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import hello from './modules/hello'
import nav from './modules/nav'


Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    actions,
    getters,
    modules: {
        hello,
        nav
    },
    strict: debug,
})