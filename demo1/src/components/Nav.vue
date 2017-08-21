<template>
<div id="nav" >

    <div class="nav-title">
        <ul>
            <li v-for="nav in webarr" @click="cont(nav.url)">
              {{ nav.key }}
            </li>
            <li @click="add">
                <i class="icon iconfont icon-add"></i>
            </li>
        </ul>
    </div>
    <iframe  src="http://neihanshequ.com/" height="1000px" width="1010px">

    </iframe>

    <div class="addbox">
        <div v-if="loginstatus" class="logined">
               <label>
                    标签：<input type="text" name="title" class="title"/>
               </label>
               <label>
                    网址：<input type="text" name="website" class="website"/>
               </label>
               <label><button type="button" @click="addnav()">添加</button></label>
        </div>
        <div v-else class="unlogin">
            <a href="" @click="loginfun">小主，请先登录思密达....</a>
        </div>
    </div>

</div>

</template>

<script>
import '@/assets/js/jquery.min.js'
import { mapGetters , mapActions } from 'vuex'

export default {
  name: 'nav',
  computed:{
        ...mapGetters({
              webarr:'webarr',
              navtype:'navtype'

        })
   },

   created(){
        this.$store.dispatch('getWebs')
   },

  data () {
    return {
        loginstatus:false
    }
  },

  methods:{

    cont:function(url){

        $("iframe").attr("src",url);

    },


    add:function(){

        if(this.$root.userData)
             this.loginstatus = true;

        $(".addbox").show();
    },

    loginfun:function(){

        this.$router.push({path:'/login'});

    },

    addnav:function(){

        var title = $(".title").val();
        var url = $(".website").val();
        var that = this;
        this.$http.jsonp('http://www.xxx.com/fun.php',

                                {
                                    params:{
                                       type:'navadd',
                                       title:title,
                                       website:url,
                                       navtype:this.navtype
                                    },

                                    jsonp:'callback'

                			        }).then(function (res) {

                                         var webarr = res.body.data;

                                         that.$store.dispatch('addweb',webarr);

                                         setTimeout(function(){
                                            $(".addbox").hide();
                                            $(".title").val("");
                                            $(".website").val("");
                                         },1000);

                                    },function (res) {
                                        alert("网络有误");
                                    });

    }

  }

}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav-title{width:150px;background-color:#e8e8e8;float:left;}
.nav-title ul{padding:0;margin:0;}
.nav-title li{text-align:center;line-height:60px;cursor:pointer}
.nav-title li:not(:first-child){border-top:solid 1px #009A61;}
.nav-title li:hover{background-color:#009A61;color:white;}
.nav-title li .iconfont{font-size:20px;}

iframe{margin-left:50px;border:solid 1px #e8e8e8;}

.addbox{position:fixed;width:500px;height:200px;border:solid 2px #009A61;left:50%;top:50%;margin:-100px 0 0 -250px ;background-color:rgba(0,0,0,.8);display:none;color:white;}
.addbox .unlogin{text-align:center;font-size:22px;line-height:200px;}
a{color:white;text-decoration:none;}
.addbox .logined{text-align:center;padding-top:30px;}
.addbox .logined label{display:block;margin-top:20px;}
input{width:200px;}
button{width:260px;background-color:#009A61;border:solid 1px #009A61;height:25px;color:white}
</style>
