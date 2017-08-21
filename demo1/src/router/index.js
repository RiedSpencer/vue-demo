import Vue from 'vue'
import Source from 'vue-resource'
import Router from 'vue-router'
import Vuex from 'vuex'

import Hello from '@/components/Hello'
import Login from '@/components/Login'
import Nav from '@/components/Nav'
import Tip from '@/components/Tip'
import Notfound from '@/components/Notfound'


import '@/assets/font/iconfont.css'
import '@/assets/js/jquery.min.js'

Vue.use(Source)
Vue.use(Router)
Vue.use(Vuex)

export default new Router({
    mode:'history',
    routes: [
        {
            path: '/',
            redirect: {
                name:'Hello'
            }
        },


        {
            path: '/login',
            name: 'login',
            component: Login,
            children:[
                {
                    path:'/tip',
                    name:'Tip',
                    component:Tip

                }
            ]
        },

        {
            path: '/hello',
            name: 'Hello',
            component: Hello
        },

        {
            path: '/nav',
            name: '/Nav',
            component: Nav
        },

        {
            path: '*',
            name: '/Notfound',
            component: Notfound
        }



    ]
})
