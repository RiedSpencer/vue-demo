/**
 * Created by Administrator on 2017/8/18.
 */
//vuex核心,主要是各种action方法
import * as  types from './mutations'
import Vue from 'vue'

export const nav = ({commit},type) =>{

    $(".nav li").removeClass("clicked_nav");
    $(".nav ."+type).addClass("clicked_nav");

    Vue.http.jsonp('http://www.xxx.com/fun.php',

        {
            params:{
                type:'nav',
                navtype:type
            },

            jsonp:'callback'

        }).then(function (res) {

        commit(types.GET_WEBS,{webarr:res.body.data,type:type})

    },function (res) {
        alert("网络有误");
    });
}


