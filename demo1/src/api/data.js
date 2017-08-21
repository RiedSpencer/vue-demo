/**
 * Created by Administrator on 2017/8/21.
 */
const navs = [
    {"id": 1, "icon": "icon iconfont icon-smile", "title": "Fun", "name": "fun"},
    {"id": 2, "icon": "icon iconfont icon-tieziwebapp", "title": "Tieba", "name": "tieba"},
    {"id": 3, "icon": "icon iconfont icon-shop", "title": "Shop", "name": "shop"}
]



export default {
    navs,
    //进行jsonp得到相关的数据
    getWebarrs(type){
        this.$http.jsonp('http://www.xxx.com/fun.php',

            {
                params:{
                    type:'nav',
                    navtype:type
                },

                jsonp:'callback'

            }).then(function (res) {

            return res.body.data;

        },function (res) {
            alert("网络有误");
        });

    }

}